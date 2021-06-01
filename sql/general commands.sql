
-- creates the table
CREATE TABLE friends(
    id INTEGER,
    name TEXT,
    birthday DATE
);

-- this allows me insert into the table
INSERT INTO friends(id, name, birthday)
VALUES ( 1, 'Ororo Munroe', '1940-05-30');



INSERT INTO friends
VALUES(2, 'Stephany Benitez', '1994-06-09');

INSERT INTO friends
VALUES(3, 'Renz Reyes', '1991-12-18');

-- allows me to update the table . set name tells me the colum and the where is what id slot.
UPDATE friends
SET name = 'Storm'
Where id = 1;

-- alter allows me to  add/delete the row
ALTER TABLE friends
ADD COLUMN email TEXT;

UPDATE friends
SET email = 'storm@codeademy.com'
where id = 1;

DELETE FROM friends
where id = 1;


SELECT * from friends;