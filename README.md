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
