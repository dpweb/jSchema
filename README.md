jSchema
=======

Minimal JSON representation of database table definitions and/or commands.  A simple JSON definition which is executed to create and set up a database.   

jSchema is a way to express a set of table definitions in a database or other dataset     

###Specification
####1.0
Each key is a table name or the special defined key @functions.  
####1.1
For a table, the value is an array of fields optionally followed by the data type descriptor.    
The descriptior is optional, if you want to enforce data type consistency.    

####String (nothing)
####Integer \#
####DateTime @
####Floating &
####Boolean !
####Blob ~
####Unique id *
####Reference (to anohter table) -> <tablename>   

####1.2
@functions is a special key, used to hold procedures. Each key is a function name, followed by instructions for the database.
````
  "@functions": {
     "populateCIs" : {
        "sql": "INSERT INTO funcs (Name, Sql) VALUES ('NewCI','INSERT INTO CIs (id, Status) VALUES (?, ?);')"
      }
  }
````
Generate the database using makedb.js (SQLite is supported), and the type of database to create:
````
$ node makedb sqlite3 test_schema.json
````
