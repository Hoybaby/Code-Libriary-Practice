-- it is possible to count how many rows are in a table in case there is alot, 
-- to do so you can use this function below. table name is w.e it might be


Select Count(*) from table_name; 

-- to find the sum of the column use this

SELECT Sum(column) from table_name;

-- One can also figure out the lowest number in a table or highest with two similar commands
SELECT MIN(dolumn) from table_name;

-- to round numbers in a column must need ROUND(column, number of decimals)

SELECT ROUND(price) from fake_apps;

-- In order to find the count or average of many columns in a specifc title, can use GROUP BY
-- this mean that we are SELECT the price column, count it all then GROUP BY each price which there is a couple
SELECT price, COUNT(*) 
from table_name 
GROUP BY price;

-- It is possible to add a where count. Usually the GROUP BY Is at the end of the query
SELECT price, COUNT(*) 
from table_name 
where downloads > 20000
GROUP BY price;

