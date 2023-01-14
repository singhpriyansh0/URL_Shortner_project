const express = require('express'); // importing "express" for using 'router' function
const router = express.Router();  // with the help of express "router()" function we are able to handel the diff.  api call  
const path = require('path'); // "path" is difault package comes with the node.js" here we use this so when ever person comes to '/' in url than he should get to "index.html"

router.get('/',  (req , res)=>{ // if a person visites the "/" url (means home url) than there the home page should get displayed which is index.html
                                     // here we dont have any request "req" we are only sending responce "res"
    const htmlPath = path.join(__dirname, 'public','index.html');// here "__dirname" is keyword

    console.log('__dirName',__dirname, htmlPath);

    res.sendFile(html.path);

})

module.exports =router;