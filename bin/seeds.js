require('dotenv').config();
require('./../configs/dbConfig');

const TripModel = require('./../models/tripModel') 
const User = require('./../models/user') 

const trip = {
    "title": "Greece summer 2021",
    "description": "hellooo",
    "startDate": "",
    "endDate": "",
    "city": "athens",
    "location": {
      "type": "Point",
      "coordinates": "8.989898"
    },
    "transportation": "car",
    "accomondation": "hotel"
  };

  const user = {
    "firstName": "amalia",
    "lastName": "toto",
    "email": "amalia@toto.com",
    "password": "1212",
    "city": "athens",
    "country": "Greece"
  };

  TripModel.create(trip)
.then((dbRes) => {
    console.log(dbRes);
})
.catch((error) => {
    console.log(error);
})

User.create(user)
.then((dbRes) => {
    console.log(dbRes);
})
.catch((error) => {
    console.log(error);
})
mongoose.connection.close();