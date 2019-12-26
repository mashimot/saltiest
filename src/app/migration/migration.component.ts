import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-migration',
	templateUrl: './migration.component.html',
	styleUrls: ['./migration.component.css']
})
export class MigrationComponent implements OnInit {
	schemas: any;
	schemaCreate: string;
	migrations: Array<string>;
	mysql: {
		[key:string]: string
	} = {
		INT: `integer('#columnName')`,
		BIGINT: `bigInteger('#columnName')`,
		BLOB: `binary`,
		BOOLEAN: `boolean`,
		CHAR: `char('#columnName', #length)`,
		DATE: `date('#columnName')`,
		DATETIME: `dateTime('#columnName')`,
		//DATETIME: dateTimeTz('created_at'),
		DECIMAL: `decimal('#columnName', #total_digits_comma_decimal_digits)`,
		DOUBLE: `double('#columnName', #total_digits_comma_decimal_digits)`,
		ENUM: `enum('#columnName', #array)`,
		FLOAT: `float('#columnName', #total_digits_comma_decimal_digits)`,
		GEOMETRY: `geometry('#columnName')`,
		GEOMETRYCOLLECTION: `geometryCollection('#columnName')`,
		//INTEGER: increments('id'),
		INTEGER: `integer('#columnName')`,
		IP: `ipAddress('#columnName')`,
		JSON: `json('#columnName')`,
		JSONB: `jsonb('#columnName')`,
		LINESTRING: `lineString('#columnName')`,
		LONGTEXT: `longText('#columnName')`,
		MAC: `macAddress('#columnName')`,
		MEDIUMINT: `mediumIncrements('#columnName')`,
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
		SMALLINT: `smallIncrements('#columnName')`,
		//SMALLINT: smallInteger('votes')`,
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
		TINYINT: `tinyIncrements('#columnName')`,
		//TINYINT: tinyInteger('votes'),
		/*BIGINT: `unsignedBigInteger('#columnName')`,
		DECIMAL: `unsignedDecimal('#columnName', 8, 2)`,
		INTEGER: `unsignedInteger('#columnName')`,
		MEDIUMINT: `unsignedMediumInteger('#columnName')`,
		SMALLINT: `unsignedSmallInteger('#columnName')`,
		TINYINT: `unsignedTinyInteger('#columnName')`,*/
		UUID: `uuid('#columnName')`,
		YEAR: `year('#columnName')`
	  };

	constructor() { }

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
			let schemaCreate = '';
			schema.definitions.forEach(column => {
				let _values = column.type.values? `${JSON.stringify(column.type.values)}`: '';
				let _nullable = column.options.nullable? '->nullable()': ''
				let _dataType = column.type.datatype.toUpperCase();
				let _type = this.mysql[column.type.datatype.toUpperCase()];
				if(typeof _type == 'undefined'){
					_type = `${_dataType}('#columnName')`;
				}
				if(column.options.autoincrement){
					Object.keys(autoIncrement).forEach(dataType => {
						if(_dataType == dataType){
							_type = autoIncrement[dataType];
						}
					});
				}				
				if(_type){
					_type = _type.replace(/#columnName/g, column.name);
				}
				if(column.type.values){
					_type = _type.replace(/#array/g, _values);
				}
				if(column.type.length){
					if(column.type.length != '')
					_type = _type.replace(/#length/g, column.type.length);
				}
				if(column.options.unsigned){
					_type = `unsigned${_type.charAt(0).toUpperCase() + _type.slice(1)}`;
				}
				if(column.type.decimals || column.type.digits){
					let total_digits_comma_decimal_digits = column.type.digits + ', ' + column.type.decimals;
					_type = _type.replace(/#total_digits_comma_decimal_digits/g, total_digits_comma_decimal_digits);
				}

				$table += `\t$table->${_type}${_nullable};\n`;				
			});

			/*this.migrations.push( 
				[
					//`$ php artisan make:migration create_${tableName}_table --create="${tableName}"\n`,
					`Schema::create('${tableName}', function (Blueprint $table) {\n`,
					`${$table}`,
					`});\n`
				].join("")
			);*/
			schemaCreate = `
			Schema::create('${tableName}', function (Blueprint $table) {
				${$table}
			});`;
			$table = '';
			this.migrations.push(`
				<?php

				use Illuminate\Support\Facades\Schema;
				use Illuminate\Database\Schema\Blueprint;
				use Illuminate\Database\Migrations\Migration;
				
				class CreateFlightsTable extends Migration
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
			);
		})
	}
}
