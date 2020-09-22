# API Endpoints

All endpoints expect an Authorization Header with a Bearer token when not in development mode. When in dev mode, the server will automatically pass in the Bearer token for the user 'Jigglypuff'.

Sign in is handled via Firebase, so it doesn't happen on our API. Instead you just get a new Firebase auth token for every request and send it in the header. This will automatically happen, if you use the `useAPI` hooks in the client.

The return data will always have properties for `success`, `action` and `data`. The latter contains the actual data.

All properties for request bodies are always optional, you don't need to provide everything with every call.

## Table of Contents

- [/api/](#api)
- [/api/bands](#apibands)
- [/api/bands/:bid](#apibandsbid)
- [/api/bands/:bid/:itemtype](#apibandsbiditemtype)
- [/api/:itemtype](#apiitemtype)
- [/api/:itemtype/:iid](#apiitemtypeiid)

## `/api/`

### GET / POST

Get the user data for a new or already existing user. If it's a new user, a new database entry will automatically be created. No additional data needs to be provided for that case.

**Expected Body:**

None.

**Response:**

```json
{
  "success": true,
  "action": "get",
  "data": {
    "_id": "5f5f590cc53c3e15300c1ba7",
    "name": "Jigglypuff",
    "theme": "dark",
    "avatar": 1,
    "active": true,
    "bands": [
      {
        "members": [
          {
            "_id": "5f5f590cc53c3e15300c1ba7",
            "name": "Jigglypuff",
            "theme": "dark",
            "avatar": 1,
            "id": "5f5f590cc53c3e15300c1ba7"
          },
          {...}
        ],
        "_id": "5f5f5da1a3a332170b4305f5",
        "name": "The Puffy Jiggles",
        "avatar": 23,
        "owner": "5f5f590cc53c3e15300c1ba7"
      },
      {...}
    ],
    "id": "5f5f590cc53c3e15300c1ba7"
  }
}
```

### PUT

Update properties on the user document.

**Expected Body:**

```js
{
  "name": "Value", // expects a string
  "theme": "dark", // expects "light" or "dark"
  "avatar": 42, // expects a number
  "active": true // won't work with false
}
```

**Response:**

```json
{
  "success": true,
  "action": "update",
  "data": {
    "name": "Jigglypuff",
    "theme": "dark",
    "avatar": 1,
    "active": true
  }
}
```

### DELETE

Sets the current user inactive.

**Expected Body:**

None.

**Response:**

```json
{
  "success": true,
  "action": "delete",
  "data": {
    "name": "Jigglypuff",
    "active": true
  }
}
```

## `/api/bands`

### GET

Get an Array of all bands the current user is a member of.

**Expected Body:**

None.

**Response:**

```json
{
  "success": true,
  "action": "get",
  "data": [
    {
      "members": [
        {
          "_id": "5f5f590cc53c3e15300c1ba7",
          "name": "Jigglypuff",
          "avatar": 1,
          "active": true,
          "id": "5f5f590cc53c3e15300c1ba7"
        },
        {
          "_id": "5f5659cdf0b5220df874ce3c",
          "name": "EriJo",
          "avatar": 10,
          "active": true,
          "id": "5f5659cdf0b5220df874ce3c"
        }
      ],
      "_id": "5f5f5da1a3a332170b4305f5",
      "name": "The Puffy Jiggles",
      "avatar": 23,
      "owner": {
        "_id": "5f5f590cc53c3e15300c1ba7",
        "name": "Jigglypuff",
        "avatar": 1,
        "active": true,
        "id": "5f5f590cc53c3e15300c1ba7"
      }
    },
    {...}
  ]
}
```

### POST

Create a new band, set the current user as its owner.

**Expected Body:**

```js
{
  "name": "Value", // name of the new band
  "avatar": 42 // expects a number
}
```

**Response:**

```json
{
  "success": true,
  "action": "create",
  "data": {
    "_id": "5f64713b85c93309d83a7cc2",
    "name": "Untitled Band",
    "avatar": 42,
    "owner": {
      "_id": "5f5f590cc53c3e15300c1ba7",
      "name": "Jigglypuff",
      "avatar": 1,
      "active": true,
      "id": "5f5f590cc53c3e15300c1ba7"
    },
    "members": [
      {
        "_id": "5f5f590cc53c3e15300c1ba7",
        "name": "Jigglypuff",
        "avatar": 1,
        "active": true,
        "id": "5f5f590cc53c3e15300c1ba7"
      }
    ],
    "active": true
  }
}
```

### PUT & DELETE

No functionality.

## `/api/bands/:bid`

### GET

Get data for a specific band (if the user is part of that band).

**Expected Body:**

None.

**Response:**

```json
{
  "success": true,
  "action": "get",
  "data": {
    "members": [
      {
        "_id": "5f5f590cc53c3e15300c1ba7",
        "name": "Jigglypuff",
        "avatar": 1,
        "active": true,
        "id": "5f5f590cc53c3e15300c1ba7"
      },
      {...}
    ],
    "_id": "5f5f5da1a3a332170b4305f5",
    "name": "The Puffy Jiggles",
    "avatar": 23,
    "owner": {
      "_id": "5f5f590cc53c3e15300c1ba7",
      "name": "Jigglypuff",
      "avatar": 1,
      "active": true,
      "id": "5f5f590cc53c3e15300c1ba7"
    },
    "active": true
  }
}
```

### PUT

Update properties of a band.

**Expected Body:**

```js
{
  "name": "Value", // name of the new band
  "avatar": 42, // expects number
  "owner": "5f5f590cc53c3e15300c1ba7", // expects user id
  "google_account": "",
  "calendar_id": "",
  "dropbox_account": "",
  "soundcloud_account": 42,
  "active": true // won't work with false
}
```

**Response:**

```json
{
  "success": true,
  "action": "create",
  "data": {
    "_id": "5f64713b85c93309d83a7cc2",
    "name": "Untitled Band",
    "avatar": 42,
    "owner": {
      "_id": "5f5f590cc53c3e15300c1ba7",
      "name": "Jigglypuff",
      "avatar": 1,
      "active": true,
      "id": "5f5f590cc53c3e15300c1ba7"
    },
    "members": [
      {
        "_id": "5f5f590cc53c3e15300c1ba7",
        "name": "Jigglypuff",
        "avatar": 1,
        "active": true,
        "id": "5f5f590cc53c3e15300c1ba7"
      }
    ],
    "active": true
  }
}
```

### DELETE

Set a band to inactive.

**Expected Body:**

None.

**Response:**

```json
{
  "success": true,
  "action": "delete",
  "data": {
    "_id": "5f5f5da1a3a332170b4305f5",
    "name": "The Puffy Jiggles",
    "members": [
      {
        "_id": "5f5f590cc53c3e15300c1ba7",
        "name": "Jigglypuff",
        "avatar": 1,
        "active": true,
        "id": "5f5f590cc53c3e15300c1ba7"
      },
      {...}
    ],
    "avatar": 23,
    "owner": {
      "_id": "5f5f590cc53c3e15300c1ba7",
      "name": "Jigglypuff",
      "avatar": 1,
      "active": true,
      "id": "5f5f590cc53c3e15300c1ba7"
    },
    "active": false
  }
}
```

## `/api/bands/:bid/members`

### GET

Get data for all the members that belong to the band with id `:bid`.

**Expected Body:**

None.

**Response:**

```json
{
  "success": true,
  "action": "get",
  "data": [
    {
      "_id": "5f5f590cc53c3e15300c1ba7",
      "name": "Jigglypuff",
      "avatar": 1,
      "active": true,
      "id": "5f5f590cc53c3e15300c1ba7"
    },
    {
      "_id": "5f5659cdf0b5220df874ce3c",
      "name": "EriJo",
      "avatar": 10,
      "active": true,
      "id": "5f5659cdf0b5220df874ce3c"
    }
  ]
}
```

### POST

Add a member to the band with id `:bid`.

**Expected Body:**

```js
{
  "member_id": "5f565843f0b5220df874ce3b"
}
```

**Response:**

```json
{
  "success": true,
  "action": "post",
  "data": [
    {
      "_id": "5f5f590cc53c3e15300c1ba7",
      "name": "Jigglypuff",
      "avatar": 1,
      "active": true,
      "id": "5f5f590cc53c3e15300c1ba7"
    },
    {
      "_id": "5f5659cdf0b5220df874ce3c",
      "name": "EriJo",
      "avatar": 10,
      "active": true,
      "id": "5f5659cdf0b5220df874ce3c"
    },
    {
      "_id": "5f565843f0b5220df874ce3b",
      "name": "Glurak",
      "avatar": 3,
      "active": true,
      "id": "5f565843f0b5220df874ce3b"
    }
  ]
}
```

## `/api/bands/:bid/:itemtype`

### GET

Get all items for `:itemtype` that belong to the band with id `:bid`.

`:itemtype` can be `projects`, `audio`, `video`, `lyrics` or `files`.

**Expected Body:**

None.

**Response:**

```json
{
  "success": true,
  "action": "get",
  "data": [
    {
      "_id": "5f5f76700434c31a273ac9f3",
      "title": "Video A",
      "author": {
        "_id": "5f5f590cc53c3e15300c1ba7",
        "name": "Jigglypuff",
        "avatar": 1,
        "active": true,
        "id": "5f5f590cc53c3e15300c1ba7"
      },
      "project": {
        "_id": "5f5f74230cc89c198a4d47b7",
        "name": "Project A",
        "theme": "#FF0000",
        "active": true
      },
      "url": "https://www.youtube.com/watch?v=wMehItNQKAA",
      "createdAt": "2020-09-14T13:56:00.739Z",
      "updatedAt": "2020-09-14T13:56:00.739Z"
    },
    {...}
  ]
}
```

### POST

Post a new item of type `:itemtype` that belongs to the band with id `:bid`.

`:itemtype` can be `projects`, `audio`, `video`, `lyrics` or `files`.

**Expected Body:**

```js
// for projects
{
  "name": "Value",
  "theme": "#FF0000" // css color value
}

// for audio/video/files
{
  "title": "Value",
  "url": "https://www.google.com",
  "project": "5f5f74230cc89c198a4d47b7" // project id
}

// for lyrics
{
  "title": "Value",
  "content": "Never gonna give you up\nNever gonna let you down\nNever gonna run around\nAnd desert you",
  "project": "5f5f74230cc89c198a4d47b7" // project id
}
```

**Response:**

```json
{
  "success": true,
  "action": "get",
  "data": [
    {
      "_id": "5f5f76700434c31a273ac9f3",
      "title": "Video A",
      "author": {
        "_id": "5f5f590cc53c3e15300c1ba7",
        "name": "Jigglypuff",
        "avatar": 1,
        "active": true,
        "id": "5f5f590cc53c3e15300c1ba7"
      },
      "project": {
        "_id": "5f5f74230cc89c198a4d47b7",
        "name": "Project A",
        "theme": "#FF0000",
        "active": true
      },
      "url": "https://www.youtube.com/watch?v=wMehItNQKAA",
      "createdAt": "2020-09-14T13:56:00.739Z",
      "updatedAt": "2020-09-14T13:56:00.739Z"
    },
    {...}
  ]
}
```

### PUT & DELETE

No functionality.

## `/api/:itemtype`

### GET

Returns all items of type `:itemtype` that the current user has access to.

`:itemtype` can be `projects`, `audio`, `video`, `lyrics` or `files`.

**Expected Body:**

None.

**Response:**

```json
{
  "success": true,
  "action": "get",
  "data": [
    {
      "_id": "5f5f74ee345b5e19bd4ed818",
      "title": "Song Snippet A",
      "author": {
        "_id": "5f5f590cc53c3e15300c1ba7",
        "name": "Jigglypuff",
        "avatar": 1,
        "active": true,
        "id": "5f5f590cc53c3e15300c1ba7"
      },
      "band": {
        "members": [
          "5f5f590cc53c3e15300c1ba7",
          "5f5659cdf0b5220df874ce3c"
        ],
        "_id": "5f5f5da1a3a332170b4305f5",
        "name": "The Puffy Jiggles",
        "avatar": 23,
        "owner": "5f5f590cc53c3e15300c1ba7",
        "active": true
      },
      "project": {
        "_id": "5f5f74230cc89c198a4d47b7",
        "name": "Project A",
        "active": true
      },
      "url": "https://soundcloud.com/helene-fischer-official/atemlos-durch-die-nacht",
      "createdAt": "2020-09-14T13:49:34.755Z",
      "updatedAt": "2020-09-14T13:49:34.755Z"
    },
    {...}
  ]
}
```

### POST, PUT & DELETE

No functionality.

## `/api/:itemtype/:iid`

### GET

Get item of type `:itemtype` with id `:iid`.

`:itemtype` can be `projects`, `audio`, `video`, `lyrics` or `files`. However, the value is arbitrary for this request, since the query will look through all collections for the `:iid`.

**Expected Body:**

None.

**Response:**

```json
{
  "success": true,
  "action": "get",
  "data": {
    "_id": "5f5f74ee345b5e19bd4ed818",
    "title": "Song Snippet A",
    "author": "5f5f590cc53c3e15300c1ba7",
    "band": "5f5f5da1a3a332170b4305f5",
    "project": "5f5f74230cc89c198a4d47b7",
    "url": "https://soundcloud.com/helene-fischer-official/atemlos-durch-die-nacht",
    "createdAt": "2020-09-14T13:49:34.755Z",
    "updatedAt": "2020-09-14T13:49:34.755Z",
    "__v": 0
  }
}
```

### POST

No functionality.

### PUT

Update properties for item of type `:itemtype` with id `:iid`.

`:itemtype` can be `projects`, `audio`, `video`, `lyrics` or `files`. However, the value is arbitrary for this request, since the query will look through all collections for the `:iid`.

**Expected Body:**

```js
// for projects
{
  "name": "Value",
  "theme": "#FF0000", // css color value
  "active": true // won't work with false
}

// for audio/video/files
{
  "title": "Value",
  "url": "https://www.google.com",
  "project": "5f5f74230cc89c198a4d47b7", // project id
  "active": true // won't work with false
}

// for lyrics
{
  "title": "Value",
  "content": "Never gonna give you up\nNever gonna let you down\nNever gonna run around\nAnd desert you",
  "project": "5f5f74230cc89c198a4d47b7", // project id
  "active": true // won't work with false
}
```

**Response:**

```json
{
  "success": true,
  "action": "update",
  "data": {
    "_id": "5f5f74ee345b5e19bd4ed818",
    "title": "Erick's favorite",
    "author": "5f5f590cc53c3e15300c1ba7",
    "band": "5f5f5da1a3a332170b4305f5",
    "project": "5f5f74230cc89c198a4d47b7",
    "url": "https://soundcloud.com/helene-fischer-official/atemlos-durch-die-nacht",
    "active": true,
    "createdAt": "2020-09-14T13:49:34.755Z",
    "updatedAt": "2020-09-18T14:17:02.106Z",
    "__v": 0
  }
}
```

### DELETE

Set item of type `:itemtype` with id `:iid` inactive.

`:itemtype` can be `projects`, `audio`, `video`, `lyrics` or `files`. However, the value is arbitrary for this request, since the query will look through all collections for the `:iid`.

**Expected Body:**

None.

**Response:**

```json
{
  "success": true,
  "action": "delete",
  "data": {
    "_id": "5f5f74ee345b5e19bd4ed818",
    "title": "Erick's favorite",
    "author": "5f5f590cc53c3e15300c1ba7",
    "band": "5f5f5da1a3a332170b4305f5",
    "project": "5f5f74230cc89c198a4d47b7",
    "url": "https://soundcloud.com/helene-fischer-official/atemlos-durch-die-nacht",
    "createdAt": "2020-09-14T13:49:34.755Z",
    "updatedAt": "2020-09-18T14:18:50.053Z",
    "__v": 0,
    "active": false
  }
}
```

## `/api/:itemtype/:iid/comments`

### GET

Get an Array of all comments for item of type `:itemtype` with id `:iid`.

`:itemtype` can be `projects`, `audio`, `video`, `lyrics` or `files`. However, the value is arbitrary for this request, since the query will look through all collections for the `:iid`.

**Expected Body:**

None.

**Response:**

```json
{
  "success": true,
  "action": "update",
  "data": [
    {
      "_id": "5f5f77cfa070e51a835ad9d1",
      "parent_type": "Video",
      "parent_id": {
        "_id": "5f5f76700434c31a273ac9f3",
        "title": "Video A",
        "author": "5f5f590cc53c3e15300c1ba7",
        "band": "5f5f5da1a3a332170b4305f5",
        "project": "5f5f74230cc89c198a4d47b7",
        "url": "https://www.youtube.com/watch?v=wMehItNQKAA",
        "createdAt": "2020-09-14T13:56:00.739Z",
        "updatedAt": "2020-09-14T13:56:00.739Z",
        "__v": 0
      },
      "author": "5f5f590cc53c3e15300c1ba7",
      "content": "LOL ok bro",
      "createdAt": "2020-09-14T14:01:51.230Z",
      "updatedAt": "2020-09-14T14:01:51.230Z",
      "__v": 0
    }
  ]
}
```

### POST

Create a comment for item of type `:itemtype` with id `:iid`.

`:itemtype` can be `projects`, `audio`, `video`, `lyrics` or `files`. **The correct item type is important on this request.**

**Expected Body:**

```js
{
  "content": "whatever floats your user's boat"
}
```

**Response:**

```json
{
  "success": true,
  "action": "update",
  "data": [
    {
      "_id": "5f5f77cfa070e51a835ad9d1",
      "parent_type": "Video",
      "parent_id": {
        "_id": "5f5f76700434c31a273ac9f3",
        "title": "Video A",
        "author": "5f5f590cc53c3e15300c1ba7",
        "band": "5f5f5da1a3a332170b4305f5",
        "project": "5f5f74230cc89c198a4d47b7",
        "url": "https://www.youtube.com/watch?v=wMehItNQKAA",
        "createdAt": "2020-09-14T13:56:00.739Z",
        "updatedAt": "2020-09-14T13:56:00.739Z",
        "__v": 0
      },
      "author": "5f5f590cc53c3e15300c1ba7",
      "content": "LOL ok bro",
      "createdAt": "2020-09-14T14:01:51.230Z",
      "updatedAt": "2020-09-14T14:01:51.230Z",
      "__v": 0
    }
  ]
}
```

## `/api/:itemtype/:iid/comments/:cid`

### GET

Get a comment with comment id `:cid` for item of type `:itemtype` with item id `:iid`.

`:itemtype` can be `projects`, `audio`, `video`, `lyrics` or `files`. However, the value is arbitrary for this request, since the query will look through all collections for the `:iid`.

**Expected Body:**

None.

**Response:**

```json
{
  "success": true,
  "action": "get",
  "data": {
    "_id": "5f5f77cfa070e51a835ad9d1",
    "parent_type": "Video",
    "parent_id": {
      "_id": "5f5f76700434c31a273ac9f3",
      "title": "Video A",
      "author": "5f5f590cc53c3e15300c1ba7",
      "band": "5f5f5da1a3a332170b4305f5",
      "project": "5f5f74230cc89c198a4d47b7",
      "url": "https://www.youtube.com/watch?v=wMehItNQKAA",
      "createdAt": "2020-09-14T13:56:00.739Z",
      "updatedAt": "2020-09-14T13:56:00.739Z",
      "__v": 0
    },
    "author": {
      "_id": "5f5f590cc53c3e15300c1ba7",
      "name": "Jigglypuff",
      "avatar": 1,
      "active": true,
      "id": "5f5f590cc53c3e15300c1ba7"
    },
    "content": "LOL ok bro",
    "createdAt": "2020-09-14T14:01:51.230Z",
    "updatedAt": "2020-09-14T14:01:51.230Z",
    "__v": 0
  }
}
```

### POST

No functionality.

### PUT

Update a comment with comment id `:cid` for item of type `:itemtype` with item id `:iid`.

`:itemtype` can be `projects`, `audio`, `video`, `lyrics` or `files`. However, the value is arbitrary for this request, since the query will look through all collections for the `:iid`.

**Expected Body:**

```js
{
  "parent_type": "Audio",
  "parent_id": "5f5f76700434c31a273ac9f3",
  "author": "5f5f590cc53c3e15300c1ba7",
  "content": "it works woohoo",
  "active": true // does not work with false
}
```

**Response:**

```json
{
  "success": true,
  "action": "update",
  "data": {
    "_id": "5f5f77cfa070e51a835ad9d1",
    "parent_type": "Video",
    "parent_id": {
      "_id": "5f5f76700434c31a273ac9f3",
      "title": "Video A",
      "author": "5f5f590cc53c3e15300c1ba7",
      "band": "5f5f5da1a3a332170b4305f5",
      "project": "5f5f74230cc89c198a4d47b7",
      "url": "https://www.youtube.com/watch?v=wMehItNQKAA",
      "createdAt": "2020-09-14T13:56:00.739Z",
      "updatedAt": "2020-09-14T13:56:00.739Z",
      "__v": 0
    },
    "author": {
      "_id": "5f5f590cc53c3e15300c1ba7",
      "name": "Jigglypuff",
      "avatar": 1,
      "active": true,
      "id": "5f5f590cc53c3e15300c1ba7"
    },
    "content": "it works woohoo",
    "createdAt": "2020-09-14T14:01:51.230Z",
    "updatedAt": "2020-09-21T15:06:41.476Z",
    "__v": 0,
    "active": true
  }
}
```

### DELETE

Delete a comment with comment id `:cid` for item of type `:itemtype` with item id `:iid`.

`:itemtype` can be `projects`, `audio`, `video`, `lyrics` or `files`. However, the value is arbitrary for this request, since the query will look through all collections for the `:iid`.

**Expected Body:**

None.

**Response:**

```json
{
  "success": true,
  "action": "delete",
  "data": {
    "_id": "5f5f77cfa070e51a835ad9d1",
    "parent_type": "Video",
    "parent_id": {
      "_id": "5f5f76700434c31a273ac9f3",
      "title": "Video A",
      "author": "5f5f590cc53c3e15300c1ba7",
      "band": "5f5f5da1a3a332170b4305f5",
      "project": "5f5f74230cc89c198a4d47b7",
      "url": "https://www.youtube.com/watch?v=wMehItNQKAA",
      "createdAt": "2020-09-14T13:56:00.739Z",
      "updatedAt": "2020-09-14T13:56:00.739Z",
      "__v": 0
    },
    "author": {
      "_id": "5f5f590cc53c3e15300c1ba7",
      "name": "Jigglypuff",
      "avatar": 1,
      "active": true,
      "id": "5f5f590cc53c3e15300c1ba7"
    },
    "content": "it works woohoo",
    "createdAt": "2020-09-14T14:01:51.230Z",
    "updatedAt": "2020-09-21T15:12:23.141Z",
    "__v": 0,
    "active": false
  }
}
```
