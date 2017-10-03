import express from 'express';
import mongodb from 'mongodb';

const app = express();
const dbUrl = 'mongodb://localhost/b2bcards';

mongodb.MongoClient.connect(dbUrl, (err, db) => {

  app.get('/api/cards', (req, res) => {
    db.collection('cards').find({}).toArray((err, cards) => {
      res.json({ cards })
    });
  });

  app.listen(8080, () => console.log('Server is running on port 8080'));

});
