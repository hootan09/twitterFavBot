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

var data = "[{\"created_at\":\"Thu Feb 08 16:46:39 +0000 2018\",\"id\":961642443388211202,\"id_str\":\"961642443388211202\",\"text\":\"@hootan09 \\u0645\\u0645\\u0646\\u0648\\u0646 \\u2764\\ufe0f\",\"truncated\":false,\"entities\":{\"hashtags\":[],\"symbols\":[],\"user_mentions\":[{\"screen_name\":\"hootan09\",\"name\":\"_mam_niki\",\"id\":2834915206,\"id_str\":\"2834915206\",\"indices\":[0,9]}],\"urls\":[]},\"source\":\"\\u003ca href=\\\"http:\\/\\/twitter.com\\\" rel=\\\"nofollow\\\"\\u003eTwitter Web Client\\u003c\\/a\\u003e\",\"in_reply_to_status_id\":961641843241955330,\"in_reply_to_status_id_str\":\"961641843241955330\",\"in_reply_to_user_id\":2834915206,\"in_reply_to_user_id_str\":\"2834915206\",\"in_reply_to_screen_name\":\"hootan09\",\"user\":{\"id\":726780361003380737,\"id_str\":\"726780361003380737\",\"name\":\"Baback\",\"screen_name\":\"Baaback1\",\"location\":\"Iran\",\"description\":\"\",\"url\":null,\"entities\":{\"description\":{\"urls\":[]}},\"protected\":false,\"followers_count\":121,\"friends_count\":51,\"listed_count\":7,\"created_at\":\"Sun May 01 14:28:35 +0000 2016\",\"favourites_count\":6920,\"utc_offset\":-28800,\"time_zone\":\"Pacific Time (US & Canada)\",\"geo_enabled\":false,\"verified\":false,\"statuses_count\":2652,\"lang\":\"en\",\"contributors_enabled\":false,\"is_translator\":false,\"is_translation_enabled\":false,\"profile_background_color\":\"000000\",\"profile_background_image_url\":\"http:\\/\\/abs.twimg.com\\/images\\/themes\\/theme1\\/bg.png\",\"profile_background_image_url_https\":\"https:\\/\\/abs.twimg.com\\/images\\/themes\\/theme1\\/bg.png\",\"profile_background_tile\":false,\"profile_image_url\":\"http:\\/\\/pbs.twimg.com\\/profile_images\\/850276272869474305\\/SqHh4-E4_normal.jpg\",\"profile_image_url_https\":\"https:\\/\\/pbs.twimg.com\\/profile_images\\/850276272869474305\\/SqHh4-E4_normal.jpg\",\"profile_banner_url\":\"https:\\/\\/pbs.twimg.com\\/profile_banners\\/726780361003380737\\/1462113482\",\"profile_link_color\":\"19CF86\",\"profile_sidebar_border_color\":\"000000\",\"profile_sidebar_fill_color\":\"000000\",\"profile_text_color\":\"000000\",\"profile_use_background_image\":false,\"has_extended_profile\":false,\"default_profile\":false,\"default_profile_image\":false,\"following\":true,\"follow_request_sent\":false,\"notifications\":false,\"translator_type\":\"none\"},\"geo\":null,\"coordinates\":null,\"place\":null,\"contributors\":null,\"is_quote_status\":false,\"retweet_count\":0,\"favorite_count\":1,\"favorited\":true,\"retweeted\":false,\"lang\":\"ar\"},{\"created_at\":\"Thu Feb 08 16:30:45 +0000 2018\",\"id\":961638442898739200,\"id_str\":\"961638442898739200\",\"text\":\"@hootan09 \\u0627\\u0639\\u0635\\u0627\\u0628 \\u062f\\u0633\\u062a \\u062f\\u0686\\u0627\\u0631 \\u0645\\u0634\\u06a9\\u0644 \\u0645\\u06cc\\u0634\\u0647 \\u0645\\u062e\\u0635\\u0648\\u0635\\u0627 \\u0628\\u0631\\u0627\\u06cc \\u06a9\\u0633\\u0627\\u0646\\u06cc \\u06a9\\u0647 \\u0628\\u0627 \\u06a9\\u06cc\\u0628\\u0631\\u062f \\u06a9\\u0627\\u0631 \\u0645\\u06cc\\u06a9\\u0646\\u0646 \\u0634\\u0627\\u06cc\\u0639 \\u0647\\u0633\\u062a \\nhttps:\\/\\/t.co\\/HdL1roapwT\",\"truncated\":false,\"entities\":{\"hashtags\":[],\"symbols\":[],\"user_mentions\":[{\"screen_name\":\"hootan09\",\"name\":\"_mam_niki\",\"id\":2834915206,\"id_str\":\"2834915206\",\"indices\":[0,9]}],\"urls\":[{\"url\":\"https:\\/\\/t.co\\/HdL1roapwT\",\"expanded_url\":\"https:\\/\\/en.wikipedia.org\\/wiki\\/Carpal_tunnel_syndrome\",\"display_url\":\"en.wikipedia.org\\/wiki\\/Carpal_tu\\u2026\",\"indices\":[85,108]}]},\"source\":\"\\u003ca href=\\\"http:\\/\\/twitter.com\\\" rel=\\\"nofollow\\\"\\u003eTwitter Web Client\\u003c\\/a\\u003e\",\"in_reply_to_status_id\":961636500487245825,\"in_reply_to_status_id_str\":\"961636500487245825\",\"in_reply_to_user_id\":2834915206,\"in_reply_to_user_id_str\":\"2834915206\",\"in_reply_to_screen_name\":\"hootan09\",\"user\":{\"id\":726780361003380737,\"id_str\":\"726780361003380737\",\"name\":\"Baback\",\"screen_name\":\"Baaback1\",\"location\":\"Iran\",\"description\":\"\",\"url\":null,\"entities\":{\"description\":{\"urls\":[]}},\"protected\":false,\"followers_count\":121,\"friends_count\":51,\"listed_count\":7,\"created_at\":\"Sun May 01 14:28:35 +0000 2016\",\"favourites_count\":6920,\"utc_offset\":-28800,\"time_zone\":\"Pacific Time (US & Canada)\",\"geo_enabled\":false,\"verified\":false,\"statuses_count\":2652,\"lang\":\"en\",\"contributors_enabled\":false,\"is_translator\":false,\"is_translation_enabled\":false,\"profile_background_color\":\"000000\",\"profile_background_image_url\":\"http:\\/\\/abs.twimg.com\\/images\\/themes\\/theme1\\/bg.png\",\"profile_background_image_url_https\":\"https:\\/\\/abs.twimg.com\\/images\\/themes\\/theme1\\/bg.png\",\"profile_background_tile\":false,\"profile_image_url\":\"http:\\/\\/pbs.twimg.com\\/profile_images\\/850276272869474305\\/SqHh4-E4_normal.jpg\",\"profile_image_url_https\":\"https:\\/\\/pbs.twimg.com\\/profile_images\\/850276272869474305\\/SqHh4-E4_normal.jpg\",\"profile_banner_url\":\"https:\\/\\/pbs.twimg.com\\/profile_banners\\/726780361003380737\\/1462113482\",\"profile_link_color\":\"19CF86\",\"profile_sidebar_border_color\":\"000000\",\"profile_sidebar_fill_color\":\"000000\",\"profile_text_color\":\"000000\",\"profile_use_background_image\":false,\"has_extended_profile\":false,\"default_profile\":false,\"default_profile_image\":false,\"following\":true,\"follow_request_sent\":false,\"notifications\":false,\"translator_type\":\"none\"},\"geo\":null,\"coordinates\":null,\"place\":null,\"contributors\":null,\"is_quote_status\":false,\"retweet_count\":0,\"favorite_count\":1,\"favorited\":false,\"retweeted\":false,\"possibly_sensitive\":false,\"lang\":\"fa\"}]"
data = JSON.parse(data);

/* 
note: getMentionsTimeline Requests / 15-min window (user auth) == 75 *** 75/15 = 5 request/minutes
*/
setInterval(() => {
    //twitter.getMentionsTimeline({ count: '10'}, error, success);
    FavBot(data);
}, 12000) //means every 12 sec we have request and in one minutes we can get 5 (limited) request from twitter api

//Callback functions
var error = function (err, response, body) {
    console.log('ERROR From twitter api: [%s]', err);
};
var FavBot = function (data) {
    console.log('Data From twitter api: [%s]', data);
    data.forEach(element => {
        if(!element.favorited){
            //twitter.postCustomApiCall('/favorites/create.json',{id: element.id}, error, success);
            io.emit('message' , element);
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
