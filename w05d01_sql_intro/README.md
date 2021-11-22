# W05D01 - SQL Intro

## Objectives
- [X] Introduction to RDBMS
- [X] The Relational Data Model (Tables, Columns, Rows)
- [X] `SELECT` Statements
- [X] Filtering and ordering
- [X] Joining tables
- [X] Grouping records
- [X] Aggregation functions
- [X] `LIMIT` and `OFFSET`

## Databases
Just a collection of tables
What is a table?

| id | Track Title | Artist | Duration |
|----|-------------|--------|----------|
| 1  | Always be my Baby | Mariah Carey | 4:17 |
| 2  | Children's Story | Slick Rick | 4:01 |

- rows (records)
- columns (fields)

## Communicating with a database
- Front-end <==> backend <==> Postgres Database
- Both use TCP 
- RDBMS (Relational Database Management System)
- this week we will be using `psql`


## SQL Challenges from lecture

1. List the total number of songs
```sql
SELECT COUNT(*) AS num_songs
FROM songs; 
```

2. List the songs with a rating over 9
```sql
SELECT *
FROM songs
WHERE rating > 9;
```

3. List all of the albums from before 2010
```sql
SELECT * 
FROM albums
WHERE release_date < '2010-01-01';
```

4. List the albums from before 2010 and have a genre of "folk"
```sql
SELECT * 
FROM albums
WHERE release_date < '2010-01-01' AND genre = 'folk';
```

5. List the albums that have genre of "folk" arranged alphabetically by artist and then by release date newest to oldest.
```sql
SELECT * 
FROM albums
WHERE genre = 'folk'
ORDER BY artist_name, release_date DESC;
```

6. List all albums to be released.
```sql
SELECT *
FROM albums
WHERE release_date > NOW();

SELECT *
FROM albums
WHERE release_date > CURRENT_DATE;

```

7. List all of the genres, don't repeat any.
```sql
SELECT DISTINCT genre
FROM albums;
```


8. List all of the albums along with their songs.
```sql
SELECT *
FROM albums
JOIN songs ON albums.id = songs.album_id;
```

9. List all of the albums along with how many songs each album has.
```sql
SELECT album_name, artist_name, COUNT(*) AS num_songs
FROM albums
JOIN songs ON albums.id = songs.album_id
GROUP BY album_name, artist_name;
```

10. List all of the albums with more than 10 songs.
```sql
SELECT album_name, artist_name, COUNT(*) AS num_songs
FROM albums
JOIN songs ON albums.id = songs.album_id
GROUP BY album_name, artist_name
HAVING COUNT(*) > 10;
```

11. List **ALL** albums along with their songs
```sql
SELECT *
FROM albums
LEFT JOIN songs ON albums.id = songs.album_id;
```

12. List albums along with their average song rating.
```sql
SELECT album_name, artist_name, ROUND(AVG(rating) * 100) / 100 AS avg_rating
FROM albums
JOIN songs ON albums.id = songs.album_id
GROUP BY album_name, artist_name
ORDER BY avg_rating;

```

13. List albums and songs with ratings higher than their album's average.
```sql
SELECT album_name, 
  artist_name, 
  song_name,
  rating
FROM albums
JOIN songs ON albums.id = songs.album_id
WHERE rating > (SELECT AVG(rating) FROM songs WHERE songs.album_id = albums.id);
```

### Useful Links
- [Top 10 Most Popular RDBMSs](https://www.c-sharpcorner.com/article/what-are-the-most-popular-relational-databases/)
- [Another Ranking of DBMSs](https://db-engines.com/en/ranking)
- [SELECT Queries Order of Execution](https://sqlbolt.com/lesson/select_queries_order_of_execution)
- [SQL Joins Visualizer](https://sql-joins.leopard.in.ua/)