var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/Employees');

router.use(function(req,res,next){
    req.db = db;
    res.setHeader("Access-Control-Allow-Origin", "*");
 	res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.get('/list', function(req, res) {
	var db = req.db;
	var collection = db.get('employees');
	collection.find({},{}, function(err, employees){
		if(err)
	 		res.send(err)

	 	res.json(employees);
	 	console.log(employees);
	});
});


router.post('/delete', function(req, res) {
	console.log("empid" + req.body.empId);
	var eid = req.body.empId;
	req.db.get('employees').remove({_id : eid}, function(err,message){
		if(err) {
			res.send(err);
			console.log(err);
		}
		else {
			res.send("Success");
			console.log("success");
		}
	});
});

router.post('/save', function(req, res) {
	var emp = req.body;
 	var empId = emp._id;
 	delete emp._id;
 	console.log("req emp" + JSON.stringify(emp) + "id" + emp.id);
 	req.db.get('employees').update({_id :empId},{$set : emp}, function(err,message){
 		if(err) {
 			res.send(err);
 			console.log(err);
 		}
 		else {
 			res.send("Success");
 			console.log("success");
 		}
 	});
});

router.post('/add', function(req, res) {
	var emp = req.body;
 	console.log("add emp" + JSON.stringify(emp));
 	req.db.get('employees').insert(emp, function(err,message){
 		if(err) {
 			res.send(err);
 			console.log(err);
 		}
 		else {
 			res.send("Success");
 			console.log("success");
 		}
 	});
});

module.exports = router;