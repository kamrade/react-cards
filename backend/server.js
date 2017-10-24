import express from 'express';
import mongodb from 'mongodb';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
const dbUrl = 'mongodb://localhost/b2bcards';

function validate(data) {
  // validation
  let errors = {};
  if (data.curr === '') errors.curr = "Can't be empty";
  if (data.type === '') errors.type = "Can't be empty";
  if (data.expDate === '') errors.expDate = "Can't be empty";
  const isValid = Object.keys(errors).length === 0;
  return { errors, isValid };
}

mongodb.MongoClient.connect(dbUrl, (err, db) => {

  // endpoint to get a cards
  app.get('/api/cards', (req, res) => {
    db.collection('cards').find({}).toArray((err, cards) => {
      res.json({ cards });
    });
  });

  // return all cards
  app.post('/api/cards', (req, res) => {
    const { errors, isValid} = validate(req.body);
    if(isValid) {
      const { curr, type, expDate} = req.body;
      db.collection('cards').insert({ curr, type, expDate}, (err, result) => {
        if(err) {
          res.status(500).json({ errors: { global: "Something went wrong"}})
        } else {
          res.json({ card: result.ops[0] })
        }
      });
    } else {
      res.status(400).json({ errors })
    }

  });

  // return card by ID
  app.get('/api/cards/:_id', (req, res) => {

    db.collection('cards').findOne({ _id: new mongodb.ObjectId(req.params._id) }, (err, card) => {
      res.json({ card });
    })
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
