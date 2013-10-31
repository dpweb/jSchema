// only sqlite supported thus far

var dbtype = process.argv[2],
	schema_fn = process.argv[3];

console.log('db type is', dbtype);
makeSQLite3(schema_fn);

function makeSQLite3(sfn){
	var schema = require(sfn),
		sqlite = require('sqlite'),
		db = new sqlite.Database();

	db.open(sfn.replace(/json/, 'db'), function(e){
		for(item in schema){
			if(typeof item !== 'string'){
				// table
				var fields = schema[item],
					flds = [];
				for(field in fields){
					var name = fields[field];
					if(name[0] == '#') name = name.replace('#', '') + ' INTEGER';
					if(name[0] == '~') name = name.replace('~', '') + ' BLOB';
					flds.push(name);
				}
				console.log('CREATE TABLE IF NOT EXISTS ' + item + ' (' + flds.join(',') + ')');
			} else {
				// view
				console.log('CREATE VIEW ' + item + ' AS ' + schema[item]);
			}
		}
	});
}