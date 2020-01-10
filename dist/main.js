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
  var width = 500;
  var height = 530;
  var arrayLength = cityData.length;
  var maxValue = d3.max(cityData, function (d) {
    return +d.score_out_of_10;
  });
  var x_axisLength = 500;
  var y_axisLength = 500;
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

  sectionEle.insertBefore(cityName, linkWrapperEle);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3N1bW1hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vdGl0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY2l0eURhdGEiLCJuYW1lIiwic3VtbWFyeSIsImNpdHlTY29yZSIsImNpdHlTZWxlY3Rpb24iLCJjaXRpZXMiLCJyZW5kZXIiLCJkMyIsImpzb24iLCJlcnJvciIsImRhdGEiLCJ0ZWxlcG9ydF9jaXR5X3Njb3JlIiwiY2F0ZWdvcmllcyIsImNyZWF0ZUJhckdyYXBoIiwiY3JlYXRlVGFibGUiLCJjcmVhdGVUaXRsZSIsImNyZWF0ZVN1bW1hcnkiLCJyZW5kZXJhbGwiLCJmb3JFYWNoIiwiY2l0eSIsInRpdGxlRHJvcERvd25CdXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtZW51TGlzdCIsImNpdHlMaXN0IiwicXVlcnlTZWxlY3RvckFsbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJVdGlsIiwid2lkdGgiLCJoZWlnaHQiLCJhcnJheUxlbmd0aCIsImxlbmd0aCIsIm1heFZhbHVlIiwibWF4IiwiZCIsInNjb3JlX291dF9vZl8xMCIsInhfYXhpc0xlbmd0aCIsInlfYXhpc0xlbmd0aCIsInhTY2FsZSIsInNjYWxlTGluZWFyIiwiZG9tYWluIiwicmFuZ2UiLCJzdmciLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwic2VsZWN0QWxsIiwiZW50ZXIiLCJpIiwiY29sb3IiLCJvbiIsIm5ld1N0ciIsInJlcGxhY2UiLCJuZXdTdHIyIiwidG9vbHRpcCIsInN0eWxlIiwidGV4dCIsImV2ZW50IiwicGFnZVkiLCJwYWdlWCIsInRvRml4ZWQiLCJjaXR5U3VtbWFyeUVsZSIsImNyZWF0ZUVsZW1lbnQiLCJzZWN0aW9uRWxlIiwidGV4dENvbnRlbnQiLCJjbGFzc05hbWUiLCJpbnNlcnRBZGphY2VudEVsZW1lbnQiLCJjb2x1bW5zIiwiY29sdW1uTmFtZXMiLCJ0YWJsZSIsImhlYWRlciIsInRhYmxlYm9keSIsInJvd3MiLCJjZWxscyIsInJvdyIsIm1hcCIsImNvbHVtbiIsInZhbHVlIiwiY2l0eU5hbWUiLCJsaW5rV3JhcHBlckVsZSIsImluc2VydEJlZm9yZSIsInRvZ2dsZURyb3Bkb3duIiwiZWxlIiwiZHJvcGRvd25CdXR0b25FbGUiLCJpbmNsdWRlcyIsInNwbGl0IiwiYm9yZGVyUmFkaXVzIiwic2hvd0NoYXJ0cyIsImNpdHlOYW1lUmVtb3ZlZFNwYWNlIiwiY2l0eUNoYXJ0IiwiYWxsQ2l0eUNoYXJ0cyIsImJhc2VWYWwiLCJzaG93VGFibGVzIiwiY2l0eVRhYmxlIiwiYWxsQ2l0eVRhYmxlcyIsInNob3dUaXRsZSIsImNpdHlUaXRsZSIsImFsbENpdHlUaXRsZSIsInNob3dTdW1tYXJ5IiwiY2l0eVN1bW1hcnkiLCJhbGxDaXR5U3VtbWFyeSIsImxpZ2h0dXBDYXRlZ29yaWVzIiwiaWQiLCJjaXR5Q2F0ZWdvcnkiLCJhbGxDaXR5Q2F0ZWdvcmllcyIsImNpdHlDYXQiLCJzdG9wSGlnaGxpZ2h0aW5nIiwic2VsZWN0SXRlbSIsImVsZVRleHQiLCJ0aXRsZUVsZSIsImNsb3NlRHJvcGRvd24iLCJkcm9wZG93bk1lbnUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFD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LEdBQUcxQixHQUFHLENBQUNsQixXQUFwQjtBQUNBLE1BQU02QyxRQUFRLEdBQUd4RixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBakI7QUFDQSxNQUFNQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixZQUF2QixDQUFqQjtBQUNBdUYsVUFBUSxDQUFDN0MsV0FBVCxHQUF1QjRDLE9BQXZCO0FBQ0EzQixnQkFBYyxDQUFDMUQsUUFBRCxDQUFkO0FBRUFnRSxZQUFVLENBQUNxQixPQUFELENBQVY7QUFDQWhCLFlBQVUsQ0FBQ2dCLE9BQUQsQ0FBVjtBQUNBYixXQUFTLENBQUNhLE9BQUQsQ0FBVDtBQUNBVixhQUFXLENBQUNVLE9BQUQsQ0FBWDtBQUNIO0FBRU0sU0FBU0UsYUFBVCxHQUF5QjtBQUM1QixNQUFNQyxZQUFZLEdBQUcxRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBckI7O0FBRUEsTUFBSSxDQUFDeUYsWUFBWSxDQUFDOUMsU0FBYixDQUF1Qm1CLFFBQXZCLENBQWdDLFVBQWhDLENBQUwsRUFBa0Q7QUFDOUMyQixnQkFBWSxDQUFDOUMsU0FBYixHQUF5QixvQkFBekI7QUFDSDtBQUNKLEM7Ozs7Ozs7Ozs7O0FDcEpELHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgY3JlYXRlQmFyR3JhcGggZnJvbSAnLi9tYWluL2NoYXJ0LmpzJztcbmltcG9ydCBjcmVhdGVUYWJsZSBmcm9tICcuL21haW4vdGFibGUuanMnO1xuaW1wb3J0IGNyZWF0ZVRpdGxlIGZyb20gJy4vbWFpbi90aXRsZS5qcyc7XG5pbXBvcnQgY3JlYXRlU3VtbWFyeSBmcm9tICcuL21haW4vc3VtbWFyeSc7XG5pbXBvcnQgKiBhcyBVdGlsIGZyb20gJy4vbWFpbi91dGlsLmpzJztcblxuXG5cbmxldCBjaXR5RGF0YSA9IFtdXG5sZXQgbmFtZSwgc3VtbWFyeSwgY2l0eVNjb3JlO1xuXG5sZXQgY2l0eVNlbGVjdGlvbiA9IFwiL3NyYy9kYXRhL25ld3lvcmsuanNvblwiXG5cbmNvbnN0IGNpdGllcyA9IFtcbiAgICBcIi9zcmMvZGF0YS9uZXd5b3JrLmpzb25cIiwgXCIvc3JjL2RhdGEvc2FuZnJhbi5qc29uXCIsIFwiL3NyYy9kYXRhL3NlYXR0bGUuanNvblwiLCBcbiAgICBcIi9zcmMvZGF0YS90b3JvbnRvLmpzb25cIiwgXCIvc3JjL2RhdGEvYm9zdG9uLmpzb25cIiwgXCIvc3JjL2RhdGEvY2hpY2Fnby5qc29uXCIsIFxuICAgIFwiL3NyYy9kYXRhL2xvc2FuZ2VsZXMuanNvblwiLCBcIi9zcmMvZGF0YS9kYWxsYXMuanNvblwiLCBcIi9zcmMvZGF0YS9waG9lbml4Lmpzb25cIiwgXG4gICAgXCIvc3JjL2RhdGEvcmFsZWlnaC5qc29uXCJcbiAgICBdIFxuXG5cbmZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBkMy5qc29uKGNpdHlTZWxlY3Rpb24sIGZ1bmN0aW9uIChlcnJvciwgZGF0YSkge1xuXG4gICAgICAgIG5hbWUgPSBkYXRhLm5hbWVcbiAgICAgICAgc3VtbWFyeSA9IGRhdGEuc3VtbWFyeVxuICAgICAgICBjaXR5U2NvcmUgPSBkYXRhLnRlbGVwb3J0X2NpdHlfc2NvcmVcbiAgICAgICAgY2l0eURhdGEgPSBkYXRhLmNhdGVnb3JpZXNcbiAgICAgICAgY3JlYXRlQmFyR3JhcGgoY2l0eURhdGEsIG5hbWUpO1xuICAgICAgICBjcmVhdGVUYWJsZShjaXR5RGF0YSwgbmFtZSk7XG4gICAgICAgIGNyZWF0ZVRpdGxlKG5hbWUpO1xuICAgICAgICBjcmVhdGVTdW1tYXJ5KG5hbWUsIHN1bW1hcnkpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHJlbmRlcmFsbCgpIHtcbiAgICBjaXRpZXMuZm9yRWFjaChjaXR5ID0+IHtcbiAgICAgICAgY2l0eVNlbGVjdGlvbiA9IGNpdHkgXG4gICAgICAgIHJlbmRlcigpXG4gICAgfSk7XG59XG5cblxuLy8gY29uc3QgdGl0bGVEcm9wRG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGUtZHJvcGRvd24td3JhcHBlclwiKVxuY29uc3QgdGl0bGVEcm9wRG93bkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGVcIilcbmNvbnN0IG1lbnVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWxpc3RcIilcbmNvbnN0IGNpdHlMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaXR5XCIpXG5cblxudGl0bGVEcm9wRG93bkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFV0aWwudG9nZ2xlRHJvcGRvd24obWVudUxpc3QpKVxudGl0bGVEcm9wRG93bkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4gVXRpbC5jbG9zZURyb3Bkb3duKCkpXG5tZW51TGlzdC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4gVXRpbC5jbG9zZURyb3Bkb3duKCkpXG5cbmNpdHlMaXN0LmZvckVhY2goY2l0eSA9PiB7XG4gICAgY2l0eS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFV0aWwuc2VsZWN0SXRlbShjaXR5KSlcbn0pXG5cbnJlbmRlcmFsbCgpXG5cblxuXG4iLCJpbXBvcnQgKiBhcyBVdGlsIGZyb20gXCIuL3V0aWxcIjtcblxuXG5mdW5jdGlvbiBjcmVhdGVCYXJHcmFwaChjaXR5RGF0YSwgbmFtZSkge1xuICAgIHZhciB3aWR0aCA9IDUwMDtcbiAgICB2YXIgaGVpZ2h0ID0gNTMwO1xuXG4gICAgdmFyIGFycmF5TGVuZ3RoID0gY2l0eURhdGEubGVuZ3RoOyBcbiAgICB2YXIgbWF4VmFsdWUgPSBkMy5tYXgoY2l0eURhdGEsIGZ1bmN0aW9uIChkKSB7IHJldHVybiArZC5zY29yZV9vdXRfb2ZfMTA7IH0pOyBcbiAgICB2YXIgeF9heGlzTGVuZ3RoID0gNTAwOyBcbiAgICB2YXIgeV9heGlzTGVuZ3RoID0gNTAwOyBcblxuXG4gICAgdmFyIHhTY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgLmRvbWFpbihbMCwgbWF4VmFsdWVdKVxuICAgICAgICAucmFuZ2UoWzAsIHhfYXhpc0xlbmd0aF0pO1xuXG4gICAgdmFyIHN2ZyA9IGQzLnNlbGVjdChcIi5jaGFydFwiKVxuICAgICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGgpXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCk7XG5cbiAgICBpZiAobmFtZSA9PT0gXCJOZXcgWW9ya1wiKSB7XG4gICAgICAgIHN2Zy5hdHRyKFwiY2xhc3NcIiwgYGNpdHljaGFydCAke25hbWV9YClcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHN2Zy5hdHRyKFwiY2xhc3NcIiwgYGNpdHljaGFydCAke25hbWV9IGhpZGRlbmApXG4gICAgfVxuXG5cbiAgICBzdmcuc2VsZWN0QWxsKFwicmVjdFwiKVxuICAgICAgICAuZGF0YShjaXR5RGF0YSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZChcInJlY3RcIilcbiAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gaSAqICh5X2F4aXNMZW5ndGggLyBhcnJheUxlbmd0aCkgKyAzMDtcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoXCJ4XCIsIDApXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsICh5X2F4aXNMZW5ndGggLyBhcnJheUxlbmd0aCkgLSAxKVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4geFNjYWxlKGQuc2NvcmVfb3V0X29mXzEwKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoXCJmaWxsXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gZC5jb2xvclxuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gYGJhciAke2QubmFtZX1gO1xuICAgICAgICB9KVxuICAgICAgICAub24oXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0ciA9IGQubmFtZS5yZXBsYWNlKC9cXHMvZywgXCJcIilcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0cjIgPSBuZXdTdHIucmVwbGFjZSgvWyZdL2csIFwiXCIpXG4gICAgICAgICAgICBVdGlsLmxpZ2h0dXBDYXRlZ29yaWVzKG5ld1N0cjIpXG4gICAgICAgICAgICByZXR1cm4gdG9vbHRpcC5zdHlsZShcInZpc2liaWxpdHlcIiwgXCJ2aXNpYmxlXCIpLnRleHQoZC5uYW1lICsgXCI6IFwiICsgZC5zY29yZV9vdXRfb2ZfMTApO1xuICAgICAgICB9KVxuICAgICAgICAub24oXCJtb3VzZW1vdmVcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiB0b29sdGlwLnN0eWxlKFwidG9wXCIsIChkMy5ldmVudC5wYWdlWSAtIDEwKSArIFwicHhcIilcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJsZWZ0XCIsIChkMy5ldmVudC5wYWdlWCArIDEwKSArIFwicHhcIikudGV4dChkLm5hbWUgKyBcIjogXCIgKyBkLnNjb3JlX291dF9vZl8xMC50b0ZpeGVkKDIpKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwibW91c2VvdXRcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIFV0aWwuc3RvcEhpZ2hsaWdodGluZygpXG4gICAgICAgICAgICByZXR1cm4gdG9vbHRpcC5zdHlsZShcInZpc2liaWxpdHlcIiwgXCJoaWRkZW5cIilcbiAgICAgICAgfSlcblxuICAgIHZhciB0b29sdGlwID0gZDMuc2VsZWN0KFwiLmNoYXJ0XCIpXG4gICAgICAgIC5hcHBlbmQoXCJkaXZcIilcbiAgICAgICAgLnN0eWxlKFwicG9zaXRpb25cIiwgXCJhYnNvbHV0ZVwiKVxuICAgICAgICAuc3R5bGUoXCJmb250LWZhbWlseVwiLCBcInJvYm90b1wiKVxuICAgICAgICAuc3R5bGUoXCJmb250LXNpemVcIiwgXCIxNHB4XCIpXG4gICAgICAgIC5zdHlsZShcInotaW5kZXhcIiwgXCIzXCIpXG4gICAgICAgIC5zdHlsZShcInZpc2liaWxpdHlcIiwgXCJoaWRkZW5cIilcbiAgICAgICAgLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcIndoaXRlXCIpXG4gICAgICAgIC5zdHlsZShcIndpZHRoXCIsIFwiYXV0b1wiKVxuICAgICAgICAuc3R5bGUoXCJtYXJnaW5cIiwgXCIwIGF1dG9cIilcbiAgICAgICAgLnN0eWxlKFwiYm9yZGVyLXJhZGl1c1wiLCBcIjEwcHhcIilcbiAgICAgICAgLnN0eWxlKFwicGFkZGluZ1wiLCBcIjEwcHhcIilcbiAgICAgICAgLnN0eWxlKFwiYm9yZGVyXCIsIFwiMnB4IHNvbGlkIGJsYWNrXCIpXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVCYXJHcmFwaDsiLCJmdW5jdGlvbiBjcmVhdGVTdW1tYXJ5KG5hbWUsIHN1bW1hcnkpIHtcbiAgICBjb25zdCBjaXR5U3VtbWFyeUVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgY29uc3Qgc2VjdGlvbkVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWN0aW9uXCIpXG5cbiAgICBjaXR5U3VtbWFyeUVsZS50ZXh0Q29udGVudCA9IHN1bW1hcnkucmVwbGFjZSgvWzxdLnsxLDJ9Wz5dL2csIFwiXCIpXG5cbiAgICBpZiAobmFtZSA9PT0gXCJOZXcgWW9ya1wiKSB7XG4gICAgICAgIGNpdHlTdW1tYXJ5RWxlLmNsYXNzTmFtZSA9IGBjaXR5U3VtbWFyeSBzdW1tYXJ5LSR7bmFtZX1gXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2l0eVN1bW1hcnlFbGUuY2xhc3NOYW1lID0gYGNpdHlTdW1tYXJ5IHN1bW1hcnktJHtuYW1lfSBoaWRkZW5gXG4gICAgfVxuXG4gICAgc2VjdGlvbkVsZS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmVuZFwiLCBjaXR5U3VtbWFyeUVsZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3VtbWFyeTsiLCJpbXBvcnQgKiBhcyBVdGlsIGZyb20gJy4vdXRpbC5qcydcblxuZnVuY3Rpb24gY3JlYXRlVGFibGUoY2l0eURhdGEsIG5hbWUpIHtcblxuICAgIGNvbnN0IGNvbHVtbnMgPSBbXCJuYW1lXCIsIFwic2NvcmVfb3V0X29mXzEwXCJdXG4gICAgY29uc3QgY29sdW1uTmFtZXMgPSBbXCJDYXRlZ29yaWVzXCIsIFwiU2NvcmVcIl1cblxuICAgIGxldCB0YWJsZSA9IGQzLnNlbGVjdCgnLnByb2ZpbGUnKVxuICAgICAgICAuYXBwZW5kKCd0YWJsZScpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgYHRhYmxlIHRhYmxlLSR7bmFtZX0gaGlkZGVuYClcbiAgICAgICAgLnN0eWxlKFwiYm9yZGVyLXJhZGl1c1wiLCBcIjEwcHhcIilcbiAgICAgICAgLnN0eWxlKFwiYm9yZGVyXCIsIFwiMnB4IHNvbGlkIGJsYWNrXCIpO1xuICAgIGxldCBoZWFkZXIgPSB0YWJsZVxuICAgICAgICAuYXBwZW5kKFwiaGVhZGVyXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0YWJsZS1oZWFkZXJcIik7XG4gICAgbGV0IHRhYmxlYm9keSA9IHRhYmxlLmFwcGVuZChcInRhYmxlYm9keVwiKTtcblxuICAgIGlmIChuYW1lID09PSBcIk5ldyBZb3JrXCIpIHtcbiAgICAgICAgdGFibGUuYXR0cihcImNsYXNzXCIsIGB0YWJsZSB0YWJsZS0ke25hbWV9YClcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRhYmxlLmF0dHIoXCJjbGFzc1wiLCBgdGFibGUgdGFibGUtJHtuYW1lfSBoaWRkZW5gKVxuICAgIH1cblxuICAgIGhlYWRlclxuICAgICAgICAuYXBwZW5kKFwidHJcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImhlYWRlci13cmFwcGVyXCIpXG4gICAgICAgIC5zdHlsZShcImNvbG9yXCIsIFwiYmx1ZVwiKVxuICAgICAgICAuc2VsZWN0QWxsKFwidGhcIilcbiAgICAgICAgLmRhdGEoY29sdW1uTmFtZXMpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJ0aFwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gZDtcbiAgICAgICAgfSlcbiAgICAgICAgLnN0eWxlKFwidGV4dC1hbGlnblwiLCBcImNlbnRlclwiKVxuICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIGQ7XG4gICAgICAgIH0pXG5cblxuXG4gICAgbGV0IHJvd3MgPSB0YWJsZWJvZHlcbiAgICAgICAgLnNlbGVjdEFsbChcInRyXCIpXG4gICAgICAgIC5kYXRhKGNpdHlEYXRhKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwidHJcIik7XG5cblxuICAgIGxldCBjZWxscyA9IHJvd3Muc2VsZWN0QWxsKFwidGRcIilcbiAgICAgICAgLmRhdGEoZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbnMubWFwKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW46IGNvbHVtbixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJvd1tjb2x1bW5dXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZChcInRkXCIpXG4gICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGQudmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZC52YWx1ZS50b0ZpeGVkKDIpID09PSAxMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIxMC4wIC8xMFwiXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAke2QudmFsdWUudG9GaXhlZCgyKX0gLzEwYFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGQudmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBkLnZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3RyID0gZC52YWx1ZS5yZXBsYWNlKC9cXHMvZywgXCJcIilcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTdHIyID0gbmV3U3RyLnJlcGxhY2UoL1smXS9nLCBcIlwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBgY2F0ZWdvcnkgJHtuZXdTdHIyfSBub25oaWdobGlnaHRlZGBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGBjYXRlZ29yeSAke2QudmFsdWV9IG5vbmhpZ2hsaWdodGVkYFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcImlkXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGQudmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTdHIgPSBkLnZhbHVlLnJlcGxhY2UoL1xccy9nLCBcIlwiKVxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1N0cjIgPSBuZXdTdHIucmVwbGFjZSgvWyZdL2csIFwiXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1N0cjJcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGQudmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGFibGU7IiwiZnVuY3Rpb24gY3JlYXRlVGl0bGUobmFtZSkge1xuICAgIGNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG4gICAgY29uc3Qgc2VjdGlvbkVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWN0aW9uXCIpXG4gICAgY29uc3QgbGlua1dyYXBwZXJFbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpbmstd3JhcHBlcnNcIilcblxuICAgIGNpdHlOYW1lLnRleHRDb250ZW50ID0gbmFtZVxuXG4gICAgaWYgKG5hbWUgPT09IFwiTmV3IFlvcmtcIikge1xuICAgICAgICBjaXR5TmFtZS5jbGFzc05hbWUgPSBgY2l0eXRpdGxlIHRpdGxlLSR7bmFtZX1gXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2l0eU5hbWUuY2xhc3NOYW1lID0gYGNpdHl0aXRsZSB0aXRsZS0ke25hbWV9IGhpZGRlbmBcbiAgICB9XG4gICAgc2VjdGlvbkVsZS5pbnNlcnRCZWZvcmUoY2l0eU5hbWUsIGxpbmtXcmFwcGVyRWxlKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUaXRsZTsiLCJleHBvcnQgZnVuY3Rpb24gdG9nZ2xlRHJvcGRvd24oZWxlKSB7XG4gICAgY29uc3QgZHJvcGRvd25CdXR0b25FbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLW1lbnVcIilcbiAgICBpZiAoZWxlLmNsYXNzTmFtZS5pbmNsdWRlcyhcImluYWN0aXZlXCIpKSB7XG4gICAgICAgIGVsZS5jbGFzc05hbWUgPSBlbGUuY2xhc3NOYW1lLnNwbGl0KFwiIFwiKVswXVxuICAgICAgICBlbGUuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIwIDAgMTBweCAxMHB4XCJcbiAgICAgICAgZHJvcGRvd25CdXR0b25FbGUuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMHB4IDEwcHggMCAwXCJcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZS5jbGFzc05hbWUgPSBlbGUuY2xhc3NOYW1lICsgXCIgaW5hY3RpdmVcIlxuICAgICAgICBlbGUuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMHB4XCJcbiAgICAgICAgZHJvcGRvd25CdXR0b25FbGUuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMHB4XCJcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93Q2hhcnRzKGNpdHlOYW1lKSB7XG4gICAgY29uc3QgY2l0eU5hbWVSZW1vdmVkU3BhY2UgPSBjaXR5TmFtZS5zcGxpdChcIiBcIilbMV1cbiAgICBjb25zdCBjaXR5Q2hhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjaXR5TmFtZVJlbW92ZWRTcGFjZX1gKVxuXG5cbiAgICBjb25zdCBhbGxDaXR5Q2hhcnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaXR5Y2hhcnRcIilcbiAgICBhbGxDaXR5Q2hhcnRzLmZvckVhY2goY2l0eUNoYXJ0ID0+IHtcbiAgICAgICAgaWYgKCFjaXR5Q2hhcnQuY2xhc3NOYW1lLmJhc2VWYWwuaW5jbHVkZXMoXCJoaWRkZW5cIikpIHtcbiAgICAgICAgICAgIGNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbCA9IGNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbCArIFwiIGhpZGRlblwiXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbC5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICBjaXR5Q2hhcnQuY2xhc3NOYW1lLmJhc2VWYWwgPSBgY2l0eWNoYXJ0ICR7Y2l0eU5hbWV9YFxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgY2l0eUNoYXJ0LmNsYXNzTmFtZS5iYXNlVmFsID0gY2l0eUNoYXJ0LmNsYXNzTmFtZS5iYXNlVmFsICsgXCIgaGlkZGVuXCJcblxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dUYWJsZXMoY2l0eU5hbWUpIHtcbiAgICBjb25zdCBjaXR5TmFtZVJlbW92ZWRTcGFjZSA9IGNpdHlOYW1lLnNwbGl0KFwiIFwiKVsxXVxuICAgIGNvbnN0IGNpdHlUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50YWJsZS0ke2NpdHlOYW1lUmVtb3ZlZFNwYWNlfWApXG5cbiAgICBjb25zdCBhbGxDaXR5VGFibGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJsZVwiKVxuICAgIGFsbENpdHlUYWJsZXMuZm9yRWFjaChjaXR5VGFibGUgPT4ge1xuICAgICAgICBpZiAoIWNpdHlUYWJsZS5jbGFzc05hbWUuaW5jbHVkZXMoXCJoaWRkZW5cIikpIHtcbiAgICAgICAgICAgIGNpdHlUYWJsZS5jbGFzc05hbWUgPSBjaXR5VGFibGUuY2xhc3NOYW1lICsgXCIgaGlkZGVuXCJcblxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGlmIChjaXR5VGFibGUuY2xhc3NOYW1lLmluY2x1ZGVzKFwiaGlkZGVuXCIpKSB7XG4gICAgICAgIGNpdHlUYWJsZS5jbGFzc05hbWUgPSBgdGFibGUgdGFibGUtJHtjaXR5TmFtZVJlbW92ZWRTcGFjZX1gXG4gICAgfSBlbHNlIHtcblxuICAgICAgICBjaXR5VGFibGUuY2xhc3NOYW1lID0gY2l0eVRhYmxlLmNsYXNzTmFtZSArIFwiIGhpZGRlblwiXG5cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93VGl0bGUoY2l0eU5hbWUpIHtcbiAgICBjb25zdCBjaXR5TmFtZVJlbW92ZWRTcGFjZSA9IGNpdHlOYW1lLnNwbGl0KFwiIFwiKVsxXVxuICAgIGNvbnN0IGNpdHlUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50aXRsZS0ke2NpdHlOYW1lUmVtb3ZlZFNwYWNlfWApXG5cbiAgICBjb25zdCBhbGxDaXR5VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNpdHl0aXRsZVwiKVxuICAgIGFsbENpdHlUaXRsZS5mb3JFYWNoKGNpdHlUaXRsZSA9PiB7XG4gICAgICAgIGlmICghY2l0eVRpdGxlLmNsYXNzTmFtZS5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICAgICAgY2l0eVRpdGxlLmNsYXNzTmFtZSA9IGNpdHlUaXRsZS5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxuXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNpdHlUaXRsZS5jbGFzc05hbWUuaW5jbHVkZXMoXCJoaWRkZW5cIikpIHtcbiAgICAgICAgY2l0eVRpdGxlLmNsYXNzTmFtZSA9IGBjaXR5dGl0bGUgdGl0bGUtJHtjaXR5TmFtZVJlbW92ZWRTcGFjZX1gXG4gICAgfSBlbHNlIHtcblxuICAgICAgICBjaXR5VGl0bGUuY2xhc3NOYW1lID0gY2l0eVRpdGxlLmNsYXNzTmFtZSArIFwiIGhpZGRlblwiXG5cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93U3VtbWFyeShjaXR5TmFtZSkge1xuICAgIGNvbnN0IGNpdHlOYW1lUmVtb3ZlZFNwYWNlID0gY2l0eU5hbWUuc3BsaXQoXCIgXCIpWzFdXG4gICAgY29uc3QgY2l0eVN1bW1hcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc3VtbWFyeS0ke2NpdHlOYW1lUmVtb3ZlZFNwYWNlfWApXG5cbiAgICBjb25zdCBhbGxDaXR5U3VtbWFyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2l0eVN1bW1hcnlcIilcbiAgICBhbGxDaXR5U3VtbWFyeS5mb3JFYWNoKGNpdHlTdW1tYXJ5ID0+IHtcbiAgICAgICAgaWYgKCFjaXR5U3VtbWFyeS5jbGFzc05hbWUuaW5jbHVkZXMoXCJoaWRkZW5cIikpIHtcbiAgICAgICAgICAgIGNpdHlTdW1tYXJ5LmNsYXNzTmFtZSA9IGNpdHlTdW1tYXJ5LmNsYXNzTmFtZSArIFwiIGhpZGRlblwiXG5cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoY2l0eVN1bW1hcnkuY2xhc3NOYW1lLmluY2x1ZGVzKFwiaGlkZGVuXCIpKSB7XG4gICAgICAgIGNpdHlTdW1tYXJ5LmNsYXNzTmFtZSA9IGBjaXR5U3VtbWFyeSBzdW1tYXJ5LSR7Y2l0eU5hbWVSZW1vdmVkU3BhY2V9YFxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgY2l0eVN1bW1hcnkuY2xhc3NOYW1lID0gY2l0eVN1bW1hcnkuY2xhc3NOYW1lICsgXCIgaGlkZGVuXCJcblxuICAgIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbGlnaHR1cENhdGVnb3JpZXMoaWQpIHtcbiAgICBjb25zdCBjaXR5Q2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHtpZH1gKVxuICAgIGNvbnN0IGFsbENpdHlDYXRlZ29yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXRlZ29yeVwiKVxuICAgIGFsbENpdHlDYXRlZ29yaWVzLmZvckVhY2goY2l0eUNhdCA9PiB7XG4gICAgICAgIGlmICghY2l0eUNhdC5jbGFzc05hbWUuaW5jbHVkZXMoXCJub25oaWdobGlnaHRlZFwiKSkge1xuICAgICAgICAgICAgY2l0eUNhdC5jbGFzc05hbWUgPSBjaXR5Q2F0LmNsYXNzTmFtZSArIFwiIG5vbmhpZ2hsaWdodGVkXCJcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjaXR5Q2F0ZWdvcnkuZm9yRWFjaChjaXR5Q2F0ID0+IHtcbiAgICAgICAgaWYgKGNpdHlDYXQuY2xhc3NOYW1lLmluY2x1ZGVzKGBjYXRlZ29yeSAke2lkfSBub25oaWdobGlnaHRlZGApKSB7XG4gICAgICAgICAgICBjaXR5Q2F0LmNsYXNzTmFtZSA9IGBjYXRlZ29yeSAke2lkfWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNpdHlDYXQuY2xhc3NOYW1lID0gY2l0eUNhdC5jbGFzc05hbWUgKyBcIiBub25oaWdobGlnaHRlZFwiXG4gICAgICAgIH1cbiAgICB9KVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9wSGlnaGxpZ2h0aW5nKCkge1xuICAgIGNvbnN0IGFsbENpdHlDYXRlZ29yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXRlZ29yeVwiKVxuICAgIGFsbENpdHlDYXRlZ29yaWVzLmZvckVhY2goY2l0eUNhdCA9PiB7XG4gICAgICAgIGlmICghY2l0eUNhdC5jbGFzc05hbWUuaW5jbHVkZXMoXCJub25oaWdobGlnaHRlZFwiKSkge1xuICAgICAgICAgICAgY2l0eUNhdC5jbGFzc05hbWUgPSBjaXR5Q2F0LmNsYXNzTmFtZSArIFwiIG5vbmhpZ2hsaWdodGVkXCJcbiAgICAgICAgfVxuICAgIH0pXG59XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0SXRlbShlbGUpIHtcbiAgICBjb25zdCBlbGVUZXh0ID0gZWxlLnRleHRDb250ZW50XG4gICAgY29uc3QgdGl0bGVFbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlXCIpXG4gICAgY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtbGlzdFwiKVxuICAgIHRpdGxlRWxlLnRleHRDb250ZW50ID0gZWxlVGV4dDtcbiAgICB0b2dnbGVEcm9wZG93bihtZW51TGlzdCk7XG5cbiAgICBzaG93Q2hhcnRzKGVsZVRleHQpXG4gICAgc2hvd1RhYmxlcyhlbGVUZXh0KVxuICAgIHNob3dUaXRsZShlbGVUZXh0KVxuICAgIHNob3dTdW1tYXJ5KGVsZVRleHQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZURyb3Bkb3duKCkge1xuICAgIGNvbnN0IGRyb3Bkb3duTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1saXN0XCIpXG5cbiAgICBpZiAoIWRyb3Bkb3duTWVudS5jbGFzc05hbWUuaW5jbHVkZXMoXCJpbmFjdGl2ZVwiKSkge1xuICAgICAgICBkcm9wZG93bk1lbnUuY2xhc3NOYW1lID0gXCJtZW51LWxpc3QgaW5hY3RpdmVcIlxuICAgIH1cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9