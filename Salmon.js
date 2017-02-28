// make each shop its new own object.
var empireStateBuilding = new shop("Empire State Building", 17, 88, 5.2);
var centralPark = new shop("Central Park", 6, 24, 1.2)
var statueOfLiberty = new shop("Statue of Liberty", 11, 38, 1.9);
var museumoOfArt = new shop("Museum Of Art", 20, 48, 3.3);
var madisonSquareGarden = new shop("Madison Square Garden", 3, 24, 2.6);

// create store Objects.
function shop(location, minCustomer, maxCustomer, avgCookieSale) {
  this.shop = location;
  this.minC = minCustomer; // per hour
  this.maxC = maxCustomer; // per hour
  this.avgSales = avgCookieSale; // per hour


    this.calculateSales = function() {
    var cookieTotal = "";
    var cookieArray = ["<td class=\"info\">" + this.shop + "</td>"];
    var total = 0;
    for (var i = 0; i < 8; i++) {
      var hour = ((i + 11) % 12);
      if (i <= 12) {
        hour += " am";
      } else {
        hour += " pm";
      }
      var CustPerHour = Math.floor(Math.random() * (this.maxC - this.minC) + this.minC + this.maxC);
      var cookieTlt = Math.floor(CustPerHour * this.avgSales);
      total += cookieTlt;
      cookieArray.push("<td>" + cookieTlt + "</td>");
    }
    for (var i = 0; i < cookieArray.length; i++) {
      cookieTotal += cookieArray[i];
    }
    cookieTotal += "<td>"+ total +"</td>";
    return cookieTotal;
  };
}

//show sales in table


document.getElementById("empirStateBuildingNumbers").innerHTML = empireStateBuilding.calculateSales();

document.getElementById("centralParkNumbers").innerHTML = centralPark.calculateSales();

document.getElementById("statueOfLibertyNumbers").innerHTML = statueOfLiberty.calculateSales();

document.getElementById("museumoOfArtNumbers").innerHTML = museumoOfArt.calculateSales();

document.getElementById("madisonSquareGardenNumbers").innerHTML = madisonSquareGarden.calculateSales();

function myFunk() {
    location.reload();
}
