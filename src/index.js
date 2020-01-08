import './styles/index.scss';



let bostonData = []
let name, summary, cityScore;

let citySelection = "/src/data/newyork.json"

let cities = ["/src/data/newyork.json", "/src/data/sanfran.json", "/src/data/seattle.json", "/src/data/toronto.json", "/src/data/boston.json"] 



function render() {
    d3.json(citySelection, function (error, data) {

        name = data.name
        summary = data.summary
        cityScore = data.teleport_city_score
        bostonData = data.categories
        createBarGraph();
        createTable();
    })

}

function renderall() {
    cities.forEach(city => {
        citySelection = city 
        render()
    })
}






function createBarGraph() {

    var width = 500;
    var height = 530;

    // Get length of dataset
    var arrayLength = bostonData.length; // length of dataset
    var maxValue = d3.max(bostonData, function (d) { return +d.score_out_of_10; }); // get maximum
    var x_axisLength = 500; // length of x-axis in our layout
    var y_axisLength = 500; // length of y-axis in our layout


    var yScale = d3.scaleLinear()
        .domain([0, maxValue])
        .range([0, y_axisLength]);

    var xScale = d3.scaleLinear()
        .domain([0, maxValue])
        .range([0, x_axisLength]);



    var svg = d3.select(".chart")
        .append("svg")
        .attr("width", width)
        .attr("height", height);
    
    svg.attr("class",`citychart ${name} hidden`)

    svg.selectAll("rect")
        .data(bostonData)
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
        .attr("class", function(d) {
            return `bar ${d.name}`;
        })
        .on("mouseover", function(d) {
            return tooltip.style("visibility", "visible").text(d.name + ": " + d.score_out_of_10);
        })
        .on("mousemove", function (d) {
            return tooltip.style("top", (d3.event.pageY-10)+"px")
                .style("left",(d3.event.pageX+10)+"px").text(d.name + ": " + d.score_out_of_10.toFixed(2));
        })
        .on("mouseout", function(d) {
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
        .style("border", "1px solid black")
};


function createTable () {


    const columns = ["name", "score_out_of_10"]
    const columnNames = ["Categories", "Score"]
    
    let table = d3.select('.profile')
        .append('table')
        .attr("class", `table table-${name} hidden`)
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
        .attr("class", function (d) {
            return d;
        })
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
            return columns.map(function(column) {
                return {
                    column: column,
                    value: row[column]
                }
            })
        })
        .enter()
        .append("td")
        .text(function(d){
            if (typeof d.value === "number"){
                return `${d.value.toFixed(2)} /10`
            }else {
                return d.value
            }
        })
}


const titleDropDown = document.querySelector('.title')
const menuList = document.querySelector('.menu-list')
const cityList = document.querySelectorAll(".city")

function showDropdown(ele) {
    if (ele.className.includes("active")) {
        ele.className = ele.className.split(" ")[0]
    } else {
        ele.className = ele.className + " active"
    }
}

function showCharts(cityName) {
    const cityNameRemovedSpace = cityName.split(" ")[1]
    const cityChart = document.querySelector(`.${cityNameRemovedSpace}`)
 

    const allCityCharts = document.querySelectorAll(".citychart")
    allCityCharts.forEach(cityChart => {
        if (!cityChart.className.baseVal.includes("hidden")) {
            cityChart.className.baseVal = cityChart.className.baseVal + " hidden"
        }
    })

    if (cityChart.className.baseVal.includes("hidden")){
        cityChart.className.baseVal = `citychart ${cityName}`
    }else {

        cityChart.className.baseVal = cityChart.className.baseVal + " hidden"

    }
}

function showTables(cityName) {
    const cityNameRemovedSpace = cityName.split(" ")[1]
    const cityTable = document.querySelector(`.table-${cityNameRemovedSpace}`)

    const allCityTables = document.querySelectorAll(".table")
    allCityTables.forEach(cityTable => {
        if (!cityTable.className.includes("hidden")) {
            cityTable.className = cityTable.className + " hidden"
    
        }
    })

    if (cityTable.className.includes("hidden")) {
        cityTable.className = `table table-${cityNameRemovedSpace}`
    } else {

        cityTable.className = cityTable.className + " hidden"

    }
}

function selectItem(ele) {
    const eleText = ele.textContent
    const titleEle = document.querySelector(".title")
    titleEle.textContent = eleText;
    showDropdown(menuList);

    showCharts(eleText)
    showTables(eleText)
}

titleDropDown.addEventListener('click', () => showDropdown(menuList))

cityList.forEach(city => {
    city.addEventListener('click', () => selectItem(city))
})



renderall ()


