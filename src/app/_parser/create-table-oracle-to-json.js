// Generated automatically by nearley, version 2.18.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }



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
    {"name": "MAIN$ebnf$1", "symbols": []},
    {"name": "MAIN$ebnf$1", "symbols": ["MAIN$ebnf$1", "MAINCREATE"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "MAIN", "symbols": ["MAIN$ebnf$1"], "postprocess": (d) => { return d[0]; }},
    {"name": "MAINCREATE$subexpression$1$ebnf$1", "symbols": []},
    {"name": "MAINCREATE$subexpression$1$ebnf$1$subexpression$1", "symbols": ["create_definition", "_", "comma", "_"], "postprocess": id},
    {"name": "MAINCREATE$subexpression$1$ebnf$1", "symbols": ["MAINCREATE$subexpression$1$ebnf$1", "MAINCREATE$subexpression$1$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "MAINCREATE$subexpression$1", "symbols": ["create_table_statement", {"literal":"("}, "_", "MAINCREATE$subexpression$1$ebnf$1", "create_definition", "_", {"literal":")"}, "_", {"literal":";"}, "_"], "postprocess":  
        (d) => { 
        	let create_definition = [];
        	if(d[3].length > 0){
        		create_definition = d[3];		
        	}
        
        	return {
        		create_table_statement: d[0],
        		create_definition: create_definition,
        		last_create_definition: d[4]
        	}
        } 
        },
    {"name": "MAINCREATE", "symbols": ["MAINCREATE$subexpression$1"], "postprocess": (d) => { return d[0]; }},
    {"name": "create_table_statement$ebnf$1$subexpression$1", "symbols": ["__", "OR_REPLACE"]},
    {"name": "create_table_statement$ebnf$1", "symbols": ["create_table_statement$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "create_table_statement$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "create_table_statement$ebnf$2$subexpression$1", "symbols": ["__", "TEMPORARY"]},
    {"name": "create_table_statement$ebnf$2", "symbols": ["create_table_statement$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "create_table_statement$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "create_table_statement$ebnf$3$subexpression$1", "symbols": ["__", "IF_NOT_EXISTS"]},
    {"name": "create_table_statement$ebnf$3", "symbols": ["create_table_statement$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "create_table_statement$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "create_table_statement", "symbols": ["_", "CREATE_TABLE", "create_table_statement$ebnf$1", "create_table_statement$ebnf$2", "create_table_statement$ebnf$3", "__", "table_name", "_"], "postprocess": 
        (d) => {
        	return {
        		table_name: d[6].join("")
        	}
        }
        },
    {"name": "CREATE_TABLE$subexpression$1", "symbols": [/[cC]/, /[rR]/, /[eE]/, /[aA]/, /[tT]/, /[eE]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "CREATE_TABLE$subexpression$2", "symbols": [/[tT]/, /[aA]/, /[bB]/, /[lL]/, /[eE]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "CREATE_TABLE", "symbols": ["CREATE_TABLE$subexpression$1", "__", "CREATE_TABLE$subexpression$2"]},
    {"name": "OR_REPLACE$subexpression$1", "symbols": [/[oO]/, /[rR]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "OR_REPLACE$subexpression$2", "symbols": [/[rR]/, /[eE]/, /[pP]/, /[lL]/, /[aA]/, /[cC]/, /[eE]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "OR_REPLACE", "symbols": ["OR_REPLACE$subexpression$1", "__", "OR_REPLACE$subexpression$2"]},
    {"name": "TEMPORARY$subexpression$1", "symbols": [/[tT]/, /[eE]/, /[mM]/, /[pP]/, /[oO]/, /[rR]/, /[aA]/, /[rR]/, /[yY]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "TEMPORARY", "symbols": ["TEMPORARY$subexpression$1"]},
    {"name": "IF_NOT_EXISTS$subexpression$1", "symbols": [/[iI]/, /[fF]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "IF_NOT_EXISTS$subexpression$2", "symbols": [/[nN]/, /[oO]/, /[tT]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "IF_NOT_EXISTS$subexpression$3", "symbols": [/[eE]/, /[xX]/, /[iI]/, /[sS]/, /[tT]/, /[sS]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "IF_NOT_EXISTS", "symbols": ["IF_NOT_EXISTS$subexpression$1", "__", "IF_NOT_EXISTS$subexpression$2", "__", "IF_NOT_EXISTS$subexpression$3"]},
    {"name": "table_name$ebnf$1", "symbols": ["strchar"]},
    {"name": "table_name$ebnf$1", "symbols": ["table_name$ebnf$1", "strchar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "table_name", "symbols": ["table_name$ebnf$1"], "postprocess": id},
    {"name": "create_definition$subexpression$1$ebnf$1", "symbols": []},
    {"name": "create_definition$subexpression$1$ebnf$1$subexpression$1", "symbols": ["__", "column_definition"], "postprocess": (d) => d[1]},
    {"name": "create_definition$subexpression$1$ebnf$1", "symbols": ["create_definition$subexpression$1$ebnf$1", "create_definition$subexpression$1$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "create_definition$subexpression$1", "symbols": ["column_name", "__", "data_type", "create_definition$subexpression$1$ebnf$1"], "postprocess": 
        (d) => {
        	return {
        		name: d[0].join(""),
        		data_type: d[2],
        		column_definition: d[3]
        	}
        }
        	},
    {"name": "create_definition", "symbols": ["create_definition$subexpression$1"], "postprocess": id},
    {"name": "create_definition", "symbols": ["constraint_foreign_key"], "postprocess": 
        (d) => {
        	return {
        		name: null,
        		data_type: null,
        		column_definition: null,
        		constraint_foreign_key: d[0]
        	}
        }
        },
    {"name": "constraint_foreign_key$subexpression$1", "symbols": [/[cC]/, /[oO]/, /[nN]/, /[sS]/, /[tT]/, /[rR]/, /[aA]/, /[iI]/, /[nN]/, /[tT]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "constraint_foreign_key$ebnf$1", "symbols": ["strchar"]},
    {"name": "constraint_foreign_key$ebnf$1", "symbols": ["constraint_foreign_key$ebnf$1", "strchar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "constraint_foreign_key$subexpression$2", "symbols": [/[fF]/, /[oO]/, /[rR]/, /[eE]/, /[iI]/, /[gG]/, /[nN]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "constraint_foreign_key$subexpression$3", "symbols": [/[kK]/, /[eE]/, /[yY]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "constraint_foreign_key$subexpression$4", "symbols": [/[rR]/, /[eE]/, /[fF]/, /[eE]/, /[rR]/, /[eE]/, /[nN]/, /[cC]/, /[eE]/, /[sS]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "constraint_foreign_key$ebnf$2$subexpression$1$subexpression$1", "symbols": [/[mM]/, /[aA]/, /[tT]/, /[cC]/, /[hH]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "constraint_foreign_key$ebnf$2$subexpression$1$subexpression$2", "symbols": [/[fF]/, /[uU]/, /[lL]/, /[lL]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "constraint_foreign_key$ebnf$2$subexpression$1", "symbols": ["constraint_foreign_key$ebnf$2$subexpression$1$subexpression$1", "__", "constraint_foreign_key$ebnf$2$subexpression$1$subexpression$2"], "postprocess": d => `match full`},
    {"name": "constraint_foreign_key$ebnf$2$subexpression$1$subexpression$3", "symbols": [/[mM]/, /[aA]/, /[tT]/, /[cC]/, /[hH]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "constraint_foreign_key$ebnf$2$subexpression$1$subexpression$4", "symbols": [/[pP]/, /[aA]/, /[rR]/, /[tT]/, /[iI]/, /[aA]/, /[lL]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "constraint_foreign_key$ebnf$2$subexpression$1", "symbols": ["constraint_foreign_key$ebnf$2$subexpression$1$subexpression$3", "__", "constraint_foreign_key$ebnf$2$subexpression$1$subexpression$4"], "postprocess": d => `match partial`},
    {"name": "constraint_foreign_key$ebnf$2$subexpression$1$subexpression$5", "symbols": [/[mM]/, /[aA]/, /[tT]/, /[cC]/, /[hH]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "constraint_foreign_key$ebnf$2$subexpression$1$subexpression$6", "symbols": [/[sS]/, /[iI]/, /[mM]/, /[pP]/, /[lL]/, /[eE]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "constraint_foreign_key$ebnf$2$subexpression$1", "symbols": ["constraint_foreign_key$ebnf$2$subexpression$1$subexpression$5", "__", "constraint_foreign_key$ebnf$2$subexpression$1$subexpression$6"], "postprocess": d => `match simple`},
    {"name": "constraint_foreign_key$ebnf$2", "symbols": ["constraint_foreign_key$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "constraint_foreign_key$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "constraint_foreign_key$ebnf$3$subexpression$1$subexpression$1", "symbols": [/[oO]/, /[nN]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "constraint_foreign_key$ebnf$3$subexpression$1$subexpression$2", "symbols": [/[dD]/, /[eE]/, /[lL]/, /[eE]/, /[tT]/, /[eE]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "constraint_foreign_key$ebnf$3$subexpression$1", "symbols": ["__", "constraint_foreign_key$ebnf$3$subexpression$1$subexpression$1", "__", "constraint_foreign_key$ebnf$3$subexpression$1$subexpression$2", "__", "reference_option"], "postprocess": d => d[4]},
    {"name": "constraint_foreign_key$ebnf$3", "symbols": ["constraint_foreign_key$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "constraint_foreign_key$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "constraint_foreign_key$ebnf$4$subexpression$1$subexpression$1", "symbols": [/[oO]/, /[nN]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "constraint_foreign_key$ebnf$4$subexpression$1$subexpression$2", "symbols": [/[uU]/, /[pP]/, /[dD]/, /[aA]/, /[tT]/, /[eE]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "constraint_foreign_key$ebnf$4$subexpression$1", "symbols": ["__", "constraint_foreign_key$ebnf$4$subexpression$1$subexpression$1", "__", "constraint_foreign_key$ebnf$4$subexpression$1$subexpression$2", "__", "reference_option"], "postprocess": d => d[4]},
    {"name": "constraint_foreign_key$ebnf$4", "symbols": ["constraint_foreign_key$ebnf$4$subexpression$1"], "postprocess": id},
    {"name": "constraint_foreign_key$ebnf$4", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "constraint_foreign_key", "symbols": ["constraint_foreign_key$subexpression$1", "__", "constraint_foreign_key$ebnf$1", "__", "constraint_foreign_key$subexpression$2", "__", "constraint_foreign_key$subexpression$3", "__", "this_table_column", "__", "constraint_foreign_key$subexpression$4", "__", "reference_table_name", "_", "reference_column_name", "constraint_foreign_key$ebnf$2", "constraint_foreign_key$ebnf$3", "constraint_foreign_key$ebnf$4"], "postprocess":  
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
        	},
    {"name": "this_table_column", "symbols": ["list_of_strings"], "postprocess": id},
    {"name": "reference_table_name$ebnf$1", "symbols": ["strchar"]},
    {"name": "reference_table_name$ebnf$1", "symbols": ["reference_table_name$ebnf$1", "strchar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "reference_table_name", "symbols": [{"literal":"`"}, "reference_table_name$ebnf$1", {"literal":"`"}], "postprocess": d => d[1].join("")},
    {"name": "reference_table_name$ebnf$2", "symbols": ["strchar"]},
    {"name": "reference_table_name$ebnf$2", "symbols": ["reference_table_name$ebnf$2", "strchar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "reference_table_name", "symbols": ["reference_table_name$ebnf$2"], "postprocess": d => d[0].join("")},
    {"name": "reference_column_name", "symbols": ["list_of_strings"], "postprocess": id},
    {"name": "reference_option$subexpression$1$subexpression$1", "symbols": [/[rR]/, /[eE]/, /[sS]/, /[tT]/, /[rR]/, /[iI]/, /[cC]/, /[tT]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "reference_option$subexpression$1", "symbols": ["reference_option$subexpression$1$subexpression$1"]},
    {"name": "reference_option$subexpression$1$subexpression$2", "symbols": [/[cC]/, /[aA]/, /[sS]/, /[cC]/, /[aA]/, /[dD]/, /[eE]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "reference_option$subexpression$1", "symbols": ["reference_option$subexpression$1$subexpression$2"]},
    {"name": "reference_option$subexpression$1$string$1", "symbols": [{"literal":"S"}, {"literal":"E"}, {"literal":"T"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "reference_option$subexpression$1$subexpression$3", "symbols": [/[nN]/, /[uU]/, /[lL]/, /[lL]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "reference_option$subexpression$1", "symbols": ["reference_option$subexpression$1$string$1", "__", "reference_option$subexpression$1$subexpression$3"]},
    {"name": "reference_option$subexpression$1$subexpression$4", "symbols": [/[nN]/, /[oO]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "reference_option$subexpression$1$subexpression$5", "symbols": [/[aA]/, /[cC]/, /[tT]/, /[iI]/, /[oO]/, /[nN]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "reference_option$subexpression$1", "symbols": ["reference_option$subexpression$1$subexpression$4", "__", "reference_option$subexpression$1$subexpression$5"]},
    {"name": "reference_option$subexpression$1$subexpression$6", "symbols": [/[sS]/, /[eE]/, /[tT]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "reference_option$subexpression$1$subexpression$7", "symbols": [/[dD]/, /[eE]/, /[fF]/, /[aA]/, /[uU]/, /[lL]/, /[tT]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "reference_option$subexpression$1", "symbols": ["reference_option$subexpression$1$subexpression$6", "__", "reference_option$subexpression$1$subexpression$7"]},
    {"name": "reference_option", "symbols": ["reference_option$subexpression$1"], "postprocess": id},
    {"name": "list_of_strings$subexpression$1$ebnf$1", "symbols": ["strchar"]},
    {"name": "list_of_strings$subexpression$1$ebnf$1", "symbols": ["list_of_strings$subexpression$1$ebnf$1", "strchar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "list_of_strings$subexpression$1", "symbols": [{"literal":"`"}, "list_of_strings$subexpression$1$ebnf$1", {"literal":"`"}], "postprocess": d => d[1].join("")},
    {"name": "list_of_strings$subexpression$1$ebnf$2", "symbols": ["strchar"]},
    {"name": "list_of_strings$subexpression$1$ebnf$2", "symbols": ["list_of_strings$subexpression$1$ebnf$2", "strchar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "list_of_strings$subexpression$1", "symbols": ["list_of_strings$subexpression$1$ebnf$2"], "postprocess": d => d[0].join("")},
    {"name": "list_of_strings", "symbols": [{"literal":"("}, "_", "list_of_strings$subexpression$1", "_", {"literal":")"}], "postprocess": d => { return d[2] }},
    {"name": "data_type", "symbols": ["oracle_data_type"], "postprocess": id},
    {"name": "column_definition", "symbols": ["oracle_column_definition"], "postprocess": id},
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
    {"name": "data_type_size", "symbols": ["_", {"literal":"("}, "_", "unsigned_decimal", "_", {"literal":")"}], "postprocess": (d) => { return d[3] }},
    {"name": "default_value", "symbols": ["S_NUMBER"]},
    {"name": "default_value$ebnf$1$subexpression$1$ebnf$1", "symbols": ["S_NUMBER"], "postprocess": id},
    {"name": "default_value$ebnf$1$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "default_value$ebnf$1$subexpression$1", "symbols": ["S_LPARENS", "_", "default_value$ebnf$1$subexpression$1$ebnf$1", "_", "S_RPARENS"], "postprocess":  (d) => {
        	return d[2];
        }
        },
    {"name": "default_value$ebnf$1", "symbols": ["default_value$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "default_value$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "default_value", "symbols": ["default_value$ebnf$1"]},
    {"name": "default_value", "symbols": ["O_QUOTED_STRING"]},
    {"name": "O_QUOTED_STRING", "symbols": ["S_DQUOTE_STRING"]},
    {"name": "O_QUOTED_STRING", "symbols": ["S_SQUOTE_STRING"]},
    {"name": "oracle_data_type$subexpression$1$subexpression$1", "symbols": [/[cC]/, /[hH]/, /[aA]/, /[rR]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "oracle_data_type$subexpression$1$ebnf$1", "symbols": ["data_type_size"], "postprocess": id},
    {"name": "oracle_data_type$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "oracle_data_type$subexpression$1", "symbols": ["oracle_data_type$subexpression$1$subexpression$1", "oracle_data_type$subexpression$1$ebnf$1"], "postprocess":  
        (d) => { 
        	return { type: 'CHAR', tag: 'text', length: d[1] }
        }
        	},
    {"name": "oracle_data_type$subexpression$1$subexpression$2", "symbols": [/[nN]/, /[cC]/, /[hH]/, /[aA]/, /[rR]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "oracle_data_type$subexpression$1$ebnf$2", "symbols": ["data_type_size"], "postprocess": id},
    {"name": "oracle_data_type$subexpression$1$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "oracle_data_type$subexpression$1", "symbols": ["oracle_data_type$subexpression$1$subexpression$2", "oracle_data_type$subexpression$1$ebnf$2"], "postprocess":  
        (d) => { 
        	return { type: 'NCHAR', tag: 'text', length: d[1] }
        	   	} 
        	},
    {"name": "oracle_data_type$subexpression$1$subexpression$3", "symbols": [/[vV]/, /[aA]/, /[rR]/, /[cC]/, /[hH]/, /[aA]/, /[rR]/, {"literal":"2"}], "postprocess": function(d) {return d.join(""); }},
    {"name": "oracle_data_type$subexpression$1$ebnf$3", "symbols": ["data_type_size"], "postprocess": id},
    {"name": "oracle_data_type$subexpression$1$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "oracle_data_type$subexpression$1", "symbols": ["oracle_data_type$subexpression$1$subexpression$3", "oracle_data_type$subexpression$1$ebnf$3"], "postprocess":  
        (d) => { 
        	return { type: d[0], tag: 'textarea', length: d[1]  }
        	   } 
        	},
    {"name": "oracle_data_type$subexpression$1$subexpression$4", "symbols": [/[vV]/, /[aA]/, /[rR]/, /[cC]/, /[hH]/, /[aA]/, /[rR]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "oracle_data_type$subexpression$1$ebnf$4", "symbols": ["data_type_size"], "postprocess": id},
    {"name": "oracle_data_type$subexpression$1$ebnf$4", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "oracle_data_type$subexpression$1", "symbols": ["oracle_data_type$subexpression$1$subexpression$4", "oracle_data_type$subexpression$1$ebnf$4"], "postprocess":  
        (d) => { 
        	return { type: d[0], tag: 'textarea', length: d[1] }
        } 
        	},
    {"name": "oracle_data_type$subexpression$1$subexpression$5", "symbols": [/[nN]/, /[vV]/, /[aA]/, /[rR]/, /[cC]/, /[hH]/, /[aA]/, /[rR]/, {"literal":"2"}], "postprocess": function(d) {return d.join(""); }},
    {"name": "oracle_data_type$subexpression$1$ebnf$5", "symbols": ["data_type_size"], "postprocess": id},
    {"name": "oracle_data_type$subexpression$1$ebnf$5", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "oracle_data_type$subexpression$1", "symbols": ["oracle_data_type$subexpression$1$subexpression$5", "oracle_data_type$subexpression$1$ebnf$5"], "postprocess":  
        (d) => { 
        	return { type: 'NVARCHAR2', tag: 'text', length: d[1] }
        } 
        	},
    {"name": "oracle_data_type$subexpression$1$subexpression$6", "symbols": [/[iI]/, /[nN]/, /[tT]/, /[eE]/, /[gG]/, /[eE]/, /[rR]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "oracle_data_type$subexpression$1$ebnf$6", "symbols": ["data_type_size"], "postprocess": id},
    {"name": "oracle_data_type$subexpression$1$ebnf$6", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "oracle_data_type$subexpression$1", "symbols": ["oracle_data_type$subexpression$1$subexpression$6", "oracle_data_type$subexpression$1$ebnf$6"], "postprocess":  
        (d) => { 
        	return { 
        		type: 'INTEGER', tag: 'number', length: d[1] 
           	}
        } 
        	},
    {"name": "oracle_data_type$subexpression$1$subexpression$7", "symbols": [/[cC]/, /[lL]/, /[oO]/, /[bB]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "oracle_data_type$subexpression$1", "symbols": ["oracle_data_type$subexpression$1$subexpression$7"], "postprocess":  
        (d) => { 
        	return { type: 'CLOB', tag: 'textarea' }
        	   	} 
        	},
    {"name": "oracle_data_type$subexpression$1$subexpression$8", "symbols": [/[nN]/, /[cC]/, /[lL]/, /[oO]/, /[bB]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "oracle_data_type$subexpression$1", "symbols": ["oracle_data_type$subexpression$1$subexpression$8"], "postprocess":  
        (d) => { 
        	return { 
        		type: 'NCLOB', tag: 'textarea' 
        	}
        } 
        	},
    {"name": "oracle_data_type$subexpression$1$subexpression$9", "symbols": [/[lL]/, /[oO]/, /[nN]/, /[gG]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "oracle_data_type$subexpression$1$ebnf$7", "symbols": ["data_type_size"], "postprocess": id},
    {"name": "oracle_data_type$subexpression$1$ebnf$7", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "oracle_data_type$subexpression$1", "symbols": ["oracle_data_type$subexpression$1$subexpression$9", "oracle_data_type$subexpression$1$ebnf$7"], "postprocess":  
        (d) => { 
        	return { 
        		type: 'LONG', tag: 'number', length: d[1] 
        	}
        } 
        	},
    {"name": "oracle_data_type$subexpression$1$subexpression$10", "symbols": [/[nN]/, /[uU]/, /[mM]/, /[bB]/, /[eE]/, /[rR]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "oracle_data_type$subexpression$1$ebnf$8", "symbols": ["data_type_size"], "postprocess": id},
    {"name": "oracle_data_type$subexpression$1$ebnf$8", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "oracle_data_type$subexpression$1", "symbols": ["oracle_data_type$subexpression$1$subexpression$10", "oracle_data_type$subexpression$1$ebnf$8"], "postprocess":  
        (d) => { 
        	var data_type = {};
        	var number = d[1];
        	data_type.type = "Number";
        	data_type.tag = "number";
        	if(number != null){
        		var numberAsString = number.toString();
        		if(numberAsString.indexOf('.') !== -1){
        			var numberArr = numberAsString.split('.');
        			data_type.digits = numberArr[0];
        			data_type.decimals = numberArr[1] || '';
        		} else {
        			data_type.length = numberArr[0];
        		}
        	}
        	
        	return data_type;
        } 
        	},
    {"name": "oracle_data_type$subexpression$1$subexpression$11", "symbols": [/[dD]/, /[aA]/, /[tT]/, /[eE]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "oracle_data_type$subexpression$1", "symbols": ["oracle_data_type$subexpression$1$subexpression$11"], "postprocess":  
        (d) => { 
        	return { 
        		type: 'DATE', tag: 'date' 
           }
        } 
        	},
    {"name": "oracle_data_type$subexpression$1$subexpression$12", "symbols": [/[iI]/, /[nN]/, /[tT]/, /[eE]/, /[rR]/, /[vV]/, /[aA]/, /[lL]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "oracle_data_type$subexpression$1", "symbols": ["oracle_data_type$subexpression$1$subexpression$12"], "postprocess":  
        (d) => {
        	return { 
        		type: 'INTERVAL', tag: 'text' 
           }
        } 
        	},
    {"name": "oracle_data_type$subexpression$1$subexpression$13", "symbols": [/[tT]/, /[iI]/, /[mM]/, /[eE]/, /[sS]/, /[tT]/, /[aA]/, /[mM]/, /[pP]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "oracle_data_type$subexpression$1", "symbols": ["oracle_data_type$subexpression$1$subexpression$13"], "postprocess":  
        (d) => { 
        	return { 
        		type: 'TIMESTAMP', tag: 'date' 
        	}
        } 
        	},
    {"name": "oracle_data_type", "symbols": ["oracle_data_type$subexpression$1"], "postprocess": id},
    {"name": "oracle_column_definition$subexpression$1$subexpression$1", "symbols": [/[nN]/, /[oO]/, /[tT]/, {"literal":" "}, /[nN]/, /[uU]/, /[lL]/, /[lL]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "oracle_column_definition$subexpression$1", "symbols": ["oracle_column_definition$subexpression$1$subexpression$1"], "postprocess":  
        (d) => { 
        	return { type: "not null", nullable: false }
        } 
        	},
    {"name": "oracle_column_definition$subexpression$1$subexpression$2", "symbols": [/[nN]/, /[uU]/, /[lL]/, /[lL]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "oracle_column_definition$subexpression$1", "symbols": ["oracle_column_definition$subexpression$1$subexpression$2"], "postprocess":  
        (d) => { 
        	return {  type: "null", nullable: true }
        } 
        	},
    {"name": "oracle_column_definition$subexpression$1$subexpression$3", "symbols": [/[pP]/, /[rR]/, /[iI]/, /[mM]/, /[aA]/, /[rR]/, /[yY]/, {"literal":" "}, /[kK]/, /[eE]/, /[yY]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "oracle_column_definition$subexpression$1", "symbols": ["oracle_column_definition$subexpression$1$subexpression$3"], "postprocess":  
        (d) => { 
        	return { type: "primary key", is_primary_key: true }
        } 
        	},
    {"name": "oracle_column_definition$subexpression$1$subexpression$4", "symbols": [/[dD]/, /[eE]/, /[fF]/, /[aA]/, /[uU]/, /[lL]/, /[tT]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "oracle_column_definition$subexpression$1", "symbols": ["oracle_column_definition$subexpression$1$subexpression$4", "__", "default_value"], "postprocess":  
        (d) => { 
        	return { type: "default", default_value: d[2].join("") }
        } 
        	},
    {"name": "oracle_column_definition", "symbols": ["oracle_column_definition$subexpression$1"], "postprocess": id},
    {"name": "comma", "symbols": [/[,]/], "postprocess": id},
    {"name": "strchar", "symbols": [/[\w]/], "postprocess": id},
    {"name": "S_NUMBER$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "S_NUMBER$ebnf$1", "symbols": ["S_NUMBER$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "S_NUMBER", "symbols": ["S_NUMBER$ebnf$1"]},
    {"name": "S_EQUAL", "symbols": [{"literal":"="}]},
    {"name": "S_LPARENS", "symbols": [{"literal":"("}]},
    {"name": "S_RPARENS", "symbols": [{"literal":")"}]},
    {"name": "S_COMMA", "symbols": [{"literal":","}]},
    {"name": "S_SEMICOLON", "symbols": [{"literal":";"}]},
    {"name": "S_BIT_FORMAT", "symbols": [{"literal":"0"}]},
    {"name": "S_BIT_FORMAT", "symbols": [{"literal":"1"}]},
    {"name": "S_DQUOTE_STRING$ebnf$1", "symbols": ["strchar"]},
    {"name": "S_DQUOTE_STRING$ebnf$1", "symbols": ["S_DQUOTE_STRING$ebnf$1", "strchar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "S_DQUOTE_STRING", "symbols": [{"literal":"\""}, "_", "S_DQUOTE_STRING$ebnf$1", "_", {"literal":"\""}], "postprocess": (d) => { return d[2].join("") }},
    {"name": "S_SQUOTE_STRING$ebnf$1", "symbols": ["strchar"]},
    {"name": "S_SQUOTE_STRING$ebnf$1", "symbols": ["S_SQUOTE_STRING$ebnf$1", "strchar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "S_SQUOTE_STRING", "symbols": [{"literal":"'"}, "_", "S_SQUOTE_STRING$ebnf$1", "_", {"literal":"'"}], "postprocess": (d) => { return d[2].join("") }}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
