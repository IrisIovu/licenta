const express = require('express');
const model = require('./models');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cv = require('./routes/index')
const PORT = 3001;
const cors = require('cors')


//initializare express
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());
//sincronizare baza de date, in functie de modele
//in case we want to drop the tables:{ force: true }
model.sequelize.sync();
app.use('/', routes);



app.listen(PORT, () => {
  console.log(`App started on http://localhost:${PORT}`)
});
