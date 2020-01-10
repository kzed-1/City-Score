import './styles/index.scss';
import createBarGraph from './main/chart.js';
import createTable from './main/table.js';
import createTitle from './main/title.js';
import createSummary from './main/summary';
import * as Util from './main/util.js';



let cityData = []
let name, summary, cityScore;

let citySelection = "/src/data/newyork.json"

const cities = [
    "/src/data/newyork.json", "/src/data/sanfran.json", "/src/data/seattle.json", 
    "/src/data/toronto.json", "/src/data/boston.json", "/src/data/chicago.json", 
    "/src/data/losangeles.json", "/src/data/dallas.json", "/src/data/phoenix.json", 
    "/src/data/raleigh.json"
    ] 


function render() {
    d3.json(citySelection, function (error, data) {

        name = data.name
        summary = data.summary
        cityScore = data.teleport_city_score
        cityData = data.categories
        createBarGraph(cityData, name);
        createTable(cityData, name);
        createTitle(name);
        createSummary(name, summary);
    })
}

function renderall() {
    cities.forEach(city => {
        citySelection = city 
        render()
    });
}


// const titleDropDown = document.querySelector(".title-dropdown-wrapper")
const titleDropDownButton = document.querySelector(".title")
const menuList = document.querySelector(".menu-list")
const cityList = document.querySelectorAll(".city")


titleDropDownButton.addEventListener('click', () => Util.toggleDropdown(menuList))
titleDropDownButton.addEventListener('blur', () => Util.closeDropdown())
menuList.addEventListener('blur', () => Util.closeDropdown())

cityList.forEach(city => {
    city.addEventListener('click', () => Util.selectItem(city))
})

renderall()



