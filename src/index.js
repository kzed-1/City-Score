import './styles/index.scss';
import createBarGraph from './main/chart.js';
import createTable from './main/table.js';
import {createTitle, createTitle2} from './main/title.js';
import {createSummary, createSummary2} from './main/summary';
import {createTotalScore, createTotalScore2} from './main/total_score';
import * as Util from './main/util.js';



let cityData = []
let name, summary, cityScore;

// const cityPics = {
//     "Boston": "./src/images/boston.jpg",
//     "Chicago": "./src/images/chicago.jpg",
//     "Dallas": "./src/images/dallas.jpg",
//     "LosAngeles": "./src/images/la.jpg",
//     "Phoenix": "./src/images/phoenix.jpg",
//     "Raleigh": "./src/images/raleigh.jpg",
//     "Seattle": "./src/images/seattle.jpg",
//     "SanFrancisco": "./src/images/sf2.jpg",
//     "Toronto": "./src/images/toronto.jpg",
//     "NewYork": "./src/images/newyork2.jpg"
// }


const cityPics = {
    "Boston": "https://github.com/kzed-1/City-Score/blob/master/src/images/boston.jpg?raw=true",
    "Chicago": "https://github.com/kzed-1/City-Score/blob/master/src/images/chicago.jpg?raw=true",
    "Dallas": "https://github.com/kzed-1/City-Score/blob/master/src/images/dallas.jpg?raw=true",
    "LosAngeles": "https://github.com/kzed-1/City-Score/blob/master/src/images/la.jpg?raw=true",
    "Phoenix": "https://github.com/kzed-1/City-Score/blob/master/src/images/phoenix.jpg?raw=true",
    "Raleigh": "https://github.com/kzed-1/City-Score/blob/master/src/images/raleigh.jpg?raw=true",
    "Seattle": "https://github.com/kzed-1/City-Score/blob/master/src/images/seattle.jpg?raw=true",
    "SanFrancisco": "https://github.com/kzed-1/City-Score/blob/master/src/images/sf2.jpg?raw=true",
    "Toronto": "https://github.com/kzed-1/City-Score/blob/master/src/images/toronto.jpg?raw=true",
    "NewYork": "https://github.com/kzed-1/City-Score/blob/master/src/images/newyork2.jpg?raw=true"
}

let citySelection = "https://raw.githubusercontent.com/kzed-1/City-Score/master/src/data/newyork.json"

// const cities = [
//     "./src/data/newyork.json", "./src/data/sanfran.json", "./src/data/seattle.json", 
//     "./src/data/toronto.json", "./src/data/boston.json", "./src/data/chicago.json", 
//     "./src/data/losangeles.json", "./src/data/dallas.json", "./src/data/phoenix.json", 
//     "./src/data/raleigh.json"
//     ] 
const cities = [
    "https://raw.githubusercontent.com/kzed-1/City-Score/master/src/data/newyork.json", "https://raw.githubusercontent.com/kzed-1/City-Score/master/src/data/sanfran.json", "https://raw.githubusercontent.com/kzed-1/City-Score/master/src/data/seattle.json", 
    "https://raw.githubusercontent.com/kzed-1/City-Score/master/src/data/toronto.json", "https://raw.githubusercontent.com/kzed-1/City-Score/master/src/data/boston.json", "https://raw.githubusercontent.com/kzed-1/City-Score/master/src/data/chicago.json", 
    "https://raw.githubusercontent.com/kzed-1/City-Score/master/src/data/losangeles.json", "https://raw.githubusercontent.com/kzed-1/City-Score/master/src/data/dallas.json", "https://raw.githubusercontent.com/kzed-1/City-Score/master/src/data/phoenix.json", 
    "https://raw.githubusercontent.com/kzed-1/City-Score/master/src/data/raleigh.json"
    ] 


function render() {
    d3.json(citySelection, function (error, data) {
        name = data.name
        summary = data.summary
        cityScore = data.teleport_city_score
        cityData = data.categories
        createBarGraph(cityData, name, ".chart");
        createTable(cityData, name, ".profile");
        createBarGraph(cityData, name, ".chart-2");
        createTable(cityData, name, ".profile-2");
        createTitle(name);
        createTitle2(name);
        createSummary(name, summary);
        createSummary2(name, summary);
        createTotalScore(name,cityScore,".city-score-left");
        createTotalScore2(name,cityScore,".city-score-right");
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
const titleDropDownButtonRight = document.querySelector(".title-right")
const menuList = document.querySelector(".menu-list")
const menuListRight = document.querySelector(".menu-list-right")
const cityList = document.querySelectorAll(".city")
const cityListRight = document.querySelectorAll(".city-2")

titleDropDownButton.addEventListener('click', (event) => {
    event.stopPropagation();
    return Util.toggleDropdown(menuList, ".dropdown-menu")})
titleDropDownButtonRight.addEventListener('click', (event) => {
    event.stopPropagation();
    return Util.toggleDropdown(menuListRight, ".dropdown-menu-right")})
window.addEventListener('click', () => Util.closeDropdown("menu-list", "dropdown-menu"))
window.addEventListener('click', () => Util.closeDropdown("menu-list-right", "dropdown-menu-right"))

cityList.forEach(city => {
    city.addEventListener('click', () => Util.selectItem(city, ".title", ".menu-list", ".dropdown-menu", "citychart", "table", "citytitle", "citySummary", cityPics, "body-left", "score-left"))
})
cityListRight.forEach(city => {
    city.addEventListener('click', () => Util.selectItem(city, ".title-right", ".menu-list-right", ".dropdown-menu-right", "citychart-right", "table-right", "citytitle-right", "citySummary-right", cityPics, "body-right", "score-right"))
})

renderall()



// const scores = [2.291, 3.79, 8.367, 7.551000000000001, 2.8845, 4.523750000000001, 8.671,
//     5.6365, 8.724333333333332, 5.7145, 7.560250000000001, 6.5145, 4.772,
//     4.940499999999999, 8.1155, 8.0895, 7.2094999999999985

// ]