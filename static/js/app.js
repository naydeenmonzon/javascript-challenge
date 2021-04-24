// from data.js
var button = d3.select("#button");
var form = d3.select("#form");

var tbody = d3.select("tbody");
var row = tbody.append("tr");


button.on("click", runEnter);
form.on("submit",runEnter);


function runEnter() {
    var inputElement = d3.select("#datesearch");
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
    console.log(data);
  
    var filteredData = data.filter(data => data.datetime === inputValue);
  
    console.log(filteredData);

    d3.select("tbody")
    .selectAll("tr")
    .data(filteredData)
    .enter()
    .append("tr")
    .html(function(d) {
        return `<td>${d.datetime}</td><td>${d.city}</td><td>${d.state}</td><td>${d.state}</td><td>${d.shape}</td><td>${d.durationMinutes}</td><td>${d.comments}</td>`;
    });
};