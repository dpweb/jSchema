var db = require('./jSchema.js')();
var express = require('express'), app = express();
app.use(express.bodyParser());

app.get('/:table', function(r, s){
  s.end(JSON.stringify(db.get(r.params.table)));
})

app.put('/:table', function(r, s){
  db.put(r.params.table, r.body);
  s.end(JSON.stringify(r.body));
})

app.post('/:table/:key', function(r, s){
  db.post(r.params.table, key, r.body);
  s.end(JSON.stringify(r.body));
})

app.delete('/:table', function(r, s){
  db.delete(r.params.table, Object.keys(r.body)[0], r.body[0]);
  s.end(JSON.stringify(r.body));
})

app.listen(80);