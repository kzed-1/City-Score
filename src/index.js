import './styles/index.scss';



let cityData = []
let name, summary, cityScore;

let citySelection = "/src/data/newyork.json"

const cities = [
    "/src/data/newyork.json", "/src/data/sanfran.json", "/src/data/seattle.json", 
    "/src/data/toronto.json", "/src/data/boston.json", "/src/data/chicago.json", 
    "/src/data/losangeles.json", "/src/data/dallas.json", "/src/data/phoenix.json", 
    "/src/data/raleigh.json"
    ] 

let animationDelay = [
    "10","20","30","40","50","60","70","80","90",
    "100","110","120","130","140","150","160"
]



function render() {
    d3.json(citySelection, function (error, data) {

        name = data.name
        summary = data.summary
        cityScore = data.teleport_city_score
        cityData = data.categories
        createBarGraph();
        createTable();
        createTitle();
        createSummary();
    })

}

function renderall() {
    cities.forEach(city => {
        citySelection = city 
        render()
    });
}

function createTitle () {
    const cityName = document.createElement("h1")
    const sectionEle = document.querySelector("section")
    const linkWrapperEle = document.querySelector(".link-wrappers")

    cityName.textContent = name

    if (name === "New York"){
        cityName.className = `citytitle title-${name}`
    }else {
        cityName.className = `citytitle title-${name} hidden`
    }
    sectionEle.insertBefore(cityName, linkWrapperEle)
    // sectionEle.appendChild(cityName)
}

function createSummary() {
    const citySummaryEle = document.createElement("p")
    const sectionEle = document.querySelector("section")
    
    citySummaryEle.textContent = summary.replace(/[<].{1,2}[>]/g, "")

    if (name === "New York") {
        citySummaryEle.className = `citySummary summary-${name}`
    } else {
        citySummaryEle.className = `citySummary summary-${name} hidden`
    }

    sectionEle.insertAdjacentElement("afterend", citySummaryEle)
}






function createBarGraph() {

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
    
    if (name === "New York"){
        svg.attr("class", `citychart ${name}`)

    }else {
        svg.attr("class",`citychart ${name} hidden`)
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
        .attr("class", function(d) {
            return `bar ${d.name}`;
        })
        .on("mouseover", function(d) {
            const newStr = d.name.replace(/\s/g, "")
            const newStr2 = newStr.replace(/[&]/g, "")
            lightupCategories(newStr2)
            return tooltip.style("visibility", "visible").text(d.name + ": " + d.score_out_of_10);
        })
        .on("mousemove", function (d) {
            return tooltip.style("top", (d3.event.pageY-10)+"px")
                .style("left",(d3.event.pageX+10)+"px").text(d.name + ": " + d.score_out_of_10.toFixed(2));
        })
        .on("mouseout", function(d) {
            stopHighlighting()
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


function createTable () {

    const columns = ["name", "score_out_of_10"]
    const columnNames = ["Categories", "Score"]
    
    let table = d3.select('.profile')
        .append('table')
        .attr("class", `table table-${name} hidden`)
        .style("border-radius", "10px")
        .style("border", "2px solid black");
    let header = table
        .append("header")
        .attr("class", "table-header");
    let tablebody = table.append("tablebody");

    if (name === "New York") {
        table.attr("class", `table table-${name}`)

    } else {
        table.attr("class", `table table-${name} hidden`)
    }

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
        .data(cityData)
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
                if (d.value.toFixed(2) === 10){
                    return "10.0 /10" 
                }else {
                    return `${d.value.toFixed(2)} /10`
                }
            }else {
                return d.value
            }
        })
        .attr("class", function(d) {
            // debugger
            if (typeof d.value === "string"){
                const newStr = d.value.replace(/\s/g, "")
                const newStr2 = newStr.replace(/[&]/g, "")
                return `category ${newStr2} nonhighlighted`
            }else {
                return `category ${d.value} nonhighlighted`
            }
        })
        .attr("id" , function (d) {
            if (typeof d.value === "string") {
                const newStr = d.value.replace(/\s/g, "")
                const newStr2 = newStr.replace(/[&]/g, "")
                return newStr2
            } else {
                return d.value
            }
        })
        // .style("width", "177px")
}


const titleDropDown = document.querySelector(".title")
const menuList = document.querySelector(".menu-list")
const cityList = document.querySelectorAll(".city")

function toggleDropdown(ele) {
    const dropdownButtonEle = document.querySelector(".dropdown-menu")
    if (ele.className.includes("inactive")) {
        ele.className = ele.className.split(" ")[0]
        ele.style.borderRadius = "0 0 10px 10px"
        dropdownButtonEle.style.borderRadius = "10px 10px 0 0"

    } else {
        ele.className = ele.className + " inactive"
        ele.style.borderRadius = "10px"
        dropdownButtonEle.style.borderRadius = "10px"
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

function showTitle(cityName) {
    const cityNameRemovedSpace = cityName.split(" ")[1]
    const cityTitle = document.querySelector(`.title-${cityNameRemovedSpace}`)

    const allCityTitle = document.querySelectorAll(".citytitle")
    allCityTitle.forEach(cityTitle => {
        if (!cityTitle.className.includes("hidden")) {
            cityTitle.className = cityTitle.className + " hidden"

        }
    })

    if (cityTitle.className.includes("hidden")) {
        cityTitle.className = `citytitle title-${cityNameRemovedSpace}`
    } else {

        cityTitle.className = cityTitle.className + " hidden"

    }
}

function showSummary(cityName) {
    const cityNameRemovedSpace = cityName.split(" ")[1]
    const citySummary = document.querySelector(`.summary-${cityNameRemovedSpace}`)

    const allCitySummary = document.querySelectorAll(".citySummary")
    allCitySummary.forEach(citySummary => {
        if (!citySummary.className.includes("hidden")) {
            citySummary.className = citySummary.className + " hidden"

        }
    })

    if (citySummary.className.includes("hidden")) {
        citySummary.className = `citySummary summary-${cityNameRemovedSpace}`
    } else {

        citySummary.className = citySummary.className + " hidden"

    }
}

// add event listener on the bars to 

function lightupCategories(id) {
    const cityCategory = document.querySelectorAll(`#${id}`)
    const allCityCategories = document.querySelectorAll(".category")
    allCityCategories.forEach(cityCat => {
        if (!cityCat.className.includes("nonhighlighted")) {
            cityCat.className = cityCat.className + " nonhighlighted"
        }
    })

    cityCategory.forEach(cityCat => {
        if (cityCat.className.includes(`category ${id} nonhighlighted`)) {
            cityCat.className = `category ${id}`
        } else {
            cityCat.className = cityCat.className + " nonhighlighted"
        }
    })

}

function stopHighlighting() {
    const allCityCategories = document.querySelectorAll(".category")
    allCityCategories.forEach(cityCat => {
        if (!cityCat.className.includes("nonhighlighted")) {
            cityCat.className = cityCat.className + " nonhighlighted"
        }
    })
}



function selectItem(ele) {
    const eleText = ele.textContent
    const titleEle = document.querySelector(".title")
    titleEle.textContent = eleText;
    toggleDropdown(menuList);

    showCharts(eleText)
    showTables(eleText)
    showTitle(eleText)
    showSummary(eleText)
}

titleDropDown.addEventListener('click', () => toggleDropdown(menuList))

cityList.forEach(city => {
    city.addEventListener('click', () => selectItem(city))
})



renderall()



