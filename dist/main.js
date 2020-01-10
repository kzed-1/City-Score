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
/* harmony import */ var _main_util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/util.js */ "./src/main/util.js");






var cityData = [];
var name, summary, cityScore;
var citySelection = "/src/data/newyork.json";
var cities = ["/src/data/newyork.json", "/src/data/sanfran.json", "/src/data/seattle.json", "/src/data/toronto.json", "/src/data/boston.json", "/src/data/chicago.json", "/src/data/losangeles.json", "/src/data/dallas.json", "/src/data/phoenix.json", "/src/data/raleigh.json"];

function render() {
  d3.json(citySelection, function (error, data) {
    name = data.name;
    summary = data.summary;
    cityScore = data.teleport_city_score;
    cityData = data.categories;
    Object(_main_chart_js__WEBPACK_IMPORTED_MODULE_1__["default"])(cityData, name);
    Object(_main_table_js__WEBPACK_IMPORTED_MODULE_2__["default"])(cityData, name);
    Object(_main_title_js__WEBPACK_IMPORTED_MODULE_3__["default"])(name);
    Object(_main_summary__WEBPACK_IMPORTED_MODULE_4__["default"])(name, summary);
  });
}

function renderall() {
  cities.forEach(function (city) {
    citySelection = city;
    render();
  });
}

var titleDropDown = document.querySelector(".title");
var menuList = document.querySelector(".menu-list");
var cityList = document.querySelectorAll(".city");
titleDropDown.addEventListener('click', function () {
  return _main_util_js__WEBPACK_IMPORTED_MODULE_5__["toggleDropdown"](menuList);
});
cityList.forEach(function (city) {
  city.addEventListener('click', function () {
    return _main_util_js__WEBPACK_IMPORTED_MODULE_5__["selectItem"](city);
  });
});
renderall();

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


function createBarGraph(cityData, name) {
  // debugger;
  var width = 500;
  var height = 530; // Get length of dataset

  var arrayLength = cityData.length; // length of dataset

  var maxValue = d3.max(cityData, function (d) {
    return +d.score_out_of_10;
  }); // get maximum

  var x_axisLength = 500; // length of x-axis in our layout

  var y_axisLength = 500; // length of y-axis in our layout

  var xScale = d3.scaleLinear().domain([0, maxValue]).range([0, x_axisLength]);
  var svg = d3.select(".chart").append("svg").attr("width", width).attr("height", height);

  if (name === "New York") {
    svg.attr("class", "citychart ".concat(name));
  } else {
    svg.attr("class", "citychart ".concat(name, " hidden"));
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
  }); // Create y-axis

  svg.append("line").attr("x1", 700).attr("y1", 30).attr("x2", 700).attr("y2", 529).attr("stroke-width", 2).attr("stroke", "black"); // Create x-axis

  svg.append("line").attr("x1", 30).attr("y1", 750).attr("x2", 500).attr("y2", 750).attr("stroke-width", 2).attr("stroke", "black");
  var tooltip = d3.select(".chart").append("div").style("position", "absolute").style("font-family", "roboto").style("font-size", "14px").style("z-index", "3").style("visibility", "hidden").style("background-color", "white").style("width", "auto").style("margin", "0 auto").style("border-radius", "10px").style("padding", "10px").style("border", "2px solid black");
}

;
/* harmony default export */ __webpack_exports__["default"] = (createBarGraph);

/***/ }),

/***/ "./src/main/summary.js":
/*!*****************************!*\
  !*** ./src/main/summary.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function createSummary(name, summary) {
  var citySummaryEle = document.createElement("p");
  var sectionEle = document.querySelector("section");
  citySummaryEle.textContent = summary.replace(/[<].{1,2}[>]/g, "");

  if (name === "New York") {
    citySummaryEle.className = "citySummary summary-".concat(name);
  } else {
    citySummaryEle.className = "citySummary summary-".concat(name, " hidden");
  }

  sectionEle.insertAdjacentElement("afterend", citySummaryEle);
}

/* harmony default export */ __webpack_exports__["default"] = (createSummary);

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


function createTable(cityData, name) {
  var columns = ["name", "score_out_of_10"];
  var columnNames = ["Categories", "Score"];
  var table = d3.select('.profile').append('table').attr("class", "table table-".concat(name, " hidden")).style("border-radius", "10px").style("border", "2px solid black");
  var header = table.append("header").attr("class", "table-header");
  var tablebody = table.append("tablebody");

  if (name === "New York") {
    table.attr("class", "table table-".concat(name));
  } else {
    table.attr("class", "table table-".concat(name, " hidden"));
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
    // debugger
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
  }); // .style("width", "177px")
}

/* harmony default export */ __webpack_exports__["default"] = (createTable);

/***/ }),

/***/ "./src/main/title.js":
/*!***************************!*\
  !*** ./src/main/title.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function createTitle(name) {
  var cityName = document.createElement("h1");
  var sectionEle = document.querySelector("section");
  var linkWrapperEle = document.querySelector(".link-wrappers");
  cityName.textContent = name;

  if (name === "New York") {
    cityName.className = "citytitle title-".concat(name);
  } else {
    cityName.className = "citytitle title-".concat(name, " hidden");
  }

  sectionEle.insertBefore(cityName, linkWrapperEle); // sectionEle.appendChild(cityName)
}

/* harmony default export */ __webpack_exports__["default"] = (createTitle);

/***/ }),

/***/ "./src/main/util.js":
/*!**************************!*\
  !*** ./src/main/util.js ***!
  \**************************/
/*! exports provided: toggleDropdown, showCharts, showTables, showTitle, showSummary, lightupCategories, stopHighlighting, selectItem, closeDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleDropdown", function() { return toggleDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showCharts", function() { return showCharts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showTables", function() { return showTables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showTitle", function() { return showTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSummary", function() { return showSummary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightupCategories", function() { return lightupCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopHighlighting", function() { return stopHighlighting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectItem", function() { return selectItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeDropdown", function() { return closeDropdown; });
function toggleDropdown(ele) {
  var dropdownButtonEle = document.querySelector(".dropdown-menu");

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
function showCharts(cityName) {
  var cityNameRemovedSpace = cityName.split(" ")[1];
  var cityChart = document.querySelector(".".concat(cityNameRemovedSpace));
  var allCityCharts = document.querySelectorAll(".citychart");
  allCityCharts.forEach(function (cityChart) {
    if (!cityChart.className.baseVal.includes("hidden")) {
      cityChart.className.baseVal = cityChart.className.baseVal + " hidden";
    }
  });

  if (cityChart.className.baseVal.includes("hidden")) {
    cityChart.className.baseVal = "citychart ".concat(cityName);
  } else {
    cityChart.className.baseVal = cityChart.className.baseVal + " hidden";
  }
}
function showTables(cityName) {
  var cityNameRemovedSpace = cityName.split(" ")[1];
  var cityTable = document.querySelector(".table-".concat(cityNameRemovedSpace));
  var allCityTables = document.querySelectorAll(".table");
  allCityTables.forEach(function (cityTable) {
    if (!cityTable.className.includes("hidden")) {
      cityTable.className = cityTable.className + " hidden";
    }
  });

  if (cityTable.className.includes("hidden")) {
    cityTable.className = "table table-".concat(cityNameRemovedSpace);
  } else {
    cityTable.className = cityTable.className + " hidden";
  }
}
function showTitle(cityName) {
  var cityNameRemovedSpace = cityName.split(" ")[1];
  var cityTitle = document.querySelector(".title-".concat(cityNameRemovedSpace));
  var allCityTitle = document.querySelectorAll(".citytitle");
  allCityTitle.forEach(function (cityTitle) {
    if (!cityTitle.className.includes("hidden")) {
      cityTitle.className = cityTitle.className + " hidden";
    }
  });

  if (cityTitle.className.includes("hidden")) {
    cityTitle.className = "citytitle title-".concat(cityNameRemovedSpace);
  } else {
    cityTitle.className = cityTitle.className + " hidden";
  }
}
function showSummary(cityName) {
  var cityNameRemovedSpace = cityName.split(" ")[1];
  var citySummary = document.querySelector(".summary-".concat(cityNameRemovedSpace));
  var allCitySummary = document.querySelectorAll(".citySummary");
  allCitySummary.forEach(function (citySummary) {
    if (!citySummary.className.includes("hidden")) {
      citySummary.className = citySummary.className + " hidden";
    }
  });

  if (citySummary.className.includes("hidden")) {
    citySummary.className = "citySummary summary-".concat(cityNameRemovedSpace);
  } else {
    citySummary.className = citySummary.className + " hidden";
  }
} // add event listener on the bars to 

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
function selectItem(ele) {
  var eleText = ele.textContent;
  var titleEle = document.querySelector(".title");
  var menuList = document.querySelector(".menu-list");
  titleEle.textContent = eleText;
  toggleDropdown(menuList);
  showCharts(eleText);
  showTables(eleText);
  showTitle(eleText);
  showSummary(eleText);
}
function closeDropdown() {
  var dropdownMenu = document.querySelector(".menu-list");

  if (!dropdownMenu.className.includes("inactive")) {
    dropdownMenu.className = "menu-list inactive";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3N1bW1hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vdGl0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/ZGMyYSJdLCJuYW1lcyI6WyJjaXR5RGF0YSIsIm5hbWUiLCJzdW1tYXJ5IiwiY2l0eVNjb3JlIiwiY2l0eVNlbGVjdGlvbiIsImNpdGllcyIsInJlbmRlciIsImQzIiwianNvbiIsImVycm9yIiwiZGF0YSIsInRlbGVwb3J0X2NpdHlfc2NvcmUiLCJjYXRlZ29yaWVzIiwiY3JlYXRlQmFyR3JhcGgiLCJjcmVhdGVUYWJsZSIsImNyZWF0ZVRpdGxlIiwiY3JlYXRlU3VtbWFyeSIsInJlbmRlcmFsbCIsImZvckVhY2giLCJjaXR5IiwidGl0bGVEcm9wRG93biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnVMaXN0IiwiY2l0eUxpc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsIlV0aWwiLCJ3aWR0aCIsImhlaWdodCIsImFycmF5TGVuZ3RoIiwibGVuZ3RoIiwibWF4VmFsdWUiLCJtYXgiLCJkIiwic2NvcmVfb3V0X29mXzEwIiwieF9heGlzTGVuZ3RoIiwieV9heGlzTGVuZ3RoIiwieFNjYWxlIiwic2NhbGVMaW5lYXIiLCJkb21haW4iLCJyYW5nZSIsInN2ZyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJzZWxlY3RBbGwiLCJlbnRlciIsImkiLCJjb2xvciIsIm9uIiwibmV3U3RyIiwicmVwbGFjZSIsIm5ld1N0cjIiLCJ0b29sdGlwIiwic3R5bGUiLCJ0ZXh0IiwiZXZlbnQiLCJwYWdlWSIsInBhZ2VYIiwidG9GaXhlZCIsImNpdHlTdW1tYXJ5RWxlIiwiY3JlYXRlRWxlbWVudCIsInNlY3Rpb25FbGUiLCJ0ZXh0Q29udGVudCIsImNsYXNzTmFtZSIsImluc2VydEFkamFjZW50RWxlbWVudCIsImNvbHVtbnMiLCJjb2x1bW5OYW1lcyIsInRhYmxlIiwiaGVhZGVyIiwidGFibGVib2R5Iiwicm93cyIsImNlbGxzIiwicm93IiwibWFwIiwiY29sdW1uIiwidmFsdWUiLCJjaXR5TmFtZSIsImxpbmtXcmFwcGVyRWxlIiwiaW5zZXJ0QmVmb3JlIiwidG9nZ2xlRHJvcGRvd24iLCJlbGUiLCJkcm9wZG93bkJ1dHRvbkVsZSIsImluY2x1ZGVzIiwic3BsaXQiLCJib3JkZXJSYWRpdXMiLCJzaG93Q2hhcnRzIiwiY2l0eU5hbWVSZW1vdmVkU3BhY2UiLCJjaXR5Q2hhcnQiLCJhbGxDaXR5Q2hhcnRzIiwiYmFzZVZhbCIsInNob3dUYWJsZXMiLCJjaXR5VGFibGUiLCJhbGxDaXR5VGFibGVzIiwic2hvd1RpdGxlIiwiY2l0eVRpdGxlIiwiYWxsQ2l0eVRpdGxlIiwic2hvd1N1bW1hcnkiLCJjaXR5U3VtbWFyeSIsImFsbENpdHlTdW1tYXJ5IiwibGlnaHR1cENhdGVnb3JpZXMiLCJpZCIsImNpdHlDYXRlZ29yeSIsImFsbENpdHlDYXRlZ29yaWVzIiwiY2l0eUNhdCIsInN0b3BIaWdobGlnaHRpbmciLCJzZWxlY3RJdGVtIiwiZWxlVGV4dCIsInRpdGxlRWxlIiwiY2xvc2VEcm9wZG93biIsImRyb3Bkb3duTWVudSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNB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Q0FBTCxFQUFrRDtBQUM5QzJCLGdCQUFZLENBQUM5QyxTQUFiLEdBQXlCLG9CQUF6QjtBQUNIO0FBQ0osQzs7Ozs7Ozs7Ozs7QUNySkQsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCBjcmVhdGVCYXJHcmFwaCBmcm9tICcuL21haW4vY2hhcnQuanMnO1xuaW1wb3J0IGNyZWF0ZVRhYmxlIGZyb20gJy4vbWFpbi90YWJsZS5qcyc7XG5pbXBvcnQgY3JlYXRlVGl0bGUgZnJvbSAnLi9tYWluL3RpdGxlLmpzJztcbmltcG9ydCBjcmVhdGVTdW1tYXJ5IGZyb20gJy4vbWFpbi9zdW1tYXJ5JztcbmltcG9ydCAqIGFzIFV0aWwgZnJvbSAnLi9tYWluL3V0aWwuanMnO1xuXG5cblxubGV0IGNpdHlEYXRhID0gW11cbmxldCBuYW1lLCBzdW1tYXJ5LCBjaXR5U2NvcmU7XG5cbmxldCBjaXR5U2VsZWN0aW9uID0gXCIvc3JjL2RhdGEvbmV3eW9yay5qc29uXCJcblxuY29uc3QgY2l0aWVzID0gW1xuICAgIFwiL3NyYy9kYXRhL25ld3lvcmsuanNvblwiLCBcIi9zcmMvZGF0YS9zYW5mcmFuLmpzb25cIiwgXCIvc3JjL2RhdGEvc2VhdHRsZS5qc29uXCIsIFxuICAgIFwiL3NyYy9kYXRhL3Rvcm9udG8uanNvblwiLCBcIi9zcmMvZGF0YS9ib3N0b24uanNvblwiLCBcIi9zcmMvZGF0YS9jaGljYWdvLmpzb25cIiwgXG4gICAgXCIvc3JjL2RhdGEvbG9zYW5nZWxlcy5qc29uXCIsIFwiL3NyYy9kYXRhL2RhbGxhcy5qc29uXCIsIFwiL3NyYy9kYXRhL3Bob2VuaXguanNvblwiLCBcbiAgICBcIi9zcmMvZGF0YS9yYWxlaWdoLmpzb25cIlxuICAgIF0gXG5cblxuZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGQzLmpzb24oY2l0eVNlbGVjdGlvbiwgZnVuY3Rpb24gKGVycm9yLCBkYXRhKSB7XG5cbiAgICAgICAgbmFtZSA9IGRhdGEubmFtZVxuICAgICAgICBzdW1tYXJ5ID0gZGF0YS5zdW1tYXJ5XG4gICAgICAgIGNpdHlTY29yZSA9IGRhdGEudGVsZXBvcnRfY2l0eV9zY29yZVxuICAgICAgICBjaXR5RGF0YSA9IGRhdGEuY2F0ZWdvcmllc1xuICAgICAgICBjcmVhdGVCYXJHcmFwaChjaXR5RGF0YSwgbmFtZSk7XG4gICAgICAgIGNyZWF0ZVRhYmxlKGNpdHlEYXRhLCBuYW1lKTtcbiAgICAgICAgY3JlYXRlVGl0bGUobmFtZSk7XG4gICAgICAgIGNyZWF0ZVN1bW1hcnkobmFtZSwgc3VtbWFyeSk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gcmVuZGVyYWxsKCkge1xuICAgIGNpdGllcy5mb3JFYWNoKGNpdHkgPT4ge1xuICAgICAgICBjaXR5U2VsZWN0aW9uID0gY2l0eSBcbiAgICAgICAgcmVuZGVyKClcbiAgICB9KTtcbn1cblxuXG5jb25zdCB0aXRsZURyb3BEb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKVxuY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtbGlzdFwiKVxuY29uc3QgY2l0eUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNpdHlcIilcblxuXG50aXRsZURyb3BEb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gVXRpbC50b2dnbGVEcm9wZG93bihtZW51TGlzdCkpXG5cbmNpdHlMaXN0LmZvckVhY2goY2l0eSA9PiB7XG4gICAgY2l0eS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFV0aWwuc2VsZWN0SXRlbShjaXR5KSlcbn0pXG5cbnJlbmRlcmFsbCgpXG5cblxuXG4iLCJpbXBvcnQgKiBhcyBVdGlsIGZyb20gXCIuL3V0aWxcIjtcblxuXG5mdW5jdGlvbiBjcmVhdGVCYXJHcmFwaChjaXR5RGF0YSwgbmFtZSkge1xuICAgIC8vIGRlYnVnZ2VyO1xuICAgIHZhciB3aWR0aCA9IDUwMDtcbiAgICB2YXIgaGVpZ2h0ID0gNTMwO1xuXG4gICAgLy8gR2V0IGxlbmd0aCBvZiBkYXRhc2V0XG4gICAgdmFyIGFycmF5TGVuZ3RoID0gY2l0eURhdGEubGVuZ3RoOyAvLyBsZW5ndGggb2YgZGF0YXNldFxuICAgIHZhciBtYXhWYWx1ZSA9IGQzLm1heChjaXR5RGF0YSwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuICtkLnNjb3JlX291dF9vZl8xMDsgfSk7IC8vIGdldCBtYXhpbXVtXG4gICAgdmFyIHhfYXhpc0xlbmd0aCA9IDUwMDsgLy8gbGVuZ3RoIG9mIHgtYXhpcyBpbiBvdXIgbGF5b3V0XG4gICAgdmFyIHlfYXhpc0xlbmd0aCA9IDUwMDsgLy8gbGVuZ3RoIG9mIHktYXhpcyBpbiBvdXIgbGF5b3V0XG5cblxuICAgIHZhciB4U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgIC5kb21haW4oWzAsIG1heFZhbHVlXSlcbiAgICAgICAgLnJhbmdlKFswLCB4X2F4aXNMZW5ndGhdKTtcblxuICAgIHZhciBzdmcgPSBkMy5zZWxlY3QoXCIuY2hhcnRcIilcbiAgICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoKVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQpO1xuXG4gICAgaWYgKG5hbWUgPT09IFwiTmV3IFlvcmtcIikge1xuICAgICAgICBzdmcuYXR0cihcImNsYXNzXCIsIGBjaXR5Y2hhcnQgJHtuYW1lfWApXG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBzdmcuYXR0cihcImNsYXNzXCIsIGBjaXR5Y2hhcnQgJHtuYW1lfSBoaWRkZW5gKVxuICAgIH1cblxuXG4gICAgc3ZnLnNlbGVjdEFsbChcInJlY3RcIilcbiAgICAgICAgLmRhdGEoY2l0eURhdGEpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIGkgKiAoeV9heGlzTGVuZ3RoIC8gYXJyYXlMZW5ndGgpICsgMzA7XG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKFwieFwiLCAwKVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCAoeV9heGlzTGVuZ3RoIC8gYXJyYXlMZW5ndGgpIC0gMSlcbiAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIHhTY2FsZShkLnNjb3JlX291dF9vZl8xMCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKFwiZmlsbFwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIGQuY29sb3JcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIGBiYXIgJHtkLm5hbWV9YDtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdTdHIgPSBkLm5hbWUucmVwbGFjZSgvXFxzL2csIFwiXCIpXG4gICAgICAgICAgICBjb25zdCBuZXdTdHIyID0gbmV3U3RyLnJlcGxhY2UoL1smXS9nLCBcIlwiKVxuICAgICAgICAgICAgVXRpbC5saWdodHVwQ2F0ZWdvcmllcyhuZXdTdHIyKVxuICAgICAgICAgICAgcmV0dXJuIHRvb2x0aXAuc3R5bGUoXCJ2aXNpYmlsaXR5XCIsIFwidmlzaWJsZVwiKS50ZXh0KGQubmFtZSArIFwiOiBcIiArIGQuc2NvcmVfb3V0X29mXzEwKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwibW91c2Vtb3ZlXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9vbHRpcC5zdHlsZShcInRvcFwiLCAoZDMuZXZlbnQucGFnZVkgLSAxMCkgKyBcInB4XCIpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwibGVmdFwiLCAoZDMuZXZlbnQucGFnZVggKyAxMCkgKyBcInB4XCIpLnRleHQoZC5uYW1lICsgXCI6IFwiICsgZC5zY29yZV9vdXRfb2ZfMTAudG9GaXhlZCgyKSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICBVdGlsLnN0b3BIaWdobGlnaHRpbmcoKVxuICAgICAgICAgICAgcmV0dXJuIHRvb2x0aXAuc3R5bGUoXCJ2aXNpYmlsaXR5XCIsIFwiaGlkZGVuXCIpXG4gICAgICAgIH0pXG5cblxuICAgIC8vIENyZWF0ZSB5LWF4aXNcbiAgICBzdmcuYXBwZW5kKFwibGluZVwiKVxuICAgICAgICAuYXR0cihcIngxXCIsIDcwMClcbiAgICAgICAgLmF0dHIoXCJ5MVwiLCAzMClcbiAgICAgICAgLmF0dHIoXCJ4MlwiLCA3MDApXG4gICAgICAgIC5hdHRyKFwieTJcIiwgNTI5KVxuICAgICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAyKVxuICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBcImJsYWNrXCIpO1xuXG4gICAgLy8gQ3JlYXRlIHgtYXhpc1xuICAgIHN2Zy5hcHBlbmQoXCJsaW5lXCIpXG4gICAgICAgIC5hdHRyKFwieDFcIiwgMzApXG4gICAgICAgIC5hdHRyKFwieTFcIiwgNzUwKVxuICAgICAgICAuYXR0cihcIngyXCIsIDUwMClcbiAgICAgICAgLmF0dHIoXCJ5MlwiLCA3NTApXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDIpXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiYmxhY2tcIik7XG5cblxuXG4gICAgdmFyIHRvb2x0aXAgPSBkMy5zZWxlY3QoXCIuY2hhcnRcIilcbiAgICAgICAgLmFwcGVuZChcImRpdlwiKVxuICAgICAgICAuc3R5bGUoXCJwb3NpdGlvblwiLCBcImFic29sdXRlXCIpXG4gICAgICAgIC5zdHlsZShcImZvbnQtZmFtaWx5XCIsIFwicm9ib3RvXCIpXG4gICAgICAgIC5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjE0cHhcIilcbiAgICAgICAgLnN0eWxlKFwiei1pbmRleFwiLCBcIjNcIilcbiAgICAgICAgLnN0eWxlKFwidmlzaWJpbGl0eVwiLCBcImhpZGRlblwiKVxuICAgICAgICAuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwid2hpdGVcIilcbiAgICAgICAgLnN0eWxlKFwid2lkdGhcIiwgXCJhdXRvXCIpXG4gICAgICAgIC5zdHlsZShcIm1hcmdpblwiLCBcIjAgYXV0b1wiKVxuICAgICAgICAuc3R5bGUoXCJib3JkZXItcmFkaXVzXCIsIFwiMTBweFwiKVxuICAgICAgICAuc3R5bGUoXCJwYWRkaW5nXCIsIFwiMTBweFwiKVxuICAgICAgICAuc3R5bGUoXCJib3JkZXJcIiwgXCIycHggc29saWQgYmxhY2tcIilcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUJhckdyYXBoOyIsImZ1bmN0aW9uIGNyZWF0ZVN1bW1hcnkobmFtZSwgc3VtbWFyeSkge1xuICAgIGNvbnN0IGNpdHlTdW1tYXJ5RWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBjb25zdCBzZWN0aW9uRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlY3Rpb25cIilcblxuICAgIGNpdHlTdW1tYXJ5RWxlLnRleHRDb250ZW50ID0gc3VtbWFyeS5yZXBsYWNlKC9bPF0uezEsMn1bPl0vZywgXCJcIilcblxuICAgIGlmIChuYW1lID09PSBcIk5ldyBZb3JrXCIpIHtcbiAgICAgICAgY2l0eVN1bW1hcnlFbGUuY2xhc3NOYW1lID0gYGNpdHlTdW1tYXJ5IHN1bW1hcnktJHtuYW1lfWBcbiAgICB9IGVsc2Uge1xuICAgICAgICBjaXR5U3VtbWFyeUVsZS5jbGFzc05hbWUgPSBgY2l0eVN1bW1hcnkgc3VtbWFyeS0ke25hbWV9IGhpZGRlbmBcbiAgICB9XG5cbiAgICBzZWN0aW9uRWxlLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyZW5kXCIsIGNpdHlTdW1tYXJ5RWxlKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdW1tYXJ5OyIsImltcG9ydCAqIGFzIFV0aWwgZnJvbSAnLi91dGlsLmpzJ1xuXG5mdW5jdGlvbiBjcmVhdGVUYWJsZShjaXR5RGF0YSwgbmFtZSkge1xuXG4gICAgY29uc3QgY29sdW1ucyA9IFtcIm5hbWVcIiwgXCJzY29yZV9vdXRfb2ZfMTBcIl1cbiAgICBjb25zdCBjb2x1bW5OYW1lcyA9IFtcIkNhdGVnb3JpZXNcIiwgXCJTY29yZVwiXVxuXG4gICAgbGV0IHRhYmxlID0gZDMuc2VsZWN0KCcucHJvZmlsZScpXG4gICAgICAgIC5hcHBlbmQoJ3RhYmxlJylcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBgdGFibGUgdGFibGUtJHtuYW1lfSBoaWRkZW5gKVxuICAgICAgICAuc3R5bGUoXCJib3JkZXItcmFkaXVzXCIsIFwiMTBweFwiKVxuICAgICAgICAuc3R5bGUoXCJib3JkZXJcIiwgXCIycHggc29saWQgYmxhY2tcIik7XG4gICAgbGV0IGhlYWRlciA9IHRhYmxlXG4gICAgICAgIC5hcHBlbmQoXCJoZWFkZXJcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInRhYmxlLWhlYWRlclwiKTtcbiAgICBsZXQgdGFibGVib2R5ID0gdGFibGUuYXBwZW5kKFwidGFibGVib2R5XCIpO1xuXG4gICAgaWYgKG5hbWUgPT09IFwiTmV3IFlvcmtcIikge1xuICAgICAgICB0YWJsZS5hdHRyKFwiY2xhc3NcIiwgYHRhYmxlIHRhYmxlLSR7bmFtZX1gKVxuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGFibGUuYXR0cihcImNsYXNzXCIsIGB0YWJsZSB0YWJsZS0ke25hbWV9IGhpZGRlbmApXG4gICAgfVxuXG4gICAgaGVhZGVyXG4gICAgICAgIC5hcHBlbmQoXCJ0clwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiaGVhZGVyLXdyYXBwZXJcIilcbiAgICAgICAgLnN0eWxlKFwiY29sb3JcIiwgXCJibHVlXCIpXG4gICAgICAgIC5zZWxlY3RBbGwoXCJ0aFwiKVxuICAgICAgICAuZGF0YShjb2x1bW5OYW1lcylcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZChcInRoXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBkO1xuICAgICAgICB9KVxuICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFsaWduXCIsIFwiY2VudGVyXCIpXG4gICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gZDtcbiAgICAgICAgfSlcblxuXG5cbiAgICBsZXQgcm93cyA9IHRhYmxlYm9keVxuICAgICAgICAuc2VsZWN0QWxsKFwidHJcIilcbiAgICAgICAgLmRhdGEoY2l0eURhdGEpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJ0clwiKTtcblxuXG4gICAgbGV0IGNlbGxzID0gcm93cy5zZWxlY3RBbGwoXCJ0ZFwiKVxuICAgICAgICAuZGF0YShmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgICByZXR1cm4gY29sdW1ucy5tYXAoZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbjogY29sdW1uLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcm93W2NvbHVtbl1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwidGRcIilcbiAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZC52YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIGlmIChkLnZhbHVlLnRvRml4ZWQoMikgPT09IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIjEwLjAgLzEwXCJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYCR7ZC52YWx1ZS50b0ZpeGVkKDIpfSAvMTBgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZC52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkLnZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3RyID0gZC52YWx1ZS5yZXBsYWNlKC9cXHMvZywgXCJcIilcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTdHIyID0gbmV3U3RyLnJlcGxhY2UoL1smXS9nLCBcIlwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBgY2F0ZWdvcnkgJHtuZXdTdHIyfSBub25oaWdobGlnaHRlZGBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGBjYXRlZ29yeSAke2QudmFsdWV9IG5vbmhpZ2hsaWdodGVkYFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcImlkXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGQudmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTdHIgPSBkLnZhbHVlLnJlcGxhY2UoL1xccy9nLCBcIlwiKVxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1N0cjIgPSBuZXdTdHIucmVwbGFjZSgvWyZdL2csIFwiXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1N0cjJcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGQudmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAvLyAuc3R5bGUoXCJ3aWR0aFwiLCBcIjE3N3B4XCIpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhYmxlOyIsImZ1bmN0aW9uIGNyZWF0ZVRpdGxlKG5hbWUpIHtcbiAgICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICAgIGNvbnN0IHNlY3Rpb25FbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VjdGlvblwiKVxuICAgIGNvbnN0IGxpbmtXcmFwcGVyRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saW5rLXdyYXBwZXJzXCIpXG5cbiAgICBjaXR5TmFtZS50ZXh0Q29udGVudCA9IG5hbWVcblxuICAgIGlmIChuYW1lID09PSBcIk5ldyBZb3JrXCIpIHtcbiAgICAgICAgY2l0eU5hbWUuY2xhc3NOYW1lID0gYGNpdHl0aXRsZSB0aXRsZS0ke25hbWV9YFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNpdHlOYW1lLmNsYXNzTmFtZSA9IGBjaXR5dGl0bGUgdGl0bGUtJHtuYW1lfSBoaWRkZW5gXG4gICAgfVxuICAgIHNlY3Rpb25FbGUuaW5zZXJ0QmVmb3JlKGNpdHlOYW1lLCBsaW5rV3JhcHBlckVsZSlcbiAgICAvLyBzZWN0aW9uRWxlLmFwcGVuZENoaWxkKGNpdHlOYW1lKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUaXRsZTsiLCJleHBvcnQgZnVuY3Rpb24gdG9nZ2xlRHJvcGRvd24oZWxlKSB7XG4gICAgY29uc3QgZHJvcGRvd25CdXR0b25FbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLW1lbnVcIilcbiAgICBpZiAoZWxlLmNsYXNzTmFtZS5pbmNsdWRlcyhcImluYWN0aXZlXCIpKSB7XG4gICAgICAgIGVsZS5jbGFzc05hbWUgPSBlbGUuY2xhc3NOYW1lLnNwbGl0KFwiIFwiKVswXVxuICAgICAgICBlbGUuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIwIDAgMTBweCAxMHB4XCJcbiAgICAgICAgZHJvcGRvd25CdXR0b25FbGUuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMHB4IDEwcHggMCAwXCJcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZS5jbGFzc05hbWUgPSBlbGUuY2xhc3NOYW1lICsgXCIgaW5hY3RpdmVcIlxuICAgICAgICBlbGUuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMHB4XCJcbiAgICAgICAgZHJvcGRvd25CdXR0b25FbGUuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMHB4XCJcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93Q2hhcnRzKGNpdHlOYW1lKSB7XG4gICAgY29uc3QgY2l0eU5hbWVSZW1vdmVkU3BhY2UgPSBjaXR5TmFtZS5zcGxpdChcIiBcIilbMV1cbiAgICBjb25zdCBjaXR5Q2hhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjaXR5TmFtZVJlbW92ZWRTcGFjZX1gKVxuXG5cbiAgICBjb25zdCBhbGxDaXR5Q2hhcnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaXR5Y2hhcnRcIilcbiAgICBhbGxDaXR5Q2hhcnRzLmZvckVhY2goY2l0eUNoYXJ0ID0+IHtcbiAgICAgICAgaWYgKCFjaXR5Q2hhcnQuY2xhc3NOYW1lLmJhc2VWYWwuaW5jbHVkZXMoXCJoaWRkZW5cIikpIHtcbiAgICAgICAgICAgIGNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbCA9IGNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbCArIFwiIGhpZGRlblwiXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbC5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICBjaXR5Q2hhcnQuY2xhc3NOYW1lLmJhc2VWYWwgPSBgY2l0eWNoYXJ0ICR7Y2l0eU5hbWV9YFxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgY2l0eUNoYXJ0LmNsYXNzTmFtZS5iYXNlVmFsID0gY2l0eUNoYXJ0LmNsYXNzTmFtZS5iYXNlVmFsICsgXCIgaGlkZGVuXCJcblxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dUYWJsZXMoY2l0eU5hbWUpIHtcbiAgICBjb25zdCBjaXR5TmFtZVJlbW92ZWRTcGFjZSA9IGNpdHlOYW1lLnNwbGl0KFwiIFwiKVsxXVxuICAgIGNvbnN0IGNpdHlUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50YWJsZS0ke2NpdHlOYW1lUmVtb3ZlZFNwYWNlfWApXG5cbiAgICBjb25zdCBhbGxDaXR5VGFibGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJsZVwiKVxuICAgIGFsbENpdHlUYWJsZXMuZm9yRWFjaChjaXR5VGFibGUgPT4ge1xuICAgICAgICBpZiAoIWNpdHlUYWJsZS5jbGFzc05hbWUuaW5jbHVkZXMoXCJoaWRkZW5cIikpIHtcbiAgICAgICAgICAgIGNpdHlUYWJsZS5jbGFzc05hbWUgPSBjaXR5VGFibGUuY2xhc3NOYW1lICsgXCIgaGlkZGVuXCJcblxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGlmIChjaXR5VGFibGUuY2xhc3NOYW1lLmluY2x1ZGVzKFwiaGlkZGVuXCIpKSB7XG4gICAgICAgIGNpdHlUYWJsZS5jbGFzc05hbWUgPSBgdGFibGUgdGFibGUtJHtjaXR5TmFtZVJlbW92ZWRTcGFjZX1gXG4gICAgfSBlbHNlIHtcblxuICAgICAgICBjaXR5VGFibGUuY2xhc3NOYW1lID0gY2l0eVRhYmxlLmNsYXNzTmFtZSArIFwiIGhpZGRlblwiXG5cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93VGl0bGUoY2l0eU5hbWUpIHtcbiAgICBjb25zdCBjaXR5TmFtZVJlbW92ZWRTcGFjZSA9IGNpdHlOYW1lLnNwbGl0KFwiIFwiKVsxXVxuICAgIGNvbnN0IGNpdHlUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50aXRsZS0ke2NpdHlOYW1lUmVtb3ZlZFNwYWNlfWApXG5cbiAgICBjb25zdCBhbGxDaXR5VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNpdHl0aXRsZVwiKVxuICAgIGFsbENpdHlUaXRsZS5mb3JFYWNoKGNpdHlUaXRsZSA9PiB7XG4gICAgICAgIGlmICghY2l0eVRpdGxlLmNsYXNzTmFtZS5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICAgICAgY2l0eVRpdGxlLmNsYXNzTmFtZSA9IGNpdHlUaXRsZS5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxuXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNpdHlUaXRsZS5jbGFzc05hbWUuaW5jbHVkZXMoXCJoaWRkZW5cIikpIHtcbiAgICAgICAgY2l0eVRpdGxlLmNsYXNzTmFtZSA9IGBjaXR5dGl0bGUgdGl0bGUtJHtjaXR5TmFtZVJlbW92ZWRTcGFjZX1gXG4gICAgfSBlbHNlIHtcblxuICAgICAgICBjaXR5VGl0bGUuY2xhc3NOYW1lID0gY2l0eVRpdGxlLmNsYXNzTmFtZSArIFwiIGhpZGRlblwiXG5cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93U3VtbWFyeShjaXR5TmFtZSkge1xuICAgIGNvbnN0IGNpdHlOYW1lUmVtb3ZlZFNwYWNlID0gY2l0eU5hbWUuc3BsaXQoXCIgXCIpWzFdXG4gICAgY29uc3QgY2l0eVN1bW1hcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc3VtbWFyeS0ke2NpdHlOYW1lUmVtb3ZlZFNwYWNlfWApXG5cbiAgICBjb25zdCBhbGxDaXR5U3VtbWFyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2l0eVN1bW1hcnlcIilcbiAgICBhbGxDaXR5U3VtbWFyeS5mb3JFYWNoKGNpdHlTdW1tYXJ5ID0+IHtcbiAgICAgICAgaWYgKCFjaXR5U3VtbWFyeS5jbGFzc05hbWUuaW5jbHVkZXMoXCJoaWRkZW5cIikpIHtcbiAgICAgICAgICAgIGNpdHlTdW1tYXJ5LmNsYXNzTmFtZSA9IGNpdHlTdW1tYXJ5LmNsYXNzTmFtZSArIFwiIGhpZGRlblwiXG5cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoY2l0eVN1bW1hcnkuY2xhc3NOYW1lLmluY2x1ZGVzKFwiaGlkZGVuXCIpKSB7XG4gICAgICAgIGNpdHlTdW1tYXJ5LmNsYXNzTmFtZSA9IGBjaXR5U3VtbWFyeSBzdW1tYXJ5LSR7Y2l0eU5hbWVSZW1vdmVkU3BhY2V9YFxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgY2l0eVN1bW1hcnkuY2xhc3NOYW1lID0gY2l0eVN1bW1hcnkuY2xhc3NOYW1lICsgXCIgaGlkZGVuXCJcblxuICAgIH1cbn1cblxuLy8gYWRkIGV2ZW50IGxpc3RlbmVyIG9uIHRoZSBiYXJzIHRvIFxuXG5leHBvcnQgZnVuY3Rpb24gbGlnaHR1cENhdGVnb3JpZXMoaWQpIHtcbiAgICBjb25zdCBjaXR5Q2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHtpZH1gKVxuICAgIGNvbnN0IGFsbENpdHlDYXRlZ29yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXRlZ29yeVwiKVxuICAgIGFsbENpdHlDYXRlZ29yaWVzLmZvckVhY2goY2l0eUNhdCA9PiB7XG4gICAgICAgIGlmICghY2l0eUNhdC5jbGFzc05hbWUuaW5jbHVkZXMoXCJub25oaWdobGlnaHRlZFwiKSkge1xuICAgICAgICAgICAgY2l0eUNhdC5jbGFzc05hbWUgPSBjaXR5Q2F0LmNsYXNzTmFtZSArIFwiIG5vbmhpZ2hsaWdodGVkXCJcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjaXR5Q2F0ZWdvcnkuZm9yRWFjaChjaXR5Q2F0ID0+IHtcbiAgICAgICAgaWYgKGNpdHlDYXQuY2xhc3NOYW1lLmluY2x1ZGVzKGBjYXRlZ29yeSAke2lkfSBub25oaWdobGlnaHRlZGApKSB7XG4gICAgICAgICAgICBjaXR5Q2F0LmNsYXNzTmFtZSA9IGBjYXRlZ29yeSAke2lkfWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNpdHlDYXQuY2xhc3NOYW1lID0gY2l0eUNhdC5jbGFzc05hbWUgKyBcIiBub25oaWdobGlnaHRlZFwiXG4gICAgICAgIH1cbiAgICB9KVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9wSGlnaGxpZ2h0aW5nKCkge1xuICAgIGNvbnN0IGFsbENpdHlDYXRlZ29yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXRlZ29yeVwiKVxuICAgIGFsbENpdHlDYXRlZ29yaWVzLmZvckVhY2goY2l0eUNhdCA9PiB7XG4gICAgICAgIGlmICghY2l0eUNhdC5jbGFzc05hbWUuaW5jbHVkZXMoXCJub25oaWdobGlnaHRlZFwiKSkge1xuICAgICAgICAgICAgY2l0eUNhdC5jbGFzc05hbWUgPSBjaXR5Q2F0LmNsYXNzTmFtZSArIFwiIG5vbmhpZ2hsaWdodGVkXCJcbiAgICAgICAgfVxuICAgIH0pXG59XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0SXRlbShlbGUpIHtcbiAgICBjb25zdCBlbGVUZXh0ID0gZWxlLnRleHRDb250ZW50XG4gICAgY29uc3QgdGl0bGVFbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlXCIpXG4gICAgY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtbGlzdFwiKVxuICAgIHRpdGxlRWxlLnRleHRDb250ZW50ID0gZWxlVGV4dDtcbiAgICB0b2dnbGVEcm9wZG93bihtZW51TGlzdCk7XG5cbiAgICBzaG93Q2hhcnRzKGVsZVRleHQpXG4gICAgc2hvd1RhYmxlcyhlbGVUZXh0KVxuICAgIHNob3dUaXRsZShlbGVUZXh0KVxuICAgIHNob3dTdW1tYXJ5KGVsZVRleHQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZURyb3Bkb3duKCkge1xuICAgIGNvbnN0IGRyb3Bkb3duTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1saXN0XCIpXG5cbiAgICBpZiAoIWRyb3Bkb3duTWVudS5jbGFzc05hbWUuaW5jbHVkZXMoXCJpbmFjdGl2ZVwiKSkge1xuICAgICAgICBkcm9wZG93bk1lbnUuY2xhc3NOYW1lID0gXCJtZW51LWxpc3QgaW5hY3RpdmVcIlxuICAgIH1cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9