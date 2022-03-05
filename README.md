# E-commerce Back End Database 

## User Story
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

## Description 
Database model for getting and retrieving category information, products, and tags for an ecommerce store 
Server also handles creating, updating, and deleting categories, prouducts, and tags 

[DEMO VIDEO](https://youtu.be/nAq8a2SgQac)

## Installation 
1. Clone the repository 
2. run "npm -y init"
3. install dependencies - ("npm i dotenv, express, mysql, sequelize")
4. Create a .env file as such:
```
DB_NAME='ecommerce_db'
DB_USER='your MySQL username'
DB_PW='your MySQL password'
```
5. Opem MySQL shell and input password 
6. run "source db/schema.sql" and then "quit;"
7. run "run npm run seed" for testing data or input your own 
8. run "npm start" or "nodemon start"
9. test http GET, POST, PUT, DELETE routes:
  - /api/categories
  - /api/categories/${id}
  - /api/products
  - /api/products/${id}
  - /api/tags
  - /api/tags/${id}
