const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res) => {
  res.render('index');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App started on ${port}`)
});