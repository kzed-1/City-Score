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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3N1bW1hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vdGl0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/ZGMyYSJdLCJuYW1lcyI6WyJjaXR5RGF0YSIsIm5hbWUiLCJzdW1tYXJ5IiwiY2l0eVNjb3JlIiwiY2l0eVNlbGVjdGlvbiIsImNpdGllcyIsInJlbmRlciIsImQzIiwianNvbiIsImVycm9yIiwiZGF0YSIsInRlbGVwb3J0X2NpdHlfc2NvcmUiLCJjYXRlZ29yaWVzIiwiY3JlYXRlQmFyR3JhcGgiLCJjcmVhdGVUYWJsZSIsImNyZWF0ZVRpdGxlIiwiY3JlYXRlU3VtbWFyeSIsInJlbmRlcmFsbCIsImZvckVhY2giLCJjaXR5IiwidGl0bGVEcm9wRG93bkJ1dHRvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnVMaXN0IiwiY2l0eUxpc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsIlV0aWwiLCJ3aWR0aCIsImhlaWdodCIsImFycmF5TGVuZ3RoIiwibGVuZ3RoIiwibWF4VmFsdWUiLCJtYXgiLCJkIiwic2NvcmVfb3V0X29mXzEwIiwieF9heGlzTGVuZ3RoIiwieV9heGlzTGVuZ3RoIiwieFNjYWxlIiwic2NhbGVMaW5lYXIiLCJkb21haW4iLCJyYW5nZSIsInN2ZyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJzZWxlY3RBbGwiLCJlbnRlciIsImkiLCJjb2xvciIsIm9uIiwibmV3U3RyIiwicmVwbGFjZSIsIm5ld1N0cjIiLCJ0b29sdGlwIiwic3R5bGUiLCJ0ZXh0IiwiZXZlbnQiLCJwYWdlWSIsInBhZ2VYIiwidG9GaXhlZCIsImNpdHlTdW1tYXJ5RWxlIiwiY3JlYXRlRWxlbWVudCIsInNlY3Rpb25FbGUiLCJ0ZXh0Q29udGVudCIsImNsYXNzTmFtZSIsImluc2VydEFkamFjZW50RWxlbWVudCIsImNvbHVtbnMiLCJjb2x1bW5OYW1lcyIsInRhYmxlIiwiaGVhZGVyIiwidGFibGVib2R5Iiwicm93cyIsImNlbGxzIiwicm93IiwibWFwIiwiY29sdW1uIiwidmFsdWUiLCJjaXR5TmFtZSIsImxpbmtXcmFwcGVyRWxlIiwiaW5zZXJ0QmVmb3JlIiwidG9nZ2xlRHJvcGRvd24iLCJlbGUiLCJkcm9wZG93bkJ1dHRvbkVsZSIsImluY2x1ZGVzIiwic3BsaXQiLCJib3JkZXJSYWRpdXMiLCJzaG93Q2hhcnRzIiwiY2l0eU5hbWVSZW1vdmVkU3BhY2UiLCJjaXR5Q2hhcnQiLCJhbGxDaXR5Q2hhcnRzIiwiYmFzZVZhbCIsInNob3dUYWJsZXMiLCJjaXR5VGFibGUiLCJhbGxDaXR5VGFibGVzIiwic2hvd1RpdGxlIiwiY2l0eVRpdGxlIiwiYWxsQ2l0eVRpdGxlIiwic2hvd1N1bW1hcnkiLCJjaXR5U3VtbWFyeSIsImFsbENpdHlTdW1tYXJ5IiwibGlnaHR1cENhdGVnb3JpZXMiLCJpZCIsImNpdHlDYXRlZ29yeSIsImFsbENpdHlDYXRlZ29yaWVzIiwiY2l0eUNhdCIsInN0b3BIaWdobGlnaHRpbmciLCJzZWxlY3RJdGVtIiwiZWxlVGV4dCIsInRpdGxlRWxlIiwiY2xvc2VEcm9wZG93biIsImRyb3Bkb3duTWVudSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMx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VUFBVCxDQUFvQnpCLEdBQXBCLEVBQXlCO0FBQzVCLE1BQU0wQixPQUFPLEdBQUcxQixHQUFHLENBQUNsQixXQUFwQjtBQUNBLE1BQU02QyxRQUFRLEdBQUd4RixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBakI7QUFDQSxNQUFNQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixZQUF2QixDQUFqQjtBQUNBdUYsVUFBUSxDQUFDN0MsV0FBVCxHQUF1QjRDLE9BQXZCO0FBQ0EzQixnQkFBYyxDQUFDMUQsUUFBRCxDQUFkO0FBRUFnRSxZQUFVLENBQUNxQixPQUFELENBQVY7QUFDQWhCLFlBQVUsQ0FBQ2dCLE9BQUQsQ0FBVjtBQUNBYixXQUFTLENBQUNhLE9BQUQsQ0FBVDtBQUNBVixhQUFXLENBQUNVLE9BQUQsQ0FBWDtBQUNIO0FBRU0sU0FBU0UsYUFBVCxHQUF5QjtBQUM1QixNQUFNQyxZQUFZLEdBQUcxRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBckI7O0FBRUEsTUFBSSxDQUFDeUYsWUFBWSxDQUFDOUMsU0FBYixDQUF1Qm1CLFFBQXZCLENBQWdDLFVBQWhDLENBQUwsRUFBa0Q7QUFDOUMyQixnQkFBWSxDQUFDOUMsU0FBYixHQUF5QixvQkFBekI7QUFDSDtBQUNKLEM7Ozs7Ozs7Ozs7O0FDcEpELHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgY3JlYXRlQmFyR3JhcGggZnJvbSAnLi9tYWluL2NoYXJ0LmpzJztcbmltcG9ydCBjcmVhdGVUYWJsZSBmcm9tICcuL21haW4vdGFibGUuanMnO1xuaW1wb3J0IGNyZWF0ZVRpdGxlIGZyb20gJy4vbWFpbi90aXRsZS5qcyc7XG5pbXBvcnQgY3JlYXRlU3VtbWFyeSBmcm9tICcuL21haW4vc3VtbWFyeSc7XG5pbXBvcnQgKiBhcyBVdGlsIGZyb20gJy4vbWFpbi91dGlsLmpzJztcblxuXG5cbmxldCBjaXR5RGF0YSA9IFtdXG5sZXQgbmFtZSwgc3VtbWFyeSwgY2l0eVNjb3JlO1xuXG5sZXQgY2l0eVNlbGVjdGlvbiA9IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2t6ZWQtMS9DaXR5LVNjb3JlL21hc3Rlci9zcmMvZGF0YS9uZXd5b3JrLmpzb25cIlxuXG4vLyBjb25zdCBjaXRpZXMgPSBbXG4vLyAgICAgXCIuL3NyYy9kYXRhL25ld3lvcmsuanNvblwiLCBcIi4vc3JjL2RhdGEvc2FuZnJhbi5qc29uXCIsIFwiLi9zcmMvZGF0YS9zZWF0dGxlLmpzb25cIiwgXG4vLyAgICAgXCIuL3NyYy9kYXRhL3Rvcm9udG8uanNvblwiLCBcIi4vc3JjL2RhdGEvYm9zdG9uLmpzb25cIiwgXCIuL3NyYy9kYXRhL2NoaWNhZ28uanNvblwiLCBcbi8vICAgICBcIi4vc3JjL2RhdGEvbG9zYW5nZWxlcy5qc29uXCIsIFwiLi9zcmMvZGF0YS9kYWxsYXMuanNvblwiLCBcIi4vc3JjL2RhdGEvcGhvZW5peC5qc29uXCIsIFxuLy8gICAgIFwiLi9zcmMvZGF0YS9yYWxlaWdoLmpzb25cIlxuLy8gICAgIF0gXG5jb25zdCBjaXRpZXMgPSBbXG4gICAgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20va3plZC0xL0NpdHktU2NvcmUvbWFzdGVyL3NyYy9kYXRhL25ld3lvcmsuanNvblwiLCBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9remVkLTEvQ2l0eS1TY29yZS9tYXN0ZXIvc3JjL2RhdGEvc2FuZnJhbi5qc29uXCIsIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2t6ZWQtMS9DaXR5LVNjb3JlL21hc3Rlci9zcmMvZGF0YS9zZWF0dGxlLmpzb25cIiwgXG4gICAgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20va3plZC0xL0NpdHktU2NvcmUvbWFzdGVyL3NyYy9kYXRhL3Rvcm9udG8uanNvblwiLCBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9remVkLTEvQ2l0eS1TY29yZS9tYXN0ZXIvc3JjL2RhdGEvYm9zdG9uLmpzb25cIiwgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20va3plZC0xL0NpdHktU2NvcmUvbWFzdGVyL3NyYy9kYXRhL2NoaWNhZ28uanNvblwiLCBcbiAgICBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9remVkLTEvQ2l0eS1TY29yZS9tYXN0ZXIvc3JjL2RhdGEvbG9zYW5nZWxlcy5qc29uXCIsIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2t6ZWQtMS9DaXR5LVNjb3JlL21hc3Rlci9zcmMvZGF0YS9kYWxsYXMuanNvblwiLCBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9remVkLTEvQ2l0eS1TY29yZS9tYXN0ZXIvc3JjL2RhdGEvcGhvZW5peC5qc29uXCIsIFxuICAgIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2t6ZWQtMS9DaXR5LVNjb3JlL21hc3Rlci9zcmMvZGF0YS9yYWxlaWdoLmpzb25cIlxuICAgIF0gXG5cblxuZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGQzLmpzb24oY2l0eVNlbGVjdGlvbiwgZnVuY3Rpb24gKGVycm9yLCBkYXRhKSB7XG5cbiAgICAgICAgbmFtZSA9IGRhdGEubmFtZVxuICAgICAgICBzdW1tYXJ5ID0gZGF0YS5zdW1tYXJ5XG4gICAgICAgIGNpdHlTY29yZSA9IGRhdGEudGVsZXBvcnRfY2l0eV9zY29yZVxuICAgICAgICBjaXR5RGF0YSA9IGRhdGEuY2F0ZWdvcmllc1xuICAgICAgICBjcmVhdGVCYXJHcmFwaChjaXR5RGF0YSwgbmFtZSk7XG4gICAgICAgIGNyZWF0ZVRhYmxlKGNpdHlEYXRhLCBuYW1lKTtcbiAgICAgICAgY3JlYXRlVGl0bGUobmFtZSk7XG4gICAgICAgIGNyZWF0ZVN1bW1hcnkobmFtZSwgc3VtbWFyeSk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gcmVuZGVyYWxsKCkge1xuICAgIGNpdGllcy5mb3JFYWNoKGNpdHkgPT4ge1xuICAgICAgICBjaXR5U2VsZWN0aW9uID0gY2l0eSBcbiAgICAgICAgcmVuZGVyKClcbiAgICB9KTtcbn1cblxuXG4vLyBjb25zdCB0aXRsZURyb3BEb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZS1kcm9wZG93bi13cmFwcGVyXCIpXG5jb25zdCB0aXRsZURyb3BEb3duQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKVxuY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtbGlzdFwiKVxuY29uc3QgY2l0eUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNpdHlcIilcblxuXG50aXRsZURyb3BEb3duQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gVXRpbC50b2dnbGVEcm9wZG93bihtZW51TGlzdCkpXG50aXRsZURyb3BEb3duQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiBVdGlsLmNsb3NlRHJvcGRvd24oKSlcbm1lbnVMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiBVdGlsLmNsb3NlRHJvcGRvd24oKSlcblxuY2l0eUxpc3QuZm9yRWFjaChjaXR5ID0+IHtcbiAgICBjaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gVXRpbC5zZWxlY3RJdGVtKGNpdHkpKVxufSlcblxucmVuZGVyYWxsKClcblxuXG5cbiIsImltcG9ydCAqIGFzIFV0aWwgZnJvbSBcIi4vdXRpbFwiO1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUJhckdyYXBoKGNpdHlEYXRhLCBuYW1lKSB7XG4gICAgdmFyIHdpZHRoID0gNTAwO1xuICAgIHZhciBoZWlnaHQgPSA1MzA7XG5cbiAgICB2YXIgYXJyYXlMZW5ndGggPSBjaXR5RGF0YS5sZW5ndGg7IFxuICAgIHZhciBtYXhWYWx1ZSA9IGQzLm1heChjaXR5RGF0YSwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuICtkLnNjb3JlX291dF9vZl8xMDsgfSk7IFxuICAgIHZhciB4X2F4aXNMZW5ndGggPSA1MDA7IFxuICAgIHZhciB5X2F4aXNMZW5ndGggPSA1MDA7IFxuXG5cbiAgICB2YXIgeFNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAuZG9tYWluKFswLCBtYXhWYWx1ZV0pXG4gICAgICAgIC5yYW5nZShbMCwgeF9heGlzTGVuZ3RoXSk7XG5cbiAgICB2YXIgc3ZnID0gZDMuc2VsZWN0KFwiLmNoYXJ0XCIpXG4gICAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aClcbiAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0KTtcblxuICAgIGlmIChuYW1lID09PSBcIk5ldyBZb3JrXCIpIHtcbiAgICAgICAgc3ZnLmF0dHIoXCJjbGFzc1wiLCBgY2l0eWNoYXJ0ICR7bmFtZX1gKVxuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3ZnLmF0dHIoXCJjbGFzc1wiLCBgY2l0eWNoYXJ0ICR7bmFtZX0gaGlkZGVuYClcbiAgICB9XG5cblxuICAgIHN2Zy5zZWxlY3RBbGwoXCJyZWN0XCIpXG4gICAgICAgIC5kYXRhKGNpdHlEYXRhKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiBpICogKHlfYXhpc0xlbmd0aCAvIGFycmF5TGVuZ3RoKSArIDMwO1xuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcInhcIiwgMClcbiAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgKHlfYXhpc0xlbmd0aCAvIGFycmF5TGVuZ3RoKSAtIDEpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiB4U2NhbGUoZC5zY29yZV9vdXRfb2ZfMTApO1xuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBkLmNvbG9yXG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBgYmFyICR7ZC5uYW1lfWA7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgY29uc3QgbmV3U3RyID0gZC5uYW1lLnJlcGxhY2UoL1xccy9nLCBcIlwiKVxuICAgICAgICAgICAgY29uc3QgbmV3U3RyMiA9IG5ld1N0ci5yZXBsYWNlKC9bJl0vZywgXCJcIilcbiAgICAgICAgICAgIFV0aWwubGlnaHR1cENhdGVnb3JpZXMobmV3U3RyMilcbiAgICAgICAgICAgIHJldHVybiB0b29sdGlwLnN0eWxlKFwidmlzaWJpbGl0eVwiLCBcInZpc2libGVcIikudGV4dChkLm5hbWUgKyBcIjogXCIgKyBkLnNjb3JlX291dF9vZl8xMCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRvb2x0aXAuc3R5bGUoXCJ0b3BcIiwgKGQzLmV2ZW50LnBhZ2VZIC0gMTApICsgXCJweFwiKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcImxlZnRcIiwgKGQzLmV2ZW50LnBhZ2VYICsgMTApICsgXCJweFwiKS50ZXh0KGQubmFtZSArIFwiOiBcIiArIGQuc2NvcmVfb3V0X29mXzEwLnRvRml4ZWQoMikpO1xuICAgICAgICB9KVxuICAgICAgICAub24oXCJtb3VzZW91dFwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgVXRpbC5zdG9wSGlnaGxpZ2h0aW5nKClcbiAgICAgICAgICAgIHJldHVybiB0b29sdGlwLnN0eWxlKFwidmlzaWJpbGl0eVwiLCBcImhpZGRlblwiKVxuICAgICAgICB9KVxuXG4gICAgdmFyIHRvb2x0aXAgPSBkMy5zZWxlY3QoXCIuY2hhcnRcIilcbiAgICAgICAgLmFwcGVuZChcImRpdlwiKVxuICAgICAgICAuc3R5bGUoXCJwb3NpdGlvblwiLCBcImFic29sdXRlXCIpXG4gICAgICAgIC5zdHlsZShcImZvbnQtZmFtaWx5XCIsIFwicm9ib3RvXCIpXG4gICAgICAgIC5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjE0cHhcIilcbiAgICAgICAgLnN0eWxlKFwiei1pbmRleFwiLCBcIjNcIilcbiAgICAgICAgLnN0eWxlKFwidmlzaWJpbGl0eVwiLCBcImhpZGRlblwiKVxuICAgICAgICAuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwid2hpdGVcIilcbiAgICAgICAgLnN0eWxlKFwid2lkdGhcIiwgXCJhdXRvXCIpXG4gICAgICAgIC5zdHlsZShcIm1hcmdpblwiLCBcIjAgYXV0b1wiKVxuICAgICAgICAuc3R5bGUoXCJib3JkZXItcmFkaXVzXCIsIFwiMTBweFwiKVxuICAgICAgICAuc3R5bGUoXCJwYWRkaW5nXCIsIFwiMTBweFwiKVxuICAgICAgICAuc3R5bGUoXCJib3JkZXJcIiwgXCIycHggc29saWQgYmxhY2tcIilcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUJhckdyYXBoOyIsImZ1bmN0aW9uIGNyZWF0ZVN1bW1hcnkobmFtZSwgc3VtbWFyeSkge1xuICAgIGNvbnN0IGNpdHlTdW1tYXJ5RWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBjb25zdCBzZWN0aW9uRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlY3Rpb25cIilcblxuICAgIGNpdHlTdW1tYXJ5RWxlLnRleHRDb250ZW50ID0gc3VtbWFyeS5yZXBsYWNlKC9bPF0uezEsMn1bPl0vZywgXCJcIilcblxuICAgIGlmIChuYW1lID09PSBcIk5ldyBZb3JrXCIpIHtcbiAgICAgICAgY2l0eVN1bW1hcnlFbGUuY2xhc3NOYW1lID0gYGNpdHlTdW1tYXJ5IHN1bW1hcnktJHtuYW1lfWBcbiAgICB9IGVsc2Uge1xuICAgICAgICBjaXR5U3VtbWFyeUVsZS5jbGFzc05hbWUgPSBgY2l0eVN1bW1hcnkgc3VtbWFyeS0ke25hbWV9IGhpZGRlbmBcbiAgICB9XG5cbiAgICBzZWN0aW9uRWxlLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyZW5kXCIsIGNpdHlTdW1tYXJ5RWxlKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdW1tYXJ5OyIsImltcG9ydCAqIGFzIFV0aWwgZnJvbSAnLi91dGlsLmpzJ1xuXG5mdW5jdGlvbiBjcmVhdGVUYWJsZShjaXR5RGF0YSwgbmFtZSkge1xuXG4gICAgY29uc3QgY29sdW1ucyA9IFtcIm5hbWVcIiwgXCJzY29yZV9vdXRfb2ZfMTBcIl1cbiAgICBjb25zdCBjb2x1bW5OYW1lcyA9IFtcIkNhdGVnb3JpZXNcIiwgXCJTY29yZVwiXVxuXG4gICAgbGV0IHRhYmxlID0gZDMuc2VsZWN0KCcucHJvZmlsZScpXG4gICAgICAgIC5hcHBlbmQoJ3RhYmxlJylcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBgdGFibGUgdGFibGUtJHtuYW1lfSBoaWRkZW5gKVxuICAgICAgICAuc3R5bGUoXCJib3JkZXItcmFkaXVzXCIsIFwiMTBweFwiKVxuICAgICAgICAuc3R5bGUoXCJib3JkZXJcIiwgXCIycHggc29saWQgYmxhY2tcIik7XG4gICAgbGV0IGhlYWRlciA9IHRhYmxlXG4gICAgICAgIC5hcHBlbmQoXCJoZWFkZXJcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInRhYmxlLWhlYWRlclwiKTtcbiAgICBsZXQgdGFibGVib2R5ID0gdGFibGUuYXBwZW5kKFwidGFibGVib2R5XCIpO1xuXG4gICAgaWYgKG5hbWUgPT09IFwiTmV3IFlvcmtcIikge1xuICAgICAgICB0YWJsZS5hdHRyKFwiY2xhc3NcIiwgYHRhYmxlIHRhYmxlLSR7bmFtZX1gKVxuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGFibGUuYXR0cihcImNsYXNzXCIsIGB0YWJsZSB0YWJsZS0ke25hbWV9IGhpZGRlbmApXG4gICAgfVxuXG4gICAgaGVhZGVyXG4gICAgICAgIC5hcHBlbmQoXCJ0clwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiaGVhZGVyLXdyYXBwZXJcIilcbiAgICAgICAgLnN0eWxlKFwiY29sb3JcIiwgXCJibHVlXCIpXG4gICAgICAgIC5zZWxlY3RBbGwoXCJ0aFwiKVxuICAgICAgICAuZGF0YShjb2x1bW5OYW1lcylcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZChcInRoXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBkO1xuICAgICAgICB9KVxuICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFsaWduXCIsIFwiY2VudGVyXCIpXG4gICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gZDtcbiAgICAgICAgfSlcblxuXG5cbiAgICBsZXQgcm93cyA9IHRhYmxlYm9keVxuICAgICAgICAuc2VsZWN0QWxsKFwidHJcIilcbiAgICAgICAgLmRhdGEoY2l0eURhdGEpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJ0clwiKTtcblxuXG4gICAgbGV0IGNlbGxzID0gcm93cy5zZWxlY3RBbGwoXCJ0ZFwiKVxuICAgICAgICAuZGF0YShmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgICByZXR1cm4gY29sdW1ucy5tYXAoZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbjogY29sdW1uLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcm93W2NvbHVtbl1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwidGRcIilcbiAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZC52YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIGlmIChkLnZhbHVlLnRvRml4ZWQoMikgPT09IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIjEwLjAgLzEwXCJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYCR7ZC52YWx1ZS50b0ZpeGVkKDIpfSAvMTBgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZC52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGQudmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTdHIgPSBkLnZhbHVlLnJlcGxhY2UoL1xccy9nLCBcIlwiKVxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1N0cjIgPSBuZXdTdHIucmVwbGFjZSgvWyZdL2csIFwiXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGBjYXRlZ29yeSAke25ld1N0cjJ9IG5vbmhpZ2hsaWdodGVkYFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYGNhdGVnb3J5ICR7ZC52YWx1ZX0gbm9uaGlnaGxpZ2h0ZWRgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKFwiaWRcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZC52YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1N0ciA9IGQudmFsdWUucmVwbGFjZSgvXFxzL2csIFwiXCIpXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3RyMiA9IG5ld1N0ci5yZXBsYWNlKC9bJl0vZywgXCJcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3U3RyMlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZC52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUYWJsZTsiLCJmdW5jdGlvbiBjcmVhdGVUaXRsZShuYW1lKSB7XG4gICAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbiAgICBjb25zdCBzZWN0aW9uRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlY3Rpb25cIilcbiAgICBjb25zdCBsaW5rV3JhcHBlckVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGluay13cmFwcGVyc1wiKVxuXG4gICAgY2l0eU5hbWUudGV4dENvbnRlbnQgPSBuYW1lXG5cbiAgICBpZiAobmFtZSA9PT0gXCJOZXcgWW9ya1wiKSB7XG4gICAgICAgIGNpdHlOYW1lLmNsYXNzTmFtZSA9IGBjaXR5dGl0bGUgdGl0bGUtJHtuYW1lfWBcbiAgICB9IGVsc2Uge1xuICAgICAgICBjaXR5TmFtZS5jbGFzc05hbWUgPSBgY2l0eXRpdGxlIHRpdGxlLSR7bmFtZX0gaGlkZGVuYFxuICAgIH1cbiAgICBzZWN0aW9uRWxlLmluc2VydEJlZm9yZShjaXR5TmFtZSwgbGlua1dyYXBwZXJFbGUpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRpdGxlOyIsImV4cG9ydCBmdW5jdGlvbiB0b2dnbGVEcm9wZG93bihlbGUpIHtcbiAgICBjb25zdCBkcm9wZG93bkJ1dHRvbkVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tbWVudVwiKVxuICAgIGlmIChlbGUuY2xhc3NOYW1lLmluY2x1ZGVzKFwiaW5hY3RpdmVcIikpIHtcbiAgICAgICAgZWxlLmNsYXNzTmFtZSA9IGVsZS5jbGFzc05hbWUuc3BsaXQoXCIgXCIpWzBdXG4gICAgICAgIGVsZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjAgMCAxMHB4IDEwcHhcIlxuICAgICAgICBkcm9wZG93bkJ1dHRvbkVsZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEwcHggMTBweCAwIDBcIlxuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWxlLmNsYXNzTmFtZSA9IGVsZS5jbGFzc05hbWUgKyBcIiBpbmFjdGl2ZVwiXG4gICAgICAgIGVsZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEwcHhcIlxuICAgICAgICBkcm9wZG93bkJ1dHRvbkVsZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEwcHhcIlxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dDaGFydHMoY2l0eU5hbWUpIHtcbiAgICBjb25zdCBjaXR5TmFtZVJlbW92ZWRTcGFjZSA9IGNpdHlOYW1lLnNwbGl0KFwiIFwiKVsxXVxuICAgIGNvbnN0IGNpdHlDaGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NpdHlOYW1lUmVtb3ZlZFNwYWNlfWApXG5cblxuICAgIGNvbnN0IGFsbENpdHlDaGFydHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNpdHljaGFydFwiKVxuICAgIGFsbENpdHlDaGFydHMuZm9yRWFjaChjaXR5Q2hhcnQgPT4ge1xuICAgICAgICBpZiAoIWNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbC5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICAgICAgY2l0eUNoYXJ0LmNsYXNzTmFtZS5iYXNlVmFsID0gY2l0eUNoYXJ0LmNsYXNzTmFtZS5iYXNlVmFsICsgXCIgaGlkZGVuXCJcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoY2l0eUNoYXJ0LmNsYXNzTmFtZS5iYXNlVmFsLmluY2x1ZGVzKFwiaGlkZGVuXCIpKSB7XG4gICAgICAgIGNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbCA9IGBjaXR5Y2hhcnQgJHtjaXR5TmFtZX1gXG4gICAgfSBlbHNlIHtcblxuICAgICAgICBjaXR5Q2hhcnQuY2xhc3NOYW1lLmJhc2VWYWwgPSBjaXR5Q2hhcnQuY2xhc3NOYW1lLmJhc2VWYWwgKyBcIiBoaWRkZW5cIlxuXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1RhYmxlcyhjaXR5TmFtZSkge1xuICAgIGNvbnN0IGNpdHlOYW1lUmVtb3ZlZFNwYWNlID0gY2l0eU5hbWUuc3BsaXQoXCIgXCIpWzFdXG4gICAgY29uc3QgY2l0eVRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRhYmxlLSR7Y2l0eU5hbWVSZW1vdmVkU3BhY2V9YClcblxuICAgIGNvbnN0IGFsbENpdHlUYWJsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYmxlXCIpXG4gICAgYWxsQ2l0eVRhYmxlcy5mb3JFYWNoKGNpdHlUYWJsZSA9PiB7XG4gICAgICAgIGlmICghY2l0eVRhYmxlLmNsYXNzTmFtZS5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICAgICAgY2l0eVRhYmxlLmNsYXNzTmFtZSA9IGNpdHlUYWJsZS5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxuXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNpdHlUYWJsZS5jbGFzc05hbWUuaW5jbHVkZXMoXCJoaWRkZW5cIikpIHtcbiAgICAgICAgY2l0eVRhYmxlLmNsYXNzTmFtZSA9IGB0YWJsZSB0YWJsZS0ke2NpdHlOYW1lUmVtb3ZlZFNwYWNlfWBcbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIGNpdHlUYWJsZS5jbGFzc05hbWUgPSBjaXR5VGFibGUuY2xhc3NOYW1lICsgXCIgaGlkZGVuXCJcblxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dUaXRsZShjaXR5TmFtZSkge1xuICAgIGNvbnN0IGNpdHlOYW1lUmVtb3ZlZFNwYWNlID0gY2l0eU5hbWUuc3BsaXQoXCIgXCIpWzFdXG4gICAgY29uc3QgY2l0eVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRpdGxlLSR7Y2l0eU5hbWVSZW1vdmVkU3BhY2V9YClcblxuICAgIGNvbnN0IGFsbENpdHlUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2l0eXRpdGxlXCIpXG4gICAgYWxsQ2l0eVRpdGxlLmZvckVhY2goY2l0eVRpdGxlID0+IHtcbiAgICAgICAgaWYgKCFjaXR5VGl0bGUuY2xhc3NOYW1lLmluY2x1ZGVzKFwiaGlkZGVuXCIpKSB7XG4gICAgICAgICAgICBjaXR5VGl0bGUuY2xhc3NOYW1lID0gY2l0eVRpdGxlLmNsYXNzTmFtZSArIFwiIGhpZGRlblwiXG5cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoY2l0eVRpdGxlLmNsYXNzTmFtZS5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICBjaXR5VGl0bGUuY2xhc3NOYW1lID0gYGNpdHl0aXRsZSB0aXRsZS0ke2NpdHlOYW1lUmVtb3ZlZFNwYWNlfWBcbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIGNpdHlUaXRsZS5jbGFzc05hbWUgPSBjaXR5VGl0bGUuY2xhc3NOYW1lICsgXCIgaGlkZGVuXCJcblxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dTdW1tYXJ5KGNpdHlOYW1lKSB7XG4gICAgY29uc3QgY2l0eU5hbWVSZW1vdmVkU3BhY2UgPSBjaXR5TmFtZS5zcGxpdChcIiBcIilbMV1cbiAgICBjb25zdCBjaXR5U3VtbWFyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zdW1tYXJ5LSR7Y2l0eU5hbWVSZW1vdmVkU3BhY2V9YClcblxuICAgIGNvbnN0IGFsbENpdHlTdW1tYXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaXR5U3VtbWFyeVwiKVxuICAgIGFsbENpdHlTdW1tYXJ5LmZvckVhY2goY2l0eVN1bW1hcnkgPT4ge1xuICAgICAgICBpZiAoIWNpdHlTdW1tYXJ5LmNsYXNzTmFtZS5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICAgICAgY2l0eVN1bW1hcnkuY2xhc3NOYW1lID0gY2l0eVN1bW1hcnkuY2xhc3NOYW1lICsgXCIgaGlkZGVuXCJcblxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGlmIChjaXR5U3VtbWFyeS5jbGFzc05hbWUuaW5jbHVkZXMoXCJoaWRkZW5cIikpIHtcbiAgICAgICAgY2l0eVN1bW1hcnkuY2xhc3NOYW1lID0gYGNpdHlTdW1tYXJ5IHN1bW1hcnktJHtjaXR5TmFtZVJlbW92ZWRTcGFjZX1gXG4gICAgfSBlbHNlIHtcblxuICAgICAgICBjaXR5U3VtbWFyeS5jbGFzc05hbWUgPSBjaXR5U3VtbWFyeS5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxuXG4gICAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBsaWdodHVwQ2F0ZWdvcmllcyhpZCkge1xuICAgIGNvbnN0IGNpdHlDYXRlZ29yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCMke2lkfWApXG4gICAgY29uc3QgYWxsQ2l0eUNhdGVnb3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhdGVnb3J5XCIpXG4gICAgYWxsQ2l0eUNhdGVnb3JpZXMuZm9yRWFjaChjaXR5Q2F0ID0+IHtcbiAgICAgICAgaWYgKCFjaXR5Q2F0LmNsYXNzTmFtZS5pbmNsdWRlcyhcIm5vbmhpZ2hsaWdodGVkXCIpKSB7XG4gICAgICAgICAgICBjaXR5Q2F0LmNsYXNzTmFtZSA9IGNpdHlDYXQuY2xhc3NOYW1lICsgXCIgbm9uaGlnaGxpZ2h0ZWRcIlxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGNpdHlDYXRlZ29yeS5mb3JFYWNoKGNpdHlDYXQgPT4ge1xuICAgICAgICBpZiAoY2l0eUNhdC5jbGFzc05hbWUuaW5jbHVkZXMoYGNhdGVnb3J5ICR7aWR9IG5vbmhpZ2hsaWdodGVkYCkpIHtcbiAgICAgICAgICAgIGNpdHlDYXQuY2xhc3NOYW1lID0gYGNhdGVnb3J5ICR7aWR9YFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2l0eUNhdC5jbGFzc05hbWUgPSBjaXR5Q2F0LmNsYXNzTmFtZSArIFwiIG5vbmhpZ2hsaWdodGVkXCJcbiAgICAgICAgfVxuICAgIH0pXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3BIaWdobGlnaHRpbmcoKSB7XG4gICAgY29uc3QgYWxsQ2l0eUNhdGVnb3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhdGVnb3J5XCIpXG4gICAgYWxsQ2l0eUNhdGVnb3JpZXMuZm9yRWFjaChjaXR5Q2F0ID0+IHtcbiAgICAgICAgaWYgKCFjaXR5Q2F0LmNsYXNzTmFtZS5pbmNsdWRlcyhcIm5vbmhpZ2hsaWdodGVkXCIpKSB7XG4gICAgICAgICAgICBjaXR5Q2F0LmNsYXNzTmFtZSA9IGNpdHlDYXQuY2xhc3NOYW1lICsgXCIgbm9uaGlnaGxpZ2h0ZWRcIlxuICAgICAgICB9XG4gICAgfSlcbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RJdGVtKGVsZSkge1xuICAgIGNvbnN0IGVsZVRleHQgPSBlbGUudGV4dENvbnRlbnRcbiAgICBjb25zdCB0aXRsZUVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGVcIilcbiAgICBjb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1saXN0XCIpXG4gICAgdGl0bGVFbGUudGV4dENvbnRlbnQgPSBlbGVUZXh0O1xuICAgIHRvZ2dsZURyb3Bkb3duKG1lbnVMaXN0KTtcblxuICAgIHNob3dDaGFydHMoZWxlVGV4dClcbiAgICBzaG93VGFibGVzKGVsZVRleHQpXG4gICAgc2hvd1RpdGxlKGVsZVRleHQpXG4gICAgc2hvd1N1bW1hcnkoZWxlVGV4dClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlRHJvcGRvd24oKSB7XG4gICAgY29uc3QgZHJvcGRvd25NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWxpc3RcIilcblxuICAgIGlmICghZHJvcGRvd25NZW51LmNsYXNzTmFtZS5pbmNsdWRlcyhcImluYWN0aXZlXCIpKSB7XG4gICAgICAgIGRyb3Bkb3duTWVudS5jbGFzc05hbWUgPSBcIm1lbnUtbGlzdCBpbmFjdGl2ZVwiXG4gICAgfVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=