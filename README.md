## Description

Test app with nestJS and TypeORM.
Do not use in real life app.

## Installation

```bash
$ apt-get install docker docker-compose
$ npm install
```

## Launch the database

```bash
$ cd docker

# watch mode
$ docker-compose up

```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```

## Entrypoint example:

127.0.0.1:3000/import

Body:
{
"filePath": "/path/to/csv/file",
"mapping":"{\"pFirstname\": 0, \"pLastname\": 1, \"email\":\"2,3\", \"cf1\":4, \"cf5\":5 }"
}
