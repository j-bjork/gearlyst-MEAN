var express 		= require('express'),
	app     		= express(),
	bodyParser		= require('body-parser'),
	mongoose		= require('mongoose'),
	methodOverride	= require('method-override'),
	itemsController = require('./server/controllers/items-controller');

/*mongoose.connect('mongodb://localhost:27017/gearlyst', function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});*/

mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds051933.mongolab.com:51933/heroku_9x4zs8zb', function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride(function(req, res){
      if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
      }
}))

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));

app.post('/api/items', itemsController.create);

app.listen(3000, function() {
	console.log('I\'m Listening...');
})