'use strict';
console.log('This page is working!');

//each store needs
//location
//max customers
//min customers
//avg cookie per customer
//cookies sold hourly
//total cookies sold
//random customers per hour


var CookieArray = [];
var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//Calculate Random Customers    
function randCustomers(min, max){
    var CustomerArray = [];
    for (var i = 0; i < 14; i++) {
    CustomerArray.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    return CustomerArray;
  }


//Store one
var storeOne = {
    location: 'Seattle',
    maxCustomers: 65,
    minCustomers: 23,
    avgCookies: 6.3,
    customersPerHour: [],
    cookiesPerHour: [],
    setCookiesPerHour: function() {
            for (var i = 0; i < hoursOpen.length; i++) {
                this.cookiesPerHour[i] = Math.ceil(this.customersPerHour[i] * this.avgCookies);
                this.TotalSold = this.TotalSold + this.cookiesPerHour[i];
            }
    },
    TotalSold: 0,    
    setCustomers: function() {
        this.customersPerHour = randCustomers(this.minCustomers,this.maxCustomers);
    }

     }
    storeOne.setCustomers();
    storeOne.setCookiesPerHour();
console.log(storeOne);

//getting parent node
var position1 = document.getElementById('store1');

//adding store location
var storeLoc1 = document.createElement('li');
storeLoc1.textContent = storeOne.location;
position1.appendChild(storeLoc1);


//looping for list items
for (var i = 0; i < storeOne.customersPerHour.length; i++ ){
    //Create li
    var customers = document.createElement('li');
    // fill in lists
    customers.textContent = hoursOpen[i] + "  " +  storeOne.cookiesPerHour[i] + " cookies";
    position1.appendChild(customers);
  }
  
  //adding total sold
  var storeTotal = document.createElement('li');
  storeTotal.textContent = 'store total sold: ' + storeOne.TotalSold;
  position1.appendChild(storeTotal);
  
//Store Two
var storeTwo = {
    location: 'Tokyo',
    maxCustomers: 24,
    minCustomers: 3,
    avgCookies: 1.2,
    customersPerHour: [],
    cookiesPerHour: [],
    setCookiesPerHour: function() {
            for (var i = 0; i < hoursOpen.length; i++) {
                this.cookiesPerHour[i] = Math.ceil(this.customersPerHour[i] * this.avgCookies);
                this.TotalSold = this.TotalSold + this.cookiesPerHour[i];
            }
    },
    TotalSold: 0,
    setCustomers: function() {
        this.customersPerHour = randCustomers(this.minCustomers,this.maxCustomers);
    }

     }
    storeTwo.setCustomers();
    storeTwo.setCookiesPerHour();
console.log(storeTwo);

//getting parent node
var position2 = document.getElementById('store2');

//adding store location
var storeLoc2 = document.createElement('li');
storeLoc2.textContent = storeTwo.location;
position2.appendChild(storeLoc2);


//looping for list items
for (var i = 0; i < storeTwo.customersPerHour.length; i++ ){
    //Create li
    var customers = document.createElement('li');
    // fill in lists
    customers.textContent = hoursOpen[i] + "  "  + storeTwo.cookiesPerHour[i] + " cookies";
    position2.appendChild(customers);
  }
  
  //adding total sold
  var storeTotal = document.createElement('li');
  storeTotal.textContent = 'store total sold: ' + storeTwo.TotalSold;
  position2.appendChild(storeTotal);
  
  //Store Three
var storeThree = {
    location: 'Dubai',
    maxCustomers: 38,
    minCustomers: 11,
    avgCookies: 3.7,
    customersPerHour: [],
    cookiesPerHour: [],
    setCookiesPerHour: function() {
            for (var i = 0; i < hoursOpen.length; i++) {
                this.cookiesPerHour[i] = Math.ceil(this.customersPerHour[i] * this.avgCookies);
                this.TotalSold = this.TotalSold + this.cookiesPerHour[i];
            }
    },
    TotalSold: 0,
    setCustomers: function() {
        this.customersPerHour = randCustomers(this.minCustomers,this.maxCustomers);
    }

     }
    storeThree.setCustomers();
    storeThree.setCookiesPerHour();
console.log(storeThree);

//getting parent node
var position3 = document.getElementById('store3');

//adding store location
var storeLoc3 = document.createElement('li');
storeLoc3.textContent = storeThree.location;
position3.appendChild(storeLoc3);


//looping for list items
for (var i = 0; i < storeThree.customersPerHour.length; i++ ){
    //Create li
    var customers = document.createElement('li');
    // fill in lists
    customers.textContent = hoursOpen[i] + "  "  + storeThree.cookiesPerHour[i] + " cookies";
    position3.appendChild(customers);
  }
  
  //adding total sold
  var storeTotal = document.createElement('li');
  storeTotal.textContent = 'store total sold: ' + storeThree.TotalSold;
  position3.appendChild(storeTotal);
  
  
   //Store Four
var storeFour = {
    location: 'Paris',
    maxCustomers: 38,
    minCustomers: 30,
    avgCookies: 2.3,
    customersPerHour: [],
    cookiesPerHour: [],
    setCookiesPerHour: function() {
            for (var i = 0; i < hoursOpen.length; i++) {
                this.cookiesPerHour[i] = Math.ceil(this.customersPerHour[i] * this.avgCookies);
                this.TotalSold = this.TotalSold + this.cookiesPerHour[i];
                // return CookieArray;
            }
    },
    TotalSold: 0,
    setCustomers: function() {
        this.customersPerHour = randCustomers(this.minCustomers,this.maxCustomers);
    }

     }
    storeFour.setCustomers();
    storeFour.setCookiesPerHour();
console.log(storeFour);

//getting parent node
var position4 = document.getElementById('store4');

//adding store location
var storeLoc4 = document.createElement('li');
storeLoc4.textContent = storeFour.location;
position4.appendChild(storeLoc4);


//looping for list items
for (var i = 0; i < storeFour.customersPerHour.length; i++ ){
    //Create li
    var customers = document.createElement('li');
    // fill in lists
    customers.textContent = hoursOpen[i] + "  "  + storeFour.cookiesPerHour[i] + " cookies";
    position4.appendChild(customers);
  }
  
  //adding total sold
  var storeTotal = document.createElement('li');
  storeTotal.textContent = 'store total sold: ' + storeFour.TotalSold;
  position4.appendChild(storeTotal);
  
   //Store Five
var storeFive = {
    location: 'Lima',
    maxCustomers: 16,
    minCustomers: 32,
    avgCookies: 4.6,
    customersPerHour: [],
    cookiesPerHour: [],
    setCookiesPerHour: function() {
            for (var i = 0; i < hoursOpen.length; i++) {
                this.cookiesPerHour[i] = Math.ceil(this.customersPerHour[i] * this.avgCookies);
                this.TotalSold = this.TotalSold + this.cookiesPerHour[i];
            }
    },
    TotalSold: 0, 
    setCustomers: function() {
        this.customersPerHour = randCustomers(this.minCustomers,this.maxCustomers);
    }

     }
    storeFive.setCustomers();
    storeFive.setCookiesPerHour();
console.log(storeFive);

//getting parent node
var position5 = document.getElementById('store5');

//adding store location
var storeLoc5 = document.createElement('li');
storeLoc5.textContent = storeFive.location;
position4.appendChild(storeLoc5);


//looping for list items
for (var i = 0; i < storeFive.customersPerHour.length; i++ ){
    //Create li
    var customers = document.createElement('li');
    // fill in lists
    customers.textContent = hoursOpen[i] + "  " +  storeFive.cookiesPerHour[i] + " cookies";
    position5.appendChild(customers);
  }
  
  //adding total sold
  var storeTotal = document.createElement('li');
  storeTotal.textContent = 'store total sold: ' + storeFive.TotalSold;
  position5.appendChild(storeTotal);