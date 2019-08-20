@builtin "number.ne"
@builtin "whitespace.ne"

@{%
    function removeNull(array) {
      	return array
        .filter(item => item !== null)
        .map(item => Array.isArray(item) ? removeNull(item) : item);
    }
%}


CREATE_TABLE -> (
	create_table_statement
    "(" 
    	_
			(create_definition _ comma _):* 
			create_definition 
        _
	")" _ ";" _
){% 
	(d) => { 
		return removeNull(d[0]); 
	} 
%}

create_table_statement -> _ "CREATE"i __ "TABLE"i (__ OR_REPLACE):? (__ TEMPORARY):? (__ IF_NOT_EXISTS):? __ table_name _ {%
	(d) => {
		return {
			table_name: d[8].join("")
		}
	}
%}
OR_REPLACE -> "OR"i __ "REPLACE"i
TEMPORARY -> "TEMPORARY"i 
IF_NOT_EXISTS -> "IF"i __ "NOT"i __ "EXISTS"i
table_name -> strchar:+ {% id %}


create_definition -> 
	column_name 
	__ 
	data_type 
	(
		__  column_definition {%
			(d) => {
				let column_definition = removeNull(d[1]);

				return column_definition[0];
			}
		%}
	):* {%
		(d) => {
			return {
				name: d[0].join(""),
				data_type: d[2],
				column_definition: d[3]
			}
		}
	%}

data_type -> ORACLE_DATA_TYPE {% id %}
column_definition -> ORACLE_COLUMN_DEFINITION {% id %}

column_name -> strchar:+ {% id %} | "`" strchar:+ "`" {% 
	(d) => { 
			return d[1];
	} 
%}
comma -> [,] {% id %}
DATA_TYPE_SIZE ->  _ "(" _ unsigned_decimal _ ")"  {%  (d) => { return d[3] } %}
DEFAULT_VALUE -> ("(" _ decimal _  ")"  | decimal)  {% id %}
strchar -> [\w] {% id %}



ORACLE_DATA_TYPE -> (
	"CHAR"i DATA_TYPE_SIZE:? {% 
		(d) => { 
			return { type: 'CHAR', tag: 'text', size: d[1] }
		}
	%} |
    "NCHAR"i DATA_TYPE_SIZE:? {% 
		(d) => { 
			return { type: 'NCHAR', tag: 'text', size: d[1] }
	   	} 
	%} |
    "VARCHAR2"i DATA_TYPE_SIZE:? {% 
		(d) => { 
			return { type: d[0], tag: 'textarea', size: d[1]  }
	   } 
	%} |
    "VARCHAR"i DATA_TYPE_SIZE:? {% 
		(d) => { 
			return { type: d[0], tag: 'textarea', size: d[1], size: d[1], size: d[1] }
		} 
	%} |
    "NVARCHAR2"i DATA_TYPE_SIZE:? {% 
		(d) => { 
			return { type: 'NVARCHAR2', tag: 'text', size: d[1], size: d[1] 
				   }
		} 
	%} |
    "INTEGER"i DATA_TYPE_SIZE:? {% 
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
    "LONG"i DATA_TYPE_SIZE:? {% 
		(d) => { 
			return { 
				type: 'LONG', tag: 'number', size: d[1] 
			}
		} 
	%} |
    "NUMBER"i DATA_TYPE_SIZE:? {% 
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

ORACLE_COLUMN_DEFINITION -> (
	"NOT NULL"i  {% (d) => { return { type: "not null", nullable: true }} %} |
	"NULL"i  {% (d) => { return { type: "null", nullable: true }} %} |
	"PRIMARY KEY"i  {% (d) => { return { type: "primary key", is_primary_key: true }} %} |
	"DEFAULT"i __ DEFAULT_VALUE {% (d) => { return { type: "default", default_value: d[2].join("") }} %}
)


