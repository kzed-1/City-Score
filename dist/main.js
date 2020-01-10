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
} // const titleDropDown = document.querySelector(".title-dropdown-wrapper")


var titleDropDownButton = document.querySelector(".title");
var menuList = document.querySelector(".menu-list");
var cityList = document.querySelectorAll(".city");
titleDropDownButton.addEventListener('click', function () {
  return _main_util_js__WEBPACK_IMPORTED_MODULE_5__["toggleDropdown"](menuList);
});
titleDropDownButton.addEventListener('blur', function () {
  return _main_util_js__WEBPACK_IMPORTED_MODULE_5__["closeDropdown"]();
});
menuList.addEventListener('blur', function () {
  return _main_util_js__WEBPACK_IMPORTED_MODULE_5__["closeDropdown"]();
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
  });
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
  debugger;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3N1bW1hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vdGl0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/ZGMyYSJdLCJuYW1lcyI6WyJjaXR5RGF0YSIsIm5hbWUiLCJzdW1tYXJ5IiwiY2l0eVNjb3JlIiwiY2l0eVNlbGVjdGlvbiIsImNpdGllcyIsInJlbmRlciIsImQzIiwianNvbiIsImVycm9yIiwiZGF0YSIsInRlbGVwb3J0X2NpdHlfc2NvcmUiLCJjYXRlZ29yaWVzIiwiY3JlYXRlQmFyR3JhcGgiLCJjcmVhdGVUYWJsZSIsImNyZWF0ZVRpdGxlIiwiY3JlYXRlU3VtbWFyeSIsInJlbmRlcmFsbCIsImZvckVhY2giLCJjaXR5IiwidGl0bGVEcm9wRG93bkJ1dHRvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnVMaXN0IiwiY2l0eUxpc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsIlV0aWwiLCJ3aWR0aCIsImhlaWdodCIsImFycmF5TGVuZ3RoIiwibGVuZ3RoIiwibWF4VmFsdWUiLCJtYXgiLCJkIiwic2NvcmVfb3V0X29mXzEwIiwieF9heGlzTGVuZ3RoIiwieV9heGlzTGVuZ3RoIiwieFNjYWxlIiwic2NhbGVMaW5lYXIiLCJkb21haW4iLCJyYW5nZSIsInN2ZyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJzZWxlY3RBbGwiLCJlbnRlciIsImkiLCJjb2xvciIsIm9uIiwibmV3U3RyIiwicmVwbGFjZSIsIm5ld1N0cjIiLCJ0b29sdGlwIiwic3R5bGUiLCJ0ZXh0IiwiZXZlbnQiLCJwYWdlWSIsInBhZ2VYIiwidG9GaXhlZCIsImNpdHlTdW1tYXJ5RWxlIiwiY3JlYXRlRWxlbWVudCIsInNlY3Rpb25FbGUiLCJ0ZXh0Q29udGVudCIsImNsYXNzTmFtZSIsImluc2VydEFkamFjZW50RWxlbWVudCIsImNvbHVtbnMiLCJjb2x1bW5OYW1lcyIsInRhYmxlIiwiaGVhZGVyIiwidGFibGVib2R5Iiwicm93cyIsImNlbGxzIiwicm93IiwibWFwIiwiY29sdW1uIiwidmFsdWUiLCJjaXR5TmFtZSIsImxpbmtXcmFwcGVyRWxlIiwiaW5zZXJ0QmVmb3JlIiwidG9nZ2xlRHJvcGRvd24iLCJlbGUiLCJkcm9wZG93bkJ1dHRvbkVsZSIsImluY2x1ZGVzIiwic3BsaXQiLCJib3JkZXJSYWRpdXMiLCJzaG93Q2hhcnRzIiwiY2l0eU5hbWVSZW1vdmVkU3BhY2UiLCJjaXR5Q2hhcnQiLCJhbGxDaXR5Q2hhcnRzIiwiYmFzZVZhbCIsInNob3dUYWJsZXMiLCJjaXR5VGFibGUiLCJhbGxDaXR5VGFibGVzIiwic2hvd1RpdGxlIiwiY2l0eVRpdGxlIiwiYWxsQ2l0eVRpdGxlIiwic2hvd1N1bW1hcnkiLCJjaXR5U3VtbWFyeSIsImFsbENpdHlTdW1tYXJ5IiwibGlnaHR1cENhdGVnb3JpZXMiLCJpZCIsImNpdHlDYXRlZ29yeSIsImFsbENpdHlDYXRlZ29yaWVzIiwiY2l0eUNhdCIsInN0b3BIaWdobGlnaHRpbmciLCJzZWxlY3RJdGVtIiwiZWxlVGV4dCIsInRpdGxlRWxlIiwiY2xvc2VEcm9wZG93biIsImRyb3Bkb3duTWVudSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMx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LE9BQUQsQ0FBWDtBQUNIO0FBRU0sU0FBU0UsYUFBVCxHQUF5QjtBQUM1QjtBQUNBLE1BQU1DLFlBQVksR0FBRzFGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixZQUF2QixDQUFyQjs7QUFFQSxNQUFJLENBQUN5RixZQUFZLENBQUM5QyxTQUFiLENBQXVCbUIsUUFBdkIsQ0FBZ0MsVUFBaEMsQ0FBTCxFQUFrRDtBQUM5QzJCLGdCQUFZLENBQUM5QyxTQUFiLEdBQXlCLG9CQUF6QjtBQUNIO0FBQ0osQzs7Ozs7Ozs7Ozs7QUN0SkQsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCBjcmVhdGVCYXJHcmFwaCBmcm9tICcuL21haW4vY2hhcnQuanMnO1xuaW1wb3J0IGNyZWF0ZVRhYmxlIGZyb20gJy4vbWFpbi90YWJsZS5qcyc7XG5pbXBvcnQgY3JlYXRlVGl0bGUgZnJvbSAnLi9tYWluL3RpdGxlLmpzJztcbmltcG9ydCBjcmVhdGVTdW1tYXJ5IGZyb20gJy4vbWFpbi9zdW1tYXJ5JztcbmltcG9ydCAqIGFzIFV0aWwgZnJvbSAnLi9tYWluL3V0aWwuanMnO1xuXG5cblxubGV0IGNpdHlEYXRhID0gW11cbmxldCBuYW1lLCBzdW1tYXJ5LCBjaXR5U2NvcmU7XG5cbmxldCBjaXR5U2VsZWN0aW9uID0gXCIvc3JjL2RhdGEvbmV3eW9yay5qc29uXCJcblxuY29uc3QgY2l0aWVzID0gW1xuICAgIFwiL3NyYy9kYXRhL25ld3lvcmsuanNvblwiLCBcIi9zcmMvZGF0YS9zYW5mcmFuLmpzb25cIiwgXCIvc3JjL2RhdGEvc2VhdHRsZS5qc29uXCIsIFxuICAgIFwiL3NyYy9kYXRhL3Rvcm9udG8uanNvblwiLCBcIi9zcmMvZGF0YS9ib3N0b24uanNvblwiLCBcIi9zcmMvZGF0YS9jaGljYWdvLmpzb25cIiwgXG4gICAgXCIvc3JjL2RhdGEvbG9zYW5nZWxlcy5qc29uXCIsIFwiL3NyYy9kYXRhL2RhbGxhcy5qc29uXCIsIFwiL3NyYy9kYXRhL3Bob2VuaXguanNvblwiLCBcbiAgICBcIi9zcmMvZGF0YS9yYWxlaWdoLmpzb25cIlxuICAgIF0gXG5cblxuZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGQzLmpzb24oY2l0eVNlbGVjdGlvbiwgZnVuY3Rpb24gKGVycm9yLCBkYXRhKSB7XG5cbiAgICAgICAgbmFtZSA9IGRhdGEubmFtZVxuICAgICAgICBzdW1tYXJ5ID0gZGF0YS5zdW1tYXJ5XG4gICAgICAgIGNpdHlTY29yZSA9IGRhdGEudGVsZXBvcnRfY2l0eV9zY29yZVxuICAgICAgICBjaXR5RGF0YSA9IGRhdGEuY2F0ZWdvcmllc1xuICAgICAgICBjcmVhdGVCYXJHcmFwaChjaXR5RGF0YSwgbmFtZSk7XG4gICAgICAgIGNyZWF0ZVRhYmxlKGNpdHlEYXRhLCBuYW1lKTtcbiAgICAgICAgY3JlYXRlVGl0bGUobmFtZSk7XG4gICAgICAgIGNyZWF0ZVN1bW1hcnkobmFtZSwgc3VtbWFyeSk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gcmVuZGVyYWxsKCkge1xuICAgIGNpdGllcy5mb3JFYWNoKGNpdHkgPT4ge1xuICAgICAgICBjaXR5U2VsZWN0aW9uID0gY2l0eSBcbiAgICAgICAgcmVuZGVyKClcbiAgICB9KTtcbn1cblxuXG4vLyBjb25zdCB0aXRsZURyb3BEb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZS1kcm9wZG93bi13cmFwcGVyXCIpXG5jb25zdCB0aXRsZURyb3BEb3duQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKVxuY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtbGlzdFwiKVxuY29uc3QgY2l0eUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNpdHlcIilcblxuXG50aXRsZURyb3BEb3duQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gVXRpbC50b2dnbGVEcm9wZG93bihtZW51TGlzdCkpXG50aXRsZURyb3BEb3duQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiBVdGlsLmNsb3NlRHJvcGRvd24oKSlcbm1lbnVMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiBVdGlsLmNsb3NlRHJvcGRvd24oKSlcblxuY2l0eUxpc3QuZm9yRWFjaChjaXR5ID0+IHtcbiAgICBjaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gVXRpbC5zZWxlY3RJdGVtKGNpdHkpKVxufSlcblxucmVuZGVyYWxsKClcblxuXG5cbiIsImltcG9ydCAqIGFzIFV0aWwgZnJvbSBcIi4vdXRpbFwiO1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUJhckdyYXBoKGNpdHlEYXRhLCBuYW1lKSB7XG4gICAgLy8gZGVidWdnZXI7XG4gICAgdmFyIHdpZHRoID0gNTAwO1xuICAgIHZhciBoZWlnaHQgPSA1MzA7XG5cbiAgICAvLyBHZXQgbGVuZ3RoIG9mIGRhdGFzZXRcbiAgICB2YXIgYXJyYXlMZW5ndGggPSBjaXR5RGF0YS5sZW5ndGg7IC8vIGxlbmd0aCBvZiBkYXRhc2V0XG4gICAgdmFyIG1heFZhbHVlID0gZDMubWF4KGNpdHlEYXRhLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gK2Quc2NvcmVfb3V0X29mXzEwOyB9KTsgLy8gZ2V0IG1heGltdW1cbiAgICB2YXIgeF9heGlzTGVuZ3RoID0gNTAwOyAvLyBsZW5ndGggb2YgeC1heGlzIGluIG91ciBsYXlvdXRcbiAgICB2YXIgeV9heGlzTGVuZ3RoID0gNTAwOyAvLyBsZW5ndGggb2YgeS1heGlzIGluIG91ciBsYXlvdXRcblxuXG4gICAgdmFyIHhTY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgLmRvbWFpbihbMCwgbWF4VmFsdWVdKVxuICAgICAgICAucmFuZ2UoWzAsIHhfYXhpc0xlbmd0aF0pO1xuXG4gICAgdmFyIHN2ZyA9IGQzLnNlbGVjdChcIi5jaGFydFwiKVxuICAgICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGgpXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCk7XG5cbiAgICBpZiAobmFtZSA9PT0gXCJOZXcgWW9ya1wiKSB7XG4gICAgICAgIHN2Zy5hdHRyKFwiY2xhc3NcIiwgYGNpdHljaGFydCAke25hbWV9YClcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHN2Zy5hdHRyKFwiY2xhc3NcIiwgYGNpdHljaGFydCAke25hbWV9IGhpZGRlbmApXG4gICAgfVxuXG5cbiAgICBzdmcuc2VsZWN0QWxsKFwicmVjdFwiKVxuICAgICAgICAuZGF0YShjaXR5RGF0YSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZChcInJlY3RcIilcbiAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gaSAqICh5X2F4aXNMZW5ndGggLyBhcnJheUxlbmd0aCkgKyAzMDtcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoXCJ4XCIsIDApXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsICh5X2F4aXNMZW5ndGggLyBhcnJheUxlbmd0aCkgLSAxKVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4geFNjYWxlKGQuc2NvcmVfb3V0X29mXzEwKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoXCJmaWxsXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gZC5jb2xvclxuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gYGJhciAke2QubmFtZX1gO1xuICAgICAgICB9KVxuICAgICAgICAub24oXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0ciA9IGQubmFtZS5yZXBsYWNlKC9cXHMvZywgXCJcIilcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0cjIgPSBuZXdTdHIucmVwbGFjZSgvWyZdL2csIFwiXCIpXG4gICAgICAgICAgICBVdGlsLmxpZ2h0dXBDYXRlZ29yaWVzKG5ld1N0cjIpXG4gICAgICAgICAgICByZXR1cm4gdG9vbHRpcC5zdHlsZShcInZpc2liaWxpdHlcIiwgXCJ2aXNpYmxlXCIpLnRleHQoZC5uYW1lICsgXCI6IFwiICsgZC5zY29yZV9vdXRfb2ZfMTApO1xuICAgICAgICB9KVxuICAgICAgICAub24oXCJtb3VzZW1vdmVcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiB0b29sdGlwLnN0eWxlKFwidG9wXCIsIChkMy5ldmVudC5wYWdlWSAtIDEwKSArIFwicHhcIilcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJsZWZ0XCIsIChkMy5ldmVudC5wYWdlWCArIDEwKSArIFwicHhcIikudGV4dChkLm5hbWUgKyBcIjogXCIgKyBkLnNjb3JlX291dF9vZl8xMC50b0ZpeGVkKDIpKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwibW91c2VvdXRcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIFV0aWwuc3RvcEhpZ2hsaWdodGluZygpXG4gICAgICAgICAgICByZXR1cm4gdG9vbHRpcC5zdHlsZShcInZpc2liaWxpdHlcIiwgXCJoaWRkZW5cIilcbiAgICAgICAgfSlcblxuXG4gICAgLy8gQ3JlYXRlIHktYXhpc1xuICAgIHN2Zy5hcHBlbmQoXCJsaW5lXCIpXG4gICAgICAgIC5hdHRyKFwieDFcIiwgNzAwKVxuICAgICAgICAuYXR0cihcInkxXCIsIDMwKVxuICAgICAgICAuYXR0cihcIngyXCIsIDcwMClcbiAgICAgICAgLmF0dHIoXCJ5MlwiLCA1MjkpXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDIpXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiYmxhY2tcIik7XG5cbiAgICAvLyBDcmVhdGUgeC1heGlzXG4gICAgc3ZnLmFwcGVuZChcImxpbmVcIilcbiAgICAgICAgLmF0dHIoXCJ4MVwiLCAzMClcbiAgICAgICAgLmF0dHIoXCJ5MVwiLCA3NTApXG4gICAgICAgIC5hdHRyKFwieDJcIiwgNTAwKVxuICAgICAgICAuYXR0cihcInkyXCIsIDc1MClcbiAgICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMilcbiAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgXCJibGFja1wiKTtcblxuXG5cbiAgICB2YXIgdG9vbHRpcCA9IGQzLnNlbGVjdChcIi5jaGFydFwiKVxuICAgICAgICAuYXBwZW5kKFwiZGl2XCIpXG4gICAgICAgIC5zdHlsZShcInBvc2l0aW9uXCIsIFwiYWJzb2x1dGVcIilcbiAgICAgICAgLnN0eWxlKFwiZm9udC1mYW1pbHlcIiwgXCJyb2JvdG9cIilcbiAgICAgICAgLnN0eWxlKFwiZm9udC1zaXplXCIsIFwiMTRweFwiKVxuICAgICAgICAuc3R5bGUoXCJ6LWluZGV4XCIsIFwiM1wiKVxuICAgICAgICAuc3R5bGUoXCJ2aXNpYmlsaXR5XCIsIFwiaGlkZGVuXCIpXG4gICAgICAgIC5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIiwgXCJ3aGl0ZVwiKVxuICAgICAgICAuc3R5bGUoXCJ3aWR0aFwiLCBcImF1dG9cIilcbiAgICAgICAgLnN0eWxlKFwibWFyZ2luXCIsIFwiMCBhdXRvXCIpXG4gICAgICAgIC5zdHlsZShcImJvcmRlci1yYWRpdXNcIiwgXCIxMHB4XCIpXG4gICAgICAgIC5zdHlsZShcInBhZGRpbmdcIiwgXCIxMHB4XCIpXG4gICAgICAgIC5zdHlsZShcImJvcmRlclwiLCBcIjJweCBzb2xpZCBibGFja1wiKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQmFyR3JhcGg7IiwiZnVuY3Rpb24gY3JlYXRlU3VtbWFyeShuYW1lLCBzdW1tYXJ5KSB7XG4gICAgY29uc3QgY2l0eVN1bW1hcnlFbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIGNvbnN0IHNlY3Rpb25FbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VjdGlvblwiKVxuXG4gICAgY2l0eVN1bW1hcnlFbGUudGV4dENvbnRlbnQgPSBzdW1tYXJ5LnJlcGxhY2UoL1s8XS57MSwyfVs+XS9nLCBcIlwiKVxuXG4gICAgaWYgKG5hbWUgPT09IFwiTmV3IFlvcmtcIikge1xuICAgICAgICBjaXR5U3VtbWFyeUVsZS5jbGFzc05hbWUgPSBgY2l0eVN1bW1hcnkgc3VtbWFyeS0ke25hbWV9YFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNpdHlTdW1tYXJ5RWxlLmNsYXNzTmFtZSA9IGBjaXR5U3VtbWFyeSBzdW1tYXJ5LSR7bmFtZX0gaGlkZGVuYFxuICAgIH1cblxuICAgIHNlY3Rpb25FbGUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJlbmRcIiwgY2l0eVN1bW1hcnlFbGUpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN1bW1hcnk7IiwiaW1wb3J0ICogYXMgVXRpbCBmcm9tICcuL3V0aWwuanMnXG5cbmZ1bmN0aW9uIGNyZWF0ZVRhYmxlKGNpdHlEYXRhLCBuYW1lKSB7XG5cbiAgICBjb25zdCBjb2x1bW5zID0gW1wibmFtZVwiLCBcInNjb3JlX291dF9vZl8xMFwiXVxuICAgIGNvbnN0IGNvbHVtbk5hbWVzID0gW1wiQ2F0ZWdvcmllc1wiLCBcIlNjb3JlXCJdXG5cbiAgICBsZXQgdGFibGUgPSBkMy5zZWxlY3QoJy5wcm9maWxlJylcbiAgICAgICAgLmFwcGVuZCgndGFibGUnKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIGB0YWJsZSB0YWJsZS0ke25hbWV9IGhpZGRlbmApXG4gICAgICAgIC5zdHlsZShcImJvcmRlci1yYWRpdXNcIiwgXCIxMHB4XCIpXG4gICAgICAgIC5zdHlsZShcImJvcmRlclwiLCBcIjJweCBzb2xpZCBibGFja1wiKTtcbiAgICBsZXQgaGVhZGVyID0gdGFibGVcbiAgICAgICAgLmFwcGVuZChcImhlYWRlclwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwidGFibGUtaGVhZGVyXCIpO1xuICAgIGxldCB0YWJsZWJvZHkgPSB0YWJsZS5hcHBlbmQoXCJ0YWJsZWJvZHlcIik7XG5cbiAgICBpZiAobmFtZSA9PT0gXCJOZXcgWW9ya1wiKSB7XG4gICAgICAgIHRhYmxlLmF0dHIoXCJjbGFzc1wiLCBgdGFibGUgdGFibGUtJHtuYW1lfWApXG5cbiAgICB9IGVsc2Uge1xuICAgICAgICB0YWJsZS5hdHRyKFwiY2xhc3NcIiwgYHRhYmxlIHRhYmxlLSR7bmFtZX0gaGlkZGVuYClcbiAgICB9XG5cbiAgICBoZWFkZXJcbiAgICAgICAgLmFwcGVuZChcInRyXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJoZWFkZXItd3JhcHBlclwiKVxuICAgICAgICAuc3R5bGUoXCJjb2xvclwiLCBcImJsdWVcIilcbiAgICAgICAgLnNlbGVjdEFsbChcInRoXCIpXG4gICAgICAgIC5kYXRhKGNvbHVtbk5hbWVzKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwidGhcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIGQ7XG4gICAgICAgIH0pXG4gICAgICAgIC5zdHlsZShcInRleHQtYWxpZ25cIiwgXCJjZW50ZXJcIilcbiAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBkO1xuICAgICAgICB9KVxuXG5cblxuICAgIGxldCByb3dzID0gdGFibGVib2R5XG4gICAgICAgIC5zZWxlY3RBbGwoXCJ0clwiKVxuICAgICAgICAuZGF0YShjaXR5RGF0YSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZChcInRyXCIpO1xuXG5cbiAgICBsZXQgY2VsbHMgPSByb3dzLnNlbGVjdEFsbChcInRkXCIpXG4gICAgICAgIC5kYXRhKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW5zLm1hcChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uOiBjb2x1bW4sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiByb3dbY29sdW1uXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJ0ZFwiKVxuICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBkLnZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGQudmFsdWUudG9GaXhlZCgyKSA9PT0gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiMTAuMCAvMTBcIlxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgJHtkLnZhbHVlLnRvRml4ZWQoMil9IC8xMGBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBkLnZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGQudmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTdHIgPSBkLnZhbHVlLnJlcGxhY2UoL1xccy9nLCBcIlwiKVxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1N0cjIgPSBuZXdTdHIucmVwbGFjZSgvWyZdL2csIFwiXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGBjYXRlZ29yeSAke25ld1N0cjJ9IG5vbmhpZ2hsaWdodGVkYFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYGNhdGVnb3J5ICR7ZC52YWx1ZX0gbm9uaGlnaGxpZ2h0ZWRgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKFwiaWRcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZC52YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1N0ciA9IGQudmFsdWUucmVwbGFjZSgvXFxzL2csIFwiXCIpXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3RyMiA9IG5ld1N0ci5yZXBsYWNlKC9bJl0vZywgXCJcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3U3RyMlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZC52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUYWJsZTsiLCJmdW5jdGlvbiBjcmVhdGVUaXRsZShuYW1lKSB7XG4gICAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbiAgICBjb25zdCBzZWN0aW9uRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlY3Rpb25cIilcbiAgICBjb25zdCBsaW5rV3JhcHBlckVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGluay13cmFwcGVyc1wiKVxuXG4gICAgY2l0eU5hbWUudGV4dENvbnRlbnQgPSBuYW1lXG5cbiAgICBpZiAobmFtZSA9PT0gXCJOZXcgWW9ya1wiKSB7XG4gICAgICAgIGNpdHlOYW1lLmNsYXNzTmFtZSA9IGBjaXR5dGl0bGUgdGl0bGUtJHtuYW1lfWBcbiAgICB9IGVsc2Uge1xuICAgICAgICBjaXR5TmFtZS5jbGFzc05hbWUgPSBgY2l0eXRpdGxlIHRpdGxlLSR7bmFtZX0gaGlkZGVuYFxuICAgIH1cbiAgICBzZWN0aW9uRWxlLmluc2VydEJlZm9yZShjaXR5TmFtZSwgbGlua1dyYXBwZXJFbGUpXG4gICAgLy8gc2VjdGlvbkVsZS5hcHBlbmRDaGlsZChjaXR5TmFtZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGl0bGU7IiwiZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZURyb3Bkb3duKGVsZSkge1xuICAgIGNvbnN0IGRyb3Bkb3duQnV0dG9uRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bi1tZW51XCIpXG4gICAgaWYgKGVsZS5jbGFzc05hbWUuaW5jbHVkZXMoXCJpbmFjdGl2ZVwiKSkge1xuICAgICAgICBlbGUuY2xhc3NOYW1lID0gZWxlLmNsYXNzTmFtZS5zcGxpdChcIiBcIilbMF1cbiAgICAgICAgZWxlLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMCAwIDEwcHggMTBweFwiXG4gICAgICAgIGRyb3Bkb3duQnV0dG9uRWxlLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTBweCAxMHB4IDAgMFwiXG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBlbGUuY2xhc3NOYW1lID0gZWxlLmNsYXNzTmFtZSArIFwiIGluYWN0aXZlXCJcbiAgICAgICAgZWxlLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTBweFwiXG4gICAgICAgIGRyb3Bkb3duQnV0dG9uRWxlLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTBweFwiXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0NoYXJ0cyhjaXR5TmFtZSkge1xuICAgIGNvbnN0IGNpdHlOYW1lUmVtb3ZlZFNwYWNlID0gY2l0eU5hbWUuc3BsaXQoXCIgXCIpWzFdXG4gICAgY29uc3QgY2l0eUNoYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2l0eU5hbWVSZW1vdmVkU3BhY2V9YClcblxuXG4gICAgY29uc3QgYWxsQ2l0eUNoYXJ0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2l0eWNoYXJ0XCIpXG4gICAgYWxsQ2l0eUNoYXJ0cy5mb3JFYWNoKGNpdHlDaGFydCA9PiB7XG4gICAgICAgIGlmICghY2l0eUNoYXJ0LmNsYXNzTmFtZS5iYXNlVmFsLmluY2x1ZGVzKFwiaGlkZGVuXCIpKSB7XG4gICAgICAgICAgICBjaXR5Q2hhcnQuY2xhc3NOYW1lLmJhc2VWYWwgPSBjaXR5Q2hhcnQuY2xhc3NOYW1lLmJhc2VWYWwgKyBcIiBoaWRkZW5cIlxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGlmIChjaXR5Q2hhcnQuY2xhc3NOYW1lLmJhc2VWYWwuaW5jbHVkZXMoXCJoaWRkZW5cIikpIHtcbiAgICAgICAgY2l0eUNoYXJ0LmNsYXNzTmFtZS5iYXNlVmFsID0gYGNpdHljaGFydCAke2NpdHlOYW1lfWBcbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIGNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbCA9IGNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbCArIFwiIGhpZGRlblwiXG5cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93VGFibGVzKGNpdHlOYW1lKSB7XG4gICAgY29uc3QgY2l0eU5hbWVSZW1vdmVkU3BhY2UgPSBjaXR5TmFtZS5zcGxpdChcIiBcIilbMV1cbiAgICBjb25zdCBjaXR5VGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudGFibGUtJHtjaXR5TmFtZVJlbW92ZWRTcGFjZX1gKVxuXG4gICAgY29uc3QgYWxsQ2l0eVRhYmxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFibGVcIilcbiAgICBhbGxDaXR5VGFibGVzLmZvckVhY2goY2l0eVRhYmxlID0+IHtcbiAgICAgICAgaWYgKCFjaXR5VGFibGUuY2xhc3NOYW1lLmluY2x1ZGVzKFwiaGlkZGVuXCIpKSB7XG4gICAgICAgICAgICBjaXR5VGFibGUuY2xhc3NOYW1lID0gY2l0eVRhYmxlLmNsYXNzTmFtZSArIFwiIGhpZGRlblwiXG5cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoY2l0eVRhYmxlLmNsYXNzTmFtZS5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICBjaXR5VGFibGUuY2xhc3NOYW1lID0gYHRhYmxlIHRhYmxlLSR7Y2l0eU5hbWVSZW1vdmVkU3BhY2V9YFxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgY2l0eVRhYmxlLmNsYXNzTmFtZSA9IGNpdHlUYWJsZS5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxuXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1RpdGxlKGNpdHlOYW1lKSB7XG4gICAgY29uc3QgY2l0eU5hbWVSZW1vdmVkU3BhY2UgPSBjaXR5TmFtZS5zcGxpdChcIiBcIilbMV1cbiAgICBjb25zdCBjaXR5VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudGl0bGUtJHtjaXR5TmFtZVJlbW92ZWRTcGFjZX1gKVxuXG4gICAgY29uc3QgYWxsQ2l0eVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaXR5dGl0bGVcIilcbiAgICBhbGxDaXR5VGl0bGUuZm9yRWFjaChjaXR5VGl0bGUgPT4ge1xuICAgICAgICBpZiAoIWNpdHlUaXRsZS5jbGFzc05hbWUuaW5jbHVkZXMoXCJoaWRkZW5cIikpIHtcbiAgICAgICAgICAgIGNpdHlUaXRsZS5jbGFzc05hbWUgPSBjaXR5VGl0bGUuY2xhc3NOYW1lICsgXCIgaGlkZGVuXCJcblxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGlmIChjaXR5VGl0bGUuY2xhc3NOYW1lLmluY2x1ZGVzKFwiaGlkZGVuXCIpKSB7XG4gICAgICAgIGNpdHlUaXRsZS5jbGFzc05hbWUgPSBgY2l0eXRpdGxlIHRpdGxlLSR7Y2l0eU5hbWVSZW1vdmVkU3BhY2V9YFxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgY2l0eVRpdGxlLmNsYXNzTmFtZSA9IGNpdHlUaXRsZS5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxuXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1N1bW1hcnkoY2l0eU5hbWUpIHtcbiAgICBjb25zdCBjaXR5TmFtZVJlbW92ZWRTcGFjZSA9IGNpdHlOYW1lLnNwbGl0KFwiIFwiKVsxXVxuICAgIGNvbnN0IGNpdHlTdW1tYXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnN1bW1hcnktJHtjaXR5TmFtZVJlbW92ZWRTcGFjZX1gKVxuXG4gICAgY29uc3QgYWxsQ2l0eVN1bW1hcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNpdHlTdW1tYXJ5XCIpXG4gICAgYWxsQ2l0eVN1bW1hcnkuZm9yRWFjaChjaXR5U3VtbWFyeSA9PiB7XG4gICAgICAgIGlmICghY2l0eVN1bW1hcnkuY2xhc3NOYW1lLmluY2x1ZGVzKFwiaGlkZGVuXCIpKSB7XG4gICAgICAgICAgICBjaXR5U3VtbWFyeS5jbGFzc05hbWUgPSBjaXR5U3VtbWFyeS5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxuXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNpdHlTdW1tYXJ5LmNsYXNzTmFtZS5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICBjaXR5U3VtbWFyeS5jbGFzc05hbWUgPSBgY2l0eVN1bW1hcnkgc3VtbWFyeS0ke2NpdHlOYW1lUmVtb3ZlZFNwYWNlfWBcbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIGNpdHlTdW1tYXJ5LmNsYXNzTmFtZSA9IGNpdHlTdW1tYXJ5LmNsYXNzTmFtZSArIFwiIGhpZGRlblwiXG5cbiAgICB9XG59XG5cbi8vIGFkZCBldmVudCBsaXN0ZW5lciBvbiB0aGUgYmFycyB0byBcblxuZXhwb3J0IGZ1bmN0aW9uIGxpZ2h0dXBDYXRlZ29yaWVzKGlkKSB7XG4gICAgY29uc3QgY2l0eUNhdGVnb3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIyR7aWR9YClcbiAgICBjb25zdCBhbGxDaXR5Q2F0ZWdvcmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2F0ZWdvcnlcIilcbiAgICBhbGxDaXR5Q2F0ZWdvcmllcy5mb3JFYWNoKGNpdHlDYXQgPT4ge1xuICAgICAgICBpZiAoIWNpdHlDYXQuY2xhc3NOYW1lLmluY2x1ZGVzKFwibm9uaGlnaGxpZ2h0ZWRcIikpIHtcbiAgICAgICAgICAgIGNpdHlDYXQuY2xhc3NOYW1lID0gY2l0eUNhdC5jbGFzc05hbWUgKyBcIiBub25oaWdobGlnaHRlZFwiXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgY2l0eUNhdGVnb3J5LmZvckVhY2goY2l0eUNhdCA9PiB7XG4gICAgICAgIGlmIChjaXR5Q2F0LmNsYXNzTmFtZS5pbmNsdWRlcyhgY2F0ZWdvcnkgJHtpZH0gbm9uaGlnaGxpZ2h0ZWRgKSkge1xuICAgICAgICAgICAgY2l0eUNhdC5jbGFzc05hbWUgPSBgY2F0ZWdvcnkgJHtpZH1gXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaXR5Q2F0LmNsYXNzTmFtZSA9IGNpdHlDYXQuY2xhc3NOYW1lICsgXCIgbm9uaGlnaGxpZ2h0ZWRcIlxuICAgICAgICB9XG4gICAgfSlcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RvcEhpZ2hsaWdodGluZygpIHtcbiAgICBjb25zdCBhbGxDaXR5Q2F0ZWdvcmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2F0ZWdvcnlcIilcbiAgICBhbGxDaXR5Q2F0ZWdvcmllcy5mb3JFYWNoKGNpdHlDYXQgPT4ge1xuICAgICAgICBpZiAoIWNpdHlDYXQuY2xhc3NOYW1lLmluY2x1ZGVzKFwibm9uaGlnaGxpZ2h0ZWRcIikpIHtcbiAgICAgICAgICAgIGNpdHlDYXQuY2xhc3NOYW1lID0gY2l0eUNhdC5jbGFzc05hbWUgKyBcIiBub25oaWdobGlnaHRlZFwiXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdEl0ZW0oZWxlKSB7XG4gICAgY29uc3QgZWxlVGV4dCA9IGVsZS50ZXh0Q29udGVudFxuICAgIGNvbnN0IHRpdGxlRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKVxuICAgIGNvbnN0IG1lbnVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWxpc3RcIilcbiAgICB0aXRsZUVsZS50ZXh0Q29udGVudCA9IGVsZVRleHQ7XG4gICAgdG9nZ2xlRHJvcGRvd24obWVudUxpc3QpO1xuXG4gICAgc2hvd0NoYXJ0cyhlbGVUZXh0KVxuICAgIHNob3dUYWJsZXMoZWxlVGV4dClcbiAgICBzaG93VGl0bGUoZWxlVGV4dClcbiAgICBzaG93U3VtbWFyeShlbGVUZXh0KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VEcm9wZG93bigpIHtcbiAgICBkZWJ1Z2dlclxuICAgIGNvbnN0IGRyb3Bkb3duTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1saXN0XCIpXG5cbiAgICBpZiAoIWRyb3Bkb3duTWVudS5jbGFzc05hbWUuaW5jbHVkZXMoXCJpbmFjdGl2ZVwiKSkge1xuICAgICAgICBkcm9wZG93bk1lbnUuY2xhc3NOYW1lID0gXCJtZW51LWxpc3QgaW5hY3RpdmVcIlxuICAgIH1cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9