// Assign the data from `data.js` to a descriptive variable
var data = data;

var tbody = d3.select("tbody");




// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter)

form.on("submit",runEnter);


function runEnter() {

  var inputElement = d3.select("#fname");

  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(data);

  var filteredData = data.filter(data => data.datetime === inputValue);

  var newdata = filteredData.map(data => 
    date = data.datetime,
    city = data.cit,
    state = data.state,
    vcountry = data.country,
    shape = data.shape
    );

    data.forEach((newdata) => {
        var row = tbody.append("tr");
        Object.entries(newdata).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value)

        });
      });
      return newdata
};

// const homedata = data.forEach(function(data) {

//       .on("click")
//     });
//   });


  d3.select("body")
  .append("table")
//   .join("tr")
.selectAll("tr")
.data(data)
//   .data(data, function(d){
//     var row = tbody.append("tr");
//     Object.entries(data).forEach(function([key, value]) {
//       cell = row.append("td")
//       .text(value)
//   })})
//   .selectAll("td")
//   .text(cell)

.join("tr")
// .selectAll("td")  
//   .data(data)
  .append("td")
//   .data(d => d)
  
    // .text(d => d)