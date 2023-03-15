///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const totalCost = cart.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, 0);
  
  console.log(totalCost);

// const summedPrice = cart.reduce(/* CALLBACK HERE */)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

function calcFinalPrice(cartTotal, couponValue, tax) {
    const totalWithTax = cartTotal * (1 + tax);
    const finalPrice = totalWithTax - couponValue;
    return finalPrice;
  }

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/


    //name, email, phone, address
   // I chose these properties because they are all important for a restaurant to have in order to complete a delivery order successfully. The name, email, and phone properties are necessary to contact the customer if there are any issues with the order, and to provide order confirmation and delivery updates. The address property is crucial to ensure that the food is delivered to the correct location.



*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    phone: '123-456-7890',
    address: {
      street: '123 Main St',
      city: 'LA',
      state: 'CA',
      zip: '85142'
    }
  }