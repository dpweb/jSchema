// only sqlite supported thus far

var dbtype = process.argv[2],
	schema_fn = process.argv[3];

console.log('db type is', dbtype);
makeSQLite3(schema_fn);

function makeSQLite3(sfn){
	var schema = require('./'+sfn),
		sqlite = require('node-sqlite-purejs');

	sqlite.open(sfn.replace(/json$/, 'db'), {}, function(e, db){
		if(e) throw e;
		for(item in schema){
			if(typeof schema[item] !== 'string'){
				// table
				var fields = schema[item],
					flds = [];
				for(field in fields){
					var name = fields[field];
					if(name[0] == '#') name = name.replace('#', '') + ' INTEGER';
					if(name[0] == '~') name = name.replace('~', '') + ' BLOB';
					flds.push(name);
				}
				var sql = 'CREATE TABLE IF NOT EXISTS ' + item + ' (' + flds.join(',') + ')';
				console.log(sql);
				db.exec(sql);
			} else {
				// sql
				console.log(schema[item]);
				db.exec(schema[item], console.log);
			}
		}

	});
}