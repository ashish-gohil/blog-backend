Run Postgres DB locally with Docker

- docker run -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=my_password -e POSTGRES_DB=blogDb -p 5432:5432 -d postgres


Migrate Database

- npx prisma migrate dev


Generate Database Client

- npx prisma generate


Build Script

- tsc -b


Seed Data

- npm run seed


Run Server

- node .\dist\index.js  

