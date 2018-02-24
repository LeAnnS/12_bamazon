var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Zacuss1 B@sement3",
  database: "bamazon_db"
});

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected as id " + connection.threadId);
//   console.log("Welcome to 'Oh Scrap!', our online scrapbooking supply store.");

//   // run the start function to prompt the user
//   // start();
  
//   // displayProducts();
//   // purchaseItem();
	  
//   connection.end();
// });

// function to prompt user
// function start() {
// 	inquirer.prompt([{
// 		name: "browseInv",
// 		type: "confirm",
// 		message: "Woud you like to browse our inventory?",
// }




// function which lists products for sale
function displayProducts() {
	connection.query("SELECT * FROM products ", function(err, res) {
		console.log("-------------------------------------------------");
			for (var i = 0; i < res.length; i++) {
      		console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].item_price);
      		}
    	console.log("-------------------------------------------------");
	});
}

// function which prompts user for item they want to buy
function purchaseItem() {
	inquirer.prompt([{
		name: "puchaseItemID",
		type: "input",
		message: "What is the ID Number of the item you'd like to purchase?",
		validate: function(value) {
			if (value >= 1 && value <= 12) {
				return true;
			} else {
				return false;
			}
		}
	}, 

	{
		name: "purchaseQty",
		type: "input",
		message: "How many of this item would you like to purchase?",
		validate: function(value) {
			if (value) {
				return true;
			} else {
				return false;
			}
		},		
	}]).then(function(response) {
		// connection.query("SELECT * FROM products", function(err, res) {
			// console.log(res);
		// });
		orderItem(response);
	});
}

function orderItem(response) {
  console.log("Checking product inventory\n");
  connection.query(
  	"SELECT * FROM products WHERE ?;",
  	{
      item_id: response.puchaseItemID,
    },
    function(err, res) {
	    if (err) throw err;
	    // Log all results of the SELECT statement
	    console.log(res);

	    // verify existing quantity is larger than ordered quantity
	    if (response.purchaseQty <= res.stock_quantity) {
	    	console.log("You have enough");
				return true;
		} else {
				return false;
		}
		}
	    connection.end();
  	}
  );
}

purchaseItem();


