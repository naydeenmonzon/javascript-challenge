// from data.js
var tbody = d3.select("table");

console.log(data);

data.forEach(function(ufoReport) {
    console.log(ufoReport);
});
data.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
});
data.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
    
    Object.entries(ufoReport).forEach(function([key, value]) {
        console.log(key, value);
    });
});
data.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
    
    Object.entries(ufoReport).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
    });
});
data.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});
data.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});