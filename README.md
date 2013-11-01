jSchema
=======

Minimal JSON representation of database table definitions and/or commands.  A simple JSON definition which is executed to create and set up a database.   

jSchema is a way to express a set of table definitions in a database or other dataset     

For table definitions, field types supported Primary Key, String, Integer, DateTime, Floating and Blob.

###Specification
####1.0
Each key is a table name or descriptive name for a SQL command.  
####1.1
For a table, the value is an array of fields optionally prefaced by the descriptor.     
String (nothing), Integer #, DateTime @, Floating &, Blob ~
####1.2
For SQL which will be executed, the value is the SQL text. 
    
<database_name>.json
````
{
  "Person": ['#id', 'Name?', 'EmplNo+', @DateTime],
  "MySql": 'INSERT INTO ...'
}
````
Generate the database using makedb.js (SQLite is supported), and the type of database to create:
````
$ node makedb sqlite3 test_schema.json
````
