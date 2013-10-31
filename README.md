jSchema
=======

Minimal JSON representation of SQL database table definitions and/or view definitions    

jSchema is a way to express a set of table definitions in a database or other dataset     

For table definitions, supports Primary Key, Varchar, Int, DateTime, and NOT NULL for fields.    
For views, supports SQL statements.

###Specification
####1.0
Each key is a table or view name.  
####1.1
In a table, there is an array of fields. 
####1.2
Before the name, a symbol specifies the data type:    
    
String (nothing), Integer #, DateTime @, Floating &, Blob ~
####1.3
After the name, ? means NOT NULL, + means AUTO-INCREMENT.  The first field is the primary key.   
####1.4
For a view, the value is the SQL used to generate the view.

<database_name>.json
````
{
  "Person": ['#id', 'Name?', 'EmplNo+', @DateTime],
  "MyView": 'select Name from Person'
}
````

Generate the database using makedb.js, and the type of database to create:
````
$ node makedb sqlite3
````
