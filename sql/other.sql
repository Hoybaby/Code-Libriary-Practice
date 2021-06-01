
-- the like keyword will look for results similar to what the string is

SELECT * FROM MOVIES WHERE name like 'Se_en'

-- the % is similar to like. it will filter the result to include the A
-- If it is like this 'A%' where it begins with an A
SELECT * from movies where name like 'The %';

-- Can look for null with this
SELECT NAME from movies where imdb_rating IS NULL;