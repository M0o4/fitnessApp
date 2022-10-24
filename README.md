# FitnessApp🚴

RESTAPI by @M0o4 for "[NPI](https://www.npi-tu.ru/)"

# 👏 How to use

I assume that you have installed the PostgreSQL server in your machine or can use your own remote server. Also, you have installed Node.js on your machine and can run `node`, `npm` command in your terminal or command line. Next, check their version by type these commands in your terminal or command line.
<br/>node -v<br/>
v8.11.1<br/>
npm -v<br/>
6.1.0<br/>

Then open your terminal and type `npm init`.<br/>

Before run and test connection, make sure you have created a database as described in the above configuration. You can use the `psql` command to create a user and database.

`psql postgres --u postgres`<br/>
<br/>Next, type this command for creating a new user with a password then give access for creating the database.<br/>
<br/>`postgres-# CREATE ROLE YOUR_DB_USERNAME WITH LOGIN PASSWORD 'YOUR_DB_PASSWORD';`
<br/>`postgres-# ALTER ROLE YOUR_DB_USERNAME CREATEDB;`
<br/><br/>Quit `psql` then log in again using the new user that previously created.
<br/><br/>`postgres-# \q`
<br/>`psql postgres -U YOUR_DB_USERNAME`

Enter the password, then you will enter this `psql` console.

psql (9.5.13)
<br/>Type "help" for help.
<br/>postgres=>

Type this command to creating a new database.

`postgres=> CREATE DATABASE fitness_app;`

Then give that new user privileges to the new database then quit the `psql`.

`postgres=> GRANT ALL PRIVILEGES ON DATABASE fitness_app TO YOUR_DB_USERNAME;`
`postgres=> \q`

Next create .env file in root folder and write here your data.<br/>

DB_USERNAME = "YOUR_DB_USERNAME"<br/>
DB_PASSWORD = "YOUR_DB_PASSWORD"<br/>
DB_NAME = "YOUR_DB_NAME"<br/>
DB_HOST = "YOUR_DB_HOST"<br/>
DB_DIALECT = "YOUR_DB_DIALECT"

Type this command to generate the table to the database using Sequelize.

`sequelize db:migrate`

In your terminal type `npm start node` and you are ready to go.
