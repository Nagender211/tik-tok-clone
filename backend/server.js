import express from 'express';
import mongoose from 'mongoose';
import Data from './data.js'
import Videos from './mongodb.js'
const app = express();


app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  next();
});


function mongo_connection(){
  const MONGODB_URL='mongodb+srv://nani:dYY5i0J4KBoiCuLj@cluster0.sygw9lb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  mongoose.connect(MONGODB_URL, {  }
    
  )
  console.log("Connets to the mongoDB")
}

// MIDLE WARE

// mongoDB


// API ROUTES
app.get('/', (req, res) => {
  res.status(200).send('Hello fbbfkasnfkla!');
});
app.get('/v1/posts', (req, res) => {
  res.status(200).send(Data);
});
app.get('/v2/posts', (req, res) => {
  Videos.find()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

app.post('/v2/posts', (req, res) => {
  const dbVideos = req.body;
  Videos.create(dbVideos)
    .then(data => {
      res.status(201).send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});




// LISSTEN
mongo_connection();
app.listen(8080, () => {
  console.log('Example   on port 3000!');
  
});