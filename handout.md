# Setup Atlas Cluster

- Setup a free account on https://www.mongodb.com/
- Setup a new cluster
  - AWS
  - M0 Sandbox
  - Cluster Name: Cluster0
- Save username and password (in a text editor, like VS Code)
- Copy Connection String
- `mongodb+srv://<db_username>:<db_password>@cluster0.4dogz.mongodb.net/`

## VS Code - Server

Create a file called `.env` in the root of the project and add the following:

```sh
DB_LINK=mongodb://127.0.0.1
#DB_LINK=mongodb+srv://<db_username>:<db_password>@cluster0.4dogz.mongodb.net
```

- Replace `<db_username>` and `<db_password>` with your username and password
- You can toggle between local and cloud database by commenting/uncommenting the `DB_LINK` variable

## Setup

The target connection string should look like:

```plain
mongodb+srv://<db_username>:<db_password>@<db_server>/<db_name>
or
mongodb://<db_username>:<db_password>@<db_server>/<db_name>
```

```js
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DB_LINK = process.env.DB_LINK.trimEnd("/");
console.log(DB_LINK);

const db = mongoose.connect(`${DB_LINK}/note-taking-app`);

export default db;
```

## Off Topic

Setup MongoDB on Mac:

- https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/

Setup Linux Subsystem on Windows:

- https://learn.microsoft.com/en-us/windows/wsl/install
