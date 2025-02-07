# cv-generator-node-next

This app is built using Python Django (frontend not implemented yet).

## To start the project

- clone the repository
- install dependencies
  ```bash
  pnpm install
  ```
- run docker
  ```
  docker compose up --build
  ```

## To use vscode debugger

- run docker compose
- add some breakpoints - preferably api route code
- open "run and debug" (ctrl+shift+d)
- start "Attach to node_backend"
- make request and see debugger reach the breakpoint
- afterwards you can either continue (f5) or go step by step and see variables that are set

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

### Migrations

- When you make a change in schema.prisma (new table/column etc.), you need to generate a migration and apply it to the database. This can be done with the following commands:

  ```bash
    pnpm run db:1migrate_create # creates the migration files in node_backend/prisma/migrations. Check before applying.

    docker compose up --build # This includes commands for applying migrations to the database in docker

    pnpm run db:3typegen # Generates typescript types for the kysely database schema
  ```

## Kysely

- For querying the database we use Kysely, which is a simple and lightweight query builder for PostgreSQL. It is a lot more flexible than Prisma, and allows us to write complex queries with ease.
- Type are generated using kysely-codegen right from the database (not prisma schema)

## Vitest

- Vitest is used for automated testing
- Install vscode extension "Vitest" and see vscode testing tab
- To run tests in terminal use "pnpm test"
