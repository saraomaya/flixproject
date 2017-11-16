'use strict';




exports.list_all_tasks = function(req, res) {

	     res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Methods"," GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.json({ movies: ["The incredible hulk","Captain America","Mrs Doubtfire"] })
};




exports.create_a_task = function(req, res) {

};


exports.read_a_task = function(req, res) {

};


exports.update_a_task = function(req, res) {

};


exports.delete_a_task = function(req, res) {

};

