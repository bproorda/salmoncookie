'use strict';
console.log('This page is working!');

//needs
// location: 'Seattle',
// maxCustomers: 65,
// minCustomers: 23,
// avgCookies: 6.3,
// customersPerHour: [],
// cookiesPerHour: [],
// TotalSold
//parameters to ask user for: Location, min, max, avgCookies

var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//create constructor template
function Store(location, min, max, avgCookies) {
    this.location = location;
    this.min = min;
    this.max = max;
    this.avgCookies = avgCookies;
    this.cookiesPerHour = this.setCookiesSold();
    this.TotalSold = this.setTotal();
}

// Prototypes and functions.

//protoypes for cookies sold
Store.prototype.setCookiesSold = function() {
    return cookieSoldArray(this.min, this.max, this.avgCookies);
}

//function for cookies sold
function cookieSoldArray(min, max, averageCookies) {
    var cookies = [];
    var totalStore;
    for (var i = 0; i < hoursOpen.length; i++) {
        cookies[i] = Math.ceil(Math.floor(Math.random()*(max-min+1) + min) * averageCookies);
        totalStore += cookies[i];
    }
    return cookies;
} 

//prototype of total sold
Store.prototype.setTotal = function() {
    return totalCookieSold(this.cookiesPerHour);
}
//function for total sold
function totalCookieSold(cookieArray) {
    var totalStorecookies = 0;
    for (var i = 0; i < hoursOpen.length; i++) {
        totalStorecookies = totalStorecookies + cookieArray[i];
    }
    return totalStorecookies;
}

//creating objects from constructor template
var storeOne = new Store('Seattle', 23, 65, 6.3 );
var storeTwo = new Store('Tokyo', 3, 24, 1.3 );
var storeThree = new Store('Dubai', 1, 38, 3.7 );
var storeFour = new Store('Paris', 30, 38, 2.3 );
var storeFive = new Store('Lima', 2, 16, 4.6 );

// console.log(storeOne.cookiesPerHour);
// console.log(storeOne.TotalSold);
// cookieSoldArray();
// totalCookieSold();
console.log(storeOne);
console.log(storeTwo);
console.log(storeThree);
console.log(storeFour);
console.log(storeFive);


//creating table
//creating table header
var position = document.getElementById('salesData');
var tableHead = document.createElement('thead');

//creating blank first th
var firstTh = document.createElement('th');
firstTh.textContent = "   ";
tableHead.appendChild(firstTh);

//creating th's
for (var j = 0; j < hoursOpen.length; j++) {
    var th = document.createElement('th');
    th.textContent = hoursOpen[j];
    tableHead.appendChild(th);
}

//append table header to tbody
position.appendChild(tableHead);

//Rendering Function to create table rows
Store.prototype.render = function() {

//creating tableRow
var tableRow = document.createElement('tr');

//adding location
var locTD = document.createElement('td');
locTD.textContent = this.location;
tableRow.appendChild(locTD);

//adding cookies store per hour
for (var k = 0; k < this.cookiesPerHour.length; k++){
    var td = document.createElement('td');
    td.textContent = this.cookiesPerHour[k];
    tableRow.appendChild(td);
}
position.appendChild(tableRow);

}

var stores = [storeOne, storeTwo, storeThree, storeFour, storeFive];
for (var z = 0; z < stores.length; z++) {
    stores[z].render();
}

//creating table footer
var tableFoot = document.createElement('tr');

//adding first item
var totalFoot = document.createElement('td');
totalFoot.textContent = 'Total'
tableFoot.appendChild(totalFoot);


//adding hourly totals
var hourTotal = 0;
for (var i = 0; i < hoursOpen.length; i++) {
    hourTotal = 0;
for (var z = 0; z < stores.length; z++) {
    hourTotal += stores[z].cookiesPerHour[i];
}
var td = document.createElement('td');
td.textContent = hourTotal;
tableFoot.appendChild(td);
}
//appending table footer to table
position.appendChild(tableFoot);

//creating table for employees
//creating table header
var position = document.getElementById('employeeData');
var tableHead = document.createElement('thead');

//creating blank first th
var firstTh = document.createElement('th');
firstTh.textContent = "";
tableHead.appendChild(firstTh);

//creating th's
for (var j = 0; j < hoursOpen.length; j++) {
    var th = document.createElement('th');
    th.textContent = hoursOpen[j];
    tableHead.appendChild(th);
}
//append table header to tbody
position.appendChild(tableHead);

//trying to create second table

for (var count = 0; count < stores.length; count ++) {
var tRow = document.createElement('tr');
var tRowFirst = document.createElement('td');
tRowFirst.textContent = stores[count].location;
tRow.appendChild(tRowFirst);

for (var w = 0; w < hoursOpen.length; w++) {
    var tdEmployee = document.createElement('td');
    var employeeNumber = Math.ceil(stores[count].cookiesPerHour[w] / 20);
    while (employeeNumber < 2) {
        employeeNumber++;
    }
    tdEmployee.textContent = employeeNumber;
    tRow.appendChild(tdEmployee);
}
position.appendChild(tRow);
}


//go dark function
function goDark() {
    var body = document.getElementsByClassName('body');
    body.setAttribute
}