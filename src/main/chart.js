import * as Util from "./util";


function createBarGraph(cityData, name) {
    // debugger;
    var width = 500;
    var height = 530;

    // Get length of dataset
    var arrayLength = cityData.length; // length of dataset
    var maxValue = d3.max(cityData, function (d) { return +d.score_out_of_10; }); // get maximum
    var x_axisLength = 500; // length of x-axis in our layout
    var y_axisLength = 500; // length of y-axis in our layout


    var xScale = d3.scaleLinear()
        .domain([0, maxValue])
        .range([0, x_axisLength]);

    var svg = d3.select(".chart")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    if (name === "New York") {
        svg.attr("class", `citychart ${name}`)

    } else {
        svg.attr("class", `citychart ${name} hidden`)
    }


    svg.selectAll("rect")
        .data(cityData)
        .enter()
        .append("rect")
        .attr("y", function (d, i) {
            return i * (y_axisLength / arrayLength) + 30;
        })
        .attr("x", 0)
        .attr("height", (y_axisLength / arrayLength) - 1)
        .attr("width", function (d) {
            return xScale(d.score_out_of_10);
        })
        .attr("fill", function (d) {
            return d.color
        })
        .attr("class", function (d) {
            return `bar ${d.name}`;
        })
        .on("mouseover", function (d) {
            const newStr = d.name.replace(/\s/g, "")
            const newStr2 = newStr.replace(/[&]/g, "")
            Util.lightupCategories(newStr2)
            return tooltip.style("visibility", "visible").text(d.name + ": " + d.score_out_of_10);
        })
        .on("mousemove", function (d) {
            return tooltip.style("top", (d3.event.pageY - 10) + "px")
                .style("left", (d3.event.pageX + 10) + "px").text(d.name + ": " + d.score_out_of_10.toFixed(2));
        })
        .on("mouseout", function (d) {
            Util.stopHighlighting()
            return tooltip.style("visibility", "hidden")
        })


    // Create y-axis
    svg.append("line")
        .attr("x1", 700)
        .attr("y1", 30)
        .attr("x2", 700)
        .attr("y2", 529)
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



    var tooltip = d3.select(".chart")
        .append("div")
        .style("position", "absolute")
        .style("font-family", "roboto")
        .style("font-size", "14px")
        .style("z-index", "3")
        .style("visibility", "hidden")
        .style("background-color", "white")
        .style("width", "auto")
        .style("margin", "0 auto")
        .style("border-radius", "10px")
        .style("padding", "10px")
        .style("border", "2px solid black")
};

export default createBarGraph;