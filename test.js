var db = require('./jSchema.js')();

db.put('Person', {name: 'Chris'});
db.put('Person', {name: 'Brandon'});
console.log(db.get('Person', 'name', 'Chris'));

db.delete('Person', 'name', 'Chris');
console.log(db.get('Person', 'name', 'Chris'));
console.log(db.get('Person'));

db.post('Person', 'name', 'Brandon', {name:'Chris'});
console.log(db.get('Person'));

db.delete('Person');
console.log(db.get('Person'));