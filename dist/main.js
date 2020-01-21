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
  "Boston": "/src/images/boston.jpg",
  "Chicago": "/src/images/chicago.jpg",
  "Dallas": "/src/images/dallas.jpg",
  "LosAngeles": "/src/images/la.jpg",
  "Phoenix": "/src/images/phoenix.jpg",
  "Raleigh": "/src/images/raleigh.jpg",
  "Seattle": "/src/images/seattle.jpg",
  "SanFrancisco": "/src/images/sf2.jpg",
  "Toronto": "/src/images/toronto.jpg",
  "NewYork": "/src/images/newyork2.jpg"
};
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
  var table = d3.select(element).append('table').attr("viewBox", "0 0 100 100").attr("class", "".concat(tableClassName, " table-").concat(name, " hidden")).style("border-radius", "10px").style("border", "2px solid black");
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
      return "category ".concat(d.value, " nonhighlighted");
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
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3N1bW1hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vdGl0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vdG90YWxfc2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/ZGMyYSJdLCJuYW1lcyI6WyJjaXR5RGF0YSIsIm5hbWUiLCJzdW1tYXJ5IiwiY2l0eVNjb3JlIiwiY2l0eVBpY3MiLCJjaXR5U2VsZWN0aW9uIiwiY2l0aWVzIiwicmVuZGVyIiwiZDMiLCJqc29uIiwiZXJyb3IiLCJkYXRhIiwidGVsZXBvcnRfY2l0eV9zY29yZSIsImNhdGVnb3JpZXMiLCJjcmVhdGVCYXJHcmFwaCIsImNyZWF0ZVRhYmxlIiwiY3JlYXRlVGl0bGUiLCJjcmVhdGVUaXRsZTIiLCJjcmVhdGVTdW1tYXJ5IiwiY3JlYXRlU3VtbWFyeTIiLCJjcmVhdGVUb3RhbFNjb3JlIiwiY3JlYXRlVG90YWxTY29yZTIiLCJyZW5kZXJhbGwiLCJmb3JFYWNoIiwiY2l0eSIsInRpdGxlRHJvcERvd25CdXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0aXRsZURyb3BEb3duQnV0dG9uUmlnaHQiLCJtZW51TGlzdCIsIm1lbnVMaXN0UmlnaHQiLCJjaXR5TGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjaXR5TGlzdFJpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiVXRpbCIsIndpbmRvdyIsImVsZW1lbnQiLCJ3aWR0aCIsImhlaWdodCIsImFycmF5TGVuZ3RoIiwibGVuZ3RoIiwibWF4VmFsdWUiLCJtYXgiLCJkIiwic2NvcmVfb3V0X29mXzEwIiwieF9heGlzTGVuZ3RoIiwieV9heGlzTGVuZ3RoIiwiY2hhcnRDbGFzc05hbWUiLCJ4U2NhbGUiLCJzY2FsZUxpbmVhciIsImRvbWFpbiIsInJhbmdlIiwic3ZnIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsInNlbGVjdEFsbCIsImVudGVyIiwiaSIsImNvbG9yIiwib24iLCJuZXdTdHIiLCJyZXBsYWNlIiwibmV3U3RyMiIsInRvb2x0aXAiLCJzdHlsZSIsInRleHQiLCJwYWdlWSIsInBhZ2VYIiwidG9GaXhlZCIsImNpdHlTdW1tYXJ5RWxlIiwiY3JlYXRlRWxlbWVudCIsInNlY3Rpb25FbGUiLCJ0ZXh0Q29udGVudCIsImNsYXNzTmFtZSIsImluc2VydEFkamFjZW50RWxlbWVudCIsImNvbHVtbnMiLCJjb2x1bW5OYW1lcyIsInRhYmxlQ2xhc3NOYW1lIiwidGFibGUiLCJoZWFkZXIiLCJ0YWJsZWJvZHkiLCJyb3dzIiwiY2VsbHMiLCJyb3ciLCJtYXAiLCJjb2x1bW4iLCJ2YWx1ZSIsImNpdHlOYW1lIiwic3BhY2VyTGVmdCIsImluc2VydEJlZm9yZSIsInNwYWNlclJpZ2h0IiwiY2l0eVNjb3JlRWxlIiwic2NvcmVEaXYiLCJhcHBlbmRDaGlsZCIsInRvZ2dsZURyb3Bkb3duIiwiZWxlIiwiZHJvcGRvd25CdXR0b25FbGUiLCJpbmNsdWRlcyIsInNwbGl0IiwiYm9yZGVyUmFkaXVzIiwic2hvd0NoYXJ0cyIsImNpdHlDaGFydENsYXNzbmFtZSIsImNpdHlOYW1lUmVtb3ZlZFNwYWNlIiwiY2l0eUNoYXJ0IiwiYWxsQ2l0eUNoYXJ0cyIsImJhc2VWYWwiLCJzaG93VGFibGVzIiwidGFibGVDbGFzc25hbWUiLCJjaXR5VGFibGUiLCJhbGxDaXR5VGFibGVzIiwic2hvd1RpdGxlIiwiY2l0eVRpdGxlQ2xhc3NuYW1lIiwiY2l0eVRpdGxlIiwiYWxsQ2l0eVRpdGxlIiwic2hvd1N1bW1hcnkiLCJjaXR5U3VtbWFyeUNsYXNzbmFtZSIsImNpdHlTdW1tYXJ5IiwiYWxsQ2l0eVN1bW1hcnkiLCJzaG93Q2l0eVNjb3JlIiwiY2l0eVNjb3JlQ2xhc3NuYW1lIiwiYWxsQ2l0eVNjb3JlIiwibGlnaHR1cENhdGVnb3JpZXMiLCJpZCIsImNpdHlDYXRlZ29yeSIsImFsbENpdHlDYXRlZ29yaWVzIiwiY2l0eUNhdCIsInN0b3BIaWdobGlnaHRpbmciLCJjaGFuZ2VQaWMiLCJwaWNzIiwicGljQ2xhc3NuYW1lIiwiYmFja2dyb3VuZEVsZSIsImJhY2tncm91bmRJbWFnZSIsInNlbGVjdEl0ZW0iLCJ0aXRsZUNsYXNzbmFtZSIsIm1lbnVMaXN0Q2xhc3NuYW1lIiwiZHJvcGRvd25DbGFzc25hbWUiLCJlbGVUZXh0IiwiY2l0eU5hbWVOb1NwYWNlcyIsInRpdGxlRWxlIiwiY2xvc2VEcm9wZG93biIsImRyb3Bkb3duTWVudUNsYXNzbmFtZSIsImRyb3Bkb3duTWVudUxpc3QiLCJkcm9wZG93bk1lbnUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFB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dUIrRyxpQkFBdkIsQ0FBakI7QUFDQUksVUFBUSxDQUFDbEUsV0FBVCxHQUF1QmdFLE9BQXZCO0FBQ0ExQyxnQkFBYyxDQUFDckUsUUFBRCxFQUFXOEcsaUJBQVgsQ0FBZDtBQUVBbkMsWUFBVSxDQUFDb0MsT0FBRCxFQUFVbkMsa0JBQVYsQ0FBVjtBQUNBSyxZQUFVLENBQUM4QixPQUFELEVBQVU3QixjQUFWLENBQVY7QUFDQUcsV0FBUyxDQUFDMEIsT0FBRCxFQUFVekIsa0JBQVYsQ0FBVDtBQUNBRyxhQUFXLENBQUNzQixPQUFELEVBQVVyQixvQkFBVixDQUFYO0FBQ0FHLGVBQWEsQ0FBQ2tCLE9BQUQsRUFBVWpCLGtCQUFWLENBQWI7QUFDQVEsV0FBUyxDQUFDQyxJQUFELEVBQU1TLGdCQUFOLEVBQXdCUixZQUF4QixDQUFUO0FBQ0g7QUFFTSxTQUFTVSxhQUFULENBQXVCbEUsU0FBdkIsRUFBa0NtRSxxQkFBbEMsRUFBeUQ7QUFDNUQsTUFBTUMsZ0JBQWdCLEdBQUd2SCxRQUFRLENBQUNDLGFBQVQsWUFBMkJrRCxTQUEzQixFQUF6QjtBQUNBLE1BQU1xRSxZQUFZLEdBQUd4SCxRQUFRLENBQUNDLGFBQVQsWUFBMkJxSCxxQkFBM0IsRUFBckI7O0FBRUEsTUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ3BFLFNBQWpCLENBQTJCd0IsUUFBM0IsQ0FBb0MsVUFBcEMsQ0FBTCxFQUFzRDtBQUNsRDRDLG9CQUFnQixDQUFDcEUsU0FBakIsYUFBZ0NBLFNBQWhDO0FBQ0FxRSxnQkFBWSxDQUFDOUUsS0FBYixDQUFtQm1DLFlBQW5CLEdBQWtDLE1BQWxDO0FBQ0g7QUFDSixDOzs7Ozs7Ozs7OztBQ2pMRCx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0IGNyZWF0ZUJhckdyYXBoIGZyb20gJy4vbWFpbi9jaGFydC5qcyc7XG5pbXBvcnQgY3JlYXRlVGFibGUgZnJvbSAnLi9tYWluL3RhYmxlLmpzJztcbmltcG9ydCB7Y3JlYXRlVGl0bGUsIGNyZWF0ZVRpdGxlMn0gZnJvbSAnLi9tYWluL3RpdGxlLmpzJztcbmltcG9ydCB7Y3JlYXRlU3VtbWFyeSwgY3JlYXRlU3VtbWFyeTJ9IGZyb20gJy4vbWFpbi9zdW1tYXJ5JztcbmltcG9ydCB7Y3JlYXRlVG90YWxTY29yZSwgY3JlYXRlVG90YWxTY29yZTJ9IGZyb20gJy4vbWFpbi90b3RhbF9zY29yZSc7XG5pbXBvcnQgKiBhcyBVdGlsIGZyb20gJy4vbWFpbi91dGlsLmpzJztcblxuXG5cbmxldCBjaXR5RGF0YSA9IFtdXG5sZXQgbmFtZSwgc3VtbWFyeSwgY2l0eVNjb3JlO1xuXG5jb25zdCBjaXR5UGljcyA9IHtcbiAgICBcIkJvc3RvblwiOiBcIi9zcmMvaW1hZ2VzL2Jvc3Rvbi5qcGdcIixcbiAgICBcIkNoaWNhZ29cIjogXCIvc3JjL2ltYWdlcy9jaGljYWdvLmpwZ1wiLFxuICAgIFwiRGFsbGFzXCI6IFwiL3NyYy9pbWFnZXMvZGFsbGFzLmpwZ1wiLFxuICAgIFwiTG9zQW5nZWxlc1wiOiBcIi9zcmMvaW1hZ2VzL2xhLmpwZ1wiLFxuICAgIFwiUGhvZW5peFwiOiBcIi9zcmMvaW1hZ2VzL3Bob2VuaXguanBnXCIsXG4gICAgXCJSYWxlaWdoXCI6IFwiL3NyYy9pbWFnZXMvcmFsZWlnaC5qcGdcIixcbiAgICBcIlNlYXR0bGVcIjogXCIvc3JjL2ltYWdlcy9zZWF0dGxlLmpwZ1wiLFxuICAgIFwiU2FuRnJhbmNpc2NvXCI6IFwiL3NyYy9pbWFnZXMvc2YyLmpwZ1wiLFxuICAgIFwiVG9yb250b1wiOiBcIi9zcmMvaW1hZ2VzL3Rvcm9udG8uanBnXCIsXG4gICAgXCJOZXdZb3JrXCI6IFwiL3NyYy9pbWFnZXMvbmV3eW9yazIuanBnXCJcbn1cblxubGV0IGNpdHlTZWxlY3Rpb24gPSBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9remVkLTEvQ2l0eS1TY29yZS9tYXN0ZXIvc3JjL2RhdGEvbmV3eW9yay5qc29uXCJcblxuLy8gY29uc3QgY2l0aWVzID0gW1xuLy8gICAgIFwiLi9zcmMvZGF0YS9uZXd5b3JrLmpzb25cIiwgXCIuL3NyYy9kYXRhL3NhbmZyYW4uanNvblwiLCBcIi4vc3JjL2RhdGEvc2VhdHRsZS5qc29uXCIsIFxuLy8gICAgIFwiLi9zcmMvZGF0YS90b3JvbnRvLmpzb25cIiwgXCIuL3NyYy9kYXRhL2Jvc3Rvbi5qc29uXCIsIFwiLi9zcmMvZGF0YS9jaGljYWdvLmpzb25cIiwgXG4vLyAgICAgXCIuL3NyYy9kYXRhL2xvc2FuZ2VsZXMuanNvblwiLCBcIi4vc3JjL2RhdGEvZGFsbGFzLmpzb25cIiwgXCIuL3NyYy9kYXRhL3Bob2VuaXguanNvblwiLCBcbi8vICAgICBcIi4vc3JjL2RhdGEvcmFsZWlnaC5qc29uXCJcbi8vICAgICBdIFxuY29uc3QgY2l0aWVzID0gW1xuICAgIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2t6ZWQtMS9DaXR5LVNjb3JlL21hc3Rlci9zcmMvZGF0YS9uZXd5b3JrLmpzb25cIiwgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20va3plZC0xL0NpdHktU2NvcmUvbWFzdGVyL3NyYy9kYXRhL3NhbmZyYW4uanNvblwiLCBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9remVkLTEvQ2l0eS1TY29yZS9tYXN0ZXIvc3JjL2RhdGEvc2VhdHRsZS5qc29uXCIsIFxuICAgIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2t6ZWQtMS9DaXR5LVNjb3JlL21hc3Rlci9zcmMvZGF0YS90b3JvbnRvLmpzb25cIiwgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20va3plZC0xL0NpdHktU2NvcmUvbWFzdGVyL3NyYy9kYXRhL2Jvc3Rvbi5qc29uXCIsIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2t6ZWQtMS9DaXR5LVNjb3JlL21hc3Rlci9zcmMvZGF0YS9jaGljYWdvLmpzb25cIiwgXG4gICAgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20va3plZC0xL0NpdHktU2NvcmUvbWFzdGVyL3NyYy9kYXRhL2xvc2FuZ2VsZXMuanNvblwiLCBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9remVkLTEvQ2l0eS1TY29yZS9tYXN0ZXIvc3JjL2RhdGEvZGFsbGFzLmpzb25cIiwgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20va3plZC0xL0NpdHktU2NvcmUvbWFzdGVyL3NyYy9kYXRhL3Bob2VuaXguanNvblwiLCBcbiAgICBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9remVkLTEvQ2l0eS1TY29yZS9tYXN0ZXIvc3JjL2RhdGEvcmFsZWlnaC5qc29uXCJcbiAgICBdIFxuXG5cbmZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBkMy5qc29uKGNpdHlTZWxlY3Rpb24sIGZ1bmN0aW9uIChlcnJvciwgZGF0YSkge1xuICAgICAgICBuYW1lID0gZGF0YS5uYW1lXG4gICAgICAgIHN1bW1hcnkgPSBkYXRhLnN1bW1hcnlcbiAgICAgICAgY2l0eVNjb3JlID0gZGF0YS50ZWxlcG9ydF9jaXR5X3Njb3JlXG4gICAgICAgIGNpdHlEYXRhID0gZGF0YS5jYXRlZ29yaWVzXG4gICAgICAgIGNyZWF0ZUJhckdyYXBoKGNpdHlEYXRhLCBuYW1lLCBcIi5jaGFydFwiKTtcbiAgICAgICAgY3JlYXRlVGFibGUoY2l0eURhdGEsIG5hbWUsIFwiLnByb2ZpbGVcIik7XG4gICAgICAgIGNyZWF0ZUJhckdyYXBoKGNpdHlEYXRhLCBuYW1lLCBcIi5jaGFydC0yXCIpO1xuICAgICAgICBjcmVhdGVUYWJsZShjaXR5RGF0YSwgbmFtZSwgXCIucHJvZmlsZS0yXCIpO1xuICAgICAgICBjcmVhdGVUaXRsZShuYW1lKTtcbiAgICAgICAgY3JlYXRlVGl0bGUyKG5hbWUpO1xuICAgICAgICBjcmVhdGVTdW1tYXJ5KG5hbWUsIHN1bW1hcnkpO1xuICAgICAgICBjcmVhdGVTdW1tYXJ5MihuYW1lLCBzdW1tYXJ5KTtcbiAgICAgICAgY3JlYXRlVG90YWxTY29yZShuYW1lLGNpdHlTY29yZSxcIi5jaXR5LXNjb3JlLWxlZnRcIik7XG4gICAgICAgIGNyZWF0ZVRvdGFsU2NvcmUyKG5hbWUsY2l0eVNjb3JlLFwiLmNpdHktc2NvcmUtcmlnaHRcIik7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gcmVuZGVyYWxsKCkge1xuICAgIGNpdGllcy5mb3JFYWNoKGNpdHkgPT4ge1xuICAgICAgICBjaXR5U2VsZWN0aW9uID0gY2l0eSBcbiAgICAgICAgcmVuZGVyKClcbiAgICB9KTtcbn1cblxuXG4vLyBjb25zdCB0aXRsZURyb3BEb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZS1kcm9wZG93bi13cmFwcGVyXCIpXG5jb25zdCB0aXRsZURyb3BEb3duQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKVxuY29uc3QgdGl0bGVEcm9wRG93bkJ1dHRvblJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZS1yaWdodFwiKVxuY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtbGlzdFwiKVxuY29uc3QgbWVudUxpc3RSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1saXN0LXJpZ2h0XCIpXG5jb25zdCBjaXR5TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2l0eVwiKVxuY29uc3QgY2l0eUxpc3RSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2l0eS0yXCIpXG5cbnRpdGxlRHJvcERvd25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICByZXR1cm4gVXRpbC50b2dnbGVEcm9wZG93bihtZW51TGlzdCwgXCIuZHJvcGRvd24tbWVudVwiKX0pXG50aXRsZURyb3BEb3duQnV0dG9uUmlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICByZXR1cm4gVXRpbC50b2dnbGVEcm9wZG93bihtZW51TGlzdFJpZ2h0LCBcIi5kcm9wZG93bi1tZW51LXJpZ2h0XCIpfSlcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFV0aWwuY2xvc2VEcm9wZG93bihcIm1lbnUtbGlzdFwiLCBcImRyb3Bkb3duLW1lbnVcIikpXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBVdGlsLmNsb3NlRHJvcGRvd24oXCJtZW51LWxpc3QtcmlnaHRcIiwgXCJkcm9wZG93bi1tZW51LXJpZ2h0XCIpKVxuXG5jaXR5TGlzdC5mb3JFYWNoKGNpdHkgPT4ge1xuICAgIGNpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBVdGlsLnNlbGVjdEl0ZW0oY2l0eSwgXCIudGl0bGVcIiwgXCIubWVudS1saXN0XCIsIFwiLmRyb3Bkb3duLW1lbnVcIiwgXCJjaXR5Y2hhcnRcIiwgXCJ0YWJsZVwiLCBcImNpdHl0aXRsZVwiLCBcImNpdHlTdW1tYXJ5XCIsIGNpdHlQaWNzLCBcImJvZHktbGVmdFwiLCBcInNjb3JlLWxlZnRcIikpXG59KVxuY2l0eUxpc3RSaWdodC5mb3JFYWNoKGNpdHkgPT4ge1xuICAgIGNpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBVdGlsLnNlbGVjdEl0ZW0oY2l0eSwgXCIudGl0bGUtcmlnaHRcIiwgXCIubWVudS1saXN0LXJpZ2h0XCIsIFwiLmRyb3Bkb3duLW1lbnUtcmlnaHRcIiwgXCJjaXR5Y2hhcnQtcmlnaHRcIiwgXCJ0YWJsZS1yaWdodFwiLCBcImNpdHl0aXRsZS1yaWdodFwiLCBcImNpdHlTdW1tYXJ5LXJpZ2h0XCIsIGNpdHlQaWNzLCBcImJvZHktcmlnaHRcIiwgXCJzY29yZS1yaWdodFwiKSlcbn0pXG5cbnJlbmRlcmFsbCgpXG5cblxuXG4vLyBjb25zdCBzY29yZXMgPSBbMi4yOTEsIDMuNzksIDguMzY3LCA3LjU1MTAwMDAwMDAwMDAwMSwgMi44ODQ1LCA0LjUyMzc1MDAwMDAwMDAwMSwgOC42NzEsXG4vLyAgICAgNS42MzY1LCA4LjcyNDMzMzMzMzMzMzMzMiwgNS43MTQ1LCA3LjU2MDI1MDAwMDAwMDAwMSwgNi41MTQ1LCA0Ljc3Mixcbi8vICAgICA0Ljk0MDQ5OTk5OTk5OTk5OSwgOC4xMTU1LCA4LjA4OTUsIDcuMjA5NDk5OTk5OTk5OTk4NVxuXG4vLyBdIiwiaW1wb3J0ICogYXMgVXRpbCBmcm9tIFwiLi91dGlsXCI7XG5cblxuZnVuY3Rpb24gY3JlYXRlQmFyR3JhcGgoY2l0eURhdGEsIG5hbWUsIGVsZW1lbnQpIHtcbiAgICAvLyBjb25zdCB3aWR0aCA9IDQwMDtcbiAgICAvLyBjb25zdCBoZWlnaHQgPSA1MDA7XG4gICAgY29uc3Qgd2lkdGggPSA2MDA7XG4gICAgY29uc3QgaGVpZ2h0ID0gNzAwO1xuXG4gICAgY29uc3QgYXJyYXlMZW5ndGggPSBjaXR5RGF0YS5sZW5ndGg7IFxuICAgIGNvbnN0IG1heFZhbHVlID0gZDMubWF4KGNpdHlEYXRhLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gK2Quc2NvcmVfb3V0X29mXzEwOyB9KTsgXG4gICAgLy8gY29uc3QgeF9heGlzTGVuZ3RoID0gNDAwOyBcbiAgICAvLyBjb25zdCB5X2F4aXNMZW5ndGggPSA0NzE7IFxuICAgIGNvbnN0IHhfYXhpc0xlbmd0aCA9IDYwMDsgXG4gICAgY29uc3QgeV9heGlzTGVuZ3RoID0gNjcxOyBcblxuICAgIGNvbnN0IGNoYXJ0Q2xhc3NOYW1lID0gZWxlbWVudCA9PT0gXCIuY2hhcnRcIiA/IFwiY2l0eWNoYXJ0XCIgOiBcImNpdHljaGFydC1yaWdodFwiXG5cblxuICAgIGNvbnN0IHhTY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgLmRvbWFpbihbMCwgbWF4VmFsdWVdKVxuICAgICAgICAucmFuZ2UoWzAsIHhfYXhpc0xlbmd0aF0pO1xuXG4gICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KGVsZW1lbnQpXG4gICAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgLmF0dHIoXCJ2aWV3Qm94XCIsIGAwIDAgJHt3aWR0aH0gJHtoZWlnaHR9YClcbiAgICAgICAgLy8gLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aClcbiAgICAgICAgLy8gLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0KTtcblxuICAgIGlmIChuYW1lID09PSBcIk5ldyBZb3JrXCIgJiYgZWxlbWVudCA9PT0gXCIuY2hhcnRcIikge1xuICAgICAgICBzdmcuYXR0cihcImNsYXNzXCIsIGAke2NoYXJ0Q2xhc3NOYW1lfSAke2NoYXJ0Q2xhc3NOYW1lfS0ke25hbWV9YClcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQgPT09IFwiLmNoYXJ0XCIgJiYgKG5hbWUgIT09IFwiTmV3IFlvcmtcIikpIHtcbiAgICAgICAgc3ZnLmF0dHIoXCJjbGFzc1wiLCBgJHtjaGFydENsYXNzTmFtZX0gJHtjaGFydENsYXNzTmFtZX0tJHtuYW1lfSBoaWRkZW5gKVxuICAgIH0gXG5cbiAgICBpZiAobmFtZSA9PT0gXCJTYW4gRnJhbmNpc2NvXCIgJiYgZWxlbWVudCA9PT0gXCIuY2hhcnQtMlwiKSB7XG4gICAgICAgIHN2Zy5hdHRyKFwiY2xhc3NcIiwgYCR7Y2hhcnRDbGFzc05hbWV9ICR7Y2hhcnRDbGFzc05hbWV9LSR7bmFtZX1gKVxuICAgIH0gZWxzZSBpZiAoZWxlbWVudCA9PT0gXCIuY2hhcnQtMlwiICYmIChuYW1lICE9PSBcIlNhbiBGcmFuY2lzY29cIikpeyBcbiAgICAgICAgc3ZnLmF0dHIoXCJjbGFzc1wiLCBgJHtjaGFydENsYXNzTmFtZX0gJHtjaGFydENsYXNzTmFtZX0tJHtuYW1lfSBoaWRkZW5gKVxuICAgIH1cblxuXG4gICAgc3ZnLnNlbGVjdEFsbChcInJlY3RcIilcbiAgICAgICAgLmRhdGEoY2l0eURhdGEpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIGkgKiAoeV9heGlzTGVuZ3RoIC8gYXJyYXlMZW5ndGgpICsgMzA7XG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKFwieFwiLCAwKVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCAoeV9heGlzTGVuZ3RoIC8gYXJyYXlMZW5ndGgpIC0gMSlcbiAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIHhTY2FsZShkLnNjb3JlX291dF9vZl8xMCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKFwiZmlsbFwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIGQuY29sb3JcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIGBiYXIgJHtkLm5hbWV9YDtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdTdHIgPSBkLm5hbWUucmVwbGFjZSgvXFxzL2csIFwiXCIpXG4gICAgICAgICAgICBjb25zdCBuZXdTdHIyID0gbmV3U3RyLnJlcGxhY2UoL1smXS9nLCBcIlwiKVxuICAgICAgICAgICAgVXRpbC5saWdodHVwQ2F0ZWdvcmllcyhuZXdTdHIyKVxuICAgICAgICAgICAgcmV0dXJuIHRvb2x0aXAuc3R5bGUoXCJ2aXNpYmlsaXR5XCIsIFwidmlzaWJsZVwiKS50ZXh0KGQubmFtZSArIFwiOiBcIiArIGQuc2NvcmVfb3V0X29mXzEwKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwibW91c2Vtb3ZlXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9vbHRpcC5zdHlsZShcInRvcFwiLCAoZDMuZXZlbnQucGFnZVkgLSAxMCkgKyBcInB4XCIpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwibGVmdFwiLCAoZDMuZXZlbnQucGFnZVggKyAxMCkgKyBcInB4XCIpLnRleHQoZC5uYW1lICsgXCI6IFwiICsgZC5zY29yZV9vdXRfb2ZfMTAudG9GaXhlZCgyKSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICBVdGlsLnN0b3BIaWdobGlnaHRpbmcoKVxuICAgICAgICAgICAgcmV0dXJuIHRvb2x0aXAuc3R5bGUoXCJ2aXNpYmlsaXR5XCIsIFwiaGlkZGVuXCIpXG4gICAgICAgIH0pXG5cbiAgICBjb25zdCB0b29sdGlwID0gZDMuc2VsZWN0KFwiLmNoYXJ0XCIpXG4gICAgICAgIC5hcHBlbmQoXCJkaXZcIilcbiAgICAgICAgLnN0eWxlKFwicG9zaXRpb25cIiwgXCJhYnNvbHV0ZVwiKVxuICAgICAgICAuc3R5bGUoXCJmb250LWZhbWlseVwiLCBcInJvYm90b1wiKVxuICAgICAgICAuc3R5bGUoXCJmb250LXNpemVcIiwgXCIxNHB4XCIpXG4gICAgICAgIC5zdHlsZShcInotaW5kZXhcIiwgXCIzXCIpXG4gICAgICAgIC5zdHlsZShcInZpc2liaWxpdHlcIiwgXCJoaWRkZW5cIilcbiAgICAgICAgLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcIndoaXRlXCIpXG4gICAgICAgIC5zdHlsZShcIndpZHRoXCIsIFwiYXV0b1wiKVxuICAgICAgICAuc3R5bGUoXCJtYXJnaW5cIiwgXCIwIGF1dG9cIilcbiAgICAgICAgLnN0eWxlKFwiYm9yZGVyLXJhZGl1c1wiLCBcIjEwcHhcIilcbiAgICAgICAgLnN0eWxlKFwicGFkZGluZ1wiLCBcIjEwcHhcIilcbiAgICAgICAgLnN0eWxlKFwiYm9yZGVyXCIsIFwiMnB4IHNvbGlkIGJsYWNrXCIpXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVCYXJHcmFwaDsiLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlU3VtbWFyeShuYW1lLCBzdW1tYXJ5KSB7XG4gICAgY29uc3QgY2l0eVN1bW1hcnlFbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIGNvbnN0IHNlY3Rpb25FbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlLWRyb3Bkb3duLXdyYXBwZXJcIilcblxuICAgIGNpdHlTdW1tYXJ5RWxlLnRleHRDb250ZW50ID0gc3VtbWFyeS5yZXBsYWNlKC9bPF0uezEsMn1bPl0vZywgXCJcIilcblxuICAgIGlmIChuYW1lID09PSBcIk5ldyBZb3JrXCIpIHtcbiAgICAgICAgY2l0eVN1bW1hcnlFbGUuY2xhc3NOYW1lID0gYGNpdHlTdW1tYXJ5IGNpdHlTdW1tYXJ5LSR7bmFtZX1gXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2l0eVN1bW1hcnlFbGUuY2xhc3NOYW1lID0gYGNpdHlTdW1tYXJ5IGNpdHlTdW1tYXJ5LSR7bmFtZX0gaGlkZGVuYFxuICAgIH1cblxuICAgIHNlY3Rpb25FbGUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJlbmRcIiwgY2l0eVN1bW1hcnlFbGUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdW1tYXJ5MihuYW1lLCBzdW1tYXJ5KSB7XG4gICAgY29uc3QgY2l0eVN1bW1hcnlFbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIGNvbnN0IHNlY3Rpb25FbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlLWRyb3Bkb3duLXdyYXBwZXItcmlnaHRcIilcblxuICAgIGNpdHlTdW1tYXJ5RWxlLnRleHRDb250ZW50ID0gc3VtbWFyeS5yZXBsYWNlKC9bPF0uezEsMn1bPl0vZywgXCJcIilcblxuICAgIGlmIChuYW1lID09PSBcIlNhbiBGcmFuY2lzY29cIikge1xuICAgICAgICBjaXR5U3VtbWFyeUVsZS5jbGFzc05hbWUgPSBgY2l0eVN1bW1hcnktcmlnaHQgY2l0eVN1bW1hcnktcmlnaHQtJHtuYW1lfWBcbiAgICB9IGVsc2Uge1xuICAgICAgICBjaXR5U3VtbWFyeUVsZS5jbGFzc05hbWUgPSBgY2l0eVN1bW1hcnktcmlnaHQgY2l0eVN1bW1hcnktcmlnaHQtJHtuYW1lfSBoaWRkZW5gXG4gICAgfVxuXG4gICAgc2VjdGlvbkVsZS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmVuZFwiLCBjaXR5U3VtbWFyeUVsZSlcbn1cblxuIiwiaW1wb3J0ICogYXMgVXRpbCBmcm9tICcuL3V0aWwuanMnXG5cbmZ1bmN0aW9uIGNyZWF0ZVRhYmxlKGNpdHlEYXRhLCBuYW1lLCBlbGVtZW50KSB7XG5cbiAgICBjb25zdCBjb2x1bW5zID0gW1wibmFtZVwiLCBcInNjb3JlX291dF9vZl8xMFwiXVxuICAgIGNvbnN0IGNvbHVtbk5hbWVzID0gW1wiQ2F0ZWdvcmllc1wiLCBcIlNjb3JlXCJdXG5cbiAgICBjb25zdCB0YWJsZUNsYXNzTmFtZSA9IGVsZW1lbnQgPT09IFwiLnByb2ZpbGVcIiA/IFwidGFibGVcIiA6IFwidGFibGUtcmlnaHRcIlxuXG5cbiAgICBsZXQgdGFibGUgPSBkMy5zZWxlY3QoZWxlbWVudClcbiAgICAgICAgLmFwcGVuZCgndGFibGUnKVxuICAgICAgICAuYXR0cihcInZpZXdCb3hcIiwgYDAgMCAxMDAgMTAwYClcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBgJHt0YWJsZUNsYXNzTmFtZX0gdGFibGUtJHtuYW1lfSBoaWRkZW5gKVxuICAgICAgICAuc3R5bGUoXCJib3JkZXItcmFkaXVzXCIsIFwiMTBweFwiKVxuICAgICAgICAuc3R5bGUoXCJib3JkZXJcIiwgXCIycHggc29saWQgYmxhY2tcIik7XG4gICAgbGV0IGhlYWRlciA9IHRhYmxlXG4gICAgICAgIC5hcHBlbmQoXCJoZWFkZXJcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInRhYmxlLWhlYWRlclwiKTtcbiAgICBsZXQgdGFibGVib2R5ID0gdGFibGUuYXBwZW5kKFwidGFibGVib2R5XCIpO1xuXG4gICAgLy8gaWYgKG5hbWUgPT09IFwiTmV3IFlvcmtcIikge1xuICAgIC8vICAgICB0YWJsZS5hdHRyKFwiY2xhc3NcIiwgYCR7dGFibGVDbGFzc05hbWV9IHRhYmxlLSR7bmFtZX1gKVxuXG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgICAgdGFibGUuYXR0cihcImNsYXNzXCIsIGAke3RhYmxlQ2xhc3NOYW1lfSB0YWJsZS0ke25hbWV9IGhpZGRlbmApXG4gICAgLy8gfVxuXG4gICAgaWYgKG5hbWUgPT09IFwiTmV3IFlvcmtcIiAmJiBlbGVtZW50ID09PSBcIi5wcm9maWxlXCIpIHtcbiAgICAgICAgdGFibGUuYXR0cihcImNsYXNzXCIsIGAke3RhYmxlQ2xhc3NOYW1lfSB0YWJsZS0ke25hbWV9YClcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQgPT09IFwiLnByb2ZpbGVcIiAmJiAobmFtZSAhPT0gXCJOZXcgWW9ya1wiKSkge1xuICAgICAgICB0YWJsZS5hdHRyKFwiY2xhc3NcIiwgYCR7dGFibGVDbGFzc05hbWV9IHRhYmxlLSR7bmFtZX0gaGlkZGVuYClcbiAgICB9XG5cbiAgICBpZiAobmFtZSA9PT0gXCJTYW4gRnJhbmNpc2NvXCIgJiYgZWxlbWVudCA9PT0gXCIucHJvZmlsZS0yXCIpIHtcbiAgICAgICAgdGFibGUuYXR0cihcImNsYXNzXCIsIGAke3RhYmxlQ2xhc3NOYW1lfSAke3RhYmxlQ2xhc3NOYW1lfS0ke25hbWV9YClcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQgPT09IFwiLnByb2ZpbGUtMlwiICYmIChuYW1lICE9PSBcIlNhbiBGcmFuY2lzY29cIikpIHtcbiAgICAgICAgdGFibGUuYXR0cihcImNsYXNzXCIsIGAke3RhYmxlQ2xhc3NOYW1lfSAke3RhYmxlQ2xhc3NOYW1lfS0ke25hbWV9IGhpZGRlbmApXG4gICAgfVxuXG4gICAgaGVhZGVyXG4gICAgICAgIC5hcHBlbmQoXCJ0clwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiaGVhZGVyLXdyYXBwZXJcIilcbiAgICAgICAgLnN0eWxlKFwiY29sb3JcIiwgXCJibHVlXCIpXG4gICAgICAgIC5zZWxlY3RBbGwoXCJ0aFwiKVxuICAgICAgICAuZGF0YShjb2x1bW5OYW1lcylcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZChcInRoXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBkO1xuICAgICAgICB9KVxuICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFsaWduXCIsIFwiY2VudGVyXCIpXG4gICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gZDtcbiAgICAgICAgfSlcblxuXG5cbiAgICBsZXQgcm93cyA9IHRhYmxlYm9keVxuICAgICAgICAuc2VsZWN0QWxsKFwidHJcIilcbiAgICAgICAgLmRhdGEoY2l0eURhdGEpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJ0clwiKTtcblxuXG4gICAgbGV0IGNlbGxzID0gcm93cy5zZWxlY3RBbGwoXCJ0ZFwiKVxuICAgICAgICAuZGF0YShmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgICByZXR1cm4gY29sdW1ucy5tYXAoZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbjogY29sdW1uLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcm93W2NvbHVtbl1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwidGRcIilcbiAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZC52YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIGlmIChkLnZhbHVlLnRvRml4ZWQoMikgPT09IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIjEwLjAgLzEwXCJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYCR7ZC52YWx1ZS50b0ZpeGVkKDIpfSAvMTBgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZC52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGQudmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTdHIgPSBkLnZhbHVlLnJlcGxhY2UoL1xccy9nLCBcIlwiKVxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1N0cjIgPSBuZXdTdHIucmVwbGFjZSgvWyZdL2csIFwiXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGBjYXRlZ29yeSAke25ld1N0cjJ9IG5vbmhpZ2hsaWdodGVkYFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYGNhdGVnb3J5ICR7ZC52YWx1ZX0gbm9uaGlnaGxpZ2h0ZWRgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKFwiaWRcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZC52YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1N0ciA9IGQudmFsdWUucmVwbGFjZSgvXFxzL2csIFwiXCIpXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3RyMiA9IG5ld1N0ci5yZXBsYWNlKC9bJl0vZywgXCJcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3U3RyMlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZC52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUYWJsZTsiLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlVGl0bGUobmFtZSkge1xuICAgIGNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG4gICAgY29uc3Qgc2VjdGlvbkVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGUtZHJvcGRvd24td3JhcHBlclwiKVxuICAgIGNvbnN0IHNwYWNlckxlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpdHktc2NvcmUtbGVmdFwiKVxuXG4gICAgY2l0eU5hbWUudGV4dENvbnRlbnQgPSBuYW1lXG5cbiAgICBpZiAobmFtZSA9PT0gXCJOZXcgWW9ya1wiKSB7XG4gICAgICAgIGNpdHlOYW1lLmNsYXNzTmFtZSA9IGBjaXR5dGl0bGUgY2l0eXRpdGxlLSR7bmFtZX1gXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2l0eU5hbWUuY2xhc3NOYW1lID0gYGNpdHl0aXRsZSBjaXR5dGl0bGUtJHtuYW1lfSBoaWRkZW5gXG4gICAgfVxuICAgIHNlY3Rpb25FbGUuaW5zZXJ0QmVmb3JlKGNpdHlOYW1lLCBzcGFjZXJMZWZ0KVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUaXRsZTIobmFtZSkge1xuICAgIGNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG4gICAgY29uc3Qgc2VjdGlvbkVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGUtZHJvcGRvd24td3JhcHBlci1yaWdodFwiKVxuICAgIGNvbnN0IHNwYWNlclJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXR5LXNjb3JlLXJpZ2h0XCIpXG5cbiAgICBjaXR5TmFtZS50ZXh0Q29udGVudCA9IG5hbWVcblxuXG5cbiAgICBpZiAobmFtZSA9PT0gXCJTYW4gRnJhbmNpc2NvXCIpIHtcbiAgICAgICAgY2l0eU5hbWUuY2xhc3NOYW1lID0gYGNpdHl0aXRsZS1yaWdodCBjaXR5dGl0bGUtcmlnaHQtJHtuYW1lfWBcbiAgICB9IGVsc2Uge1xuICAgICAgICBjaXR5TmFtZS5jbGFzc05hbWUgPSBgY2l0eXRpdGxlLXJpZ2h0IGNpdHl0aXRsZS1yaWdodC0ke25hbWV9IGhpZGRlbmBcbiAgICB9XG4gICAgc2VjdGlvbkVsZS5pbnNlcnRCZWZvcmUoY2l0eU5hbWUsIHNwYWNlclJpZ2h0KVxufVxuXG5cblxuXG5cbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb3RhbFNjb3JlKG5hbWUsIGNpdHlTY29yZSwgY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgY2l0eVNjb3JlRWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG4gICAgY29uc3Qgc2NvcmVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNsYXNzTmFtZSlcblxuICAgIGNpdHlTY29yZUVsZS50ZXh0Q29udGVudCA9IGBDaXR5IFNjb3JlOiAke2NpdHlTY29yZS50b0ZpeGVkKDIpfWBcblxuICAgIGlmIChuYW1lID09PSBcIk5ldyBZb3JrXCIpIHtcbiAgICAgICAgY2l0eVNjb3JlRWxlLmNsYXNzTmFtZSA9IGBzY29yZS1sZWZ0IHNjb3JlLWxlZnQtJHtuYW1lfWBcbiAgICB9IGVsc2Uge1xuICAgICAgICBjaXR5U2NvcmVFbGUuY2xhc3NOYW1lID0gYHNjb3JlLWxlZnQgc2NvcmUtbGVmdC0ke25hbWV9IGhpZGRlbmBcbiAgICB9XG4gICAgc2NvcmVEaXYuYXBwZW5kQ2hpbGQoY2l0eVNjb3JlRWxlKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG90YWxTY29yZTIobmFtZSwgY2l0eVNjb3JlLCBjbGFzc05hbWUpIHtcbiAgICBjb25zdCBjaXR5U2NvcmVFbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbiAgICBjb25zdCBzY29yZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2xhc3NOYW1lKVxuXG4gICAgY2l0eVNjb3JlRWxlLnRleHRDb250ZW50ID0gYENpdHkgU2NvcmU6ICR7Y2l0eVNjb3JlLnRvRml4ZWQoMil9YFxuXG4gICAgaWYgKG5hbWUgPT09IFwiU2FuIEZyYW5jaXNjb1wiKSB7XG4gICAgICAgIGNpdHlTY29yZUVsZS5jbGFzc05hbWUgPSBgc2NvcmUtcmlnaHQgc2NvcmUtcmlnaHQtJHtuYW1lfWBcbiAgICB9IGVsc2Uge1xuICAgICAgICBjaXR5U2NvcmVFbGUuY2xhc3NOYW1lID0gYHNjb3JlLXJpZ2h0IHNjb3JlLXJpZ2h0LSR7bmFtZX0gaGlkZGVuYFxuICAgIH1cbiAgICBzY29yZURpdi5hcHBlbmRDaGlsZChjaXR5U2NvcmVFbGUpXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdG9nZ2xlRHJvcGRvd24oZWxlLGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGRyb3Bkb3duQnV0dG9uRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjbGFzc05hbWUpXG4gICAgaWYgKGVsZS5jbGFzc05hbWUuaW5jbHVkZXMoXCJpbmFjdGl2ZVwiKSkge1xuICAgICAgICBlbGUuY2xhc3NOYW1lID0gZWxlLmNsYXNzTmFtZS5zcGxpdChcIiBcIilbMF1cbiAgICAgICAgZWxlLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMCAwIDEwcHggMTBweFwiXG4gICAgICAgIGRyb3Bkb3duQnV0dG9uRWxlLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTBweCAxMHB4IDAgMFwiXG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBlbGUuY2xhc3NOYW1lID0gZWxlLmNsYXNzTmFtZSArIFwiIGluYWN0aXZlXCJcbiAgICAgICAgZWxlLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTBweFwiXG4gICAgICAgIGRyb3Bkb3duQnV0dG9uRWxlLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTBweFwiXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0NoYXJ0cyhjaXR5TmFtZSwgY2l0eUNoYXJ0Q2xhc3NuYW1lKSB7XG4gICAgY29uc3QgY2l0eU5hbWVSZW1vdmVkU3BhY2UgPSBjaXR5TmFtZS5zcGxpdChcIiBcIilbMV1cbiAgICBjb25zdCBjaXR5Q2hhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjaXR5Q2hhcnRDbGFzc25hbWV9LSR7Y2l0eU5hbWVSZW1vdmVkU3BhY2V9YClcblxuXG4gICAgY29uc3QgYWxsQ2l0eUNoYXJ0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2NpdHlDaGFydENsYXNzbmFtZX1gKVxuICAgIGFsbENpdHlDaGFydHMuZm9yRWFjaChjaXR5Q2hhcnQgPT4ge1xuICAgICAgICBpZiAoIWNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbC5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICAgICAgY2l0eUNoYXJ0LmNsYXNzTmFtZS5iYXNlVmFsID0gY2l0eUNoYXJ0LmNsYXNzTmFtZS5iYXNlVmFsICsgXCIgaGlkZGVuXCJcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoY2l0eUNoYXJ0LmNsYXNzTmFtZS5iYXNlVmFsLmluY2x1ZGVzKFwiaGlkZGVuXCIpKSB7XG4gICAgICAgIGNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbCA9IGAke2NpdHlDaGFydENsYXNzbmFtZX0gJHtjaXR5Q2hhcnRDbGFzc25hbWV9LSR7Y2l0eU5hbWVSZW1vdmVkU3BhY2V9YFxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgY2l0eUNoYXJ0LmNsYXNzTmFtZS5iYXNlVmFsID0gY2l0eUNoYXJ0LmNsYXNzTmFtZS5iYXNlVmFsICsgXCIgaGlkZGVuXCJcblxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dUYWJsZXMoY2l0eU5hbWUsIHRhYmxlQ2xhc3NuYW1lKSB7XG4gICAgY29uc3QgY2l0eU5hbWVSZW1vdmVkU3BhY2UgPSBjaXR5TmFtZS5zcGxpdChcIiBcIilbMV1cbiAgICBjb25zdCBjaXR5VGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0YWJsZUNsYXNzbmFtZX0tJHtjaXR5TmFtZVJlbW92ZWRTcGFjZX1gKVxuXG4gICAgY29uc3QgYWxsQ2l0eVRhYmxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3RhYmxlQ2xhc3NuYW1lfWApXG4gICAgYWxsQ2l0eVRhYmxlcy5mb3JFYWNoKGNpdHlUYWJsZSA9PiB7XG4gICAgICAgIGlmICghY2l0eVRhYmxlLmNsYXNzTmFtZS5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICAgICAgY2l0eVRhYmxlLmNsYXNzTmFtZSA9IGNpdHlUYWJsZS5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxuXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNpdHlUYWJsZS5jbGFzc05hbWUuaW5jbHVkZXMoXCJoaWRkZW5cIikpIHtcbiAgICAgICAgY2l0eVRhYmxlLmNsYXNzTmFtZSA9IGAke3RhYmxlQ2xhc3NuYW1lfSAke3RhYmxlQ2xhc3NuYW1lfS0ke2NpdHlOYW1lUmVtb3ZlZFNwYWNlfWBcbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIGNpdHlUYWJsZS5jbGFzc05hbWUgPSBjaXR5VGFibGUuY2xhc3NOYW1lICsgXCIgaGlkZGVuXCJcblxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dUaXRsZShjaXR5TmFtZSwgY2l0eVRpdGxlQ2xhc3NuYW1lKSB7XG4gICAgY29uc3QgY2l0eU5hbWVSZW1vdmVkU3BhY2UgPSBjaXR5TmFtZS5zcGxpdChcIiBcIilbMV1cbiAgICBjb25zdCBjaXR5VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjaXR5VGl0bGVDbGFzc25hbWV9LSR7Y2l0eU5hbWVSZW1vdmVkU3BhY2V9YClcblxuICAgIGNvbnN0IGFsbENpdHlUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2NpdHlUaXRsZUNsYXNzbmFtZX1gKVxuICAgIGFsbENpdHlUaXRsZS5mb3JFYWNoKGNpdHlUaXRsZSA9PiB7XG4gICAgICAgIGlmICghY2l0eVRpdGxlLmNsYXNzTmFtZS5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICAgICAgY2l0eVRpdGxlLmNsYXNzTmFtZSA9IGNpdHlUaXRsZS5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxuXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNpdHlUaXRsZS5jbGFzc05hbWUuaW5jbHVkZXMoXCJoaWRkZW5cIikpIHtcbiAgICAgICAgY2l0eVRpdGxlLmNsYXNzTmFtZSA9IGAke2NpdHlUaXRsZUNsYXNzbmFtZX0gJHtjaXR5VGl0bGVDbGFzc25hbWV9LSR7Y2l0eU5hbWVSZW1vdmVkU3BhY2V9YFxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgY2l0eVRpdGxlLmNsYXNzTmFtZSA9IGNpdHlUaXRsZS5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxuXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1N1bW1hcnkoY2l0eU5hbWUsIGNpdHlTdW1tYXJ5Q2xhc3NuYW1lKSB7XG4gICAgY29uc3QgY2l0eU5hbWVSZW1vdmVkU3BhY2UgPSBjaXR5TmFtZS5zcGxpdChcIiBcIilbMV1cbiAgICBjb25zdCBjaXR5U3VtbWFyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NpdHlTdW1tYXJ5Q2xhc3NuYW1lfS0ke2NpdHlOYW1lUmVtb3ZlZFNwYWNlfWApXG5cbiAgICBjb25zdCBhbGxDaXR5U3VtbWFyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2NpdHlTdW1tYXJ5Q2xhc3NuYW1lfWApXG4gICAgYWxsQ2l0eVN1bW1hcnkuZm9yRWFjaChjaXR5U3VtbWFyeSA9PiB7XG4gICAgICAgIGlmICghY2l0eVN1bW1hcnkuY2xhc3NOYW1lLmluY2x1ZGVzKFwiaGlkZGVuXCIpKSB7XG4gICAgICAgICAgICBjaXR5U3VtbWFyeS5jbGFzc05hbWUgPSBjaXR5U3VtbWFyeS5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxuXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNpdHlTdW1tYXJ5LmNsYXNzTmFtZS5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICBjaXR5U3VtbWFyeS5jbGFzc05hbWUgPSBgJHtjaXR5U3VtbWFyeUNsYXNzbmFtZX0gJHtjaXR5U3VtbWFyeUNsYXNzbmFtZX0tJHtjaXR5TmFtZVJlbW92ZWRTcGFjZX1gXG4gICAgfSBlbHNlIHtcblxuICAgICAgICBjaXR5U3VtbWFyeS5jbGFzc05hbWUgPSBjaXR5U3VtbWFyeS5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxuXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0NpdHlTY29yZShjaXR5TmFtZSwgY2l0eVNjb3JlQ2xhc3NuYW1lKSB7XG4gICAgY29uc3QgY2l0eU5hbWVSZW1vdmVkU3BhY2UgPSBjaXR5TmFtZS5zcGxpdChcIiBcIilbMV1cbiAgICBjb25zdCBjaXR5U2NvcmVFbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjaXR5U2NvcmVDbGFzc25hbWV9LSR7Y2l0eU5hbWVSZW1vdmVkU3BhY2V9YClcblxuICAgIGNvbnN0IGFsbENpdHlTY29yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2NpdHlTY29yZUNsYXNzbmFtZX1gKVxuICAgIGFsbENpdHlTY29yZS5mb3JFYWNoKGNpdHlTY29yZSA9PiB7XG4gICAgICAgIGlmICghY2l0eVNjb3JlLmNsYXNzTmFtZS5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICAgICAgY2l0eVNjb3JlLmNsYXNzTmFtZSA9IGNpdHlTY29yZS5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGlmIChjaXR5U2NvcmVFbGUuY2xhc3NOYW1lLmluY2x1ZGVzKFwiaGlkZGVuXCIpKSB7XG4gICAgICAgIGNpdHlTY29yZUVsZS5jbGFzc05hbWUgPSBgJHtjaXR5U2NvcmVDbGFzc25hbWV9ICR7Y2l0eVNjb3JlQ2xhc3NuYW1lfS0ke2NpdHlOYW1lUmVtb3ZlZFNwYWNlfWBcbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIGNpdHlTY29yZUVsZS5jbGFzc05hbWUgPSBjaXR5U2NvcmUuY2xhc3NOYW1lICsgXCIgaGlkZGVuXCJcblxuICAgIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbGlnaHR1cENhdGVnb3JpZXMoaWQpIHtcbiAgICBjb25zdCBjaXR5Q2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHtpZH1gKVxuICAgIGNvbnN0IGFsbENpdHlDYXRlZ29yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXRlZ29yeVwiKVxuICAgIGFsbENpdHlDYXRlZ29yaWVzLmZvckVhY2goY2l0eUNhdCA9PiB7XG4gICAgICAgIGlmICghY2l0eUNhdC5jbGFzc05hbWUuaW5jbHVkZXMoXCJub25oaWdobGlnaHRlZFwiKSkge1xuICAgICAgICAgICAgY2l0eUNhdC5jbGFzc05hbWUgPSBjaXR5Q2F0LmNsYXNzTmFtZSArIFwiIG5vbmhpZ2hsaWdodGVkXCJcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjaXR5Q2F0ZWdvcnkuZm9yRWFjaChjaXR5Q2F0ID0+IHtcbiAgICAgICAgaWYgKGNpdHlDYXQuY2xhc3NOYW1lLmluY2x1ZGVzKGBjYXRlZ29yeSAke2lkfSBub25oaWdobGlnaHRlZGApKSB7XG4gICAgICAgICAgICBjaXR5Q2F0LmNsYXNzTmFtZSA9IGBjYXRlZ29yeSAke2lkfWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNpdHlDYXQuY2xhc3NOYW1lID0gY2l0eUNhdC5jbGFzc05hbWUgKyBcIiBub25oaWdobGlnaHRlZFwiXG4gICAgICAgIH1cbiAgICB9KVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9wSGlnaGxpZ2h0aW5nKCkge1xuICAgIGNvbnN0IGFsbENpdHlDYXRlZ29yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXRlZ29yeVwiKVxuICAgIGFsbENpdHlDYXRlZ29yaWVzLmZvckVhY2goY2l0eUNhdCA9PiB7XG4gICAgICAgIGlmICghY2l0eUNhdC5jbGFzc05hbWUuaW5jbHVkZXMoXCJub25oaWdobGlnaHRlZFwiKSkge1xuICAgICAgICAgICAgY2l0eUNhdC5jbGFzc05hbWUgPSBjaXR5Q2F0LmNsYXNzTmFtZSArIFwiIG5vbmhpZ2hsaWdodGVkXCJcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VQaWMocGljcyxjaXR5LCBwaWNDbGFzc25hbWUpIHtcbiAgICBjb25zdCBiYWNrZ3JvdW5kRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7cGljQ2xhc3NuYW1lfWApO1xuICAgIGJhY2tncm91bmRFbGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3BpY3NbY2l0eV19KWBcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0SXRlbShlbGUsIHRpdGxlQ2xhc3NuYW1lLCBtZW51TGlzdENsYXNzbmFtZSwgZHJvcGRvd25DbGFzc25hbWUsIGNpdHlDaGFydENsYXNzbmFtZSwgdGFibGVDbGFzc25hbWUsIGNpdHlUaXRsZUNsYXNzbmFtZSwgY2l0eVN1bW1hcnlDbGFzc25hbWUsIHBpY3MsIHBpY0NsYXNzbmFtZSwgY2l0eVNjb3JlQ2xhc3NuYW1lKSB7XG4gICAgY29uc3QgZWxlVGV4dCA9IGVsZS50ZXh0Q29udGVudFxuICAgIGNvbnN0IGNpdHlOYW1lTm9TcGFjZXMgPSBlbGUudGV4dENvbnRlbnQucmVwbGFjZSgvXFxzL2csIFwiXCIpXG4gICAgY29uc3QgdGl0bGVFbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRpdGxlQ2xhc3NuYW1lKVxuICAgIGNvbnN0IG1lbnVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihtZW51TGlzdENsYXNzbmFtZSlcbiAgICB0aXRsZUVsZS50ZXh0Q29udGVudCA9IGVsZVRleHQ7XG4gICAgdG9nZ2xlRHJvcGRvd24obWVudUxpc3QsIGRyb3Bkb3duQ2xhc3NuYW1lKTtcblxuICAgIHNob3dDaGFydHMoZWxlVGV4dCwgY2l0eUNoYXJ0Q2xhc3NuYW1lKVxuICAgIHNob3dUYWJsZXMoZWxlVGV4dCwgdGFibGVDbGFzc25hbWUpXG4gICAgc2hvd1RpdGxlKGVsZVRleHQsIGNpdHlUaXRsZUNsYXNzbmFtZSlcbiAgICBzaG93U3VtbWFyeShlbGVUZXh0LCBjaXR5U3VtbWFyeUNsYXNzbmFtZSlcbiAgICBzaG93Q2l0eVNjb3JlKGVsZVRleHQsIGNpdHlTY29yZUNsYXNzbmFtZSlcbiAgICBjaGFuZ2VQaWMocGljcyxjaXR5TmFtZU5vU3BhY2VzLCBwaWNDbGFzc25hbWUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZURyb3Bkb3duKGNsYXNzTmFtZSwgZHJvcGRvd25NZW51Q2xhc3NuYW1lKSB7XG4gICAgY29uc3QgZHJvcGRvd25NZW51TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NsYXNzTmFtZX1gKVxuICAgIGNvbnN0IGRyb3Bkb3duTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2Ryb3Bkb3duTWVudUNsYXNzbmFtZX1gKVxuXG4gICAgaWYgKCFkcm9wZG93bk1lbnVMaXN0LmNsYXNzTmFtZS5pbmNsdWRlcyhcImluYWN0aXZlXCIpKSB7XG4gICAgICAgIGRyb3Bkb3duTWVudUxpc3QuY2xhc3NOYW1lID0gYCR7Y2xhc3NOYW1lfSBpbmFjdGl2ZWBcbiAgICAgICAgZHJvcGRvd25NZW51LnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTBweFwiO1xuICAgIH1cbn1cblxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9