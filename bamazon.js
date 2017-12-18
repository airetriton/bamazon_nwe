var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "A$tra!!o9",
  database: "bamazon_DB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

// function which prompts the user for what action they should take
function start() {
  connection.query("SELECT * FROM products", function(err, results) {
    for(var i = 0; i < results.length; i++) {
      console.log("ID: "+ results[i].item_id"\nDepartment: "+ results[i].department_name"\nPrice: "+ results[i].price"\nAvailable Quantity: "+ results[i].stock_quantity"")
    }
  })
  connection.query("SELECT * FROM products", function(err, results) {  
    if (err) throw err;

    inquirer.prompt([
      {
        name: "choice",
        type: "rawlist",
        choices: function() {
          var choiceArray = [];
          for (var i = 0; i < results.length; i++) {
            choiceArray.push(results[i].item_id);
          }
          return choiceArray;
        },
        message: "Select the Number of the Item You'd Like to Purchase",
        validate: function(){
          if(choice == choiceArray) {
            console.log("ok, just one more question")
          }
            console.log("I'm sorry you must pick a valid number")
        }
      },
      {
        name: "amount",
        type: "input",
        message: "How many would you like to purchase?",
        validate: function(value) {
          if (isNaN(value) === false) {
              return true;
            }
            return false;
        }
      }
        ])
        .then(function(answer) {
          // get the information of the chosen item
          var updateQuantity;
          for (var i = 0; i < results.length; i++) {
            if (results[i].stock_quantity <= answer.input) {
              val1 = results[i].stock_quantity;
              val2 = answer.input;
              connection.query(
              "UPDATE stock_quantity INTO products",
              "SET stock_quantity = (val1 - val2)", 
              WHERE stock_quantity < 0;
              
              console.log("You've completed your purchase")
              start();
            }
            throw err;
            console.log("There is not enough available to purchase")
          }
        })  
    }

