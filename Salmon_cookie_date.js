//Make shop its own new shop object
var EmpireStateBuilding = new Shop("Empire State Building",17, 88, 5.2);
var centralPark = new Shop("Central Park",6, 24, 1.2);
var statueOfLiberty = new Shop('Statue of Liberty',11, 38, 1.9);
var museumoOfArt = new Shop("Museum Of Art",20, 48, 3.3);
var madisonSquareGarden = new Shop("Madison Square Garden", 3, 24, 2.6);
var yankeeStadium = new Shop ('Yankee Stadium',9, 24,5.9);
var hours = ["10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm"];
var stores =["Empire State Building","Central Park","Statue of Liberty","Madison Square Garden","Yankee Stadium"];

//set up constructor function.
function Shop(location, minC, maxC, avgCookieSale) {
    this.name = location;
    this.minC = minC;
    this.maxC = maxC;
    this.avgCookieSale = avgCookieSale;
    this.cookieData = function(){
      var Sales=0;
      var HourlySales;
      var cookieTotal=[];
      cookieTotal.push(this.name);
      for (i=0; i<hours.length; i++) {
        HourlySales = Math.floor(((Math.random() * (this.maxC - this.minC) ) + this.minC + this.maxC) * this.avgCookieSale);
         Sales += HourlySales;
        cookieTotal.push(HourlySales);
    };
      cookieTotal.push(Sales);
      return cookieTotal;
  };
}

var shopData = [EmpireStateBuilding.cookieData(), centralPark.cookieData(), statueOfLiberty.cookieData(), museumoOfArt.cookieData(), madisonSquareGarden.cookieData() ,yankeeStadium.cookieData()];

function createTable(){
var table = document.getElementById("SalmonData");
table.innerHTML ="";
var tableRow = document.createElement("tr");
var tableData = document.createElement("th");
tableRow.appendChild(tableData);

for (var i=0; i < hours.length; i++){
  tableData = document.createElement("th");
  tableData.textContent= hours[i];
  tableRow.appendChild(tableData);
}
tableData = document.createElement("th");
tableData.textContent = "Total";
tableRow.appendChild(tableData);
table.appendChild(tableRow);

for(var storeIndex = 0; storeIndex < shopData.length; storeIndex++){
  var storeToUse = shopData[storeIndex];
  tableRow = document.createElement("tr");
  for(var index = 0; index < storeToUse.length; index++){
    tableData = document.createElement("td");
    tableData.textContent = storeToUse[index];
    tableRow.appendChild(tableData);
  }
table.appendChild(tableRow);
}
}
createTable();
