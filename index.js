var express = require('express');
var admin = require("firebase-admin");
const router = express.Router();

var serviceAccount = require('location to private key');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://jnfdjvnojnf.firebaseio.com"
});




const registrationToken = 'FCM TOKEN of target device'

const payload = { 
   notification : {
      title : "FCM IS COOL !",
      body : "Notification has been recieved",
      content_available : "true",
      image:"https://i.ytimg.com/vi/iosNuIdQoy8/maxresdefault.jpg"
   }
}

const options = {
  priority: "high"
}


router.post('/notification/sendToSpecific', (req, res) => {


  admin.messaging().sendToDevice(registrationToken, payload, options)
    .then(function (response) {
      res.send('message succesfully sent !')
    })
    .catch(function (error) {
      res.send(error).status(500)
    });

})


module.exports = router;
