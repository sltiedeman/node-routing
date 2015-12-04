var http = require('http');
var apikey = 'e312dbeb8840e51f92334498a261ca1d';
var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=Seattle&units=imperial&APPID="+apikey;

var body = "";
var request = http.get(weatherUrl, function(response){
	console.log(response.statusCode);
	response.on('data', function(chunk){
		console.log(chunk);
		body += chunk;
	});
	response.on('end', function(){
		console.log(body);
	})
})
