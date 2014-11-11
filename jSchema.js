// var db = require('jschema.js')(engine);
// db.get(table, key, value)
// db.put(table, record)
// db.delete(table, key)
// db.post(table, key, value)

var fs = require('fs'), data = {};

var default_engine = {
  "onstart": function(schema, options){
     var tables = Object.keys(schema);
     tables.forEach(function(table){
     	var fn = './' + table + '.json';
     	if(!fs.existsSync(fn)) fs.writeFileSync(fn, '[]');
     	data[table] = require(fn);
     });
     return {
     	put: function(table, obj){
     		data[table].push(obj);
     	    fs.writeFileSync(fn = './' + table + '.json', JSON.stringify(data[table], null, 2));
     	},
     	get: function(table, key, value){
     		return data[table].filter(function(rec){ return rec[key] == value })
     	},
     	delete: function(table, key, value){
     		data[table] = data[table].filter(function(rec){ return rec[key] != value });
     		fs.writeFileSync(fn = './' + table + '.json', JSON.stringify(data[table], null, 2));
     	},
     	post: function(table, key, value, update){
     		var ret = [];
     		data[table].forEach(function(rec){
     		  if(rec[key] == value){
     		  	for(i in update) rec[i] = update[i];
     		  }
     		  ret.push(rec);
     		})
     		fs.writeFileSync(fn = './' + table + '.json', JSON.stringify(ret, null, 2));
     	}
     }
  }
}

module.exports = function(handler){
  return (handler || default_engine).onstart(require('./jSchema.json'));
}