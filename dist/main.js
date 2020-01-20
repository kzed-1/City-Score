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
renderall();
var scores = [2.291, 3.79, 8.367, 7.551000000000001, 2.8845, 4.523750000000001, 8.671, 5.6365, 8.724333333333332, 5.7145, 7.560250000000001, 6.5145, 4.772, 4.940499999999999, 8.1155, 8.0895, 7.2094999999999985];

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
  var width = 400;
  var height = 500;
  var arrayLength = cityData.length;
  var maxValue = d3.max(cityData, function (d) {
    return +d.score_out_of_10;
  });
  var x_axisLength = 400;
  var y_axisLength = 471;
  var chartClassName = element === ".chart" ? "citychart" : "citychart-right";
  var xScale = d3.scaleLinear().domain([0, maxValue]).range([0, x_axisLength]);
  var svg = d3.select(element).append("svg").attr("width", width).attr("height", height);

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
  cityScoreEle.textContent = "Teleport Score: ".concat(cityScore.toFixed(2));

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
  cityScoreEle.textContent = "Teleport Score: ".concat(cityScore.toFixed(2));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3N1bW1hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vdGl0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vdG90YWxfc2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/ZGMyYSJdLCJuYW1lcyI6WyJjaXR5RGF0YSIsIm5hbWUiLCJzdW1tYXJ5IiwiY2l0eVNjb3JlIiwiY2l0eVBpY3MiLCJjaXR5U2VsZWN0aW9uIiwiY2l0aWVzIiwicmVuZGVyIiwiZDMiLCJqc29uIiwiZXJyb3IiLCJkYXRhIiwidGVsZXBvcnRfY2l0eV9zY29yZSIsImNhdGVnb3JpZXMiLCJjcmVhdGVCYXJHcmFwaCIsImNyZWF0ZVRhYmxlIiwiY3JlYXRlVGl0bGUiLCJjcmVhdGVUaXRsZTIiLCJjcmVhdGVTdW1tYXJ5IiwiY3JlYXRlU3VtbWFyeTIiLCJjcmVhdGVUb3RhbFNjb3JlIiwiY3JlYXRlVG90YWxTY29yZTIiLCJyZW5kZXJhbGwiLCJmb3JFYWNoIiwiY2l0eSIsInRpdGxlRHJvcERvd25CdXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0aXRsZURyb3BEb3duQnV0dG9uUmlnaHQiLCJtZW51TGlzdCIsIm1lbnVMaXN0UmlnaHQiLCJjaXR5TGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjaXR5TGlzdFJpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiVXRpbCIsIndpbmRvdyIsInNjb3JlcyIsImVsZW1lbnQiLCJ3aWR0aCIsImhlaWdodCIsImFycmF5TGVuZ3RoIiwibGVuZ3RoIiwibWF4VmFsdWUiLCJtYXgiLCJkIiwic2NvcmVfb3V0X29mXzEwIiwieF9heGlzTGVuZ3RoIiwieV9heGlzTGVuZ3RoIiwiY2hhcnRDbGFzc05hbWUiLCJ4U2NhbGUiLCJzY2FsZUxpbmVhciIsImRvbWFpbiIsInJhbmdlIiwic3ZnIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsInNlbGVjdEFsbCIsImVudGVyIiwiaSIsImNvbG9yIiwib24iLCJuZXdTdHIiLCJyZXBsYWNlIiwibmV3U3RyMiIsInRvb2x0aXAiLCJzdHlsZSIsInRleHQiLCJwYWdlWSIsInBhZ2VYIiwidG9GaXhlZCIsImNpdHlTdW1tYXJ5RWxlIiwiY3JlYXRlRWxlbWVudCIsInNlY3Rpb25FbGUiLCJ0ZXh0Q29udGVudCIsImNsYXNzTmFtZSIsImluc2VydEFkamFjZW50RWxlbWVudCIsImNvbHVtbnMiLCJjb2x1bW5OYW1lcyIsInRhYmxlQ2xhc3NOYW1lIiwidGFibGUiLCJoZWFkZXIiLCJ0YWJsZWJvZHkiLCJyb3dzIiwiY2VsbHMiLCJyb3ciLCJtYXAiLCJjb2x1bW4iLCJ2YWx1ZSIsImNpdHlOYW1lIiwic3BhY2VyTGVmdCIsImluc2VydEJlZm9yZSIsInNwYWNlclJpZ2h0IiwiY2l0eVNjb3JlRWxlIiwic2NvcmVEaXYiLCJhcHBlbmRDaGlsZCIsInRvZ2dsZURyb3Bkb3duIiwiZWxlIiwiZHJvcGRvd25CdXR0b25FbGUiLCJpbmNsdWRlcyIsInNwbGl0IiwiYm9yZGVyUmFkaXVzIiwic2hvd0NoYXJ0cyIsImNpdHlDaGFydENsYXNzbmFtZSIsImNpdHlOYW1lUmVtb3ZlZFNwYWNlIiwiY2l0eUNoYXJ0IiwiYWxsQ2l0eUNoYXJ0cyIsImJhc2VWYWwiLCJzaG93VGFibGVzIiwidGFibGVDbGFzc25hbWUiLCJjaXR5VGFibGUiLCJhbGxDaXR5VGFibGVzIiwic2hvd1RpdGxlIiwiY2l0eVRpdGxlQ2xhc3NuYW1lIiwiY2l0eVRpdGxlIiwiYWxsQ2l0eVRpdGxlIiwic2hvd1N1bW1hcnkiLCJjaXR5U3VtbWFyeUNsYXNzbmFtZSIsImNpdHlTdW1tYXJ5IiwiYWxsQ2l0eVN1bW1hcnkiLCJzaG93Q2l0eVNjb3JlIiwiY2l0eVNjb3JlQ2xhc3NuYW1lIiwiYWxsQ2l0eVNjb3JlIiwibGlnaHR1cENhdGVnb3JpZXMiLCJpZCIsImNpdHlDYXRlZ29yeSIsImFsbENpdHlDYXRlZ29yaWVzIiwiY2l0eUNhdCIsInN0b3BIaWdobGlnaHRpbmciLCJjaGFuZ2VQaWMiLCJwaWNzIiwicGljQ2xhc3NuYW1lIiwiYmFja2dyb3VuZEVsZSIsImJhY2tncm91bmRJbWFnZSIsInNlbGVjdEl0ZW0iLCJ0aXRsZUNsYXNzbmFtZSIsIm1lbnVMaXN0Q2xhc3NuYW1lIiwiZHJvcGRvd25DbGFzc25hbWUiLCJlbGVUZXh0IiwiY2l0eU5hbWVOb1NwYWNlcyIsInRpdGxlRWxlIiwiY2xvc2VEcm9wZG93biIsImRyb3Bkb3duTWVudUNsYXNzbmFtZSIsImRyb3Bkb3duTWVudUxpc3QiLCJkcm9wZG93bk1lbnUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNE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bWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCBjcmVhdGVCYXJHcmFwaCBmcm9tICcuL21haW4vY2hhcnQuanMnO1xuaW1wb3J0IGNyZWF0ZVRhYmxlIGZyb20gJy4vbWFpbi90YWJsZS5qcyc7XG5pbXBvcnQge2NyZWF0ZVRpdGxlLCBjcmVhdGVUaXRsZTJ9IGZyb20gJy4vbWFpbi90aXRsZS5qcyc7XG5pbXBvcnQge2NyZWF0ZVN1bW1hcnksIGNyZWF0ZVN1bW1hcnkyfSBmcm9tICcuL21haW4vc3VtbWFyeSc7XG5pbXBvcnQge2NyZWF0ZVRvdGFsU2NvcmUsIGNyZWF0ZVRvdGFsU2NvcmUyfSBmcm9tICcuL21haW4vdG90YWxfc2NvcmUnO1xuaW1wb3J0ICogYXMgVXRpbCBmcm9tICcuL21haW4vdXRpbC5qcyc7XG5cblxuXG5sZXQgY2l0eURhdGEgPSBbXVxubGV0IG5hbWUsIHN1bW1hcnksIGNpdHlTY29yZTtcblxuY29uc3QgY2l0eVBpY3MgPSB7XG4gICAgXCJCb3N0b25cIjogXCIvc3JjL2ltYWdlcy9ib3N0b24uanBnXCIsXG4gICAgXCJDaGljYWdvXCI6IFwiL3NyYy9pbWFnZXMvY2hpY2Fnby5qcGdcIixcbiAgICBcIkRhbGxhc1wiOiBcIi9zcmMvaW1hZ2VzL2RhbGxhcy5qcGdcIixcbiAgICBcIkxvc0FuZ2VsZXNcIjogXCIvc3JjL2ltYWdlcy9sYS5qcGdcIixcbiAgICBcIlBob2VuaXhcIjogXCIvc3JjL2ltYWdlcy9waG9lbml4LmpwZ1wiLFxuICAgIFwiUmFsZWlnaFwiOiBcIi9zcmMvaW1hZ2VzL3JhbGVpZ2guanBnXCIsXG4gICAgXCJTZWF0dGxlXCI6IFwiL3NyYy9pbWFnZXMvc2VhdHRsZS5qcGdcIixcbiAgICBcIlNhbkZyYW5jaXNjb1wiOiBcIi9zcmMvaW1hZ2VzL3NmMi5qcGdcIixcbiAgICBcIlRvcm9udG9cIjogXCIvc3JjL2ltYWdlcy90b3JvbnRvLmpwZ1wiLFxuICAgIFwiTmV3WW9ya1wiOiBcIi9zcmMvaW1hZ2VzL25ld3lvcmsyLmpwZ1wiXG59XG5cbmxldCBjaXR5U2VsZWN0aW9uID0gXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20va3plZC0xL0NpdHktU2NvcmUvbWFzdGVyL3NyYy9kYXRhL25ld3lvcmsuanNvblwiXG5cbi8vIGNvbnN0IGNpdGllcyA9IFtcbi8vICAgICBcIi4vc3JjL2RhdGEvbmV3eW9yay5qc29uXCIsIFwiLi9zcmMvZGF0YS9zYW5mcmFuLmpzb25cIiwgXCIuL3NyYy9kYXRhL3NlYXR0bGUuanNvblwiLCBcbi8vICAgICBcIi4vc3JjL2RhdGEvdG9yb250by5qc29uXCIsIFwiLi9zcmMvZGF0YS9ib3N0b24uanNvblwiLCBcIi4vc3JjL2RhdGEvY2hpY2Fnby5qc29uXCIsIFxuLy8gICAgIFwiLi9zcmMvZGF0YS9sb3NhbmdlbGVzLmpzb25cIiwgXCIuL3NyYy9kYXRhL2RhbGxhcy5qc29uXCIsIFwiLi9zcmMvZGF0YS9waG9lbml4Lmpzb25cIiwgXG4vLyAgICAgXCIuL3NyYy9kYXRhL3JhbGVpZ2guanNvblwiXG4vLyAgICAgXSBcbmNvbnN0IGNpdGllcyA9IFtcbiAgICBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9remVkLTEvQ2l0eS1TY29yZS9tYXN0ZXIvc3JjL2RhdGEvbmV3eW9yay5qc29uXCIsIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2t6ZWQtMS9DaXR5LVNjb3JlL21hc3Rlci9zcmMvZGF0YS9zYW5mcmFuLmpzb25cIiwgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20va3plZC0xL0NpdHktU2NvcmUvbWFzdGVyL3NyYy9kYXRhL3NlYXR0bGUuanNvblwiLCBcbiAgICBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9remVkLTEvQ2l0eS1TY29yZS9tYXN0ZXIvc3JjL2RhdGEvdG9yb250by5qc29uXCIsIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2t6ZWQtMS9DaXR5LVNjb3JlL21hc3Rlci9zcmMvZGF0YS9ib3N0b24uanNvblwiLCBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9remVkLTEvQ2l0eS1TY29yZS9tYXN0ZXIvc3JjL2RhdGEvY2hpY2Fnby5qc29uXCIsIFxuICAgIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2t6ZWQtMS9DaXR5LVNjb3JlL21hc3Rlci9zcmMvZGF0YS9sb3NhbmdlbGVzLmpzb25cIiwgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20va3plZC0xL0NpdHktU2NvcmUvbWFzdGVyL3NyYy9kYXRhL2RhbGxhcy5qc29uXCIsIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2t6ZWQtMS9DaXR5LVNjb3JlL21hc3Rlci9zcmMvZGF0YS9waG9lbml4Lmpzb25cIiwgXG4gICAgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20va3plZC0xL0NpdHktU2NvcmUvbWFzdGVyL3NyYy9kYXRhL3JhbGVpZ2guanNvblwiXG4gICAgXSBcblxuXG5mdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgZDMuanNvbihjaXR5U2VsZWN0aW9uLCBmdW5jdGlvbiAoZXJyb3IsIGRhdGEpIHtcbiAgICAgICAgbmFtZSA9IGRhdGEubmFtZVxuICAgICAgICBzdW1tYXJ5ID0gZGF0YS5zdW1tYXJ5XG4gICAgICAgIGNpdHlTY29yZSA9IGRhdGEudGVsZXBvcnRfY2l0eV9zY29yZVxuICAgICAgICBjaXR5RGF0YSA9IGRhdGEuY2F0ZWdvcmllc1xuICAgICAgICBjcmVhdGVCYXJHcmFwaChjaXR5RGF0YSwgbmFtZSwgXCIuY2hhcnRcIik7XG4gICAgICAgIGNyZWF0ZVRhYmxlKGNpdHlEYXRhLCBuYW1lLCBcIi5wcm9maWxlXCIpO1xuICAgICAgICBjcmVhdGVCYXJHcmFwaChjaXR5RGF0YSwgbmFtZSwgXCIuY2hhcnQtMlwiKTtcbiAgICAgICAgY3JlYXRlVGFibGUoY2l0eURhdGEsIG5hbWUsIFwiLnByb2ZpbGUtMlwiKTtcbiAgICAgICAgY3JlYXRlVGl0bGUobmFtZSk7XG4gICAgICAgIGNyZWF0ZVRpdGxlMihuYW1lKTtcbiAgICAgICAgY3JlYXRlU3VtbWFyeShuYW1lLCBzdW1tYXJ5KTtcbiAgICAgICAgY3JlYXRlU3VtbWFyeTIobmFtZSwgc3VtbWFyeSk7XG4gICAgICAgIGNyZWF0ZVRvdGFsU2NvcmUobmFtZSxjaXR5U2NvcmUsXCIuY2l0eS1zY29yZS1sZWZ0XCIpO1xuICAgICAgICBjcmVhdGVUb3RhbFNjb3JlMihuYW1lLGNpdHlTY29yZSxcIi5jaXR5LXNjb3JlLXJpZ2h0XCIpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHJlbmRlcmFsbCgpIHtcbiAgICBjaXRpZXMuZm9yRWFjaChjaXR5ID0+IHtcbiAgICAgICAgY2l0eVNlbGVjdGlvbiA9IGNpdHkgXG4gICAgICAgIHJlbmRlcigpXG4gICAgfSk7XG59XG5cblxuLy8gY29uc3QgdGl0bGVEcm9wRG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGUtZHJvcGRvd24td3JhcHBlclwiKVxuY29uc3QgdGl0bGVEcm9wRG93bkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGVcIilcbmNvbnN0IHRpdGxlRHJvcERvd25CdXR0b25SaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGUtcmlnaHRcIilcbmNvbnN0IG1lbnVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWxpc3RcIilcbmNvbnN0IG1lbnVMaXN0UmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtbGlzdC1yaWdodFwiKVxuY29uc3QgY2l0eUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNpdHlcIilcbmNvbnN0IGNpdHlMaXN0UmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNpdHktMlwiKVxuXG50aXRsZURyb3BEb3duQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgcmV0dXJuIFV0aWwudG9nZ2xlRHJvcGRvd24obWVudUxpc3QsIFwiLmRyb3Bkb3duLW1lbnVcIil9KVxudGl0bGVEcm9wRG93bkJ1dHRvblJpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgcmV0dXJuIFV0aWwudG9nZ2xlRHJvcGRvd24obWVudUxpc3RSaWdodCwgXCIuZHJvcGRvd24tbWVudS1yaWdodFwiKX0pXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBVdGlsLmNsb3NlRHJvcGRvd24oXCJtZW51LWxpc3RcIiwgXCJkcm9wZG93bi1tZW51XCIpKVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gVXRpbC5jbG9zZURyb3Bkb3duKFwibWVudS1saXN0LXJpZ2h0XCIsIFwiZHJvcGRvd24tbWVudS1yaWdodFwiKSlcblxuY2l0eUxpc3QuZm9yRWFjaChjaXR5ID0+IHtcbiAgICBjaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gVXRpbC5zZWxlY3RJdGVtKGNpdHksIFwiLnRpdGxlXCIsIFwiLm1lbnUtbGlzdFwiLCBcIi5kcm9wZG93bi1tZW51XCIsIFwiY2l0eWNoYXJ0XCIsIFwidGFibGVcIiwgXCJjaXR5dGl0bGVcIiwgXCJjaXR5U3VtbWFyeVwiLCBjaXR5UGljcywgXCJib2R5LWxlZnRcIiwgXCJzY29yZS1sZWZ0XCIpKVxufSlcbmNpdHlMaXN0UmlnaHQuZm9yRWFjaChjaXR5ID0+IHtcbiAgICBjaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gVXRpbC5zZWxlY3RJdGVtKGNpdHksIFwiLnRpdGxlLXJpZ2h0XCIsIFwiLm1lbnUtbGlzdC1yaWdodFwiLCBcIi5kcm9wZG93bi1tZW51LXJpZ2h0XCIsIFwiY2l0eWNoYXJ0LXJpZ2h0XCIsIFwidGFibGUtcmlnaHRcIiwgXCJjaXR5dGl0bGUtcmlnaHRcIiwgXCJjaXR5U3VtbWFyeS1yaWdodFwiLCBjaXR5UGljcywgXCJib2R5LXJpZ2h0XCIsIFwic2NvcmUtcmlnaHRcIikpXG59KVxuXG5yZW5kZXJhbGwoKVxuXG5cblxuY29uc3Qgc2NvcmVzID0gWzIuMjkxLCAzLjc5LCA4LjM2NywgNy41NTEwMDAwMDAwMDAwMDEsIDIuODg0NSwgNC41MjM3NTAwMDAwMDAwMDEsIDguNjcxLFxuICAgIDUuNjM2NSwgOC43MjQzMzMzMzMzMzMzMzIsIDUuNzE0NSwgNy41NjAyNTAwMDAwMDAwMDEsIDYuNTE0NSwgNC43NzIsXG4gICAgNC45NDA0OTk5OTk5OTk5OTksIDguMTE1NSwgOC4wODk1LCA3LjIwOTQ5OTk5OTk5OTk5ODVcblxuXSIsImltcG9ydCAqIGFzIFV0aWwgZnJvbSBcIi4vdXRpbFwiO1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUJhckdyYXBoKGNpdHlEYXRhLCBuYW1lLCBlbGVtZW50KSB7XG4gICAgY29uc3Qgd2lkdGggPSA0MDA7XG4gICAgY29uc3QgaGVpZ2h0ID0gNTAwO1xuXG4gICAgY29uc3QgYXJyYXlMZW5ndGggPSBjaXR5RGF0YS5sZW5ndGg7IFxuICAgIGNvbnN0IG1heFZhbHVlID0gZDMubWF4KGNpdHlEYXRhLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gK2Quc2NvcmVfb3V0X29mXzEwOyB9KTsgXG4gICAgY29uc3QgeF9heGlzTGVuZ3RoID0gNDAwOyBcbiAgICBjb25zdCB5X2F4aXNMZW5ndGggPSA0NzE7IFxuXG4gICAgY29uc3QgY2hhcnRDbGFzc05hbWUgPSBlbGVtZW50ID09PSBcIi5jaGFydFwiID8gXCJjaXR5Y2hhcnRcIiA6IFwiY2l0eWNoYXJ0LXJpZ2h0XCJcblxuXG4gICAgY29uc3QgeFNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAuZG9tYWluKFswLCBtYXhWYWx1ZV0pXG4gICAgICAgIC5yYW5nZShbMCwgeF9heGlzTGVuZ3RoXSk7XG5cbiAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoZWxlbWVudClcbiAgICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoKVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQpO1xuXG4gICAgaWYgKG5hbWUgPT09IFwiTmV3IFlvcmtcIiAmJiBlbGVtZW50ID09PSBcIi5jaGFydFwiKSB7XG4gICAgICAgIHN2Zy5hdHRyKFwiY2xhc3NcIiwgYCR7Y2hhcnRDbGFzc05hbWV9ICR7Y2hhcnRDbGFzc05hbWV9LSR7bmFtZX1gKVxuICAgIH0gZWxzZSBpZiAoZWxlbWVudCA9PT0gXCIuY2hhcnRcIiAmJiAobmFtZSAhPT0gXCJOZXcgWW9ya1wiKSkge1xuICAgICAgICBzdmcuYXR0cihcImNsYXNzXCIsIGAke2NoYXJ0Q2xhc3NOYW1lfSAke2NoYXJ0Q2xhc3NOYW1lfS0ke25hbWV9IGhpZGRlbmApXG4gICAgfSBcblxuICAgIGlmIChuYW1lID09PSBcIlNhbiBGcmFuY2lzY29cIiAmJiBlbGVtZW50ID09PSBcIi5jaGFydC0yXCIpIHtcbiAgICAgICAgc3ZnLmF0dHIoXCJjbGFzc1wiLCBgJHtjaGFydENsYXNzTmFtZX0gJHtjaGFydENsYXNzTmFtZX0tJHtuYW1lfWApXG4gICAgfSBlbHNlIGlmIChlbGVtZW50ID09PSBcIi5jaGFydC0yXCIgJiYgKG5hbWUgIT09IFwiU2FuIEZyYW5jaXNjb1wiKSl7IFxuICAgICAgICBzdmcuYXR0cihcImNsYXNzXCIsIGAke2NoYXJ0Q2xhc3NOYW1lfSAke2NoYXJ0Q2xhc3NOYW1lfS0ke25hbWV9IGhpZGRlbmApXG4gICAgfVxuXG5cbiAgICBzdmcuc2VsZWN0QWxsKFwicmVjdFwiKVxuICAgICAgICAuZGF0YShjaXR5RGF0YSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZChcInJlY3RcIilcbiAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gaSAqICh5X2F4aXNMZW5ndGggLyBhcnJheUxlbmd0aCkgKyAzMDtcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoXCJ4XCIsIDApXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsICh5X2F4aXNMZW5ndGggLyBhcnJheUxlbmd0aCkgLSAxKVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4geFNjYWxlKGQuc2NvcmVfb3V0X29mXzEwKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoXCJmaWxsXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gZC5jb2xvclxuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gYGJhciAke2QubmFtZX1gO1xuICAgICAgICB9KVxuICAgICAgICAub24oXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0ciA9IGQubmFtZS5yZXBsYWNlKC9cXHMvZywgXCJcIilcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0cjIgPSBuZXdTdHIucmVwbGFjZSgvWyZdL2csIFwiXCIpXG4gICAgICAgICAgICBVdGlsLmxpZ2h0dXBDYXRlZ29yaWVzKG5ld1N0cjIpXG4gICAgICAgICAgICByZXR1cm4gdG9vbHRpcC5zdHlsZShcInZpc2liaWxpdHlcIiwgXCJ2aXNpYmxlXCIpLnRleHQoZC5uYW1lICsgXCI6IFwiICsgZC5zY29yZV9vdXRfb2ZfMTApO1xuICAgICAgICB9KVxuICAgICAgICAub24oXCJtb3VzZW1vdmVcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiB0b29sdGlwLnN0eWxlKFwidG9wXCIsIChkMy5ldmVudC5wYWdlWSAtIDEwKSArIFwicHhcIilcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJsZWZ0XCIsIChkMy5ldmVudC5wYWdlWCArIDEwKSArIFwicHhcIikudGV4dChkLm5hbWUgKyBcIjogXCIgKyBkLnNjb3JlX291dF9vZl8xMC50b0ZpeGVkKDIpKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwibW91c2VvdXRcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIFV0aWwuc3RvcEhpZ2hsaWdodGluZygpXG4gICAgICAgICAgICByZXR1cm4gdG9vbHRpcC5zdHlsZShcInZpc2liaWxpdHlcIiwgXCJoaWRkZW5cIilcbiAgICAgICAgfSlcblxuICAgIGNvbnN0IHRvb2x0aXAgPSBkMy5zZWxlY3QoXCIuY2hhcnRcIilcbiAgICAgICAgLmFwcGVuZChcImRpdlwiKVxuICAgICAgICAuc3R5bGUoXCJwb3NpdGlvblwiLCBcImFic29sdXRlXCIpXG4gICAgICAgIC5zdHlsZShcImZvbnQtZmFtaWx5XCIsIFwicm9ib3RvXCIpXG4gICAgICAgIC5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjE0cHhcIilcbiAgICAgICAgLnN0eWxlKFwiei1pbmRleFwiLCBcIjNcIilcbiAgICAgICAgLnN0eWxlKFwidmlzaWJpbGl0eVwiLCBcImhpZGRlblwiKVxuICAgICAgICAuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwid2hpdGVcIilcbiAgICAgICAgLnN0eWxlKFwid2lkdGhcIiwgXCJhdXRvXCIpXG4gICAgICAgIC5zdHlsZShcIm1hcmdpblwiLCBcIjAgYXV0b1wiKVxuICAgICAgICAuc3R5bGUoXCJib3JkZXItcmFkaXVzXCIsIFwiMTBweFwiKVxuICAgICAgICAuc3R5bGUoXCJwYWRkaW5nXCIsIFwiMTBweFwiKVxuICAgICAgICAuc3R5bGUoXCJib3JkZXJcIiwgXCIycHggc29saWQgYmxhY2tcIilcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUJhckdyYXBoOyIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdW1tYXJ5KG5hbWUsIHN1bW1hcnkpIHtcbiAgICBjb25zdCBjaXR5U3VtbWFyeUVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgY29uc3Qgc2VjdGlvbkVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGUtZHJvcGRvd24td3JhcHBlclwiKVxuXG4gICAgY2l0eVN1bW1hcnlFbGUudGV4dENvbnRlbnQgPSBzdW1tYXJ5LnJlcGxhY2UoL1s8XS57MSwyfVs+XS9nLCBcIlwiKVxuXG4gICAgaWYgKG5hbWUgPT09IFwiTmV3IFlvcmtcIikge1xuICAgICAgICBjaXR5U3VtbWFyeUVsZS5jbGFzc05hbWUgPSBgY2l0eVN1bW1hcnkgY2l0eVN1bW1hcnktJHtuYW1lfWBcbiAgICB9IGVsc2Uge1xuICAgICAgICBjaXR5U3VtbWFyeUVsZS5jbGFzc05hbWUgPSBgY2l0eVN1bW1hcnkgY2l0eVN1bW1hcnktJHtuYW1lfSBoaWRkZW5gXG4gICAgfVxuXG4gICAgc2VjdGlvbkVsZS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmVuZFwiLCBjaXR5U3VtbWFyeUVsZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN1bW1hcnkyKG5hbWUsIHN1bW1hcnkpIHtcbiAgICBjb25zdCBjaXR5U3VtbWFyeUVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgY29uc3Qgc2VjdGlvbkVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGUtZHJvcGRvd24td3JhcHBlci1yaWdodFwiKVxuXG4gICAgY2l0eVN1bW1hcnlFbGUudGV4dENvbnRlbnQgPSBzdW1tYXJ5LnJlcGxhY2UoL1s8XS57MSwyfVs+XS9nLCBcIlwiKVxuXG4gICAgaWYgKG5hbWUgPT09IFwiU2FuIEZyYW5jaXNjb1wiKSB7XG4gICAgICAgIGNpdHlTdW1tYXJ5RWxlLmNsYXNzTmFtZSA9IGBjaXR5U3VtbWFyeS1yaWdodCBjaXR5U3VtbWFyeS1yaWdodC0ke25hbWV9YFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNpdHlTdW1tYXJ5RWxlLmNsYXNzTmFtZSA9IGBjaXR5U3VtbWFyeS1yaWdodCBjaXR5U3VtbWFyeS1yaWdodC0ke25hbWV9IGhpZGRlbmBcbiAgICB9XG5cbiAgICBzZWN0aW9uRWxlLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyZW5kXCIsIGNpdHlTdW1tYXJ5RWxlKVxufVxuXG4iLCJpbXBvcnQgKiBhcyBVdGlsIGZyb20gJy4vdXRpbC5qcydcblxuZnVuY3Rpb24gY3JlYXRlVGFibGUoY2l0eURhdGEsIG5hbWUsIGVsZW1lbnQpIHtcblxuICAgIGNvbnN0IGNvbHVtbnMgPSBbXCJuYW1lXCIsIFwic2NvcmVfb3V0X29mXzEwXCJdXG4gICAgY29uc3QgY29sdW1uTmFtZXMgPSBbXCJDYXRlZ29yaWVzXCIsIFwiU2NvcmVcIl1cblxuICAgIGNvbnN0IHRhYmxlQ2xhc3NOYW1lID0gZWxlbWVudCA9PT0gXCIucHJvZmlsZVwiID8gXCJ0YWJsZVwiIDogXCJ0YWJsZS1yaWdodFwiXG5cblxuICAgIGxldCB0YWJsZSA9IGQzLnNlbGVjdChlbGVtZW50KVxuICAgICAgICAuYXBwZW5kKCd0YWJsZScpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgYCR7dGFibGVDbGFzc05hbWV9IHRhYmxlLSR7bmFtZX0gaGlkZGVuYClcbiAgICAgICAgLnN0eWxlKFwiYm9yZGVyLXJhZGl1c1wiLCBcIjEwcHhcIilcbiAgICAgICAgLnN0eWxlKFwiYm9yZGVyXCIsIFwiMnB4IHNvbGlkIGJsYWNrXCIpO1xuICAgIGxldCBoZWFkZXIgPSB0YWJsZVxuICAgICAgICAuYXBwZW5kKFwiaGVhZGVyXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0YWJsZS1oZWFkZXJcIik7XG4gICAgbGV0IHRhYmxlYm9keSA9IHRhYmxlLmFwcGVuZChcInRhYmxlYm9keVwiKTtcblxuICAgIC8vIGlmIChuYW1lID09PSBcIk5ldyBZb3JrXCIpIHtcbiAgICAvLyAgICAgdGFibGUuYXR0cihcImNsYXNzXCIsIGAke3RhYmxlQ2xhc3NOYW1lfSB0YWJsZS0ke25hbWV9YClcblxuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICAgIHRhYmxlLmF0dHIoXCJjbGFzc1wiLCBgJHt0YWJsZUNsYXNzTmFtZX0gdGFibGUtJHtuYW1lfSBoaWRkZW5gKVxuICAgIC8vIH1cblxuICAgIGlmIChuYW1lID09PSBcIk5ldyBZb3JrXCIgJiYgZWxlbWVudCA9PT0gXCIucHJvZmlsZVwiKSB7XG4gICAgICAgIHRhYmxlLmF0dHIoXCJjbGFzc1wiLCBgJHt0YWJsZUNsYXNzTmFtZX0gdGFibGUtJHtuYW1lfWApXG4gICAgfSBlbHNlIGlmIChlbGVtZW50ID09PSBcIi5wcm9maWxlXCIgJiYgKG5hbWUgIT09IFwiTmV3IFlvcmtcIikpIHtcbiAgICAgICAgdGFibGUuYXR0cihcImNsYXNzXCIsIGAke3RhYmxlQ2xhc3NOYW1lfSB0YWJsZS0ke25hbWV9IGhpZGRlbmApXG4gICAgfVxuXG4gICAgaWYgKG5hbWUgPT09IFwiU2FuIEZyYW5jaXNjb1wiICYmIGVsZW1lbnQgPT09IFwiLnByb2ZpbGUtMlwiKSB7XG4gICAgICAgIHRhYmxlLmF0dHIoXCJjbGFzc1wiLCBgJHt0YWJsZUNsYXNzTmFtZX0gJHt0YWJsZUNsYXNzTmFtZX0tJHtuYW1lfWApXG4gICAgfSBlbHNlIGlmIChlbGVtZW50ID09PSBcIi5wcm9maWxlLTJcIiAmJiAobmFtZSAhPT0gXCJTYW4gRnJhbmNpc2NvXCIpKSB7XG4gICAgICAgIHRhYmxlLmF0dHIoXCJjbGFzc1wiLCBgJHt0YWJsZUNsYXNzTmFtZX0gJHt0YWJsZUNsYXNzTmFtZX0tJHtuYW1lfSBoaWRkZW5gKVxuICAgIH1cblxuICAgIGhlYWRlclxuICAgICAgICAuYXBwZW5kKFwidHJcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImhlYWRlci13cmFwcGVyXCIpXG4gICAgICAgIC5zdHlsZShcImNvbG9yXCIsIFwiYmx1ZVwiKVxuICAgICAgICAuc2VsZWN0QWxsKFwidGhcIilcbiAgICAgICAgLmRhdGEoY29sdW1uTmFtZXMpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJ0aFwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gZDtcbiAgICAgICAgfSlcbiAgICAgICAgLnN0eWxlKFwidGV4dC1hbGlnblwiLCBcImNlbnRlclwiKVxuICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIGQ7XG4gICAgICAgIH0pXG5cblxuXG4gICAgbGV0IHJvd3MgPSB0YWJsZWJvZHlcbiAgICAgICAgLnNlbGVjdEFsbChcInRyXCIpXG4gICAgICAgIC5kYXRhKGNpdHlEYXRhKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwidHJcIik7XG5cblxuICAgIGxldCBjZWxscyA9IHJvd3Muc2VsZWN0QWxsKFwidGRcIilcbiAgICAgICAgLmRhdGEoZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbnMubWFwKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW46IGNvbHVtbixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJvd1tjb2x1bW5dXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZChcInRkXCIpXG4gICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGQudmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZC52YWx1ZS50b0ZpeGVkKDIpID09PSAxMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIxMC4wIC8xMFwiXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAke2QudmFsdWUudG9GaXhlZCgyKX0gLzEwYFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGQudmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBkLnZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3RyID0gZC52YWx1ZS5yZXBsYWNlKC9cXHMvZywgXCJcIilcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTdHIyID0gbmV3U3RyLnJlcGxhY2UoL1smXS9nLCBcIlwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBgY2F0ZWdvcnkgJHtuZXdTdHIyfSBub25oaWdobGlnaHRlZGBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGBjYXRlZ29yeSAke2QudmFsdWV9IG5vbmhpZ2hsaWdodGVkYFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcImlkXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGQudmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTdHIgPSBkLnZhbHVlLnJlcGxhY2UoL1xccy9nLCBcIlwiKVxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1N0cjIgPSBuZXdTdHIucmVwbGFjZSgvWyZdL2csIFwiXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1N0cjJcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGQudmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGFibGU7IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRpdGxlKG5hbWUpIHtcbiAgICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICAgIGNvbnN0IHNlY3Rpb25FbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlLWRyb3Bkb3duLXdyYXBwZXJcIilcbiAgICBjb25zdCBzcGFjZXJMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXR5LXNjb3JlLWxlZnRcIilcblxuICAgIGNpdHlOYW1lLnRleHRDb250ZW50ID0gbmFtZVxuXG4gICAgaWYgKG5hbWUgPT09IFwiTmV3IFlvcmtcIikge1xuICAgICAgICBjaXR5TmFtZS5jbGFzc05hbWUgPSBgY2l0eXRpdGxlIGNpdHl0aXRsZS0ke25hbWV9YFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNpdHlOYW1lLmNsYXNzTmFtZSA9IGBjaXR5dGl0bGUgY2l0eXRpdGxlLSR7bmFtZX0gaGlkZGVuYFxuICAgIH1cbiAgICBzZWN0aW9uRWxlLmluc2VydEJlZm9yZShjaXR5TmFtZSwgc3BhY2VyTGVmdClcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGl0bGUyKG5hbWUpIHtcbiAgICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICAgIGNvbnN0IHNlY3Rpb25FbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlLWRyb3Bkb3duLXdyYXBwZXItcmlnaHRcIilcbiAgICBjb25zdCBzcGFjZXJSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2l0eS1zY29yZS1yaWdodFwiKVxuXG4gICAgY2l0eU5hbWUudGV4dENvbnRlbnQgPSBuYW1lXG5cblxuXG4gICAgaWYgKG5hbWUgPT09IFwiU2FuIEZyYW5jaXNjb1wiKSB7XG4gICAgICAgIGNpdHlOYW1lLmNsYXNzTmFtZSA9IGBjaXR5dGl0bGUtcmlnaHQgY2l0eXRpdGxlLXJpZ2h0LSR7bmFtZX1gXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2l0eU5hbWUuY2xhc3NOYW1lID0gYGNpdHl0aXRsZS1yaWdodCBjaXR5dGl0bGUtcmlnaHQtJHtuYW1lfSBoaWRkZW5gXG4gICAgfVxuICAgIHNlY3Rpb25FbGUuaW5zZXJ0QmVmb3JlKGNpdHlOYW1lLCBzcGFjZXJSaWdodClcbn1cblxuXG5cblxuXG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlVG90YWxTY29yZShuYW1lLCBjaXR5U2NvcmUsIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGNpdHlTY29yZUVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICAgIGNvbnN0IHNjb3JlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjbGFzc05hbWUpXG5cbiAgICBjaXR5U2NvcmVFbGUudGV4dENvbnRlbnQgPSBgVGVsZXBvcnQgU2NvcmU6ICR7Y2l0eVNjb3JlLnRvRml4ZWQoMil9YFxuXG4gICAgaWYgKG5hbWUgPT09IFwiTmV3IFlvcmtcIikge1xuICAgICAgICBjaXR5U2NvcmVFbGUuY2xhc3NOYW1lID0gYHNjb3JlLWxlZnQgc2NvcmUtbGVmdC0ke25hbWV9YFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNpdHlTY29yZUVsZS5jbGFzc05hbWUgPSBgc2NvcmUtbGVmdCBzY29yZS1sZWZ0LSR7bmFtZX0gaGlkZGVuYFxuICAgIH1cbiAgICBzY29yZURpdi5hcHBlbmRDaGlsZChjaXR5U2NvcmVFbGUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb3RhbFNjb3JlMihuYW1lLCBjaXR5U2NvcmUsIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGNpdHlTY29yZUVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICAgIGNvbnN0IHNjb3JlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjbGFzc05hbWUpXG5cbiAgICBjaXR5U2NvcmVFbGUudGV4dENvbnRlbnQgPSBgVGVsZXBvcnQgU2NvcmU6ICR7Y2l0eVNjb3JlLnRvRml4ZWQoMil9YFxuXG4gICAgaWYgKG5hbWUgPT09IFwiU2FuIEZyYW5jaXNjb1wiKSB7XG4gICAgICAgIGNpdHlTY29yZUVsZS5jbGFzc05hbWUgPSBgc2NvcmUtcmlnaHQgc2NvcmUtcmlnaHQtJHtuYW1lfWBcbiAgICB9IGVsc2Uge1xuICAgICAgICBjaXR5U2NvcmVFbGUuY2xhc3NOYW1lID0gYHNjb3JlLXJpZ2h0IHNjb3JlLXJpZ2h0LSR7bmFtZX0gaGlkZGVuYFxuICAgIH1cbiAgICBzY29yZURpdi5hcHBlbmRDaGlsZChjaXR5U2NvcmVFbGUpXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdG9nZ2xlRHJvcGRvd24oZWxlLGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGRyb3Bkb3duQnV0dG9uRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjbGFzc05hbWUpXG4gICAgaWYgKGVsZS5jbGFzc05hbWUuaW5jbHVkZXMoXCJpbmFjdGl2ZVwiKSkge1xuICAgICAgICBlbGUuY2xhc3NOYW1lID0gZWxlLmNsYXNzTmFtZS5zcGxpdChcIiBcIilbMF1cbiAgICAgICAgZWxlLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMCAwIDEwcHggMTBweFwiXG4gICAgICAgIGRyb3Bkb3duQnV0dG9uRWxlLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTBweCAxMHB4IDAgMFwiXG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBlbGUuY2xhc3NOYW1lID0gZWxlLmNsYXNzTmFtZSArIFwiIGluYWN0aXZlXCJcbiAgICAgICAgZWxlLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTBweFwiXG4gICAgICAgIGRyb3Bkb3duQnV0dG9uRWxlLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTBweFwiXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0NoYXJ0cyhjaXR5TmFtZSwgY2l0eUNoYXJ0Q2xhc3NuYW1lKSB7XG4gICAgY29uc3QgY2l0eU5hbWVSZW1vdmVkU3BhY2UgPSBjaXR5TmFtZS5zcGxpdChcIiBcIilbMV1cbiAgICBjb25zdCBjaXR5Q2hhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjaXR5Q2hhcnRDbGFzc25hbWV9LSR7Y2l0eU5hbWVSZW1vdmVkU3BhY2V9YClcblxuXG4gICAgY29uc3QgYWxsQ2l0eUNoYXJ0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2NpdHlDaGFydENsYXNzbmFtZX1gKVxuICAgIGFsbENpdHlDaGFydHMuZm9yRWFjaChjaXR5Q2hhcnQgPT4ge1xuICAgICAgICBpZiAoIWNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbC5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICAgICAgY2l0eUNoYXJ0LmNsYXNzTmFtZS5iYXNlVmFsID0gY2l0eUNoYXJ0LmNsYXNzTmFtZS5iYXNlVmFsICsgXCIgaGlkZGVuXCJcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoY2l0eUNoYXJ0LmNsYXNzTmFtZS5iYXNlVmFsLmluY2x1ZGVzKFwiaGlkZGVuXCIpKSB7XG4gICAgICAgIGNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbCA9IGAke2NpdHlDaGFydENsYXNzbmFtZX0gJHtjaXR5Q2hhcnRDbGFzc25hbWV9LSR7Y2l0eU5hbWVSZW1vdmVkU3BhY2V9YFxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgY2l0eUNoYXJ0LmNsYXNzTmFtZS5iYXNlVmFsID0gY2l0eUNoYXJ0LmNsYXNzTmFtZS5iYXNlVmFsICsgXCIgaGlkZGVuXCJcblxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dUYWJsZXMoY2l0eU5hbWUsIHRhYmxlQ2xhc3NuYW1lKSB7XG4gICAgY29uc3QgY2l0eU5hbWVSZW1vdmVkU3BhY2UgPSBjaXR5TmFtZS5zcGxpdChcIiBcIilbMV1cbiAgICBjb25zdCBjaXR5VGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0YWJsZUNsYXNzbmFtZX0tJHtjaXR5TmFtZVJlbW92ZWRTcGFjZX1gKVxuXG4gICAgY29uc3QgYWxsQ2l0eVRhYmxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3RhYmxlQ2xhc3NuYW1lfWApXG4gICAgYWxsQ2l0eVRhYmxlcy5mb3JFYWNoKGNpdHlUYWJsZSA9PiB7XG4gICAgICAgIGlmICghY2l0eVRhYmxlLmNsYXNzTmFtZS5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICAgICAgY2l0eVRhYmxlLmNsYXNzTmFtZSA9IGNpdHlUYWJsZS5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxuXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNpdHlUYWJsZS5jbGFzc05hbWUuaW5jbHVkZXMoXCJoaWRkZW5cIikpIHtcbiAgICAgICAgY2l0eVRhYmxlLmNsYXNzTmFtZSA9IGAke3RhYmxlQ2xhc3NuYW1lfSAke3RhYmxlQ2xhc3NuYW1lfS0ke2NpdHlOYW1lUmVtb3ZlZFNwYWNlfWBcbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIGNpdHlUYWJsZS5jbGFzc05hbWUgPSBjaXR5VGFibGUuY2xhc3NOYW1lICsgXCIgaGlkZGVuXCJcblxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dUaXRsZShjaXR5TmFtZSwgY2l0eVRpdGxlQ2xhc3NuYW1lKSB7XG4gICAgY29uc3QgY2l0eU5hbWVSZW1vdmVkU3BhY2UgPSBjaXR5TmFtZS5zcGxpdChcIiBcIilbMV1cbiAgICBjb25zdCBjaXR5VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjaXR5VGl0bGVDbGFzc25hbWV9LSR7Y2l0eU5hbWVSZW1vdmVkU3BhY2V9YClcblxuICAgIGNvbnN0IGFsbENpdHlUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2NpdHlUaXRsZUNsYXNzbmFtZX1gKVxuICAgIGFsbENpdHlUaXRsZS5mb3JFYWNoKGNpdHlUaXRsZSA9PiB7XG4gICAgICAgIGlmICghY2l0eVRpdGxlLmNsYXNzTmFtZS5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICAgICAgY2l0eVRpdGxlLmNsYXNzTmFtZSA9IGNpdHlUaXRsZS5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxuXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNpdHlUaXRsZS5jbGFzc05hbWUuaW5jbHVkZXMoXCJoaWRkZW5cIikpIHtcbiAgICAgICAgY2l0eVRpdGxlLmNsYXNzTmFtZSA9IGAke2NpdHlUaXRsZUNsYXNzbmFtZX0gJHtjaXR5VGl0bGVDbGFzc25hbWV9LSR7Y2l0eU5hbWVSZW1vdmVkU3BhY2V9YFxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgY2l0eVRpdGxlLmNsYXNzTmFtZSA9IGNpdHlUaXRsZS5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxuXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1N1bW1hcnkoY2l0eU5hbWUsIGNpdHlTdW1tYXJ5Q2xhc3NuYW1lKSB7XG4gICAgY29uc3QgY2l0eU5hbWVSZW1vdmVkU3BhY2UgPSBjaXR5TmFtZS5zcGxpdChcIiBcIilbMV1cbiAgICBjb25zdCBjaXR5U3VtbWFyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NpdHlTdW1tYXJ5Q2xhc3NuYW1lfS0ke2NpdHlOYW1lUmVtb3ZlZFNwYWNlfWApXG5cbiAgICBjb25zdCBhbGxDaXR5U3VtbWFyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2NpdHlTdW1tYXJ5Q2xhc3NuYW1lfWApXG4gICAgYWxsQ2l0eVN1bW1hcnkuZm9yRWFjaChjaXR5U3VtbWFyeSA9PiB7XG4gICAgICAgIGlmICghY2l0eVN1bW1hcnkuY2xhc3NOYW1lLmluY2x1ZGVzKFwiaGlkZGVuXCIpKSB7XG4gICAgICAgICAgICBjaXR5U3VtbWFyeS5jbGFzc05hbWUgPSBjaXR5U3VtbWFyeS5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxuXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNpdHlTdW1tYXJ5LmNsYXNzTmFtZS5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICBjaXR5U3VtbWFyeS5jbGFzc05hbWUgPSBgJHtjaXR5U3VtbWFyeUNsYXNzbmFtZX0gJHtjaXR5U3VtbWFyeUNsYXNzbmFtZX0tJHtjaXR5TmFtZVJlbW92ZWRTcGFjZX1gXG4gICAgfSBlbHNlIHtcblxuICAgICAgICBjaXR5U3VtbWFyeS5jbGFzc05hbWUgPSBjaXR5U3VtbWFyeS5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxuXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0NpdHlTY29yZShjaXR5TmFtZSwgY2l0eVNjb3JlQ2xhc3NuYW1lKSB7XG4gICAgY29uc3QgY2l0eU5hbWVSZW1vdmVkU3BhY2UgPSBjaXR5TmFtZS5zcGxpdChcIiBcIilbMV1cbiAgICBjb25zdCBjaXR5U2NvcmVFbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjaXR5U2NvcmVDbGFzc25hbWV9LSR7Y2l0eU5hbWVSZW1vdmVkU3BhY2V9YClcblxuICAgIGNvbnN0IGFsbENpdHlTY29yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2NpdHlTY29yZUNsYXNzbmFtZX1gKVxuICAgIGFsbENpdHlTY29yZS5mb3JFYWNoKGNpdHlTY29yZSA9PiB7XG4gICAgICAgIGlmICghY2l0eVNjb3JlLmNsYXNzTmFtZS5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICAgICAgY2l0eVNjb3JlLmNsYXNzTmFtZSA9IGNpdHlTY29yZS5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGlmIChjaXR5U2NvcmVFbGUuY2xhc3NOYW1lLmluY2x1ZGVzKFwiaGlkZGVuXCIpKSB7XG4gICAgICAgIGNpdHlTY29yZUVsZS5jbGFzc05hbWUgPSBgJHtjaXR5U2NvcmVDbGFzc25hbWV9ICR7Y2l0eVNjb3JlQ2xhc3NuYW1lfS0ke2NpdHlOYW1lUmVtb3ZlZFNwYWNlfWBcbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIGNpdHlTY29yZUVsZS5jbGFzc05hbWUgPSBjaXR5U2NvcmUuY2xhc3NOYW1lICsgXCIgaGlkZGVuXCJcblxuICAgIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbGlnaHR1cENhdGVnb3JpZXMoaWQpIHtcbiAgICBjb25zdCBjaXR5Q2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHtpZH1gKVxuICAgIGNvbnN0IGFsbENpdHlDYXRlZ29yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXRlZ29yeVwiKVxuICAgIGFsbENpdHlDYXRlZ29yaWVzLmZvckVhY2goY2l0eUNhdCA9PiB7XG4gICAgICAgIGlmICghY2l0eUNhdC5jbGFzc05hbWUuaW5jbHVkZXMoXCJub25oaWdobGlnaHRlZFwiKSkge1xuICAgICAgICAgICAgY2l0eUNhdC5jbGFzc05hbWUgPSBjaXR5Q2F0LmNsYXNzTmFtZSArIFwiIG5vbmhpZ2hsaWdodGVkXCJcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjaXR5Q2F0ZWdvcnkuZm9yRWFjaChjaXR5Q2F0ID0+IHtcbiAgICAgICAgaWYgKGNpdHlDYXQuY2xhc3NOYW1lLmluY2x1ZGVzKGBjYXRlZ29yeSAke2lkfSBub25oaWdobGlnaHRlZGApKSB7XG4gICAgICAgICAgICBjaXR5Q2F0LmNsYXNzTmFtZSA9IGBjYXRlZ29yeSAke2lkfWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNpdHlDYXQuY2xhc3NOYW1lID0gY2l0eUNhdC5jbGFzc05hbWUgKyBcIiBub25oaWdobGlnaHRlZFwiXG4gICAgICAgIH1cbiAgICB9KVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9wSGlnaGxpZ2h0aW5nKCkge1xuICAgIGNvbnN0IGFsbENpdHlDYXRlZ29yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXRlZ29yeVwiKVxuICAgIGFsbENpdHlDYXRlZ29yaWVzLmZvckVhY2goY2l0eUNhdCA9PiB7XG4gICAgICAgIGlmICghY2l0eUNhdC5jbGFzc05hbWUuaW5jbHVkZXMoXCJub25oaWdobGlnaHRlZFwiKSkge1xuICAgICAgICAgICAgY2l0eUNhdC5jbGFzc05hbWUgPSBjaXR5Q2F0LmNsYXNzTmFtZSArIFwiIG5vbmhpZ2hsaWdodGVkXCJcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VQaWMocGljcyxjaXR5LCBwaWNDbGFzc25hbWUpIHtcbiAgICBjb25zdCBiYWNrZ3JvdW5kRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7cGljQ2xhc3NuYW1lfWApO1xuICAgIGJhY2tncm91bmRFbGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3BpY3NbY2l0eV19KWBcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0SXRlbShlbGUsIHRpdGxlQ2xhc3NuYW1lLCBtZW51TGlzdENsYXNzbmFtZSwgZHJvcGRvd25DbGFzc25hbWUsIGNpdHlDaGFydENsYXNzbmFtZSwgdGFibGVDbGFzc25hbWUsIGNpdHlUaXRsZUNsYXNzbmFtZSwgY2l0eVN1bW1hcnlDbGFzc25hbWUsIHBpY3MsIHBpY0NsYXNzbmFtZSwgY2l0eVNjb3JlQ2xhc3NuYW1lKSB7XG4gICAgY29uc3QgZWxlVGV4dCA9IGVsZS50ZXh0Q29udGVudFxuICAgIGNvbnN0IGNpdHlOYW1lTm9TcGFjZXMgPSBlbGUudGV4dENvbnRlbnQucmVwbGFjZSgvXFxzL2csIFwiXCIpXG4gICAgY29uc3QgdGl0bGVFbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRpdGxlQ2xhc3NuYW1lKVxuICAgIGNvbnN0IG1lbnVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihtZW51TGlzdENsYXNzbmFtZSlcbiAgICB0aXRsZUVsZS50ZXh0Q29udGVudCA9IGVsZVRleHQ7XG4gICAgdG9nZ2xlRHJvcGRvd24obWVudUxpc3QsIGRyb3Bkb3duQ2xhc3NuYW1lKTtcblxuICAgIHNob3dDaGFydHMoZWxlVGV4dCwgY2l0eUNoYXJ0Q2xhc3NuYW1lKVxuICAgIHNob3dUYWJsZXMoZWxlVGV4dCwgdGFibGVDbGFzc25hbWUpXG4gICAgc2hvd1RpdGxlKGVsZVRleHQsIGNpdHlUaXRsZUNsYXNzbmFtZSlcbiAgICBzaG93U3VtbWFyeShlbGVUZXh0LCBjaXR5U3VtbWFyeUNsYXNzbmFtZSlcbiAgICBzaG93Q2l0eVNjb3JlKGVsZVRleHQsIGNpdHlTY29yZUNsYXNzbmFtZSlcbiAgICBjaGFuZ2VQaWMocGljcyxjaXR5TmFtZU5vU3BhY2VzLCBwaWNDbGFzc25hbWUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZURyb3Bkb3duKGNsYXNzTmFtZSwgZHJvcGRvd25NZW51Q2xhc3NuYW1lKSB7XG4gICAgY29uc3QgZHJvcGRvd25NZW51TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NsYXNzTmFtZX1gKVxuICAgIGNvbnN0IGRyb3Bkb3duTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2Ryb3Bkb3duTWVudUNsYXNzbmFtZX1gKVxuXG4gICAgaWYgKCFkcm9wZG93bk1lbnVMaXN0LmNsYXNzTmFtZS5pbmNsdWRlcyhcImluYWN0aXZlXCIpKSB7XG4gICAgICAgIGRyb3Bkb3duTWVudUxpc3QuY2xhc3NOYW1lID0gYCR7Y2xhc3NOYW1lfSBpbmFjdGl2ZWBcbiAgICAgICAgZHJvcGRvd25NZW51LnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTBweFwiO1xuICAgIH1cbn1cblxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9