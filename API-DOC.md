# TODOS App Server
TODOS App is an application to manage your your list of agenda. This app has : 
* RESTful endpoint for todos's CRUD operation
* JSON formatted response

&nbsp;

## RESTful endpoints

### POST /register

> Create new user

_Request Header_
```
{
  null
}
```

_Request Body_
```
{
  "email": "aman@kak.com",
  "password": "<password insert by user>"
}
```

_Response (201 - Created)_
```
{
  "id": <1>,
  "email": "<aman@kak.com>",
  "password": "<hashed password>",
  "createdAt": "2021-03-29T11:08:28.842Z",
  "updatedAt": "2021-03-29T11:08:28.842Z"
}
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Internal server error"
}
```



### POST /login

> Login for User

_Request Body_
```
{
  "email": "aman@kak.com",
  "password": "<input password>"
}
```

_Response (200 - OK)_
```
{
  "id": 1,
  "email": "aman@kak.com",
  "access_token": <generate by system>
}
```

_Response (400 - Bad Request)_
```
{
  "message": "<invalid email or password>"
}
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Internal server error"
}
```

### POST /todos

> Create new todos

_Request Header_
```
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbWFuQGthay5jb20iLCJpYXQiOjE2MTcwOTQzOTF9.wPezH51Q9GlMxRW5k1q8w0nPoeSlBkmFYqu1DGC0HYE"
}
```

_Request Body_
```
{
    "title": "Mau nyobain cilok pacar",
    "description": "Pacar bikin cilok, jadinya harus nyobain",
    "due_date": "2021-04-02T17:00:00.000Z",
}
```

_Response (201 - Created)_
```
{
    "id": 6,
    "title": "Mau nyobain cilok pacar",
    "description": "Pacar bikin cilok, jadinya harus nyobain",
    "due_date": "2021-04-02T17:00:00.000Z",
    "UserId": 1,
    "updatedAt": "2021-03-30T09:15:57.851Z",
    "createdAt": "2021-03-30T09:15:57.851Z",
    "status": "Unfinished"
}
```

_Response (400 - Bad Request)_
```
{
  "message": "<validation error>"
}
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Internal server error", detailError: err"
}
```

### GET /todos

> Show all todos with same id from user

_Request Header_
```
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbWFuQGthay5jb20iLCJpYXQiOjE2MTcwOTQzOTF9.wPezH51Q9GlMxRW5k1q8w0nPoeSlBkmFYqu1DGC0HYE"
}
```

_Request Body_
```
{
  not needed
}
```

_Response (200 - OK)_
```
[
    {
        "id": 5,
        "title": "Mau nyobain cilok pacar",
        "description": "Pacar bikin cilok, jadinya harus nyobain",
        "status": "Unfinished",
        "due_date": "2021-04-02T17:00:00.000Z",
        "UserId": 1,
        "createdAt": "2021-03-30T08:54:39.459Z",
        "updatedAt": "2021-03-30T08:54:39.459Z"
    },
    {
        "id": 6,
        "title": "Mau nyobain cilok pacar",
        "description": "Pacar bikin cilok, jadinya harus nyobain",
        "status": "Unfinished",
        "due_date": "2021-04-02T17:00:00.000Z",
        "UserId": 1,
        "createdAt": "2021-03-30T09:15:57.851Z",
        "updatedAt": "2021-03-30T09:15:57.851Z"
    }
]
```

_Response (400 - Bad Request)_
```
{
  "message": "<validation error>"
}
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Internal server error", detailError: err"
}
```

### GET /todos/:id

> Show selected todos with same UserId and same from user

_Request Header_
```
{
  "id": 6,
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbWFuQGthay5jb20iLCJpYXQiOjE2MTcwOTQzOTF9.wPezH51Q9GlMxRW5k1q8w0nPoeSlBkmFYqu1DGC0HYE"
}
```

_Request Body_
```
{
  not needed
}
```

_Response (200 - OK)_
```
{
        "id": 6,
        "title": "Mau nyobain cilok pacar",
        "description": "Pacar bikin cilok, jadinya harus nyobain",
        "status": "Unfinished",
        "due_date": "2021-04-02T17:00:00.000Z",
        "UserId": 1,
        "createdAt": "2021-03-30T09:15:57.851Z",
        "updatedAt": "2021-03-30T09:15:57.851Z"
}
```

_Response (400 - Bad Request)_
```
{
  "message": "<validation error>"
}
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Internal server error", detailError: err"
}
```

### PUT /todos/:id

_Request Header_
```
{
  "id": 6,
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbWFuQGthay5jb20iLCJpYXQiOjE2MTcwOTQzOTF9.wPezH51Q9GlMxRW5k1q8w0nPoeSlBkmFYqu1DGC0HYE"
}
```

_Request Body_
```
{
        "title": "Mau nyobain cilok pacar 2",
        "description": "Pacar bikin cilok, jadinya harus nyobain 2",
        "due_date": "2021-04-02T17:00:00.000Z",
}
```

_Response (200 - OK)_
```
{
        "id": 6,
        "title": "Mau nyobain cilok pacar 2",
        "description": "Pacar bikin cilok, jadinya harus nyobain 2",
        "status": "Unfinished",
        "due_date": "2021-04-02T17:00:00.000Z",
        "UserId": 1,
        "createdAt": "2021-03-30T09:15:57.851Z",
        "updatedAt": "2021-03-30T09:15:57.851Z"
}
```

_Response (404)_
```
{
  "message": "<validation error>"
}
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Internal server error", detailError: err"
}
```

### PATCH /todos/:id

_Request Header_
```
{
  "id": 6,
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbWFuQGthay5jb20iLCJpYXQiOjE2MTcwOTQzOTF9.wPezH51Q9GlMxRW5k1q8w0nPoeSlBkmFYqu1DGC0HYE"
}
```

_Request Body_
```
{
    "status": "Finished",
}
```

_Response (200 - OK)_
```
{
        "id": 6,
        "title": "Mau nyobain cilok pacar",
        "description": "Pacar bikin cilok, jadinya harus nyobain",
        "status": "Finished",
        "due_date": "2021-04-02T17:00:00.000Z",
        "UserId": 1,
        "createdAt": "2021-03-30T09:15:57.851Z",
        "updatedAt": "2021-03-30T09:15:57.851Z"
}
```

_Response (404)_
```
{
  "message": "<validation error>"
}
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Internal server error", detailError: err"
}
```

### DELETE /todos/:id

_Request Header_
```
{
  "id": 6,
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbWFuQGthay5jb20iLCJpYXQiOjE2MTcwOTQzOTF9.wPezH51Q9GlMxRW5k1q8w0nPoeSlBkmFYqu1DGC0HYE"
}
```

_Request Body_
```
{
not needed
}
```

_Response (200 - OK)_
```
{
   "message": "todo success to delete"
}
```

_Response (404)_
```
{
  "message": "<validation error>"
}
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Internal server error", detailError: err"
}
```

### GET /weather

_Request Body_
```
{
not needed
}
```

_Response (200 - OK)_
```
{
    "coord": {
        "lon": 106.8451,
        "lat": -6.2146
    },
    "weather": [
        {
            "id": 502,
            "main": "Rain",
            "description": "heavy intensity rain",
            "icon": "10d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 25.37,
        "feels_like": 26.26,
        "temp_min": 25,
        "temp_max": 26.11,
        "pressure": 1008,
        "humidity": 88
    },
    "visibility": 5000,
    "wind": {
        "speed": 2.57,
        "deg": 0
    },
    "rain": {
        "1h": 6.83
    },
    "clouds": {
        "all": 40
    },
    "dt": 1617405456,
    "sys": {
        "type": 1,
        "id": 9384,
        "country": "ID",
        "sunrise": 1617404083,
        "sunset": 1617447409
    },
    "timezone": 25200,
    "id": 1642911,
    "name": "Jakarta",
    "cod": 200
}
```

_Response (404)_
```
{
  "message": "<validation error>"
}
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Internal server error", detailError: err"
}
```

### GET /kanyeQuote

_Request Body_
```
{
not needed
}
```

_Response (200 - OK)_
```
{
   "Life is the ultimate gift"
}
```

_Response (404)_
```
{
  "message": "<validation error>"
}
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Internal server error", detailError: err"
}
```

### GET /boredapi

_Request Body_
```
{
not needed
}
```

_Response (200 - OK)_
```
{
   "Learn to write with your nondominant hand"
}
```
`

_Response (500 - Internal Server Error)_
```
{
  "message": "Internal server error", detailError: err"
}
```

