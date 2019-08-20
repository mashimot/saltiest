// Generated automatically by nearley, version 2.18.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

    function removeNull(array) {
      	return array
        .filter(item => item !== null)
        .map(item => Array.isArray(item) ? removeNull(item) : item);
    }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "unsigned_int$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_int$ebnf$1", "symbols": ["unsigned_int$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_int", "symbols": ["unsigned_int$ebnf$1"], "postprocess": 
        function(d) {
            return parseInt(d[0].join(""));
        }
        },
    {"name": "int$ebnf$1$subexpression$1", "symbols": [{"literal":"-"}]},
    {"name": "int$ebnf$1$subexpression$1", "symbols": [{"literal":"+"}]},
    {"name": "int$ebnf$1", "symbols": ["int$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "int$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "int$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "int$ebnf$2", "symbols": ["int$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "int", "symbols": ["int$ebnf$1", "int$ebnf$2"], "postprocess": 
        function(d) {
            if (d[0]) {
                return parseInt(d[0][0]+d[1].join(""));
            } else {
                return parseInt(d[1].join(""));
            }
        }
        },
    {"name": "unsigned_decimal$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_decimal$ebnf$1", "symbols": ["unsigned_decimal$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1", "symbols": [{"literal":"."}, "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1"]},
    {"name": "unsigned_decimal$ebnf$2", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "unsigned_decimal$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "unsigned_decimal", "symbols": ["unsigned_decimal$ebnf$1", "unsigned_decimal$ebnf$2"], "postprocess": 
        function(d) {
            return parseFloat(
                d[0].join("") +
                (d[1] ? "."+d[1][1].join("") : "")
            );
        }
        },
    {"name": "decimal$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "decimal$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "decimal$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "decimal$ebnf$2", "symbols": ["decimal$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": ["decimal$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "decimal$ebnf$3$subexpression$1", "symbols": [{"literal":"."}, "decimal$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "decimal$ebnf$3", "symbols": ["decimal$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "decimal$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "decimal", "symbols": ["decimal$ebnf$1", "decimal$ebnf$2", "decimal$ebnf$3"], "postprocess": 
        function(d) {
            return parseFloat(
                (d[0] || "") +
                d[1].join("") +
                (d[2] ? "."+d[2][1].join("") : "")
            );
        }
        },
    {"name": "percentage", "symbols": ["decimal", {"literal":"%"}], "postprocess": 
        function(d) {
            return d[0]/100;
        }
        },
    {"name": "jsonfloat$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "jsonfloat$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$2", "symbols": ["jsonfloat$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": ["jsonfloat$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$3$subexpression$1", "symbols": [{"literal":"."}, "jsonfloat$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "jsonfloat$ebnf$3", "symbols": ["jsonfloat$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "jsonfloat$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [/[+-]/], "postprocess": id},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": ["jsonfloat$ebnf$4$subexpression$1$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$4$subexpression$1", "symbols": [/[eE]/, "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "jsonfloat$ebnf$4$subexpression$1$ebnf$2"]},
    {"name": "jsonfloat$ebnf$4", "symbols": ["jsonfloat$ebnf$4$subexpression$1"], "postprocess": id},
    {"name": "jsonfloat$ebnf$4", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat", "symbols": ["jsonfloat$ebnf$1", "jsonfloat$ebnf$2", "jsonfloat$ebnf$3", "jsonfloat$ebnf$4"], "postprocess": 
        function(d) {
            return parseFloat(
                (d[0] || "") +
                d[1].join("") +
                (d[2] ? "."+d[2][1].join("") : "") +
                (d[3] ? "e" + (d[3][1] || "+") + d[3][2].join("") : "")
            );
        }
        },
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "__$ebnf$1", "symbols": ["wschar"]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "wschar", "symbols": [/[ \t\n\v\f]/], "postprocess": id},
    {"name": "CREATE_TABLE$subexpression$1$ebnf$1", "symbols": []},
    {"name": "CREATE_TABLE$subexpression$1$ebnf$1$subexpression$1", "symbols": ["create_definition", "_", "comma", "_"]},
    {"name": "CREATE_TABLE$subexpression$1$ebnf$1", "symbols": ["CREATE_TABLE$subexpression$1$ebnf$1", "CREATE_TABLE$subexpression$1$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "CREATE_TABLE$subexpression$1", "symbols": ["create_table_statement", {"literal":"("}, "_", "CREATE_TABLE$subexpression$1$ebnf$1", "create_definition", "_", {"literal":")"}, "_", {"literal":";"}, "_"]},
    {"name": "CREATE_TABLE", "symbols": ["CREATE_TABLE$subexpression$1"], "postprocess":  
        (d) => { 
        	return removeNull(d[0]); 
        } 
        },
    {"name": "create_table_statement$subexpression$1", "symbols": [/[cC]/, /[rR]/, /[eE]/, /[aA]/, /[tT]/, /[eE]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "create_table_statement$subexpression$2", "symbols": [/[tT]/, /[aA]/, /[bB]/, /[lL]/, /[eE]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "create_table_statement$ebnf$1$subexpression$1", "symbols": ["__", "OR_REPLACE"]},
    {"name": "create_table_statement$ebnf$1", "symbols": ["create_table_statement$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "create_table_statement$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "create_table_statement$ebnf$2$subexpression$1", "symbols": ["__", "TEMPORARY"]},
    {"name": "create_table_statement$ebnf$2", "symbols": ["create_table_statement$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "create_table_statement$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "create_table_statement$ebnf$3$subexpression$1", "symbols": ["__", "IF_NOT_EXISTS"]},
    {"name": "create_table_statement$ebnf$3", "symbols": ["create_table_statement$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "create_table_statement$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "create_table_statement", "symbols": ["_", "create_table_statement$subexpression$1", "__", "create_table_statement$subexpression$2", "create_table_statement$ebnf$1", "create_table_statement$ebnf$2", "create_table_statement$ebnf$3", "__", "table_name", "_"], "postprocess": 
        (d) => {
        	return {
        		table_name: d[8].join("")
        	}
        }
        },
    {"name": "OR_REPLACE$subexpression$1", "symbols": [/[oO]/, /[rR]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "OR_REPLACE$subexpression$2", "symbols": [/[rR]/, /[eE]/, /[pP]/, /[lL]/, /[aA]/, /[cC]/, /[eE]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "OR_REPLACE", "symbols": ["OR_REPLACE$subexpression$1", "__", "OR_REPLACE$subexpression$2"]},
    {"name": "TEMPORARY$subexpression$1", "symbols": [/[tT]/, /[eE]/, /[mM]/, /[pP]/, /[oO]/, /[rR]/, /[aA]/, /[rR]/, /[yY]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "TEMPORARY", "symbols": ["TEMPORARY$subexpression$1"]},
    {"name": "IF_NOT_EXISTS$subexpression$1", "symbols": [/[iI]/, /[fF]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "IF_NOT_EXISTS$subexpression$2", "symbols": [/[nN]/, /[oO]/, /[tT]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "IF_NOT_EXISTS$subexpression$3", "symbols": [/[eE]/, /[xX]/, /[iI]/, /[sS]/, /[tT]/, /[sS]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "IF_NOT_EXISTS", "symbols": ["IF_NOT_EXISTS$subexpression$1", "__", "IF_NOT_EXISTS$subexpression$2", "__", "IF_NOT_EXISTS$subexpression$3"]},
    {"name": "table_name$ebnf$1", "symbols": ["strchar"]},
    {"name": "table_name$ebnf$1", "symbols": ["table_name$ebnf$1", "strchar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "table_name", "symbols": ["table_name$ebnf$1"], "postprocess": id},
    {"name": "create_definition$ebnf$1", "symbols": []},
    {"name": "create_definition$ebnf$1$subexpression$1", "symbols": ["__", "column_definition"], "postprocess": 
        (d) => {
        	let column_definition = removeNull(d[1]);
        
        	return column_definition[0];
        }
        		},
    {"name": "create_definition$ebnf$1", "symbols": ["create_definition$ebnf$1", "create_definition$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "create_definition", "symbols": ["column_name", "__", "data_type", "create_definition$ebnf$1"], "postprocess": 
        (d) => {
        	return {
        		name: d[0].join(""),
        		data_type: d[2],
        		column_definition: d[3]
        	}
        }
        	},
    {"name": "data_type", "symbols": ["ORACLE_DATA_TYPE"], "postprocess": id},
    {"name": "column_definition", "symbols": ["ORACLE_COLUMN_DEFINITION"], "postprocess": id},
    {"name": "column_name$ebnf$1", "symbols": ["strchar"]},
    {"name": "column_name$ebnf$1", "symbols": ["column_name$ebnf$1", "strchar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "column_name", "symbols": ["column_name$ebnf$1"], "postprocess": id},
    {"name": "column_name$ebnf$2", "symbols": ["strchar"]},
    {"name": "column_name$ebnf$2", "symbols": ["column_name$ebnf$2", "strchar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "column_name", "symbols": [{"literal":"`"}, "column_name$ebnf$2", {"literal":"`"}], "postprocess":  
        (d) => { 
        		return d[1];
        } 
        },
    {"name": "comma", "symbols": [/[,]/], "postprocess": id},
    {"name": "DATA_TYPE_SIZE", "symbols": ["_", {"literal":"("}, "_", "unsigned_decimal", "_", {"literal":")"}], "postprocess": (d) => { return d[3] }},
    {"name": "DEFAULT_VALUE$subexpression$1", "symbols": [{"literal":"("}, "_", "decimal", "_", {"literal":")"}]},
    {"name": "DEFAULT_VALUE$subexpression$1", "symbols": ["decimal"]},
    {"name": "DEFAULT_VALUE", "symbols": ["DEFAULT_VALUE$subexpression$1"], "postprocess": id},
    {"name": "strchar", "symbols": [/[\w]/], "postprocess": id},
    {"name": "ORACLE_DATA_TYPE$subexpression$1$subexpression$1", "symbols": [/[cC]/, /[hH]/, /[aA]/, /[rR]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "ORACLE_DATA_TYPE$subexpression$1$ebnf$1", "symbols": ["DATA_TYPE_SIZE"], "postprocess": id},
    {"name": "ORACLE_DATA_TYPE$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "ORACLE_DATA_TYPE$subexpression$1", "symbols": ["ORACLE_DATA_TYPE$subexpression$1$subexpression$1", "ORACLE_DATA_TYPE$subexpression$1$ebnf$1"], "postprocess":  
        (d) => { 
        	return { type: 'CHAR', tag: 'text', size: d[1] }
        }
        	},
    {"name": "ORACLE_DATA_TYPE$subexpression$1$subexpression$2", "symbols": [/[nN]/, /[cC]/, /[hH]/, /[aA]/, /[rR]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "ORACLE_DATA_TYPE$subexpression$1$ebnf$2", "symbols": ["DATA_TYPE_SIZE"], "postprocess": id},
    {"name": "ORACLE_DATA_TYPE$subexpression$1$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "ORACLE_DATA_TYPE$subexpression$1", "symbols": ["ORACLE_DATA_TYPE$subexpression$1$subexpression$2", "ORACLE_DATA_TYPE$subexpression$1$ebnf$2"], "postprocess":  
        (d) => { 
        	return { type: 'NCHAR', tag: 'text', size: d[1] }
        	   	} 
        	},
    {"name": "ORACLE_DATA_TYPE$subexpression$1$subexpression$3", "symbols": [/[vV]/, /[aA]/, /[rR]/, /[cC]/, /[hH]/, /[aA]/, /[rR]/, {"literal":"2"}], "postprocess": function (d) {return d.join(""); }},
    {"name": "ORACLE_DATA_TYPE$subexpression$1$ebnf$3", "symbols": ["DATA_TYPE_SIZE"], "postprocess": id},
    {"name": "ORACLE_DATA_TYPE$subexpression$1$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "ORACLE_DATA_TYPE$subexpression$1", "symbols": ["ORACLE_DATA_TYPE$subexpression$1$subexpression$3", "ORACLE_DATA_TYPE$subexpression$1$ebnf$3"], "postprocess":  
        (d) => { 
        	return { type: d[0], tag: 'textarea', size: d[1]  }
        	   } 
        	},
    {"name": "ORACLE_DATA_TYPE$subexpression$1$subexpression$4", "symbols": [/[vV]/, /[aA]/, /[rR]/, /[cC]/, /[hH]/, /[aA]/, /[rR]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "ORACLE_DATA_TYPE$subexpression$1$ebnf$4", "symbols": ["DATA_TYPE_SIZE"], "postprocess": id},
    {"name": "ORACLE_DATA_TYPE$subexpression$1$ebnf$4", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "ORACLE_DATA_TYPE$subexpression$1", "symbols": ["ORACLE_DATA_TYPE$subexpression$1$subexpression$4", "ORACLE_DATA_TYPE$subexpression$1$ebnf$4"], "postprocess":  
        (d) => { 
        	return { type: d[0], tag: 'textarea', size: d[1], size: d[1], size: d[1] }
        } 
        	},
    {"name": "ORACLE_DATA_TYPE$subexpression$1$subexpression$5", "symbols": [/[nN]/, /[vV]/, /[aA]/, /[rR]/, /[cC]/, /[hH]/, /[aA]/, /[rR]/, {"literal":"2"}], "postprocess": function (d) {return d.join(""); }},
    {"name": "ORACLE_DATA_TYPE$subexpression$1$ebnf$5", "symbols": ["DATA_TYPE_SIZE"], "postprocess": id},
    {"name": "ORACLE_DATA_TYPE$subexpression$1$ebnf$5", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "ORACLE_DATA_TYPE$subexpression$1", "symbols": ["ORACLE_DATA_TYPE$subexpression$1$subexpression$5", "ORACLE_DATA_TYPE$subexpression$1$ebnf$5"], "postprocess":  
        (d) => { 
        	return { type: 'NVARCHAR2', tag: 'text', size: d[1], size: d[1] 
        		   }
        } 
        	},
    {"name": "ORACLE_DATA_TYPE$subexpression$1$subexpression$6", "symbols": [/[iI]/, /[nN]/, /[tT]/, /[eE]/, /[gG]/, /[eE]/, /[rR]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "ORACLE_DATA_TYPE$subexpression$1$ebnf$6", "symbols": ["DATA_TYPE_SIZE"], "postprocess": id},
    {"name": "ORACLE_DATA_TYPE$subexpression$1$ebnf$6", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "ORACLE_DATA_TYPE$subexpression$1", "symbols": ["ORACLE_DATA_TYPE$subexpression$1$subexpression$6", "ORACLE_DATA_TYPE$subexpression$1$ebnf$6"], "postprocess":  
        (d) => { 
        	return { 
        		type: 'INTEGER', tag: 'number', size: d[1] 
           	}
        } 
        	},
    {"name": "ORACLE_DATA_TYPE$subexpression$1$subexpression$7", "symbols": [/[cC]/, /[lL]/, /[oO]/, /[bB]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "ORACLE_DATA_TYPE$subexpression$1", "symbols": ["ORACLE_DATA_TYPE$subexpression$1$subexpression$7"], "postprocess":  
        (d) => { 
        	return { type: 'CLOB', tag: 'textarea' }
        	   	} 
        	},
    {"name": "ORACLE_DATA_TYPE$subexpression$1$subexpression$8", "symbols": [/[nN]/, /[cC]/, /[lL]/, /[oO]/, /[bB]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "ORACLE_DATA_TYPE$subexpression$1", "symbols": ["ORACLE_DATA_TYPE$subexpression$1$subexpression$8"], "postprocess":  
        (d) => { 
        	return { 
        		type: 'NCLOB', tag: 'textarea' 
        	}
        } 
        	},
    {"name": "ORACLE_DATA_TYPE$subexpression$1$subexpression$9", "symbols": [/[lL]/, /[oO]/, /[nN]/, /[gG]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "ORACLE_DATA_TYPE$subexpression$1$ebnf$7", "symbols": ["DATA_TYPE_SIZE"], "postprocess": id},
    {"name": "ORACLE_DATA_TYPE$subexpression$1$ebnf$7", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "ORACLE_DATA_TYPE$subexpression$1", "symbols": ["ORACLE_DATA_TYPE$subexpression$1$subexpression$9", "ORACLE_DATA_TYPE$subexpression$1$ebnf$7"], "postprocess":  
        (d) => { 
        	return { 
        		type: 'LONG', tag: 'number', size: d[1] 
        	}
        } 
        	},
    {"name": "ORACLE_DATA_TYPE$subexpression$1$subexpression$10", "symbols": [/[nN]/, /[uU]/, /[mM]/, /[bB]/, /[eE]/, /[rR]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "ORACLE_DATA_TYPE$subexpression$1$ebnf$8", "symbols": ["DATA_TYPE_SIZE"], "postprocess": id},
    {"name": "ORACLE_DATA_TYPE$subexpression$1$ebnf$8", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "ORACLE_DATA_TYPE$subexpression$1", "symbols": ["ORACLE_DATA_TYPE$subexpression$1$subexpression$10", "ORACLE_DATA_TYPE$subexpression$1$ebnf$8"], "postprocess":  
        (d) => { 
        	return { 
        		type: 'NUMBER', tag: 'number', size: d[1] 
        	}
        } 
        	},
    {"name": "ORACLE_DATA_TYPE$subexpression$1$subexpression$11", "symbols": [/[dD]/, /[aA]/, /[tT]/, /[eE]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "ORACLE_DATA_TYPE$subexpression$1", "symbols": ["ORACLE_DATA_TYPE$subexpression$1$subexpression$11"], "postprocess":  
        (d) => { 
        	return { 
        		type: 'DATE', tag: 'date' 
           }
        } 
        	},
    {"name": "ORACLE_DATA_TYPE$subexpression$1$subexpression$12", "symbols": [/[iI]/, /[nN]/, /[tT]/, /[eE]/, /[rR]/, /[vV]/, /[aA]/, /[lL]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "ORACLE_DATA_TYPE$subexpression$1", "symbols": ["ORACLE_DATA_TYPE$subexpression$1$subexpression$12"], "postprocess":  
        (d) => {
        	return { 
        		type: 'INTERVAL', tag: 'text' 
           }
        } 
        	},
    {"name": "ORACLE_DATA_TYPE$subexpression$1$subexpression$13", "symbols": [/[tT]/, /[iI]/, /[mM]/, /[eE]/, /[sS]/, /[tT]/, /[aA]/, /[mM]/, /[pP]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "ORACLE_DATA_TYPE$subexpression$1", "symbols": ["ORACLE_DATA_TYPE$subexpression$1$subexpression$13"], "postprocess":  
        (d) => { 
        	return { 
        		type: 'TIMESTAMP', tag: 'date' 
        	}
        } 
        	},
    {"name": "ORACLE_DATA_TYPE", "symbols": ["ORACLE_DATA_TYPE$subexpression$1"], "postprocess": id},
    {"name": "ORACLE_COLUMN_DEFINITION$subexpression$1$subexpression$1", "symbols": [/[nN]/, /[oO]/, /[tT]/, {"literal":" "}, /[nN]/, /[uU]/, /[lL]/, /[lL]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "ORACLE_COLUMN_DEFINITION$subexpression$1", "symbols": ["ORACLE_COLUMN_DEFINITION$subexpression$1$subexpression$1"], "postprocess": (d) => { return { type: "not null", nullable: true }}},
    {"name": "ORACLE_COLUMN_DEFINITION$subexpression$1$subexpression$2", "symbols": [/[nN]/, /[uU]/, /[lL]/, /[lL]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "ORACLE_COLUMN_DEFINITION$subexpression$1", "symbols": ["ORACLE_COLUMN_DEFINITION$subexpression$1$subexpression$2"], "postprocess": (d) => { return { type: "null", nullable: true }}},
    {"name": "ORACLE_COLUMN_DEFINITION$subexpression$1$subexpression$3", "symbols": [/[pP]/, /[rR]/, /[iI]/, /[mM]/, /[aA]/, /[rR]/, /[yY]/, {"literal":" "}, /[kK]/, /[eE]/, /[yY]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "ORACLE_COLUMN_DEFINITION$subexpression$1", "symbols": ["ORACLE_COLUMN_DEFINITION$subexpression$1$subexpression$3"], "postprocess": (d) => { return { type: "primary key", is_primary_key: true }}},
    {"name": "ORACLE_COLUMN_DEFINITION$subexpression$1$subexpression$4", "symbols": [/[dD]/, /[eE]/, /[fF]/, /[aA]/, /[uU]/, /[lL]/, /[tT]/], "postprocess": function (d) {return d.join(""); }},
    {"name": "ORACLE_COLUMN_DEFINITION$subexpression$1", "symbols": ["ORACLE_COLUMN_DEFINITION$subexpression$1$subexpression$4", "__", "DEFAULT_VALUE"], "postprocess": (d) => { return { type: "default", default_value: d[2].join("") }}},
    {"name": "ORACLE_COLUMN_DEFINITION", "symbols": ["ORACLE_COLUMN_DEFINITION$subexpression$1"]}
]
  , ParserStart: "CREATE_TABLE"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
