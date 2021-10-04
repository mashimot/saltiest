import { Component, OnInit, Injectable } from '@angular/core';
import { SnakeCaseToCamelCasePipe } from '../shared/pipes/snake-case-to-camel-case.pipe';
import { IDefinition, IHtml } from "../_core/model";

@Injectable({
    providedIn: 'root'
})
export class Laravel {
	schema: any;
    rules: string;
    attributes: string;
    messages: string;
    tableName: string = '';
    html: IHtml;
    definition: IDefinition;
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

    constructor() { 
        this.schema = [];
    }

    setParams(d) {
        this.html = d.html;
        this.definition = d.definition;
    }

    setSchema(schema) {
        this.schema = schema;
    }

    getRules() {
        var basic = {
            radio: ['nullable'],
            checkbox: ['nullable'],
            select: ['nullable'],
            number: ['nullable', 'numeric'],
            date: ['nullable', 'date_format:"d/m/Y"'],
            text: ['nullable', 'string'],
            textarea: ['nullable', 'string']
        }
        var tag = this.html.tag.toLowerCase();
        if(typeof basic[tag] != 'undefined'){
            basic[tag][0] = this.isRequired();
            basic[tag].push(
                this.size()
            );
            var newBasic = basic[tag].filter(el => {
                return el != "" && el != null;
            });
            return [`"${this.definition.name}" => ${JSON.stringify(newBasic)}`].join(",");
		}
		
        return [`${this.definition.name} => ${JSON.stringify(basic[tag])}`].join(",");
    }

    size(){
        if(this.definition && this.definition.type && this.definition.type.length){
            var size = this.definition.type.length;
            if(size != null && size != ''){
                var list = {
                    number: `digits_between:1,${size}`,
                    date: 'max:' + size,
                    text: 'max:' + size,
                    radio: 'max:' + size,
                    checkbox: 'max:' + size,
                    select: 'max:' + size,
                    textarea: 'max:' + size,
                }            	
                return list[this.html.tag];
            }
        }
        return null;
    }
    
    get(){
		this.schema.init = {
			fillable: [],
			rules: [],
			attributes: [],
			request: []
		}
        
        if(this.schema.data.length > 0){
            this.schema.data.forEach(current => {
				this.setParams(current);
                this.schema.init.fillable.push(current.definition.name);
                this.schema.init.request.push(`"${current.definition.name}" => $request->${current.definition.name}`);
                this.schema.init.attributes.push(`'${current.definition.name}' => '${current.html.label}'`);
				this.schema.init.rules.push(this.getRules());
			});			
        }

        return {
			framework: {
				validator: this.validator(),
				controller: this.controller(),
				model: this.model(),
				migration: this.migration()
			}
        }        
	}
	
	public model() :string {
		return `
		<?php

		namespace App;
		
		use Illuminate\\Database\\Eloquent\\Model;
	 
		class ${this.schema.name} extends Model {
			protected $table      = '${this.schema.name}';
			protected $primaryKey = ${
				typeof this.schema.primary_key != 'undefined'
					? this.schema.primary_key.length > 1
						? "[" +  'this.schema.primary_key' + "]"
						: 'this.schema.primary_key[0]'
					: ''
			};
			public $incrementing  = true; 
			
			protected $fillable = [
				${this.schema.data.map(d => `'${d.definition.name}'`)}
			];
		}
		`;
	}

	public controller() :string {
		return `
		<?php

		namespace App\\Http\\Controllers;
		
		use Illuminate\\Http\\Request;
		use App\\${this.schema.name};
		use App\\Http\\Requests\\${this.schema.name}Request;

		class ${this.schema.name}Controller extends Controller
		{
			/**
			* Display a listing of the resource.
			*
			* @return \\Illuminate\\Http\\Response
			*/
			public function index()
			{
				//
				$result = ${this.schema.name}::all();

				return view('${this.schema.name}.index', compact('result'));
			}
		
			/**
			* Show the form for creating a new resource.
			*
			* @return \\Illuminate\\Http\\Response
			*/
			public function create()
			{
				//
				return view('${this.schema.name}.create');
			}
		
			/**
			* Store a newly created resource in storage.
			*
			* @param  \\Illuminate\\Http\\Request  $request
			* @return \\Illuminate\\Http\\Response
			*/
			public function store(${this.schema.name}Request $request)
			{
				//
				$r = ${this.schema.name}::create([
					${this.schema.init.request.join("\n")}
				]);

				return response()
					->route('${this.schema.name}.create')
					->json([
						'success' => true
					]);
			}
		
			/**
			* Display the specified resource.
			*
			* @param  int  $id
			* @return \\Illuminate\\Http\\Response
			*/
			public function show($id)
			{
				//
				$result = ${this.schema.name}::find($id);

				return view('${this.schema.name}.show', compact('result'));
			}
		
			/**
			* Show the form for editing the specified resource.
			*
			* @param  int  $id
			* @return \\Illuminate\\Http\\Response
			*/
			public function edit($id)
			{
				//
				$result = ${this.schema.name}::find($id);

				return view('${this.schema.name}.edit', compact('result'));
			}
		
			/**
			* Update the specified resource in storage.
			*
			* @param  \\Illuminate\\Http\\Request $request
			* @param  int  $id
			* @return \\Illuminate\\Http\\Response
			*/
			public function update(${this.schema.name}Request $request, $id)
			{
				//
				$result = ${this.schema.name}::find($id);
						->update(
							${this.schema.init.request.join("\n")}
						);
			}
		
			/**
			* Remove the specified resource from storage.
			*
			* @param  int  $id
			* @return \\Illuminate\\Http\\Response
			*/
			public function destroy($id)
			{
				//
				$result = ${this.schema.name}::find($id);
				$result->delete();
		
				return redirect()
					->route('${this.schema.name}.show', $id)
					->with('success', true);
			}
		}		
		`;
	}

	public validator() :string{
		return `
		/**
		 * Determine if the user is authorized to make this request.
		 *
		 * @return bool
		*/
		public function authorize(){
			return true;
		}
	
		public function rules(){
			$rules = [
				${this.schema.init.rules.join("\n")}
			];
		
			return $rules;
		}
	
		/**
		 * Get the validation rules that apply to the request.
		 *
		 * @return array
		 */
		public function attributes(){
			$attributes = [
				${this.schema.init.attributes.join("\n")}
			];
			return $attributes;
		}		
		`;
	}
	
	public migration(){
		let $table = [];
		const autoIncrement = {
			INT: `increments('#columnName')`, 
			BIGINT: `bigIncrements('#columnName')`, 
			MEDIUMINT: `mediumIncrements('#columnName')`, 
			SMALLINT: `smallIncrements('#columnName')`, 
			TINYINT: `tinyIncrements('#columnName')`, 
		};		
		let tableName = this.schema.name;
		let schemaCreate = '';
		$table = this.schema.data.map(item => {
			let _values = ''; 
			let _nullable = '';
			let _unsigned = '';

			let column = item.definition;
			let _dataType = column.type.datatype.toUpperCase();
			let _type = this.mysql[column.type.datatype.toUpperCase()];
			_type = _type.replace(/#unsigned/g, '');
			
			if(typeof _type == 'undefined'){
				_type = `${_dataType}('#columnName')`;
			}	

			if(column.options && column.options.autoincrement){
				Object.keys(autoIncrement).forEach(dataType => {
					if(_dataType == dataType){
						_type = autoIncrement[dataType];
					}
				});
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

			return `$table->${_type}${_unsigned}${_nullable};`;
		});

		if(this.schema.primary_key){
			if(this.schema.primary_key.length > 0){
				let pkColumns = this.schema.primary_key.map(item => item.column);
				$table.push(`$table->primary(${JSON.stringify(pkColumns)})`);
			}
		}
		if(this.schema.unirque_keys){
			if(this.schema.unirque_keys.length > 0){
				let ukColumns = [];
				
				this.schema.unirque_keys.forEach(schemaUk =>{
					schemaUk.columns.map(uk => ukColumns.push(uk.column));
				});
				$table.push(`$table->unique(${JSON.stringify(ukColumns)});`);
			}
		}			

		if(this.schema.foreign_keys){
			if(this.schema.foreign_keys.length > 0){					
				this.schema.foreign_keys.forEach(fk => {
					let foreign = '';
					let reference = '';							
					fk.columns.forEach(fk => {
						foreign = `foreign('${fk.column}')`;
					});
					fk.reference.columns.forEach(ref => {
						reference = `references('${ref.column}')->on('${fk.reference.table}')`;
					});

					$table.push(`$table->${foreign}->${reference}`);
				});
			}
		}

		schemaCreate = `
		Schema::create('${tableName}', function (Blueprint $table) {
			${$table.join("\n")}
		});`;

		return `
			<?php

			use Illuminate\Support\Facades\Schema;
			use Illuminate\Database\Schema\Blueprint;
			use Illuminate\Database\Migrations\Migration;
			
			class Create${tableName}Table extends Migration
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
			}`;
	}	


    isRequired(): string {
        if(this.definition && this.definition.options){
            return this.definition.options.nullable ? 'nullable' : 'required';
        }

        return 'nullable';
    }

    setTableName(tableName: string){
        this.tableName = tableName;
    }

    getMessages(): string {
        return this.messages;
    }
}

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


	constructor(
		private snakeCaseToCamelCase: SnakeCaseToCamelCasePipe,
		private laravel: Laravel
	) { }

	ngOnInit() {
	}

	getSchemas($schemas){
		this.schemas = $schemas;
		this.schemas.map(schema => {
			this.laravel.setSchema(schema);
			schema.framework = this.laravel.get().framework;

			return schema;
		});
		console.log(this.schemas);
	}
}
