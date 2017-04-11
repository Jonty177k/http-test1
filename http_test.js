//pull in http package
var http = require("http");

//this is where the server will be listening
//above 1024 and below 65k
var PORT = 8080;
var PORT1 = 8805;

//function to handle request and response
function handRequest(request, response) {
	//this will be triggered when the user goes to our port
	response.end("It Works! Path hit: " + request.url);
}

//create our server
var server = http.createServer(handRequest);

var server2 = http.createServer(handRequest);

//start it up!
server.listen(8080, function() {
	console.log("server is listening on port: " + PORT);
});
server.listen(8805, function() {
	console.log("hey fuck u buddy");
});

