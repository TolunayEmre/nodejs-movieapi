# Movies

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /api/movies/AllMovie | `GET` | Empty | List all movies. |
| /api/movies/AddMovie | `POST` | {'title':'foo', 'category':'bar', 'country':'Turkey', year:1990, director:"id", imdb_score: 9.7 } | Create a new movie. |
| /api/movies/SearchMovie/:movie_id | `GET` | Empty | Get a movie. |
| /api/movies/UpdateMovie/:movie_id | `PUT` | {'name':'foo', 'surname':'bar'} | Update a movie with new info. |
| /api/movies/DeleteMovie/:movie_id | `DELETE` | Empty | Delete a movie. |
| /api/movies/top10 | `GET` | Empty | Get the top 10 movies. |
| /api/movies/BetweenMovie/:start_year/:end_year | `GET` | Empty | Movies between two dates. |

# Directors

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /api/directors/Alldirector | `GET` | Empty | List all directors. |
| /api/directors/AddDirector | `POST` | { name: 'foo', surname:'bar', bio:'lorem ipsum' } | Create a new director. |
| /api/directors/SearchDirector/:director_id | `GET` | Empty | Get a director. |
| /api/directors/UpdateDirector/:director_id | `PUT` | {'name':'foo', 'surname':'bar', 'bio': 'lorem'} | Update a director with new info. |
| /api/directors/DeleteDirector/:director_id | `DELETE` | Empty | Delete a director. |

# Show Films Director

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /api/movies/AllMovieAndDirector | `GET` | Empty | Show films director. |

# User

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /api/AddUser | `POST` | { username: 'foo', password:'1234' } | Create a new user. |
| /api/AddUserBcrypt | `POST` | { username: 'foo', password:'1234' } | Create a new SECRET user. |
| /Authenticate | `POST` | { username: 'foo', password:'1234' } | Generate a token. |

