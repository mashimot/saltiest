var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var MigrationComponent = /** @class */ (function () {
    function MigrationComponent() {
        this.mysql = {
            INT: "integer('#columnName')",
            BIGINT: "bigInteger('#columnName')",
            BLOB: "binary",
            BOOLEAN: "boolean",
            CHAR: "char('#columnName', #length)",
            DATE: "date('#columnName')",
            DATETIME: "dateTime('#columnName')",
            //DATETIME: dateTimeTz('created_at'),
            DECIMAL: "decimal('#columnName', #total_digits_comma_decimal_digits)",
            DOUBLE: "double('#columnName', #total_digits_comma_decimal_digits)",
            ENUM: "enum('#columnName', #array)",
            FLOAT: "float('#columnName', #total_digits_comma_decimal_digits)",
            GEOMETRY: "geometry('#columnName')",
            GEOMETRYCOLLECTION: "geometryCollection('#columnName')",
            //INTEGER: increments('id'),
            INTEGER: "integer('#columnName')",
            IP: "ipAddress('#columnName')",
            JSON: "json('#columnName')",
            JSONB: "jsonb('#columnName')",
            LINESTRING: "lineString('#columnName')",
            LONGTEXT: "longText('#columnName')",
            MAC: "macAddress('#columnName')",
            MEDIUMINT: "mediumIncrements('#columnName')",
            //MEDIUMINT: mediumInteger('votes')`,
            MEDIUMTEXT: "mediumText('#columnName')",
            //BIGINT: morphs('taggable')`,
            //CHAR: uuidMorphs('taggable')`,
            MULTILINESTRING: "multiLineString('#columnName')",
            MULTIPOINT: "multiPoint('#columnName')",
            MULTIPOLYGON: "multiPolygon('#columnName')",
            morphs: "nullableMorphs('#columnName')",
            nullable: "nullableUuidMorphs('#columnName')",
            timestamps: "nullableTimestamps()",
            POINT: "point('#columnName')",
            POLYGON: "polygon('#columnName')",
            //rememberToken(),
            SET: "set('#columnName', #array)",
            SMALLINT: "smallIncrements('#columnName')",
            //SMALLINT: smallInteger('votes')`,
            //TIMESTAMP: `softDeletes()`,
            //TIMESTAMP: softDeletesTz(),
            VARCHAR: "string('#columnName', #length)",
            TEXT: "text('#columnName')",
            TIME: "time('#columnName')",
            //TIME: `timeTz('sunrise')`,
            TIMESTAMP: "timestamp('#columnName')",
            //TIMESTAMP: timestampTz('added_on')`,
            //TIMESTAMP: timestamps()`,
            //TIMESTAMP: timestampsTz()`,
            TINYINT: "tinyIncrements('#columnName')",
            //TINYINT: tinyInteger('votes'),
            /*BIGINT: `unsignedBigInteger('#columnName')`,
            DECIMAL: `unsignedDecimal('#columnName', 8, 2)`,
            INTEGER: `unsignedInteger('#columnName')`,
            MEDIUMINT: `unsignedMediumInteger('#columnName')`,
            SMALLINT: `unsignedSmallInteger('#columnName')`,
            TINYINT: `unsignedTinyInteger('#columnName')`,*/
            UUID: "uuid('#columnName')",
            YEAR: "year('#columnName')"
        };
    }
    MigrationComponent.prototype.ngOnInit = function () {
    };
    MigrationComponent.prototype.getSchemas = function ($schemas) {
        this.schemas = $schemas;
        this.laravelMigration();
    };
    MigrationComponent.prototype.laravelMigration = function () {
        var _this = this;
        this.migrations = [];
        var $table = '';
        var autoIncrement = {
            INT: "increments('#columnName')",
            BIGINT: "bigIncrements('#columnName')",
            MEDIUMINT: "mediumIncrements('#columnName')",
            SMALLINT: "smallIncrements('#columnName')",
            TINYINT: "tinyIncrements('#columnName')",
        };
        this.schemas.forEach(function (schema) {
            var tableName = schema.name;
            var schemaCreate = '';
            schema.column.s.forEach(function (column) {
                var _values = column.type.values ? "" + JSON.stringify(column.type.values) : '';
                var _nullable = column.options.nullable ? '->nullable()' : '';
                var _dataType = column.type.datatype.toUpperCase();
                var _type = _this.mysql[column.type.datatype.toUpperCase()];
                if (typeof _type == 'undefined') {
                    _type = _dataType + "('#columnName')";
                }
                if (column.options.autoincrement) {
                    Object.keys(autoIncrement).forEach(function (dataType) {
                        if (_dataType == dataType) {
                            _type = autoIncrement[dataType];
                        }
                    });
                }
                if (_type) {
                    _type = _type.replace(/#columnName/g, column.name);
                }
                if (column.type.values) {
                    _type = _type.replace(/#array/g, _values);
                }
                if (column.type.length) {
                    if (column.type.length != '')
                        _type = _type.replace(/#length/g, column.type.length);
                }
                if (column.options.unsigned) {
                    _type = "unsigned" + (_type.charAt(0).toUpperCase() + _type.slice(1));
                }
                if (column.type.decimals || column.type.digits) {
                    var total_digits_comma_decimal_digits = column.type.digits + ', ' + column.type.decimals;
                    _type = _type.replace(/#total_digits_comma_decimal_digits/g, total_digits_comma_decimal_digits);
                }
                $table += "\t$table->" + _type + _nullable + ";\n";
            });
            /*this.migrations.push(
                [
                    //`$ php artisan make:migration create_${tableName}_table --create="${tableName}"\n`,
                    `Schema::create('${tableName}', function (Blueprint $table) {\n`,
                    `${$table}`,
                    `});\n`
                ].join("")
            );*/
            schemaCreate = "\n\t\t\tSchema::create('" + tableName + "', function (Blueprint $table) {\n\t\t\t\t" + $table + "\n\t\t\t});";
            $table = '';
            _this.migrations.push("\n\t\t\t\t<?php\n\n\t\t\t\tuse IlluminateSupportFacadesSchema;\n\t\t\t\tuse IlluminateDatabaseSchemaBlueprint;\n\t\t\t\tuse IlluminateDatabaseMigrationsMigration;\n\t\t\t\t\n\t\t\t\tclass CreateFlightsTable extends Migration\n\t\t\t\t{\n\t\t\t\t\t/**\n\t\t\t\t\t * Run the migrations.\n\t\t\t\t\t *\n\t\t\t\t\t * @return void\n\t\t\t\t\t */\n\t\t\t\t\tpublic function up()\n\t\t\t\t\t{\n\t\t\t\t\t\t" + schemaCreate + "\n\t\t\t\t\t}\n\t\t\t\t\n\t\t\t\t\t/**\n\t\t\t\t\t * Reverse the migrations.\n\t\t\t\t\t *\n\t\t\t\t\t * @return void\n\t\t\t\t\t */\n\t\t\t\t\tpublic function down()\n\t\t\t\t\t{\n\t\t\t\t\t\tSchema::drop('" + tableName + "');\n\t\t\t\t\t}\n\t\t\t\t}");
        });
    };
    MigrationComponent = __decorate([
        Component({
            selector: 'app-migration',
            templateUrl: './migration.component.html',
            styleUrls: ['./migration.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], MigrationComponent);
    return MigrationComponent;
}());
export { MigrationComponent };
//# sourceMappingURL=migration.component.js.map