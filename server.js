var express = require("express"),
	app = express(); 

app.get("/", function (req, res) {
	res.sendfile("./hello.html");
});

var inspiration = ["You can do it!", "Mondays, right?", "Greener pastures ahead.", "They're probably just jealous.", "It gets better."]

app.get("/inspiration", function (req, res) {
	var randomIndex = Math.floor(Math.random()*inspiration.length);
	res.send(inspiration[randomIndex]);
});


 var Joke = function (setup, punchline){
 	this.setup = setup;
 	this.punchline = punchline;
 
 }


 
 var joke0 = new Joke("Why did the chicken cross the road?", "To get to the other side.");
 var joke1 = new Joke("What do you call a crate of ducks?", "A box of quackers.");
 var joke2 = new Joke("How much did the pirate pay to get his ear pierced?", "A buccaneer.")
 var joke3 = new Joke("Why does Santa eat Stove Top Stuffing only before Thanksgiving?", "Because its PRE-SEASONED.")

 var jokes = [joke0, joke1, joke2, joke3];

 


app.get("/joke", function (req, res) {
	var randomIndex = Math.floor(Math.random()*jokes.length);
	res.send(jokes[randomIndex]);
});

console.log("server starting, available at http://localhost:3000");
app.listen(3000);

