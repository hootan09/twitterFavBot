//http creating server
const http = require('http');
const express = require('express');
const fs = require('fs');

//creating server....
const app = express();
const server = http.createServer(app);

app.use(express.static('public'));
var io = require('socket.io')(server);
app.get('/' , (req , res) => {
    fs.readFile('./public/index.html', (err , data) => {
        if(err){
            res.status(400).send('err in serving index');
        }
        else{
            res.send(data);
        }
    });
});

io.on('connection', socket =>{
    function disconnect(){
        console.log('client disconnected');
    }
    console.log('client connected');
    socket.on('disconnect' , disconnect);
})


//////////////////////////////////////
        //twitter Bot section///
//////////////////////////////////////
var config = require('./data/twitter_config');
var Twitter = require('twitter-node-client').Twitter;

/* Comments
make a directory in the root folder of your project called data
copy the `twitter_config.json` file over into `data/twitter_config.json`
Open `data/twitter_config` and supply your applications `consumerKey`, 'consumerSecret', 'accessToken', 'accessTokenSecret', 'callBackUrl' to the appropriate fields in your data/twitter_config.json file
*/
var twitter = new Twitter(config);
const TWITTER_BASE_URL = 'https://api.twitter.com/1.1';//for directly post to api
/* 
note: getMentionsTimeline Requests / 15-min window (user auth) == 75 *** 75/15 = 5 request/minutes
*/
setInterval(() => {
    twitter.getMentionsTimeline({ count: '10'}, error, FavBot);
}, 12000) //means every 12 sec we have request and in one minutes we can get 5 (limited) request from twitter api

//Callback functions
var error = function (err, response, body) {
    console.log('ERROR From twitter api: [%s]', JSON.stringify(err));
    //console.log('response From twitter api: [%s]', JSON.stringify(response));
    //console.log('error body From twitter api: [%s]', JSON.stringify(body));
    //io.emit('error' , err);
};
var FavBot = function (data) {
    //console.log('Data From twitter api: [%s]', data);
    var newdata=JSON.parse(data);
    newdata.forEach(element => {
        if(!element.favorited){
            //twitter.doPost(`${TWITTER_BASE_URL}/favorites/create.json`,{name: 'twitterFavBot' , id: element.id_str }, error, (data) =>{
            twitter.postCustomApiCall('/favorites/create.json',{name: 'twitterFavBot' , id: element.id_str }, error, (data) =>{
                console.log('ok Faved: ' , data);
                io.emit('message' , element);
            });
        }
    });

};

/*
Example calls
*/

//twitter.getUserTimeline({ screen_name: 'BoyCook', count: '10'}, error, success);
//twitter.getMentionsTimeline({ count: '10'}, error, success);
// twitter.getHomeTimeline({ count: '10'}, error, success);
// twitter.getReTweetsOfMe({ count: '10'}, error, success);
// twitter.getTweet({ id: '1111111111'}, error, success);

/* 
Get 10 tweets containing the hashtag haiku
*/

//twitter.getSearch({'q':'#haiku','count': 10}, error, success);

/*
Get 10 popular tweets with a positive attitude about a movie that is not scary 
*/

//twitter.getSearch({'q':' movie -scary :) since:2013-12-27', 'count': 10, 'result\_type':'popular'}, error, success);

//////////////////////////////////////
    //end of twitter Bot section //
//////////////////////////////////////

//server working on port
server.listen(3000 , console.log('server is running on port 3000'));
