jSchema
=======

Minimal JSON representation of SQL table definitions

jSchema is a JSON formatted description of table defs in a database.  The intention is to provide a small easy to
read way to understand the schema of a SQL database.    

Supports the following minimal set: Tables, Views, Primary Key, Varchar, Int, DateTime, and NOT NULL.    
  
Each key is a table or view name.  In a table, there is an array of fields.     
Before the name, a symbol specifies the data type:  # = int, @ = DateTime, and nothing means a VARCHAR(255).    
After the name, ? means NOT NULL, + means AUTO-INCREMENT.

Schema.json
````
{
  "Person": ['#id', 'Name?', 'EmplNo+', @DateTime],
	"MyView": 'select Name from Person'
}
````
