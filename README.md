# cv-generator-node-next

This app is built using Python Django (frontend not implemented yet).

## To start the project

- run docker
  ```
  docker compose up --build
  ```

## Docker

- Docker is used to start the project
- To free up space from unused (dangling) images and containers, run the following command (CAREFUL, this will remove all unused images and containers):
  ```bash
    docker image prune -f        # Removes dangling images (unused images not referenced by any container)
    docker container prune -f    # Removes stopped containers
    docker builder prune -f      # Removes build cache (layers, intermediate images, etc.)
  ```
- Some issues like "CANCELLED" might occure do to low disk space, so make sure to free up some space

## ESLint

- Used for code suggestions and to enforce code style
- If using VSCode, install ESLint extension, to show inline recommendations
- To run ESLint in command line (in the future this will be added to ci/cd pipeline)
  ```bash
  npm run lint
  ```
- Fixing linting issues can be done automatically or manually

## Prettier

- Used for code formatting on save
- If using VSCode, install Prettier extension, to format code on save
- To run Prettier in command line (in the future this will be added to ci/cd pipeline)
  ```bash
  npm run format
  ```

## Prisma

- Prisma is used for database schemas and migrations. It is NOT used for querying the database, as it gets quite limiting when the queries get more complex.
- Some notes from Prisma:
  1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
  2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
  3. Run prisma db pull to turn your database schema into a Prisma schema.
  4. Run prisma generate to generate the Prisma Client. You can then start querying your database.
  5. Tip: Explore how you can extend the ORM with scalable connection pooling, global caching, and real-time database events. Read: https://pris.ly/cli/beyond-orm

## Kysely

- For querying the database we use Kysely, which is a simple and lightweight query builder for PostgreSQL. It is a lot more flexible than Prisma, and allows us to write complex queries with ease.
- Type are generated using kysely-codegen right from the database (not prisma schema)
