/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _main_chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/chart.js */ "./src/main/chart.js");
/* harmony import */ var _main_table_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/table.js */ "./src/main/table.js");
/* harmony import */ var _main_title_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/title.js */ "./src/main/title.js");
/* harmony import */ var _main_summary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/summary */ "./src/main/summary.js");
/* harmony import */ var _main_total_score__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/total_score */ "./src/main/total_score.js");
/* harmony import */ var _main_util_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/util.js */ "./src/main/util.js");







var cityData = [];
var name, summary, cityScore;
var cityPics = {
  "Boston": "./src/images/boston.jpg",
  "Chicago": "./src/images/chicago.jpg",
  "Dallas": "./src/images/dallas.jpg",
  "LosAngeles": "./src/images/la.jpg",
  "Phoenix": "./src/images/phoenix.jpg",
  "Raleigh": "./src/images/raleigh.jpg",
  "Seattle": "./src/images/seattle.jpg",
  "SanFrancisco": "./src/images/sf2.jpg",
  "Toronto": "./src/images/toronto.jpg",
  "NewYork": "./src/images/newyork2.jpg"
}; // const cityPics = {
//     "Boston": "https://github.com/kzed-1/City-Score/blob/master/src/images/boston.jpg?raw=true",
//     "Chicago": "https://github.com/kzed-1/City-Score/blob/master/src/images/chicago.jpg?raw=true",
//     "Dallas": "https://github.com/kzed-1/City-Score/blob/master/src/images/dallas.jpg?raw=true",
//     "LosAngeles": "https://github.com/kzed-1/City-Score/blob/master/src/images/la.jpg?raw=true",
//     "Phoenix": "https://github.com/kzed-1/City-Score/blob/master/src/images/phoenix.jpg?raw=true",
//     "Raleigh": "https://github.com/kzed-1/City-Score/blob/master/src/images/raleigh.jpg?raw=true",
//     "Seattle": "https://github.com/kzed-1/City-Score/blob/master/src/images/seattle.jpg?raw=true",
//     "SanFrancisco": "https://github.com/kzed-1/City-Score/blob/master/src/images/sf2.jpg?raw=true",
//     "Toronto": "https://github.com/kzed-1/City-Score/blob/master/src/images/toronto.jpg?raw=true",
//     "NewYork": "https://github.com/kzed-1/City-Score/blob/master/src/images/newyork2.jpg?raw=true"
// }

var citySelection = "https://raw.githubusercontent.com/kzed-1/City-Score/master/src/data/newyork.json"; // const cities = [
//     "./src/data/newyork.json", "./src/data/sanfran.json", "./src/data/seattle.json", 
//     "./src/data/toronto.json", "./src/data/boston.json", "./src/data/chicago.json", 
//     "./src/data/losangeles.json", "./src/data/dallas.json", "./src/data/phoenix.json", 
//     "./src/data/raleigh.json"
//     ] 

var cities = ["https://raw.githubusercontent.com/kzed-1/City-Score/master/src/data/newyork.json", "https://raw.githubusercontent.com/kzed-1/City-Score/master/src/data/sanfran.json", "https://raw.githubusercontent.com/kzed-1/City-Score/master/src/data/seattle.json", "https://raw.githubusercontent.com/kzed-1/City-Score/master/src/data/toronto.json", "https://raw.githubusercontent.com/kzed-1/City-Score/master/src/data/boston.json", "https://raw.githubusercontent.com/kzed-1/City-Score/master/src/data/chicago.json", "https://raw.githubusercontent.com/kzed-1/City-Score/master/src/data/losangeles.json", "https://raw.githubusercontent.com/kzed-1/City-Score/master/src/data/dallas.json", "https://raw.githubusercontent.com/kzed-1/City-Score/master/src/data/phoenix.json", "https://raw.githubusercontent.com/kzed-1/City-Score/master/src/data/raleigh.json"];

function render() {
  d3.json(citySelection, function (error, data) {
    name = data.name;
    summary = data.summary;
    cityScore = data.teleport_city_score;
    cityData = data.categories;
    Object(_main_chart_js__WEBPACK_IMPORTED_MODULE_1__["default"])(cityData, name, ".chart");
    Object(_main_table_js__WEBPACK_IMPORTED_MODULE_2__["default"])(cityData, name, ".profile");
    Object(_main_chart_js__WEBPACK_IMPORTED_MODULE_1__["default"])(cityData, name, ".chart-2");
    Object(_main_table_js__WEBPACK_IMPORTED_MODULE_2__["default"])(cityData, name, ".profile-2");
    Object(_main_title_js__WEBPACK_IMPORTED_MODULE_3__["createTitle"])(name);
    Object(_main_title_js__WEBPACK_IMPORTED_MODULE_3__["createTitle2"])(name);
    Object(_main_summary__WEBPACK_IMPORTED_MODULE_4__["createSummary"])(name, summary);
    Object(_main_summary__WEBPACK_IMPORTED_MODULE_4__["createSummary2"])(name, summary);
    Object(_main_total_score__WEBPACK_IMPORTED_MODULE_5__["createTotalScore"])(name, cityScore, ".city-score-left");
    Object(_main_total_score__WEBPACK_IMPORTED_MODULE_5__["createTotalScore2"])(name, cityScore, ".city-score-right");
  });
}

function renderall() {
  cities.forEach(function (city) {
    citySelection = city;
    render();
  });
} // const titleDropDown = document.querySelector(".title-dropdown-wrapper")


var titleDropDownButton = document.querySelector(".title");
var titleDropDownButtonRight = document.querySelector(".title-right");
var menuList = document.querySelector(".menu-list");
var menuListRight = document.querySelector(".menu-list-right");
var cityList = document.querySelectorAll(".city");
var cityListRight = document.querySelectorAll(".city-2");
titleDropDownButton.addEventListener('click', function (event) {
  event.stopPropagation();
  return _main_util_js__WEBPACK_IMPORTED_MODULE_6__["toggleDropdown"](menuList, ".dropdown-menu");
});
titleDropDownButtonRight.addEventListener('click', function (event) {
  event.stopPropagation();
  return _main_util_js__WEBPACK_IMPORTED_MODULE_6__["toggleDropdown"](menuListRight, ".dropdown-menu-right");
});
window.addEventListener('click', function () {
  return _main_util_js__WEBPACK_IMPORTED_MODULE_6__["closeDropdown"]("menu-list", "dropdown-menu");
});
window.addEventListener('click', function () {
  return _main_util_js__WEBPACK_IMPORTED_MODULE_6__["closeDropdown"]("menu-list-right", "dropdown-menu-right");
});
cityList.forEach(function (city) {
  city.addEventListener('click', function () {
    return _main_util_js__WEBPACK_IMPORTED_MODULE_6__["selectItem"](city, ".title", ".menu-list", ".dropdown-menu", "citychart", "table", "citytitle", "citySummary", cityPics, "body-left", "score-left");
  });
});
cityListRight.forEach(function (city) {
  city.addEventListener('click', function () {
    return _main_util_js__WEBPACK_IMPORTED_MODULE_6__["selectItem"](city, ".title-right", ".menu-list-right", ".dropdown-menu-right", "citychart-right", "table-right", "citytitle-right", "citySummary-right", cityPics, "body-right", "score-right");
  });
});
renderall(); // const scores = [2.291, 3.79, 8.367, 7.551000000000001, 2.8845, 4.523750000000001, 8.671,
//     5.6365, 8.724333333333332, 5.7145, 7.560250000000001, 6.5145, 4.772,
//     4.940499999999999, 8.1155, 8.0895, 7.2094999999999985
// ]

/***/ }),

/***/ "./src/main/chart.js":
/*!***************************!*\
  !*** ./src/main/chart.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/main/util.js");


function createBarGraph(cityData, name, element) {
  // const width = 400;
  // const height = 500;
  var width = 600;
  var height = 700;
  var arrayLength = cityData.length;
  var maxValue = d3.max(cityData, function (d) {
    return +d.score_out_of_10;
  }); // const x_axisLength = 400; 
  // const y_axisLength = 471; 

  var x_axisLength = 600;
  var y_axisLength = 671;
  var chartClassName = element === ".chart" ? "citychart" : "citychart-right";
  var xScale = d3.scaleLinear().domain([0, maxValue]).range([0, x_axisLength]);
  var svg = d3.select(element).append("svg").attr("viewBox", "0 0 ".concat(width, " ").concat(height)); // .attr("width", width)
  // .attr("height", height);

  if (name === "New York" && element === ".chart") {
    svg.attr("class", "".concat(chartClassName, " ").concat(chartClassName, "-").concat(name));
  } else if (element === ".chart" && name !== "New York") {
    svg.attr("class", "".concat(chartClassName, " ").concat(chartClassName, "-").concat(name, " hidden"));
  }

  if (name === "San Francisco" && element === ".chart-2") {
    svg.attr("class", "".concat(chartClassName, " ").concat(chartClassName, "-").concat(name));
  } else if (element === ".chart-2" && name !== "San Francisco") {
    svg.attr("class", "".concat(chartClassName, " ").concat(chartClassName, "-").concat(name, " hidden"));
  }

  svg.selectAll("rect").data(cityData).enter().append("rect").attr("y", function (d, i) {
    return i * (y_axisLength / arrayLength) + 30;
  }).attr("x", 0).attr("height", y_axisLength / arrayLength - 1).attr("width", function (d) {
    return xScale(d.score_out_of_10);
  }).attr("fill", function (d) {
    return d.color;
  }).attr("class", function (d) {
    return "bar ".concat(d.name);
  }).on("mouseover", function (d) {
    var newStr = d.name.replace(/\s/g, "");
    var newStr2 = newStr.replace(/[&]/g, "");
    _util__WEBPACK_IMPORTED_MODULE_0__["lightupCategories"](newStr2);
    return tooltip.style("visibility", "visible").text(d.name + ": " + d.score_out_of_10);
  }).on("mousemove", function (d) {
    return tooltip.style("top", d3.event.pageY - 10 + "px").style("left", d3.event.pageX + 10 + "px").text(d.name + ": " + d.score_out_of_10.toFixed(2));
  }).on("mouseout", function (d) {
    _util__WEBPACK_IMPORTED_MODULE_0__["stopHighlighting"]();
    return tooltip.style("visibility", "hidden");
  });
  var tooltip = d3.select(".chart").append("div").style("position", "absolute").style("font-family", "roboto").style("font-size", "14px").style("z-index", "3").style("visibility", "hidden").style("background-color", "white").style("width", "auto").style("margin", "0 auto").style("border-radius", "10px").style("padding", "10px").style("border", "2px solid black");
}

;
/* harmony default export */ __webpack_exports__["default"] = (createBarGraph);

/***/ }),

/***/ "./src/main/summary.js":
/*!*****************************!*\
  !*** ./src/main/summary.js ***!
  \*****************************/
/*! exports provided: createSummary, createSummary2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSummary", function() { return createSummary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSummary2", function() { return createSummary2; });
function createSummary(name, summary) {
  var citySummaryEle = document.createElement("p");
  var sectionEle = document.querySelector(".title-dropdown-wrapper");
  citySummaryEle.textContent = summary.replace(/[<].{1,2}[>]/g, "");

  if (name === "New York") {
    citySummaryEle.className = "citySummary citySummary-".concat(name);
  } else {
    citySummaryEle.className = "citySummary citySummary-".concat(name, " hidden");
  }

  sectionEle.insertAdjacentElement("afterend", citySummaryEle);
}
function createSummary2(name, summary) {
  var citySummaryEle = document.createElement("p");
  var sectionEle = document.querySelector(".title-dropdown-wrapper-right");
  citySummaryEle.textContent = summary.replace(/[<].{1,2}[>]/g, "");

  if (name === "San Francisco") {
    citySummaryEle.className = "citySummary-right citySummary-right-".concat(name);
  } else {
    citySummaryEle.className = "citySummary-right citySummary-right-".concat(name, " hidden");
  }

  sectionEle.insertAdjacentElement("afterend", citySummaryEle);
}

/***/ }),

/***/ "./src/main/table.js":
/*!***************************!*\
  !*** ./src/main/table.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./src/main/util.js");


function createTable(cityData, name, element) {
  var columns = ["name", "score_out_of_10"];
  var columnNames = ["Categories", "Score"];
  var tableClassName = element === ".profile" ? "table" : "table-right";
  var table = d3.select(element).append('table').attr("class", "".concat(tableClassName, " table-").concat(name, " hidden")).style("border-radius", "10px").style("border", "2px solid black");
  var header = table.append("header").attr("class", "table-header");
  var tablebody = table.append("tablebody"); // if (name === "New York") {
  //     table.attr("class", `${tableClassName} table-${name}`)
  // } else {
  //     table.attr("class", `${tableClassName} table-${name} hidden`)
  // }

  if (name === "New York" && element === ".profile") {
    table.attr("class", "".concat(tableClassName, " table-").concat(name));
  } else if (element === ".profile" && name !== "New York") {
    table.attr("class", "".concat(tableClassName, " table-").concat(name, " hidden"));
  }

  if (name === "San Francisco" && element === ".profile-2") {
    table.attr("class", "".concat(tableClassName, " ").concat(tableClassName, "-").concat(name));
  } else if (element === ".profile-2" && name !== "San Francisco") {
    table.attr("class", "".concat(tableClassName, " ").concat(tableClassName, "-").concat(name, " hidden"));
  }

  header.append("tr").attr("class", "header-wrapper").style("color", "blue").selectAll("th").data(columnNames).enter().append("th").attr("class", function (d) {
    return d;
  }).style("text-align", "center").text(function (d) {
    return d;
  });
  var rows = tablebody.selectAll("tr").data(cityData).enter().append("tr");
  var cells = rows.selectAll("td").data(function (row) {
    return columns.map(function (column) {
      return {
        column: column,
        value: row[column]
      };
    });
  }).enter().append("td").text(function (d) {
    if (typeof d.value === "number") {
      if (d.value.toFixed(2) === 10) {
        return "10.0 /10";
      } else {
        return "".concat(d.value.toFixed(2), " /10");
      }
    } else {
      return d.value;
    }
  }).attr("class", function (d) {
    if (typeof d.value === "string") {
      var newStr = d.value.replace(/\s/g, "");
      var newStr2 = newStr.replace(/[&]/g, "");
      return "category ".concat(newStr2, " nonhighlighted");
    } else {
      return "category cat-score nonhighlighted";
    }
  }).attr("id", function (d) {
    if (typeof d.value === "string") {
      var newStr = d.value.replace(/\s/g, "");
      var newStr2 = newStr.replace(/[&]/g, "");
      return newStr2;
    } else {
      return d.value;
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (createTable);

/***/ }),

/***/ "./src/main/title.js":
/*!***************************!*\
  !*** ./src/main/title.js ***!
  \***************************/
/*! exports provided: createTitle, createTitle2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTitle", function() { return createTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTitle2", function() { return createTitle2; });
function createTitle(name) {
  var cityName = document.createElement("h1");
  var sectionEle = document.querySelector(".title-dropdown-wrapper");
  var spacerLeft = document.querySelector(".city-score-left");
  cityName.textContent = name;

  if (name === "New York") {
    cityName.className = "citytitle citytitle-".concat(name);
  } else {
    cityName.className = "citytitle citytitle-".concat(name, " hidden");
  }

  sectionEle.insertBefore(cityName, spacerLeft);
}
function createTitle2(name) {
  var cityName = document.createElement("h1");
  var sectionEle = document.querySelector(".title-dropdown-wrapper-right");
  var spacerRight = document.querySelector(".city-score-right");
  cityName.textContent = name;

  if (name === "San Francisco") {
    cityName.className = "citytitle-right citytitle-right-".concat(name);
  } else {
    cityName.className = "citytitle-right citytitle-right-".concat(name, " hidden");
  }

  sectionEle.insertBefore(cityName, spacerRight);
}

/***/ }),

/***/ "./src/main/total_score.js":
/*!*********************************!*\
  !*** ./src/main/total_score.js ***!
  \*********************************/
/*! exports provided: createTotalScore, createTotalScore2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTotalScore", function() { return createTotalScore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTotalScore2", function() { return createTotalScore2; });
function createTotalScore(name, cityScore, className) {
  var cityScoreEle = document.createElement("h1");
  var scoreDiv = document.querySelector(className);
  cityScoreEle.textContent = "City Score: ".concat(cityScore.toFixed(2));

  if (name === "New York") {
    cityScoreEle.className = "score-left score-left-".concat(name);
  } else {
    cityScoreEle.className = "score-left score-left-".concat(name, " hidden");
  }

  scoreDiv.appendChild(cityScoreEle);
}
function createTotalScore2(name, cityScore, className) {
  var cityScoreEle = document.createElement("h1");
  var scoreDiv = document.querySelector(className);
  cityScoreEle.textContent = "City Score: ".concat(cityScore.toFixed(2));

  if (name === "San Francisco") {
    cityScoreEle.className = "score-right score-right-".concat(name);
  } else {
    cityScoreEle.className = "score-right score-right-".concat(name, " hidden");
  }

  scoreDiv.appendChild(cityScoreEle);
}

/***/ }),

/***/ "./src/main/util.js":
/*!**************************!*\
  !*** ./src/main/util.js ***!
  \**************************/
/*! exports provided: toggleDropdown, showCharts, showTables, showTitle, showSummary, showCityScore, lightupCategories, stopHighlighting, changePic, selectItem, closeDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleDropdown", function() { return toggleDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showCharts", function() { return showCharts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showTables", function() { return showTables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showTitle", function() { return showTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSummary", function() { return showSummary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showCityScore", function() { return showCityScore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightupCategories", function() { return lightupCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopHighlighting", function() { return stopHighlighting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePic", function() { return changePic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectItem", function() { return selectItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeDropdown", function() { return closeDropdown; });
function toggleDropdown(ele, className) {
  var dropdownButtonEle = document.querySelector(className);

  if (ele.className.includes("inactive")) {
    ele.className = ele.className.split(" ")[0];
    ele.style.borderRadius = "0 0 10px 10px";
    dropdownButtonEle.style.borderRadius = "10px 10px 0 0";
  } else {
    ele.className = ele.className + " inactive";
    ele.style.borderRadius = "10px";
    dropdownButtonEle.style.borderRadius = "10px";
  }
}
function showCharts(cityName, cityChartClassname) {
  var cityNameRemovedSpace = cityName.split(" ")[1];
  var cityChart = document.querySelector(".".concat(cityChartClassname, "-").concat(cityNameRemovedSpace));
  var allCityCharts = document.querySelectorAll(".".concat(cityChartClassname));
  allCityCharts.forEach(function (cityChart) {
    if (!cityChart.className.baseVal.includes("hidden")) {
      cityChart.className.baseVal = cityChart.className.baseVal + " hidden";
    }
  });

  if (cityChart.className.baseVal.includes("hidden")) {
    cityChart.className.baseVal = "".concat(cityChartClassname, " ").concat(cityChartClassname, "-").concat(cityNameRemovedSpace);
  } else {
    cityChart.className.baseVal = cityChart.className.baseVal + " hidden";
  }
}
function showTables(cityName, tableClassname) {
  var cityNameRemovedSpace = cityName.split(" ")[1];
  var cityTable = document.querySelector(".".concat(tableClassname, "-").concat(cityNameRemovedSpace));
  var allCityTables = document.querySelectorAll(".".concat(tableClassname));
  allCityTables.forEach(function (cityTable) {
    if (!cityTable.className.includes("hidden")) {
      cityTable.className = cityTable.className + " hidden";
    }
  });

  if (cityTable.className.includes("hidden")) {
    cityTable.className = "".concat(tableClassname, " ").concat(tableClassname, "-").concat(cityNameRemovedSpace);
  } else {
    cityTable.className = cityTable.className + " hidden";
  }
}
function showTitle(cityName, cityTitleClassname) {
  var cityNameRemovedSpace = cityName.split(" ")[1];
  var cityTitle = document.querySelector(".".concat(cityTitleClassname, "-").concat(cityNameRemovedSpace));
  var allCityTitle = document.querySelectorAll(".".concat(cityTitleClassname));
  allCityTitle.forEach(function (cityTitle) {
    if (!cityTitle.className.includes("hidden")) {
      cityTitle.className = cityTitle.className + " hidden";
    }
  });

  if (cityTitle.className.includes("hidden")) {
    cityTitle.className = "".concat(cityTitleClassname, " ").concat(cityTitleClassname, "-").concat(cityNameRemovedSpace);
  } else {
    cityTitle.className = cityTitle.className + " hidden";
  }
}
function showSummary(cityName, citySummaryClassname) {
  var cityNameRemovedSpace = cityName.split(" ")[1];
  var citySummary = document.querySelector(".".concat(citySummaryClassname, "-").concat(cityNameRemovedSpace));
  var allCitySummary = document.querySelectorAll(".".concat(citySummaryClassname));
  allCitySummary.forEach(function (citySummary) {
    if (!citySummary.className.includes("hidden")) {
      citySummary.className = citySummary.className + " hidden";
    }
  });

  if (citySummary.className.includes("hidden")) {
    citySummary.className = "".concat(citySummaryClassname, " ").concat(citySummaryClassname, "-").concat(cityNameRemovedSpace);
  } else {
    citySummary.className = citySummary.className + " hidden";
  }
}
function showCityScore(cityName, cityScoreClassname) {
  var cityNameRemovedSpace = cityName.split(" ")[1];
  var cityScoreEle = document.querySelector(".".concat(cityScoreClassname, "-").concat(cityNameRemovedSpace));
  var allCityScore = document.querySelectorAll(".".concat(cityScoreClassname));
  allCityScore.forEach(function (cityScore) {
    if (!cityScore.className.includes("hidden")) {
      cityScore.className = cityScore.className + " hidden";
    }
  });

  if (cityScoreEle.className.includes("hidden")) {
    cityScoreEle.className = "".concat(cityScoreClassname, " ").concat(cityScoreClassname, "-").concat(cityNameRemovedSpace);
  } else {
    cityScoreEle.className = cityScore.className + " hidden";
  }
}
function lightupCategories(id) {
  var cityCategory = document.querySelectorAll("#".concat(id));
  var allCityCategories = document.querySelectorAll(".category");
  allCityCategories.forEach(function (cityCat) {
    if (!cityCat.className.includes("nonhighlighted")) {
      cityCat.className = cityCat.className + " nonhighlighted";
    }
  });
  cityCategory.forEach(function (cityCat) {
    if (cityCat.className.includes("category ".concat(id, " nonhighlighted"))) {
      cityCat.className = "category ".concat(id);
    } else {
      cityCat.className = cityCat.className + " nonhighlighted";
    }
  });
}
function stopHighlighting() {
  var allCityCategories = document.querySelectorAll(".category");
  allCityCategories.forEach(function (cityCat) {
    if (!cityCat.className.includes("nonhighlighted")) {
      cityCat.className = cityCat.className + " nonhighlighted";
    }
  });
}
function changePic(pics, city, picClassname) {
  var backgroundEle = document.querySelector(".".concat(picClassname));
  backgroundEle.style.backgroundImage = "url(".concat(pics[city], ")");
}
function selectItem(ele, titleClassname, menuListClassname, dropdownClassname, cityChartClassname, tableClassname, cityTitleClassname, citySummaryClassname, pics, picClassname, cityScoreClassname) {
  var eleText = ele.textContent;
  var cityNameNoSpaces = ele.textContent.replace(/\s/g, "");
  var titleEle = document.querySelector(titleClassname);
  var menuList = document.querySelector(menuListClassname);
  titleEle.textContent = eleText;
  toggleDropdown(menuList, dropdownClassname);
  showCharts(eleText, cityChartClassname);
  showTables(eleText, tableClassname);
  showTitle(eleText, cityTitleClassname);
  showSummary(eleText, citySummaryClassname);
  showCityScore(eleText, cityScoreClassname);
  changePic(pics, cityNameNoSpaces, picClassname);
}
function closeDropdown(className, dropdownMenuClassname) {
  var dropdownMenuList = document.querySelector(".".concat(className));
  var dropdownMenu = document.querySelector(".".concat(dropdownMenuClassname));

  if (!dropdownMenuList.className.includes("inactive")) {
    dropdownMenuList.className = "".concat(className, " inactive");
    dropdownMenu.style.borderRadius = "10px";
  }
}

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleNotFoundError: Module not found: Error: Can't resolve './src/images/newyork2.jpg' in '/Users/kenzhao/Desktop/city_score/src/styles'\n    at /Users/kenzhao/Desktop/city_score/node_modules/webpack/lib/Compilation.js:925:10\n    at /Users/kenzhao/Desktop/city_score/node_modules/webpack/lib/NormalModuleFactory.js:401:22\n    at /Users/kenzhao/Desktop/city_score/node_modules/webpack/lib/NormalModuleFactory.js:130:21\n    at /Users/kenzhao/Desktop/city_score/node_modules/webpack/lib/NormalModuleFactory.js:224:22\n    at /Users/kenzhao/Desktop/city_score/node_modules/neo-async/async.js:2830:7\n    at /Users/kenzhao/Desktop/city_score/node_modules/neo-async/async.js:6877:13\n    at /Users/kenzhao/Desktop/city_score/node_modules/webpack/lib/NormalModuleFactory.js:214:25\n    at /Users/kenzhao/Desktop/city_score/node_modules/enhanced-resolve/lib/Resolver.js:213:14\n    at /Users/kenzhao/Desktop/city_score/node_modules/enhanced-resolve/lib/Resolver.js:285:5\n    at eval (eval at create (/Users/kenzhao/Desktop/city_score/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at /Users/kenzhao/Desktop/city_score/node_modules/enhanced-resolve/lib/UnsafeCachePlugin.js:44:7\n    at /Users/kenzhao/Desktop/city_score/node_modules/enhanced-resolve/lib/Resolver.js:285:5\n    at eval (eval at create (/Users/kenzhao/Desktop/city_score/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at /Users/kenzhao/Desktop/city_score/node_modules/enhanced-resolve/lib/Resolver.js:285:5\n    at eval (eval at create (/Users/kenzhao/Desktop/city_score/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:27:1)\n    at /Users/kenzhao/Desktop/city_score/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:67:43\n    at /Users/kenzhao/Desktop/city_score/node_modules/enhanced-resolve/lib/Resolver.js:285:5\n    at eval (eval at create (/Users/kenzhao/Desktop/city_score/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at /Users/kenzhao/Desktop/city_score/node_modules/enhanced-resolve/lib/Resolver.js:285:5\n    at eval (eval at create (/Users/kenzhao/Desktop/city_score/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:27:1)\n    at /Users/kenzhao/Desktop/city_score/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:67:43\n    at /Users/kenzhao/Desktop/city_score/node_modules/enhanced-resolve/lib/Resolver.js:285:5\n    at eval (eval at create (/Users/kenzhao/Desktop/city_score/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at /Users/kenzhao/Desktop/city_score/node_modules/enhanced-resolve/lib/Resolver.js:285:5\n    at eval (eval at create (/Users/kenzhao/Desktop/city_score/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at /Users/kenzhao/Desktop/city_score/node_modules/enhanced-resolve/lib/DirectoryExistsPlugin.js:27:15\n    at /Users/kenzhao/Desktop/city_score/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:85:15\n    at processTicksAndRejections (internal/process/task_queues.js:75:11)");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3N1bW1hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vdGl0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vdG90YWxfc2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vdXRpbC5qcyJdLCJuYW1lcyI6WyJjaXR5RGF0YSIsIm5hbWUiLCJzdW1tYXJ5IiwiY2l0eVNjb3JlIiwiY2l0eVBpY3MiLCJjaXR5U2VsZWN0aW9uIiwiY2l0aWVzIiwicmVuZGVyIiwiZDMiLCJqc29uIiwiZXJyb3IiLCJkYXRhIiwidGVsZXBvcnRfY2l0eV9zY29yZSIsImNhdGVnb3JpZXMiLCJjcmVhdGVCYXJHcmFwaCIsImNyZWF0ZVRhYmxlIiwiY3JlYXRlVGl0bGUiLCJjcmVhdGVUaXRsZTIiLCJjcmVhdGVTdW1tYXJ5IiwiY3JlYXRlU3VtbWFyeTIiLCJjcmVhdGVUb3RhbFNjb3JlIiwiY3JlYXRlVG90YWxTY29yZTIiLCJyZW5kZXJhbGwiLCJmb3JFYWNoIiwiY2l0eSIsInRpdGxlRHJvcERvd25CdXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0aXRsZURyb3BEb3duQnV0dG9uUmlnaHQiLCJtZW51TGlzdCIsIm1lbnVMaXN0UmlnaHQiLCJjaXR5TGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjaXR5TGlzdFJpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiVXRpbCIsIndpbmRvdyIsImVsZW1lbnQiLCJ3aWR0aCIsImhlaWdodCIsImFycmF5TGVuZ3RoIiwibGVuZ3RoIiwibWF4VmFsdWUiLCJtYXgiLCJkIiwic2NvcmVfb3V0X29mXzEwIiwieF9heGlzTGVuZ3RoIiwieV9heGlzTGVuZ3RoIiwiY2hhcnRDbGFzc05hbWUiLCJ4U2NhbGUiLCJzY2FsZUxpbmVhciIsImRvbWFpbiIsInJhbmdlIiwic3ZnIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsInNlbGVjdEFsbCIsImVudGVyIiwiaSIsImNvbG9yIiwib24iLCJuZXdTdHIiLCJyZXBsYWNlIiwibmV3U3RyMiIsInRvb2x0aXAiLCJzdHlsZSIsInRleHQiLCJwYWdlWSIsInBhZ2VYIiwidG9GaXhlZCIsImNpdHlTdW1tYXJ5RWxlIiwiY3JlYXRlRWxlbWVudCIsInNlY3Rpb25FbGUiLCJ0ZXh0Q29udGVudCIsImNsYXNzTmFtZSIsImluc2VydEFkamFjZW50RWxlbWVudCIsImNvbHVtbnMiLCJjb2x1bW5OYW1lcyIsInRhYmxlQ2xhc3NOYW1lIiwidGFibGUiLCJoZWFkZXIiLCJ0YWJsZWJvZHkiLCJyb3dzIiwiY2VsbHMiLCJyb3ciLCJtYXAiLCJjb2x1bW4iLCJ2YWx1ZSIsImNpdHlOYW1lIiwic3BhY2VyTGVmdCIsImluc2VydEJlZm9yZSIsInNwYWNlclJpZ2h0IiwiY2l0eVNjb3JlRWxlIiwic2NvcmVEaXYiLCJhcHBlbmRDaGlsZCIsInRvZ2dsZURyb3Bkb3duIiwiZWxlIiwiZHJvcGRvd25CdXR0b25FbGUiLCJpbmNsdWRlcyIsInNwbGl0IiwiYm9yZGVyUmFkaXVzIiwic2hvd0NoYXJ0cyIsImNpdHlDaGFydENsYXNzbmFtZSIsImNpdHlOYW1lUmVtb3ZlZFNwYWNlIiwiY2l0eUNoYXJ0IiwiYWxsQ2l0eUNoYXJ0cyIsImJhc2VWYWwiLCJzaG93VGFibGVzIiwidGFibGVDbGFzc25hbWUiLCJjaXR5VGFibGUiLCJhbGxDaXR5VGFibGVzIiwic2hvd1RpdGxlIiwiY2l0eVRpdGxlQ2xhc3NuYW1lIiwiY2l0eVRpdGxlIiwiYWxsQ2l0eVRpdGxlIiwic2hvd1N1bW1hcnkiLCJjaXR5U3VtbWFyeUNsYXNzbmFtZSIsImNpdHlTdW1tYXJ5IiwiYWxsQ2l0eVN1bW1hcnkiLCJzaG93Q2l0eVNjb3JlIiwiY2l0eVNjb3JlQ2xhc3NuYW1lIiwiYWxsQ2l0eVNjb3JlIiwibGlnaHR1cENhdGVnb3JpZXMiLCJpZCIsImNpdHlDYXRlZ29yeSIsImFsbENpdHlDYXRlZ29yaWVzIiwiY2l0eUNhdCIsInN0b3BIaWdobGlnaHRpbmciLCJjaGFuZ2VQaWMiLCJwaWNzIiwicGljQ2xhc3NuYW1lIiwiYmFja2dyb3VuZEVsZSIsImJhY2tncm91bmRJbWFnZSIsInNlbGVjdEl0ZW0iLCJ0aXRsZUNsYXNzbmFtZSIsIm1lbnVMaXN0Q2xhc3NuYW1lIiwiZHJvcGRvd25DbGFzc25hbWUiLCJlbGVUZXh0IiwiY2l0eU5hbWVOb1NwYWNlcyIsInRpdGxlRWxlIiwiY2xvc2VEcm9wZG93biIsImRyb3Bkb3duTWVudUNsYXNzbmFtZSIsImRyb3Bkb3duTWVudUxpc3QiLCJkcm9wZG93bk1lbnUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNs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Q0FBQ2xFLFdBQVQsR0FBdUJnRSxPQUF2QjtBQUNBMUMsZ0JBQWMsQ0FBQ3JFLFFBQUQsRUFBVzhHLGlCQUFYLENBQWQ7QUFFQW5DLFlBQVUsQ0FBQ29DLE9BQUQsRUFBVW5DLGtCQUFWLENBQVY7QUFDQUssWUFBVSxDQUFDOEIsT0FBRCxFQUFVN0IsY0FBVixDQUFWO0FBQ0FHLFdBQVMsQ0FBQzBCLE9BQUQsRUFBVXpCLGtCQUFWLENBQVQ7QUFDQUcsYUFBVyxDQUFDc0IsT0FBRCxFQUFVckIsb0JBQVYsQ0FBWDtBQUNBRyxlQUFhLENBQUNrQixPQUFELEVBQVVqQixrQkFBVixDQUFiO0FBQ0FRLFdBQVMsQ0FBQ0MsSUFBRCxFQUFNUyxnQkFBTixFQUF3QlIsWUFBeEIsQ0FBVDtBQUNIO0FBRU0sU0FBU1UsYUFBVCxDQUF1QmxFLFNBQXZCLEVBQWtDbUUscUJBQWxDLEVBQXlEO0FBQzVELE1BQU1DLGdCQUFnQixHQUFHdkgsUUFBUSxDQUFDQyxhQUFULFlBQTJCa0QsU0FBM0IsRUFBekI7QUFDQSxNQUFNcUUsWUFBWSxHQUFHeEgsUUFBUSxDQUFDQyxhQUFULFlBQTJCcUgscUJBQTNCLEVBQXJCOztBQUVBLE1BQUksQ0FBQ0MsZ0JBQWdCLENBQUNwRSxTQUFqQixDQUEyQndCLFFBQTNCLENBQW9DLFVBQXBDLENBQUwsRUFBc0Q7QUFDbEQ0QyxvQkFBZ0IsQ0FBQ3BFLFNBQWpCLGFBQWdDQSxTQUFoQztBQUNBcUUsZ0JBQVksQ0FBQzlFLEtBQWIsQ0FBbUJtQyxZQUFuQixHQUFrQyxNQUFsQztBQUNIO0FBQ0osQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0IGNyZWF0ZUJhckdyYXBoIGZyb20gJy4vbWFpbi9jaGFydC5qcyc7XG5pbXBvcnQgY3JlYXRlVGFibGUgZnJvbSAnLi9tYWluL3RhYmxlLmpzJztcbmltcG9ydCB7Y3JlYXRlVGl0bGUsIGNyZWF0ZVRpdGxlMn0gZnJvbSAnLi9tYWluL3RpdGxlLmpzJztcbmltcG9ydCB7Y3JlYXRlU3VtbWFyeSwgY3JlYXRlU3VtbWFyeTJ9IGZyb20gJy4vbWFpbi9zdW1tYXJ5JztcbmltcG9ydCB7Y3JlYXRlVG90YWxTY29yZSwgY3JlYXRlVG90YWxTY29yZTJ9IGZyb20gJy4vbWFpbi90b3RhbF9zY29yZSc7XG5pbXBvcnQgKiBhcyBVdGlsIGZyb20gJy4vbWFpbi91dGlsLmpzJztcblxuXG5cbmxldCBjaXR5RGF0YSA9IFtdXG5sZXQgbmFtZSwgc3VtbWFyeSwgY2l0eVNjb3JlO1xuXG5jb25zdCBjaXR5UGljcyA9IHtcbiAgICBcIkJvc3RvblwiOiBcIi4vc3JjL2ltYWdlcy9ib3N0b24uanBnXCIsXG4gICAgXCJDaGljYWdvXCI6IFwiLi9zcmMvaW1hZ2VzL2NoaWNhZ28uanBnXCIsXG4gICAgXCJEYWxsYXNcIjogXCIuL3NyYy9pbWFnZXMvZGFsbGFzLmpwZ1wiLFxuICAgIFwiTG9zQW5nZWxlc1wiOiBcIi4vc3JjL2ltYWdlcy9sYS5qcGdcIixcbiAgICBcIlBob2VuaXhcIjogXCIuL3NyYy9pbWFnZXMvcGhvZW5peC5qcGdcIixcbiAgICBcIlJhbGVpZ2hcIjogXCIuL3NyYy9pbWFnZXMvcmFsZWlnaC5qcGdcIixcbiAgICBcIlNlYXR0bGVcIjogXCIuL3NyYy9pbWFnZXMvc2VhdHRsZS5qcGdcIixcbiAgICBcIlNhbkZyYW5jaXNjb1wiOiBcIi4vc3JjL2ltYWdlcy9zZjIuanBnXCIsXG4gICAgXCJUb3JvbnRvXCI6IFwiLi9zcmMvaW1hZ2VzL3Rvcm9udG8uanBnXCIsXG4gICAgXCJOZXdZb3JrXCI6IFwiLi9zcmMvaW1hZ2VzL25ld3lvcmsyLmpwZ1wiXG59XG5cblxuLy8gY29uc3QgY2l0eVBpY3MgPSB7XG4vLyAgICAgXCJCb3N0b25cIjogXCJodHRwczovL2dpdGh1Yi5jb20va3plZC0xL0NpdHktU2NvcmUvYmxvYi9tYXN0ZXIvc3JjL2ltYWdlcy9ib3N0b24uanBnP3Jhdz10cnVlXCIsXG4vLyAgICAgXCJDaGljYWdvXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2t6ZWQtMS9DaXR5LVNjb3JlL2Jsb2IvbWFzdGVyL3NyYy9pbWFnZXMvY2hpY2Fnby5qcGc/cmF3PXRydWVcIixcbi8vICAgICBcIkRhbGxhc1wiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9remVkLTEvQ2l0eS1TY29yZS9ibG9iL21hc3Rlci9zcmMvaW1hZ2VzL2RhbGxhcy5qcGc/cmF3PXRydWVcIixcbi8vICAgICBcIkxvc0FuZ2VsZXNcIjogXCJodHRwczovL2dpdGh1Yi5jb20va3plZC0xL0NpdHktU2NvcmUvYmxvYi9tYXN0ZXIvc3JjL2ltYWdlcy9sYS5qcGc/cmF3PXRydWVcIixcbi8vICAgICBcIlBob2VuaXhcIjogXCJodHRwczovL2dpdGh1Yi5jb20va3plZC0xL0NpdHktU2NvcmUvYmxvYi9tYXN0ZXIvc3JjL2ltYWdlcy9waG9lbml4LmpwZz9yYXc9dHJ1ZVwiLFxuLy8gICAgIFwiUmFsZWlnaFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9remVkLTEvQ2l0eS1TY29yZS9ibG9iL21hc3Rlci9zcmMvaW1hZ2VzL3JhbGVpZ2guanBnP3Jhdz10cnVlXCIsXG4vLyAgICAgXCJTZWF0dGxlXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2t6ZWQtMS9DaXR5LVNjb3JlL2Jsb2IvbWFzdGVyL3NyYy9pbWFnZXMvc2VhdHRsZS5qcGc/cmF3PXRydWVcIixcbi8vICAgICBcIlNhbkZyYW5jaXNjb1wiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9remVkLTEvQ2l0eS1TY29yZS9ibG9iL21hc3Rlci9zcmMvaW1hZ2VzL3NmMi5qcGc/cmF3PXRydWVcIixcbi8vICAgICBcIlRvcm9udG9cIjogXCJodHRwczovL2dpdGh1Yi5jb20va3plZC0xL0NpdHktU2NvcmUvYmxvYi9tYXN0ZXIvc3JjL2ltYWdlcy90b3JvbnRvLmpwZz9yYXc9dHJ1ZVwiLFxuLy8gICAgIFwiTmV3WW9ya1wiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9remVkLTEvQ2l0eS1TY29yZS9ibG9iL21hc3Rlci9zcmMvaW1hZ2VzL25ld3lvcmsyLmpwZz9yYXc9dHJ1ZVwiXG4vLyB9XG5cbmxldCBjaXR5U2VsZWN0aW9uID0gXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20va3plZC0xL0NpdHktU2NvcmUvbWFzdGVyL3NyYy9kYXRhL25ld3lvcmsuanNvblwiXG5cbi8vIGNvbnN0IGNpdGllcyA9IFtcbi8vICAgICBcIi4vc3JjL2RhdGEvbmV3eW9yay5qc29uXCIsIFwiLi9zcmMvZGF0YS9zYW5mcmFuLmpzb25cIiwgXCIuL3NyYy9kYXRhL3NlYXR0bGUuanNvblwiLCBcbi8vICAgICBcIi4vc3JjL2RhdGEvdG9yb250by5qc29uXCIsIFwiLi9zcmMvZGF0YS9ib3N0b24uanNvblwiLCBcIi4vc3JjL2RhdGEvY2hpY2Fnby5qc29uXCIsIFxuLy8gICAgIFwiLi9zcmMvZGF0YS9sb3NhbmdlbGVzLmpzb25cIiwgXCIuL3NyYy9kYXRhL2RhbGxhcy5qc29uXCIsIFwiLi9zcmMvZGF0YS9waG9lbml4Lmpzb25cIiwgXG4vLyAgICAgXCIuL3NyYy9kYXRhL3JhbGVpZ2guanNvblwiXG4vLyAgICAgXSBcbmNvbnN0IGNpdGllcyA9IFtcbiAgICBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9remVkLTEvQ2l0eS1TY29yZS9tYXN0ZXIvc3JjL2RhdGEvbmV3eW9yay5qc29uXCIsIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2t6ZWQtMS9DaXR5LVNjb3JlL21hc3Rlci9zcmMvZGF0YS9zYW5mcmFuLmpzb25cIiwgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20va3plZC0xL0NpdHktU2NvcmUvbWFzdGVyL3NyYy9kYXRhL3NlYXR0bGUuanNvblwiLCBcbiAgICBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9remVkLTEvQ2l0eS1TY29yZS9tYXN0ZXIvc3JjL2RhdGEvdG9yb250by5qc29uXCIsIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2t6ZWQtMS9DaXR5LVNjb3JlL21hc3Rlci9zcmMvZGF0YS9ib3N0b24uanNvblwiLCBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9remVkLTEvQ2l0eS1TY29yZS9tYXN0ZXIvc3JjL2RhdGEvY2hpY2Fnby5qc29uXCIsIFxuICAgIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2t6ZWQtMS9DaXR5LVNjb3JlL21hc3Rlci9zcmMvZGF0YS9sb3NhbmdlbGVzLmpzb25cIiwgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20va3plZC0xL0NpdHktU2NvcmUvbWFzdGVyL3NyYy9kYXRhL2RhbGxhcy5qc29uXCIsIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2t6ZWQtMS9DaXR5LVNjb3JlL21hc3Rlci9zcmMvZGF0YS9waG9lbml4Lmpzb25cIiwgXG4gICAgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20va3plZC0xL0NpdHktU2NvcmUvbWFzdGVyL3NyYy9kYXRhL3JhbGVpZ2guanNvblwiXG4gICAgXSBcblxuXG5mdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgZDMuanNvbihjaXR5U2VsZWN0aW9uLCBmdW5jdGlvbiAoZXJyb3IsIGRhdGEpIHtcbiAgICAgICAgbmFtZSA9IGRhdGEubmFtZVxuICAgICAgICBzdW1tYXJ5ID0gZGF0YS5zdW1tYXJ5XG4gICAgICAgIGNpdHlTY29yZSA9IGRhdGEudGVsZXBvcnRfY2l0eV9zY29yZVxuICAgICAgICBjaXR5RGF0YSA9IGRhdGEuY2F0ZWdvcmllc1xuICAgICAgICBjcmVhdGVCYXJHcmFwaChjaXR5RGF0YSwgbmFtZSwgXCIuY2hhcnRcIik7XG4gICAgICAgIGNyZWF0ZVRhYmxlKGNpdHlEYXRhLCBuYW1lLCBcIi5wcm9maWxlXCIpO1xuICAgICAgICBjcmVhdGVCYXJHcmFwaChjaXR5RGF0YSwgbmFtZSwgXCIuY2hhcnQtMlwiKTtcbiAgICAgICAgY3JlYXRlVGFibGUoY2l0eURhdGEsIG5hbWUsIFwiLnByb2ZpbGUtMlwiKTtcbiAgICAgICAgY3JlYXRlVGl0bGUobmFtZSk7XG4gICAgICAgIGNyZWF0ZVRpdGxlMihuYW1lKTtcbiAgICAgICAgY3JlYXRlU3VtbWFyeShuYW1lLCBzdW1tYXJ5KTtcbiAgICAgICAgY3JlYXRlU3VtbWFyeTIobmFtZSwgc3VtbWFyeSk7XG4gICAgICAgIGNyZWF0ZVRvdGFsU2NvcmUobmFtZSxjaXR5U2NvcmUsXCIuY2l0eS1zY29yZS1sZWZ0XCIpO1xuICAgICAgICBjcmVhdGVUb3RhbFNjb3JlMihuYW1lLGNpdHlTY29yZSxcIi5jaXR5LXNjb3JlLXJpZ2h0XCIpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHJlbmRlcmFsbCgpIHtcbiAgICBjaXRpZXMuZm9yRWFjaChjaXR5ID0+IHtcbiAgICAgICAgY2l0eVNlbGVjdGlvbiA9IGNpdHkgXG4gICAgICAgIHJlbmRlcigpXG4gICAgfSk7XG59XG5cblxuLy8gY29uc3QgdGl0bGVEcm9wRG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGUtZHJvcGRvd24td3JhcHBlclwiKVxuY29uc3QgdGl0bGVEcm9wRG93bkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGVcIilcbmNvbnN0IHRpdGxlRHJvcERvd25CdXR0b25SaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGUtcmlnaHRcIilcbmNvbnN0IG1lbnVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWxpc3RcIilcbmNvbnN0IG1lbnVMaXN0UmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtbGlzdC1yaWdodFwiKVxuY29uc3QgY2l0eUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNpdHlcIilcbmNvbnN0IGNpdHlMaXN0UmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNpdHktMlwiKVxuXG50aXRsZURyb3BEb3duQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgcmV0dXJuIFV0aWwudG9nZ2xlRHJvcGRvd24obWVudUxpc3QsIFwiLmRyb3Bkb3duLW1lbnVcIil9KVxudGl0bGVEcm9wRG93bkJ1dHRvblJpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgcmV0dXJuIFV0aWwudG9nZ2xlRHJvcGRvd24obWVudUxpc3RSaWdodCwgXCIuZHJvcGRvd24tbWVudS1yaWdodFwiKX0pXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBVdGlsLmNsb3NlRHJvcGRvd24oXCJtZW51LWxpc3RcIiwgXCJkcm9wZG93bi1tZW51XCIpKVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gVXRpbC5jbG9zZURyb3Bkb3duKFwibWVudS1saXN0LXJpZ2h0XCIsIFwiZHJvcGRvd24tbWVudS1yaWdodFwiKSlcblxuY2l0eUxpc3QuZm9yRWFjaChjaXR5ID0+IHtcbiAgICBjaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gVXRpbC5zZWxlY3RJdGVtKGNpdHksIFwiLnRpdGxlXCIsIFwiLm1lbnUtbGlzdFwiLCBcIi5kcm9wZG93bi1tZW51XCIsIFwiY2l0eWNoYXJ0XCIsIFwidGFibGVcIiwgXCJjaXR5dGl0bGVcIiwgXCJjaXR5U3VtbWFyeVwiLCBjaXR5UGljcywgXCJib2R5LWxlZnRcIiwgXCJzY29yZS1sZWZ0XCIpKVxufSlcbmNpdHlMaXN0UmlnaHQuZm9yRWFjaChjaXR5ID0+IHtcbiAgICBjaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gVXRpbC5zZWxlY3RJdGVtKGNpdHksIFwiLnRpdGxlLXJpZ2h0XCIsIFwiLm1lbnUtbGlzdC1yaWdodFwiLCBcIi5kcm9wZG93bi1tZW51LXJpZ2h0XCIsIFwiY2l0eWNoYXJ0LXJpZ2h0XCIsIFwidGFibGUtcmlnaHRcIiwgXCJjaXR5dGl0bGUtcmlnaHRcIiwgXCJjaXR5U3VtbWFyeS1yaWdodFwiLCBjaXR5UGljcywgXCJib2R5LXJpZ2h0XCIsIFwic2NvcmUtcmlnaHRcIikpXG59KVxuXG5yZW5kZXJhbGwoKVxuXG5cblxuLy8gY29uc3Qgc2NvcmVzID0gWzIuMjkxLCAzLjc5LCA4LjM2NywgNy41NTEwMDAwMDAwMDAwMDEsIDIuODg0NSwgNC41MjM3NTAwMDAwMDAwMDEsIDguNjcxLFxuLy8gICAgIDUuNjM2NSwgOC43MjQzMzMzMzMzMzMzMzIsIDUuNzE0NSwgNy41NjAyNTAwMDAwMDAwMDEsIDYuNTE0NSwgNC43NzIsXG4vLyAgICAgNC45NDA0OTk5OTk5OTk5OTksIDguMTE1NSwgOC4wODk1LCA3LjIwOTQ5OTk5OTk5OTk5ODVcblxuLy8gXSIsImltcG9ydCAqIGFzIFV0aWwgZnJvbSBcIi4vdXRpbFwiO1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUJhckdyYXBoKGNpdHlEYXRhLCBuYW1lLCBlbGVtZW50KSB7XG4gICAgLy8gY29uc3Qgd2lkdGggPSA0MDA7XG4gICAgLy8gY29uc3QgaGVpZ2h0ID0gNTAwO1xuICAgIGNvbnN0IHdpZHRoID0gNjAwO1xuICAgIGNvbnN0IGhlaWdodCA9IDcwMDtcblxuICAgIGNvbnN0IGFycmF5TGVuZ3RoID0gY2l0eURhdGEubGVuZ3RoOyBcbiAgICBjb25zdCBtYXhWYWx1ZSA9IGQzLm1heChjaXR5RGF0YSwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuICtkLnNjb3JlX291dF9vZl8xMDsgfSk7IFxuICAgIC8vIGNvbnN0IHhfYXhpc0xlbmd0aCA9IDQwMDsgXG4gICAgLy8gY29uc3QgeV9heGlzTGVuZ3RoID0gNDcxOyBcbiAgICBjb25zdCB4X2F4aXNMZW5ndGggPSA2MDA7IFxuICAgIGNvbnN0IHlfYXhpc0xlbmd0aCA9IDY3MTsgXG5cbiAgICBjb25zdCBjaGFydENsYXNzTmFtZSA9IGVsZW1lbnQgPT09IFwiLmNoYXJ0XCIgPyBcImNpdHljaGFydFwiIDogXCJjaXR5Y2hhcnQtcmlnaHRcIlxuXG5cbiAgICBjb25zdCB4U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgIC5kb21haW4oWzAsIG1heFZhbHVlXSlcbiAgICAgICAgLnJhbmdlKFswLCB4X2F4aXNMZW5ndGhdKTtcblxuICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChlbGVtZW50KVxuICAgICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgIC5hdHRyKFwidmlld0JveFwiLCBgMCAwICR7d2lkdGh9ICR7aGVpZ2h0fWApXG4gICAgICAgIC8vIC5hdHRyKFwid2lkdGhcIiwgd2lkdGgpXG4gICAgICAgIC8vIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCk7XG5cbiAgICBpZiAobmFtZSA9PT0gXCJOZXcgWW9ya1wiICYmIGVsZW1lbnQgPT09IFwiLmNoYXJ0XCIpIHtcbiAgICAgICAgc3ZnLmF0dHIoXCJjbGFzc1wiLCBgJHtjaGFydENsYXNzTmFtZX0gJHtjaGFydENsYXNzTmFtZX0tJHtuYW1lfWApXG4gICAgfSBlbHNlIGlmIChlbGVtZW50ID09PSBcIi5jaGFydFwiICYmIChuYW1lICE9PSBcIk5ldyBZb3JrXCIpKSB7XG4gICAgICAgIHN2Zy5hdHRyKFwiY2xhc3NcIiwgYCR7Y2hhcnRDbGFzc05hbWV9ICR7Y2hhcnRDbGFzc05hbWV9LSR7bmFtZX0gaGlkZGVuYClcbiAgICB9IFxuXG4gICAgaWYgKG5hbWUgPT09IFwiU2FuIEZyYW5jaXNjb1wiICYmIGVsZW1lbnQgPT09IFwiLmNoYXJ0LTJcIikge1xuICAgICAgICBzdmcuYXR0cihcImNsYXNzXCIsIGAke2NoYXJ0Q2xhc3NOYW1lfSAke2NoYXJ0Q2xhc3NOYW1lfS0ke25hbWV9YClcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQgPT09IFwiLmNoYXJ0LTJcIiAmJiAobmFtZSAhPT0gXCJTYW4gRnJhbmNpc2NvXCIpKXsgXG4gICAgICAgIHN2Zy5hdHRyKFwiY2xhc3NcIiwgYCR7Y2hhcnRDbGFzc05hbWV9ICR7Y2hhcnRDbGFzc05hbWV9LSR7bmFtZX0gaGlkZGVuYClcbiAgICB9XG5cblxuICAgIHN2Zy5zZWxlY3RBbGwoXCJyZWN0XCIpXG4gICAgICAgIC5kYXRhKGNpdHlEYXRhKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiBpICogKHlfYXhpc0xlbmd0aCAvIGFycmF5TGVuZ3RoKSArIDMwO1xuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcInhcIiwgMClcbiAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgKHlfYXhpc0xlbmd0aCAvIGFycmF5TGVuZ3RoKSAtIDEpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiB4U2NhbGUoZC5zY29yZV9vdXRfb2ZfMTApO1xuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBkLmNvbG9yXG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBgYmFyICR7ZC5uYW1lfWA7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgY29uc3QgbmV3U3RyID0gZC5uYW1lLnJlcGxhY2UoL1xccy9nLCBcIlwiKVxuICAgICAgICAgICAgY29uc3QgbmV3U3RyMiA9IG5ld1N0ci5yZXBsYWNlKC9bJl0vZywgXCJcIilcbiAgICAgICAgICAgIFV0aWwubGlnaHR1cENhdGVnb3JpZXMobmV3U3RyMilcbiAgICAgICAgICAgIHJldHVybiB0b29sdGlwLnN0eWxlKFwidmlzaWJpbGl0eVwiLCBcInZpc2libGVcIikudGV4dChkLm5hbWUgKyBcIjogXCIgKyBkLnNjb3JlX291dF9vZl8xMCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRvb2x0aXAuc3R5bGUoXCJ0b3BcIiwgKGQzLmV2ZW50LnBhZ2VZIC0gMTApICsgXCJweFwiKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcImxlZnRcIiwgKGQzLmV2ZW50LnBhZ2VYICsgMTApICsgXCJweFwiKS50ZXh0KGQubmFtZSArIFwiOiBcIiArIGQuc2NvcmVfb3V0X29mXzEwLnRvRml4ZWQoMikpO1xuICAgICAgICB9KVxuICAgICAgICAub24oXCJtb3VzZW91dFwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgVXRpbC5zdG9wSGlnaGxpZ2h0aW5nKClcbiAgICAgICAgICAgIHJldHVybiB0b29sdGlwLnN0eWxlKFwidmlzaWJpbGl0eVwiLCBcImhpZGRlblwiKVxuICAgICAgICB9KVxuXG4gICAgY29uc3QgdG9vbHRpcCA9IGQzLnNlbGVjdChcIi5jaGFydFwiKVxuICAgICAgICAuYXBwZW5kKFwiZGl2XCIpXG4gICAgICAgIC5zdHlsZShcInBvc2l0aW9uXCIsIFwiYWJzb2x1dGVcIilcbiAgICAgICAgLnN0eWxlKFwiZm9udC1mYW1pbHlcIiwgXCJyb2JvdG9cIilcbiAgICAgICAgLnN0eWxlKFwiZm9udC1zaXplXCIsIFwiMTRweFwiKVxuICAgICAgICAuc3R5bGUoXCJ6LWluZGV4XCIsIFwiM1wiKVxuICAgICAgICAuc3R5bGUoXCJ2aXNpYmlsaXR5XCIsIFwiaGlkZGVuXCIpXG4gICAgICAgIC5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIiwgXCJ3aGl0ZVwiKVxuICAgICAgICAuc3R5bGUoXCJ3aWR0aFwiLCBcImF1dG9cIilcbiAgICAgICAgLnN0eWxlKFwibWFyZ2luXCIsIFwiMCBhdXRvXCIpXG4gICAgICAgIC5zdHlsZShcImJvcmRlci1yYWRpdXNcIiwgXCIxMHB4XCIpXG4gICAgICAgIC5zdHlsZShcInBhZGRpbmdcIiwgXCIxMHB4XCIpXG4gICAgICAgIC5zdHlsZShcImJvcmRlclwiLCBcIjJweCBzb2xpZCBibGFja1wiKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQmFyR3JhcGg7IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN1bW1hcnkobmFtZSwgc3VtbWFyeSkge1xuICAgIGNvbnN0IGNpdHlTdW1tYXJ5RWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBjb25zdCBzZWN0aW9uRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZS1kcm9wZG93bi13cmFwcGVyXCIpXG5cbiAgICBjaXR5U3VtbWFyeUVsZS50ZXh0Q29udGVudCA9IHN1bW1hcnkucmVwbGFjZSgvWzxdLnsxLDJ9Wz5dL2csIFwiXCIpXG5cbiAgICBpZiAobmFtZSA9PT0gXCJOZXcgWW9ya1wiKSB7XG4gICAgICAgIGNpdHlTdW1tYXJ5RWxlLmNsYXNzTmFtZSA9IGBjaXR5U3VtbWFyeSBjaXR5U3VtbWFyeS0ke25hbWV9YFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNpdHlTdW1tYXJ5RWxlLmNsYXNzTmFtZSA9IGBjaXR5U3VtbWFyeSBjaXR5U3VtbWFyeS0ke25hbWV9IGhpZGRlbmBcbiAgICB9XG5cbiAgICBzZWN0aW9uRWxlLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyZW5kXCIsIGNpdHlTdW1tYXJ5RWxlKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3VtbWFyeTIobmFtZSwgc3VtbWFyeSkge1xuICAgIGNvbnN0IGNpdHlTdW1tYXJ5RWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBjb25zdCBzZWN0aW9uRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZS1kcm9wZG93bi13cmFwcGVyLXJpZ2h0XCIpXG5cbiAgICBjaXR5U3VtbWFyeUVsZS50ZXh0Q29udGVudCA9IHN1bW1hcnkucmVwbGFjZSgvWzxdLnsxLDJ9Wz5dL2csIFwiXCIpXG5cbiAgICBpZiAobmFtZSA9PT0gXCJTYW4gRnJhbmNpc2NvXCIpIHtcbiAgICAgICAgY2l0eVN1bW1hcnlFbGUuY2xhc3NOYW1lID0gYGNpdHlTdW1tYXJ5LXJpZ2h0IGNpdHlTdW1tYXJ5LXJpZ2h0LSR7bmFtZX1gXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2l0eVN1bW1hcnlFbGUuY2xhc3NOYW1lID0gYGNpdHlTdW1tYXJ5LXJpZ2h0IGNpdHlTdW1tYXJ5LXJpZ2h0LSR7bmFtZX0gaGlkZGVuYFxuICAgIH1cblxuICAgIHNlY3Rpb25FbGUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJlbmRcIiwgY2l0eVN1bW1hcnlFbGUpXG59XG5cbiIsImltcG9ydCAqIGFzIFV0aWwgZnJvbSAnLi91dGlsLmpzJ1xuXG5mdW5jdGlvbiBjcmVhdGVUYWJsZShjaXR5RGF0YSwgbmFtZSwgZWxlbWVudCkge1xuXG4gICAgY29uc3QgY29sdW1ucyA9IFtcIm5hbWVcIiwgXCJzY29yZV9vdXRfb2ZfMTBcIl1cbiAgICBjb25zdCBjb2x1bW5OYW1lcyA9IFtcIkNhdGVnb3JpZXNcIiwgXCJTY29yZVwiXVxuXG4gICAgY29uc3QgdGFibGVDbGFzc05hbWUgPSBlbGVtZW50ID09PSBcIi5wcm9maWxlXCIgPyBcInRhYmxlXCIgOiBcInRhYmxlLXJpZ2h0XCJcblxuXG4gICAgbGV0IHRhYmxlID0gZDMuc2VsZWN0KGVsZW1lbnQpXG4gICAgICAgIC5hcHBlbmQoJ3RhYmxlJylcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBgJHt0YWJsZUNsYXNzTmFtZX0gdGFibGUtJHtuYW1lfSBoaWRkZW5gKVxuICAgICAgICAuc3R5bGUoXCJib3JkZXItcmFkaXVzXCIsIFwiMTBweFwiKVxuICAgICAgICAuc3R5bGUoXCJib3JkZXJcIiwgXCIycHggc29saWQgYmxhY2tcIik7XG4gICAgbGV0IGhlYWRlciA9IHRhYmxlXG4gICAgICAgIC5hcHBlbmQoXCJoZWFkZXJcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInRhYmxlLWhlYWRlclwiKTtcbiAgICBsZXQgdGFibGVib2R5ID0gdGFibGUuYXBwZW5kKFwidGFibGVib2R5XCIpO1xuXG4gICAgLy8gaWYgKG5hbWUgPT09IFwiTmV3IFlvcmtcIikge1xuICAgIC8vICAgICB0YWJsZS5hdHRyKFwiY2xhc3NcIiwgYCR7dGFibGVDbGFzc05hbWV9IHRhYmxlLSR7bmFtZX1gKVxuXG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgICAgdGFibGUuYXR0cihcImNsYXNzXCIsIGAke3RhYmxlQ2xhc3NOYW1lfSB0YWJsZS0ke25hbWV9IGhpZGRlbmApXG4gICAgLy8gfVxuXG4gICAgaWYgKG5hbWUgPT09IFwiTmV3IFlvcmtcIiAmJiBlbGVtZW50ID09PSBcIi5wcm9maWxlXCIpIHtcbiAgICAgICAgdGFibGUuYXR0cihcImNsYXNzXCIsIGAke3RhYmxlQ2xhc3NOYW1lfSB0YWJsZS0ke25hbWV9YClcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQgPT09IFwiLnByb2ZpbGVcIiAmJiAobmFtZSAhPT0gXCJOZXcgWW9ya1wiKSkge1xuICAgICAgICB0YWJsZS5hdHRyKFwiY2xhc3NcIiwgYCR7dGFibGVDbGFzc05hbWV9IHRhYmxlLSR7bmFtZX0gaGlkZGVuYClcbiAgICB9XG5cbiAgICBpZiAobmFtZSA9PT0gXCJTYW4gRnJhbmNpc2NvXCIgJiYgZWxlbWVudCA9PT0gXCIucHJvZmlsZS0yXCIpIHtcbiAgICAgICAgdGFibGUuYXR0cihcImNsYXNzXCIsIGAke3RhYmxlQ2xhc3NOYW1lfSAke3RhYmxlQ2xhc3NOYW1lfS0ke25hbWV9YClcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQgPT09IFwiLnByb2ZpbGUtMlwiICYmIChuYW1lICE9PSBcIlNhbiBGcmFuY2lzY29cIikpIHtcbiAgICAgICAgdGFibGUuYXR0cihcImNsYXNzXCIsIGAke3RhYmxlQ2xhc3NOYW1lfSAke3RhYmxlQ2xhc3NOYW1lfS0ke25hbWV9IGhpZGRlbmApXG4gICAgfVxuXG4gICAgaGVhZGVyXG4gICAgICAgIC5hcHBlbmQoXCJ0clwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiaGVhZGVyLXdyYXBwZXJcIilcbiAgICAgICAgLnN0eWxlKFwiY29sb3JcIiwgXCJibHVlXCIpXG4gICAgICAgIC5zZWxlY3RBbGwoXCJ0aFwiKVxuICAgICAgICAuZGF0YShjb2x1bW5OYW1lcylcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZChcInRoXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBkO1xuICAgICAgICB9KVxuICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFsaWduXCIsIFwiY2VudGVyXCIpXG4gICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gZDtcbiAgICAgICAgfSlcblxuXG5cbiAgICBsZXQgcm93cyA9IHRhYmxlYm9keVxuICAgICAgICAuc2VsZWN0QWxsKFwidHJcIilcbiAgICAgICAgLmRhdGEoY2l0eURhdGEpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJ0clwiKVxuXG5cbiAgICBsZXQgY2VsbHMgPSByb3dzLnNlbGVjdEFsbChcInRkXCIpXG4gICAgICAgIC5kYXRhKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW5zLm1hcChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uOiBjb2x1bW4sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiByb3dbY29sdW1uXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJ0ZFwiKVxuICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBkLnZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGQudmFsdWUudG9GaXhlZCgyKSA9PT0gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiMTAuMCAvMTBcIlxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgJHtkLnZhbHVlLnRvRml4ZWQoMil9IC8xMGBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBkLnZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZC52YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1N0ciA9IGQudmFsdWUucmVwbGFjZSgvXFxzL2csIFwiXCIpXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3RyMiA9IG5ld1N0ci5yZXBsYWNlKC9bJl0vZywgXCJcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gYGNhdGVnb3J5ICR7bmV3U3RyMn0gbm9uaGlnaGxpZ2h0ZWRgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBgY2F0ZWdvcnkgY2F0LXNjb3JlIG5vbmhpZ2hsaWdodGVkYFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcImlkXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGQudmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTdHIgPSBkLnZhbHVlLnJlcGxhY2UoL1xccy9nLCBcIlwiKVxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1N0cjIgPSBuZXdTdHIucmVwbGFjZSgvWyZdL2csIFwiXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1N0cjJcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGQudmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGFibGU7IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRpdGxlKG5hbWUpIHtcbiAgICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICAgIGNvbnN0IHNlY3Rpb25FbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlLWRyb3Bkb3duLXdyYXBwZXJcIilcbiAgICBjb25zdCBzcGFjZXJMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXR5LXNjb3JlLWxlZnRcIilcblxuICAgIGNpdHlOYW1lLnRleHRDb250ZW50ID0gbmFtZVxuXG4gICAgaWYgKG5hbWUgPT09IFwiTmV3IFlvcmtcIikge1xuICAgICAgICBjaXR5TmFtZS5jbGFzc05hbWUgPSBgY2l0eXRpdGxlIGNpdHl0aXRsZS0ke25hbWV9YFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNpdHlOYW1lLmNsYXNzTmFtZSA9IGBjaXR5dGl0bGUgY2l0eXRpdGxlLSR7bmFtZX0gaGlkZGVuYFxuICAgIH1cbiAgICBzZWN0aW9uRWxlLmluc2VydEJlZm9yZShjaXR5TmFtZSwgc3BhY2VyTGVmdClcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGl0bGUyKG5hbWUpIHtcbiAgICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICAgIGNvbnN0IHNlY3Rpb25FbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlLWRyb3Bkb3duLXdyYXBwZXItcmlnaHRcIilcbiAgICBjb25zdCBzcGFjZXJSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2l0eS1zY29yZS1yaWdodFwiKVxuXG4gICAgY2l0eU5hbWUudGV4dENvbnRlbnQgPSBuYW1lXG5cblxuXG4gICAgaWYgKG5hbWUgPT09IFwiU2FuIEZyYW5jaXNjb1wiKSB7XG4gICAgICAgIGNpdHlOYW1lLmNsYXNzTmFtZSA9IGBjaXR5dGl0bGUtcmlnaHQgY2l0eXRpdGxlLXJpZ2h0LSR7bmFtZX1gXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2l0eU5hbWUuY2xhc3NOYW1lID0gYGNpdHl0aXRsZS1yaWdodCBjaXR5dGl0bGUtcmlnaHQtJHtuYW1lfSBoaWRkZW5gXG4gICAgfVxuICAgIHNlY3Rpb25FbGUuaW5zZXJ0QmVmb3JlKGNpdHlOYW1lLCBzcGFjZXJSaWdodClcbn1cblxuXG5cblxuXG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlVG90YWxTY29yZShuYW1lLCBjaXR5U2NvcmUsIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGNpdHlTY29yZUVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICAgIGNvbnN0IHNjb3JlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjbGFzc05hbWUpXG5cbiAgICBjaXR5U2NvcmVFbGUudGV4dENvbnRlbnQgPSBgQ2l0eSBTY29yZTogJHtjaXR5U2NvcmUudG9GaXhlZCgyKX1gXG5cbiAgICBpZiAobmFtZSA9PT0gXCJOZXcgWW9ya1wiKSB7XG4gICAgICAgIGNpdHlTY29yZUVsZS5jbGFzc05hbWUgPSBgc2NvcmUtbGVmdCBzY29yZS1sZWZ0LSR7bmFtZX1gXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2l0eVNjb3JlRWxlLmNsYXNzTmFtZSA9IGBzY29yZS1sZWZ0IHNjb3JlLWxlZnQtJHtuYW1lfSBoaWRkZW5gXG4gICAgfVxuICAgIHNjb3JlRGl2LmFwcGVuZENoaWxkKGNpdHlTY29yZUVsZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvdGFsU2NvcmUyKG5hbWUsIGNpdHlTY29yZSwgY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgY2l0eVNjb3JlRWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG4gICAgY29uc3Qgc2NvcmVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNsYXNzTmFtZSlcblxuICAgIGNpdHlTY29yZUVsZS50ZXh0Q29udGVudCA9IGBDaXR5IFNjb3JlOiAke2NpdHlTY29yZS50b0ZpeGVkKDIpfWBcblxuICAgIGlmIChuYW1lID09PSBcIlNhbiBGcmFuY2lzY29cIikge1xuICAgICAgICBjaXR5U2NvcmVFbGUuY2xhc3NOYW1lID0gYHNjb3JlLXJpZ2h0IHNjb3JlLXJpZ2h0LSR7bmFtZX1gXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2l0eVNjb3JlRWxlLmNsYXNzTmFtZSA9IGBzY29yZS1yaWdodCBzY29yZS1yaWdodC0ke25hbWV9IGhpZGRlbmBcbiAgICB9XG4gICAgc2NvcmVEaXYuYXBwZW5kQ2hpbGQoY2l0eVNjb3JlRWxlKVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZURyb3Bkb3duKGVsZSxjbGFzc05hbWUpIHtcbiAgICBjb25zdCBkcm9wZG93bkJ1dHRvbkVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2xhc3NOYW1lKVxuICAgIGlmIChlbGUuY2xhc3NOYW1lLmluY2x1ZGVzKFwiaW5hY3RpdmVcIikpIHtcbiAgICAgICAgZWxlLmNsYXNzTmFtZSA9IGVsZS5jbGFzc05hbWUuc3BsaXQoXCIgXCIpWzBdXG4gICAgICAgIGVsZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjAgMCAxMHB4IDEwcHhcIlxuICAgICAgICBkcm9wZG93bkJ1dHRvbkVsZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEwcHggMTBweCAwIDBcIlxuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWxlLmNsYXNzTmFtZSA9IGVsZS5jbGFzc05hbWUgKyBcIiBpbmFjdGl2ZVwiXG4gICAgICAgIGVsZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEwcHhcIlxuICAgICAgICBkcm9wZG93bkJ1dHRvbkVsZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEwcHhcIlxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dDaGFydHMoY2l0eU5hbWUsIGNpdHlDaGFydENsYXNzbmFtZSkge1xuICAgIGNvbnN0IGNpdHlOYW1lUmVtb3ZlZFNwYWNlID0gY2l0eU5hbWUuc3BsaXQoXCIgXCIpWzFdXG4gICAgY29uc3QgY2l0eUNoYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2l0eUNoYXJ0Q2xhc3NuYW1lfS0ke2NpdHlOYW1lUmVtb3ZlZFNwYWNlfWApXG5cblxuICAgIGNvbnN0IGFsbENpdHlDaGFydHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtjaXR5Q2hhcnRDbGFzc25hbWV9YClcbiAgICBhbGxDaXR5Q2hhcnRzLmZvckVhY2goY2l0eUNoYXJ0ID0+IHtcbiAgICAgICAgaWYgKCFjaXR5Q2hhcnQuY2xhc3NOYW1lLmJhc2VWYWwuaW5jbHVkZXMoXCJoaWRkZW5cIikpIHtcbiAgICAgICAgICAgIGNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbCA9IGNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbCArIFwiIGhpZGRlblwiXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbC5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICBjaXR5Q2hhcnQuY2xhc3NOYW1lLmJhc2VWYWwgPSBgJHtjaXR5Q2hhcnRDbGFzc25hbWV9ICR7Y2l0eUNoYXJ0Q2xhc3NuYW1lfS0ke2NpdHlOYW1lUmVtb3ZlZFNwYWNlfWBcbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIGNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbCA9IGNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbCArIFwiIGhpZGRlblwiXG5cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93VGFibGVzKGNpdHlOYW1lLCB0YWJsZUNsYXNzbmFtZSkge1xuICAgIGNvbnN0IGNpdHlOYW1lUmVtb3ZlZFNwYWNlID0gY2l0eU5hbWUuc3BsaXQoXCIgXCIpWzFdXG4gICAgY29uc3QgY2l0eVRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGFibGVDbGFzc25hbWV9LSR7Y2l0eU5hbWVSZW1vdmVkU3BhY2V9YClcblxuICAgIGNvbnN0IGFsbENpdHlUYWJsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHt0YWJsZUNsYXNzbmFtZX1gKVxuICAgIGFsbENpdHlUYWJsZXMuZm9yRWFjaChjaXR5VGFibGUgPT4ge1xuICAgICAgICBpZiAoIWNpdHlUYWJsZS5jbGFzc05hbWUuaW5jbHVkZXMoXCJoaWRkZW5cIikpIHtcbiAgICAgICAgICAgIGNpdHlUYWJsZS5jbGFzc05hbWUgPSBjaXR5VGFibGUuY2xhc3NOYW1lICsgXCIgaGlkZGVuXCJcblxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGlmIChjaXR5VGFibGUuY2xhc3NOYW1lLmluY2x1ZGVzKFwiaGlkZGVuXCIpKSB7XG4gICAgICAgIGNpdHlUYWJsZS5jbGFzc05hbWUgPSBgJHt0YWJsZUNsYXNzbmFtZX0gJHt0YWJsZUNsYXNzbmFtZX0tJHtjaXR5TmFtZVJlbW92ZWRTcGFjZX1gXG4gICAgfSBlbHNlIHtcblxuICAgICAgICBjaXR5VGFibGUuY2xhc3NOYW1lID0gY2l0eVRhYmxlLmNsYXNzTmFtZSArIFwiIGhpZGRlblwiXG5cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93VGl0bGUoY2l0eU5hbWUsIGNpdHlUaXRsZUNsYXNzbmFtZSkge1xuICAgIGNvbnN0IGNpdHlOYW1lUmVtb3ZlZFNwYWNlID0gY2l0eU5hbWUuc3BsaXQoXCIgXCIpWzFdXG4gICAgY29uc3QgY2l0eVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2l0eVRpdGxlQ2xhc3NuYW1lfS0ke2NpdHlOYW1lUmVtb3ZlZFNwYWNlfWApXG5cbiAgICBjb25zdCBhbGxDaXR5VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtjaXR5VGl0bGVDbGFzc25hbWV9YClcbiAgICBhbGxDaXR5VGl0bGUuZm9yRWFjaChjaXR5VGl0bGUgPT4ge1xuICAgICAgICBpZiAoIWNpdHlUaXRsZS5jbGFzc05hbWUuaW5jbHVkZXMoXCJoaWRkZW5cIikpIHtcbiAgICAgICAgICAgIGNpdHlUaXRsZS5jbGFzc05hbWUgPSBjaXR5VGl0bGUuY2xhc3NOYW1lICsgXCIgaGlkZGVuXCJcblxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGlmIChjaXR5VGl0bGUuY2xhc3NOYW1lLmluY2x1ZGVzKFwiaGlkZGVuXCIpKSB7XG4gICAgICAgIGNpdHlUaXRsZS5jbGFzc05hbWUgPSBgJHtjaXR5VGl0bGVDbGFzc25hbWV9ICR7Y2l0eVRpdGxlQ2xhc3NuYW1lfS0ke2NpdHlOYW1lUmVtb3ZlZFNwYWNlfWBcbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIGNpdHlUaXRsZS5jbGFzc05hbWUgPSBjaXR5VGl0bGUuY2xhc3NOYW1lICsgXCIgaGlkZGVuXCJcblxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dTdW1tYXJ5KGNpdHlOYW1lLCBjaXR5U3VtbWFyeUNsYXNzbmFtZSkge1xuICAgIGNvbnN0IGNpdHlOYW1lUmVtb3ZlZFNwYWNlID0gY2l0eU5hbWUuc3BsaXQoXCIgXCIpWzFdXG4gICAgY29uc3QgY2l0eVN1bW1hcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjaXR5U3VtbWFyeUNsYXNzbmFtZX0tJHtjaXR5TmFtZVJlbW92ZWRTcGFjZX1gKVxuXG4gICAgY29uc3QgYWxsQ2l0eVN1bW1hcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtjaXR5U3VtbWFyeUNsYXNzbmFtZX1gKVxuICAgIGFsbENpdHlTdW1tYXJ5LmZvckVhY2goY2l0eVN1bW1hcnkgPT4ge1xuICAgICAgICBpZiAoIWNpdHlTdW1tYXJ5LmNsYXNzTmFtZS5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICAgICAgY2l0eVN1bW1hcnkuY2xhc3NOYW1lID0gY2l0eVN1bW1hcnkuY2xhc3NOYW1lICsgXCIgaGlkZGVuXCJcblxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGlmIChjaXR5U3VtbWFyeS5jbGFzc05hbWUuaW5jbHVkZXMoXCJoaWRkZW5cIikpIHtcbiAgICAgICAgY2l0eVN1bW1hcnkuY2xhc3NOYW1lID0gYCR7Y2l0eVN1bW1hcnlDbGFzc25hbWV9ICR7Y2l0eVN1bW1hcnlDbGFzc25hbWV9LSR7Y2l0eU5hbWVSZW1vdmVkU3BhY2V9YFxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgY2l0eVN1bW1hcnkuY2xhc3NOYW1lID0gY2l0eVN1bW1hcnkuY2xhc3NOYW1lICsgXCIgaGlkZGVuXCJcblxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dDaXR5U2NvcmUoY2l0eU5hbWUsIGNpdHlTY29yZUNsYXNzbmFtZSkge1xuICAgIGNvbnN0IGNpdHlOYW1lUmVtb3ZlZFNwYWNlID0gY2l0eU5hbWUuc3BsaXQoXCIgXCIpWzFdXG4gICAgY29uc3QgY2l0eVNjb3JlRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2l0eVNjb3JlQ2xhc3NuYW1lfS0ke2NpdHlOYW1lUmVtb3ZlZFNwYWNlfWApXG5cbiAgICBjb25zdCBhbGxDaXR5U2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtjaXR5U2NvcmVDbGFzc25hbWV9YClcbiAgICBhbGxDaXR5U2NvcmUuZm9yRWFjaChjaXR5U2NvcmUgPT4ge1xuICAgICAgICBpZiAoIWNpdHlTY29yZS5jbGFzc05hbWUuaW5jbHVkZXMoXCJoaWRkZW5cIikpIHtcbiAgICAgICAgICAgIGNpdHlTY29yZS5jbGFzc05hbWUgPSBjaXR5U2NvcmUuY2xhc3NOYW1lICsgXCIgaGlkZGVuXCJcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoY2l0eVNjb3JlRWxlLmNsYXNzTmFtZS5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICBjaXR5U2NvcmVFbGUuY2xhc3NOYW1lID0gYCR7Y2l0eVNjb3JlQ2xhc3NuYW1lfSAke2NpdHlTY29yZUNsYXNzbmFtZX0tJHtjaXR5TmFtZVJlbW92ZWRTcGFjZX1gXG4gICAgfSBlbHNlIHtcblxuICAgICAgICBjaXR5U2NvcmVFbGUuY2xhc3NOYW1lID0gY2l0eVNjb3JlLmNsYXNzTmFtZSArIFwiIGhpZGRlblwiXG5cbiAgICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGxpZ2h0dXBDYXRlZ29yaWVzKGlkKSB7XG4gICAgY29uc3QgY2l0eUNhdGVnb3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIyR7aWR9YClcbiAgICBjb25zdCBhbGxDaXR5Q2F0ZWdvcmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2F0ZWdvcnlcIilcbiAgICBhbGxDaXR5Q2F0ZWdvcmllcy5mb3JFYWNoKGNpdHlDYXQgPT4ge1xuICAgICAgICBpZiAoIWNpdHlDYXQuY2xhc3NOYW1lLmluY2x1ZGVzKFwibm9uaGlnaGxpZ2h0ZWRcIikpIHtcbiAgICAgICAgICAgIGNpdHlDYXQuY2xhc3NOYW1lID0gY2l0eUNhdC5jbGFzc05hbWUgKyBcIiBub25oaWdobGlnaHRlZFwiXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgY2l0eUNhdGVnb3J5LmZvckVhY2goY2l0eUNhdCA9PiB7XG4gICAgICAgIGlmIChjaXR5Q2F0LmNsYXNzTmFtZS5pbmNsdWRlcyhgY2F0ZWdvcnkgJHtpZH0gbm9uaGlnaGxpZ2h0ZWRgKSkge1xuICAgICAgICAgICAgY2l0eUNhdC5jbGFzc05hbWUgPSBgY2F0ZWdvcnkgJHtpZH1gXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaXR5Q2F0LmNsYXNzTmFtZSA9IGNpdHlDYXQuY2xhc3NOYW1lICsgXCIgbm9uaGlnaGxpZ2h0ZWRcIlxuICAgICAgICB9XG4gICAgfSlcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RvcEhpZ2hsaWdodGluZygpIHtcbiAgICBjb25zdCBhbGxDaXR5Q2F0ZWdvcmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2F0ZWdvcnlcIilcbiAgICBhbGxDaXR5Q2F0ZWdvcmllcy5mb3JFYWNoKGNpdHlDYXQgPT4ge1xuICAgICAgICBpZiAoIWNpdHlDYXQuY2xhc3NOYW1lLmluY2x1ZGVzKFwibm9uaGlnaGxpZ2h0ZWRcIikpIHtcbiAgICAgICAgICAgIGNpdHlDYXQuY2xhc3NOYW1lID0gY2l0eUNhdC5jbGFzc05hbWUgKyBcIiBub25oaWdobGlnaHRlZFwiXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUGljKHBpY3MsY2l0eSwgcGljQ2xhc3NuYW1lKSB7XG4gICAgY29uc3QgYmFja2dyb3VuZEVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3BpY0NsYXNzbmFtZX1gKTtcbiAgICBiYWNrZ3JvdW5kRWxlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtwaWNzW2NpdHldfSlgXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdEl0ZW0oZWxlLCB0aXRsZUNsYXNzbmFtZSwgbWVudUxpc3RDbGFzc25hbWUsIGRyb3Bkb3duQ2xhc3NuYW1lLCBjaXR5Q2hhcnRDbGFzc25hbWUsIHRhYmxlQ2xhc3NuYW1lLCBjaXR5VGl0bGVDbGFzc25hbWUsIGNpdHlTdW1tYXJ5Q2xhc3NuYW1lLCBwaWNzLCBwaWNDbGFzc25hbWUsIGNpdHlTY29yZUNsYXNzbmFtZSkge1xuICAgIGNvbnN0IGVsZVRleHQgPSBlbGUudGV4dENvbnRlbnRcbiAgICBjb25zdCBjaXR5TmFtZU5vU3BhY2VzID0gZWxlLnRleHRDb250ZW50LnJlcGxhY2UoL1xccy9nLCBcIlwiKVxuICAgIGNvbnN0IHRpdGxlRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aXRsZUNsYXNzbmFtZSlcbiAgICBjb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobWVudUxpc3RDbGFzc25hbWUpXG4gICAgdGl0bGVFbGUudGV4dENvbnRlbnQgPSBlbGVUZXh0O1xuICAgIHRvZ2dsZURyb3Bkb3duKG1lbnVMaXN0LCBkcm9wZG93bkNsYXNzbmFtZSk7XG5cbiAgICBzaG93Q2hhcnRzKGVsZVRleHQsIGNpdHlDaGFydENsYXNzbmFtZSlcbiAgICBzaG93VGFibGVzKGVsZVRleHQsIHRhYmxlQ2xhc3NuYW1lKVxuICAgIHNob3dUaXRsZShlbGVUZXh0LCBjaXR5VGl0bGVDbGFzc25hbWUpXG4gICAgc2hvd1N1bW1hcnkoZWxlVGV4dCwgY2l0eVN1bW1hcnlDbGFzc25hbWUpXG4gICAgc2hvd0NpdHlTY29yZShlbGVUZXh0LCBjaXR5U2NvcmVDbGFzc25hbWUpXG4gICAgY2hhbmdlUGljKHBpY3MsY2l0eU5hbWVOb1NwYWNlcywgcGljQ2xhc3NuYW1lKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VEcm9wZG93bihjbGFzc05hbWUsIGRyb3Bkb3duTWVudUNsYXNzbmFtZSkge1xuICAgIGNvbnN0IGRyb3Bkb3duTWVudUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjbGFzc05hbWV9YClcbiAgICBjb25zdCBkcm9wZG93bk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtkcm9wZG93bk1lbnVDbGFzc25hbWV9YClcblxuICAgIGlmICghZHJvcGRvd25NZW51TGlzdC5jbGFzc05hbWUuaW5jbHVkZXMoXCJpbmFjdGl2ZVwiKSkge1xuICAgICAgICBkcm9wZG93bk1lbnVMaXN0LmNsYXNzTmFtZSA9IGAke2NsYXNzTmFtZX0gaW5hY3RpdmVgXG4gICAgICAgIGRyb3Bkb3duTWVudS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEwcHhcIjtcbiAgICB9XG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==