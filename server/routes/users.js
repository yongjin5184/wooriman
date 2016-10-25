var express = require('express');
 
const router = express.Router();

router.route('/')
	//create a user
	.post(function(req, res){
		res.send('user');
	})
	//select all users
	.get(function(req, res){
		res.send('all users');
	});

router.route('/:id')
	//select one user
	.get(function(req,res){
		res.send('select ' + req.params.id);
	})
	//update user
	.put(function(req,res){
		res.send('update ' + req.params.id);
	})
	//delete user
	.delete(function(req,res){
		res.send('update ' + req.params.id);
	});

module.exports = router;