import './styles/index.scss';
import '../dist/main.css';



let bostonData = []
let name, summary, cityScore;

d3.json("/src/data/newyork.json", function (error, data) {

    name = data.name
    summary = data.summary
    cityScore = data.teleport_city_score
    bostonData = data.categories
    createBarGraph();
    createTable();
})

// Write the createVisualization function
// This will contain the script that creates the chart
function createBarGraph() {
    // Width and height of SVG
    var w = 700;
    var h = 600;

    // Get length of dataset
    var arrayLength = bostonData.length; // length of dataset
    var maxValue = d3.max(bostonData, function (d) { return +d.score_out_of_10; }); // get maximum
    var x_axisLength = 500; // length of x-axis in our layout
    var y_axisLength = 500; // length of y-axis in our layout

    // Use a scale for the height of the visualization
    var yScale = d3.scaleLinear()
        .domain([0, maxValue])
        .range([0, y_axisLength]);

    //Create SVG element
    var svg = d3.select(".chart")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

    // Select and generate rectangle elements
    svg.selectAll("rect")
        .data(bostonData)
        .enter()
        .append("rect")
        .attr("x", function (d, i) {
            return i * (x_axisLength / arrayLength) + 30; // Set x coordinate of rectangle to index of data value (i) *25
        })
        .attr("y", function (d) {
            return h - yScale(d.score_out_of_10); // Set y coordinate of rect using the y scale
        })
        .attr("width", (x_axisLength / arrayLength) - 1)
        .attr("height", function (d) {
            return yScale(d.score_out_of_10); // Set height of using the scale
        })
        .attr("fill", function (d) {
            return d.color
        })
        .attr("class", function(d) {
            return `bar-${d.name}`;
        })

    // Create y-axis
    svg.append("line")
        .attr("x1", 30)
        .attr("y1", 200)
        .attr("x2", 30)
        .attr("y2", 750)
        .attr("stroke-width", 2)
        .attr("stroke", "black");

    // Create x-axis
    svg.append("line")
        .attr("x1", 30)
        .attr("y1", 750)
        .attr("x2", 500)
        .attr("y2", 750)
        .attr("stroke-width", 2)
        .attr("stroke", "black");

    // y-axis label
    svg.append("text")
        .attr("class", "y label")
        .attr("text-anchor", "end")
        .text("score out of 10")
        .attr("transform", "translate(20, 20) rotate(-90)")
        .attr("font-size", "14")
        .attr("font-family", "'Open Sans', sans-serif");
}; // end of function


function createTable () {

    var w = 500;
    var h = 750;

    const columns = ["name", "score_out_of_10"]
    const columnNames = ["Categories", "Score"]
    
    let table = d3.select('.profile')
        .append('table')
        .attr("class", "table")
        .style("border-radius", "10px")
        .style("border", "1px solid black");
    let header = table
        .append("header")
        .attr("class", "table-header");
    let tablebody = table.append("tablebody");

    header
        .append("tr")
        .attr("class", "header-wrapper")
        .style("color", "blue")
        .selectAll("th")
        .data(columnNames)
        .enter()
        .append("th")
        .style("text-align", "center")
        .text(function(d){
            return d;
        })
      
        

    let rows = tablebody
        .selectAll("tr")
        .data(bostonData)
        .enter()
        .append("tr");
    

    let cells = rows.selectAll("td")
        .data(function(row) {
            // debugger
            return columns.map(function(column) {
                // debugger
                return {
                    column: column,
                    value: row[column]
                }
            })
        })
        .enter()
        .append("td")
        .text(function(d){
            return d.value
        })
}