@builtin "number.ne"
@builtin "whitespace.ne"

@{% %}


MAIN -> (
	create_table_statement
    "(" 
    	_
			(
				create_definition  _ comma _ {% id %} 
			):* 
			create_definition
        _
	")" _ ";" _{% 
	(d) => { 
		let create_definition = [];
		if(d[3].length > 0){
			create_definition = d[3];		
		}
		
		create_definition.push(d[4]);

		return {
			create_table_statement: d[0],
			create_definition: create_definition,
		}
	} 
%}
) {% id %}



create_table_statement -> _ CREATE_TABLE (__ OR_REPLACE):? (__ TEMPORARY):? (__ IF_NOT_EXISTS):? __ table_name _ {%
	(d) => {
		return {
			table_name: d[6].join("")
		}
	}
%}
CREATE_TABLE -> "CREATE"i __ "TABLE"i
OR_REPLACE -> "OR"i __ "REPLACE"i
TEMPORARY -> "TEMPORARY"i 
IF_NOT_EXISTS -> "IF"i __ "NOT"i __ "EXISTS"i
table_name -> strchar:+ {% id %}


create_definition -> 
(
	column_name __ data_type 
	(
		__ column_definition {% (d) => d[1] %}
	):* {%
		(d) => {
			return {
				name: d[0].join(""),
				data_type: d[2],
				column_definition: d[3]
			}
		}
	%}
) {% id %} |
constraint_foreign_key {%
	(d) => {
		return {
			name: null,
			data_type: null,
			column_definition: null,
			constraint_foreign_key: d[0]
		}
	}
%}

constraint_foreign_key ->
	"CONSTRAINT"i __ strchar:+ __
  	"FOREIGN"i __ "KEY"i __ this_table_column __
  	"REFERENCES"i __ reference_table_name _ reference_column_name
	("MATCH"i __  "FULL"i {% d => `match full` %}| "MATCH"i __ "PARTIAL"i {% d => `match partial` %}| "MATCH"i __ "SIMPLE"i {% d => `match simple` %}):?
	(__ "ON"i __ "DELETE"i __ reference_option {% d => d[4] %}):? 
	(__ "ON"i __ "UPDATE"i __ reference_option {% d => d[4] %}):? 
	{% 
		(d) => {
			return {
				type: 'foreign key',
				this_table_column: d[8],				
				reference_definition: {
					table_name: d[12],
					column_name: d[14],
					match: d[15],
					on_delete: d[16]? d[16].join(""): null,
					on_update: d[17]? d[17].join(""): null
				}
			}
		} 
	%}
	
this_table_column -> list_of_strings {% id %}
reference_table_name -> "`" strchar:+ "`"  {% d => d[1].join("") %} | strchar:+ {% d => d[0].join("") %}
reference_column_name -> list_of_strings {% id %}
reference_option -> ("RESTRICT"i | "CASCADE"i | "SET" __ "NULL"i | "NO"i __ "ACTION"i | "SET"i __ "DEFAULT"i) {% id %}
list_of_strings -> "(" _ ("`" strchar:+ "`"  {% d => d[1].join("") %} | strchar:+ {% d => d[0].join("") %}) _ ")" {% d => { return d[2] }%}

data_type -> oracle_data_type {% id %}
column_definition -> oracle_column_definition {% id %}
column_name -> strchar:+ {% id %} | "`" strchar:+ "`" {% 
	(d) => { 
		return d[1];
	} 
%}
data_type_size ->  _ "(" _ unsigned_decimal _ ")" {%  (d) => { return d[3] } %}
default_value -> ("(" _ decimal _  ")" | decimal) {% id %}


oracle_data_type -> (
	"CHAR"i data_type_size:? {% 
		(d) => { 
			return { type: 'CHAR', tag: 'text', size: d[1] }
		}
	%} |
    "NCHAR"i data_type_size:? {% 
		(d) => { 
			return { type: 'NCHAR', tag: 'text', size: d[1] }
	   	} 
	%} |
    "VARCHAR2"i data_type_size:? {% 
		(d) => { 
			return { type: d[0], tag: 'textarea', size: d[1]  }
	   } 
	%} |
    "VARCHAR"i data_type_size:? {% 
		(d) => { 
			return { type: d[0], tag: 'textarea', size: d[1], size: d[1], size: d[1] }
		} 
	%} |
    "NVARCHAR2"i data_type_size:? {% 
		(d) => { 
			return { type: 'NVARCHAR2', tag: 'text', size: d[1], size: d[1] }
		} 
	%} |
    "INTEGER"i data_type_size:? {% 
		(d) => { 
			return { 
				type: 'INTEGER', tag: 'number', size: d[1] 
		   	}
		} 
	%} |
    "CLOB"i {% 
		(d) => { 
			return { type: 'CLOB', tag: 'textarea' }
	   	} 
	%} |
    "NCLOB"i {% 
		(d) => { 
			return { 
				type: 'NCLOB', tag: 'textarea' 
			}
		} 
	%} |
    "LONG"i data_type_size:? {% 
		(d) => { 
			return { 
				type: 'LONG', tag: 'number', size: d[1] 
			}
		} 
	%} |
    "NUMBER"i data_type_size:? {% 
		(d) => { 
			return { 
				type: 'NUMBER', tag: 'number', size: d[1] 
			}
		} 
	%} |
    "DATE"i {% 
		(d) => { 
			return { 
				type: 'DATE', tag: 'date' 
		   }
		} 
	%} |
    "INTERVAL"i {% 
		(d) => {
			return { 
				type: 'INTERVAL', tag: 'text' 
		   }
		} 
	%} |
    "TIMESTAMP"i {% 
		(d) => { 
			return { 
				type: 'TIMESTAMP', tag: 'date' 
			}
		} 
	%}
) {% id %}

oracle_column_definition -> (
	"NOT NULL"i  {% 
		(d) => { 
			return { type: "not null", nullable: true }
		} 
	%} | 
	"NULL"i  {% 
		(d) => { 
			return {  type: "null", nullable: true }
		} 
	%} |
	"PRIMARY KEY"i  {% 
		(d) => { 
			return { type: "primary key", is_primary_key: true }
		} 
	%} |
	"DEFAULT"i _ default_value {% 
		(d) => { 
			return { type: "default", default_value: d[2].join("") }
		} 
	%}
) {% id %}


#shared
comma -> [,] {% id %}
strchar -> [\w] {% id %}