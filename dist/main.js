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
  barList.forEach(function (bar) {});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJjaXR5RGF0YSIsIm5hbWUiLCJzdW1tYXJ5IiwiY2l0eVNjb3JlIiwiY2l0eVNlbGVjdGlvbiIsImNpdGllcyIsInJlbmRlciIsImQzIiwianNvbiIsImVycm9yIiwiZGF0YSIsInRlbGVwb3J0X2NpdHlfc2NvcmUiLCJjYXRlZ29yaWVzIiwiY3JlYXRlQmFyR3JhcGgiLCJjcmVhdGVUYWJsZSIsImNyZWF0ZVRpdGxlIiwiY3JlYXRlU3VtbWFyeSIsInJlbmRlcmFsbCIsImZvckVhY2giLCJjaXR5IiwiY2l0eU5hbWUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZWN0aW9uRWxlIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJjaXR5U3VtbWFyeUVsZSIsInJlcGxhY2UiLCJpbnNlcnRBZGphY2VudEVsZW1lbnQiLCJ3aWR0aCIsImhlaWdodCIsImFycmF5TGVuZ3RoIiwibGVuZ3RoIiwibWF4VmFsdWUiLCJtYXgiLCJkIiwic2NvcmVfb3V0X29mXzEwIiwieF9heGlzTGVuZ3RoIiwieV9heGlzTGVuZ3RoIiwieVNjYWxlIiwic2NhbGVMaW5lYXIiLCJkb21haW4iLCJyYW5nZSIsInhTY2FsZSIsInN2ZyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJzZWxlY3RBbGwiLCJlbnRlciIsImkiLCJjb2xvciIsIm9uIiwidG9vbHRpcCIsInN0eWxlIiwidGV4dCIsImV2ZW50IiwicGFnZVkiLCJwYWdlWCIsInRvRml4ZWQiLCJjb2x1bW5zIiwiY29sdW1uTmFtZXMiLCJ0YWJsZSIsImhlYWRlciIsInRhYmxlYm9keSIsInJvd3MiLCJjZWxscyIsInJvdyIsIm1hcCIsImNvbHVtbiIsInZhbHVlIiwibmV3U3RyIiwidGl0bGVEcm9wRG93biIsIm1lbnVMaXN0IiwiY2l0eUxpc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwidG9nZ2xlRHJvcGRvd24iLCJlbGUiLCJkcm9wZG93bkJ1dHRvbkVsZSIsImluY2x1ZGVzIiwic3BsaXQiLCJib3JkZXJSYWRpdXMiLCJzaG93Q2hhcnRzIiwiY2l0eU5hbWVSZW1vdmVkU3BhY2UiLCJjaXR5Q2hhcnQiLCJhbGxDaXR5Q2hhcnRzIiwiYmFzZVZhbCIsInNob3dUYWJsZXMiLCJjaXR5VGFibGUiLCJhbGxDaXR5VGFibGVzIiwic2hvd1RpdGxlIiwiY2l0eVRpdGxlIiwiYWxsQ2l0eVRpdGxlIiwic2hvd1N1bW1hcnkiLCJjaXR5U3VtbWFyeSIsImFsbENpdHlTdW1tYXJ5IiwiYWRkRXZlbnRzIiwiYmFyTGlzdCIsImJhciIsInNlbGVjdEl0ZW0iLCJlbGVUZXh0IiwidGl0bGVFbGUiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7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QXlCO0FBQ3JCLE1BQU11QixPQUFPLEdBQUd2QixHQUFHLENBQUN0RCxXQUFwQjtBQUNBLE1BQU04RSxRQUFRLEdBQUdsRixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBakI7QUFDQStFLFVBQVEsQ0FBQzlFLFdBQVQsR0FBdUI2RSxPQUF2QjtBQUNBeEIsZ0JBQWMsQ0FBQ0gsUUFBRCxDQUFkO0FBRUFTLFlBQVUsQ0FBQ2tCLE9BQUQsQ0FBVjtBQUNBYixZQUFVLENBQUNhLE9BQUQsQ0FBVjtBQUNBVixXQUFTLENBQUNVLE9BQUQsQ0FBVDtBQUNBUCxhQUFXLENBQUNPLE9BQUQsQ0FBWDtBQUNIOztBQUVENUIsYUFBYSxDQUFDOEIsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0M7QUFBQSxTQUFNMUIsY0FBYyxDQUFDSCxRQUFELENBQXBCO0FBQUEsQ0FBeEM7QUFFQUMsUUFBUSxDQUFDMUQsT0FBVCxDQUFpQixVQUFBQyxJQUFJLEVBQUk7QUFDckJBLE1BQUksQ0FBQ3FGLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCO0FBQUEsV0FBTUgsVUFBVSxDQUFDbEYsSUFBRCxDQUFoQjtBQUFBLEdBQS9CO0FBQ0gsQ0FGRDtBQU1BRixTQUFTO0FBRVRpRixTQUFTLEc7Ozs7Ozs7Ozs7O0FDMVlULHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5cblxuXG5sZXQgY2l0eURhdGEgPSBbXVxubGV0IG5hbWUsIHN1bW1hcnksIGNpdHlTY29yZTtcblxubGV0IGNpdHlTZWxlY3Rpb24gPSBcIi9zcmMvZGF0YS9uZXd5b3JrLmpzb25cIlxuXG5sZXQgY2l0aWVzID0gW1xuICAgIFwiL3NyYy9kYXRhL25ld3lvcmsuanNvblwiLCBcIi9zcmMvZGF0YS9zYW5mcmFuLmpzb25cIiwgXCIvc3JjL2RhdGEvc2VhdHRsZS5qc29uXCIsIFxuICAgIFwiL3NyYy9kYXRhL3Rvcm9udG8uanNvblwiLCBcIi9zcmMvZGF0YS9ib3N0b24uanNvblwiLCBcIi9zcmMvZGF0YS9jaGljYWdvLmpzb25cIiwgXG4gICAgXCIvc3JjL2RhdGEvbG9zYW5nZWxlcy5qc29uXCIsIFwiL3NyYy9kYXRhL2RhbGxhcy5qc29uXCIsIFwiL3NyYy9kYXRhL3Bob2VuaXguanNvblwiLCBcbiAgICBcIi9zcmMvZGF0YS9yYWxlaWdoLmpzb25cIlxuICAgIF0gXG5cblxuXG5mdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgZDMuanNvbihjaXR5U2VsZWN0aW9uLCBmdW5jdGlvbiAoZXJyb3IsIGRhdGEpIHtcblxuICAgICAgICBuYW1lID0gZGF0YS5uYW1lXG4gICAgICAgIHN1bW1hcnkgPSBkYXRhLnN1bW1hcnlcbiAgICAgICAgY2l0eVNjb3JlID0gZGF0YS50ZWxlcG9ydF9jaXR5X3Njb3JlXG4gICAgICAgIGNpdHlEYXRhID0gZGF0YS5jYXRlZ29yaWVzXG4gICAgICAgIGNyZWF0ZUJhckdyYXBoKCk7XG4gICAgICAgIGNyZWF0ZVRhYmxlKCk7XG4gICAgICAgIGNyZWF0ZVRpdGxlKCk7XG4gICAgICAgIGNyZWF0ZVN1bW1hcnkoKTtcbiAgICB9KVxuXG59XG5cbmZ1bmN0aW9uIHJlbmRlcmFsbCgpIHtcbiAgICBjaXRpZXMuZm9yRWFjaChjaXR5ID0+IHtcbiAgICAgICAgY2l0eVNlbGVjdGlvbiA9IGNpdHkgXG4gICAgICAgIHJlbmRlcigpXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRpdGxlICgpIHtcbiAgICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICAgIGNvbnN0IHNlY3Rpb25FbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VjdGlvblwiKVxuICAgIC8vIGNvbnN0IGRyb3BEb3duRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bi1tZW51XCIpXG5cbiAgICBjaXR5TmFtZS50ZXh0Q29udGVudCA9IG5hbWVcblxuICAgIGlmIChuYW1lID09PSBcIk5ldyBZb3JrXCIpe1xuICAgICAgICBjaXR5TmFtZS5jbGFzc05hbWUgPSBgY2l0eXRpdGxlIHRpdGxlLSR7bmFtZX1gXG4gICAgfWVsc2Uge1xuICAgICAgICBjaXR5TmFtZS5jbGFzc05hbWUgPSBgY2l0eXRpdGxlIHRpdGxlLSR7bmFtZX0gaGlkZGVuYFxuICAgIH1cbiAgICAvLyBzZWN0aW9uRWxlLmluc2VydEJlZm9yZShjaXR5TmFtZSwgZHJvcERvd25FbGUpXG4gICAgc2VjdGlvbkVsZS5hcHBlbmRDaGlsZChjaXR5TmFtZSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3VtbWFyeSgpIHtcbiAgICBjb25zdCBjaXR5U3VtbWFyeUVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgY29uc3Qgc2VjdGlvbkVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWN0aW9uXCIpXG4gICAgXG4gICAgY2l0eVN1bW1hcnlFbGUudGV4dENvbnRlbnQgPSBzdW1tYXJ5LnJlcGxhY2UoL1s8XS57MSwyfVs+XS9nLCBcIlwiKVxuXG4gICAgaWYgKG5hbWUgPT09IFwiTmV3IFlvcmtcIikge1xuICAgICAgICBjaXR5U3VtbWFyeUVsZS5jbGFzc05hbWUgPSBgY2l0eVN1bW1hcnkgc3VtbWFyeS0ke25hbWV9YFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNpdHlTdW1tYXJ5RWxlLmNsYXNzTmFtZSA9IGBjaXR5U3VtbWFyeSBzdW1tYXJ5LSR7bmFtZX0gaGlkZGVuYFxuICAgIH1cblxuICAgIHNlY3Rpb25FbGUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJlbmRcIiwgY2l0eVN1bW1hcnlFbGUpXG59XG5cblxuXG5cblxuXG5mdW5jdGlvbiBjcmVhdGVCYXJHcmFwaCgpIHtcblxuICAgIHZhciB3aWR0aCA9IDUwMDtcbiAgICB2YXIgaGVpZ2h0ID0gNTMwO1xuXG4gICAgLy8gR2V0IGxlbmd0aCBvZiBkYXRhc2V0XG4gICAgdmFyIGFycmF5TGVuZ3RoID0gY2l0eURhdGEubGVuZ3RoOyAvLyBsZW5ndGggb2YgZGF0YXNldFxuICAgIHZhciBtYXhWYWx1ZSA9IGQzLm1heChjaXR5RGF0YSwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuICtkLnNjb3JlX291dF9vZl8xMDsgfSk7IC8vIGdldCBtYXhpbXVtXG4gICAgdmFyIHhfYXhpc0xlbmd0aCA9IDUwMDsgLy8gbGVuZ3RoIG9mIHgtYXhpcyBpbiBvdXIgbGF5b3V0XG4gICAgdmFyIHlfYXhpc0xlbmd0aCA9IDUwMDsgLy8gbGVuZ3RoIG9mIHktYXhpcyBpbiBvdXIgbGF5b3V0XG5cblxuICAgIHZhciB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgIC5kb21haW4oWzAsIG1heFZhbHVlXSlcbiAgICAgICAgLnJhbmdlKFswLCB5X2F4aXNMZW5ndGhdKTtcblxuICAgIHZhciB4U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgIC5kb21haW4oWzAsIG1heFZhbHVlXSlcbiAgICAgICAgLnJhbmdlKFswLCB4X2F4aXNMZW5ndGhdKTtcblxuXG5cbiAgICB2YXIgc3ZnID0gZDMuc2VsZWN0KFwiLmNoYXJ0XCIpXG4gICAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aClcbiAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0KTtcbiAgICBcbiAgICBpZiAobmFtZSA9PT0gXCJOZXcgWW9ya1wiKXtcbiAgICAgICAgc3ZnLmF0dHIoXCJjbGFzc1wiLCBgY2l0eWNoYXJ0ICR7bmFtZX1gKVxuXG4gICAgfWVsc2Uge1xuICAgICAgICBzdmcuYXR0cihcImNsYXNzXCIsYGNpdHljaGFydCAke25hbWV9IGhpZGRlbmApXG4gICAgfVxuXG5cbiAgICBzdmcuc2VsZWN0QWxsKFwicmVjdFwiKVxuICAgICAgICAuZGF0YShjaXR5RGF0YSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZChcInJlY3RcIilcbiAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gaSAqICh5X2F4aXNMZW5ndGggLyBhcnJheUxlbmd0aCkgKyAzMDsgXG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKFwieFwiLCAwKVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCAoeV9heGlzTGVuZ3RoIC8gYXJyYXlMZW5ndGgpIC0gMSlcbiAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIHhTY2FsZShkLnNjb3JlX291dF9vZl8xMCk7IFxuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBkLmNvbG9yXG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgcmV0dXJuIGBiYXIgJHtkLm5hbWV9YDtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgIHJldHVybiB0b29sdGlwLnN0eWxlKFwidmlzaWJpbGl0eVwiLCBcInZpc2libGVcIikudGV4dChkLm5hbWUgKyBcIjogXCIgKyBkLnNjb3JlX291dF9vZl8xMCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRvb2x0aXAuc3R5bGUoXCJ0b3BcIiwgKGQzLmV2ZW50LnBhZ2VZLTEwKStcInB4XCIpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwibGVmdFwiLChkMy5ldmVudC5wYWdlWCsxMCkrXCJweFwiKS50ZXh0KGQubmFtZSArIFwiOiBcIiArIGQuc2NvcmVfb3V0X29mXzEwLnRvRml4ZWQoMikpO1xuICAgICAgICB9KVxuICAgICAgICAub24oXCJtb3VzZW91dFwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9vbHRpcC5zdHlsZShcInZpc2liaWxpdHlcIiwgXCJoaWRkZW5cIilcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoXCJpZFwiLCBmdW5jdGlvbihkKSB7ICAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGQubmFtZS5yZXBsYWNlKC9cXHMvZywgXCJcIilcbiAgICAgICAgfSlcblxuXG4gICAgLy8gQ3JlYXRlIHktYXhpc1xuICAgIHN2Zy5hcHBlbmQoXCJsaW5lXCIpXG4gICAgICAgIC5hdHRyKFwieDFcIiwgNzAwKVxuICAgICAgICAuYXR0cihcInkxXCIsIDMwKVxuICAgICAgICAuYXR0cihcIngyXCIsIDcwMClcbiAgICAgICAgLmF0dHIoXCJ5MlwiLCA1MjkpXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDIpXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiYmxhY2tcIik7XG5cbiAgICAvLyBDcmVhdGUgeC1heGlzXG4gICAgc3ZnLmFwcGVuZChcImxpbmVcIilcbiAgICAgICAgLmF0dHIoXCJ4MVwiLCAzMClcbiAgICAgICAgLmF0dHIoXCJ5MVwiLCA3NTApXG4gICAgICAgIC5hdHRyKFwieDJcIiwgNTAwKVxuICAgICAgICAuYXR0cihcInkyXCIsIDc1MClcbiAgICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMilcbiAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgXCJibGFja1wiKTtcblxuXG5cbiAgICB2YXIgdG9vbHRpcCA9IGQzLnNlbGVjdChcIi5jaGFydFwiKVxuICAgICAgICAuYXBwZW5kKFwiZGl2XCIpXG4gICAgICAgIC5zdHlsZShcInBvc2l0aW9uXCIsIFwiYWJzb2x1dGVcIilcbiAgICAgICAgLnN0eWxlKFwiZm9udC1mYW1pbHlcIiwgXCJyb2JvdG9cIilcbiAgICAgICAgLnN0eWxlKFwiZm9udC1zaXplXCIsIFwiMTRweFwiKVxuICAgICAgICAuc3R5bGUoXCJ6LWluZGV4XCIsIFwiM1wiKVxuICAgICAgICAuc3R5bGUoXCJ2aXNpYmlsaXR5XCIsIFwiaGlkZGVuXCIpXG4gICAgICAgIC5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIiwgXCJ3aGl0ZVwiKVxuICAgICAgICAuc3R5bGUoXCJ3aWR0aFwiLCBcImF1dG9cIilcbiAgICAgICAgLnN0eWxlKFwibWFyZ2luXCIsIFwiMCBhdXRvXCIpXG4gICAgICAgIC5zdHlsZShcImJvcmRlci1yYWRpdXNcIiwgXCIxMHB4XCIpXG4gICAgICAgIC5zdHlsZShcInBhZGRpbmdcIiwgXCIxMHB4XCIpXG4gICAgICAgIC5zdHlsZShcImJvcmRlclwiLCBcIjJweCBzb2xpZCBibGFja1wiKVxufTtcblxuXG5mdW5jdGlvbiBjcmVhdGVUYWJsZSAoKSB7XG5cbiAgICBjb25zdCBjb2x1bW5zID0gW1wibmFtZVwiLCBcInNjb3JlX291dF9vZl8xMFwiXVxuICAgIGNvbnN0IGNvbHVtbk5hbWVzID0gW1wiQ2F0ZWdvcmllc1wiLCBcIlNjb3JlXCJdXG4gICAgXG4gICAgbGV0IHRhYmxlID0gZDMuc2VsZWN0KCcucHJvZmlsZScpXG4gICAgICAgIC5hcHBlbmQoJ3RhYmxlJylcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBgdGFibGUgdGFibGUtJHtuYW1lfSBoaWRkZW5gKVxuICAgICAgICAuc3R5bGUoXCJib3JkZXItcmFkaXVzXCIsIFwiMTBweFwiKVxuICAgICAgICAuc3R5bGUoXCJib3JkZXJcIiwgXCIycHggc29saWQgYmxhY2tcIik7XG4gICAgbGV0IGhlYWRlciA9IHRhYmxlXG4gICAgICAgIC5hcHBlbmQoXCJoZWFkZXJcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInRhYmxlLWhlYWRlclwiKTtcbiAgICBsZXQgdGFibGVib2R5ID0gdGFibGUuYXBwZW5kKFwidGFibGVib2R5XCIpO1xuXG4gICAgaWYgKG5hbWUgPT09IFwiTmV3IFlvcmtcIikge1xuICAgICAgICB0YWJsZS5hdHRyKFwiY2xhc3NcIiwgYHRhYmxlIHRhYmxlLSR7bmFtZX1gKVxuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGFibGUuYXR0cihcImNsYXNzXCIsIGB0YWJsZSB0YWJsZS0ke25hbWV9IGhpZGRlbmApXG4gICAgfVxuXG4gICAgaGVhZGVyXG4gICAgICAgIC5hcHBlbmQoXCJ0clwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiaGVhZGVyLXdyYXBwZXJcIilcbiAgICAgICAgLnN0eWxlKFwiY29sb3JcIiwgXCJibHVlXCIpXG4gICAgICAgIC5zZWxlY3RBbGwoXCJ0aFwiKVxuICAgICAgICAuZGF0YShjb2x1bW5OYW1lcylcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZChcInRoXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBkO1xuICAgICAgICB9KVxuICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFsaWduXCIsIFwiY2VudGVyXCIpXG4gICAgICAgIC50ZXh0KGZ1bmN0aW9uKGQpe1xuICAgICAgICAgICAgcmV0dXJuIGQ7XG4gICAgICAgIH0pXG4gICAgICBcbiAgICAgICAgXG5cbiAgICBsZXQgcm93cyA9IHRhYmxlYm9keVxuICAgICAgICAuc2VsZWN0QWxsKFwidHJcIilcbiAgICAgICAgLmRhdGEoY2l0eURhdGEpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJ0clwiKTtcbiAgICBcblxuICAgIGxldCBjZWxscyA9IHJvd3Muc2VsZWN0QWxsKFwidGRcIilcbiAgICAgICAgLmRhdGEoZnVuY3Rpb24ocm93KSB7XG4gICAgICAgICAgICByZXR1cm4gY29sdW1ucy5tYXAoZnVuY3Rpb24oY29sdW1uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uOiBjb2x1bW4sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiByb3dbY29sdW1uXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJ0ZFwiKVxuICAgICAgICAudGV4dChmdW5jdGlvbihkKXtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZC52YWx1ZSA9PT0gXCJudW1iZXJcIil7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke2QudmFsdWUudG9GaXhlZCgyKX0gLzEwYFxuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBkLnZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKFwiaWRcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZC52YWx1ZSA9PT0gXCJzdHJpbmdcIil7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3RyID0gZC52YWx1ZS5yZXBsYWNlKC9cXHMvZywgXCJcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7bmV3U3RyfWBcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZC52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxufVxuXG5cbmNvbnN0IHRpdGxlRHJvcERvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlXCIpXG5jb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1saXN0XCIpXG5jb25zdCBjaXR5TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2l0eVwiKVxuXG5mdW5jdGlvbiB0b2dnbGVEcm9wZG93bihlbGUpIHtcbiAgICBjb25zdCBkcm9wZG93bkJ1dHRvbkVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tbWVudVwiKVxuICAgIGlmIChlbGUuY2xhc3NOYW1lLmluY2x1ZGVzKFwiaW5hY3RpdmVcIikpIHtcbiAgICAgICAgZWxlLmNsYXNzTmFtZSA9IGVsZS5jbGFzc05hbWUuc3BsaXQoXCIgXCIpWzBdXG4gICAgICAgIGVsZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjAgMCAxMHB4IDEwcHhcIlxuICAgICAgICBkcm9wZG93bkJ1dHRvbkVsZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEwcHggMTBweCAwIDBcIlxuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWxlLmNsYXNzTmFtZSA9IGVsZS5jbGFzc05hbWUgKyBcIiBpbmFjdGl2ZVwiXG4gICAgICAgIGVsZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEwcHhcIlxuICAgICAgICBkcm9wZG93bkJ1dHRvbkVsZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEwcHhcIlxuICAgIH1cbn1cblxuZnVuY3Rpb24gc2hvd0NoYXJ0cyhjaXR5TmFtZSkge1xuICAgIGNvbnN0IGNpdHlOYW1lUmVtb3ZlZFNwYWNlID0gY2l0eU5hbWUuc3BsaXQoXCIgXCIpWzFdXG4gICAgY29uc3QgY2l0eUNoYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2l0eU5hbWVSZW1vdmVkU3BhY2V9YClcbiBcblxuICAgIGNvbnN0IGFsbENpdHlDaGFydHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNpdHljaGFydFwiKVxuICAgIGFsbENpdHlDaGFydHMuZm9yRWFjaChjaXR5Q2hhcnQgPT4ge1xuICAgICAgICBpZiAoIWNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbC5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICAgICAgY2l0eUNoYXJ0LmNsYXNzTmFtZS5iYXNlVmFsID0gY2l0eUNoYXJ0LmNsYXNzTmFtZS5iYXNlVmFsICsgXCIgaGlkZGVuXCJcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoY2l0eUNoYXJ0LmNsYXNzTmFtZS5iYXNlVmFsLmluY2x1ZGVzKFwiaGlkZGVuXCIpKXtcbiAgICAgICAgY2l0eUNoYXJ0LmNsYXNzTmFtZS5iYXNlVmFsID0gYGNpdHljaGFydCAke2NpdHlOYW1lfWBcbiAgICB9ZWxzZSB7XG5cbiAgICAgICAgY2l0eUNoYXJ0LmNsYXNzTmFtZS5iYXNlVmFsID0gY2l0eUNoYXJ0LmNsYXNzTmFtZS5iYXNlVmFsICsgXCIgaGlkZGVuXCJcblxuICAgIH1cbn1cblxuZnVuY3Rpb24gc2hvd1RhYmxlcyhjaXR5TmFtZSkge1xuICAgIGNvbnN0IGNpdHlOYW1lUmVtb3ZlZFNwYWNlID0gY2l0eU5hbWUuc3BsaXQoXCIgXCIpWzFdXG4gICAgY29uc3QgY2l0eVRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRhYmxlLSR7Y2l0eU5hbWVSZW1vdmVkU3BhY2V9YClcblxuICAgIGNvbnN0IGFsbENpdHlUYWJsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYmxlXCIpXG4gICAgYWxsQ2l0eVRhYmxlcy5mb3JFYWNoKGNpdHlUYWJsZSA9PiB7XG4gICAgICAgIGlmICghY2l0eVRhYmxlLmNsYXNzTmFtZS5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICAgICAgY2l0eVRhYmxlLmNsYXNzTmFtZSA9IGNpdHlUYWJsZS5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxuICAgIFxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGlmIChjaXR5VGFibGUuY2xhc3NOYW1lLmluY2x1ZGVzKFwiaGlkZGVuXCIpKSB7XG4gICAgICAgIGNpdHlUYWJsZS5jbGFzc05hbWUgPSBgdGFibGUgdGFibGUtJHtjaXR5TmFtZVJlbW92ZWRTcGFjZX1gXG4gICAgfSBlbHNlIHtcblxuICAgICAgICBjaXR5VGFibGUuY2xhc3NOYW1lID0gY2l0eVRhYmxlLmNsYXNzTmFtZSArIFwiIGhpZGRlblwiXG5cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNob3dUaXRsZShjaXR5TmFtZSkge1xuICAgIGNvbnN0IGNpdHlOYW1lUmVtb3ZlZFNwYWNlID0gY2l0eU5hbWUuc3BsaXQoXCIgXCIpWzFdXG4gICAgY29uc3QgY2l0eVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRpdGxlLSR7Y2l0eU5hbWVSZW1vdmVkU3BhY2V9YClcblxuICAgIGNvbnN0IGFsbENpdHlUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2l0eXRpdGxlXCIpXG4gICAgYWxsQ2l0eVRpdGxlLmZvckVhY2goY2l0eVRpdGxlID0+IHtcbiAgICAgICAgaWYgKCFjaXR5VGl0bGUuY2xhc3NOYW1lLmluY2x1ZGVzKFwiaGlkZGVuXCIpKSB7XG4gICAgICAgICAgICBjaXR5VGl0bGUuY2xhc3NOYW1lID0gY2l0eVRpdGxlLmNsYXNzTmFtZSArIFwiIGhpZGRlblwiXG5cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoY2l0eVRpdGxlLmNsYXNzTmFtZS5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICBjaXR5VGl0bGUuY2xhc3NOYW1lID0gYGNpdHl0aXRsZSB0aXRsZS0ke2NpdHlOYW1lUmVtb3ZlZFNwYWNlfWBcbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIGNpdHlUaXRsZS5jbGFzc05hbWUgPSBjaXR5VGl0bGUuY2xhc3NOYW1lICsgXCIgaGlkZGVuXCJcblxuICAgIH1cbn1cblxuZnVuY3Rpb24gc2hvd1N1bW1hcnkoY2l0eU5hbWUpIHtcbiAgICBjb25zdCBjaXR5TmFtZVJlbW92ZWRTcGFjZSA9IGNpdHlOYW1lLnNwbGl0KFwiIFwiKVsxXVxuICAgIGNvbnN0IGNpdHlTdW1tYXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnN1bW1hcnktJHtjaXR5TmFtZVJlbW92ZWRTcGFjZX1gKVxuXG4gICAgY29uc3QgYWxsQ2l0eVN1bW1hcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNpdHlTdW1tYXJ5XCIpXG4gICAgYWxsQ2l0eVN1bW1hcnkuZm9yRWFjaChjaXR5U3VtbWFyeSA9PiB7XG4gICAgICAgIGlmICghY2l0eVN1bW1hcnkuY2xhc3NOYW1lLmluY2x1ZGVzKFwiaGlkZGVuXCIpKSB7XG4gICAgICAgICAgICBjaXR5U3VtbWFyeS5jbGFzc05hbWUgPSBjaXR5U3VtbWFyeS5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxuXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNpdHlTdW1tYXJ5LmNsYXNzTmFtZS5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICBjaXR5U3VtbWFyeS5jbGFzc05hbWUgPSBgY2l0eVN1bW1hcnkgc3VtbWFyeS0ke2NpdHlOYW1lUmVtb3ZlZFNwYWNlfWBcbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIGNpdHlTdW1tYXJ5LmNsYXNzTmFtZSA9IGNpdHlTdW1tYXJ5LmNsYXNzTmFtZSArIFwiIGhpZGRlblwiXG5cbiAgICB9XG59XG5cbi8vIGFkZCBldmVudCBsaXN0ZW5lciBvbiB0aGUgYmFycyB0byBcblxuZnVuY3Rpb24gYWRkRXZlbnRzKCkge1xuICAgIGNvbnN0IGJhckxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJhclwiKVxuICAgIFxuICAgIGJhckxpc3QuZm9yRWFjaChiYXIgPT4ge1xuICAgIFxuICAgIH0pXG4gICAgZGVidWdnZXJcbn1cblxuXG5cbmZ1bmN0aW9uIHNlbGVjdEl0ZW0oZWxlKSB7XG4gICAgY29uc3QgZWxlVGV4dCA9IGVsZS50ZXh0Q29udGVudFxuICAgIGNvbnN0IHRpdGxlRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKVxuICAgIHRpdGxlRWxlLnRleHRDb250ZW50ID0gZWxlVGV4dDtcbiAgICB0b2dnbGVEcm9wZG93bihtZW51TGlzdCk7XG5cbiAgICBzaG93Q2hhcnRzKGVsZVRleHQpXG4gICAgc2hvd1RhYmxlcyhlbGVUZXh0KVxuICAgIHNob3dUaXRsZShlbGVUZXh0KVxuICAgIHNob3dTdW1tYXJ5KGVsZVRleHQpXG59XG5cbnRpdGxlRHJvcERvd24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0b2dnbGVEcm9wZG93bihtZW51TGlzdCkpXG5cbmNpdHlMaXN0LmZvckVhY2goY2l0eSA9PiB7XG4gICAgY2l0eS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNlbGVjdEl0ZW0oY2l0eSkpXG59KVxuXG5cblxucmVuZGVyYWxsKClcblxuYWRkRXZlbnRzKClcblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==