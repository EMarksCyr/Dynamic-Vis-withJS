/* d3.json("samples.json").then(function(data){
    console.log(data);
});

//extract wfreq from each person into a new array and sort in descending order (b - a)
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element !=
null);
        console.log(filteredWfreq);
});

//skill drill: Use Object.entries()and forEach() to print all 
//the metadata of the first person in the samples.json() dataset (ID 940). 
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) => 
    {console.log(key + ': ' + value );});
}); 
function init() {
    data = [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16] }];
    Plotly.newPlot("plot", data);
  };
  */
  
function init() {
  var selector = d3.select("#selDataset");

  d3.json("samples.json").then((data) => {
    console.log(data);
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
})}

init();
  
function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
}

function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      var PANEL = d3.select("#sample-metadata");
  
      PANEL.html("");
      PANEL.append("h6").text("ID: " + result.id + "\n" +
      "ETHNICITY: " + result.ethnicity + "\n" + 
      "GENDER: " + result.gender + "\n" + 
      "AGE: " + result.age + "\n" + 
      "LOCATION: " + result.location + "\n" + 
      "BBTYPE: " + result.bbtype + "\n" + 
      "WFREQ: " + result.wfreq + "\n");
    });
}

/*
d3.selectAll("#dropdownMenu").on("change", updatePlotly);
  
  function updatePlotly() {
    var dropdownMenu = d3.select("#dropdownMenu");
    var dataset = dropdownMenu.property("value");
  
    var xData = [1, 2, 3, 4, 5];
    var yData = [];
  
    if (dataset === 'dataset1') {
      yData = [1, 2, 4, 8, 16];
    };
  
    if (dataset === 'dataset2') {
      yData = [1, 10, 100, 1000, 10000];
    };
  
    var trace = {
      x: [xData],
      y: [yData],
    };
    Plotly.restyle("plot", trace);
};
  
//init();
*/
