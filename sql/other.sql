
-- the like keyword will look for results similar to what the string is

SELECT * FROM MOVIES WHERE name like 'Se_en'

-- the % is similar to like. it will filter the result to include the A
-- If it is like this 'A%' where it begins with an A
SELECT * from movies where name like 'The %';

-- Can look for null with this
SELECT NAME from movies where imdb_rating IS NULL;

-- one can query a table and order it in one with this command
-- with key words like DESC and ASC you can choose how
select name,year 
from movies 
order by name;

-- another example from above
select name, year, imdb_rating
from movies 
order by imdb_rating DESC ;

-- this will show the best reviews as high
select * from nomnom
WHERE review
ORDER BY review DESC;