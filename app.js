var express    = require("express"),
	path       = require('path'),
	hbs        = require("express-handlebars"),
	bodyParser = require("body-parser"),
	app        = express();


app.use(express.static(__dirname + '/public'));
app.set("views", path.join(__dirname, "views"));
app.engine('hbs', hbs());
app.set("view engine", "hbs");

app.get("/", function(req, res){
	res.render('home');
}); 


app.listen(3000, function(){
	console.log("Server started on port 3000");
});