var inquirer = require('inquirer');
require('console.table');
var json = require('json');
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "root",
	database: "Bamazon"
})

connection.connect(function(err) {
	if (err) throw err;
	console.log('Connected to Bamazon on Port 3306');
	runInquirer();
})

var questions = [
	{
		name: 'option',
		type: 'list',
		message: 'What would you like to do?',
		choices: ['View Products for Sale', 'View Low Inventory', 'Add to Inventory', 'Add New Product', 'Exit'],
		filter: function (val) {
			return val.toLowerCase();
		}
	}
];