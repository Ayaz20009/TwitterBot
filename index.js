var Twit = require('twit')
var config = require('./config');
var T = new Twit(config);

var params = {
	q: 'life',
	count: 2
}

function gotData (err,data,response){
	var tweets = data.statuses;
	for(var i = 0; i < tweets.length; i++){
		console.log(tweets[i].text);
		console.log();
	}
}

T.get('search/tweets', params, gotData);


tweetIt();
setInterval(tweetIt,1000*20);
function tweetIt(){
	var rand = Math.floor(Math.random()*100);

	var tweet = {
		status: '#TwitterBot made with #NodeJS | Random number ' + rand
	}

	T.post('statuses/update', tweet, function(err, data, response) {
	  if(err){
	  	console.log("Something went wrong");
	  }
	  else{
	  	console.log("Everything works");
	  }
	})
}