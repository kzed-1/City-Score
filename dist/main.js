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

  var yScale = d3.scaleLinear().domain([0, maxValue]).range([0, y_axisLength]);
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
    return tooltip.style("visibility", "visible").text(d.name + ": " + d.score_out_of_10);
  }).on("mousemove", function (d) {
    return tooltip.style("top", d3.event.pageY - 10 + "px").style("left", d3.event.pageX + 10 + "px").text(d.name + ": " + d.score_out_of_10.toFixed(2));
  }).on("mouseout", function (d) {
    return tooltip.style("visibility", "hidden");
  }).attr("id", function (d) {
    return d.name.replace(/\s/g, "");
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
      return "".concat(d.value.toFixed(2), " /10");
    } else {
      return d.value;
    }
  }).attr("id", function (d) {
    debugger;

    if (typeof d.value === "string") {
      var newStr = d.value.replace(/\s/g, "");
      return "".concat(newStr);
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


function addEvents() {
  var barList = document.querySelectorAll(".bar");
  barList.forEach(function (bar) {
    bar.add;
  });
  debugger;
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
addEvents();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJjaXR5RGF0YSIsIm5hbWUiLCJzdW1tYXJ5IiwiY2l0eVNjb3JlIiwiY2l0eVNlbGVjdGlvbiIsImNpdGllcyIsInJlbmRlciIsImQzIiwianNvbiIsImVycm9yIiwiZGF0YSIsInRlbGVwb3J0X2NpdHlfc2NvcmUiLCJjYXRlZ29yaWVzIiwiY3JlYXRlQmFyR3JhcGgiLCJjcmVhdGVUYWJsZSIsImNyZWF0ZVRpdGxlIiwiY3JlYXRlU3VtbWFyeSIsInJlbmRlcmFsbCIsImZvckVhY2giLCJjaXR5IiwiY2l0eU5hbWUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZWN0aW9uRWxlIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJjaXR5U3VtbWFyeUVsZSIsInJlcGxhY2UiLCJpbnNlcnRBZGphY2VudEVsZW1lbnQiLCJ3aWR0aCIsImhlaWdodCIsImFycmF5TGVuZ3RoIiwibGVuZ3RoIiwibWF4VmFsdWUiLCJtYXgiLCJkIiwic2NvcmVfb3V0X29mXzEwIiwieF9heGlzTGVuZ3RoIiwieV9heGlzTGVuZ3RoIiwieVNjYWxlIiwic2NhbGVMaW5lYXIiLCJkb21haW4iLCJyYW5nZSIsInhTY2FsZSIsInN2ZyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJzZWxlY3RBbGwiLCJlbnRlciIsImkiLCJjb2xvciIsIm9uIiwidG9vbHRpcCIsInN0eWxlIiwidGV4dCIsImV2ZW50IiwicGFnZVkiLCJwYWdlWCIsInRvRml4ZWQiLCJjb2x1bW5zIiwiY29sdW1uTmFtZXMiLCJ0YWJsZSIsImhlYWRlciIsInRhYmxlYm9keSIsInJvd3MiLCJjZWxscyIsInJvdyIsIm1hcCIsImNvbHVtbiIsInZhbHVlIiwibmV3U3RyIiwidGl0bGVEcm9wRG93biIsIm1lbnVMaXN0IiwiY2l0eUxpc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwidG9nZ2xlRHJvcGRvd24iLCJlbGUiLCJkcm9wZG93bkJ1dHRvbkVsZSIsImluY2x1ZGVzIiwic3BsaXQiLCJib3JkZXJSYWRpdXMiLCJzaG93Q2hhcnRzIiwiY2l0eU5hbWVSZW1vdmVkU3BhY2UiLCJjaXR5Q2hhcnQiLCJhbGxDaXR5Q2hhcnRzIiwiYmFzZVZhbCIsInNob3dUYWJsZXMiLCJjaXR5VGFibGUiLCJhbGxDaXR5VGFibGVzIiwic2hvd1RpdGxlIiwiY2l0eVRpdGxlIiwiYWxsQ2l0eVRpdGxlIiwic2hvd1N1bW1hcnkiLCJjaXR5U3VtbWFyeSIsImFsbENpdHlTdW1tYXJ5IiwiYWRkRXZlbnRzIiwiYmFyTGlzdCIsImJhciIsImFkZCIsInNlbGVjdEl0ZW0iLCJlbGVUZXh0IiwidGl0bGVFbGUiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtR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LFNBQVNDLFVBQVQsQ0FBb0J2QixHQUFwQixFQUF5QjtBQUNyQixNQUFNd0IsT0FBTyxHQUFHeEIsR0FBRyxDQUFDdEQsV0FBcEI7QUFDQSxNQUFNK0UsUUFBUSxHQUFHbkYsUUFBUSxDQUFDRyxhQUFULENBQXVCLFFBQXZCLENBQWpCO0FBQ0FnRixVQUFRLENBQUMvRSxXQUFULEdBQXVCOEUsT0FBdkI7QUFDQXpCLGdCQUFjLENBQUNILFFBQUQsQ0FBZDtBQUVBUyxZQUFVLENBQUNtQixPQUFELENBQVY7QUFDQWQsWUFBVSxDQUFDYyxPQUFELENBQVY7QUFDQVgsV0FBUyxDQUFDVyxPQUFELENBQVQ7QUFDQVIsYUFBVyxDQUFDUSxPQUFELENBQVg7QUFDSDs7QUFFRDdCLGFBQWEsQ0FBQytCLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDO0FBQUEsU0FBTTNCLGNBQWMsQ0FBQ0gsUUFBRCxDQUFwQjtBQUFBLENBQXhDO0FBRUFDLFFBQVEsQ0FBQzFELE9BQVQsQ0FBaUIsVUFBQUMsSUFBSSxFQUFJO0FBQ3JCQSxNQUFJLENBQUNzRixnQkFBTCxDQUFzQixPQUF0QixFQUErQjtBQUFBLFdBQU1ILFVBQVUsQ0FBQ25GLElBQUQsQ0FBaEI7QUFBQSxHQUEvQjtBQUNILENBRkQ7QUFNQUYsU0FBUztBQUVUaUYsU0FBUyxHOzs7Ozs7Ozs7OztBQzFZVCx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuXG5cblxubGV0IGNpdHlEYXRhID0gW11cbmxldCBuYW1lLCBzdW1tYXJ5LCBjaXR5U2NvcmU7XG5cbmxldCBjaXR5U2VsZWN0aW9uID0gXCIvc3JjL2RhdGEvbmV3eW9yay5qc29uXCJcblxubGV0IGNpdGllcyA9IFtcbiAgICBcIi9zcmMvZGF0YS9uZXd5b3JrLmpzb25cIiwgXCIvc3JjL2RhdGEvc2FuZnJhbi5qc29uXCIsIFwiL3NyYy9kYXRhL3NlYXR0bGUuanNvblwiLCBcbiAgICBcIi9zcmMvZGF0YS90b3JvbnRvLmpzb25cIiwgXCIvc3JjL2RhdGEvYm9zdG9uLmpzb25cIiwgXCIvc3JjL2RhdGEvY2hpY2Fnby5qc29uXCIsIFxuICAgIFwiL3NyYy9kYXRhL2xvc2FuZ2VsZXMuanNvblwiLCBcIi9zcmMvZGF0YS9kYWxsYXMuanNvblwiLCBcIi9zcmMvZGF0YS9waG9lbml4Lmpzb25cIiwgXG4gICAgXCIvc3JjL2RhdGEvcmFsZWlnaC5qc29uXCJcbiAgICBdIFxuXG5cblxuZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGQzLmpzb24oY2l0eVNlbGVjdGlvbiwgZnVuY3Rpb24gKGVycm9yLCBkYXRhKSB7XG5cbiAgICAgICAgbmFtZSA9IGRhdGEubmFtZVxuICAgICAgICBzdW1tYXJ5ID0gZGF0YS5zdW1tYXJ5XG4gICAgICAgIGNpdHlTY29yZSA9IGRhdGEudGVsZXBvcnRfY2l0eV9zY29yZVxuICAgICAgICBjaXR5RGF0YSA9IGRhdGEuY2F0ZWdvcmllc1xuICAgICAgICBjcmVhdGVCYXJHcmFwaCgpO1xuICAgICAgICBjcmVhdGVUYWJsZSgpO1xuICAgICAgICBjcmVhdGVUaXRsZSgpO1xuICAgICAgICBjcmVhdGVTdW1tYXJ5KCk7XG4gICAgfSlcblxufVxuXG5mdW5jdGlvbiByZW5kZXJhbGwoKSB7XG4gICAgY2l0aWVzLmZvckVhY2goY2l0eSA9PiB7XG4gICAgICAgIGNpdHlTZWxlY3Rpb24gPSBjaXR5IFxuICAgICAgICByZW5kZXIoKVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUaXRsZSAoKSB7XG4gICAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbiAgICBjb25zdCBzZWN0aW9uRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlY3Rpb25cIilcbiAgICAvLyBjb25zdCBkcm9wRG93bkVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tbWVudVwiKVxuXG4gICAgY2l0eU5hbWUudGV4dENvbnRlbnQgPSBuYW1lXG5cbiAgICBpZiAobmFtZSA9PT0gXCJOZXcgWW9ya1wiKXtcbiAgICAgICAgY2l0eU5hbWUuY2xhc3NOYW1lID0gYGNpdHl0aXRsZSB0aXRsZS0ke25hbWV9YFxuICAgIH1lbHNlIHtcbiAgICAgICAgY2l0eU5hbWUuY2xhc3NOYW1lID0gYGNpdHl0aXRsZSB0aXRsZS0ke25hbWV9IGhpZGRlbmBcbiAgICB9XG4gICAgLy8gc2VjdGlvbkVsZS5pbnNlcnRCZWZvcmUoY2l0eU5hbWUsIGRyb3BEb3duRWxlKVxuICAgIHNlY3Rpb25FbGUuYXBwZW5kQ2hpbGQoY2l0eU5hbWUpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN1bW1hcnkoKSB7XG4gICAgY29uc3QgY2l0eVN1bW1hcnlFbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIGNvbnN0IHNlY3Rpb25FbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VjdGlvblwiKVxuICAgIFxuICAgIGNpdHlTdW1tYXJ5RWxlLnRleHRDb250ZW50ID0gc3VtbWFyeS5yZXBsYWNlKC9bPF0uezEsMn1bPl0vZywgXCJcIilcblxuICAgIGlmIChuYW1lID09PSBcIk5ldyBZb3JrXCIpIHtcbiAgICAgICAgY2l0eVN1bW1hcnlFbGUuY2xhc3NOYW1lID0gYGNpdHlTdW1tYXJ5IHN1bW1hcnktJHtuYW1lfWBcbiAgICB9IGVsc2Uge1xuICAgICAgICBjaXR5U3VtbWFyeUVsZS5jbGFzc05hbWUgPSBgY2l0eVN1bW1hcnkgc3VtbWFyeS0ke25hbWV9IGhpZGRlbmBcbiAgICB9XG5cbiAgICBzZWN0aW9uRWxlLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyZW5kXCIsIGNpdHlTdW1tYXJ5RWxlKVxufVxuXG5cblxuXG5cblxuZnVuY3Rpb24gY3JlYXRlQmFyR3JhcGgoKSB7XG5cbiAgICB2YXIgd2lkdGggPSA1MDA7XG4gICAgdmFyIGhlaWdodCA9IDUzMDtcblxuICAgIC8vIEdldCBsZW5ndGggb2YgZGF0YXNldFxuICAgIHZhciBhcnJheUxlbmd0aCA9IGNpdHlEYXRhLmxlbmd0aDsgLy8gbGVuZ3RoIG9mIGRhdGFzZXRcbiAgICB2YXIgbWF4VmFsdWUgPSBkMy5tYXgoY2l0eURhdGEsIGZ1bmN0aW9uIChkKSB7IHJldHVybiArZC5zY29yZV9vdXRfb2ZfMTA7IH0pOyAvLyBnZXQgbWF4aW11bVxuICAgIHZhciB4X2F4aXNMZW5ndGggPSA1MDA7IC8vIGxlbmd0aCBvZiB4LWF4aXMgaW4gb3VyIGxheW91dFxuICAgIHZhciB5X2F4aXNMZW5ndGggPSA1MDA7IC8vIGxlbmd0aCBvZiB5LWF4aXMgaW4gb3VyIGxheW91dFxuXG5cbiAgICB2YXIgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAuZG9tYWluKFswLCBtYXhWYWx1ZV0pXG4gICAgICAgIC5yYW5nZShbMCwgeV9heGlzTGVuZ3RoXSk7XG5cbiAgICB2YXIgeFNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAuZG9tYWluKFswLCBtYXhWYWx1ZV0pXG4gICAgICAgIC5yYW5nZShbMCwgeF9heGlzTGVuZ3RoXSk7XG5cblxuXG4gICAgdmFyIHN2ZyA9IGQzLnNlbGVjdChcIi5jaGFydFwiKVxuICAgICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGgpXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCk7XG4gICAgXG4gICAgaWYgKG5hbWUgPT09IFwiTmV3IFlvcmtcIil7XG4gICAgICAgIHN2Zy5hdHRyKFwiY2xhc3NcIiwgYGNpdHljaGFydCAke25hbWV9YClcblxuICAgIH1lbHNlIHtcbiAgICAgICAgc3ZnLmF0dHIoXCJjbGFzc1wiLGBjaXR5Y2hhcnQgJHtuYW1lfSBoaWRkZW5gKVxuICAgIH1cblxuXG4gICAgc3ZnLnNlbGVjdEFsbChcInJlY3RcIilcbiAgICAgICAgLmRhdGEoY2l0eURhdGEpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIGkgKiAoeV9heGlzTGVuZ3RoIC8gYXJyYXlMZW5ndGgpICsgMzA7IFxuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcInhcIiwgMClcbiAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgKHlfYXhpc0xlbmd0aCAvIGFycmF5TGVuZ3RoKSAtIDEpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiB4U2NhbGUoZC5zY29yZV9vdXRfb2ZfMTApOyBcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoXCJmaWxsXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gZC5jb2xvclxuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBgYmFyICR7ZC5uYW1lfWA7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9vbHRpcC5zdHlsZShcInZpc2liaWxpdHlcIiwgXCJ2aXNpYmxlXCIpLnRleHQoZC5uYW1lICsgXCI6IFwiICsgZC5zY29yZV9vdXRfb2ZfMTApO1xuICAgICAgICB9KVxuICAgICAgICAub24oXCJtb3VzZW1vdmVcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiB0b29sdGlwLnN0eWxlKFwidG9wXCIsIChkMy5ldmVudC5wYWdlWS0xMCkrXCJweFwiKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcImxlZnRcIiwoZDMuZXZlbnQucGFnZVgrMTApK1wicHhcIikudGV4dChkLm5hbWUgKyBcIjogXCIgKyBkLnNjb3JlX291dF9vZl8xMC50b0ZpeGVkKDIpKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwibW91c2VvdXRcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRvb2x0aXAuc3R5bGUoXCJ2aXNpYmlsaXR5XCIsIFwiaGlkZGVuXCIpXG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKFwiaWRcIiwgZnVuY3Rpb24oZCkgeyAgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBkLm5hbWUucmVwbGFjZSgvXFxzL2csIFwiXCIpXG4gICAgICAgIH0pXG5cblxuICAgIC8vIENyZWF0ZSB5LWF4aXNcbiAgICBzdmcuYXBwZW5kKFwibGluZVwiKVxuICAgICAgICAuYXR0cihcIngxXCIsIDcwMClcbiAgICAgICAgLmF0dHIoXCJ5MVwiLCAzMClcbiAgICAgICAgLmF0dHIoXCJ4MlwiLCA3MDApXG4gICAgICAgIC5hdHRyKFwieTJcIiwgNTI5KVxuICAgICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAyKVxuICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBcImJsYWNrXCIpO1xuXG4gICAgLy8gQ3JlYXRlIHgtYXhpc1xuICAgIHN2Zy5hcHBlbmQoXCJsaW5lXCIpXG4gICAgICAgIC5hdHRyKFwieDFcIiwgMzApXG4gICAgICAgIC5hdHRyKFwieTFcIiwgNzUwKVxuICAgICAgICAuYXR0cihcIngyXCIsIDUwMClcbiAgICAgICAgLmF0dHIoXCJ5MlwiLCA3NTApXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDIpXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiYmxhY2tcIik7XG5cblxuXG4gICAgdmFyIHRvb2x0aXAgPSBkMy5zZWxlY3QoXCIuY2hhcnRcIilcbiAgICAgICAgLmFwcGVuZChcImRpdlwiKVxuICAgICAgICAuc3R5bGUoXCJwb3NpdGlvblwiLCBcImFic29sdXRlXCIpXG4gICAgICAgIC5zdHlsZShcImZvbnQtZmFtaWx5XCIsIFwicm9ib3RvXCIpXG4gICAgICAgIC5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjE0cHhcIilcbiAgICAgICAgLnN0eWxlKFwiei1pbmRleFwiLCBcIjNcIilcbiAgICAgICAgLnN0eWxlKFwidmlzaWJpbGl0eVwiLCBcImhpZGRlblwiKVxuICAgICAgICAuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwid2hpdGVcIilcbiAgICAgICAgLnN0eWxlKFwid2lkdGhcIiwgXCJhdXRvXCIpXG4gICAgICAgIC5zdHlsZShcIm1hcmdpblwiLCBcIjAgYXV0b1wiKVxuICAgICAgICAuc3R5bGUoXCJib3JkZXItcmFkaXVzXCIsIFwiMTBweFwiKVxuICAgICAgICAuc3R5bGUoXCJwYWRkaW5nXCIsIFwiMTBweFwiKVxuICAgICAgICAuc3R5bGUoXCJib3JkZXJcIiwgXCIycHggc29saWQgYmxhY2tcIilcbn07XG5cblxuZnVuY3Rpb24gY3JlYXRlVGFibGUgKCkge1xuXG4gICAgY29uc3QgY29sdW1ucyA9IFtcIm5hbWVcIiwgXCJzY29yZV9vdXRfb2ZfMTBcIl1cbiAgICBjb25zdCBjb2x1bW5OYW1lcyA9IFtcIkNhdGVnb3JpZXNcIiwgXCJTY29yZVwiXVxuICAgIFxuICAgIGxldCB0YWJsZSA9IGQzLnNlbGVjdCgnLnByb2ZpbGUnKVxuICAgICAgICAuYXBwZW5kKCd0YWJsZScpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgYHRhYmxlIHRhYmxlLSR7bmFtZX0gaGlkZGVuYClcbiAgICAgICAgLnN0eWxlKFwiYm9yZGVyLXJhZGl1c1wiLCBcIjEwcHhcIilcbiAgICAgICAgLnN0eWxlKFwiYm9yZGVyXCIsIFwiMnB4IHNvbGlkIGJsYWNrXCIpO1xuICAgIGxldCBoZWFkZXIgPSB0YWJsZVxuICAgICAgICAuYXBwZW5kKFwiaGVhZGVyXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0YWJsZS1oZWFkZXJcIik7XG4gICAgbGV0IHRhYmxlYm9keSA9IHRhYmxlLmFwcGVuZChcInRhYmxlYm9keVwiKTtcblxuICAgIGlmIChuYW1lID09PSBcIk5ldyBZb3JrXCIpIHtcbiAgICAgICAgdGFibGUuYXR0cihcImNsYXNzXCIsIGB0YWJsZSB0YWJsZS0ke25hbWV9YClcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRhYmxlLmF0dHIoXCJjbGFzc1wiLCBgdGFibGUgdGFibGUtJHtuYW1lfSBoaWRkZW5gKVxuICAgIH1cblxuICAgIGhlYWRlclxuICAgICAgICAuYXBwZW5kKFwidHJcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImhlYWRlci13cmFwcGVyXCIpXG4gICAgICAgIC5zdHlsZShcImNvbG9yXCIsIFwiYmx1ZVwiKVxuICAgICAgICAuc2VsZWN0QWxsKFwidGhcIilcbiAgICAgICAgLmRhdGEoY29sdW1uTmFtZXMpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJ0aFwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gZDtcbiAgICAgICAgfSlcbiAgICAgICAgLnN0eWxlKFwidGV4dC1hbGlnblwiLCBcImNlbnRlclwiKVxuICAgICAgICAudGV4dChmdW5jdGlvbihkKXtcbiAgICAgICAgICAgIHJldHVybiBkO1xuICAgICAgICB9KVxuICAgICAgXG4gICAgICAgIFxuXG4gICAgbGV0IHJvd3MgPSB0YWJsZWJvZHlcbiAgICAgICAgLnNlbGVjdEFsbChcInRyXCIpXG4gICAgICAgIC5kYXRhKGNpdHlEYXRhKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwidHJcIik7XG4gICAgXG5cbiAgICBsZXQgY2VsbHMgPSByb3dzLnNlbGVjdEFsbChcInRkXCIpXG4gICAgICAgIC5kYXRhKGZ1bmN0aW9uKHJvdykge1xuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbnMubWFwKGZ1bmN0aW9uKGNvbHVtbikge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbjogY29sdW1uLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcm93W2NvbHVtbl1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwidGRcIilcbiAgICAgICAgLnRleHQoZnVuY3Rpb24oZCl7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGQudmFsdWUgPT09IFwibnVtYmVyXCIpe1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHtkLnZhbHVlLnRvRml4ZWQoMil9IC8xMGBcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZC52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcImlkXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGQudmFsdWUgPT09IFwic3RyaW5nXCIpe1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1N0ciA9IGQudmFsdWUucmVwbGFjZSgvXFxzL2csIFwiXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke25ld1N0cn1gXG4gICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGQudmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbn1cblxuXG5jb25zdCB0aXRsZURyb3BEb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKVxuY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtbGlzdFwiKVxuY29uc3QgY2l0eUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNpdHlcIilcblxuZnVuY3Rpb24gdG9nZ2xlRHJvcGRvd24oZWxlKSB7XG4gICAgY29uc3QgZHJvcGRvd25CdXR0b25FbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLW1lbnVcIilcbiAgICBpZiAoZWxlLmNsYXNzTmFtZS5pbmNsdWRlcyhcImluYWN0aXZlXCIpKSB7XG4gICAgICAgIGVsZS5jbGFzc05hbWUgPSBlbGUuY2xhc3NOYW1lLnNwbGl0KFwiIFwiKVswXVxuICAgICAgICBlbGUuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIwIDAgMTBweCAxMHB4XCJcbiAgICAgICAgZHJvcGRvd25CdXR0b25FbGUuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMHB4IDEwcHggMCAwXCJcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZS5jbGFzc05hbWUgPSBlbGUuY2xhc3NOYW1lICsgXCIgaW5hY3RpdmVcIlxuICAgICAgICBlbGUuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMHB4XCJcbiAgICAgICAgZHJvcGRvd25CdXR0b25FbGUuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMHB4XCJcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNob3dDaGFydHMoY2l0eU5hbWUpIHtcbiAgICBjb25zdCBjaXR5TmFtZVJlbW92ZWRTcGFjZSA9IGNpdHlOYW1lLnNwbGl0KFwiIFwiKVsxXVxuICAgIGNvbnN0IGNpdHlDaGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NpdHlOYW1lUmVtb3ZlZFNwYWNlfWApXG4gXG5cbiAgICBjb25zdCBhbGxDaXR5Q2hhcnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaXR5Y2hhcnRcIilcbiAgICBhbGxDaXR5Q2hhcnRzLmZvckVhY2goY2l0eUNoYXJ0ID0+IHtcbiAgICAgICAgaWYgKCFjaXR5Q2hhcnQuY2xhc3NOYW1lLmJhc2VWYWwuaW5jbHVkZXMoXCJoaWRkZW5cIikpIHtcbiAgICAgICAgICAgIGNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbCA9IGNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbCArIFwiIGhpZGRlblwiXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbC5pbmNsdWRlcyhcImhpZGRlblwiKSl7XG4gICAgICAgIGNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbCA9IGBjaXR5Y2hhcnQgJHtjaXR5TmFtZX1gXG4gICAgfWVsc2Uge1xuXG4gICAgICAgIGNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbCA9IGNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbCArIFwiIGhpZGRlblwiXG5cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNob3dUYWJsZXMoY2l0eU5hbWUpIHtcbiAgICBjb25zdCBjaXR5TmFtZVJlbW92ZWRTcGFjZSA9IGNpdHlOYW1lLnNwbGl0KFwiIFwiKVsxXVxuICAgIGNvbnN0IGNpdHlUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50YWJsZS0ke2NpdHlOYW1lUmVtb3ZlZFNwYWNlfWApXG5cbiAgICBjb25zdCBhbGxDaXR5VGFibGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJsZVwiKVxuICAgIGFsbENpdHlUYWJsZXMuZm9yRWFjaChjaXR5VGFibGUgPT4ge1xuICAgICAgICBpZiAoIWNpdHlUYWJsZS5jbGFzc05hbWUuaW5jbHVkZXMoXCJoaWRkZW5cIikpIHtcbiAgICAgICAgICAgIGNpdHlUYWJsZS5jbGFzc05hbWUgPSBjaXR5VGFibGUuY2xhc3NOYW1lICsgXCIgaGlkZGVuXCJcbiAgICBcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoY2l0eVRhYmxlLmNsYXNzTmFtZS5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICBjaXR5VGFibGUuY2xhc3NOYW1lID0gYHRhYmxlIHRhYmxlLSR7Y2l0eU5hbWVSZW1vdmVkU3BhY2V9YFxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgY2l0eVRhYmxlLmNsYXNzTmFtZSA9IGNpdHlUYWJsZS5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxuXG4gICAgfVxufVxuXG5mdW5jdGlvbiBzaG93VGl0bGUoY2l0eU5hbWUpIHtcbiAgICBjb25zdCBjaXR5TmFtZVJlbW92ZWRTcGFjZSA9IGNpdHlOYW1lLnNwbGl0KFwiIFwiKVsxXVxuICAgIGNvbnN0IGNpdHlUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50aXRsZS0ke2NpdHlOYW1lUmVtb3ZlZFNwYWNlfWApXG5cbiAgICBjb25zdCBhbGxDaXR5VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNpdHl0aXRsZVwiKVxuICAgIGFsbENpdHlUaXRsZS5mb3JFYWNoKGNpdHlUaXRsZSA9PiB7XG4gICAgICAgIGlmICghY2l0eVRpdGxlLmNsYXNzTmFtZS5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICAgICAgY2l0eVRpdGxlLmNsYXNzTmFtZSA9IGNpdHlUaXRsZS5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxuXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNpdHlUaXRsZS5jbGFzc05hbWUuaW5jbHVkZXMoXCJoaWRkZW5cIikpIHtcbiAgICAgICAgY2l0eVRpdGxlLmNsYXNzTmFtZSA9IGBjaXR5dGl0bGUgdGl0bGUtJHtjaXR5TmFtZVJlbW92ZWRTcGFjZX1gXG4gICAgfSBlbHNlIHtcblxuICAgICAgICBjaXR5VGl0bGUuY2xhc3NOYW1lID0gY2l0eVRpdGxlLmNsYXNzTmFtZSArIFwiIGhpZGRlblwiXG5cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNob3dTdW1tYXJ5KGNpdHlOYW1lKSB7XG4gICAgY29uc3QgY2l0eU5hbWVSZW1vdmVkU3BhY2UgPSBjaXR5TmFtZS5zcGxpdChcIiBcIilbMV1cbiAgICBjb25zdCBjaXR5U3VtbWFyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zdW1tYXJ5LSR7Y2l0eU5hbWVSZW1vdmVkU3BhY2V9YClcblxuICAgIGNvbnN0IGFsbENpdHlTdW1tYXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaXR5U3VtbWFyeVwiKVxuICAgIGFsbENpdHlTdW1tYXJ5LmZvckVhY2goY2l0eVN1bW1hcnkgPT4ge1xuICAgICAgICBpZiAoIWNpdHlTdW1tYXJ5LmNsYXNzTmFtZS5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICAgICAgY2l0eVN1bW1hcnkuY2xhc3NOYW1lID0gY2l0eVN1bW1hcnkuY2xhc3NOYW1lICsgXCIgaGlkZGVuXCJcblxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGlmIChjaXR5U3VtbWFyeS5jbGFzc05hbWUuaW5jbHVkZXMoXCJoaWRkZW5cIikpIHtcbiAgICAgICAgY2l0eVN1bW1hcnkuY2xhc3NOYW1lID0gYGNpdHlTdW1tYXJ5IHN1bW1hcnktJHtjaXR5TmFtZVJlbW92ZWRTcGFjZX1gXG4gICAgfSBlbHNlIHtcblxuICAgICAgICBjaXR5U3VtbWFyeS5jbGFzc05hbWUgPSBjaXR5U3VtbWFyeS5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxuXG4gICAgfVxufVxuXG4vLyBhZGQgZXZlbnQgbGlzdGVuZXIgb24gdGhlIGJhcnMgdG8gXG5cbmZ1bmN0aW9uIGFkZEV2ZW50cygpIHtcbiAgICBjb25zdCBiYXJMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5iYXJcIilcbiAgICBcbiAgICBiYXJMaXN0LmZvckVhY2goYmFyID0+IHtcbiAgICAgICAgYmFyLmFkZFxuICAgIH0pXG4gICAgZGVidWdnZXJcbn1cblxuXG5cbmZ1bmN0aW9uIHNlbGVjdEl0ZW0oZWxlKSB7XG4gICAgY29uc3QgZWxlVGV4dCA9IGVsZS50ZXh0Q29udGVudFxuICAgIGNvbnN0IHRpdGxlRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKVxuICAgIHRpdGxlRWxlLnRleHRDb250ZW50ID0gZWxlVGV4dDtcbiAgICB0b2dnbGVEcm9wZG93bihtZW51TGlzdCk7XG5cbiAgICBzaG93Q2hhcnRzKGVsZVRleHQpXG4gICAgc2hvd1RhYmxlcyhlbGVUZXh0KVxuICAgIHNob3dUaXRsZShlbGVUZXh0KVxuICAgIHNob3dTdW1tYXJ5KGVsZVRleHQpXG59XG5cbnRpdGxlRHJvcERvd24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0b2dnbGVEcm9wZG93bihtZW51TGlzdCkpXG5cbmNpdHlMaXN0LmZvckVhY2goY2l0eSA9PiB7XG4gICAgY2l0eS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNlbGVjdEl0ZW0oY2l0eSkpXG59KVxuXG5cblxucmVuZGVyYWxsKClcblxuYWRkRXZlbnRzKClcblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==