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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3N1bW1hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vdGl0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vdG90YWxfc2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY2l0eURhdGEiLCJuYW1lIiwic3VtbWFyeSIsImNpdHlTY29yZSIsImNpdHlQaWNzIiwiY2l0eVNlbGVjdGlvbiIsImNpdGllcyIsInJlbmRlciIsImQzIiwianNvbiIsImVycm9yIiwiZGF0YSIsInRlbGVwb3J0X2NpdHlfc2NvcmUiLCJjYXRlZ29yaWVzIiwiY3JlYXRlQmFyR3JhcGgiLCJjcmVhdGVUYWJsZSIsImNyZWF0ZVRpdGxlIiwiY3JlYXRlVGl0bGUyIiwiY3JlYXRlU3VtbWFyeSIsImNyZWF0ZVN1bW1hcnkyIiwiY3JlYXRlVG90YWxTY29yZSIsImNyZWF0ZVRvdGFsU2NvcmUyIiwicmVuZGVyYWxsIiwiZm9yRWFjaCIsImNpdHkiLCJ0aXRsZURyb3BEb3duQnV0dG9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGl0bGVEcm9wRG93bkJ1dHRvblJpZ2h0IiwibWVudUxpc3QiLCJtZW51TGlzdFJpZ2h0IiwiY2l0eUxpc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2l0eUxpc3RSaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIlV0aWwiLCJ3aW5kb3ciLCJlbGVtZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJhcnJheUxlbmd0aCIsImxlbmd0aCIsIm1heFZhbHVlIiwibWF4IiwiZCIsInNjb3JlX291dF9vZl8xMCIsInhfYXhpc0xlbmd0aCIsInlfYXhpc0xlbmd0aCIsImNoYXJ0Q2xhc3NOYW1lIiwieFNjYWxlIiwic2NhbGVMaW5lYXIiLCJkb21haW4iLCJyYW5nZSIsInN2ZyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJzZWxlY3RBbGwiLCJlbnRlciIsImkiLCJjb2xvciIsIm9uIiwibmV3U3RyIiwicmVwbGFjZSIsIm5ld1N0cjIiLCJ0b29sdGlwIiwic3R5bGUiLCJ0ZXh0IiwicGFnZVkiLCJwYWdlWCIsInRvRml4ZWQiLCJjaXR5U3VtbWFyeUVsZSIsImNyZWF0ZUVsZW1lbnQiLCJzZWN0aW9uRWxlIiwidGV4dENvbnRlbnQiLCJjbGFzc05hbWUiLCJpbnNlcnRBZGphY2VudEVsZW1lbnQiLCJjb2x1bW5zIiwiY29sdW1uTmFtZXMiLCJ0YWJsZUNsYXNzTmFtZSIsInRhYmxlIiwiaGVhZGVyIiwidGFibGVib2R5Iiwicm93cyIsImNlbGxzIiwicm93IiwibWFwIiwiY29sdW1uIiwidmFsdWUiLCJjaXR5TmFtZSIsInNwYWNlckxlZnQiLCJpbnNlcnRCZWZvcmUiLCJzcGFjZXJSaWdodCIsImNpdHlTY29yZUVsZSIsInNjb3JlRGl2IiwiYXBwZW5kQ2hpbGQiLCJ0b2dnbGVEcm9wZG93biIsImVsZSIsImRyb3Bkb3duQnV0dG9uRWxlIiwiaW5jbHVkZXMiLCJzcGxpdCIsImJvcmRlclJhZGl1cyIsInNob3dDaGFydHMiLCJjaXR5Q2hhcnRDbGFzc25hbWUiLCJjaXR5TmFtZVJlbW92ZWRTcGFjZSIsImNpdHlDaGFydCIsImFsbENpdHlDaGFydHMiLCJiYXNlVmFsIiwic2hvd1RhYmxlcyIsInRhYmxlQ2xhc3NuYW1lIiwiY2l0eVRhYmxlIiwiYWxsQ2l0eVRhYmxlcyIsInNob3dUaXRsZSIsImNpdHlUaXRsZUNsYXNzbmFtZSIsImNpdHlUaXRsZSIsImFsbENpdHlUaXRsZSIsInNob3dTdW1tYXJ5IiwiY2l0eVN1bW1hcnlDbGFzc25hbWUiLCJjaXR5U3VtbWFyeSIsImFsbENpdHlTdW1tYXJ5Iiwic2hvd0NpdHlTY29yZSIsImNpdHlTY29yZUNsYXNzbmFtZSIsImFsbENpdHlTY29yZSIsImxpZ2h0dXBDYXRlZ29yaWVzIiwiaWQiLCJjaXR5Q2F0ZWdvcnkiLCJhbGxDaXR5Q2F0ZWdvcmllcyIsImNpdHlDYXQiLCJzdG9wSGlnaGxpZ2h0aW5nIiwiY2hhbmdlUGljIiwicGljcyIsInBpY0NsYXNzbmFtZSIsImJhY2tncm91bmRFbGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJzZWxlY3RJdGVtIiwidGl0bGVDbGFzc25hbWUiLCJtZW51TGlzdENsYXNzbmFtZSIsImRyb3Bkb3duQ2xhc3NuYW1lIiwiZWxlVGV4dCIsImNpdHlOYW1lTm9TcGFjZXMiLCJ0aXRsZUVsZSIsImNsb3NlRHJvcGRvd24iLCJkcm9wZG93bk1lbnVDbGFzc25hbWUiLCJkcm9wZG93bk1lbnVMaXN0IiwiZHJvcGRvd25NZW51Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztR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USxDQUFDQyxhQUFULENBQXVCOEcsY0FBdkIsQ0FBakI7QUFDQSxNQUFNNUcsUUFBUSxHQUFHSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIrRyxpQkFBdkIsQ0FBakI7QUFDQUksVUFBUSxDQUFDbEUsV0FBVCxHQUF1QmdFLE9BQXZCO0FBQ0ExQyxnQkFBYyxDQUFDckUsUUFBRCxFQUFXOEcsaUJBQVgsQ0FBZDtBQUVBbkMsWUFBVSxDQUFDb0MsT0FBRCxFQUFVbkMsa0JBQVYsQ0FBVjtBQUNBSyxZQUFVLENBQUM4QixPQUFELEVBQVU3QixjQUFWLENBQVY7QUFDQUcsV0FBUyxDQUFDMEIsT0FBRCxFQUFVekIsa0JBQVYsQ0FBVDtBQUNBRyxhQUFXLENBQUNzQixPQUFELEVBQVVyQixvQkFBVixDQUFYO0FBQ0FHLGVBQWEsQ0FBQ2tCLE9BQUQsRUFBVWpCLGtCQUFWLENBQWI7QUFDQVEsV0FBUyxDQUFDQyxJQUFELEVBQU1TLGdCQUFOLEVBQXdCUixZQUF4QixDQUFUO0FBQ0g7QUFFTSxTQUFTVSxhQUFULENBQXVCbEUsU0FBdkIsRUFBa0NtRSxxQkFBbEMsRUFBeUQ7QUFDNUQsTUFBTUMsZ0JBQWdCLEdBQUd2SCxRQUFRLENBQUNDLGFBQVQsWUFBMkJrRCxTQUEzQixFQUF6QjtBQUNBLE1BQU1xRSxZQUFZLEdBQUd4SCxRQUFRLENBQUNDLGFBQVQsWUFBMkJxSCxxQkFBM0IsRUFBckI7O0FBRUEsTUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ3BFLFNBQWpCLENBQTJCd0IsUUFBM0IsQ0FBb0MsVUFBcEMsQ0FBTCxFQUFzRDtBQUNsRDRDLG9CQUFnQixDQUFDcEUsU0FBakIsYUFBZ0NBLFNBQWhDO0FBQ0FxRSxnQkFBWSxDQUFDOUUsS0FBYixDQUFtQm1DLFlBQW5CLEdBQWtDLE1BQWxDO0FBQ0g7QUFDSixDOzs7Ozs7Ozs7OztBQ2hMRCx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0IGNyZWF0ZUJhckdyYXBoIGZyb20gJy4vbWFpbi9jaGFydC5qcyc7XG5pbXBvcnQgY3JlYXRlVGFibGUgZnJvbSAnLi9tYWluL3RhYmxlLmpzJztcbmltcG9ydCB7Y3JlYXRlVGl0bGUsIGNyZWF0ZVRpdGxlMn0gZnJvbSAnLi9tYWluL3RpdGxlLmpzJztcbmltcG9ydCB7Y3JlYXRlU3VtbWFyeSwgY3JlYXRlU3VtbWFyeTJ9IGZyb20gJy4vbWFpbi9zdW1tYXJ5JztcbmltcG9ydCB7Y3JlYXRlVG90YWxTY29yZSwgY3JlYXRlVG90YWxTY29yZTJ9IGZyb20gJy4vbWFpbi90b3RhbF9zY29yZSc7XG5pbXBvcnQgKiBhcyBVdGlsIGZyb20gJy4vbWFpbi91dGlsLmpzJztcblxuXG5cbmxldCBjaXR5RGF0YSA9IFtdXG5sZXQgbmFtZSwgc3VtbWFyeSwgY2l0eVNjb3JlO1xuXG5jb25zdCBjaXR5UGljcyA9IHtcbiAgICBcIkJvc3RvblwiOiBcIi4vc3JjL2ltYWdlcy9ib3N0b24uanBnXCIsXG4gICAgXCJDaGljYWdvXCI6IFwiLi9zcmMvaW1hZ2VzL2NoaWNhZ28uanBnXCIsXG4gICAgXCJEYWxsYXNcIjogXCIuL3NyYy9pbWFnZXMvZGFsbGFzLmpwZ1wiLFxuICAgIFwiTG9zQW5nZWxlc1wiOiBcIi4vc3JjL2ltYWdlcy9sYS5qcGdcIixcbiAgICBcIlBob2VuaXhcIjogXCIuL3NyYy9pbWFnZXMvcGhvZW5peC5qcGdcIixcbiAgICBcIlJhbGVpZ2hcIjogXCIuL3NyYy9pbWFnZXMvcmFsZWlnaC5qcGdcIixcbiAgICBcIlNlYXR0bGVcIjogXCIuL3NyYy9pbWFnZXMvc2VhdHRsZS5qcGdcIixcbiAgICBcIlNhbkZyYW5jaXNjb1wiOiBcIi4vc3JjL2ltYWdlcy9zZjIuanBnXCIsXG4gICAgXCJUb3JvbnRvXCI6IFwiLi9zcmMvaW1hZ2VzL3Rvcm9udG8uanBnXCIsXG4gICAgXCJOZXdZb3JrXCI6IFwiLi9zcmMvaW1hZ2VzL25ld3lvcmsyLmpwZ1wiXG59XG5cblxuLy8gY29uc3QgY2l0eVBpY3MgPSB7XG4vLyAgICAgXCJCb3N0b25cIjogXCJodHRwczovL2dpdGh1Yi5jb20va3plZC0xL0NpdHktU2NvcmUvYmxvYi9tYXN0ZXIvc3JjL2ltYWdlcy9ib3N0b24uanBnP3Jhdz10cnVlXCIsXG4vLyAgICAgXCJDaGljYWdvXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2t6ZWQtMS9DaXR5LVNjb3JlL2Jsb2IvbWFzdGVyL3NyYy9pbWFnZXMvY2hpY2Fnby5qcGc/cmF3PXRydWVcIixcbi8vICAgICBcIkRhbGxhc1wiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9remVkLTEvQ2l0eS1TY29yZS9ibG9iL21hc3Rlci9zcmMvaW1hZ2VzL2RhbGxhcy5qcGc/cmF3PXRydWVcIixcbi8vICAgICBcIkxvc0FuZ2VsZXNcIjogXCJodHRwczovL2dpdGh1Yi5jb20va3plZC0xL0NpdHktU2NvcmUvYmxvYi9tYXN0ZXIvc3JjL2ltYWdlcy9sYS5qcGc/cmF3PXRydWVcIixcbi8vICAgICBcIlBob2VuaXhcIjogXCJodHRwczovL2dpdGh1Yi5jb20va3plZC0xL0NpdHktU2NvcmUvYmxvYi9tYXN0ZXIvc3JjL2ltYWdlcy9waG9lbml4LmpwZz9yYXc9dHJ1ZVwiLFxuLy8gICAgIFwiUmFsZWlnaFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9remVkLTEvQ2l0eS1TY29yZS9ibG9iL21hc3Rlci9zcmMvaW1hZ2VzL3JhbGVpZ2guanBnP3Jhdz10cnVlXCIsXG4vLyAgICAgXCJTZWF0dGxlXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2t6ZWQtMS9DaXR5LVNjb3JlL2Jsb2IvbWFzdGVyL3NyYy9pbWFnZXMvc2VhdHRsZS5qcGc/cmF3PXRydWVcIixcbi8vICAgICBcIlNhbkZyYW5jaXNjb1wiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9remVkLTEvQ2l0eS1TY29yZS9ibG9iL21hc3Rlci9zcmMvaW1hZ2VzL3NmMi5qcGc/cmF3PXRydWVcIixcbi8vICAgICBcIlRvcm9udG9cIjogXCJodHRwczovL2dpdGh1Yi5jb20va3plZC0xL0NpdHktU2NvcmUvYmxvYi9tYXN0ZXIvc3JjL2ltYWdlcy90b3JvbnRvLmpwZz9yYXc9dHJ1ZVwiLFxuLy8gICAgIFwiTmV3WW9ya1wiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9remVkLTEvQ2l0eS1TY29yZS9ibG9iL21hc3Rlci9zcmMvaW1hZ2VzL25ld3lvcmsyLmpwZz9yYXc9dHJ1ZVwiXG4vLyB9XG5cbmxldCBjaXR5U2VsZWN0aW9uID0gXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20va3plZC0xL0NpdHktU2NvcmUvbWFzdGVyL3NyYy9kYXRhL25ld3lvcmsuanNvblwiXG5cbi8vIGNvbnN0IGNpdGllcyA9IFtcbi8vICAgICBcIi4vc3JjL2RhdGEvbmV3eW9yay5qc29uXCIsIFwiLi9zcmMvZGF0YS9zYW5mcmFuLmpzb25cIiwgXCIuL3NyYy9kYXRhL3NlYXR0bGUuanNvblwiLCBcbi8vICAgICBcIi4vc3JjL2RhdGEvdG9yb250by5qc29uXCIsIFwiLi9zcmMvZGF0YS9ib3N0b24uanNvblwiLCBcIi4vc3JjL2RhdGEvY2hpY2Fnby5qc29uXCIsIFxuLy8gICAgIFwiLi9zcmMvZGF0YS9sb3NhbmdlbGVzLmpzb25cIiwgXCIuL3NyYy9kYXRhL2RhbGxhcy5qc29uXCIsIFwiLi9zcmMvZGF0YS9waG9lbml4Lmpzb25cIiwgXG4vLyAgICAgXCIuL3NyYy9kYXRhL3JhbGVpZ2guanNvblwiXG4vLyAgICAgXSBcbmNvbnN0IGNpdGllcyA9IFtcbiAgICBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9remVkLTEvQ2l0eS1TY29yZS9tYXN0ZXIvc3JjL2RhdGEvbmV3eW9yay5qc29uXCIsIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2t6ZWQtMS9DaXR5LVNjb3JlL21hc3Rlci9zcmMvZGF0YS9zYW5mcmFuLmpzb25cIiwgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20va3plZC0xL0NpdHktU2NvcmUvbWFzdGVyL3NyYy9kYXRhL3NlYXR0bGUuanNvblwiLCBcbiAgICBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9remVkLTEvQ2l0eS1TY29yZS9tYXN0ZXIvc3JjL2RhdGEvdG9yb250by5qc29uXCIsIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2t6ZWQtMS9DaXR5LVNjb3JlL21hc3Rlci9zcmMvZGF0YS9ib3N0b24uanNvblwiLCBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9remVkLTEvQ2l0eS1TY29yZS9tYXN0ZXIvc3JjL2RhdGEvY2hpY2Fnby5qc29uXCIsIFxuICAgIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2t6ZWQtMS9DaXR5LVNjb3JlL21hc3Rlci9zcmMvZGF0YS9sb3NhbmdlbGVzLmpzb25cIiwgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20va3plZC0xL0NpdHktU2NvcmUvbWFzdGVyL3NyYy9kYXRhL2RhbGxhcy5qc29uXCIsIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2t6ZWQtMS9DaXR5LVNjb3JlL21hc3Rlci9zcmMvZGF0YS9waG9lbml4Lmpzb25cIiwgXG4gICAgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20va3plZC0xL0NpdHktU2NvcmUvbWFzdGVyL3NyYy9kYXRhL3JhbGVpZ2guanNvblwiXG4gICAgXSBcblxuXG5mdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgZDMuanNvbihjaXR5U2VsZWN0aW9uLCBmdW5jdGlvbiAoZXJyb3IsIGRhdGEpIHtcbiAgICAgICAgbmFtZSA9IGRhdGEubmFtZVxuICAgICAgICBzdW1tYXJ5ID0gZGF0YS5zdW1tYXJ5XG4gICAgICAgIGNpdHlTY29yZSA9IGRhdGEudGVsZXBvcnRfY2l0eV9zY29yZVxuICAgICAgICBjaXR5RGF0YSA9IGRhdGEuY2F0ZWdvcmllc1xuICAgICAgICBjcmVhdGVCYXJHcmFwaChjaXR5RGF0YSwgbmFtZSwgXCIuY2hhcnRcIik7XG4gICAgICAgIGNyZWF0ZVRhYmxlKGNpdHlEYXRhLCBuYW1lLCBcIi5wcm9maWxlXCIpO1xuICAgICAgICBjcmVhdGVCYXJHcmFwaChjaXR5RGF0YSwgbmFtZSwgXCIuY2hhcnQtMlwiKTtcbiAgICAgICAgY3JlYXRlVGFibGUoY2l0eURhdGEsIG5hbWUsIFwiLnByb2ZpbGUtMlwiKTtcbiAgICAgICAgY3JlYXRlVGl0bGUobmFtZSk7XG4gICAgICAgIGNyZWF0ZVRpdGxlMihuYW1lKTtcbiAgICAgICAgY3JlYXRlU3VtbWFyeShuYW1lLCBzdW1tYXJ5KTtcbiAgICAgICAgY3JlYXRlU3VtbWFyeTIobmFtZSwgc3VtbWFyeSk7XG4gICAgICAgIGNyZWF0ZVRvdGFsU2NvcmUobmFtZSxjaXR5U2NvcmUsXCIuY2l0eS1zY29yZS1sZWZ0XCIpO1xuICAgICAgICBjcmVhdGVUb3RhbFNjb3JlMihuYW1lLGNpdHlTY29yZSxcIi5jaXR5LXNjb3JlLXJpZ2h0XCIpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHJlbmRlcmFsbCgpIHtcbiAgICBjaXRpZXMuZm9yRWFjaChjaXR5ID0+IHtcbiAgICAgICAgY2l0eVNlbGVjdGlvbiA9IGNpdHkgXG4gICAgICAgIHJlbmRlcigpXG4gICAgfSk7XG59XG5cblxuLy8gY29uc3QgdGl0bGVEcm9wRG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGUtZHJvcGRvd24td3JhcHBlclwiKVxuY29uc3QgdGl0bGVEcm9wRG93bkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tbWVudVwiKVxuY29uc3QgdGl0bGVEcm9wRG93bkJ1dHRvblJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bi1tZW51LXJpZ2h0XCIpXG5jb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1saXN0XCIpXG5jb25zdCBtZW51TGlzdFJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWxpc3QtcmlnaHRcIilcbmNvbnN0IGNpdHlMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaXR5XCIpXG5jb25zdCBjaXR5TGlzdFJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaXR5LTJcIilcblxudGl0bGVEcm9wRG93bkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHJldHVybiBVdGlsLnRvZ2dsZURyb3Bkb3duKG1lbnVMaXN0LCBcIi5kcm9wZG93bi1tZW51XCIpfSlcbnRpdGxlRHJvcERvd25CdXR0b25SaWdodC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHJldHVybiBVdGlsLnRvZ2dsZURyb3Bkb3duKG1lbnVMaXN0UmlnaHQsIFwiLmRyb3Bkb3duLW1lbnUtcmlnaHRcIil9KVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gVXRpbC5jbG9zZURyb3Bkb3duKFwibWVudS1saXN0XCIsIFwiZHJvcGRvd24tbWVudVwiKSlcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFV0aWwuY2xvc2VEcm9wZG93bihcIm1lbnUtbGlzdC1yaWdodFwiLCBcImRyb3Bkb3duLW1lbnUtcmlnaHRcIikpXG5cbmNpdHlMaXN0LmZvckVhY2goY2l0eSA9PiB7XG4gICAgY2l0eS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICByZXR1cm4gVXRpbC5zZWxlY3RJdGVtKGNpdHksIFwiLnRpdGxlXCIsIFwiLm1lbnUtbGlzdFwiLCBcIi5kcm9wZG93bi1tZW51XCIsIFwiY2l0eWNoYXJ0XCIsIFwidGFibGVcIiwgXCJjaXR5dGl0bGVcIiwgXCJjaXR5U3VtbWFyeVwiLCBjaXR5UGljcywgXCJib2R5LWxlZnRcIiwgXCJzY29yZS1sZWZ0XCIpXG4gICAgfSlcbn0pXG5jaXR5TGlzdFJpZ2h0LmZvckVhY2goY2l0eSA9PiB7XG4gICAgY2l0eS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgcmV0dXJuIFV0aWwuc2VsZWN0SXRlbShjaXR5LCBcIi50aXRsZS1yaWdodFwiLCBcIi5tZW51LWxpc3QtcmlnaHRcIiwgXCIuZHJvcGRvd24tbWVudS1yaWdodFwiLCBcImNpdHljaGFydC1yaWdodFwiLCBcInRhYmxlLXJpZ2h0XCIsIFwiY2l0eXRpdGxlLXJpZ2h0XCIsIFwiY2l0eVN1bW1hcnktcmlnaHRcIiwgY2l0eVBpY3MsIFwiYm9keS1yaWdodFwiLCBcInNjb3JlLXJpZ2h0XCIpXG4gICAgfSlcbn0pXG5cbnJlbmRlcmFsbCgpXG5cblxuXG4vLyBjb25zdCBzY29yZXMgPSBbMi4yOTEsIDMuNzksIDguMzY3LCA3LjU1MTAwMDAwMDAwMDAwMSwgMi44ODQ1LCA0LjUyMzc1MDAwMDAwMDAwMSwgOC42NzEsXG4vLyAgICAgNS42MzY1LCA4LjcyNDMzMzMzMzMzMzMzMiwgNS43MTQ1LCA3LjU2MDI1MDAwMDAwMDAwMSwgNi41MTQ1LCA0Ljc3Mixcbi8vICAgICA0Ljk0MDQ5OTk5OTk5OTk5OSwgOC4xMTU1LCA4LjA4OTUsIDcuMjA5NDk5OTk5OTk5OTk4NVxuXG4vLyBdIiwiaW1wb3J0ICogYXMgVXRpbCBmcm9tIFwiLi91dGlsXCI7XG5cblxuZnVuY3Rpb24gY3JlYXRlQmFyR3JhcGgoY2l0eURhdGEsIG5hbWUsIGVsZW1lbnQpIHtcbiAgICAvLyBjb25zdCB3aWR0aCA9IDQwMDtcbiAgICAvLyBjb25zdCBoZWlnaHQgPSA1MDA7XG4gICAgY29uc3Qgd2lkdGggPSA2MDA7XG4gICAgY29uc3QgaGVpZ2h0ID0gNzAwO1xuXG4gICAgY29uc3QgYXJyYXlMZW5ndGggPSBjaXR5RGF0YS5sZW5ndGg7IFxuICAgIGNvbnN0IG1heFZhbHVlID0gZDMubWF4KGNpdHlEYXRhLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gK2Quc2NvcmVfb3V0X29mXzEwOyB9KTsgXG4gICAgLy8gY29uc3QgeF9heGlzTGVuZ3RoID0gNDAwOyBcbiAgICAvLyBjb25zdCB5X2F4aXNMZW5ndGggPSA0NzE7IFxuICAgIGNvbnN0IHhfYXhpc0xlbmd0aCA9IDYwMDsgXG4gICAgY29uc3QgeV9heGlzTGVuZ3RoID0gNjcxOyBcblxuICAgIGNvbnN0IGNoYXJ0Q2xhc3NOYW1lID0gZWxlbWVudCA9PT0gXCIuY2hhcnRcIiA/IFwiY2l0eWNoYXJ0XCIgOiBcImNpdHljaGFydC1yaWdodFwiXG5cblxuICAgIGNvbnN0IHhTY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgLmRvbWFpbihbMCwgbWF4VmFsdWVdKVxuICAgICAgICAucmFuZ2UoWzAsIHhfYXhpc0xlbmd0aF0pO1xuXG4gICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KGVsZW1lbnQpXG4gICAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgLmF0dHIoXCJ2aWV3Qm94XCIsIGAwIDAgJHt3aWR0aH0gJHtoZWlnaHR9YClcbiAgICAgICAgLy8gLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aClcbiAgICAgICAgLy8gLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0KTtcblxuICAgIGlmIChuYW1lID09PSBcIk5ldyBZb3JrXCIgJiYgZWxlbWVudCA9PT0gXCIuY2hhcnRcIikge1xuICAgICAgICBzdmcuYXR0cihcImNsYXNzXCIsIGAke2NoYXJ0Q2xhc3NOYW1lfSAke2NoYXJ0Q2xhc3NOYW1lfS0ke25hbWV9YClcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQgPT09IFwiLmNoYXJ0XCIgJiYgKG5hbWUgIT09IFwiTmV3IFlvcmtcIikpIHtcbiAgICAgICAgc3ZnLmF0dHIoXCJjbGFzc1wiLCBgJHtjaGFydENsYXNzTmFtZX0gJHtjaGFydENsYXNzTmFtZX0tJHtuYW1lfSBoaWRkZW5gKVxuICAgIH0gXG5cbiAgICBpZiAobmFtZSA9PT0gXCJTYW4gRnJhbmNpc2NvXCIgJiYgZWxlbWVudCA9PT0gXCIuY2hhcnQtMlwiKSB7XG4gICAgICAgIHN2Zy5hdHRyKFwiY2xhc3NcIiwgYCR7Y2hhcnRDbGFzc05hbWV9ICR7Y2hhcnRDbGFzc05hbWV9LSR7bmFtZX1gKVxuICAgIH0gZWxzZSBpZiAoZWxlbWVudCA9PT0gXCIuY2hhcnQtMlwiICYmIChuYW1lICE9PSBcIlNhbiBGcmFuY2lzY29cIikpeyBcbiAgICAgICAgc3ZnLmF0dHIoXCJjbGFzc1wiLCBgJHtjaGFydENsYXNzTmFtZX0gJHtjaGFydENsYXNzTmFtZX0tJHtuYW1lfSBoaWRkZW5gKVxuICAgIH1cblxuXG4gICAgc3ZnLnNlbGVjdEFsbChcInJlY3RcIilcbiAgICAgICAgLmRhdGEoY2l0eURhdGEpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIGkgKiAoeV9heGlzTGVuZ3RoIC8gYXJyYXlMZW5ndGgpICsgMzA7XG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKFwieFwiLCAwKVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCAoeV9heGlzTGVuZ3RoIC8gYXJyYXlMZW5ndGgpIC0gMSlcbiAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIHhTY2FsZShkLnNjb3JlX291dF9vZl8xMCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKFwiZmlsbFwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIGQuY29sb3JcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIGBiYXIgJHtkLm5hbWV9YDtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdTdHIgPSBkLm5hbWUucmVwbGFjZSgvXFxzL2csIFwiXCIpXG4gICAgICAgICAgICBjb25zdCBuZXdTdHIyID0gbmV3U3RyLnJlcGxhY2UoL1smXS9nLCBcIlwiKVxuICAgICAgICAgICAgVXRpbC5saWdodHVwQ2F0ZWdvcmllcyhuZXdTdHIyKVxuICAgICAgICAgICAgcmV0dXJuIHRvb2x0aXAuc3R5bGUoXCJ2aXNpYmlsaXR5XCIsIFwidmlzaWJsZVwiKS50ZXh0KGQubmFtZSArIFwiOiBcIiArIGQuc2NvcmVfb3V0X29mXzEwKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwibW91c2Vtb3ZlXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9vbHRpcC5zdHlsZShcInRvcFwiLCAoZDMuZXZlbnQucGFnZVkgLSAxMCkgKyBcInB4XCIpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwibGVmdFwiLCAoZDMuZXZlbnQucGFnZVggKyAxMCkgKyBcInB4XCIpLnRleHQoZC5uYW1lICsgXCI6IFwiICsgZC5zY29yZV9vdXRfb2ZfMTAudG9GaXhlZCgyKSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICBVdGlsLnN0b3BIaWdobGlnaHRpbmcoKVxuICAgICAgICAgICAgcmV0dXJuIHRvb2x0aXAuc3R5bGUoXCJ2aXNpYmlsaXR5XCIsIFwiaGlkZGVuXCIpXG4gICAgICAgIH0pXG5cbiAgICBjb25zdCB0b29sdGlwID0gZDMuc2VsZWN0KFwiLmNoYXJ0XCIpXG4gICAgICAgIC5hcHBlbmQoXCJkaXZcIilcbiAgICAgICAgLnN0eWxlKFwicG9zaXRpb25cIiwgXCJhYnNvbHV0ZVwiKVxuICAgICAgICAuc3R5bGUoXCJmb250LWZhbWlseVwiLCBcInJvYm90b1wiKVxuICAgICAgICAuc3R5bGUoXCJmb250LXNpemVcIiwgXCIxNHB4XCIpXG4gICAgICAgIC5zdHlsZShcInotaW5kZXhcIiwgXCIzXCIpXG4gICAgICAgIC5zdHlsZShcInZpc2liaWxpdHlcIiwgXCJoaWRkZW5cIilcbiAgICAgICAgLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcIndoaXRlXCIpXG4gICAgICAgIC5zdHlsZShcIndpZHRoXCIsIFwiYXV0b1wiKVxuICAgICAgICAuc3R5bGUoXCJtYXJnaW5cIiwgXCIwIGF1dG9cIilcbiAgICAgICAgLnN0eWxlKFwiYm9yZGVyLXJhZGl1c1wiLCBcIjEwcHhcIilcbiAgICAgICAgLnN0eWxlKFwicGFkZGluZ1wiLCBcIjEwcHhcIilcbiAgICAgICAgLnN0eWxlKFwiYm9yZGVyXCIsIFwiMnB4IHNvbGlkIGJsYWNrXCIpXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVCYXJHcmFwaDsiLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlU3VtbWFyeShuYW1lLCBzdW1tYXJ5KSB7XG4gICAgY29uc3QgY2l0eVN1bW1hcnlFbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIGNvbnN0IHNlY3Rpb25FbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlLWRyb3Bkb3duLXdyYXBwZXJcIilcblxuICAgIGNpdHlTdW1tYXJ5RWxlLnRleHRDb250ZW50ID0gc3VtbWFyeS5yZXBsYWNlKC9bPF0uezEsMn1bPl0vZywgXCJcIilcblxuICAgIGlmIChuYW1lID09PSBcIk5ldyBZb3JrXCIpIHtcbiAgICAgICAgY2l0eVN1bW1hcnlFbGUuY2xhc3NOYW1lID0gYGNpdHlTdW1tYXJ5IGNpdHlTdW1tYXJ5LSR7bmFtZX1gXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2l0eVN1bW1hcnlFbGUuY2xhc3NOYW1lID0gYGNpdHlTdW1tYXJ5IGNpdHlTdW1tYXJ5LSR7bmFtZX0gaGlkZGVuYFxuICAgIH1cblxuICAgIHNlY3Rpb25FbGUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJlbmRcIiwgY2l0eVN1bW1hcnlFbGUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdW1tYXJ5MihuYW1lLCBzdW1tYXJ5KSB7XG4gICAgY29uc3QgY2l0eVN1bW1hcnlFbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIGNvbnN0IHNlY3Rpb25FbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlLWRyb3Bkb3duLXdyYXBwZXItcmlnaHRcIilcblxuICAgIGNpdHlTdW1tYXJ5RWxlLnRleHRDb250ZW50ID0gc3VtbWFyeS5yZXBsYWNlKC9bPF0uezEsMn1bPl0vZywgXCJcIilcblxuICAgIGlmIChuYW1lID09PSBcIlNhbiBGcmFuY2lzY29cIikge1xuICAgICAgICBjaXR5U3VtbWFyeUVsZS5jbGFzc05hbWUgPSBgY2l0eVN1bW1hcnktcmlnaHQgY2l0eVN1bW1hcnktcmlnaHQtJHtuYW1lfWBcbiAgICB9IGVsc2Uge1xuICAgICAgICBjaXR5U3VtbWFyeUVsZS5jbGFzc05hbWUgPSBgY2l0eVN1bW1hcnktcmlnaHQgY2l0eVN1bW1hcnktcmlnaHQtJHtuYW1lfSBoaWRkZW5gXG4gICAgfVxuXG4gICAgc2VjdGlvbkVsZS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmVuZFwiLCBjaXR5U3VtbWFyeUVsZSlcbn1cblxuIiwiaW1wb3J0ICogYXMgVXRpbCBmcm9tICcuL3V0aWwuanMnXG5cbmZ1bmN0aW9uIGNyZWF0ZVRhYmxlKGNpdHlEYXRhLCBuYW1lLCBlbGVtZW50KSB7XG5cbiAgICBjb25zdCBjb2x1bW5zID0gW1wibmFtZVwiLCBcInNjb3JlX291dF9vZl8xMFwiXVxuICAgIGNvbnN0IGNvbHVtbk5hbWVzID0gW1wiQ2F0ZWdvcmllc1wiLCBcIlNjb3JlXCJdXG5cbiAgICBjb25zdCB0YWJsZUNsYXNzTmFtZSA9IGVsZW1lbnQgPT09IFwiLnByb2ZpbGVcIiA/IFwidGFibGVcIiA6IFwidGFibGUtcmlnaHRcIlxuXG5cbiAgICBsZXQgdGFibGUgPSBkMy5zZWxlY3QoZWxlbWVudClcbiAgICAgICAgLmFwcGVuZCgndGFibGUnKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIGAke3RhYmxlQ2xhc3NOYW1lfSB0YWJsZS0ke25hbWV9IGhpZGRlbmApXG4gICAgICAgIC5zdHlsZShcImJvcmRlci1yYWRpdXNcIiwgXCIxMHB4XCIpXG4gICAgICAgIC5zdHlsZShcImJvcmRlclwiLCBcIjJweCBzb2xpZCBibGFja1wiKTtcbiAgICBsZXQgaGVhZGVyID0gdGFibGVcbiAgICAgICAgLmFwcGVuZChcImhlYWRlclwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwidGFibGUtaGVhZGVyXCIpO1xuICAgIGxldCB0YWJsZWJvZHkgPSB0YWJsZS5hcHBlbmQoXCJ0YWJsZWJvZHlcIik7XG5cbiAgICAvLyBpZiAobmFtZSA9PT0gXCJOZXcgWW9ya1wiKSB7XG4gICAgLy8gICAgIHRhYmxlLmF0dHIoXCJjbGFzc1wiLCBgJHt0YWJsZUNsYXNzTmFtZX0gdGFibGUtJHtuYW1lfWApXG5cbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgICB0YWJsZS5hdHRyKFwiY2xhc3NcIiwgYCR7dGFibGVDbGFzc05hbWV9IHRhYmxlLSR7bmFtZX0gaGlkZGVuYClcbiAgICAvLyB9XG5cbiAgICBpZiAobmFtZSA9PT0gXCJOZXcgWW9ya1wiICYmIGVsZW1lbnQgPT09IFwiLnByb2ZpbGVcIikge1xuICAgICAgICB0YWJsZS5hdHRyKFwiY2xhc3NcIiwgYCR7dGFibGVDbGFzc05hbWV9IHRhYmxlLSR7bmFtZX1gKVxuICAgIH0gZWxzZSBpZiAoZWxlbWVudCA9PT0gXCIucHJvZmlsZVwiICYmIChuYW1lICE9PSBcIk5ldyBZb3JrXCIpKSB7XG4gICAgICAgIHRhYmxlLmF0dHIoXCJjbGFzc1wiLCBgJHt0YWJsZUNsYXNzTmFtZX0gdGFibGUtJHtuYW1lfSBoaWRkZW5gKVxuICAgIH1cblxuICAgIGlmIChuYW1lID09PSBcIlNhbiBGcmFuY2lzY29cIiAmJiBlbGVtZW50ID09PSBcIi5wcm9maWxlLTJcIikge1xuICAgICAgICB0YWJsZS5hdHRyKFwiY2xhc3NcIiwgYCR7dGFibGVDbGFzc05hbWV9ICR7dGFibGVDbGFzc05hbWV9LSR7bmFtZX1gKVxuICAgIH0gZWxzZSBpZiAoZWxlbWVudCA9PT0gXCIucHJvZmlsZS0yXCIgJiYgKG5hbWUgIT09IFwiU2FuIEZyYW5jaXNjb1wiKSkge1xuICAgICAgICB0YWJsZS5hdHRyKFwiY2xhc3NcIiwgYCR7dGFibGVDbGFzc05hbWV9ICR7dGFibGVDbGFzc05hbWV9LSR7bmFtZX0gaGlkZGVuYClcbiAgICB9XG5cbiAgICBoZWFkZXJcbiAgICAgICAgLmFwcGVuZChcInRyXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJoZWFkZXItd3JhcHBlclwiKVxuICAgICAgICAuc3R5bGUoXCJjb2xvclwiLCBcImJsdWVcIilcbiAgICAgICAgLnNlbGVjdEFsbChcInRoXCIpXG4gICAgICAgIC5kYXRhKGNvbHVtbk5hbWVzKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwidGhcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIGQ7XG4gICAgICAgIH0pXG4gICAgICAgIC5zdHlsZShcInRleHQtYWxpZ25cIiwgXCJjZW50ZXJcIilcbiAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBkO1xuICAgICAgICB9KVxuXG5cblxuICAgIGxldCByb3dzID0gdGFibGVib2R5XG4gICAgICAgIC5zZWxlY3RBbGwoXCJ0clwiKVxuICAgICAgICAuZGF0YShjaXR5RGF0YSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZChcInRyXCIpXG5cblxuICAgIGxldCBjZWxscyA9IHJvd3Muc2VsZWN0QWxsKFwidGRcIilcbiAgICAgICAgLmRhdGEoZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbnMubWFwKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW46IGNvbHVtbixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJvd1tjb2x1bW5dXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZChcInRkXCIpXG4gICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGQudmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZC52YWx1ZS50b0ZpeGVkKDIpID09PSAxMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIxMC4wIC8xMFwiXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAke2QudmFsdWUudG9GaXhlZCgyKX0gLzEwYFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGQudmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBkLnZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3RyID0gZC52YWx1ZS5yZXBsYWNlKC9cXHMvZywgXCJcIilcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTdHIyID0gbmV3U3RyLnJlcGxhY2UoL1smXS9nLCBcIlwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBgY2F0ZWdvcnkgJHtuZXdTdHIyfSBub25oaWdobGlnaHRlZGBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGBjYXRlZ29yeSBjYXQtc2NvcmUgbm9uaGlnaGxpZ2h0ZWRgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKFwiaWRcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZC52YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1N0ciA9IGQudmFsdWUucmVwbGFjZSgvXFxzL2csIFwiXCIpXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3RyMiA9IG5ld1N0ci5yZXBsYWNlKC9bJl0vZywgXCJcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3U3RyMlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZC52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUYWJsZTsiLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlVGl0bGUobmFtZSkge1xuICAgIGNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG4gICAgY29uc3Qgc2VjdGlvbkVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGUtZHJvcGRvd24td3JhcHBlclwiKVxuICAgIGNvbnN0IHNwYWNlckxlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpdHktc2NvcmUtbGVmdFwiKVxuXG4gICAgY2l0eU5hbWUudGV4dENvbnRlbnQgPSBuYW1lXG5cbiAgICBpZiAobmFtZSA9PT0gXCJOZXcgWW9ya1wiKSB7XG4gICAgICAgIGNpdHlOYW1lLmNsYXNzTmFtZSA9IGBjaXR5dGl0bGUgY2l0eXRpdGxlLSR7bmFtZX1gXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2l0eU5hbWUuY2xhc3NOYW1lID0gYGNpdHl0aXRsZSBjaXR5dGl0bGUtJHtuYW1lfSBoaWRkZW5gXG4gICAgfVxuICAgIHNlY3Rpb25FbGUuaW5zZXJ0QmVmb3JlKGNpdHlOYW1lLCBzcGFjZXJMZWZ0KVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUaXRsZTIobmFtZSkge1xuICAgIGNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG4gICAgY29uc3Qgc2VjdGlvbkVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGUtZHJvcGRvd24td3JhcHBlci1yaWdodFwiKVxuICAgIGNvbnN0IHNwYWNlclJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXR5LXNjb3JlLXJpZ2h0XCIpXG5cbiAgICBjaXR5TmFtZS50ZXh0Q29udGVudCA9IG5hbWVcblxuXG5cbiAgICBpZiAobmFtZSA9PT0gXCJTYW4gRnJhbmNpc2NvXCIpIHtcbiAgICAgICAgY2l0eU5hbWUuY2xhc3NOYW1lID0gYGNpdHl0aXRsZS1yaWdodCBjaXR5dGl0bGUtcmlnaHQtJHtuYW1lfWBcbiAgICB9IGVsc2Uge1xuICAgICAgICBjaXR5TmFtZS5jbGFzc05hbWUgPSBgY2l0eXRpdGxlLXJpZ2h0IGNpdHl0aXRsZS1yaWdodC0ke25hbWV9IGhpZGRlbmBcbiAgICB9XG4gICAgc2VjdGlvbkVsZS5pbnNlcnRCZWZvcmUoY2l0eU5hbWUsIHNwYWNlclJpZ2h0KVxufVxuXG5cblxuXG5cbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb3RhbFNjb3JlKG5hbWUsIGNpdHlTY29yZSwgY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgY2l0eVNjb3JlRWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG4gICAgY29uc3Qgc2NvcmVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNsYXNzTmFtZSlcblxuICAgIGNpdHlTY29yZUVsZS50ZXh0Q29udGVudCA9IGBDaXR5IFNjb3JlOiAke2NpdHlTY29yZS50b0ZpeGVkKDIpfWBcblxuICAgIGlmIChuYW1lID09PSBcIk5ldyBZb3JrXCIpIHtcbiAgICAgICAgY2l0eVNjb3JlRWxlLmNsYXNzTmFtZSA9IGBzY29yZS1sZWZ0IHNjb3JlLWxlZnQtJHtuYW1lfWBcbiAgICB9IGVsc2Uge1xuICAgICAgICBjaXR5U2NvcmVFbGUuY2xhc3NOYW1lID0gYHNjb3JlLWxlZnQgc2NvcmUtbGVmdC0ke25hbWV9IGhpZGRlbmBcbiAgICB9XG4gICAgc2NvcmVEaXYuYXBwZW5kQ2hpbGQoY2l0eVNjb3JlRWxlKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG90YWxTY29yZTIobmFtZSwgY2l0eVNjb3JlLCBjbGFzc05hbWUpIHtcbiAgICBjb25zdCBjaXR5U2NvcmVFbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbiAgICBjb25zdCBzY29yZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2xhc3NOYW1lKVxuXG4gICAgY2l0eVNjb3JlRWxlLnRleHRDb250ZW50ID0gYENpdHkgU2NvcmU6ICR7Y2l0eVNjb3JlLnRvRml4ZWQoMil9YFxuXG4gICAgaWYgKG5hbWUgPT09IFwiU2FuIEZyYW5jaXNjb1wiKSB7XG4gICAgICAgIGNpdHlTY29yZUVsZS5jbGFzc05hbWUgPSBgc2NvcmUtcmlnaHQgc2NvcmUtcmlnaHQtJHtuYW1lfWBcbiAgICB9IGVsc2Uge1xuICAgICAgICBjaXR5U2NvcmVFbGUuY2xhc3NOYW1lID0gYHNjb3JlLXJpZ2h0IHNjb3JlLXJpZ2h0LSR7bmFtZX0gaGlkZGVuYFxuICAgIH1cbiAgICBzY29yZURpdi5hcHBlbmRDaGlsZChjaXR5U2NvcmVFbGUpXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdG9nZ2xlRHJvcGRvd24oZWxlLGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGRyb3Bkb3duQnV0dG9uRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjbGFzc05hbWUpXG4gICAgaWYgKGVsZS5jbGFzc05hbWUuaW5jbHVkZXMoXCJpbmFjdGl2ZVwiKSkge1xuICAgICAgICBlbGUuY2xhc3NOYW1lID0gZWxlLmNsYXNzTmFtZS5zcGxpdChcIiBcIilbMF1cbiAgICAgICAgZWxlLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMCAwIDEwcHggMTBweFwiXG4gICAgICAgIGRyb3Bkb3duQnV0dG9uRWxlLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTBweCAxMHB4IDAgMFwiIFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZS5jbGFzc05hbWUgPSBgJHtlbGUuY2xhc3NOYW1lfSBpbmFjdGl2ZWBcbiAgICAgICAgZWxlLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTBweFwiXG4gICAgICAgIGRyb3Bkb3duQnV0dG9uRWxlLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTBweFwiXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0NoYXJ0cyhjaXR5TmFtZSwgY2l0eUNoYXJ0Q2xhc3NuYW1lKSB7XG4gICAgY29uc3QgY2l0eU5hbWVSZW1vdmVkU3BhY2UgPSBjaXR5TmFtZS5zcGxpdChcIiBcIilbMV1cbiAgICBjb25zdCBjaXR5Q2hhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjaXR5Q2hhcnRDbGFzc25hbWV9LSR7Y2l0eU5hbWVSZW1vdmVkU3BhY2V9YClcblxuXG4gICAgY29uc3QgYWxsQ2l0eUNoYXJ0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2NpdHlDaGFydENsYXNzbmFtZX1gKVxuICAgIGFsbENpdHlDaGFydHMuZm9yRWFjaChjaXR5Q2hhcnQgPT4ge1xuICAgICAgICBpZiAoIWNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbC5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICAgICAgY2l0eUNoYXJ0LmNsYXNzTmFtZS5iYXNlVmFsID0gY2l0eUNoYXJ0LmNsYXNzTmFtZS5iYXNlVmFsICsgXCIgaGlkZGVuXCJcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoY2l0eUNoYXJ0LmNsYXNzTmFtZS5iYXNlVmFsLmluY2x1ZGVzKFwiaGlkZGVuXCIpKSB7XG4gICAgICAgIGNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbCA9IGAke2NpdHlDaGFydENsYXNzbmFtZX0gJHtjaXR5Q2hhcnRDbGFzc25hbWV9LSR7Y2l0eU5hbWVSZW1vdmVkU3BhY2V9YFxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgY2l0eUNoYXJ0LmNsYXNzTmFtZS5iYXNlVmFsID0gY2l0eUNoYXJ0LmNsYXNzTmFtZS5iYXNlVmFsICsgXCIgaGlkZGVuXCJcblxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dUYWJsZXMoY2l0eU5hbWUsIHRhYmxlQ2xhc3NuYW1lKSB7XG4gICAgY29uc3QgY2l0eU5hbWVSZW1vdmVkU3BhY2UgPSBjaXR5TmFtZS5zcGxpdChcIiBcIilbMV1cbiAgICBjb25zdCBjaXR5VGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0YWJsZUNsYXNzbmFtZX0tJHtjaXR5TmFtZVJlbW92ZWRTcGFjZX1gKVxuXG4gICAgY29uc3QgYWxsQ2l0eVRhYmxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3RhYmxlQ2xhc3NuYW1lfWApXG4gICAgYWxsQ2l0eVRhYmxlcy5mb3JFYWNoKGNpdHlUYWJsZSA9PiB7XG4gICAgICAgIGlmICghY2l0eVRhYmxlLmNsYXNzTmFtZS5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICAgICAgY2l0eVRhYmxlLmNsYXNzTmFtZSA9IGNpdHlUYWJsZS5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxuXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNpdHlUYWJsZS5jbGFzc05hbWUuaW5jbHVkZXMoXCJoaWRkZW5cIikpIHtcbiAgICAgICAgY2l0eVRhYmxlLmNsYXNzTmFtZSA9IGAke3RhYmxlQ2xhc3NuYW1lfSAke3RhYmxlQ2xhc3NuYW1lfS0ke2NpdHlOYW1lUmVtb3ZlZFNwYWNlfWBcbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIGNpdHlUYWJsZS5jbGFzc05hbWUgPSBjaXR5VGFibGUuY2xhc3NOYW1lICsgXCIgaGlkZGVuXCJcblxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dUaXRsZShjaXR5TmFtZSwgY2l0eVRpdGxlQ2xhc3NuYW1lKSB7XG4gICAgY29uc3QgY2l0eU5hbWVSZW1vdmVkU3BhY2UgPSBjaXR5TmFtZS5zcGxpdChcIiBcIilbMV1cbiAgICBjb25zdCBjaXR5VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjaXR5VGl0bGVDbGFzc25hbWV9LSR7Y2l0eU5hbWVSZW1vdmVkU3BhY2V9YClcblxuICAgIGNvbnN0IGFsbENpdHlUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2NpdHlUaXRsZUNsYXNzbmFtZX1gKVxuICAgIGFsbENpdHlUaXRsZS5mb3JFYWNoKGNpdHlUaXRsZSA9PiB7XG4gICAgICAgIGlmICghY2l0eVRpdGxlLmNsYXNzTmFtZS5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICAgICAgY2l0eVRpdGxlLmNsYXNzTmFtZSA9IGNpdHlUaXRsZS5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxuXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNpdHlUaXRsZS5jbGFzc05hbWUuaW5jbHVkZXMoXCJoaWRkZW5cIikpIHtcbiAgICAgICAgY2l0eVRpdGxlLmNsYXNzTmFtZSA9IGAke2NpdHlUaXRsZUNsYXNzbmFtZX0gJHtjaXR5VGl0bGVDbGFzc25hbWV9LSR7Y2l0eU5hbWVSZW1vdmVkU3BhY2V9YFxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgY2l0eVRpdGxlLmNsYXNzTmFtZSA9IGNpdHlUaXRsZS5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxuXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1N1bW1hcnkoY2l0eU5hbWUsIGNpdHlTdW1tYXJ5Q2xhc3NuYW1lKSB7XG4gICAgY29uc3QgY2l0eU5hbWVSZW1vdmVkU3BhY2UgPSBjaXR5TmFtZS5zcGxpdChcIiBcIilbMV1cbiAgICBjb25zdCBjaXR5U3VtbWFyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NpdHlTdW1tYXJ5Q2xhc3NuYW1lfS0ke2NpdHlOYW1lUmVtb3ZlZFNwYWNlfWApXG5cbiAgICBjb25zdCBhbGxDaXR5U3VtbWFyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2NpdHlTdW1tYXJ5Q2xhc3NuYW1lfWApXG4gICAgYWxsQ2l0eVN1bW1hcnkuZm9yRWFjaChjaXR5U3VtbWFyeSA9PiB7XG4gICAgICAgIGlmICghY2l0eVN1bW1hcnkuY2xhc3NOYW1lLmluY2x1ZGVzKFwiaGlkZGVuXCIpKSB7XG4gICAgICAgICAgICBjaXR5U3VtbWFyeS5jbGFzc05hbWUgPSBjaXR5U3VtbWFyeS5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxuXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNpdHlTdW1tYXJ5LmNsYXNzTmFtZS5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICBjaXR5U3VtbWFyeS5jbGFzc05hbWUgPSBgJHtjaXR5U3VtbWFyeUNsYXNzbmFtZX0gJHtjaXR5U3VtbWFyeUNsYXNzbmFtZX0tJHtjaXR5TmFtZVJlbW92ZWRTcGFjZX1gXG4gICAgfSBlbHNlIHtcblxuICAgICAgICBjaXR5U3VtbWFyeS5jbGFzc05hbWUgPSBjaXR5U3VtbWFyeS5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxuXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0NpdHlTY29yZShjaXR5TmFtZSwgY2l0eVNjb3JlQ2xhc3NuYW1lKSB7XG4gICAgY29uc3QgY2l0eU5hbWVSZW1vdmVkU3BhY2UgPSBjaXR5TmFtZS5zcGxpdChcIiBcIilbMV1cbiAgICBjb25zdCBjaXR5U2NvcmVFbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjaXR5U2NvcmVDbGFzc25hbWV9LSR7Y2l0eU5hbWVSZW1vdmVkU3BhY2V9YClcblxuICAgIGNvbnN0IGFsbENpdHlTY29yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2NpdHlTY29yZUNsYXNzbmFtZX1gKVxuICAgIGFsbENpdHlTY29yZS5mb3JFYWNoKGNpdHlTY29yZSA9PiB7XG4gICAgICAgIGlmICghY2l0eVNjb3JlLmNsYXNzTmFtZS5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICAgICAgY2l0eVNjb3JlLmNsYXNzTmFtZSA9IGNpdHlTY29yZS5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGlmIChjaXR5U2NvcmVFbGUuY2xhc3NOYW1lLmluY2x1ZGVzKFwiaGlkZGVuXCIpKSB7XG4gICAgICAgIGNpdHlTY29yZUVsZS5jbGFzc05hbWUgPSBgJHtjaXR5U2NvcmVDbGFzc25hbWV9ICR7Y2l0eVNjb3JlQ2xhc3NuYW1lfS0ke2NpdHlOYW1lUmVtb3ZlZFNwYWNlfWBcbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIGNpdHlTY29yZUVsZS5jbGFzc05hbWUgPSBjaXR5U2NvcmUuY2xhc3NOYW1lICsgXCIgaGlkZGVuXCJcblxuICAgIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbGlnaHR1cENhdGVnb3JpZXMoaWQpIHtcbiAgICBjb25zdCBjaXR5Q2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHtpZH1gKVxuICAgIGNvbnN0IGFsbENpdHlDYXRlZ29yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXRlZ29yeVwiKVxuICAgIGFsbENpdHlDYXRlZ29yaWVzLmZvckVhY2goY2l0eUNhdCA9PiB7XG4gICAgICAgIGlmICghY2l0eUNhdC5jbGFzc05hbWUuaW5jbHVkZXMoXCJub25oaWdobGlnaHRlZFwiKSkge1xuICAgICAgICAgICAgY2l0eUNhdC5jbGFzc05hbWUgPSBjaXR5Q2F0LmNsYXNzTmFtZSArIFwiIG5vbmhpZ2hsaWdodGVkXCJcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjaXR5Q2F0ZWdvcnkuZm9yRWFjaChjaXR5Q2F0ID0+IHtcbiAgICAgICAgaWYgKGNpdHlDYXQuY2xhc3NOYW1lLmluY2x1ZGVzKGBjYXRlZ29yeSAke2lkfSBub25oaWdobGlnaHRlZGApKSB7XG4gICAgICAgICAgICBjaXR5Q2F0LmNsYXNzTmFtZSA9IGBjYXRlZ29yeSAke2lkfWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNpdHlDYXQuY2xhc3NOYW1lID0gY2l0eUNhdC5jbGFzc05hbWUgKyBcIiBub25oaWdobGlnaHRlZFwiXG4gICAgICAgIH1cbiAgICB9KVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9wSGlnaGxpZ2h0aW5nKCkge1xuICAgIGNvbnN0IGFsbENpdHlDYXRlZ29yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXRlZ29yeVwiKVxuICAgIGFsbENpdHlDYXRlZ29yaWVzLmZvckVhY2goY2l0eUNhdCA9PiB7XG4gICAgICAgIGlmICghY2l0eUNhdC5jbGFzc05hbWUuaW5jbHVkZXMoXCJub25oaWdobGlnaHRlZFwiKSkge1xuICAgICAgICAgICAgY2l0eUNhdC5jbGFzc05hbWUgPSBjaXR5Q2F0LmNsYXNzTmFtZSArIFwiIG5vbmhpZ2hsaWdodGVkXCJcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VQaWMocGljcyxjaXR5LCBwaWNDbGFzc25hbWUpIHtcbiAgICBjb25zdCBiYWNrZ3JvdW5kRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7cGljQ2xhc3NuYW1lfWApO1xuICAgIGJhY2tncm91bmRFbGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3BpY3NbY2l0eV19KWBcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0SXRlbShlbGUsIHRpdGxlQ2xhc3NuYW1lLCBtZW51TGlzdENsYXNzbmFtZSwgZHJvcGRvd25DbGFzc25hbWUsIGNpdHlDaGFydENsYXNzbmFtZSwgdGFibGVDbGFzc25hbWUsIGNpdHlUaXRsZUNsYXNzbmFtZSwgY2l0eVN1bW1hcnlDbGFzc25hbWUsIHBpY3MsIHBpY0NsYXNzbmFtZSwgY2l0eVNjb3JlQ2xhc3NuYW1lKSB7XG4gICAgY29uc3QgZWxlVGV4dCA9IGVsZS50ZXh0Q29udGVudFxuICAgIGNvbnN0IGNpdHlOYW1lTm9TcGFjZXMgPSBlbGUudGV4dENvbnRlbnQucmVwbGFjZSgvXFxzL2csIFwiXCIpXG4gICAgY29uc3QgdGl0bGVFbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRpdGxlQ2xhc3NuYW1lKVxuICAgIGNvbnN0IG1lbnVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihtZW51TGlzdENsYXNzbmFtZSlcbiAgICB0aXRsZUVsZS50ZXh0Q29udGVudCA9IGVsZVRleHQ7XG4gICAgdG9nZ2xlRHJvcGRvd24obWVudUxpc3QsIGRyb3Bkb3duQ2xhc3NuYW1lKTtcblxuICAgIHNob3dDaGFydHMoZWxlVGV4dCwgY2l0eUNoYXJ0Q2xhc3NuYW1lKVxuICAgIHNob3dUYWJsZXMoZWxlVGV4dCwgdGFibGVDbGFzc25hbWUpXG4gICAgc2hvd1RpdGxlKGVsZVRleHQsIGNpdHlUaXRsZUNsYXNzbmFtZSlcbiAgICBzaG93U3VtbWFyeShlbGVUZXh0LCBjaXR5U3VtbWFyeUNsYXNzbmFtZSlcbiAgICBzaG93Q2l0eVNjb3JlKGVsZVRleHQsIGNpdHlTY29yZUNsYXNzbmFtZSlcbiAgICBjaGFuZ2VQaWMocGljcyxjaXR5TmFtZU5vU3BhY2VzLCBwaWNDbGFzc25hbWUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZURyb3Bkb3duKGNsYXNzTmFtZSwgZHJvcGRvd25NZW51Q2xhc3NuYW1lKSB7XG4gICAgY29uc3QgZHJvcGRvd25NZW51TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NsYXNzTmFtZX1gKVxuICAgIGNvbnN0IGRyb3Bkb3duTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2Ryb3Bkb3duTWVudUNsYXNzbmFtZX1gKVxuXG4gICAgaWYgKCFkcm9wZG93bk1lbnVMaXN0LmNsYXNzTmFtZS5pbmNsdWRlcyhcImluYWN0aXZlXCIpKSB7XG4gICAgICAgIGRyb3Bkb3duTWVudUxpc3QuY2xhc3NOYW1lID0gYCR7Y2xhc3NOYW1lfSBpbmFjdGl2ZWBcbiAgICAgICAgZHJvcGRvd25NZW51LnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTBweFwiO1xuICAgIH1cbn1cblxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9