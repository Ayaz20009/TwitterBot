var Twit = require('twit')
var config = require('./config');
var T = new Twit(config);

var stream = T.stream('user');
stream.on('follow',function(event){
	var name = event.source.name;
	var screenName = event.source.screen_name;
	tweetIt('@'+screenName + ' Thank you for following ');
})

//setInterval(tweetIt,1000*20);
function tweetIt(txt){
	var tweet = {
		status: txt
	}

	T.post('statuses/update', tweet, function(err, data, response) {
	  if(err){
	  	console.log(err);
	  }
	  else{
	  	console.log("Everything works");
	  }
	})
}