const express = require('express'); // importing express , and creating express server 
const app = express(); // storng all functions stored in express library to "app" object , , inisiating express server 
const shortUrl = require('./routes/url');
const homeRoutes= require('./routes/home');

app.use(express.json()); // for accepting JSONs ------------------------------------------------------------------------------------------|
app.use(express.static("public")); // for accepting the HTML files stored in "public" folder                                              | - Midelware -  function which are called before making api call  
app.use(express.urlencoded({extended: false})); // for accepting body  , and understandin the api calls like post which are in html files |
                                                // body : it contains variable which we need for making POST Api calls -------------------|

app.use('/urlapi', shortUrl); // craatrd for making an api call futher about this is in "routes/url.js" folder
app.use('/', homeRoutes) // craatrd for making an api call futher about this is in "routes/home.js" folder


const PORT= 3001
;

app.listen(PORT,() =>{
    console.log("app is running on PORT=" ,PORT);
})