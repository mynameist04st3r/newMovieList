const port = 8000;
const express = require('express');
const app = express();
const knex = require('knex')(require('./knexfile.js')['development']);


app.get('/', (req, res) => {
  res.send('Here it is.');
})

app.get('/movies', (req, res) => {
  knex('movies').select('*').then(title => {
    let movieTitles = title.map(movies => movies.title)
    res.json(movieTitles);
  })
});

app.listen(port, () => {
  console.log('Server running at http://localhost: ' + port);
});
