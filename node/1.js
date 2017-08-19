var http = require('http');
var dt = require('./time');
var jade = require('jade');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!' + dt.myDateTime());


    res.end();


}).listen(80);



// compile 
var fn = jade.compile('string of jade', options);
var html = fn(locals);
 
// render 
var html = jade.render('string of jade', merge(options, locals));
 
// renderFile 
var html = jade.renderFile('filename.jade', merge(options, locals));




































//app.get('/edit',function (req,res) {
//    res.render('edit-form')
//});
//








//https://github.com/3rd-Eden/memcached


//net = require("net");
//
//var client = net.connect({port: 11211, host:"localhost"},function() { 
//    console.log('connected');
//
//    client.write('stats\r\n');
//    //OR other commands + "\r\n"
//
//    client.on('data', function(data) {
//        console.log(data.toString());
//    });
//
//    client.on('end', function() {
//        console.log('data fetched');
//    });
//});
//
//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://canvip:canvip@ds043200.mlab.com:43200/canvip";
//
//





//
//
//MongoClient.connect(url, function(err, db) {
//  if (err) throw err;
//  db.collection("customers").findOne({}, function(err, result) {
//    if (err) throw err;
//    console.log(result.name);
//    db.close();
//  });
//});
// 
////    
//    MongoClient.connect(url, function(err, db) {
//      if (err) throw err;
//      db.createCollection("customers", function(err, res) {
//        if (err) throw err;
//        console.log("Collection created!");
//        db.close();
//      });
//    });
//
//
//    MongoClient.connect(url, function(err, db) {
//      if (err) throw err;
//      var myobj = [
//        { name: 'John', address: 'Highway 71'},
//        { name: 'Peter', address: 'Lowstreet 4'},
//        { name: 'Amy', address: 'Apple st 652'},
//        { name: 'Hannah', address: 'Mountain 21'},
//        { name: 'Michael', address: 'Valley 345'},
//        { name: 'Sandy', address: 'Ocean blvd 2'},
//        { name: 'Betty', address: 'Green Grass 1'},
//        { name: 'Richard', address: 'Sky st 331'},
//        { name: 'Susan', address: 'One way 98'},
//        { name: 'Vicky', address: 'Yellow Garden 2'},
//        { name: 'Ben', address: 'Park Lane 38'},
//        { name: 'William', address: 'Central st 954'},
//        { name: 'Chuck', address: 'Main Road 989'},
//        { name: 'Viola', address: 'Sideway 1633'}
//      ];
//      db.collection("customers").insertMany(myobj, function(err, res) {
//        if (err) throw err;
//        console.log("Number of documents inserted: " + res.insertedCount);
//        db.close();
//      });
//    });
//        
//    


//
//var msg = 'الله';
//console.log(msg)//