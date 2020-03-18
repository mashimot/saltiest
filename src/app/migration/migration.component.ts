import { Component, OnInit } from '@angular/core';
import { SnakeCaseToCamelCasePipe } from '../shared/pipes/snake-case-to-camel-case.pipe';
import { platform } from 'os';

@Component({
	selector: 'app-migration',
	templateUrl: './migration.component.html',
	styleUrls: ['./migration.component.css'],
	providers: [SnakeCaseToCamelCasePipe]
})
export class MigrationComponent implements OnInit {
	schemas: any;
	schemaCreate: string;
	migrations: Array<{
		tableName: string,
		laravel: string
	}>;
	mysql: {
		[key:string]: string
	} = {
		INT: `integer('#columnName')#unsigned`,
		BIGINT: `bigInteger('#columnName')#unsigned`,
		BLOB: `binary`,
		BOOLEAN: `boolean`,
		CHAR: `char('#columnName', #length)`,
		DATE: `date('#columnName')`,
		DATETIME: `dateTime('#columnName')`,
		//DATETIME: dateTimeTz('created_at'),
		DECIMAL: `decimal('#columnName', #total_digits_comma_decimal_digits)#unsigned`,
		DOUBLE: `double('#columnName', #total_digits_comma_decimal_digits)`,
		ENUM: `enum('#columnName', #array)`,
		FLOAT: `float('#columnName', #total_digits_comma_decimal_digits)`,
		GEOMETRY: `geometry('#columnName')`,
		GEOMETRYCOLLECTION: `geometryCollection('#columnName')`,
		//INTEGER: increments('id'),
		INTEGER: `integer('#columnName')#unsigned`,
		IP: `ipAddress('#columnName')`,
		JSON: `json('#columnName')`,
		JSONB: `jsonb('#columnName')`,
		LINESTRING: `lineString('#columnName')`,
		LONGTEXT: `longText('#columnName')`,
		MAC: `macAddress('#columnName')`,
		MEDIUMINT: `mediumInteger('#columnName')#unsigned`,
		//MEDIUMINT: mediumInteger('votes')`,
		MEDIUMTEXT: `mediumText('#columnName')`,
		//BIGINT: morphs('taggable')`,
		//CHAR: uuidMorphs('taggable')`,
		MULTILINESTRING: `multiLineString('#columnName')`,
		MULTIPOINT: `multiPoint('#columnName')`,
		MULTIPOLYGON: `multiPolygon('#columnName')`,
		morphs: `nullableMorphs('#columnName')`,
		nullable: `nullableUuidMorphs('#columnName')`,
		timestamps: `nullableTimestamps()`,
		POINT: `point('#columnName')`,
		POLYGON: `polygon('#columnName')`,
		//rememberToken(),
		SET: `set('#columnName', #array)`,
		//SMALLINT: `smallIncrements('#columnName')#unsigned`,
		SMALLINT: `smallInteger('#columnName')#unsigned`,
		//TIMESTAMP: `softDeletes()`,
		//TIMESTAMP: softDeletesTz(),
		VARCHAR: `string('#columnName', #length)`,
		TEXT: `text('#columnName')`,
		TIME: `time('#columnName')`,
		//TIME: `timeTz('sunrise')`,
		TIMESTAMP: `timestamp('#columnName')`,
		//TIMESTAMP: timestampTz('added_on')`,
		//TIMESTAMP: timestamps()`,
		//TIMESTAMP: timestampsTz()`,
		//TINYINT: `tinyIncrements('#columnName')#unsigned`,
		TINYINT: `tinyInteger('#columnName')#unsigned`,
		UUID: `uuid('#columnName')`,
		YEAR: `year('#columnName')`
	  };

	constructor(private snakeCaseToCamelCase: SnakeCaseToCamelCasePipe) { }

	ngOnInit() {
	}

	getSchemas($schemas){
		this.schemas = $schemas;
		this.laravelMigration();
	}

	public laravelMigration(){
		this.migrations = [];
		let $table = '';
		const autoIncrement = {
			INT: `increments('#columnName')`, 
			BIGINT: `bigIncrements('#columnName')`, 
			MEDIUMINT: `mediumIncrements('#columnName')`, 
			SMALLINT: `smallIncrements('#columnName')`, 
			TINYINT: `tinyIncrements('#columnName')`, 
		};		
		this.schemas.forEach(schema => {
			let tableName = schema.name;
			let tableNameSnaked = this.snakeCaseToCamelCase.transform(tableName);
			let schemaCreate = '';
			schema.definitions.forEach(column => {
				let _values = ''; 
				let _nullable = '';
				let _unsigned = '';

				let _dataType = column.type.datatype.toUpperCase();
				let _type = this.mysql[column.type.datatype.toUpperCase()];
				_type = _type.replace(/#unsigned/g, '');
				
				if(typeof _type == 'undefined'){
					_type = `${_dataType}('#columnName')`;
				}
				if(column.options){
					if(column.options.autoincrement){
						Object.keys(autoIncrement).forEach(dataType => {
							if(_dataType == dataType){
								_type = autoIncrement[dataType];
							}
						});
					}
				}
				
				if(_type){
					_type = _type.replace(/#columnName/g, column.name);
				}

				if(column.options){
					if(column.options.nullable){
						_nullable = '->nullable()';
					}
					if(column.options.unsigned){
						_unsigned = '->unsigned()';
					}
				}

				if(column.type){
					if(column.type.values){
						_values = JSON.stringify(column.type.values);
						_type = _type.replace(/#array/g, _values);
					}
					if(column.type.length){
						if(column.type.length != ''){
							_type = _type.replace(/#length/g, column.type.length);
						}
					}
					if(column.type.decimals || column.type.digits){
						let total_digits_comma_decimal_digits = column.type.digits + ', ' + column.type.decimals;
						_type = _type.replace(/#total_digits_comma_decimal_digits/g, total_digits_comma_decimal_digits);
					}
				}

				$table += `\t$table->${_type}${_unsigned}${_nullable};\n`;
			});

			if(schema.primaryKey){
				if(schema.primaryKey.columns.length > 0){
					let pkColumns = schema.primaryKey.columns.map(i => i.column);
					$table +=  `\t$table->primary(${JSON.stringify(pkColumns)})\n`;
				}
			}
			if(schema.uniqueKeys){
				if(schema.uniqueKeys.length > 0){
					let ukColumns = [];
					schema.uniqueKeys.forEach(schemaUk =>{
						 schemaUk.columns.map(uk => ukColumns.push(uk.column));
					})
					$table += `\t$table->unique(${JSON.stringify(ukColumns)});\n`;
				}
			}			

			if(schema.foreignKeys){
				if(schema.foreignKeys.length > 0){					
					schema.foreignKeys.forEach(fk => {
						let foreign = '';
						let reference = '';							
						fk.columns.forEach(fk => {
							foreign = `foreign('${fk.column}')`;
						});
						fk.reference.columns.forEach(ref => {
							reference = `references('${ref.column}')->on('${fk.reference.table}')`;
						});
						$table += `\t$table->${foreign}->${reference}\n`;
					});
				}
			}

			schemaCreate = `
			Schema::create('${tableName}', function (Blueprint $table) {
				${$table}
			});`;
			$table = '';
			this.migrations.push({
				tableName: tableName,
				laravel: `
				<?php

				use Illuminate\Support\Facades\Schema;
				use Illuminate\Database\Schema\Blueprint;
				use Illuminate\Database\Migrations\Migration;
				
				class Create${tableNameSnaked}Table extends Migration
				{
					/**
					 * Run the migrations.
					 *
					 * @return void
					 */
					public function up()
					{
						${schemaCreate}
					}
				
					/**
					 * Reverse the migrations.
					 *
					 * @return void
					 */
					public function down()
					{
						Schema::drop('${tableName}');
					}
				}`
			});
		})
	}
}
