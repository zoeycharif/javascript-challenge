// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
//console.log(data);

// // Step 1: Loop Through `data` and console.log each EFO sighting object
//data.forEach(function(sighting) {
 //   console.log(sighting);
 //  });

// // Step 2:  Use d3 to append one table row `tr` for each weather report object
  // data.forEach(function(sighting) {
 //   console.log(sighting);
  //  var row = tbody.append("tr");
 // });


  data.forEach(function(sighting) {
    console.log(sighting);
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
 //     // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });


  
  
//   function getByDate(date){
//     return data.filter(function (el) {
//       return el.date == date;
//     });
//   }
  
  
  
 // var arr = getByDate(?);

  

// Select the button
 var button = d3.select("#filter-btn");

 //run the Handleclick (tying a function to the event)
 button.on("click", handleClick)



// // Create event handlers 
// This function is triggered when the button is clicked
function handleClick() {
    console.log("someone clicked!");

    // // Select the form and get text from user.
 var form = d3.select("#datetime").property("value");

 // Assign the data from `data.js` to a descriptive variable
 var sightings = data;
 var filteredData = sightings.filter(date => date.datetime === form);
 
 
 //blank out html so only user form input is viewed
 tbody.html("")


 //update tbody with new roles based on new values from user 
 filteredData.forEach(function(sighting) {
  console.log(sighting);
  var row = tbody.append("tr");
  Object.entries(sighting).forEach(function([key, value]) {
    console.log(key, value);
 
    // Append a cell to the row for each value
//     // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});
  
    // We can use d3 to see the object that dispatched the event
    console.log(d3.event.target);
  }
  


// // Complete the event handler function for the form
// function runEnter() {

//     // Prevent the page from refreshing
//     d3.event.preventDefault();
    
//     // Select the input element and get the raw HTML node
//     var inputElement = d3.select("#date-input");
  
//     // Get the value property of the input element
//     var inputValue = inputElement.property("date");
  
//     console.log(inputValue);
//     console.log(sightings);
  
//     var filteredData = sightings.filter(date => date.datetime === inputValue);
  
//     console.log(filteredData)

// };
