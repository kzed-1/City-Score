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

var cityData = [];
var name, summary, cityScore;
var citySelection = "/src/data/newyork.json";
var cities = ["/src/data/newyork.json", "/src/data/sanfran.json", "/src/data/seattle.json", "/src/data/toronto.json", "/src/data/boston.json", "/src/data/chicago.json", "/src/data/losangeles.json", "/src/data/dallas.json", "/src/data/phoenix.json", "/src/data/raleigh.json"];
var animationDelay = ["10", "20", "30", "40", "50", "60", "70", "80", "90", "100", "110", "120", "130", "140", "150", "160"];

function render() {
  d3.json(citySelection, function (error, data) {
    name = data.name;
    summary = data.summary;
    cityScore = data.teleport_city_score;
    cityData = data.categories;
    createBarGraph();
    createTable();
    createTitle();
    createSummary();
  });
}

function renderall() {
  cities.forEach(function (city) {
    citySelection = city;
    render();
  });
}

function createTitle() {
  var cityName = document.createElement("h1");
  var sectionEle = document.querySelector("section"); // const dropDownEle = document.querySelector(".dropdown-menu")

  cityName.textContent = name;

  if (name === "New York") {
    cityName.className = "citytitle title-".concat(name);
  } else {
    cityName.className = "citytitle title-".concat(name, " hidden");
  } // sectionEle.insertBefore(cityName, dropDownEle)


  sectionEle.appendChild(cityName);
}

function createSummary() {
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

function createBarGraph() {
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
    lightupCategories(newStr2);
    return tooltip.style("visibility", "visible").text(d.name + ": " + d.score_out_of_10);
  }).on("mousemove", function (d) {
    return tooltip.style("top", d3.event.pageY - 10 + "px").style("left", d3.event.pageX + 10 + "px").text(d.name + ": " + d.score_out_of_10.toFixed(2));
  }).on("mouseout", function (d) {
    stopHighlighting();
    return tooltip.style("visibility", "hidden");
  }); // Create y-axis

  svg.append("line").attr("x1", 700).attr("y1", 30).attr("x2", 700).attr("y2", 529).attr("stroke-width", 2).attr("stroke", "black"); // Create x-axis

  svg.append("line").attr("x1", 30).attr("y1", 750).attr("x2", 500).attr("y2", 750).attr("stroke-width", 2).attr("stroke", "black");
  var tooltip = d3.select(".chart").append("div").style("position", "absolute").style("font-family", "roboto").style("font-size", "14px").style("z-index", "3").style("visibility", "hidden").style("background-color", "white").style("width", "auto").style("margin", "0 auto").style("border-radius", "10px").style("padding", "10px").style("border", "2px solid black");
}

;

function createTable() {
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
      return newStr;
    } else {
      return d.value;
    }
  });
}

var titleDropDown = document.querySelector(".title");
var menuList = document.querySelector(".menu-list");
var cityList = document.querySelectorAll(".city");

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
  titleEle.textContent = eleText;
  toggleDropdown(menuList);
  showCharts(eleText);
  showTables(eleText);
  showTitle(eleText);
  showSummary(eleText);
}

titleDropDown.addEventListener('click', function () {
  return toggleDropdown(menuList);
});
cityList.forEach(function (city) {
  city.addEventListener('click', function () {
    return selectItem(city);
  });
});
renderall();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJjaXR5RGF0YSIsIm5hbWUiLCJzdW1tYXJ5IiwiY2l0eVNjb3JlIiwiY2l0eVNlbGVjdGlvbiIsImNpdGllcyIsImFuaW1hdGlvbkRlbGF5IiwicmVuZGVyIiwiZDMiLCJqc29uIiwiZXJyb3IiLCJkYXRhIiwidGVsZXBvcnRfY2l0eV9zY29yZSIsImNhdGVnb3JpZXMiLCJjcmVhdGVCYXJHcmFwaCIsImNyZWF0ZVRhYmxlIiwiY3JlYXRlVGl0bGUiLCJjcmVhdGVTdW1tYXJ5IiwicmVuZGVyYWxsIiwiZm9yRWFjaCIsImNpdHkiLCJjaXR5TmFtZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNlY3Rpb25FbGUiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImNpdHlTdW1tYXJ5RWxlIiwicmVwbGFjZSIsImluc2VydEFkamFjZW50RWxlbWVudCIsIndpZHRoIiwiaGVpZ2h0IiwiYXJyYXlMZW5ndGgiLCJsZW5ndGgiLCJtYXhWYWx1ZSIsIm1heCIsImQiLCJzY29yZV9vdXRfb2ZfMTAiLCJ4X2F4aXNMZW5ndGgiLCJ5X2F4aXNMZW5ndGgiLCJ4U2NhbGUiLCJzY2FsZUxpbmVhciIsImRvbWFpbiIsInJhbmdlIiwic3ZnIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsInNlbGVjdEFsbCIsImVudGVyIiwiaSIsImNvbG9yIiwib24iLCJuZXdTdHIiLCJuZXdTdHIyIiwibGlnaHR1cENhdGVnb3JpZXMiLCJ0b29sdGlwIiwic3R5bGUiLCJ0ZXh0IiwiZXZlbnQiLCJwYWdlWSIsInBhZ2VYIiwidG9GaXhlZCIsInN0b3BIaWdobGlnaHRpbmciLCJjb2x1bW5zIiwiY29sdW1uTmFtZXMiLCJ0YWJsZSIsImhlYWRlciIsInRhYmxlYm9keSIsInJvd3MiLCJjZWxscyIsInJvdyIsIm1hcCIsImNvbHVtbiIsInZhbHVlIiwidGl0bGVEcm9wRG93biIsIm1lbnVMaXN0IiwiY2l0eUxpc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwidG9nZ2xlRHJvcGRvd24iLCJlbGUiLCJkcm9wZG93bkJ1dHRvbkVsZSIsImluY2x1ZGVzIiwic3BsaXQiLCJib3JkZXJSYWRpdXMiLCJzaG93Q2hhcnRzIiwiY2l0eU5hbWVSZW1vdmVkU3BhY2UiLCJjaXR5Q2hhcnQiLCJhbGxDaXR5Q2hhcnRzIiwiYmFzZVZhbCIsInNob3dUYWJsZXMiLCJjaXR5VGFibGUiLCJhbGxDaXR5VGFibGVzIiwic2hvd1RpdGxlIiwiY2l0eVRpdGxlIiwiYWxsQ2l0eVRpdGxlIiwic2hvd1N1bW1hcnkiLCJjaXR5U3VtbWFyeSIsImFsbENpdHlTdW1tYXJ5IiwiaWQiLCJjaXR5Q2F0ZWdvcnkiLCJhbGxDaXR5Q2F0ZWdvcmllcyIsImNpdHlDYXQiLCJzZWxlY3RJdGVtIiwiZWxlVGV4dCIsInRpdGxlRWxlIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBC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LENBQWlCLFVBQUFDLElBQUksRUFBSTtBQUNyQkEsTUFBSSxDQUFDd0YsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0I7QUFBQSxXQUFNSCxVQUFVLENBQUNyRixJQUFELENBQWhCO0FBQUEsR0FBL0I7QUFDSCxDQUZEO0FBTUFGLFNBQVMsRzs7Ozs7Ozs7Ozs7QUN4YVQsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcblxuXG5cbmxldCBjaXR5RGF0YSA9IFtdXG5sZXQgbmFtZSwgc3VtbWFyeSwgY2l0eVNjb3JlO1xuXG5sZXQgY2l0eVNlbGVjdGlvbiA9IFwiL3NyYy9kYXRhL25ld3lvcmsuanNvblwiXG5cbmNvbnN0IGNpdGllcyA9IFtcbiAgICBcIi9zcmMvZGF0YS9uZXd5b3JrLmpzb25cIiwgXCIvc3JjL2RhdGEvc2FuZnJhbi5qc29uXCIsIFwiL3NyYy9kYXRhL3NlYXR0bGUuanNvblwiLCBcbiAgICBcIi9zcmMvZGF0YS90b3JvbnRvLmpzb25cIiwgXCIvc3JjL2RhdGEvYm9zdG9uLmpzb25cIiwgXCIvc3JjL2RhdGEvY2hpY2Fnby5qc29uXCIsIFxuICAgIFwiL3NyYy9kYXRhL2xvc2FuZ2VsZXMuanNvblwiLCBcIi9zcmMvZGF0YS9kYWxsYXMuanNvblwiLCBcIi9zcmMvZGF0YS9waG9lbml4Lmpzb25cIiwgXG4gICAgXCIvc3JjL2RhdGEvcmFsZWlnaC5qc29uXCJcbiAgICBdIFxuXG5sZXQgYW5pbWF0aW9uRGVsYXkgPSBbXG4gICAgXCIxMFwiLFwiMjBcIixcIjMwXCIsXCI0MFwiLFwiNTBcIixcIjYwXCIsXCI3MFwiLFwiODBcIixcIjkwXCIsXG4gICAgXCIxMDBcIixcIjExMFwiLFwiMTIwXCIsXCIxMzBcIixcIjE0MFwiLFwiMTUwXCIsXCIxNjBcIlxuXVxuXG5cblxuZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGQzLmpzb24oY2l0eVNlbGVjdGlvbiwgZnVuY3Rpb24gKGVycm9yLCBkYXRhKSB7XG5cbiAgICAgICAgbmFtZSA9IGRhdGEubmFtZVxuICAgICAgICBzdW1tYXJ5ID0gZGF0YS5zdW1tYXJ5XG4gICAgICAgIGNpdHlTY29yZSA9IGRhdGEudGVsZXBvcnRfY2l0eV9zY29yZVxuICAgICAgICBjaXR5RGF0YSA9IGRhdGEuY2F0ZWdvcmllc1xuICAgICAgICBjcmVhdGVCYXJHcmFwaCgpO1xuICAgICAgICBjcmVhdGVUYWJsZSgpO1xuICAgICAgICBjcmVhdGVUaXRsZSgpO1xuICAgICAgICBjcmVhdGVTdW1tYXJ5KCk7XG4gICAgfSlcblxufVxuXG5mdW5jdGlvbiByZW5kZXJhbGwoKSB7XG4gICAgY2l0aWVzLmZvckVhY2goY2l0eSA9PiB7XG4gICAgICAgIGNpdHlTZWxlY3Rpb24gPSBjaXR5IFxuICAgICAgICByZW5kZXIoKVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUaXRsZSAoKSB7XG4gICAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbiAgICBjb25zdCBzZWN0aW9uRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlY3Rpb25cIilcbiAgICAvLyBjb25zdCBkcm9wRG93bkVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tbWVudVwiKVxuXG4gICAgY2l0eU5hbWUudGV4dENvbnRlbnQgPSBuYW1lXG5cbiAgICBpZiAobmFtZSA9PT0gXCJOZXcgWW9ya1wiKXtcbiAgICAgICAgY2l0eU5hbWUuY2xhc3NOYW1lID0gYGNpdHl0aXRsZSB0aXRsZS0ke25hbWV9YFxuICAgIH1lbHNlIHtcbiAgICAgICAgY2l0eU5hbWUuY2xhc3NOYW1lID0gYGNpdHl0aXRsZSB0aXRsZS0ke25hbWV9IGhpZGRlbmBcbiAgICB9XG4gICAgLy8gc2VjdGlvbkVsZS5pbnNlcnRCZWZvcmUoY2l0eU5hbWUsIGRyb3BEb3duRWxlKVxuICAgIHNlY3Rpb25FbGUuYXBwZW5kQ2hpbGQoY2l0eU5hbWUpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN1bW1hcnkoKSB7XG4gICAgY29uc3QgY2l0eVN1bW1hcnlFbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIGNvbnN0IHNlY3Rpb25FbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VjdGlvblwiKVxuICAgIFxuICAgIGNpdHlTdW1tYXJ5RWxlLnRleHRDb250ZW50ID0gc3VtbWFyeS5yZXBsYWNlKC9bPF0uezEsMn1bPl0vZywgXCJcIilcblxuICAgIGlmIChuYW1lID09PSBcIk5ldyBZb3JrXCIpIHtcbiAgICAgICAgY2l0eVN1bW1hcnlFbGUuY2xhc3NOYW1lID0gYGNpdHlTdW1tYXJ5IHN1bW1hcnktJHtuYW1lfWBcbiAgICB9IGVsc2Uge1xuICAgICAgICBjaXR5U3VtbWFyeUVsZS5jbGFzc05hbWUgPSBgY2l0eVN1bW1hcnkgc3VtbWFyeS0ke25hbWV9IGhpZGRlbmBcbiAgICB9XG5cbiAgICBzZWN0aW9uRWxlLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyZW5kXCIsIGNpdHlTdW1tYXJ5RWxlKVxufVxuXG5cblxuXG5cblxuZnVuY3Rpb24gY3JlYXRlQmFyR3JhcGgoKSB7XG5cbiAgICB2YXIgd2lkdGggPSA1MDA7XG4gICAgdmFyIGhlaWdodCA9IDUzMDtcblxuICAgIC8vIEdldCBsZW5ndGggb2YgZGF0YXNldFxuICAgIHZhciBhcnJheUxlbmd0aCA9IGNpdHlEYXRhLmxlbmd0aDsgLy8gbGVuZ3RoIG9mIGRhdGFzZXRcbiAgICB2YXIgbWF4VmFsdWUgPSBkMy5tYXgoY2l0eURhdGEsIGZ1bmN0aW9uIChkKSB7IHJldHVybiArZC5zY29yZV9vdXRfb2ZfMTA7IH0pOyAvLyBnZXQgbWF4aW11bVxuICAgIHZhciB4X2F4aXNMZW5ndGggPSA1MDA7IC8vIGxlbmd0aCBvZiB4LWF4aXMgaW4gb3VyIGxheW91dFxuICAgIHZhciB5X2F4aXNMZW5ndGggPSA1MDA7IC8vIGxlbmd0aCBvZiB5LWF4aXMgaW4gb3VyIGxheW91dFxuXG5cbiAgICB2YXIgeFNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAuZG9tYWluKFswLCBtYXhWYWx1ZV0pXG4gICAgICAgIC5yYW5nZShbMCwgeF9heGlzTGVuZ3RoXSk7XG5cbiAgICB2YXIgc3ZnID0gZDMuc2VsZWN0KFwiLmNoYXJ0XCIpXG4gICAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aClcbiAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0KTtcbiAgICBcbiAgICBpZiAobmFtZSA9PT0gXCJOZXcgWW9ya1wiKXtcbiAgICAgICAgc3ZnLmF0dHIoXCJjbGFzc1wiLCBgY2l0eWNoYXJ0ICR7bmFtZX1gKVxuXG4gICAgfWVsc2Uge1xuICAgICAgICBzdmcuYXR0cihcImNsYXNzXCIsYGNpdHljaGFydCAke25hbWV9IGhpZGRlbmApXG4gICAgfVxuXG5cbiAgICBzdmcuc2VsZWN0QWxsKFwicmVjdFwiKVxuICAgICAgICAuZGF0YShjaXR5RGF0YSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZChcInJlY3RcIilcbiAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gaSAqICh5X2F4aXNMZW5ndGggLyBhcnJheUxlbmd0aCkgKyAzMDsgXG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKFwieFwiLCAwKVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCAoeV9heGlzTGVuZ3RoIC8gYXJyYXlMZW5ndGgpIC0gMSlcbiAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIHhTY2FsZShkLnNjb3JlX291dF9vZl8xMCk7IFxuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBkLmNvbG9yXG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgcmV0dXJuIGBiYXIgJHtkLm5hbWV9YDtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0ciA9IGQubmFtZS5yZXBsYWNlKC9cXHMvZywgXCJcIilcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0cjIgPSBuZXdTdHIucmVwbGFjZSgvWyZdL2csIFwiXCIpXG4gICAgICAgICAgICBsaWdodHVwQ2F0ZWdvcmllcyhuZXdTdHIyKVxuICAgICAgICAgICAgcmV0dXJuIHRvb2x0aXAuc3R5bGUoXCJ2aXNpYmlsaXR5XCIsIFwidmlzaWJsZVwiKS50ZXh0KGQubmFtZSArIFwiOiBcIiArIGQuc2NvcmVfb3V0X29mXzEwKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwibW91c2Vtb3ZlXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9vbHRpcC5zdHlsZShcInRvcFwiLCAoZDMuZXZlbnQucGFnZVktMTApK1wicHhcIilcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJsZWZ0XCIsKGQzLmV2ZW50LnBhZ2VYKzEwKStcInB4XCIpLnRleHQoZC5uYW1lICsgXCI6IFwiICsgZC5zY29yZV9vdXRfb2ZfMTAudG9GaXhlZCgyKSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgIHN0b3BIaWdobGlnaHRpbmcoKVxuICAgICAgICAgICAgcmV0dXJuIHRvb2x0aXAuc3R5bGUoXCJ2aXNpYmlsaXR5XCIsIFwiaGlkZGVuXCIpXG4gICAgICAgIH0pXG5cblxuICAgIC8vIENyZWF0ZSB5LWF4aXNcbiAgICBzdmcuYXBwZW5kKFwibGluZVwiKVxuICAgICAgICAuYXR0cihcIngxXCIsIDcwMClcbiAgICAgICAgLmF0dHIoXCJ5MVwiLCAzMClcbiAgICAgICAgLmF0dHIoXCJ4MlwiLCA3MDApXG4gICAgICAgIC5hdHRyKFwieTJcIiwgNTI5KVxuICAgICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAyKVxuICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBcImJsYWNrXCIpO1xuXG4gICAgLy8gQ3JlYXRlIHgtYXhpc1xuICAgIHN2Zy5hcHBlbmQoXCJsaW5lXCIpXG4gICAgICAgIC5hdHRyKFwieDFcIiwgMzApXG4gICAgICAgIC5hdHRyKFwieTFcIiwgNzUwKVxuICAgICAgICAuYXR0cihcIngyXCIsIDUwMClcbiAgICAgICAgLmF0dHIoXCJ5MlwiLCA3NTApXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDIpXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiYmxhY2tcIik7XG5cblxuXG4gICAgdmFyIHRvb2x0aXAgPSBkMy5zZWxlY3QoXCIuY2hhcnRcIilcbiAgICAgICAgLmFwcGVuZChcImRpdlwiKVxuICAgICAgICAuc3R5bGUoXCJwb3NpdGlvblwiLCBcImFic29sdXRlXCIpXG4gICAgICAgIC5zdHlsZShcImZvbnQtZmFtaWx5XCIsIFwicm9ib3RvXCIpXG4gICAgICAgIC5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjE0cHhcIilcbiAgICAgICAgLnN0eWxlKFwiei1pbmRleFwiLCBcIjNcIilcbiAgICAgICAgLnN0eWxlKFwidmlzaWJpbGl0eVwiLCBcImhpZGRlblwiKVxuICAgICAgICAuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwid2hpdGVcIilcbiAgICAgICAgLnN0eWxlKFwid2lkdGhcIiwgXCJhdXRvXCIpXG4gICAgICAgIC5zdHlsZShcIm1hcmdpblwiLCBcIjAgYXV0b1wiKVxuICAgICAgICAuc3R5bGUoXCJib3JkZXItcmFkaXVzXCIsIFwiMTBweFwiKVxuICAgICAgICAuc3R5bGUoXCJwYWRkaW5nXCIsIFwiMTBweFwiKVxuICAgICAgICAuc3R5bGUoXCJib3JkZXJcIiwgXCIycHggc29saWQgYmxhY2tcIilcbn07XG5cblxuZnVuY3Rpb24gY3JlYXRlVGFibGUgKCkge1xuXG4gICAgY29uc3QgY29sdW1ucyA9IFtcIm5hbWVcIiwgXCJzY29yZV9vdXRfb2ZfMTBcIl1cbiAgICBjb25zdCBjb2x1bW5OYW1lcyA9IFtcIkNhdGVnb3JpZXNcIiwgXCJTY29yZVwiXVxuICAgIFxuICAgIGxldCB0YWJsZSA9IGQzLnNlbGVjdCgnLnByb2ZpbGUnKVxuICAgICAgICAuYXBwZW5kKCd0YWJsZScpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgYHRhYmxlIHRhYmxlLSR7bmFtZX0gaGlkZGVuYClcbiAgICAgICAgLnN0eWxlKFwiYm9yZGVyLXJhZGl1c1wiLCBcIjEwcHhcIilcbiAgICAgICAgLnN0eWxlKFwiYm9yZGVyXCIsIFwiMnB4IHNvbGlkIGJsYWNrXCIpO1xuICAgIGxldCBoZWFkZXIgPSB0YWJsZVxuICAgICAgICAuYXBwZW5kKFwiaGVhZGVyXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0YWJsZS1oZWFkZXJcIik7XG4gICAgbGV0IHRhYmxlYm9keSA9IHRhYmxlLmFwcGVuZChcInRhYmxlYm9keVwiKTtcblxuICAgIGlmIChuYW1lID09PSBcIk5ldyBZb3JrXCIpIHtcbiAgICAgICAgdGFibGUuYXR0cihcImNsYXNzXCIsIGB0YWJsZSB0YWJsZS0ke25hbWV9YClcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRhYmxlLmF0dHIoXCJjbGFzc1wiLCBgdGFibGUgdGFibGUtJHtuYW1lfSBoaWRkZW5gKVxuICAgIH1cblxuICAgIGhlYWRlclxuICAgICAgICAuYXBwZW5kKFwidHJcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImhlYWRlci13cmFwcGVyXCIpXG4gICAgICAgIC5zdHlsZShcImNvbG9yXCIsIFwiYmx1ZVwiKVxuICAgICAgICAuc2VsZWN0QWxsKFwidGhcIilcbiAgICAgICAgLmRhdGEoY29sdW1uTmFtZXMpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJ0aFwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gZDtcbiAgICAgICAgfSlcbiAgICAgICAgLnN0eWxlKFwidGV4dC1hbGlnblwiLCBcImNlbnRlclwiKVxuICAgICAgICAudGV4dChmdW5jdGlvbihkKXtcbiAgICAgICAgICAgIHJldHVybiBkO1xuICAgICAgICB9KVxuICAgICAgXG4gICAgICAgIFxuXG4gICAgbGV0IHJvd3MgPSB0YWJsZWJvZHlcbiAgICAgICAgLnNlbGVjdEFsbChcInRyXCIpXG4gICAgICAgIC5kYXRhKGNpdHlEYXRhKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwidHJcIik7XG4gICAgXG5cbiAgICBsZXQgY2VsbHMgPSByb3dzLnNlbGVjdEFsbChcInRkXCIpXG4gICAgICAgIC5kYXRhKGZ1bmN0aW9uKHJvdykge1xuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbnMubWFwKGZ1bmN0aW9uKGNvbHVtbikge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbjogY29sdW1uLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcm93W2NvbHVtbl1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwidGRcIilcbiAgICAgICAgLnRleHQoZnVuY3Rpb24oZCl7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGQudmFsdWUgPT09IFwibnVtYmVyXCIpe1xuICAgICAgICAgICAgICAgIGlmIChkLnZhbHVlLnRvRml4ZWQoMikgPT09IDEwKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiMTAuMCAvMTBcIiBcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgJHtkLnZhbHVlLnRvRml4ZWQoMil9IC8xMGBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGQudmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkLnZhbHVlID09PSBcInN0cmluZ1wiKXtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTdHIgPSBkLnZhbHVlLnJlcGxhY2UoL1xccy9nLCBcIlwiKVxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1N0cjIgPSBuZXdTdHIucmVwbGFjZSgvWyZdL2csIFwiXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGBjYXRlZ29yeSAke25ld1N0cjJ9IG5vbmhpZ2hsaWdodGVkYFxuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBgY2F0ZWdvcnkgJHtkLnZhbHVlfSBub25oaWdobGlnaHRlZGBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoXCJpZFwiICwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZC52YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1N0ciA9IGQudmFsdWUucmVwbGFjZSgvXFxzL2csIFwiXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1N0clxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZC52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxufVxuXG5cbmNvbnN0IHRpdGxlRHJvcERvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlXCIpXG5jb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1saXN0XCIpXG5jb25zdCBjaXR5TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2l0eVwiKVxuXG5mdW5jdGlvbiB0b2dnbGVEcm9wZG93bihlbGUpIHtcbiAgICBjb25zdCBkcm9wZG93bkJ1dHRvbkVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tbWVudVwiKVxuICAgIGlmIChlbGUuY2xhc3NOYW1lLmluY2x1ZGVzKFwiaW5hY3RpdmVcIikpIHtcbiAgICAgICAgZWxlLmNsYXNzTmFtZSA9IGVsZS5jbGFzc05hbWUuc3BsaXQoXCIgXCIpWzBdXG4gICAgICAgIGVsZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjAgMCAxMHB4IDEwcHhcIlxuICAgICAgICBkcm9wZG93bkJ1dHRvbkVsZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEwcHggMTBweCAwIDBcIlxuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWxlLmNsYXNzTmFtZSA9IGVsZS5jbGFzc05hbWUgKyBcIiBpbmFjdGl2ZVwiXG4gICAgICAgIGVsZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEwcHhcIlxuICAgICAgICBkcm9wZG93bkJ1dHRvbkVsZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEwcHhcIlxuICAgIH1cbn1cblxuZnVuY3Rpb24gc2hvd0NoYXJ0cyhjaXR5TmFtZSkge1xuICAgIGNvbnN0IGNpdHlOYW1lUmVtb3ZlZFNwYWNlID0gY2l0eU5hbWUuc3BsaXQoXCIgXCIpWzFdXG4gICAgY29uc3QgY2l0eUNoYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2l0eU5hbWVSZW1vdmVkU3BhY2V9YClcbiBcblxuICAgIGNvbnN0IGFsbENpdHlDaGFydHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNpdHljaGFydFwiKVxuICAgIGFsbENpdHlDaGFydHMuZm9yRWFjaChjaXR5Q2hhcnQgPT4ge1xuICAgICAgICBpZiAoIWNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbC5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICAgICAgY2l0eUNoYXJ0LmNsYXNzTmFtZS5iYXNlVmFsID0gY2l0eUNoYXJ0LmNsYXNzTmFtZS5iYXNlVmFsICsgXCIgaGlkZGVuXCJcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoY2l0eUNoYXJ0LmNsYXNzTmFtZS5iYXNlVmFsLmluY2x1ZGVzKFwiaGlkZGVuXCIpKXtcbiAgICAgICAgY2l0eUNoYXJ0LmNsYXNzTmFtZS5iYXNlVmFsID0gYGNpdHljaGFydCAke2NpdHlOYW1lfWBcbiAgICB9ZWxzZSB7XG5cbiAgICAgICAgY2l0eUNoYXJ0LmNsYXNzTmFtZS5iYXNlVmFsID0gY2l0eUNoYXJ0LmNsYXNzTmFtZS5iYXNlVmFsICsgXCIgaGlkZGVuXCJcblxuICAgIH1cbn1cblxuZnVuY3Rpb24gc2hvd1RhYmxlcyhjaXR5TmFtZSkge1xuICAgIGNvbnN0IGNpdHlOYW1lUmVtb3ZlZFNwYWNlID0gY2l0eU5hbWUuc3BsaXQoXCIgXCIpWzFdXG4gICAgY29uc3QgY2l0eVRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRhYmxlLSR7Y2l0eU5hbWVSZW1vdmVkU3BhY2V9YClcblxuICAgIGNvbnN0IGFsbENpdHlUYWJsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYmxlXCIpXG4gICAgYWxsQ2l0eVRhYmxlcy5mb3JFYWNoKGNpdHlUYWJsZSA9PiB7XG4gICAgICAgIGlmICghY2l0eVRhYmxlLmNsYXNzTmFtZS5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICAgICAgY2l0eVRhYmxlLmNsYXNzTmFtZSA9IGNpdHlUYWJsZS5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxuICAgIFxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGlmIChjaXR5VGFibGUuY2xhc3NOYW1lLmluY2x1ZGVzKFwiaGlkZGVuXCIpKSB7XG4gICAgICAgIGNpdHlUYWJsZS5jbGFzc05hbWUgPSBgdGFibGUgdGFibGUtJHtjaXR5TmFtZVJlbW92ZWRTcGFjZX1gXG4gICAgfSBlbHNlIHtcblxuICAgICAgICBjaXR5VGFibGUuY2xhc3NOYW1lID0gY2l0eVRhYmxlLmNsYXNzTmFtZSArIFwiIGhpZGRlblwiXG5cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNob3dUaXRsZShjaXR5TmFtZSkge1xuICAgIGNvbnN0IGNpdHlOYW1lUmVtb3ZlZFNwYWNlID0gY2l0eU5hbWUuc3BsaXQoXCIgXCIpWzFdXG4gICAgY29uc3QgY2l0eVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRpdGxlLSR7Y2l0eU5hbWVSZW1vdmVkU3BhY2V9YClcblxuICAgIGNvbnN0IGFsbENpdHlUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2l0eXRpdGxlXCIpXG4gICAgYWxsQ2l0eVRpdGxlLmZvckVhY2goY2l0eVRpdGxlID0+IHtcbiAgICAgICAgaWYgKCFjaXR5VGl0bGUuY2xhc3NOYW1lLmluY2x1ZGVzKFwiaGlkZGVuXCIpKSB7XG4gICAgICAgICAgICBjaXR5VGl0bGUuY2xhc3NOYW1lID0gY2l0eVRpdGxlLmNsYXNzTmFtZSArIFwiIGhpZGRlblwiXG5cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoY2l0eVRpdGxlLmNsYXNzTmFtZS5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICBjaXR5VGl0bGUuY2xhc3NOYW1lID0gYGNpdHl0aXRsZSB0aXRsZS0ke2NpdHlOYW1lUmVtb3ZlZFNwYWNlfWBcbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIGNpdHlUaXRsZS5jbGFzc05hbWUgPSBjaXR5VGl0bGUuY2xhc3NOYW1lICsgXCIgaGlkZGVuXCJcblxuICAgIH1cbn1cblxuZnVuY3Rpb24gc2hvd1N1bW1hcnkoY2l0eU5hbWUpIHtcbiAgICBjb25zdCBjaXR5TmFtZVJlbW92ZWRTcGFjZSA9IGNpdHlOYW1lLnNwbGl0KFwiIFwiKVsxXVxuICAgIGNvbnN0IGNpdHlTdW1tYXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnN1bW1hcnktJHtjaXR5TmFtZVJlbW92ZWRTcGFjZX1gKVxuXG4gICAgY29uc3QgYWxsQ2l0eVN1bW1hcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNpdHlTdW1tYXJ5XCIpXG4gICAgYWxsQ2l0eVN1bW1hcnkuZm9yRWFjaChjaXR5U3VtbWFyeSA9PiB7XG4gICAgICAgIGlmICghY2l0eVN1bW1hcnkuY2xhc3NOYW1lLmluY2x1ZGVzKFwiaGlkZGVuXCIpKSB7XG4gICAgICAgICAgICBjaXR5U3VtbWFyeS5jbGFzc05hbWUgPSBjaXR5U3VtbWFyeS5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxuXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNpdHlTdW1tYXJ5LmNsYXNzTmFtZS5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICBjaXR5U3VtbWFyeS5jbGFzc05hbWUgPSBgY2l0eVN1bW1hcnkgc3VtbWFyeS0ke2NpdHlOYW1lUmVtb3ZlZFNwYWNlfWBcbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIGNpdHlTdW1tYXJ5LmNsYXNzTmFtZSA9IGNpdHlTdW1tYXJ5LmNsYXNzTmFtZSArIFwiIGhpZGRlblwiXG5cbiAgICB9XG59XG5cbi8vIGFkZCBldmVudCBsaXN0ZW5lciBvbiB0aGUgYmFycyB0byBcblxuZnVuY3Rpb24gbGlnaHR1cENhdGVnb3JpZXMoaWQpIHtcbiAgICBjb25zdCBjaXR5Q2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHtpZH1gKVxuICAgIGNvbnN0IGFsbENpdHlDYXRlZ29yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXRlZ29yeVwiKVxuICAgIGFsbENpdHlDYXRlZ29yaWVzLmZvckVhY2goY2l0eUNhdCA9PiB7XG4gICAgICAgIGlmICghY2l0eUNhdC5jbGFzc05hbWUuaW5jbHVkZXMoXCJub25oaWdobGlnaHRlZFwiKSkge1xuICAgICAgICAgICAgY2l0eUNhdC5jbGFzc05hbWUgPSBjaXR5Q2F0LmNsYXNzTmFtZSArIFwiIG5vbmhpZ2hsaWdodGVkXCJcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjaXR5Q2F0ZWdvcnkuZm9yRWFjaChjaXR5Q2F0ID0+IHtcbiAgICAgICAgaWYgKGNpdHlDYXQuY2xhc3NOYW1lLmluY2x1ZGVzKGBjYXRlZ29yeSAke2lkfSBub25oaWdobGlnaHRlZGApKSB7XG4gICAgICAgICAgICBjaXR5Q2F0LmNsYXNzTmFtZSA9IGBjYXRlZ29yeSAke2lkfWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNpdHlDYXQuY2xhc3NOYW1lID0gY2l0eUNhdC5jbGFzc05hbWUgKyBcIiBub25oaWdobGlnaHRlZFwiXG4gICAgICAgIH1cbiAgICB9KVxuXG59XG5cbmZ1bmN0aW9uIHN0b3BIaWdobGlnaHRpbmcoKSB7XG4gICAgY29uc3QgYWxsQ2l0eUNhdGVnb3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhdGVnb3J5XCIpXG4gICAgYWxsQ2l0eUNhdGVnb3JpZXMuZm9yRWFjaChjaXR5Q2F0ID0+IHtcbiAgICAgICAgaWYgKCFjaXR5Q2F0LmNsYXNzTmFtZS5pbmNsdWRlcyhcIm5vbmhpZ2hsaWdodGVkXCIpKSB7XG4gICAgICAgICAgICBjaXR5Q2F0LmNsYXNzTmFtZSA9IGNpdHlDYXQuY2xhc3NOYW1lICsgXCIgbm9uaGlnaGxpZ2h0ZWRcIlxuICAgICAgICB9XG4gICAgfSlcbn1cblxuXG5cbmZ1bmN0aW9uIHNlbGVjdEl0ZW0oZWxlKSB7XG4gICAgY29uc3QgZWxlVGV4dCA9IGVsZS50ZXh0Q29udGVudFxuICAgIGNvbnN0IHRpdGxlRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKVxuICAgIHRpdGxlRWxlLnRleHRDb250ZW50ID0gZWxlVGV4dDtcbiAgICB0b2dnbGVEcm9wZG93bihtZW51TGlzdCk7XG5cbiAgICBzaG93Q2hhcnRzKGVsZVRleHQpXG4gICAgc2hvd1RhYmxlcyhlbGVUZXh0KVxuICAgIHNob3dUaXRsZShlbGVUZXh0KVxuICAgIHNob3dTdW1tYXJ5KGVsZVRleHQpXG59XG5cbnRpdGxlRHJvcERvd24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0b2dnbGVEcm9wZG93bihtZW51TGlzdCkpXG5cbmNpdHlMaXN0LmZvckVhY2goY2l0eSA9PiB7XG4gICAgY2l0eS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNlbGVjdEl0ZW0oY2l0eSkpXG59KVxuXG5cblxucmVuZGVyYWxsKClcblxuXG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=