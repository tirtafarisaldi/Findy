# About

A repository for Kumparan frontend technical assessment, built with:

- React as a frontend view library
- Redux as state management
- Redux Thunk to return dispatch function from action creators
- React Bootstrap as UI Kit
- Webpack as a module bundler
- React Router 


# How To Run

here I use my own json server but the schema data still the same from jsonplaceholder.typicode.com, 
so it requires 2 cmd. The first cmd is used to start the database and the second to run the application

cmd for database
```
1. npm install -g json-server
2. git clone https://github.com/farisaldi/Kumparan-Technical-Test.git and cd to the new your repository
3. json-server --watch db.json 
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result of database

cmd for apllication
```
1. cd to the new your repository
2. npm install
3. yarn start
```
Open [http://localhost:3001](http://localhost:3001) with your browser to see the result of application
