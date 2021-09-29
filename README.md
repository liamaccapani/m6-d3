# m6-d3
 Sequelize marketplace

 {
	    "id": 1,
	    "name": "name",
	    "category": STRING, 
	    "image":"url(IMAGE LINK)",
	    "price":FLOAT,
	    "createdAt": "DATE",
	    "updatedAt": "DATE",   
}

##Routes

GET /product => returns the list of product including the reviews
GET /product /123 => returns a single product  including the reviews
POST /product => create a new product
PUT /product /123 => edit the product
DELETE /product /123 => delete the product with the given id




{
	    "id": 1,
	    "text": TEXT,
	    "username:STRING,
	    "productId":FOREIGN KEY products
      
}


##Routes
GET /reviews => returns the list of reviews including product
GET /reviews /123 => returns a single review with product
POST /reviews => create a new review
PUT /reviews /123 => edit the review with the given id
DELETE /reviews /123 => delete the review with the given id
 

##[EXTRA]: 

Implement search on products by category or name
Implement filters by price
