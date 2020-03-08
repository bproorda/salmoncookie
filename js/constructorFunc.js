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
    Store.allStores.push(this);
}

Store.allStores = [];
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
        // console.log(cookies);
    }
    console.log(cookies);
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
    var position = document.getElementById('salesData');
var tableHead = document.createElement('thead');

//creating tableRow
var tableRow = document.createElement('tr');
tableRow.setAttribute('id', this.location);
tableRow.getAttribute('id');
// console.log(tableRow.getAttribute('id'));
//adding location
var locTD = document.createElement('th');
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

function makeTable() {
for (var z = 0; z < Store.allStores.length; z++) {
    Store.allStores[z].render();
    // console.log(Store.allStores[z]);
}
}
makeTable();

var tableFooter;
function makeTableFooter() {
var positionLoc = document.getElementById('salesData');
tableFooter = document.createElement('tfoot');
tableFooter.setAttribute('id', 'tfooty');
// console.log('this is running');

//creating footer row
var tableFoot = document.createElement('tr');
tableFooter.appendChild(tableFoot);
//adding first item
var totalFoot = document.createElement('th');
totalFoot.textContent = 'Total'
tableFoot.appendChild(totalFoot);

//adding hourly totals
var hourTotal = 0;
for (var i = 0; i < hoursOpen.length; i++) {
    hourTotal = 0;
for (var z = 0; z < Store.allStores.length; z++) {
    hourTotal += Store.allStores[z].cookiesPerHour[i];
}
// console.log(hourTotal);
var td = document.createElement('td');
td.textContent = hourTotal;
// console.log(td.textContent);
tableFoot.appendChild(td);
}
positionLoc.appendChild(tableFooter);
}


makeTableFooter();
// //appending table footer to table
// tableFooter.appendChild(tableFoot);

//creating second table for employees
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
function employees() {
for (var count = 0; count < stores.length; count ++) {
var tRow = document.createElement('tr');
var tRowFirst = document.createElement('th');
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
}
employees();


//go dark function
//got help her from couple different websites
//https://davidwalsh.name/css-variables-javascript
//https://developer.mozilla.org/en-US/docs/Web/CSS/--*
function goDark() {
var whatColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--first-color');
    console.log(whatColor);

if (whatColor === '#544bff') {
        document.documentElement.style
        .setProperty('--fourth-color', 'white');
        document.documentElement.style
        .setProperty('--first-color', 'black');
        document.documentElement.style
        .setProperty('--second-color', '#03122b');
        document.documentElement.style
        .setProperty('--third-color', '#0a2411');
        document.documentElement.style
        .setProperty('--fourth-color', 'white');
        document.documentElement.style
        .setProperty('--fifth-color', 'white');
        document.documentElement.style
        .setProperty('--sixth-color', 'white');
        document.documentElement.style
        .setProperty('--seventh-color', 'white');
        document.documentElement.style
        .setProperty('--eighth-color', 'black');
        var wall = document.getElementById('wallpaper');
wall.style.visibility = 'hidden';
    } else {
        document.documentElement.style
        .setProperty('--first-color', '#544bff');
        document.documentElement.style
        .setProperty('--second-color', '#ff4bf6');
        document.documentElement.style
        .setProperty('--third-color', '#ffab4b');
        document.documentElement.style
        .setProperty('--fourth-color', 'black');
        document.documentElement.style
        .setProperty('--fifth-color', '#f6ff4b');
        document.documentElement.style
        .setProperty('--sixth-color', '#574bff');
        document.documentElement.style
        .setProperty('--seventh-color', '#ff261e');
        document.documentElement.style
        .setProperty('--eighth-color', 'cornflowerblue');
        var wall = document.getElementById('wallpaper');
wall.style.visibility = 'visible';
    }   
}
 

//function for adding new stores
function newStoreAdd(event) {
    event.preventDefault();
    console.log('new store ran!');

  var locationInput = document.getElementById('location');
  var locationValue = locationInput.value;
  var minInput = document.getElementById('minCustomers');
  var minValue = parseInt(minInput.value);
//   console.log(minValue);
  var maxInput = document.getElementById('maxCustomers');
  var maxValue = parseInt(maxInput.value);
//   console.log(maxValue);
  var avgInput = document.getElementById('avgSold');
  var avgValue = parseInt(avgInput.value);

  var newStore = new Store(locationValue, minValue, maxValue, avgValue);

 //Checking if new location matches old one, and if so replaces it. 
 var d = 0;
 while (d < (Store.allStores.length - 1)) {
        if (newStore.location === Store.allStores[d].location) {
            // console.log(true);
            // console.log(Store.allStores);
                var oldEl = document.getElementById(Store.allStores[d].location);
                oldEl.parentNode.removeChild(oldEl);
            break;
        } else {
            // console.log(false);
            d++;
        }
 }
   

//   newStore.setCookiesSold();
  newStore.setTotal();
  newStore.render();
  console.log(newStore);
//   console.log(Store.allStores);
  var tfooty = document.getElementById('tfooty');
  tfooty.parentNode.removeChild(tfooty);
//   employees();
  
  makeTableFooter();
}

//event listener for newStoreADD
var newStoreData = document.getElementById('newStore');
newStoreData.addEventListener('submit', newStoreAdd); 
