# Rilla Take Home Technical Assessment

This project provides a template for you to use for this take home. \
The dataset for the project can be found in `data.json`. \
For this template, I have also put the data in `data.js` and exported it as \
`data` to be used in your code with a simple import, to save you the hassle of \
reading the JSON file to grab the data. The format of the data can be found in \
the document you received describing the technical assessment in detail. \
There is also a SOLUTION.md file here already for you.

## Backend Client
`server.js` contains a route called `/user-info` and the server as well. Change the name and email \
in `/user-info` to your name and email. Then in `test/server.js` there is a simple test \
for the `/user-info` route. Update that with your name and email so the test passes.

I suggest you follow all of the steps below first to make sure everything is working.

### Setup and installation
Make sure you are at the root directory of the project, and run `npm install` to \
get started. Feel free to add any other packages, just don't forget to add them to \
`package.json` so I can run the project as well. Just running \
`npm install <package> --save` will insert it into `package.json`.

### Running
To run the server, run `npm start`. It runs it in `localhost:5000`. 

### Testing
To test the server, run `npm test`.

## Frontend Client
`client/` directory contains the entire code for the frontend, which is with React. \
The only files you need to worry about here are `App.js`, `App.test.js`, `App.css`, \
`FunnyRankings.js` and `package.json`. You are obviously free to change whatever \
in this directory if you want, but most of these files were just generated with `create-react-app`. \
In `App.js`, it fetches the `/user-info` route from the backend to display your name and email. \
There is a simple test right now in `App.test.js` that you can use to make sure you are running \
tests correctly with your first run. 

I suggest you follow all the steps below first to make sure everything is working.

### Setup and Installation
Make sure you are in `client/` directory and run `npm install`. \
Feel free to add any other packages, just don't forget to add them to \
`package.json` so I can run the project as well. Just running \
`npm install <package> --save` will insert it into `package.json`.

### Running
To run the webapp, run `npm start`. It runs it in `localhost:3000`. It is already set up to proxy \
requests to the backend at `localhost:5000`. If you want it to actually pull from the backend \
for a test run, also have the backend running or else it will fail to fetch. I suggest having two \
terminal windows open, one running the backend and the other running the frontend, so you can \
see both processes running and can debug either of them at the same time.

### Testing
To test, run `npm test`.
