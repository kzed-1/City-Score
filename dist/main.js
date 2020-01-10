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
      var newStr2 = newStr.replace(/[&]/g, "");
      return newStr2;
    } else {
      return d.value;
    }
  }); // .style("width", "177px")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz9kYzJhIl0sIm5hbWVzIjpbImNpdHlEYXRhIiwibmFtZSIsInN1bW1hcnkiLCJjaXR5U2NvcmUiLCJjaXR5U2VsZWN0aW9uIiwiY2l0aWVzIiwiYW5pbWF0aW9uRGVsYXkiLCJyZW5kZXIiLCJkMyIsImpzb24iLCJlcnJvciIsImRhdGEiLCJ0ZWxlcG9ydF9jaXR5X3Njb3JlIiwiY2F0ZWdvcmllcyIsImNyZWF0ZUJhckdyYXBoIiwiY3JlYXRlVGFibGUiLCJjcmVhdGVUaXRsZSIsImNyZWF0ZVN1bW1hcnkiLCJyZW5kZXJhbGwiLCJmb3JFYWNoIiwiY2l0eSIsImNpdHlOYW1lIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2VjdGlvbkVsZSIsInF1ZXJ5U2VsZWN0b3IiLCJsaW5rV3JhcHBlckVsZSIsInRleHRDb250ZW50IiwiY2xhc3NOYW1lIiwiaW5zZXJ0QmVmb3JlIiwiY2l0eVN1bW1hcnlFbGUiLCJyZXBsYWNlIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJhcnJheUxlbmd0aCIsImxlbmd0aCIsIm1heFZhbHVlIiwibWF4IiwiZCIsInNjb3JlX291dF9vZl8xMCIsInhfYXhpc0xlbmd0aCIsInlfYXhpc0xlbmd0aCIsInhTY2FsZSIsInNjYWxlTGluZWFyIiwiZG9tYWluIiwicmFuZ2UiLCJzdmciLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwic2VsZWN0QWxsIiwiZW50ZXIiLCJpIiwiY29sb3IiLCJvbiIsIm5ld1N0ciIsIm5ld1N0cjIiLCJsaWdodHVwQ2F0ZWdvcmllcyIsInRvb2x0aXAiLCJzdHlsZSIsInRleHQiLCJldmVudCIsInBhZ2VZIiwicGFnZVgiLCJ0b0ZpeGVkIiwic3RvcEhpZ2hsaWdodGluZyIsImNvbHVtbnMiLCJjb2x1bW5OYW1lcyIsInRhYmxlIiwiaGVhZGVyIiwidGFibGVib2R5Iiwicm93cyIsImNlbGxzIiwicm93IiwibWFwIiwiY29sdW1uIiwidmFsdWUiLCJ0aXRsZURyb3BEb3duIiwibWVudUxpc3QiLCJjaXR5TGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0b2dnbGVEcm9wZG93biIsImVsZSIsImRyb3Bkb3duQnV0dG9uRWxlIiwiaW5jbHVkZXMiLCJzcGxpdCIsImJvcmRlclJhZGl1cyIsInNob3dDaGFydHMiLCJjaXR5TmFtZVJlbW92ZWRTcGFjZSIsImNpdHlDaGFydCIsImFsbENpdHlDaGFydHMiLCJiYXNlVmFsIiwic2hvd1RhYmxlcyIsImNpdHlUYWJsZSIsImFsbENpdHlUYWJsZXMiLCJzaG93VGl0bGUiLCJjaXR5VGl0bGUiLCJhbGxDaXR5VGl0bGUiLCJzaG93U3VtbWFyeSIsImNpdHlTdW1tYXJ5IiwiYWxsQ2l0eVN1bW1hcnkiLCJpZCIsImNpdHlDYXRlZ29yeSIsImFsbENpdHlDYXRlZ29yaWVzIiwiY2l0eUNhdCIsInNlbGVjdEl0ZW0iLCJlbGVUZXh0IiwidGl0bGVFbGUiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7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UyxDQUFDVyxPQUFELENBQVQ7QUFDQVIsYUFBVyxDQUFDUSxPQUFELENBQVg7QUFDSDs7QUFFRDdCLGFBQWEsQ0FBQytCLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDO0FBQUEsU0FBTTNCLGNBQWMsQ0FBQ0gsUUFBRCxDQUFwQjtBQUFBLENBQXhDO0FBRUFDLFFBQVEsQ0FBQzdELE9BQVQsQ0FBaUIsVUFBQUMsSUFBSSxFQUFJO0FBQ3JCQSxNQUFJLENBQUN5RixnQkFBTCxDQUFzQixPQUF0QixFQUErQjtBQUFBLFdBQU1ILFVBQVUsQ0FBQ3RGLElBQUQsQ0FBaEI7QUFBQSxHQUEvQjtBQUNILENBRkQ7QUFNQUYsU0FBUyxHOzs7Ozs7Ozs7OztBQzFhVCx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuXG5cblxubGV0IGNpdHlEYXRhID0gW11cbmxldCBuYW1lLCBzdW1tYXJ5LCBjaXR5U2NvcmU7XG5cbmxldCBjaXR5U2VsZWN0aW9uID0gXCIvc3JjL2RhdGEvbmV3eW9yay5qc29uXCJcblxuY29uc3QgY2l0aWVzID0gW1xuICAgIFwiL3NyYy9kYXRhL25ld3lvcmsuanNvblwiLCBcIi9zcmMvZGF0YS9zYW5mcmFuLmpzb25cIiwgXCIvc3JjL2RhdGEvc2VhdHRsZS5qc29uXCIsIFxuICAgIFwiL3NyYy9kYXRhL3Rvcm9udG8uanNvblwiLCBcIi9zcmMvZGF0YS9ib3N0b24uanNvblwiLCBcIi9zcmMvZGF0YS9jaGljYWdvLmpzb25cIiwgXG4gICAgXCIvc3JjL2RhdGEvbG9zYW5nZWxlcy5qc29uXCIsIFwiL3NyYy9kYXRhL2RhbGxhcy5qc29uXCIsIFwiL3NyYy9kYXRhL3Bob2VuaXguanNvblwiLCBcbiAgICBcIi9zcmMvZGF0YS9yYWxlaWdoLmpzb25cIlxuICAgIF0gXG5cbmxldCBhbmltYXRpb25EZWxheSA9IFtcbiAgICBcIjEwXCIsXCIyMFwiLFwiMzBcIixcIjQwXCIsXCI1MFwiLFwiNjBcIixcIjcwXCIsXCI4MFwiLFwiOTBcIixcbiAgICBcIjEwMFwiLFwiMTEwXCIsXCIxMjBcIixcIjEzMFwiLFwiMTQwXCIsXCIxNTBcIixcIjE2MFwiXG5dXG5cblxuXG5mdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgZDMuanNvbihjaXR5U2VsZWN0aW9uLCBmdW5jdGlvbiAoZXJyb3IsIGRhdGEpIHtcblxuICAgICAgICBuYW1lID0gZGF0YS5uYW1lXG4gICAgICAgIHN1bW1hcnkgPSBkYXRhLnN1bW1hcnlcbiAgICAgICAgY2l0eVNjb3JlID0gZGF0YS50ZWxlcG9ydF9jaXR5X3Njb3JlXG4gICAgICAgIGNpdHlEYXRhID0gZGF0YS5jYXRlZ29yaWVzXG4gICAgICAgIGNyZWF0ZUJhckdyYXBoKCk7XG4gICAgICAgIGNyZWF0ZVRhYmxlKCk7XG4gICAgICAgIGNyZWF0ZVRpdGxlKCk7XG4gICAgICAgIGNyZWF0ZVN1bW1hcnkoKTtcbiAgICB9KVxuXG59XG5cbmZ1bmN0aW9uIHJlbmRlcmFsbCgpIHtcbiAgICBjaXRpZXMuZm9yRWFjaChjaXR5ID0+IHtcbiAgICAgICAgY2l0eVNlbGVjdGlvbiA9IGNpdHkgXG4gICAgICAgIHJlbmRlcigpXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRpdGxlICgpIHtcbiAgICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICAgIGNvbnN0IHNlY3Rpb25FbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VjdGlvblwiKVxuICAgIGNvbnN0IGxpbmtXcmFwcGVyRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saW5rLXdyYXBwZXJzXCIpXG5cbiAgICBjaXR5TmFtZS50ZXh0Q29udGVudCA9IG5hbWVcblxuICAgIGlmIChuYW1lID09PSBcIk5ldyBZb3JrXCIpe1xuICAgICAgICBjaXR5TmFtZS5jbGFzc05hbWUgPSBgY2l0eXRpdGxlIHRpdGxlLSR7bmFtZX1gXG4gICAgfWVsc2Uge1xuICAgICAgICBjaXR5TmFtZS5jbGFzc05hbWUgPSBgY2l0eXRpdGxlIHRpdGxlLSR7bmFtZX0gaGlkZGVuYFxuICAgIH1cbiAgICBzZWN0aW9uRWxlLmluc2VydEJlZm9yZShjaXR5TmFtZSwgbGlua1dyYXBwZXJFbGUpXG4gICAgLy8gc2VjdGlvbkVsZS5hcHBlbmRDaGlsZChjaXR5TmFtZSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3VtbWFyeSgpIHtcbiAgICBjb25zdCBjaXR5U3VtbWFyeUVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgY29uc3Qgc2VjdGlvbkVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWN0aW9uXCIpXG4gICAgXG4gICAgY2l0eVN1bW1hcnlFbGUudGV4dENvbnRlbnQgPSBzdW1tYXJ5LnJlcGxhY2UoL1s8XS57MSwyfVs+XS9nLCBcIlwiKVxuXG4gICAgaWYgKG5hbWUgPT09IFwiTmV3IFlvcmtcIikge1xuICAgICAgICBjaXR5U3VtbWFyeUVsZS5jbGFzc05hbWUgPSBgY2l0eVN1bW1hcnkgc3VtbWFyeS0ke25hbWV9YFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNpdHlTdW1tYXJ5RWxlLmNsYXNzTmFtZSA9IGBjaXR5U3VtbWFyeSBzdW1tYXJ5LSR7bmFtZX0gaGlkZGVuYFxuICAgIH1cblxuICAgIHNlY3Rpb25FbGUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJlbmRcIiwgY2l0eVN1bW1hcnlFbGUpXG59XG5cblxuXG5cblxuXG5mdW5jdGlvbiBjcmVhdGVCYXJHcmFwaCgpIHtcblxuICAgIHZhciB3aWR0aCA9IDUwMDtcbiAgICB2YXIgaGVpZ2h0ID0gNTMwO1xuXG4gICAgLy8gR2V0IGxlbmd0aCBvZiBkYXRhc2V0XG4gICAgdmFyIGFycmF5TGVuZ3RoID0gY2l0eURhdGEubGVuZ3RoOyAvLyBsZW5ndGggb2YgZGF0YXNldFxuICAgIHZhciBtYXhWYWx1ZSA9IGQzLm1heChjaXR5RGF0YSwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuICtkLnNjb3JlX291dF9vZl8xMDsgfSk7IC8vIGdldCBtYXhpbXVtXG4gICAgdmFyIHhfYXhpc0xlbmd0aCA9IDUwMDsgLy8gbGVuZ3RoIG9mIHgtYXhpcyBpbiBvdXIgbGF5b3V0XG4gICAgdmFyIHlfYXhpc0xlbmd0aCA9IDUwMDsgLy8gbGVuZ3RoIG9mIHktYXhpcyBpbiBvdXIgbGF5b3V0XG5cblxuICAgIHZhciB4U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgIC5kb21haW4oWzAsIG1heFZhbHVlXSlcbiAgICAgICAgLnJhbmdlKFswLCB4X2F4aXNMZW5ndGhdKTtcblxuICAgIHZhciBzdmcgPSBkMy5zZWxlY3QoXCIuY2hhcnRcIilcbiAgICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoKVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQpO1xuICAgIFxuICAgIGlmIChuYW1lID09PSBcIk5ldyBZb3JrXCIpe1xuICAgICAgICBzdmcuYXR0cihcImNsYXNzXCIsIGBjaXR5Y2hhcnQgJHtuYW1lfWApXG5cbiAgICB9ZWxzZSB7XG4gICAgICAgIHN2Zy5hdHRyKFwiY2xhc3NcIixgY2l0eWNoYXJ0ICR7bmFtZX0gaGlkZGVuYClcbiAgICB9XG5cblxuICAgIHN2Zy5zZWxlY3RBbGwoXCJyZWN0XCIpXG4gICAgICAgIC5kYXRhKGNpdHlEYXRhKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiBpICogKHlfYXhpc0xlbmd0aCAvIGFycmF5TGVuZ3RoKSArIDMwOyBcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoXCJ4XCIsIDApXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsICh5X2F4aXNMZW5ndGggLyBhcnJheUxlbmd0aCkgLSAxKVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4geFNjYWxlKGQuc2NvcmVfb3V0X29mXzEwKTsgXG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKFwiZmlsbFwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIGQuY29sb3JcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICByZXR1cm4gYGJhciAke2QubmFtZX1gO1xuICAgICAgICB9KVxuICAgICAgICAub24oXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgY29uc3QgbmV3U3RyID0gZC5uYW1lLnJlcGxhY2UoL1xccy9nLCBcIlwiKVxuICAgICAgICAgICAgY29uc3QgbmV3U3RyMiA9IG5ld1N0ci5yZXBsYWNlKC9bJl0vZywgXCJcIilcbiAgICAgICAgICAgIGxpZ2h0dXBDYXRlZ29yaWVzKG5ld1N0cjIpXG4gICAgICAgICAgICByZXR1cm4gdG9vbHRpcC5zdHlsZShcInZpc2liaWxpdHlcIiwgXCJ2aXNpYmxlXCIpLnRleHQoZC5uYW1lICsgXCI6IFwiICsgZC5zY29yZV9vdXRfb2ZfMTApO1xuICAgICAgICB9KVxuICAgICAgICAub24oXCJtb3VzZW1vdmVcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiB0b29sdGlwLnN0eWxlKFwidG9wXCIsIChkMy5ldmVudC5wYWdlWS0xMCkrXCJweFwiKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcImxlZnRcIiwoZDMuZXZlbnQucGFnZVgrMTApK1wicHhcIikudGV4dChkLm5hbWUgKyBcIjogXCIgKyBkLnNjb3JlX291dF9vZl8xMC50b0ZpeGVkKDIpKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwibW91c2VvdXRcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgc3RvcEhpZ2hsaWdodGluZygpXG4gICAgICAgICAgICByZXR1cm4gdG9vbHRpcC5zdHlsZShcInZpc2liaWxpdHlcIiwgXCJoaWRkZW5cIilcbiAgICAgICAgfSlcblxuXG4gICAgLy8gQ3JlYXRlIHktYXhpc1xuICAgIHN2Zy5hcHBlbmQoXCJsaW5lXCIpXG4gICAgICAgIC5hdHRyKFwieDFcIiwgNzAwKVxuICAgICAgICAuYXR0cihcInkxXCIsIDMwKVxuICAgICAgICAuYXR0cihcIngyXCIsIDcwMClcbiAgICAgICAgLmF0dHIoXCJ5MlwiLCA1MjkpXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDIpXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiYmxhY2tcIik7XG5cbiAgICAvLyBDcmVhdGUgeC1heGlzXG4gICAgc3ZnLmFwcGVuZChcImxpbmVcIilcbiAgICAgICAgLmF0dHIoXCJ4MVwiLCAzMClcbiAgICAgICAgLmF0dHIoXCJ5MVwiLCA3NTApXG4gICAgICAgIC5hdHRyKFwieDJcIiwgNTAwKVxuICAgICAgICAuYXR0cihcInkyXCIsIDc1MClcbiAgICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMilcbiAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgXCJibGFja1wiKTtcblxuXG5cbiAgICB2YXIgdG9vbHRpcCA9IGQzLnNlbGVjdChcIi5jaGFydFwiKVxuICAgICAgICAuYXBwZW5kKFwiZGl2XCIpXG4gICAgICAgIC5zdHlsZShcInBvc2l0aW9uXCIsIFwiYWJzb2x1dGVcIilcbiAgICAgICAgLnN0eWxlKFwiZm9udC1mYW1pbHlcIiwgXCJyb2JvdG9cIilcbiAgICAgICAgLnN0eWxlKFwiZm9udC1zaXplXCIsIFwiMTRweFwiKVxuICAgICAgICAuc3R5bGUoXCJ6LWluZGV4XCIsIFwiM1wiKVxuICAgICAgICAuc3R5bGUoXCJ2aXNpYmlsaXR5XCIsIFwiaGlkZGVuXCIpXG4gICAgICAgIC5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIiwgXCJ3aGl0ZVwiKVxuICAgICAgICAuc3R5bGUoXCJ3aWR0aFwiLCBcImF1dG9cIilcbiAgICAgICAgLnN0eWxlKFwibWFyZ2luXCIsIFwiMCBhdXRvXCIpXG4gICAgICAgIC5zdHlsZShcImJvcmRlci1yYWRpdXNcIiwgXCIxMHB4XCIpXG4gICAgICAgIC5zdHlsZShcInBhZGRpbmdcIiwgXCIxMHB4XCIpXG4gICAgICAgIC5zdHlsZShcImJvcmRlclwiLCBcIjJweCBzb2xpZCBibGFja1wiKVxufTtcblxuXG5mdW5jdGlvbiBjcmVhdGVUYWJsZSAoKSB7XG5cbiAgICBjb25zdCBjb2x1bW5zID0gW1wibmFtZVwiLCBcInNjb3JlX291dF9vZl8xMFwiXVxuICAgIGNvbnN0IGNvbHVtbk5hbWVzID0gW1wiQ2F0ZWdvcmllc1wiLCBcIlNjb3JlXCJdXG4gICAgXG4gICAgbGV0IHRhYmxlID0gZDMuc2VsZWN0KCcucHJvZmlsZScpXG4gICAgICAgIC5hcHBlbmQoJ3RhYmxlJylcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBgdGFibGUgdGFibGUtJHtuYW1lfSBoaWRkZW5gKVxuICAgICAgICAuc3R5bGUoXCJib3JkZXItcmFkaXVzXCIsIFwiMTBweFwiKVxuICAgICAgICAuc3R5bGUoXCJib3JkZXJcIiwgXCIycHggc29saWQgYmxhY2tcIik7XG4gICAgbGV0IGhlYWRlciA9IHRhYmxlXG4gICAgICAgIC5hcHBlbmQoXCJoZWFkZXJcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInRhYmxlLWhlYWRlclwiKTtcbiAgICBsZXQgdGFibGVib2R5ID0gdGFibGUuYXBwZW5kKFwidGFibGVib2R5XCIpO1xuXG4gICAgaWYgKG5hbWUgPT09IFwiTmV3IFlvcmtcIikge1xuICAgICAgICB0YWJsZS5hdHRyKFwiY2xhc3NcIiwgYHRhYmxlIHRhYmxlLSR7bmFtZX1gKVxuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGFibGUuYXR0cihcImNsYXNzXCIsIGB0YWJsZSB0YWJsZS0ke25hbWV9IGhpZGRlbmApXG4gICAgfVxuXG4gICAgaGVhZGVyXG4gICAgICAgIC5hcHBlbmQoXCJ0clwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiaGVhZGVyLXdyYXBwZXJcIilcbiAgICAgICAgLnN0eWxlKFwiY29sb3JcIiwgXCJibHVlXCIpXG4gICAgICAgIC5zZWxlY3RBbGwoXCJ0aFwiKVxuICAgICAgICAuZGF0YShjb2x1bW5OYW1lcylcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZChcInRoXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBkO1xuICAgICAgICB9KVxuICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFsaWduXCIsIFwiY2VudGVyXCIpXG4gICAgICAgIC50ZXh0KGZ1bmN0aW9uKGQpe1xuICAgICAgICAgICAgcmV0dXJuIGQ7XG4gICAgICAgIH0pXG4gICAgICBcbiAgICAgICAgXG5cbiAgICBsZXQgcm93cyA9IHRhYmxlYm9keVxuICAgICAgICAuc2VsZWN0QWxsKFwidHJcIilcbiAgICAgICAgLmRhdGEoY2l0eURhdGEpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJ0clwiKTtcbiAgICBcblxuICAgIGxldCBjZWxscyA9IHJvd3Muc2VsZWN0QWxsKFwidGRcIilcbiAgICAgICAgLmRhdGEoZnVuY3Rpb24ocm93KSB7XG4gICAgICAgICAgICByZXR1cm4gY29sdW1ucy5tYXAoZnVuY3Rpb24oY29sdW1uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uOiBjb2x1bW4sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiByb3dbY29sdW1uXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJ0ZFwiKVxuICAgICAgICAudGV4dChmdW5jdGlvbihkKXtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZC52YWx1ZSA9PT0gXCJudW1iZXJcIil7XG4gICAgICAgICAgICAgICAgaWYgKGQudmFsdWUudG9GaXhlZCgyKSA9PT0gMTApe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIxMC4wIC8xMFwiIFxuICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAke2QudmFsdWUudG9GaXhlZCgyKX0gLzEwYFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZC52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGQudmFsdWUgPT09IFwic3RyaW5nXCIpe1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1N0ciA9IGQudmFsdWUucmVwbGFjZSgvXFxzL2csIFwiXCIpXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3RyMiA9IG5ld1N0ci5yZXBsYWNlKC9bJl0vZywgXCJcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gYGNhdGVnb3J5ICR7bmV3U3RyMn0gbm9uaGlnaGxpZ2h0ZWRgXG4gICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGBjYXRlZ29yeSAke2QudmFsdWV9IG5vbmhpZ2hsaWdodGVkYFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcImlkXCIgLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBkLnZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3RyID0gZC52YWx1ZS5yZXBsYWNlKC9cXHMvZywgXCJcIilcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTdHIyID0gbmV3U3RyLnJlcGxhY2UoL1smXS9nLCBcIlwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXdTdHIyXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBkLnZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC8vIC5zdHlsZShcIndpZHRoXCIsIFwiMTc3cHhcIilcbn1cblxuXG5jb25zdCB0aXRsZURyb3BEb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKVxuY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtbGlzdFwiKVxuY29uc3QgY2l0eUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNpdHlcIilcblxuZnVuY3Rpb24gdG9nZ2xlRHJvcGRvd24oZWxlKSB7XG4gICAgY29uc3QgZHJvcGRvd25CdXR0b25FbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLW1lbnVcIilcbiAgICBpZiAoZWxlLmNsYXNzTmFtZS5pbmNsdWRlcyhcImluYWN0aXZlXCIpKSB7XG4gICAgICAgIGVsZS5jbGFzc05hbWUgPSBlbGUuY2xhc3NOYW1lLnNwbGl0KFwiIFwiKVswXVxuICAgICAgICBlbGUuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIwIDAgMTBweCAxMHB4XCJcbiAgICAgICAgZHJvcGRvd25CdXR0b25FbGUuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMHB4IDEwcHggMCAwXCJcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZS5jbGFzc05hbWUgPSBlbGUuY2xhc3NOYW1lICsgXCIgaW5hY3RpdmVcIlxuICAgICAgICBlbGUuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMHB4XCJcbiAgICAgICAgZHJvcGRvd25CdXR0b25FbGUuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMHB4XCJcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNob3dDaGFydHMoY2l0eU5hbWUpIHtcbiAgICBjb25zdCBjaXR5TmFtZVJlbW92ZWRTcGFjZSA9IGNpdHlOYW1lLnNwbGl0KFwiIFwiKVsxXVxuICAgIGNvbnN0IGNpdHlDaGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NpdHlOYW1lUmVtb3ZlZFNwYWNlfWApXG4gXG5cbiAgICBjb25zdCBhbGxDaXR5Q2hhcnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaXR5Y2hhcnRcIilcbiAgICBhbGxDaXR5Q2hhcnRzLmZvckVhY2goY2l0eUNoYXJ0ID0+IHtcbiAgICAgICAgaWYgKCFjaXR5Q2hhcnQuY2xhc3NOYW1lLmJhc2VWYWwuaW5jbHVkZXMoXCJoaWRkZW5cIikpIHtcbiAgICAgICAgICAgIGNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbCA9IGNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbCArIFwiIGhpZGRlblwiXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbC5pbmNsdWRlcyhcImhpZGRlblwiKSl7XG4gICAgICAgIGNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbCA9IGBjaXR5Y2hhcnQgJHtjaXR5TmFtZX1gXG4gICAgfWVsc2Uge1xuXG4gICAgICAgIGNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbCA9IGNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbCArIFwiIGhpZGRlblwiXG5cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNob3dUYWJsZXMoY2l0eU5hbWUpIHtcbiAgICBjb25zdCBjaXR5TmFtZVJlbW92ZWRTcGFjZSA9IGNpdHlOYW1lLnNwbGl0KFwiIFwiKVsxXVxuICAgIGNvbnN0IGNpdHlUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50YWJsZS0ke2NpdHlOYW1lUmVtb3ZlZFNwYWNlfWApXG5cbiAgICBjb25zdCBhbGxDaXR5VGFibGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJsZVwiKVxuICAgIGFsbENpdHlUYWJsZXMuZm9yRWFjaChjaXR5VGFibGUgPT4ge1xuICAgICAgICBpZiAoIWNpdHlUYWJsZS5jbGFzc05hbWUuaW5jbHVkZXMoXCJoaWRkZW5cIikpIHtcbiAgICAgICAgICAgIGNpdHlUYWJsZS5jbGFzc05hbWUgPSBjaXR5VGFibGUuY2xhc3NOYW1lICsgXCIgaGlkZGVuXCJcbiAgICBcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoY2l0eVRhYmxlLmNsYXNzTmFtZS5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICBjaXR5VGFibGUuY2xhc3NOYW1lID0gYHRhYmxlIHRhYmxlLSR7Y2l0eU5hbWVSZW1vdmVkU3BhY2V9YFxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgY2l0eVRhYmxlLmNsYXNzTmFtZSA9IGNpdHlUYWJsZS5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxuXG4gICAgfVxufVxuXG5mdW5jdGlvbiBzaG93VGl0bGUoY2l0eU5hbWUpIHtcbiAgICBjb25zdCBjaXR5TmFtZVJlbW92ZWRTcGFjZSA9IGNpdHlOYW1lLnNwbGl0KFwiIFwiKVsxXVxuICAgIGNvbnN0IGNpdHlUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50aXRsZS0ke2NpdHlOYW1lUmVtb3ZlZFNwYWNlfWApXG5cbiAgICBjb25zdCBhbGxDaXR5VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNpdHl0aXRsZVwiKVxuICAgIGFsbENpdHlUaXRsZS5mb3JFYWNoKGNpdHlUaXRsZSA9PiB7XG4gICAgICAgIGlmICghY2l0eVRpdGxlLmNsYXNzTmFtZS5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICAgICAgY2l0eVRpdGxlLmNsYXNzTmFtZSA9IGNpdHlUaXRsZS5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxuXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNpdHlUaXRsZS5jbGFzc05hbWUuaW5jbHVkZXMoXCJoaWRkZW5cIikpIHtcbiAgICAgICAgY2l0eVRpdGxlLmNsYXNzTmFtZSA9IGBjaXR5dGl0bGUgdGl0bGUtJHtjaXR5TmFtZVJlbW92ZWRTcGFjZX1gXG4gICAgfSBlbHNlIHtcblxuICAgICAgICBjaXR5VGl0bGUuY2xhc3NOYW1lID0gY2l0eVRpdGxlLmNsYXNzTmFtZSArIFwiIGhpZGRlblwiXG5cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNob3dTdW1tYXJ5KGNpdHlOYW1lKSB7XG4gICAgY29uc3QgY2l0eU5hbWVSZW1vdmVkU3BhY2UgPSBjaXR5TmFtZS5zcGxpdChcIiBcIilbMV1cbiAgICBjb25zdCBjaXR5U3VtbWFyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zdW1tYXJ5LSR7Y2l0eU5hbWVSZW1vdmVkU3BhY2V9YClcblxuICAgIGNvbnN0IGFsbENpdHlTdW1tYXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaXR5U3VtbWFyeVwiKVxuICAgIGFsbENpdHlTdW1tYXJ5LmZvckVhY2goY2l0eVN1bW1hcnkgPT4ge1xuICAgICAgICBpZiAoIWNpdHlTdW1tYXJ5LmNsYXNzTmFtZS5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICAgICAgY2l0eVN1bW1hcnkuY2xhc3NOYW1lID0gY2l0eVN1bW1hcnkuY2xhc3NOYW1lICsgXCIgaGlkZGVuXCJcblxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGlmIChjaXR5U3VtbWFyeS5jbGFzc05hbWUuaW5jbHVkZXMoXCJoaWRkZW5cIikpIHtcbiAgICAgICAgY2l0eVN1bW1hcnkuY2xhc3NOYW1lID0gYGNpdHlTdW1tYXJ5IHN1bW1hcnktJHtjaXR5TmFtZVJlbW92ZWRTcGFjZX1gXG4gICAgfSBlbHNlIHtcblxuICAgICAgICBjaXR5U3VtbWFyeS5jbGFzc05hbWUgPSBjaXR5U3VtbWFyeS5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxuXG4gICAgfVxufVxuXG4vLyBhZGQgZXZlbnQgbGlzdGVuZXIgb24gdGhlIGJhcnMgdG8gXG5cbmZ1bmN0aW9uIGxpZ2h0dXBDYXRlZ29yaWVzKGlkKSB7XG4gICAgY29uc3QgY2l0eUNhdGVnb3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIyR7aWR9YClcbiAgICBjb25zdCBhbGxDaXR5Q2F0ZWdvcmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2F0ZWdvcnlcIilcbiAgICBhbGxDaXR5Q2F0ZWdvcmllcy5mb3JFYWNoKGNpdHlDYXQgPT4ge1xuICAgICAgICBpZiAoIWNpdHlDYXQuY2xhc3NOYW1lLmluY2x1ZGVzKFwibm9uaGlnaGxpZ2h0ZWRcIikpIHtcbiAgICAgICAgICAgIGNpdHlDYXQuY2xhc3NOYW1lID0gY2l0eUNhdC5jbGFzc05hbWUgKyBcIiBub25oaWdobGlnaHRlZFwiXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgY2l0eUNhdGVnb3J5LmZvckVhY2goY2l0eUNhdCA9PiB7XG4gICAgICAgIGlmIChjaXR5Q2F0LmNsYXNzTmFtZS5pbmNsdWRlcyhgY2F0ZWdvcnkgJHtpZH0gbm9uaGlnaGxpZ2h0ZWRgKSkge1xuICAgICAgICAgICAgY2l0eUNhdC5jbGFzc05hbWUgPSBgY2F0ZWdvcnkgJHtpZH1gXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaXR5Q2F0LmNsYXNzTmFtZSA9IGNpdHlDYXQuY2xhc3NOYW1lICsgXCIgbm9uaGlnaGxpZ2h0ZWRcIlxuICAgICAgICB9XG4gICAgfSlcblxufVxuXG5mdW5jdGlvbiBzdG9wSGlnaGxpZ2h0aW5nKCkge1xuICAgIGNvbnN0IGFsbENpdHlDYXRlZ29yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXRlZ29yeVwiKVxuICAgIGFsbENpdHlDYXRlZ29yaWVzLmZvckVhY2goY2l0eUNhdCA9PiB7XG4gICAgICAgIGlmICghY2l0eUNhdC5jbGFzc05hbWUuaW5jbHVkZXMoXCJub25oaWdobGlnaHRlZFwiKSkge1xuICAgICAgICAgICAgY2l0eUNhdC5jbGFzc05hbWUgPSBjaXR5Q2F0LmNsYXNzTmFtZSArIFwiIG5vbmhpZ2hsaWdodGVkXCJcbiAgICAgICAgfVxuICAgIH0pXG59XG5cblxuXG5mdW5jdGlvbiBzZWxlY3RJdGVtKGVsZSkge1xuICAgIGNvbnN0IGVsZVRleHQgPSBlbGUudGV4dENvbnRlbnRcbiAgICBjb25zdCB0aXRsZUVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGVcIilcbiAgICB0aXRsZUVsZS50ZXh0Q29udGVudCA9IGVsZVRleHQ7XG4gICAgdG9nZ2xlRHJvcGRvd24obWVudUxpc3QpO1xuXG4gICAgc2hvd0NoYXJ0cyhlbGVUZXh0KVxuICAgIHNob3dUYWJsZXMoZWxlVGV4dClcbiAgICBzaG93VGl0bGUoZWxlVGV4dClcbiAgICBzaG93U3VtbWFyeShlbGVUZXh0KVxufVxuXG50aXRsZURyb3BEb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdG9nZ2xlRHJvcGRvd24obWVudUxpc3QpKVxuXG5jaXR5TGlzdC5mb3JFYWNoKGNpdHkgPT4ge1xuICAgIGNpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzZWxlY3RJdGVtKGNpdHkpKVxufSlcblxuXG5cbnJlbmRlcmFsbCgpXG5cblxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9