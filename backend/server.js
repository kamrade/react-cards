import express from 'express';
import mongodb from 'mongodb';

const app = express();
const dbUrl = 'mongodb://localhost/b2bcards';

mongodb.MongoClient.connect(dbUrl, (err, db) => {

  // endpoint to get a cards
  app.get('/api/cards', (req, res) => {
    db.collection('cards').find({}).toArray((err, cards) => {
      res.json({ cards })
    });
  });

  // we want our server to be json API service
  // we always expected respond with some json
  // and thats not what happens in express by default
  // so let's add special 404 middleware function
  // that will responde with json
  // so we can handle it on client

  // middleware - это цепь функций, которые выполняются друг за другом
  // все routs это и есть middleware

  // if we define middleware after all of our routes
  // it will be run only if no other routes stopped execution

  // это middleware отвечает на 404 ошибку
  app.use((req, res, next) => {
    res.status(404).json({
      errors: {
        global: "Still working on it. Please try again later when we implement it"
      }
    });
  });

  app.listen(8080, () => console.log('Server is running on port 8080'));

});
