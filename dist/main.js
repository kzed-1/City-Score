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


var titleDropDownButton = document.querySelector(".dropdown-menu");
var titleDropDownButtonRight = document.querySelector(".dropdown-menu-right");
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
  city.addEventListener('click', function (event) {
    event.stopPropagation();
    return _main_util_js__WEBPACK_IMPORTED_MODULE_6__["selectItem"](city, ".title", ".menu-list", ".dropdown-menu", "citychart", "table", "citytitle", "citySummary", cityPics, "body-left", "score-left");
  });
});
cityListRight.forEach(function (city) {
  city.addEventListener('click', function (event) {
    event.stopPropagation();
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
    ele.className = "".concat(ele.className, " inactive");
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
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3N1bW1hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vdGl0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vdG90YWxfc2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/ZGMyYSJdLCJuYW1lcyI6WyJjaXR5RGF0YSIsIm5hbWUiLCJzdW1tYXJ5IiwiY2l0eVNjb3JlIiwiY2l0eVBpY3MiLCJjaXR5U2VsZWN0aW9uIiwiY2l0aWVzIiwicmVuZGVyIiwiZDMiLCJqc29uIiwiZXJyb3IiLCJkYXRhIiwidGVsZXBvcnRfY2l0eV9zY29yZSIsImNhdGVnb3JpZXMiLCJjcmVhdGVCYXJHcmFwaCIsImNyZWF0ZVRhYmxlIiwiY3JlYXRlVGl0bGUiLCJjcmVhdGVUaXRsZTIiLCJjcmVhdGVTdW1tYXJ5IiwiY3JlYXRlU3VtbWFyeTIiLCJjcmVhdGVUb3RhbFNjb3JlIiwiY3JlYXRlVG90YWxTY29yZTIiLCJyZW5kZXJhbGwiLCJmb3JFYWNoIiwiY2l0eSIsInRpdGxlRHJvcERvd25CdXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0aXRsZURyb3BEb3duQnV0dG9uUmlnaHQiLCJtZW51TGlzdCIsIm1lbnVMaXN0UmlnaHQiLCJjaXR5TGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjaXR5TGlzdFJpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiVXRpbCIsIndpbmRvdyIsImVsZW1lbnQiLCJ3aWR0aCIsImhlaWdodCIsImFycmF5TGVuZ3RoIiwibGVuZ3RoIiwibWF4VmFsdWUiLCJtYXgiLCJkIiwic2NvcmVfb3V0X29mXzEwIiwieF9heGlzTGVuZ3RoIiwieV9heGlzTGVuZ3RoIiwiY2hhcnRDbGFzc05hbWUiLCJ4U2NhbGUiLCJzY2FsZUxpbmVhciIsImRvbWFpbiIsInJhbmdlIiwic3ZnIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsInNlbGVjdEFsbCIsImVudGVyIiwiaSIsImNvbG9yIiwib24iLCJuZXdTdHIiLCJyZXBsYWNlIiwibmV3U3RyMiIsInRvb2x0aXAiLCJzdHlsZSIsInRleHQiLCJwYWdlWSIsInBhZ2VYIiwidG9GaXhlZCIsImNpdHlTdW1tYXJ5RWxlIiwiY3JlYXRlRWxlbWVudCIsInNlY3Rpb25FbGUiLCJ0ZXh0Q29udGVudCIsImNsYXNzTmFtZSIsImluc2VydEFkamFjZW50RWxlbWVudCIsImNvbHVtbnMiLCJjb2x1bW5OYW1lcyIsInRhYmxlQ2xhc3NOYW1lIiwidGFibGUiLCJoZWFkZXIiLCJ0YWJsZWJvZHkiLCJyb3dzIiwiY2VsbHMiLCJyb3ciLCJtYXAiLCJjb2x1bW4iLCJ2YWx1ZSIsImNpdHlOYW1lIiwic3BhY2VyTGVmdCIsImluc2VydEJlZm9yZSIsInNwYWNlclJpZ2h0IiwiY2l0eVNjb3JlRWxlIiwic2NvcmVEaXYiLCJhcHBlbmRDaGlsZCIsInRvZ2dsZURyb3Bkb3duIiwiZWxlIiwiZHJvcGRvd25CdXR0b25FbGUiLCJpbmNsdWRlcyIsInNwbGl0IiwiYm9yZGVyUmFkaXVzIiwic2hvd0NoYXJ0cyIsImNpdHlDaGFydENsYXNzbmFtZSIsImNpdHlOYW1lUmVtb3ZlZFNwYWNlIiwiY2l0eUNoYXJ0IiwiYWxsQ2l0eUNoYXJ0cyIsImJhc2VWYWwiLCJzaG93VGFibGVzIiwidGFibGVDbGFzc25hbWUiLCJjaXR5VGFibGUiLCJhbGxDaXR5VGFibGVzIiwic2hvd1RpdGxlIiwiY2l0eVRpdGxlQ2xhc3NuYW1lIiwiY2l0eVRpdGxlIiwiYWxsQ2l0eVRpdGxlIiwic2hvd1N1bW1hcnkiLCJjaXR5U3VtbWFyeUNsYXNzbmFtZSIsImNpdHlTdW1tYXJ5IiwiYWxsQ2l0eVN1bW1hcnkiLCJzaG93Q2l0eVNjb3JlIiwiY2l0eVNjb3JlQ2xhc3NuYW1lIiwiYWxsQ2l0eVNjb3JlIiwibGlnaHR1cENhdGVnb3JpZXMiLCJpZCIsImNpdHlDYXRlZ29yeSIsImFsbENpdHlDYXRlZ29yaWVzIiwiY2l0eUNhdCIsInN0b3BIaWdobGlnaHRpbmciLCJjaGFuZ2VQaWMiLCJwaWNzIiwicGljQ2xhc3NuYW1lIiwiYmFja2dyb3VuZEVsZSIsImJhY2tncm91bmRJbWFnZSIsInNlbGVjdEl0ZW0iLCJ0aXRsZUNsYXNzbmFtZSIsIm1lbnVMaXN0Q2xhc3NuYW1lIiwiZHJvcGRvd25DbGFzc25hbWUiLCJlbGVUZXh0IiwiY2l0eU5hbWVOb1NwYWNlcyIsInRpdGxlRWxlIiwiY2xvc2VEcm9wZG93biIsImRyb3Bkb3duTWVudUNsYXNzbmFtZSIsImRyb3Bkb3duTWVudUxpc3QiLCJkcm9wZG93bk1lbnUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFB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SCxRQUFRLENBQUNDLGFBQVQsQ0FBdUI4RyxjQUF2QixDQUFqQjtBQUNBLE1BQU01RyxRQUFRLEdBQUdILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QitHLGlCQUF2QixDQUFqQjtBQUNBSSxVQUFRLENBQUNsRSxXQUFULEdBQXVCZ0UsT0FBdkI7QUFDQTFDLGdCQUFjLENBQUNyRSxRQUFELEVBQVc4RyxpQkFBWCxDQUFkO0FBRUFuQyxZQUFVLENBQUNvQyxPQUFELEVBQVVuQyxrQkFBVixDQUFWO0FBQ0FLLFlBQVUsQ0FBQzhCLE9BQUQsRUFBVTdCLGNBQVYsQ0FBVjtBQUNBRyxXQUFTLENBQUMwQixPQUFELEVBQVV6QixrQkFBVixDQUFUO0FBQ0FHLGFBQVcsQ0FBQ3NCLE9BQUQsRUFBVXJCLG9CQUFWLENBQVg7QUFDQUcsZUFBYSxDQUFDa0IsT0FBRCxFQUFVakIsa0JBQVYsQ0FBYjtBQUNBUSxXQUFTLENBQUNDLElBQUQsRUFBTVMsZ0JBQU4sRUFBd0JSLFlBQXhCLENBQVQ7QUFDSDtBQUVNLFNBQVNVLGFBQVQsQ0FBdUJsRSxTQUF2QixFQUFrQ21FLHFCQUFsQyxFQUF5RDtBQUM1RCxNQUFNQyxnQkFBZ0IsR0FBR3ZILFFBQVEsQ0FBQ0MsYUFBVCxZQUEyQmtELFNBQTNCLEVBQXpCO0FBQ0EsTUFBTXFFLFlBQVksR0FBR3hILFFBQVEsQ0FBQ0MsYUFBVCxZQUEyQnFILHFCQUEzQixFQUFyQjs7QUFFQSxNQUFJLENBQUNDLGdCQUFnQixDQUFDcEUsU0FBakIsQ0FBMkJ3QixRQUEzQixDQUFvQyxVQUFwQyxDQUFMLEVBQXNEO0FBQ2xENEMsb0JBQWdCLENBQUNwRSxTQUFqQixhQUFnQ0EsU0FBaEM7QUFDQXFFLGdCQUFZLENBQUM5RSxLQUFiLENBQW1CbUMsWUFBbkIsR0FBa0MsTUFBbEM7QUFDSDtBQUNKLEM7Ozs7Ozs7Ozs7O0FDaExELHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgY3JlYXRlQmFyR3JhcGggZnJvbSAnLi9tYWluL2NoYXJ0LmpzJztcbmltcG9ydCBjcmVhdGVUYWJsZSBmcm9tICcuL21haW4vdGFibGUuanMnO1xuaW1wb3J0IHtjcmVhdGVUaXRsZSwgY3JlYXRlVGl0bGUyfSBmcm9tICcuL21haW4vdGl0bGUuanMnO1xuaW1wb3J0IHtjcmVhdGVTdW1tYXJ5LCBjcmVhdGVTdW1tYXJ5Mn0gZnJvbSAnLi9tYWluL3N1bW1hcnknO1xuaW1wb3J0IHtjcmVhdGVUb3RhbFNjb3JlLCBjcmVhdGVUb3RhbFNjb3JlMn0gZnJvbSAnLi9tYWluL3RvdGFsX3Njb3JlJztcbmltcG9ydCAqIGFzIFV0aWwgZnJvbSAnLi9tYWluL3V0aWwuanMnO1xuXG5cblxubGV0IGNpdHlEYXRhID0gW11cbmxldCBuYW1lLCBzdW1tYXJ5LCBjaXR5U2NvcmU7XG5cbmNvbnN0IGNpdHlQaWNzID0ge1xuICAgIFwiQm9zdG9uXCI6IFwiLi9zcmMvaW1hZ2VzL2Jvc3Rvbi5qcGdcIixcbiAgICBcIkNoaWNhZ29cIjogXCIuL3NyYy9pbWFnZXMvY2hpY2Fnby5qcGdcIixcbiAgICBcIkRhbGxhc1wiOiBcIi4vc3JjL2ltYWdlcy9kYWxsYXMuanBnXCIsXG4gICAgXCJMb3NBbmdlbGVzXCI6IFwiLi9zcmMvaW1hZ2VzL2xhLmpwZ1wiLFxuICAgIFwiUGhvZW5peFwiOiBcIi4vc3JjL2ltYWdlcy9waG9lbml4LmpwZ1wiLFxuICAgIFwiUmFsZWlnaFwiOiBcIi4vc3JjL2ltYWdlcy9yYWxlaWdoLmpwZ1wiLFxuICAgIFwiU2VhdHRsZVwiOiBcIi4vc3JjL2ltYWdlcy9zZWF0dGxlLmpwZ1wiLFxuICAgIFwiU2FuRnJhbmNpc2NvXCI6IFwiLi9zcmMvaW1hZ2VzL3NmMi5qcGdcIixcbiAgICBcIlRvcm9udG9cIjogXCIuL3NyYy9pbWFnZXMvdG9yb250by5qcGdcIixcbiAgICBcIk5ld1lvcmtcIjogXCIuL3NyYy9pbWFnZXMvbmV3eW9yazIuanBnXCJcbn1cblxuXG4vLyBjb25zdCBjaXR5UGljcyA9IHtcbi8vICAgICBcIkJvc3RvblwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9remVkLTEvQ2l0eS1TY29yZS9ibG9iL21hc3Rlci9zcmMvaW1hZ2VzL2Jvc3Rvbi5qcGc/cmF3PXRydWVcIixcbi8vICAgICBcIkNoaWNhZ29cIjogXCJodHRwczovL2dpdGh1Yi5jb20va3plZC0xL0NpdHktU2NvcmUvYmxvYi9tYXN0ZXIvc3JjL2ltYWdlcy9jaGljYWdvLmpwZz9yYXc9dHJ1ZVwiLFxuLy8gICAgIFwiRGFsbGFzXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2t6ZWQtMS9DaXR5LVNjb3JlL2Jsb2IvbWFzdGVyL3NyYy9pbWFnZXMvZGFsbGFzLmpwZz9yYXc9dHJ1ZVwiLFxuLy8gICAgIFwiTG9zQW5nZWxlc1wiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9remVkLTEvQ2l0eS1TY29yZS9ibG9iL21hc3Rlci9zcmMvaW1hZ2VzL2xhLmpwZz9yYXc9dHJ1ZVwiLFxuLy8gICAgIFwiUGhvZW5peFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9remVkLTEvQ2l0eS1TY29yZS9ibG9iL21hc3Rlci9zcmMvaW1hZ2VzL3Bob2VuaXguanBnP3Jhdz10cnVlXCIsXG4vLyAgICAgXCJSYWxlaWdoXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2t6ZWQtMS9DaXR5LVNjb3JlL2Jsb2IvbWFzdGVyL3NyYy9pbWFnZXMvcmFsZWlnaC5qcGc/cmF3PXRydWVcIixcbi8vICAgICBcIlNlYXR0bGVcIjogXCJodHRwczovL2dpdGh1Yi5jb20va3plZC0xL0NpdHktU2NvcmUvYmxvYi9tYXN0ZXIvc3JjL2ltYWdlcy9zZWF0dGxlLmpwZz9yYXc9dHJ1ZVwiLFxuLy8gICAgIFwiU2FuRnJhbmNpc2NvXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2t6ZWQtMS9DaXR5LVNjb3JlL2Jsb2IvbWFzdGVyL3NyYy9pbWFnZXMvc2YyLmpwZz9yYXc9dHJ1ZVwiLFxuLy8gICAgIFwiVG9yb250b1wiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9remVkLTEvQ2l0eS1TY29yZS9ibG9iL21hc3Rlci9zcmMvaW1hZ2VzL3Rvcm9udG8uanBnP3Jhdz10cnVlXCIsXG4vLyAgICAgXCJOZXdZb3JrXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2t6ZWQtMS9DaXR5LVNjb3JlL2Jsb2IvbWFzdGVyL3NyYy9pbWFnZXMvbmV3eW9yazIuanBnP3Jhdz10cnVlXCJcbi8vIH1cblxubGV0IGNpdHlTZWxlY3Rpb24gPSBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9remVkLTEvQ2l0eS1TY29yZS9tYXN0ZXIvc3JjL2RhdGEvbmV3eW9yay5qc29uXCJcblxuLy8gY29uc3QgY2l0aWVzID0gW1xuLy8gICAgIFwiLi9zcmMvZGF0YS9uZXd5b3JrLmpzb25cIiwgXCIuL3NyYy9kYXRhL3NhbmZyYW4uanNvblwiLCBcIi4vc3JjL2RhdGEvc2VhdHRsZS5qc29uXCIsIFxuLy8gICAgIFwiLi9zcmMvZGF0YS90b3JvbnRvLmpzb25cIiwgXCIuL3NyYy9kYXRhL2Jvc3Rvbi5qc29uXCIsIFwiLi9zcmMvZGF0YS9jaGljYWdvLmpzb25cIiwgXG4vLyAgICAgXCIuL3NyYy9kYXRhL2xvc2FuZ2VsZXMuanNvblwiLCBcIi4vc3JjL2RhdGEvZGFsbGFzLmpzb25cIiwgXCIuL3NyYy9kYXRhL3Bob2VuaXguanNvblwiLCBcbi8vICAgICBcIi4vc3JjL2RhdGEvcmFsZWlnaC5qc29uXCJcbi8vICAgICBdIFxuY29uc3QgY2l0aWVzID0gW1xuICAgIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2t6ZWQtMS9DaXR5LVNjb3JlL21hc3Rlci9zcmMvZGF0YS9uZXd5b3JrLmpzb25cIiwgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20va3plZC0xL0NpdHktU2NvcmUvbWFzdGVyL3NyYy9kYXRhL3NhbmZyYW4uanNvblwiLCBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9remVkLTEvQ2l0eS1TY29yZS9tYXN0ZXIvc3JjL2RhdGEvc2VhdHRsZS5qc29uXCIsIFxuICAgIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2t6ZWQtMS9DaXR5LVNjb3JlL21hc3Rlci9zcmMvZGF0YS90b3JvbnRvLmpzb25cIiwgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20va3plZC0xL0NpdHktU2NvcmUvbWFzdGVyL3NyYy9kYXRhL2Jvc3Rvbi5qc29uXCIsIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2t6ZWQtMS9DaXR5LVNjb3JlL21hc3Rlci9zcmMvZGF0YS9jaGljYWdvLmpzb25cIiwgXG4gICAgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20va3plZC0xL0NpdHktU2NvcmUvbWFzdGVyL3NyYy9kYXRhL2xvc2FuZ2VsZXMuanNvblwiLCBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9remVkLTEvQ2l0eS1TY29yZS9tYXN0ZXIvc3JjL2RhdGEvZGFsbGFzLmpzb25cIiwgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20va3plZC0xL0NpdHktU2NvcmUvbWFzdGVyL3NyYy9kYXRhL3Bob2VuaXguanNvblwiLCBcbiAgICBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9remVkLTEvQ2l0eS1TY29yZS9tYXN0ZXIvc3JjL2RhdGEvcmFsZWlnaC5qc29uXCJcbiAgICBdIFxuXG5cbmZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBkMy5qc29uKGNpdHlTZWxlY3Rpb24sIGZ1bmN0aW9uIChlcnJvciwgZGF0YSkge1xuICAgICAgICBuYW1lID0gZGF0YS5uYW1lXG4gICAgICAgIHN1bW1hcnkgPSBkYXRhLnN1bW1hcnlcbiAgICAgICAgY2l0eVNjb3JlID0gZGF0YS50ZWxlcG9ydF9jaXR5X3Njb3JlXG4gICAgICAgIGNpdHlEYXRhID0gZGF0YS5jYXRlZ29yaWVzXG4gICAgICAgIGNyZWF0ZUJhckdyYXBoKGNpdHlEYXRhLCBuYW1lLCBcIi5jaGFydFwiKTtcbiAgICAgICAgY3JlYXRlVGFibGUoY2l0eURhdGEsIG5hbWUsIFwiLnByb2ZpbGVcIik7XG4gICAgICAgIGNyZWF0ZUJhckdyYXBoKGNpdHlEYXRhLCBuYW1lLCBcIi5jaGFydC0yXCIpO1xuICAgICAgICBjcmVhdGVUYWJsZShjaXR5RGF0YSwgbmFtZSwgXCIucHJvZmlsZS0yXCIpO1xuICAgICAgICBjcmVhdGVUaXRsZShuYW1lKTtcbiAgICAgICAgY3JlYXRlVGl0bGUyKG5hbWUpO1xuICAgICAgICBjcmVhdGVTdW1tYXJ5KG5hbWUsIHN1bW1hcnkpO1xuICAgICAgICBjcmVhdGVTdW1tYXJ5MihuYW1lLCBzdW1tYXJ5KTtcbiAgICAgICAgY3JlYXRlVG90YWxTY29yZShuYW1lLGNpdHlTY29yZSxcIi5jaXR5LXNjb3JlLWxlZnRcIik7XG4gICAgICAgIGNyZWF0ZVRvdGFsU2NvcmUyKG5hbWUsY2l0eVNjb3JlLFwiLmNpdHktc2NvcmUtcmlnaHRcIik7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gcmVuZGVyYWxsKCkge1xuICAgIGNpdGllcy5mb3JFYWNoKGNpdHkgPT4ge1xuICAgICAgICBjaXR5U2VsZWN0aW9uID0gY2l0eSBcbiAgICAgICAgcmVuZGVyKClcbiAgICB9KTtcbn1cblxuXG4vLyBjb25zdCB0aXRsZURyb3BEb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZS1kcm9wZG93bi13cmFwcGVyXCIpXG5jb25zdCB0aXRsZURyb3BEb3duQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bi1tZW51XCIpXG5jb25zdCB0aXRsZURyb3BEb3duQnV0dG9uUmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLW1lbnUtcmlnaHRcIilcbmNvbnN0IG1lbnVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWxpc3RcIilcbmNvbnN0IG1lbnVMaXN0UmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtbGlzdC1yaWdodFwiKVxuY29uc3QgY2l0eUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNpdHlcIilcbmNvbnN0IGNpdHlMaXN0UmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNpdHktMlwiKVxuXG50aXRsZURyb3BEb3duQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgcmV0dXJuIFV0aWwudG9nZ2xlRHJvcGRvd24obWVudUxpc3QsIFwiLmRyb3Bkb3duLW1lbnVcIil9KVxudGl0bGVEcm9wRG93bkJ1dHRvblJpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgcmV0dXJuIFV0aWwudG9nZ2xlRHJvcGRvd24obWVudUxpc3RSaWdodCwgXCIuZHJvcGRvd24tbWVudS1yaWdodFwiKX0pXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBVdGlsLmNsb3NlRHJvcGRvd24oXCJtZW51LWxpc3RcIiwgXCJkcm9wZG93bi1tZW51XCIpKVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gVXRpbC5jbG9zZURyb3Bkb3duKFwibWVudS1saXN0LXJpZ2h0XCIsIFwiZHJvcGRvd24tbWVudS1yaWdodFwiKSlcblxuY2l0eUxpc3QuZm9yRWFjaChjaXR5ID0+IHtcbiAgICBjaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIHJldHVybiBVdGlsLnNlbGVjdEl0ZW0oY2l0eSwgXCIudGl0bGVcIiwgXCIubWVudS1saXN0XCIsIFwiLmRyb3Bkb3duLW1lbnVcIiwgXCJjaXR5Y2hhcnRcIiwgXCJ0YWJsZVwiLCBcImNpdHl0aXRsZVwiLCBcImNpdHlTdW1tYXJ5XCIsIGNpdHlQaWNzLCBcImJvZHktbGVmdFwiLCBcInNjb3JlLWxlZnRcIilcbiAgICB9KVxufSlcbmNpdHlMaXN0UmlnaHQuZm9yRWFjaChjaXR5ID0+IHtcbiAgICBjaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICByZXR1cm4gVXRpbC5zZWxlY3RJdGVtKGNpdHksIFwiLnRpdGxlLXJpZ2h0XCIsIFwiLm1lbnUtbGlzdC1yaWdodFwiLCBcIi5kcm9wZG93bi1tZW51LXJpZ2h0XCIsIFwiY2l0eWNoYXJ0LXJpZ2h0XCIsIFwidGFibGUtcmlnaHRcIiwgXCJjaXR5dGl0bGUtcmlnaHRcIiwgXCJjaXR5U3VtbWFyeS1yaWdodFwiLCBjaXR5UGljcywgXCJib2R5LXJpZ2h0XCIsIFwic2NvcmUtcmlnaHRcIilcbiAgICB9KVxufSlcblxucmVuZGVyYWxsKClcblxuXG5cbi8vIGNvbnN0IHNjb3JlcyA9IFsyLjI5MSwgMy43OSwgOC4zNjcsIDcuNTUxMDAwMDAwMDAwMDAxLCAyLjg4NDUsIDQuNTIzNzUwMDAwMDAwMDAxLCA4LjY3MSxcbi8vICAgICA1LjYzNjUsIDguNzI0MzMzMzMzMzMzMzMyLCA1LjcxNDUsIDcuNTYwMjUwMDAwMDAwMDAxLCA2LjUxNDUsIDQuNzcyLFxuLy8gICAgIDQuOTQwNDk5OTk5OTk5OTk5LCA4LjExNTUsIDguMDg5NSwgNy4yMDk0OTk5OTk5OTk5OTg1XG5cbi8vIF0iLCJpbXBvcnQgKiBhcyBVdGlsIGZyb20gXCIuL3V0aWxcIjtcblxuXG5mdW5jdGlvbiBjcmVhdGVCYXJHcmFwaChjaXR5RGF0YSwgbmFtZSwgZWxlbWVudCkge1xuICAgIC8vIGNvbnN0IHdpZHRoID0gNDAwO1xuICAgIC8vIGNvbnN0IGhlaWdodCA9IDUwMDtcbiAgICBjb25zdCB3aWR0aCA9IDYwMDtcbiAgICBjb25zdCBoZWlnaHQgPSA3MDA7XG5cbiAgICBjb25zdCBhcnJheUxlbmd0aCA9IGNpdHlEYXRhLmxlbmd0aDsgXG4gICAgY29uc3QgbWF4VmFsdWUgPSBkMy5tYXgoY2l0eURhdGEsIGZ1bmN0aW9uIChkKSB7IHJldHVybiArZC5zY29yZV9vdXRfb2ZfMTA7IH0pOyBcbiAgICAvLyBjb25zdCB4X2F4aXNMZW5ndGggPSA0MDA7IFxuICAgIC8vIGNvbnN0IHlfYXhpc0xlbmd0aCA9IDQ3MTsgXG4gICAgY29uc3QgeF9heGlzTGVuZ3RoID0gNjAwOyBcbiAgICBjb25zdCB5X2F4aXNMZW5ndGggPSA2NzE7IFxuXG4gICAgY29uc3QgY2hhcnRDbGFzc05hbWUgPSBlbGVtZW50ID09PSBcIi5jaGFydFwiID8gXCJjaXR5Y2hhcnRcIiA6IFwiY2l0eWNoYXJ0LXJpZ2h0XCJcblxuXG4gICAgY29uc3QgeFNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAuZG9tYWluKFswLCBtYXhWYWx1ZV0pXG4gICAgICAgIC5yYW5nZShbMCwgeF9heGlzTGVuZ3RoXSk7XG5cbiAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoZWxlbWVudClcbiAgICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAuYXR0cihcInZpZXdCb3hcIiwgYDAgMCAke3dpZHRofSAke2hlaWdodH1gKVxuICAgICAgICAvLyAuYXR0cihcIndpZHRoXCIsIHdpZHRoKVxuICAgICAgICAvLyAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQpO1xuXG4gICAgaWYgKG5hbWUgPT09IFwiTmV3IFlvcmtcIiAmJiBlbGVtZW50ID09PSBcIi5jaGFydFwiKSB7XG4gICAgICAgIHN2Zy5hdHRyKFwiY2xhc3NcIiwgYCR7Y2hhcnRDbGFzc05hbWV9ICR7Y2hhcnRDbGFzc05hbWV9LSR7bmFtZX1gKVxuICAgIH0gZWxzZSBpZiAoZWxlbWVudCA9PT0gXCIuY2hhcnRcIiAmJiAobmFtZSAhPT0gXCJOZXcgWW9ya1wiKSkge1xuICAgICAgICBzdmcuYXR0cihcImNsYXNzXCIsIGAke2NoYXJ0Q2xhc3NOYW1lfSAke2NoYXJ0Q2xhc3NOYW1lfS0ke25hbWV9IGhpZGRlbmApXG4gICAgfSBcblxuICAgIGlmIChuYW1lID09PSBcIlNhbiBGcmFuY2lzY29cIiAmJiBlbGVtZW50ID09PSBcIi5jaGFydC0yXCIpIHtcbiAgICAgICAgc3ZnLmF0dHIoXCJjbGFzc1wiLCBgJHtjaGFydENsYXNzTmFtZX0gJHtjaGFydENsYXNzTmFtZX0tJHtuYW1lfWApXG4gICAgfSBlbHNlIGlmIChlbGVtZW50ID09PSBcIi5jaGFydC0yXCIgJiYgKG5hbWUgIT09IFwiU2FuIEZyYW5jaXNjb1wiKSl7IFxuICAgICAgICBzdmcuYXR0cihcImNsYXNzXCIsIGAke2NoYXJ0Q2xhc3NOYW1lfSAke2NoYXJ0Q2xhc3NOYW1lfS0ke25hbWV9IGhpZGRlbmApXG4gICAgfVxuXG5cbiAgICBzdmcuc2VsZWN0QWxsKFwicmVjdFwiKVxuICAgICAgICAuZGF0YShjaXR5RGF0YSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZChcInJlY3RcIilcbiAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gaSAqICh5X2F4aXNMZW5ndGggLyBhcnJheUxlbmd0aCkgKyAzMDtcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoXCJ4XCIsIDApXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsICh5X2F4aXNMZW5ndGggLyBhcnJheUxlbmd0aCkgLSAxKVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4geFNjYWxlKGQuc2NvcmVfb3V0X29mXzEwKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoXCJmaWxsXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gZC5jb2xvclxuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gYGJhciAke2QubmFtZX1gO1xuICAgICAgICB9KVxuICAgICAgICAub24oXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0ciA9IGQubmFtZS5yZXBsYWNlKC9cXHMvZywgXCJcIilcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0cjIgPSBuZXdTdHIucmVwbGFjZSgvWyZdL2csIFwiXCIpXG4gICAgICAgICAgICBVdGlsLmxpZ2h0dXBDYXRlZ29yaWVzKG5ld1N0cjIpXG4gICAgICAgICAgICByZXR1cm4gdG9vbHRpcC5zdHlsZShcInZpc2liaWxpdHlcIiwgXCJ2aXNpYmxlXCIpLnRleHQoZC5uYW1lICsgXCI6IFwiICsgZC5zY29yZV9vdXRfb2ZfMTApO1xuICAgICAgICB9KVxuICAgICAgICAub24oXCJtb3VzZW1vdmVcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiB0b29sdGlwLnN0eWxlKFwidG9wXCIsIChkMy5ldmVudC5wYWdlWSAtIDEwKSArIFwicHhcIilcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJsZWZ0XCIsIChkMy5ldmVudC5wYWdlWCArIDEwKSArIFwicHhcIikudGV4dChkLm5hbWUgKyBcIjogXCIgKyBkLnNjb3JlX291dF9vZl8xMC50b0ZpeGVkKDIpKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwibW91c2VvdXRcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIFV0aWwuc3RvcEhpZ2hsaWdodGluZygpXG4gICAgICAgICAgICByZXR1cm4gdG9vbHRpcC5zdHlsZShcInZpc2liaWxpdHlcIiwgXCJoaWRkZW5cIilcbiAgICAgICAgfSlcblxuICAgIGNvbnN0IHRvb2x0aXAgPSBkMy5zZWxlY3QoXCIuY2hhcnRcIilcbiAgICAgICAgLmFwcGVuZChcImRpdlwiKVxuICAgICAgICAuc3R5bGUoXCJwb3NpdGlvblwiLCBcImFic29sdXRlXCIpXG4gICAgICAgIC5zdHlsZShcImZvbnQtZmFtaWx5XCIsIFwicm9ib3RvXCIpXG4gICAgICAgIC5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjE0cHhcIilcbiAgICAgICAgLnN0eWxlKFwiei1pbmRleFwiLCBcIjNcIilcbiAgICAgICAgLnN0eWxlKFwidmlzaWJpbGl0eVwiLCBcImhpZGRlblwiKVxuICAgICAgICAuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwid2hpdGVcIilcbiAgICAgICAgLnN0eWxlKFwid2lkdGhcIiwgXCJhdXRvXCIpXG4gICAgICAgIC5zdHlsZShcIm1hcmdpblwiLCBcIjAgYXV0b1wiKVxuICAgICAgICAuc3R5bGUoXCJib3JkZXItcmFkaXVzXCIsIFwiMTBweFwiKVxuICAgICAgICAuc3R5bGUoXCJwYWRkaW5nXCIsIFwiMTBweFwiKVxuICAgICAgICAuc3R5bGUoXCJib3JkZXJcIiwgXCIycHggc29saWQgYmxhY2tcIilcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUJhckdyYXBoOyIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdW1tYXJ5KG5hbWUsIHN1bW1hcnkpIHtcbiAgICBjb25zdCBjaXR5U3VtbWFyeUVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgY29uc3Qgc2VjdGlvbkVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGUtZHJvcGRvd24td3JhcHBlclwiKVxuXG4gICAgY2l0eVN1bW1hcnlFbGUudGV4dENvbnRlbnQgPSBzdW1tYXJ5LnJlcGxhY2UoL1s8XS57MSwyfVs+XS9nLCBcIlwiKVxuXG4gICAgaWYgKG5hbWUgPT09IFwiTmV3IFlvcmtcIikge1xuICAgICAgICBjaXR5U3VtbWFyeUVsZS5jbGFzc05hbWUgPSBgY2l0eVN1bW1hcnkgY2l0eVN1bW1hcnktJHtuYW1lfWBcbiAgICB9IGVsc2Uge1xuICAgICAgICBjaXR5U3VtbWFyeUVsZS5jbGFzc05hbWUgPSBgY2l0eVN1bW1hcnkgY2l0eVN1bW1hcnktJHtuYW1lfSBoaWRkZW5gXG4gICAgfVxuXG4gICAgc2VjdGlvbkVsZS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmVuZFwiLCBjaXR5U3VtbWFyeUVsZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN1bW1hcnkyKG5hbWUsIHN1bW1hcnkpIHtcbiAgICBjb25zdCBjaXR5U3VtbWFyeUVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgY29uc3Qgc2VjdGlvbkVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGUtZHJvcGRvd24td3JhcHBlci1yaWdodFwiKVxuXG4gICAgY2l0eVN1bW1hcnlFbGUudGV4dENvbnRlbnQgPSBzdW1tYXJ5LnJlcGxhY2UoL1s8XS57MSwyfVs+XS9nLCBcIlwiKVxuXG4gICAgaWYgKG5hbWUgPT09IFwiU2FuIEZyYW5jaXNjb1wiKSB7XG4gICAgICAgIGNpdHlTdW1tYXJ5RWxlLmNsYXNzTmFtZSA9IGBjaXR5U3VtbWFyeS1yaWdodCBjaXR5U3VtbWFyeS1yaWdodC0ke25hbWV9YFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNpdHlTdW1tYXJ5RWxlLmNsYXNzTmFtZSA9IGBjaXR5U3VtbWFyeS1yaWdodCBjaXR5U3VtbWFyeS1yaWdodC0ke25hbWV9IGhpZGRlbmBcbiAgICB9XG5cbiAgICBzZWN0aW9uRWxlLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyZW5kXCIsIGNpdHlTdW1tYXJ5RWxlKVxufVxuXG4iLCJpbXBvcnQgKiBhcyBVdGlsIGZyb20gJy4vdXRpbC5qcydcblxuZnVuY3Rpb24gY3JlYXRlVGFibGUoY2l0eURhdGEsIG5hbWUsIGVsZW1lbnQpIHtcblxuICAgIGNvbnN0IGNvbHVtbnMgPSBbXCJuYW1lXCIsIFwic2NvcmVfb3V0X29mXzEwXCJdXG4gICAgY29uc3QgY29sdW1uTmFtZXMgPSBbXCJDYXRlZ29yaWVzXCIsIFwiU2NvcmVcIl1cblxuICAgIGNvbnN0IHRhYmxlQ2xhc3NOYW1lID0gZWxlbWVudCA9PT0gXCIucHJvZmlsZVwiID8gXCJ0YWJsZVwiIDogXCJ0YWJsZS1yaWdodFwiXG5cblxuICAgIGxldCB0YWJsZSA9IGQzLnNlbGVjdChlbGVtZW50KVxuICAgICAgICAuYXBwZW5kKCd0YWJsZScpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgYCR7dGFibGVDbGFzc05hbWV9IHRhYmxlLSR7bmFtZX0gaGlkZGVuYClcbiAgICAgICAgLnN0eWxlKFwiYm9yZGVyLXJhZGl1c1wiLCBcIjEwcHhcIilcbiAgICAgICAgLnN0eWxlKFwiYm9yZGVyXCIsIFwiMnB4IHNvbGlkIGJsYWNrXCIpO1xuICAgIGxldCBoZWFkZXIgPSB0YWJsZVxuICAgICAgICAuYXBwZW5kKFwiaGVhZGVyXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0YWJsZS1oZWFkZXJcIik7XG4gICAgbGV0IHRhYmxlYm9keSA9IHRhYmxlLmFwcGVuZChcInRhYmxlYm9keVwiKTtcblxuICAgIC8vIGlmIChuYW1lID09PSBcIk5ldyBZb3JrXCIpIHtcbiAgICAvLyAgICAgdGFibGUuYXR0cihcImNsYXNzXCIsIGAke3RhYmxlQ2xhc3NOYW1lfSB0YWJsZS0ke25hbWV9YClcblxuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICAgIHRhYmxlLmF0dHIoXCJjbGFzc1wiLCBgJHt0YWJsZUNsYXNzTmFtZX0gdGFibGUtJHtuYW1lfSBoaWRkZW5gKVxuICAgIC8vIH1cblxuICAgIGlmIChuYW1lID09PSBcIk5ldyBZb3JrXCIgJiYgZWxlbWVudCA9PT0gXCIucHJvZmlsZVwiKSB7XG4gICAgICAgIHRhYmxlLmF0dHIoXCJjbGFzc1wiLCBgJHt0YWJsZUNsYXNzTmFtZX0gdGFibGUtJHtuYW1lfWApXG4gICAgfSBlbHNlIGlmIChlbGVtZW50ID09PSBcIi5wcm9maWxlXCIgJiYgKG5hbWUgIT09IFwiTmV3IFlvcmtcIikpIHtcbiAgICAgICAgdGFibGUuYXR0cihcImNsYXNzXCIsIGAke3RhYmxlQ2xhc3NOYW1lfSB0YWJsZS0ke25hbWV9IGhpZGRlbmApXG4gICAgfVxuXG4gICAgaWYgKG5hbWUgPT09IFwiU2FuIEZyYW5jaXNjb1wiICYmIGVsZW1lbnQgPT09IFwiLnByb2ZpbGUtMlwiKSB7XG4gICAgICAgIHRhYmxlLmF0dHIoXCJjbGFzc1wiLCBgJHt0YWJsZUNsYXNzTmFtZX0gJHt0YWJsZUNsYXNzTmFtZX0tJHtuYW1lfWApXG4gICAgfSBlbHNlIGlmIChlbGVtZW50ID09PSBcIi5wcm9maWxlLTJcIiAmJiAobmFtZSAhPT0gXCJTYW4gRnJhbmNpc2NvXCIpKSB7XG4gICAgICAgIHRhYmxlLmF0dHIoXCJjbGFzc1wiLCBgJHt0YWJsZUNsYXNzTmFtZX0gJHt0YWJsZUNsYXNzTmFtZX0tJHtuYW1lfSBoaWRkZW5gKVxuICAgIH1cblxuICAgIGhlYWRlclxuICAgICAgICAuYXBwZW5kKFwidHJcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImhlYWRlci13cmFwcGVyXCIpXG4gICAgICAgIC5zdHlsZShcImNvbG9yXCIsIFwiYmx1ZVwiKVxuICAgICAgICAuc2VsZWN0QWxsKFwidGhcIilcbiAgICAgICAgLmRhdGEoY29sdW1uTmFtZXMpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJ0aFwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gZDtcbiAgICAgICAgfSlcbiAgICAgICAgLnN0eWxlKFwidGV4dC1hbGlnblwiLCBcImNlbnRlclwiKVxuICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIGQ7XG4gICAgICAgIH0pXG5cblxuXG4gICAgbGV0IHJvd3MgPSB0YWJsZWJvZHlcbiAgICAgICAgLnNlbGVjdEFsbChcInRyXCIpXG4gICAgICAgIC5kYXRhKGNpdHlEYXRhKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwidHJcIilcblxuXG4gICAgbGV0IGNlbGxzID0gcm93cy5zZWxlY3RBbGwoXCJ0ZFwiKVxuICAgICAgICAuZGF0YShmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgICByZXR1cm4gY29sdW1ucy5tYXAoZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbjogY29sdW1uLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcm93W2NvbHVtbl1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwidGRcIilcbiAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZC52YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIGlmIChkLnZhbHVlLnRvRml4ZWQoMikgPT09IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIjEwLjAgLzEwXCJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYCR7ZC52YWx1ZS50b0ZpeGVkKDIpfSAvMTBgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZC52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGQudmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTdHIgPSBkLnZhbHVlLnJlcGxhY2UoL1xccy9nLCBcIlwiKVxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1N0cjIgPSBuZXdTdHIucmVwbGFjZSgvWyZdL2csIFwiXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGBjYXRlZ29yeSAke25ld1N0cjJ9IG5vbmhpZ2hsaWdodGVkYFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYGNhdGVnb3J5IGNhdC1zY29yZSBub25oaWdobGlnaHRlZGBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoXCJpZFwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBkLnZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3RyID0gZC52YWx1ZS5yZXBsYWNlKC9cXHMvZywgXCJcIilcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTdHIyID0gbmV3U3RyLnJlcGxhY2UoL1smXS9nLCBcIlwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXdTdHIyXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBkLnZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhYmxlOyIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUaXRsZShuYW1lKSB7XG4gICAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbiAgICBjb25zdCBzZWN0aW9uRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZS1kcm9wZG93bi13cmFwcGVyXCIpXG4gICAgY29uc3Qgc3BhY2VyTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2l0eS1zY29yZS1sZWZ0XCIpXG5cbiAgICBjaXR5TmFtZS50ZXh0Q29udGVudCA9IG5hbWVcblxuICAgIGlmIChuYW1lID09PSBcIk5ldyBZb3JrXCIpIHtcbiAgICAgICAgY2l0eU5hbWUuY2xhc3NOYW1lID0gYGNpdHl0aXRsZSBjaXR5dGl0bGUtJHtuYW1lfWBcbiAgICB9IGVsc2Uge1xuICAgICAgICBjaXR5TmFtZS5jbGFzc05hbWUgPSBgY2l0eXRpdGxlIGNpdHl0aXRsZS0ke25hbWV9IGhpZGRlbmBcbiAgICB9XG4gICAgc2VjdGlvbkVsZS5pbnNlcnRCZWZvcmUoY2l0eU5hbWUsIHNwYWNlckxlZnQpXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRpdGxlMihuYW1lKSB7XG4gICAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbiAgICBjb25zdCBzZWN0aW9uRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZS1kcm9wZG93bi13cmFwcGVyLXJpZ2h0XCIpXG4gICAgY29uc3Qgc3BhY2VyUmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpdHktc2NvcmUtcmlnaHRcIilcblxuICAgIGNpdHlOYW1lLnRleHRDb250ZW50ID0gbmFtZVxuXG5cblxuICAgIGlmIChuYW1lID09PSBcIlNhbiBGcmFuY2lzY29cIikge1xuICAgICAgICBjaXR5TmFtZS5jbGFzc05hbWUgPSBgY2l0eXRpdGxlLXJpZ2h0IGNpdHl0aXRsZS1yaWdodC0ke25hbWV9YFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNpdHlOYW1lLmNsYXNzTmFtZSA9IGBjaXR5dGl0bGUtcmlnaHQgY2l0eXRpdGxlLXJpZ2h0LSR7bmFtZX0gaGlkZGVuYFxuICAgIH1cbiAgICBzZWN0aW9uRWxlLmluc2VydEJlZm9yZShjaXR5TmFtZSwgc3BhY2VyUmlnaHQpXG59XG5cblxuXG5cblxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvdGFsU2NvcmUobmFtZSwgY2l0eVNjb3JlLCBjbGFzc05hbWUpIHtcbiAgICBjb25zdCBjaXR5U2NvcmVFbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbiAgICBjb25zdCBzY29yZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2xhc3NOYW1lKVxuXG4gICAgY2l0eVNjb3JlRWxlLnRleHRDb250ZW50ID0gYENpdHkgU2NvcmU6ICR7Y2l0eVNjb3JlLnRvRml4ZWQoMil9YFxuXG4gICAgaWYgKG5hbWUgPT09IFwiTmV3IFlvcmtcIikge1xuICAgICAgICBjaXR5U2NvcmVFbGUuY2xhc3NOYW1lID0gYHNjb3JlLWxlZnQgc2NvcmUtbGVmdC0ke25hbWV9YFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNpdHlTY29yZUVsZS5jbGFzc05hbWUgPSBgc2NvcmUtbGVmdCBzY29yZS1sZWZ0LSR7bmFtZX0gaGlkZGVuYFxuICAgIH1cbiAgICBzY29yZURpdi5hcHBlbmRDaGlsZChjaXR5U2NvcmVFbGUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb3RhbFNjb3JlMihuYW1lLCBjaXR5U2NvcmUsIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGNpdHlTY29yZUVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICAgIGNvbnN0IHNjb3JlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjbGFzc05hbWUpXG5cbiAgICBjaXR5U2NvcmVFbGUudGV4dENvbnRlbnQgPSBgQ2l0eSBTY29yZTogJHtjaXR5U2NvcmUudG9GaXhlZCgyKX1gXG5cbiAgICBpZiAobmFtZSA9PT0gXCJTYW4gRnJhbmNpc2NvXCIpIHtcbiAgICAgICAgY2l0eVNjb3JlRWxlLmNsYXNzTmFtZSA9IGBzY29yZS1yaWdodCBzY29yZS1yaWdodC0ke25hbWV9YFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNpdHlTY29yZUVsZS5jbGFzc05hbWUgPSBgc2NvcmUtcmlnaHQgc2NvcmUtcmlnaHQtJHtuYW1lfSBoaWRkZW5gXG4gICAgfVxuICAgIHNjb3JlRGl2LmFwcGVuZENoaWxkKGNpdHlTY29yZUVsZSlcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiB0b2dnbGVEcm9wZG93bihlbGUsY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZHJvcGRvd25CdXR0b25FbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNsYXNzTmFtZSlcbiAgICBpZiAoZWxlLmNsYXNzTmFtZS5pbmNsdWRlcyhcImluYWN0aXZlXCIpKSB7XG4gICAgICAgIGVsZS5jbGFzc05hbWUgPSBlbGUuY2xhc3NOYW1lLnNwbGl0KFwiIFwiKVswXVxuICAgICAgICBlbGUuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIwIDAgMTBweCAxMHB4XCJcbiAgICAgICAgZHJvcGRvd25CdXR0b25FbGUuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMHB4IDEwcHggMCAwXCIgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWxlLmNsYXNzTmFtZSA9IGAke2VsZS5jbGFzc05hbWV9IGluYWN0aXZlYFxuICAgICAgICBlbGUuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMHB4XCJcbiAgICAgICAgZHJvcGRvd25CdXR0b25FbGUuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMHB4XCJcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93Q2hhcnRzKGNpdHlOYW1lLCBjaXR5Q2hhcnRDbGFzc25hbWUpIHtcbiAgICBjb25zdCBjaXR5TmFtZVJlbW92ZWRTcGFjZSA9IGNpdHlOYW1lLnNwbGl0KFwiIFwiKVsxXVxuICAgIGNvbnN0IGNpdHlDaGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NpdHlDaGFydENsYXNzbmFtZX0tJHtjaXR5TmFtZVJlbW92ZWRTcGFjZX1gKVxuXG5cbiAgICBjb25zdCBhbGxDaXR5Q2hhcnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7Y2l0eUNoYXJ0Q2xhc3NuYW1lfWApXG4gICAgYWxsQ2l0eUNoYXJ0cy5mb3JFYWNoKGNpdHlDaGFydCA9PiB7XG4gICAgICAgIGlmICghY2l0eUNoYXJ0LmNsYXNzTmFtZS5iYXNlVmFsLmluY2x1ZGVzKFwiaGlkZGVuXCIpKSB7XG4gICAgICAgICAgICBjaXR5Q2hhcnQuY2xhc3NOYW1lLmJhc2VWYWwgPSBjaXR5Q2hhcnQuY2xhc3NOYW1lLmJhc2VWYWwgKyBcIiBoaWRkZW5cIlxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGlmIChjaXR5Q2hhcnQuY2xhc3NOYW1lLmJhc2VWYWwuaW5jbHVkZXMoXCJoaWRkZW5cIikpIHtcbiAgICAgICAgY2l0eUNoYXJ0LmNsYXNzTmFtZS5iYXNlVmFsID0gYCR7Y2l0eUNoYXJ0Q2xhc3NuYW1lfSAke2NpdHlDaGFydENsYXNzbmFtZX0tJHtjaXR5TmFtZVJlbW92ZWRTcGFjZX1gXG4gICAgfSBlbHNlIHtcblxuICAgICAgICBjaXR5Q2hhcnQuY2xhc3NOYW1lLmJhc2VWYWwgPSBjaXR5Q2hhcnQuY2xhc3NOYW1lLmJhc2VWYWwgKyBcIiBoaWRkZW5cIlxuXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1RhYmxlcyhjaXR5TmFtZSwgdGFibGVDbGFzc25hbWUpIHtcbiAgICBjb25zdCBjaXR5TmFtZVJlbW92ZWRTcGFjZSA9IGNpdHlOYW1lLnNwbGl0KFwiIFwiKVsxXVxuICAgIGNvbnN0IGNpdHlUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhYmxlQ2xhc3NuYW1lfS0ke2NpdHlOYW1lUmVtb3ZlZFNwYWNlfWApXG5cbiAgICBjb25zdCBhbGxDaXR5VGFibGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7dGFibGVDbGFzc25hbWV9YClcbiAgICBhbGxDaXR5VGFibGVzLmZvckVhY2goY2l0eVRhYmxlID0+IHtcbiAgICAgICAgaWYgKCFjaXR5VGFibGUuY2xhc3NOYW1lLmluY2x1ZGVzKFwiaGlkZGVuXCIpKSB7XG4gICAgICAgICAgICBjaXR5VGFibGUuY2xhc3NOYW1lID0gY2l0eVRhYmxlLmNsYXNzTmFtZSArIFwiIGhpZGRlblwiXG5cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoY2l0eVRhYmxlLmNsYXNzTmFtZS5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICBjaXR5VGFibGUuY2xhc3NOYW1lID0gYCR7dGFibGVDbGFzc25hbWV9ICR7dGFibGVDbGFzc25hbWV9LSR7Y2l0eU5hbWVSZW1vdmVkU3BhY2V9YFxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgY2l0eVRhYmxlLmNsYXNzTmFtZSA9IGNpdHlUYWJsZS5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxuXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1RpdGxlKGNpdHlOYW1lLCBjaXR5VGl0bGVDbGFzc25hbWUpIHtcbiAgICBjb25zdCBjaXR5TmFtZVJlbW92ZWRTcGFjZSA9IGNpdHlOYW1lLnNwbGl0KFwiIFwiKVsxXVxuICAgIGNvbnN0IGNpdHlUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NpdHlUaXRsZUNsYXNzbmFtZX0tJHtjaXR5TmFtZVJlbW92ZWRTcGFjZX1gKVxuXG4gICAgY29uc3QgYWxsQ2l0eVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7Y2l0eVRpdGxlQ2xhc3NuYW1lfWApXG4gICAgYWxsQ2l0eVRpdGxlLmZvckVhY2goY2l0eVRpdGxlID0+IHtcbiAgICAgICAgaWYgKCFjaXR5VGl0bGUuY2xhc3NOYW1lLmluY2x1ZGVzKFwiaGlkZGVuXCIpKSB7XG4gICAgICAgICAgICBjaXR5VGl0bGUuY2xhc3NOYW1lID0gY2l0eVRpdGxlLmNsYXNzTmFtZSArIFwiIGhpZGRlblwiXG5cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoY2l0eVRpdGxlLmNsYXNzTmFtZS5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICBjaXR5VGl0bGUuY2xhc3NOYW1lID0gYCR7Y2l0eVRpdGxlQ2xhc3NuYW1lfSAke2NpdHlUaXRsZUNsYXNzbmFtZX0tJHtjaXR5TmFtZVJlbW92ZWRTcGFjZX1gXG4gICAgfSBlbHNlIHtcblxuICAgICAgICBjaXR5VGl0bGUuY2xhc3NOYW1lID0gY2l0eVRpdGxlLmNsYXNzTmFtZSArIFwiIGhpZGRlblwiXG5cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93U3VtbWFyeShjaXR5TmFtZSwgY2l0eVN1bW1hcnlDbGFzc25hbWUpIHtcbiAgICBjb25zdCBjaXR5TmFtZVJlbW92ZWRTcGFjZSA9IGNpdHlOYW1lLnNwbGl0KFwiIFwiKVsxXVxuICAgIGNvbnN0IGNpdHlTdW1tYXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2l0eVN1bW1hcnlDbGFzc25hbWV9LSR7Y2l0eU5hbWVSZW1vdmVkU3BhY2V9YClcblxuICAgIGNvbnN0IGFsbENpdHlTdW1tYXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7Y2l0eVN1bW1hcnlDbGFzc25hbWV9YClcbiAgICBhbGxDaXR5U3VtbWFyeS5mb3JFYWNoKGNpdHlTdW1tYXJ5ID0+IHtcbiAgICAgICAgaWYgKCFjaXR5U3VtbWFyeS5jbGFzc05hbWUuaW5jbHVkZXMoXCJoaWRkZW5cIikpIHtcbiAgICAgICAgICAgIGNpdHlTdW1tYXJ5LmNsYXNzTmFtZSA9IGNpdHlTdW1tYXJ5LmNsYXNzTmFtZSArIFwiIGhpZGRlblwiXG5cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoY2l0eVN1bW1hcnkuY2xhc3NOYW1lLmluY2x1ZGVzKFwiaGlkZGVuXCIpKSB7XG4gICAgICAgIGNpdHlTdW1tYXJ5LmNsYXNzTmFtZSA9IGAke2NpdHlTdW1tYXJ5Q2xhc3NuYW1lfSAke2NpdHlTdW1tYXJ5Q2xhc3NuYW1lfS0ke2NpdHlOYW1lUmVtb3ZlZFNwYWNlfWBcbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIGNpdHlTdW1tYXJ5LmNsYXNzTmFtZSA9IGNpdHlTdW1tYXJ5LmNsYXNzTmFtZSArIFwiIGhpZGRlblwiXG5cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93Q2l0eVNjb3JlKGNpdHlOYW1lLCBjaXR5U2NvcmVDbGFzc25hbWUpIHtcbiAgICBjb25zdCBjaXR5TmFtZVJlbW92ZWRTcGFjZSA9IGNpdHlOYW1lLnNwbGl0KFwiIFwiKVsxXVxuICAgIGNvbnN0IGNpdHlTY29yZUVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NpdHlTY29yZUNsYXNzbmFtZX0tJHtjaXR5TmFtZVJlbW92ZWRTcGFjZX1gKVxuXG4gICAgY29uc3QgYWxsQ2l0eVNjb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7Y2l0eVNjb3JlQ2xhc3NuYW1lfWApXG4gICAgYWxsQ2l0eVNjb3JlLmZvckVhY2goY2l0eVNjb3JlID0+IHtcbiAgICAgICAgaWYgKCFjaXR5U2NvcmUuY2xhc3NOYW1lLmluY2x1ZGVzKFwiaGlkZGVuXCIpKSB7XG4gICAgICAgICAgICBjaXR5U2NvcmUuY2xhc3NOYW1lID0gY2l0eVNjb3JlLmNsYXNzTmFtZSArIFwiIGhpZGRlblwiXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNpdHlTY29yZUVsZS5jbGFzc05hbWUuaW5jbHVkZXMoXCJoaWRkZW5cIikpIHtcbiAgICAgICAgY2l0eVNjb3JlRWxlLmNsYXNzTmFtZSA9IGAke2NpdHlTY29yZUNsYXNzbmFtZX0gJHtjaXR5U2NvcmVDbGFzc25hbWV9LSR7Y2l0eU5hbWVSZW1vdmVkU3BhY2V9YFxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgY2l0eVNjb3JlRWxlLmNsYXNzTmFtZSA9IGNpdHlTY29yZS5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxuXG4gICAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBsaWdodHVwQ2F0ZWdvcmllcyhpZCkge1xuICAgIGNvbnN0IGNpdHlDYXRlZ29yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCMke2lkfWApXG4gICAgY29uc3QgYWxsQ2l0eUNhdGVnb3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhdGVnb3J5XCIpXG4gICAgYWxsQ2l0eUNhdGVnb3JpZXMuZm9yRWFjaChjaXR5Q2F0ID0+IHtcbiAgICAgICAgaWYgKCFjaXR5Q2F0LmNsYXNzTmFtZS5pbmNsdWRlcyhcIm5vbmhpZ2hsaWdodGVkXCIpKSB7XG4gICAgICAgICAgICBjaXR5Q2F0LmNsYXNzTmFtZSA9IGNpdHlDYXQuY2xhc3NOYW1lICsgXCIgbm9uaGlnaGxpZ2h0ZWRcIlxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGNpdHlDYXRlZ29yeS5mb3JFYWNoKGNpdHlDYXQgPT4ge1xuICAgICAgICBpZiAoY2l0eUNhdC5jbGFzc05hbWUuaW5jbHVkZXMoYGNhdGVnb3J5ICR7aWR9IG5vbmhpZ2hsaWdodGVkYCkpIHtcbiAgICAgICAgICAgIGNpdHlDYXQuY2xhc3NOYW1lID0gYGNhdGVnb3J5ICR7aWR9YFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2l0eUNhdC5jbGFzc05hbWUgPSBjaXR5Q2F0LmNsYXNzTmFtZSArIFwiIG5vbmhpZ2hsaWdodGVkXCJcbiAgICAgICAgfVxuICAgIH0pXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3BIaWdobGlnaHRpbmcoKSB7XG4gICAgY29uc3QgYWxsQ2l0eUNhdGVnb3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhdGVnb3J5XCIpXG4gICAgYWxsQ2l0eUNhdGVnb3JpZXMuZm9yRWFjaChjaXR5Q2F0ID0+IHtcbiAgICAgICAgaWYgKCFjaXR5Q2F0LmNsYXNzTmFtZS5pbmNsdWRlcyhcIm5vbmhpZ2hsaWdodGVkXCIpKSB7XG4gICAgICAgICAgICBjaXR5Q2F0LmNsYXNzTmFtZSA9IGNpdHlDYXQuY2xhc3NOYW1lICsgXCIgbm9uaGlnaGxpZ2h0ZWRcIlxuICAgICAgICB9XG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVBpYyhwaWNzLGNpdHksIHBpY0NsYXNzbmFtZSkge1xuICAgIGNvbnN0IGJhY2tncm91bmRFbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtwaWNDbGFzc25hbWV9YCk7XG4gICAgYmFja2dyb3VuZEVsZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7cGljc1tjaXR5XX0pYFxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RJdGVtKGVsZSwgdGl0bGVDbGFzc25hbWUsIG1lbnVMaXN0Q2xhc3NuYW1lLCBkcm9wZG93bkNsYXNzbmFtZSwgY2l0eUNoYXJ0Q2xhc3NuYW1lLCB0YWJsZUNsYXNzbmFtZSwgY2l0eVRpdGxlQ2xhc3NuYW1lLCBjaXR5U3VtbWFyeUNsYXNzbmFtZSwgcGljcywgcGljQ2xhc3NuYW1lLCBjaXR5U2NvcmVDbGFzc25hbWUpIHtcbiAgICBjb25zdCBlbGVUZXh0ID0gZWxlLnRleHRDb250ZW50XG4gICAgY29uc3QgY2l0eU5hbWVOb1NwYWNlcyA9IGVsZS50ZXh0Q29udGVudC5yZXBsYWNlKC9cXHMvZywgXCJcIilcbiAgICBjb25zdCB0aXRsZUVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGl0bGVDbGFzc25hbWUpXG4gICAgY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1lbnVMaXN0Q2xhc3NuYW1lKVxuICAgIHRpdGxlRWxlLnRleHRDb250ZW50ID0gZWxlVGV4dDtcbiAgICB0b2dnbGVEcm9wZG93bihtZW51TGlzdCwgZHJvcGRvd25DbGFzc25hbWUpO1xuXG4gICAgc2hvd0NoYXJ0cyhlbGVUZXh0LCBjaXR5Q2hhcnRDbGFzc25hbWUpXG4gICAgc2hvd1RhYmxlcyhlbGVUZXh0LCB0YWJsZUNsYXNzbmFtZSlcbiAgICBzaG93VGl0bGUoZWxlVGV4dCwgY2l0eVRpdGxlQ2xhc3NuYW1lKVxuICAgIHNob3dTdW1tYXJ5KGVsZVRleHQsIGNpdHlTdW1tYXJ5Q2xhc3NuYW1lKVxuICAgIHNob3dDaXR5U2NvcmUoZWxlVGV4dCwgY2l0eVNjb3JlQ2xhc3NuYW1lKVxuICAgIGNoYW5nZVBpYyhwaWNzLGNpdHlOYW1lTm9TcGFjZXMsIHBpY0NsYXNzbmFtZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlRHJvcGRvd24oY2xhc3NOYW1lLCBkcm9wZG93bk1lbnVDbGFzc25hbWUpIHtcbiAgICBjb25zdCBkcm9wZG93bk1lbnVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3NOYW1lfWApXG4gICAgY29uc3QgZHJvcGRvd25NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7ZHJvcGRvd25NZW51Q2xhc3NuYW1lfWApXG5cbiAgICBpZiAoIWRyb3Bkb3duTWVudUxpc3QuY2xhc3NOYW1lLmluY2x1ZGVzKFwiaW5hY3RpdmVcIikpIHtcbiAgICAgICAgZHJvcGRvd25NZW51TGlzdC5jbGFzc05hbWUgPSBgJHtjbGFzc05hbWV9IGluYWN0aXZlYFxuICAgICAgICBkcm9wZG93bk1lbnUuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMHB4XCI7XG4gICAgfVxufVxuXG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=