# travelers-ilj-p2
Stephen McNally, Adam Alti, Elijah McLaughlin, Lena Zhang, Holden Cowger

Packages Installed:
Express
Express PG


Step 0: Create a new file called index.js
Step 1: Import Express, BodyParser, and set const db  = Queries
Step 2: Create an App.get function with a path of '\get_rows', db.get_rows()
Step 3: Do Step 2 for get_films and other API calls
Step 4: Run index.js using App.listen(3000);

Step 1: Create a const called "pool" to access the PG
Step 2: Have database inside of pool be named "dvd_rentals", and the username be "postgres". Host on Port 5432
Step 3: Create a get_rows() object using pool.query - write "select * from <table_name>"
Step 4: Inside of the get_rows() function, return response.status (on success, this will be a json containing 200 and results.rows).
Step 5: Create a get_films() object using pool.query - write "select <table_name>.titles from <table_name>"
Step 6: Inside of the get_rows() function, return response.status (on success, this will be a json containing 200 and results.rows).
Step 7: Repeats Steps 3-6 for accessing any other queries, changing the queries appropriately
Step 8: Export get_rows() and get_films()

The code in this repo is concept code and skeleton code - Files attached may be buggy - programmers beware!
