const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const data = require('./data');
const generateRanking = require('./user_rank');

const server = app.listen(port, () => console.log(`Listening on port ${port}`));


// create a GET route
app.get("/user-info", (req, res) => {
  // TODO: Replace with your name and email here please :)
  res
    .status(200)
    .json({ name: "Jenish Kevadia", email: "jkevadia@stevens.edu" });
});

// Add any routes you need for the assessment here
// ------ HERE -------

app.get('/users', (req, res) => {
  const mappedData = data.map((user) => {
    
    const ranking = generateRanking(user);

    return {
      ...user,
      ranking
    }
  })

  res
    .status(200)
    .json(mappedData);
})



module.exports = server;
