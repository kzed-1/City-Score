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

var bostonData = [];
var name, summary, cityScore;
var citySelection = "/src/data/newyork.json";
var cities = ["/src/data/newyork.json", "/src/data/sanfran.json", "/src/data/seattle.json", "/src/data/toronto.json", "/src/data/boston.json", "/src/data/chicago.json", "/src/data/losangeles.json", "/src/data/dallas.json", "/src/data/phoenix.json", "/src/data/raleigh.json"];

function render() {
  d3.json(citySelection, function (error, data) {
    name = data.name;
    summary = data.summary;
    cityScore = data.teleport_city_score;
    bostonData = data.categories;
    createBarGraph();
    createTable();
    createTitle();
  });
}

function renderall() {
  cities.forEach(function (city) {
    citySelection = city;
    render();
  });
}

function showFirstCity() {
  // const firstCity = document.querySelector("")
  showCharts(" New York");
  showTables(" New York");
  showTitle(" New York");
}

function createTitle() {
  var cityName = document.createElement("h1");
  var bodyEle = document.querySelector("body");
  var dropDownEle = document.querySelector(".profile-chart-wrapper");
  cityName.textContent = name;

  if (name === "New York") {
    cityName.className = "citytitle title-".concat(name);
  } else {
    cityName.className = "citytitle title-".concat(name, " hidden");
  }

  bodyEle.insertBefore(cityName, dropDownEle);
}

function createBarGraph() {
  var width = 500;
  var height = 530; // Get length of dataset

  var arrayLength = bostonData.length; // length of dataset

  var maxValue = d3.max(bostonData, function (d) {
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

  svg.selectAll("rect").data(bostonData).enter().append("rect").attr("y", function (d, i) {
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
  }); // Create y-axis

  svg.append("line").attr("x1", 700).attr("y1", 30).attr("x2", 700).attr("y2", 529).attr("stroke-width", 2).attr("stroke", "black"); // Create x-axis

  svg.append("line").attr("x1", 30).attr("y1", 750).attr("x2", 500).attr("y2", 750).attr("stroke-width", 2).attr("stroke", "black");
  var tooltip = d3.select(".chart").append("div").style("position", "absolute").style("font-family", "roboto").style("font-size", "14px").style("z-index", "3").style("visibility", "hidden").style("background-color", "white").style("width", "auto").style("margin", "0 auto").style("border-radius", "10px").style("padding", "10px").style("border", "1px solid black");
}

;

function createTable() {
  var columns = ["name", "score_out_of_10"];
  var columnNames = ["Categories", "Score"];
  var table = d3.select('.profile').append('table').attr("class", "table table-".concat(name, " hidden")).style("border-radius", "10px").style("border", "1px solid black");
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
  var rows = tablebody.selectAll("tr").data(bostonData).enter().append("tr");
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
  });
}

var titleDropDown = document.querySelector('.title');
var menuList = document.querySelector('.menu-list');
var cityList = document.querySelectorAll(".city");

function showDropdown(ele) {
  if (ele.className.includes("active")) {
    ele.className = ele.className.split(" ")[0];
  } else {
    ele.className = ele.className + " active";
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

function selectItem(ele) {
  var eleText = ele.textContent;
  var titleEle = document.querySelector(".title");
  titleEle.textContent = eleText;
  showDropdown(menuList);
  showCharts(eleText);
  showTables(eleText);
  showTitle(eleText);
}

titleDropDown.addEventListener('click', function () {
  return showDropdown(menuList);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz9kYzJhIl0sIm5hbWVzIjpbImJvc3RvbkRhdGEiLCJuYW1lIiwic3VtbWFyeSIsImNpdHlTY29yZSIsImNpdHlTZWxlY3Rpb24iLCJjaXRpZXMiLCJyZW5kZXIiLCJkMyIsImpzb24iLCJlcnJvciIsImRhdGEiLCJ0ZWxlcG9ydF9jaXR5X3Njb3JlIiwiY2F0ZWdvcmllcyIsImNyZWF0ZUJhckdyYXBoIiwiY3JlYXRlVGFibGUiLCJjcmVhdGVUaXRsZSIsInJlbmRlcmFsbCIsImZvckVhY2giLCJjaXR5Iiwic2hvd0ZpcnN0Q2l0eSIsInNob3dDaGFydHMiLCJzaG93VGFibGVzIiwic2hvd1RpdGxlIiwiY2l0eU5hbWUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJib2R5RWxlIiwicXVlcnlTZWxlY3RvciIsImRyb3BEb3duRWxlIiwidGV4dENvbnRlbnQiLCJjbGFzc05hbWUiLCJpbnNlcnRCZWZvcmUiLCJ3aWR0aCIsImhlaWdodCIsImFycmF5TGVuZ3RoIiwibGVuZ3RoIiwibWF4VmFsdWUiLCJtYXgiLCJkIiwic2NvcmVfb3V0X29mXzEwIiwieF9heGlzTGVuZ3RoIiwieV9heGlzTGVuZ3RoIiwieVNjYWxlIiwic2NhbGVMaW5lYXIiLCJkb21haW4iLCJyYW5nZSIsInhTY2FsZSIsInN2ZyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJzZWxlY3RBbGwiLCJlbnRlciIsImkiLCJjb2xvciIsIm9uIiwidG9vbHRpcCIsInN0eWxlIiwidGV4dCIsImV2ZW50IiwicGFnZVkiLCJwYWdlWCIsInRvRml4ZWQiLCJjb2x1bW5zIiwiY29sdW1uTmFtZXMiLCJ0YWJsZSIsImhlYWRlciIsInRhYmxlYm9keSIsInJvd3MiLCJjZWxscyIsInJvdyIsIm1hcCIsImNvbHVtbiIsInZhbHVlIiwidGl0bGVEcm9wRG93biIsIm1lbnVMaXN0IiwiY2l0eUxpc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2hvd0Ryb3Bkb3duIiwiZWxlIiwiaW5jbHVkZXMiLCJzcGxpdCIsImNpdHlOYW1lUmVtb3ZlZFNwYWNlIiwiY2l0eUNoYXJ0IiwiYWxsQ2l0eUNoYXJ0cyIsImJhc2VWYWwiLCJjaXR5VGFibGUiLCJhbGxDaXR5VGFibGVzIiwiY2l0eVRpdGxlIiwiYWxsQ2l0eVRpdGxlIiwic2VsZWN0SXRlbSIsImVsZVRleHQiLCJ0aXRsZUVsZSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFJQSxJQUFJQSxVQUFVLEdBQUcsRUFBakI7QUFDQSxJQUFJQyxJQUFKLEVBQVVDLE9BQVYsRUFBbUJDLFNBQW5CO0FBRUEsSUFBSUMsYUFBYSxHQUFHLHdCQUFwQjtBQUVBLElBQUlDLE1BQU0sR0FBRyxDQUNULHdCQURTLEVBQ2lCLHdCQURqQixFQUMyQyx3QkFEM0MsRUFFVCx3QkFGUyxFQUVpQix1QkFGakIsRUFFMEMsd0JBRjFDLEVBR1QsMkJBSFMsRUFHb0IsdUJBSHBCLEVBRzZDLHdCQUg3QyxFQUlULHdCQUpTLENBQWI7O0FBU0EsU0FBU0MsTUFBVCxHQUFrQjtBQUNkQyxJQUFFLENBQUNDLElBQUgsQ0FBUUosYUFBUixFQUF1QixVQUFVSyxLQUFWLEVBQWlCQyxJQUFqQixFQUF1QjtBQUUxQ1QsUUFBSSxHQUFHUyxJQUFJLENBQUNULElBQVo7QUFDQUMsV0FBTyxHQUFHUSxJQUFJLENBQUNSLE9BQWY7QUFDQUMsYUFBUyxHQUFHTyxJQUFJLENBQUNDLG1CQUFqQjtBQUNBWCxjQUFVLEdBQUdVLElBQUksQ0FBQ0UsVUFBbEI7QUFDQUMsa0JBQWM7QUFDZEMsZUFBVztBQUNYQyxlQUFXO0FBQ2QsR0FURDtBQVdIOztBQUVELFNBQVNDLFNBQVQsR0FBcUI7QUFDakJYLFFBQU0sQ0FBQ1ksT0FBUCxDQUFlLFVBQUFDLElBQUksRUFBSTtBQUNuQmQsaUJBQWEsR0FBR2MsSUFBaEI7QUFDQVosVUFBTTtBQUNULEdBSEQ7QUFJSDs7QUFFRCxTQUFTYSxhQUFULEdBQTBCO0FBQ3RCO0FBQ0FDLFlBQVUsQ0FBQyxXQUFELENBQVY7QUFDQUMsWUFBVSxDQUFDLFdBQUQsQ0FBVjtBQUNBQyxXQUFTLENBQUMsV0FBRCxDQUFUO0FBQ0g7O0FBRUQsU0FBU1AsV0FBVCxHQUF3QjtBQUNwQixNQUFNUSxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFqQjtBQUNBLE1BQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDRyxhQUFULENBQXVCLE1BQXZCLENBQWhCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHSixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsd0JBQXZCLENBQXBCO0FBRUFKLFVBQVEsQ0FBQ00sV0FBVCxHQUF1QjVCLElBQXZCOztBQUVBLE1BQUlBLElBQUksS0FBSyxVQUFiLEVBQXdCO0FBQ3BCc0IsWUFBUSxDQUFDTyxTQUFULDZCQUF3QzdCLElBQXhDO0FBQ0gsR0FGRCxNQUVNO0FBQ0ZzQixZQUFRLENBQUNPLFNBQVQsNkJBQXdDN0IsSUFBeEM7QUFDSDs7QUFDRHlCLFNBQU8sQ0FBQ0ssWUFBUixDQUFxQlIsUUFBckIsRUFBK0JLLFdBQS9CO0FBQ0g7O0FBT0QsU0FBU2YsY0FBVCxHQUEwQjtBQUV0QixNQUFJbUIsS0FBSyxHQUFHLEdBQVo7QUFDQSxNQUFJQyxNQUFNLEdBQUcsR0FBYixDQUhzQixDQUt0Qjs7QUFDQSxNQUFJQyxXQUFXLEdBQUdsQyxVQUFVLENBQUNtQyxNQUE3QixDQU5zQixDQU1lOztBQUNyQyxNQUFJQyxRQUFRLEdBQUc3QixFQUFFLENBQUM4QixHQUFILENBQU9yQyxVQUFQLEVBQW1CLFVBQVVzQyxDQUFWLEVBQWE7QUFBRSxXQUFPLENBQUNBLENBQUMsQ0FBQ0MsZUFBVjtBQUE0QixHQUE5RCxDQUFmLENBUHNCLENBTzBEOztBQUNoRixNQUFJQyxZQUFZLEdBQUcsR0FBbkIsQ0FSc0IsQ0FRRTs7QUFDeEIsTUFBSUMsWUFBWSxHQUFHLEdBQW5CLENBVHNCLENBU0U7O0FBR3hCLE1BQUlDLE1BQU0sR0FBR25DLEVBQUUsQ0FBQ29DLFdBQUgsR0FDUkMsTUFEUSxDQUNELENBQUMsQ0FBRCxFQUFJUixRQUFKLENBREMsRUFFUlMsS0FGUSxDQUVGLENBQUMsQ0FBRCxFQUFJSixZQUFKLENBRkUsQ0FBYjtBQUlBLE1BQUlLLE1BQU0sR0FBR3ZDLEVBQUUsQ0FBQ29DLFdBQUgsR0FDUkMsTUFEUSxDQUNELENBQUMsQ0FBRCxFQUFJUixRQUFKLENBREMsRUFFUlMsS0FGUSxDQUVGLENBQUMsQ0FBRCxFQUFJTCxZQUFKLENBRkUsQ0FBYjtBQU1BLE1BQUlPLEdBQUcsR0FBR3hDLEVBQUUsQ0FBQ3lDLE1BQUgsQ0FBVSxRQUFWLEVBQ0xDLE1BREssQ0FDRSxLQURGLEVBRUxDLElBRkssQ0FFQSxPQUZBLEVBRVNsQixLQUZULEVBR0xrQixJQUhLLENBR0EsUUFIQSxFQUdVakIsTUFIVixDQUFWOztBQUtBLE1BQUloQyxJQUFJLEtBQUssVUFBYixFQUF3QjtBQUNwQjhDLE9BQUcsQ0FBQ0csSUFBSixDQUFTLE9BQVQsc0JBQStCakQsSUFBL0I7QUFFSCxHQUhELE1BR007QUFDRjhDLE9BQUcsQ0FBQ0csSUFBSixDQUFTLE9BQVQsc0JBQThCakQsSUFBOUI7QUFDSDs7QUFHRDhDLEtBQUcsQ0FBQ0ksU0FBSixDQUFjLE1BQWQsRUFDS3pDLElBREwsQ0FDVVYsVUFEVixFQUVLb0QsS0FGTCxHQUdLSCxNQUhMLENBR1ksTUFIWixFQUlLQyxJQUpMLENBSVUsR0FKVixFQUllLFVBQVVaLENBQVYsRUFBYWUsQ0FBYixFQUFnQjtBQUN2QixXQUFPQSxDQUFDLElBQUlaLFlBQVksR0FBR1AsV0FBbkIsQ0FBRCxHQUFtQyxFQUExQztBQUNILEdBTkwsRUFPS2dCLElBUEwsQ0FPVSxHQVBWLEVBT2UsQ0FQZixFQVFLQSxJQVJMLENBUVUsUUFSVixFQVFxQlQsWUFBWSxHQUFHUCxXQUFoQixHQUErQixDQVJuRCxFQVNLZ0IsSUFUTCxDQVNVLE9BVFYsRUFTbUIsVUFBVVosQ0FBVixFQUFhO0FBQ3hCLFdBQU9RLE1BQU0sQ0FBQ1IsQ0FBQyxDQUFDQyxlQUFILENBQWI7QUFDSCxHQVhMLEVBWUtXLElBWkwsQ0FZVSxNQVpWLEVBWWtCLFVBQVVaLENBQVYsRUFBYTtBQUN2QixXQUFPQSxDQUFDLENBQUNnQixLQUFUO0FBQ0gsR0FkTCxFQWVLSixJQWZMLENBZVUsT0FmVixFQWVtQixVQUFTWixDQUFULEVBQVk7QUFDdkIseUJBQWNBLENBQUMsQ0FBQ3JDLElBQWhCO0FBQ0gsR0FqQkwsRUFrQktzRCxFQWxCTCxDQWtCUSxXQWxCUixFQWtCcUIsVUFBU2pCLENBQVQsRUFBWTtBQUN6QixXQUFPa0IsT0FBTyxDQUFDQyxLQUFSLENBQWMsWUFBZCxFQUE0QixTQUE1QixFQUF1Q0MsSUFBdkMsQ0FBNENwQixDQUFDLENBQUNyQyxJQUFGLEdBQVMsSUFBVCxHQUFnQnFDLENBQUMsQ0FBQ0MsZUFBOUQsQ0FBUDtBQUNILEdBcEJMLEVBcUJLZ0IsRUFyQkwsQ0FxQlEsV0FyQlIsRUFxQnFCLFVBQVVqQixDQUFWLEVBQWE7QUFDMUIsV0FBT2tCLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLEtBQWQsRUFBc0JsRCxFQUFFLENBQUNvRCxLQUFILENBQVNDLEtBQVQsR0FBZSxFQUFoQixHQUFvQixJQUF6QyxFQUNGSCxLQURFLENBQ0ksTUFESixFQUNZbEQsRUFBRSxDQUFDb0QsS0FBSCxDQUFTRSxLQUFULEdBQWUsRUFBaEIsR0FBb0IsSUFEL0IsRUFDcUNILElBRHJDLENBQzBDcEIsQ0FBQyxDQUFDckMsSUFBRixHQUFTLElBQVQsR0FBZ0JxQyxDQUFDLENBQUNDLGVBQUYsQ0FBa0J1QixPQUFsQixDQUEwQixDQUExQixDQUQxRCxDQUFQO0FBRUgsR0F4QkwsRUF5QktQLEVBekJMLENBeUJRLFVBekJSLEVBeUJvQixVQUFTakIsQ0FBVCxFQUFZO0FBQ3hCLFdBQU9rQixPQUFPLENBQUNDLEtBQVIsQ0FBYyxZQUFkLEVBQTRCLFFBQTVCLENBQVA7QUFDSCxHQTNCTCxFQW5Dc0IsQ0FpRXRCOztBQUNBVixLQUFHLENBQUNFLE1BQUosQ0FBVyxNQUFYLEVBQ0tDLElBREwsQ0FDVSxJQURWLEVBQ2dCLEdBRGhCLEVBRUtBLElBRkwsQ0FFVSxJQUZWLEVBRWdCLEVBRmhCLEVBR0tBLElBSEwsQ0FHVSxJQUhWLEVBR2dCLEdBSGhCLEVBSUtBLElBSkwsQ0FJVSxJQUpWLEVBSWdCLEdBSmhCLEVBS0tBLElBTEwsQ0FLVSxjQUxWLEVBSzBCLENBTDFCLEVBTUtBLElBTkwsQ0FNVSxRQU5WLEVBTW9CLE9BTnBCLEVBbEVzQixDQTBFdEI7O0FBQ0FILEtBQUcsQ0FBQ0UsTUFBSixDQUFXLE1BQVgsRUFDS0MsSUFETCxDQUNVLElBRFYsRUFDZ0IsRUFEaEIsRUFFS0EsSUFGTCxDQUVVLElBRlYsRUFFZ0IsR0FGaEIsRUFHS0EsSUFITCxDQUdVLElBSFYsRUFHZ0IsR0FIaEIsRUFJS0EsSUFKTCxDQUlVLElBSlYsRUFJZ0IsR0FKaEIsRUFLS0EsSUFMTCxDQUtVLGNBTFYsRUFLMEIsQ0FMMUIsRUFNS0EsSUFOTCxDQU1VLFFBTlYsRUFNb0IsT0FOcEI7QUFVQSxNQUFJTSxPQUFPLEdBQUdqRCxFQUFFLENBQUN5QyxNQUFILENBQVUsUUFBVixFQUNUQyxNQURTLENBQ0YsS0FERSxFQUVUUSxLQUZTLENBRUgsVUFGRyxFQUVTLFVBRlQsRUFHVEEsS0FIUyxDQUdILGFBSEcsRUFHWSxRQUhaLEVBSVRBLEtBSlMsQ0FJSCxXQUpHLEVBSVUsTUFKVixFQUtUQSxLQUxTLENBS0gsU0FMRyxFQUtRLEdBTFIsRUFNVEEsS0FOUyxDQU1ILFlBTkcsRUFNVyxRQU5YLEVBT1RBLEtBUFMsQ0FPSCxrQkFQRyxFQU9pQixPQVBqQixFQVFUQSxLQVJTLENBUUgsT0FSRyxFQVFNLE1BUk4sRUFTVEEsS0FUUyxDQVNILFFBVEcsRUFTTyxRQVRQLEVBVVRBLEtBVlMsQ0FVSCxlQVZHLEVBVWMsTUFWZCxFQVdUQSxLQVhTLENBV0gsU0FYRyxFQVdRLE1BWFIsRUFZVEEsS0FaUyxDQVlILFFBWkcsRUFZTyxpQkFaUCxDQUFkO0FBYUg7O0FBQUE7O0FBR0QsU0FBUzNDLFdBQVQsR0FBd0I7QUFFcEIsTUFBTWlELE9BQU8sR0FBRyxDQUFDLE1BQUQsRUFBUyxpQkFBVCxDQUFoQjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxDQUFDLFlBQUQsRUFBZSxPQUFmLENBQXBCO0FBRUEsTUFBSUMsS0FBSyxHQUFHMUQsRUFBRSxDQUFDeUMsTUFBSCxDQUFVLFVBQVYsRUFDUEMsTUFETyxDQUNBLE9BREEsRUFFUEMsSUFGTyxDQUVGLE9BRkUsd0JBRXNCakQsSUFGdEIsY0FHUHdELEtBSE8sQ0FHRCxlQUhDLEVBR2dCLE1BSGhCLEVBSVBBLEtBSk8sQ0FJRCxRQUpDLEVBSVMsaUJBSlQsQ0FBWjtBQUtBLE1BQUlTLE1BQU0sR0FBR0QsS0FBSyxDQUNiaEIsTUFEUSxDQUNELFFBREMsRUFFUkMsSUFGUSxDQUVILE9BRkcsRUFFTSxjQUZOLENBQWI7QUFHQSxNQUFJaUIsU0FBUyxHQUFHRixLQUFLLENBQUNoQixNQUFOLENBQWEsV0FBYixDQUFoQjs7QUFFQSxNQUFJaEQsSUFBSSxLQUFLLFVBQWIsRUFBeUI7QUFDckJnRSxTQUFLLENBQUNmLElBQU4sQ0FBVyxPQUFYLHdCQUFtQ2pELElBQW5DO0FBRUgsR0FIRCxNQUdPO0FBQ0hnRSxTQUFLLENBQUNmLElBQU4sQ0FBVyxPQUFYLHdCQUFtQ2pELElBQW5DO0FBQ0g7O0FBRURpRSxRQUFNLENBQ0RqQixNQURMLENBQ1ksSUFEWixFQUVLQyxJQUZMLENBRVUsT0FGVixFQUVtQixnQkFGbkIsRUFHS08sS0FITCxDQUdXLE9BSFgsRUFHb0IsTUFIcEIsRUFJS04sU0FKTCxDQUllLElBSmYsRUFLS3pDLElBTEwsQ0FLVXNELFdBTFYsRUFNS1osS0FOTCxHQU9LSCxNQVBMLENBT1ksSUFQWixFQVFLQyxJQVJMLENBUVUsT0FSVixFQVFtQixVQUFVWixDQUFWLEVBQWE7QUFDeEIsV0FBT0EsQ0FBUDtBQUNILEdBVkwsRUFXS21CLEtBWEwsQ0FXVyxZQVhYLEVBV3lCLFFBWHpCLEVBWUtDLElBWkwsQ0FZVSxVQUFTcEIsQ0FBVCxFQUFXO0FBQ2IsV0FBT0EsQ0FBUDtBQUNILEdBZEw7QUFrQkEsTUFBSThCLElBQUksR0FBR0QsU0FBUyxDQUNmaEIsU0FETSxDQUNJLElBREosRUFFTnpDLElBRk0sQ0FFRFYsVUFGQyxFQUdOb0QsS0FITSxHQUlOSCxNQUpNLENBSUMsSUFKRCxDQUFYO0FBT0EsTUFBSW9CLEtBQUssR0FBR0QsSUFBSSxDQUFDakIsU0FBTCxDQUFlLElBQWYsRUFDUHpDLElBRE8sQ0FDRixVQUFTNEQsR0FBVCxFQUFjO0FBQ2hCLFdBQU9QLE9BQU8sQ0FBQ1EsR0FBUixDQUFZLFVBQVNDLE1BQVQsRUFBaUI7QUFDaEMsYUFBTztBQUNIQSxjQUFNLEVBQUVBLE1BREw7QUFFSEMsYUFBSyxFQUFFSCxHQUFHLENBQUNFLE1BQUQ7QUFGUCxPQUFQO0FBSUgsS0FMTSxDQUFQO0FBTUgsR0FSTyxFQVNQcEIsS0FUTyxHQVVQSCxNQVZPLENBVUEsSUFWQSxFQVdQUyxJQVhPLENBV0YsVUFBU3BCLENBQVQsRUFBVztBQUNiLFFBQUksT0FBT0EsQ0FBQyxDQUFDbUMsS0FBVCxLQUFtQixRQUF2QixFQUFnQztBQUM1Qix1QkFBVW5DLENBQUMsQ0FBQ21DLEtBQUYsQ0FBUVgsT0FBUixDQUFnQixDQUFoQixDQUFWO0FBQ0gsS0FGRCxNQUVNO0FBQ0YsYUFBT3hCLENBQUMsQ0FBQ21DLEtBQVQ7QUFDSDtBQUNKLEdBakJPLENBQVo7QUFrQkg7O0FBR0QsSUFBTUMsYUFBYSxHQUFHbEQsUUFBUSxDQUFDRyxhQUFULENBQXVCLFFBQXZCLENBQXRCO0FBQ0EsSUFBTWdELFFBQVEsR0FBR25ELFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixZQUF2QixDQUFqQjtBQUNBLElBQU1pRCxRQUFRLEdBQUdwRCxRQUFRLENBQUNxRCxnQkFBVCxDQUEwQixPQUExQixDQUFqQjs7QUFFQSxTQUFTQyxZQUFULENBQXNCQyxHQUF0QixFQUEyQjtBQUN2QixNQUFJQSxHQUFHLENBQUNqRCxTQUFKLENBQWNrRCxRQUFkLENBQXVCLFFBQXZCLENBQUosRUFBc0M7QUFDbENELE9BQUcsQ0FBQ2pELFNBQUosR0FBZ0JpRCxHQUFHLENBQUNqRCxTQUFKLENBQWNtRCxLQUFkLENBQW9CLEdBQXBCLEVBQXlCLENBQXpCLENBQWhCO0FBQ0gsR0FGRCxNQUVPO0FBQ0hGLE9BQUcsQ0FBQ2pELFNBQUosR0FBZ0JpRCxHQUFHLENBQUNqRCxTQUFKLEdBQWdCLFNBQWhDO0FBQ0g7QUFDSjs7QUFFRCxTQUFTVixVQUFULENBQW9CRyxRQUFwQixFQUE4QjtBQUMxQixNQUFNMkQsb0JBQW9CLEdBQUczRCxRQUFRLENBQUMwRCxLQUFULENBQWUsR0FBZixFQUFvQixDQUFwQixDQUE3QjtBQUNBLE1BQU1FLFNBQVMsR0FBRzNELFFBQVEsQ0FBQ0csYUFBVCxZQUEyQnVELG9CQUEzQixFQUFsQjtBQUdBLE1BQU1FLGFBQWEsR0FBRzVELFFBQVEsQ0FBQ3FELGdCQUFULENBQTBCLFlBQTFCLENBQXRCO0FBQ0FPLGVBQWEsQ0FBQ25FLE9BQWQsQ0FBc0IsVUFBQWtFLFNBQVMsRUFBSTtBQUMvQixRQUFJLENBQUNBLFNBQVMsQ0FBQ3JELFNBQVYsQ0FBb0J1RCxPQUFwQixDQUE0QkwsUUFBNUIsQ0FBcUMsUUFBckMsQ0FBTCxFQUFxRDtBQUNqREcsZUFBUyxDQUFDckQsU0FBVixDQUFvQnVELE9BQXBCLEdBQThCRixTQUFTLENBQUNyRCxTQUFWLENBQW9CdUQsT0FBcEIsR0FBOEIsU0FBNUQ7QUFDSDtBQUNKLEdBSkQ7O0FBTUEsTUFBSUYsU0FBUyxDQUFDckQsU0FBVixDQUFvQnVELE9BQXBCLENBQTRCTCxRQUE1QixDQUFxQyxRQUFyQyxDQUFKLEVBQW1EO0FBQy9DRyxhQUFTLENBQUNyRCxTQUFWLENBQW9CdUQsT0FBcEIsdUJBQTJDOUQsUUFBM0M7QUFDSCxHQUZELE1BRU07QUFFRjRELGFBQVMsQ0FBQ3JELFNBQVYsQ0FBb0J1RCxPQUFwQixHQUE4QkYsU0FBUyxDQUFDckQsU0FBVixDQUFvQnVELE9BQXBCLEdBQThCLFNBQTVEO0FBRUg7QUFDSjs7QUFFRCxTQUFTaEUsVUFBVCxDQUFvQkUsUUFBcEIsRUFBOEI7QUFDMUIsTUFBTTJELG9CQUFvQixHQUFHM0QsUUFBUSxDQUFDMEQsS0FBVCxDQUFlLEdBQWYsRUFBb0IsQ0FBcEIsQ0FBN0I7QUFDQSxNQUFNSyxTQUFTLEdBQUc5RCxRQUFRLENBQUNHLGFBQVQsa0JBQWlDdUQsb0JBQWpDLEVBQWxCO0FBRUEsTUFBTUssYUFBYSxHQUFHL0QsUUFBUSxDQUFDcUQsZ0JBQVQsQ0FBMEIsUUFBMUIsQ0FBdEI7QUFDQVUsZUFBYSxDQUFDdEUsT0FBZCxDQUFzQixVQUFBcUUsU0FBUyxFQUFJO0FBQy9CLFFBQUksQ0FBQ0EsU0FBUyxDQUFDeEQsU0FBVixDQUFvQmtELFFBQXBCLENBQTZCLFFBQTdCLENBQUwsRUFBNkM7QUFDekNNLGVBQVMsQ0FBQ3hELFNBQVYsR0FBc0J3RCxTQUFTLENBQUN4RCxTQUFWLEdBQXNCLFNBQTVDO0FBRUg7QUFDSixHQUxEOztBQU9BLE1BQUl3RCxTQUFTLENBQUN4RCxTQUFWLENBQW9Ca0QsUUFBcEIsQ0FBNkIsUUFBN0IsQ0FBSixFQUE0QztBQUN4Q00sYUFBUyxDQUFDeEQsU0FBVix5QkFBcUNvRCxvQkFBckM7QUFDSCxHQUZELE1BRU87QUFFSEksYUFBUyxDQUFDeEQsU0FBVixHQUFzQndELFNBQVMsQ0FBQ3hELFNBQVYsR0FBc0IsU0FBNUM7QUFFSDtBQUNKOztBQUVELFNBQVNSLFNBQVQsQ0FBbUJDLFFBQW5CLEVBQTZCO0FBQ3pCLE1BQU0yRCxvQkFBb0IsR0FBRzNELFFBQVEsQ0FBQzBELEtBQVQsQ0FBZSxHQUFmLEVBQW9CLENBQXBCLENBQTdCO0FBQ0EsTUFBTU8sU0FBUyxHQUFHaEUsUUFBUSxDQUFDRyxhQUFULGtCQUFpQ3VELG9CQUFqQyxFQUFsQjtBQUVBLE1BQU1PLFlBQVksR0FBR2pFLFFBQVEsQ0FBQ3FELGdCQUFULENBQTBCLFlBQTFCLENBQXJCO0FBQ0FZLGNBQVksQ0FBQ3hFLE9BQWIsQ0FBcUIsVUFBQXVFLFNBQVMsRUFBSTtBQUM5QixRQUFJLENBQUNBLFNBQVMsQ0FBQzFELFNBQVYsQ0FBb0JrRCxRQUFwQixDQUE2QixRQUE3QixDQUFMLEVBQTZDO0FBQ3pDUSxlQUFTLENBQUMxRCxTQUFWLEdBQXNCMEQsU0FBUyxDQUFDMUQsU0FBVixHQUFzQixTQUE1QztBQUVIO0FBQ0osR0FMRDs7QUFPQSxNQUFJMEQsU0FBUyxDQUFDMUQsU0FBVixDQUFvQmtELFFBQXBCLENBQTZCLFFBQTdCLENBQUosRUFBNEM7QUFDeENRLGFBQVMsQ0FBQzFELFNBQVYsNkJBQXlDb0Qsb0JBQXpDO0FBQ0gsR0FGRCxNQUVPO0FBRUhNLGFBQVMsQ0FBQzFELFNBQVYsR0FBc0IwRCxTQUFTLENBQUMxRCxTQUFWLEdBQXNCLFNBQTVDO0FBRUg7QUFDSjs7QUFFRCxTQUFTNEQsVUFBVCxDQUFvQlgsR0FBcEIsRUFBeUI7QUFDckIsTUFBTVksT0FBTyxHQUFHWixHQUFHLENBQUNsRCxXQUFwQjtBQUNBLE1BQU0rRCxRQUFRLEdBQUdwRSxRQUFRLENBQUNHLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBakI7QUFDQWlFLFVBQVEsQ0FBQy9ELFdBQVQsR0FBdUI4RCxPQUF2QjtBQUNBYixjQUFZLENBQUNILFFBQUQsQ0FBWjtBQUVBdkQsWUFBVSxDQUFDdUUsT0FBRCxDQUFWO0FBQ0F0RSxZQUFVLENBQUNzRSxPQUFELENBQVY7QUFDQXJFLFdBQVMsQ0FBQ3FFLE9BQUQsQ0FBVDtBQUNIOztBQUVEakIsYUFBYSxDQUFDbUIsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0M7QUFBQSxTQUFNZixZQUFZLENBQUNILFFBQUQsQ0FBbEI7QUFBQSxDQUF4QztBQUVBQyxRQUFRLENBQUMzRCxPQUFULENBQWlCLFVBQUFDLElBQUksRUFBSTtBQUNyQkEsTUFBSSxDQUFDMkUsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0I7QUFBQSxXQUFNSCxVQUFVLENBQUN4RSxJQUFELENBQWhCO0FBQUEsR0FBL0I7QUFDSCxDQUZEO0FBTUFGLFNBQVMsRzs7Ozs7Ozs7Ozs7QUN6VVQsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcblxuXG5cbmxldCBib3N0b25EYXRhID0gW11cbmxldCBuYW1lLCBzdW1tYXJ5LCBjaXR5U2NvcmU7XG5cbmxldCBjaXR5U2VsZWN0aW9uID0gXCIvc3JjL2RhdGEvbmV3eW9yay5qc29uXCJcblxubGV0IGNpdGllcyA9IFtcbiAgICBcIi9zcmMvZGF0YS9uZXd5b3JrLmpzb25cIiwgXCIvc3JjL2RhdGEvc2FuZnJhbi5qc29uXCIsIFwiL3NyYy9kYXRhL3NlYXR0bGUuanNvblwiLCBcbiAgICBcIi9zcmMvZGF0YS90b3JvbnRvLmpzb25cIiwgXCIvc3JjL2RhdGEvYm9zdG9uLmpzb25cIiwgXCIvc3JjL2RhdGEvY2hpY2Fnby5qc29uXCIsIFxuICAgIFwiL3NyYy9kYXRhL2xvc2FuZ2VsZXMuanNvblwiLCBcIi9zcmMvZGF0YS9kYWxsYXMuanNvblwiLCBcIi9zcmMvZGF0YS9waG9lbml4Lmpzb25cIiwgXG4gICAgXCIvc3JjL2RhdGEvcmFsZWlnaC5qc29uXCJcbiAgICBdIFxuXG5cblxuZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGQzLmpzb24oY2l0eVNlbGVjdGlvbiwgZnVuY3Rpb24gKGVycm9yLCBkYXRhKSB7XG5cbiAgICAgICAgbmFtZSA9IGRhdGEubmFtZVxuICAgICAgICBzdW1tYXJ5ID0gZGF0YS5zdW1tYXJ5XG4gICAgICAgIGNpdHlTY29yZSA9IGRhdGEudGVsZXBvcnRfY2l0eV9zY29yZVxuICAgICAgICBib3N0b25EYXRhID0gZGF0YS5jYXRlZ29yaWVzXG4gICAgICAgIGNyZWF0ZUJhckdyYXBoKCk7XG4gICAgICAgIGNyZWF0ZVRhYmxlKCk7XG4gICAgICAgIGNyZWF0ZVRpdGxlKCk7XG4gICAgfSlcblxufVxuXG5mdW5jdGlvbiByZW5kZXJhbGwoKSB7XG4gICAgY2l0aWVzLmZvckVhY2goY2l0eSA9PiB7XG4gICAgICAgIGNpdHlTZWxlY3Rpb24gPSBjaXR5IFxuICAgICAgICByZW5kZXIoKVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzaG93Rmlyc3RDaXR5ICgpIHtcbiAgICAvLyBjb25zdCBmaXJzdENpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiXCIpXG4gICAgc2hvd0NoYXJ0cyhcIiBOZXcgWW9ya1wiKVxuICAgIHNob3dUYWJsZXMoXCIgTmV3IFlvcmtcIilcbiAgICBzaG93VGl0bGUoXCIgTmV3IFlvcmtcIilcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGl0bGUgKCkge1xuICAgIGNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG4gICAgY29uc3QgYm9keUVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXG4gICAgY29uc3QgZHJvcERvd25FbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGUtY2hhcnQtd3JhcHBlclwiKVxuXG4gICAgY2l0eU5hbWUudGV4dENvbnRlbnQgPSBuYW1lXG5cbiAgICBpZiAobmFtZSA9PT0gXCJOZXcgWW9ya1wiKXtcbiAgICAgICAgY2l0eU5hbWUuY2xhc3NOYW1lID0gYGNpdHl0aXRsZSB0aXRsZS0ke25hbWV9YFxuICAgIH1lbHNlIHtcbiAgICAgICAgY2l0eU5hbWUuY2xhc3NOYW1lID0gYGNpdHl0aXRsZSB0aXRsZS0ke25hbWV9IGhpZGRlbmBcbiAgICB9XG4gICAgYm9keUVsZS5pbnNlcnRCZWZvcmUoY2l0eU5hbWUsIGRyb3BEb3duRWxlKVxufVxuXG5cblxuXG5cblxuZnVuY3Rpb24gY3JlYXRlQmFyR3JhcGgoKSB7XG5cbiAgICB2YXIgd2lkdGggPSA1MDA7XG4gICAgdmFyIGhlaWdodCA9IDUzMDtcblxuICAgIC8vIEdldCBsZW5ndGggb2YgZGF0YXNldFxuICAgIHZhciBhcnJheUxlbmd0aCA9IGJvc3RvbkRhdGEubGVuZ3RoOyAvLyBsZW5ndGggb2YgZGF0YXNldFxuICAgIHZhciBtYXhWYWx1ZSA9IGQzLm1heChib3N0b25EYXRhLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gK2Quc2NvcmVfb3V0X29mXzEwOyB9KTsgLy8gZ2V0IG1heGltdW1cbiAgICB2YXIgeF9heGlzTGVuZ3RoID0gNTAwOyAvLyBsZW5ndGggb2YgeC1heGlzIGluIG91ciBsYXlvdXRcbiAgICB2YXIgeV9heGlzTGVuZ3RoID0gNTAwOyAvLyBsZW5ndGggb2YgeS1heGlzIGluIG91ciBsYXlvdXRcblxuXG4gICAgdmFyIHlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgLmRvbWFpbihbMCwgbWF4VmFsdWVdKVxuICAgICAgICAucmFuZ2UoWzAsIHlfYXhpc0xlbmd0aF0pO1xuXG4gICAgdmFyIHhTY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgLmRvbWFpbihbMCwgbWF4VmFsdWVdKVxuICAgICAgICAucmFuZ2UoWzAsIHhfYXhpc0xlbmd0aF0pO1xuXG5cblxuICAgIHZhciBzdmcgPSBkMy5zZWxlY3QoXCIuY2hhcnRcIilcbiAgICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoKVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQpO1xuICAgIFxuICAgIGlmIChuYW1lID09PSBcIk5ldyBZb3JrXCIpe1xuICAgICAgICBzdmcuYXR0cihcImNsYXNzXCIsIGBjaXR5Y2hhcnQgJHtuYW1lfWApXG5cbiAgICB9ZWxzZSB7XG4gICAgICAgIHN2Zy5hdHRyKFwiY2xhc3NcIixgY2l0eWNoYXJ0ICR7bmFtZX0gaGlkZGVuYClcbiAgICB9XG5cblxuICAgIHN2Zy5zZWxlY3RBbGwoXCJyZWN0XCIpXG4gICAgICAgIC5kYXRhKGJvc3RvbkRhdGEpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIGkgKiAoeV9heGlzTGVuZ3RoIC8gYXJyYXlMZW5ndGgpICsgMzA7IFxuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcInhcIiwgMClcbiAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgKHlfYXhpc0xlbmd0aCAvIGFycmF5TGVuZ3RoKSAtIDEpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiB4U2NhbGUoZC5zY29yZV9vdXRfb2ZfMTApOyBcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoXCJmaWxsXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gZC5jb2xvclxuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBgYmFyICR7ZC5uYW1lfWA7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9vbHRpcC5zdHlsZShcInZpc2liaWxpdHlcIiwgXCJ2aXNpYmxlXCIpLnRleHQoZC5uYW1lICsgXCI6IFwiICsgZC5zY29yZV9vdXRfb2ZfMTApO1xuICAgICAgICB9KVxuICAgICAgICAub24oXCJtb3VzZW1vdmVcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiB0b29sdGlwLnN0eWxlKFwidG9wXCIsIChkMy5ldmVudC5wYWdlWS0xMCkrXCJweFwiKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcImxlZnRcIiwoZDMuZXZlbnQucGFnZVgrMTApK1wicHhcIikudGV4dChkLm5hbWUgKyBcIjogXCIgKyBkLnNjb3JlX291dF9vZl8xMC50b0ZpeGVkKDIpKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwibW91c2VvdXRcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRvb2x0aXAuc3R5bGUoXCJ2aXNpYmlsaXR5XCIsIFwiaGlkZGVuXCIpXG4gICAgICAgIH0pXG5cblxuICAgIC8vIENyZWF0ZSB5LWF4aXNcbiAgICBzdmcuYXBwZW5kKFwibGluZVwiKVxuICAgICAgICAuYXR0cihcIngxXCIsIDcwMClcbiAgICAgICAgLmF0dHIoXCJ5MVwiLCAzMClcbiAgICAgICAgLmF0dHIoXCJ4MlwiLCA3MDApXG4gICAgICAgIC5hdHRyKFwieTJcIiwgNTI5KVxuICAgICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAyKVxuICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBcImJsYWNrXCIpO1xuXG4gICAgLy8gQ3JlYXRlIHgtYXhpc1xuICAgIHN2Zy5hcHBlbmQoXCJsaW5lXCIpXG4gICAgICAgIC5hdHRyKFwieDFcIiwgMzApXG4gICAgICAgIC5hdHRyKFwieTFcIiwgNzUwKVxuICAgICAgICAuYXR0cihcIngyXCIsIDUwMClcbiAgICAgICAgLmF0dHIoXCJ5MlwiLCA3NTApXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDIpXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiYmxhY2tcIik7XG5cblxuXG4gICAgdmFyIHRvb2x0aXAgPSBkMy5zZWxlY3QoXCIuY2hhcnRcIilcbiAgICAgICAgLmFwcGVuZChcImRpdlwiKVxuICAgICAgICAuc3R5bGUoXCJwb3NpdGlvblwiLCBcImFic29sdXRlXCIpXG4gICAgICAgIC5zdHlsZShcImZvbnQtZmFtaWx5XCIsIFwicm9ib3RvXCIpXG4gICAgICAgIC5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjE0cHhcIilcbiAgICAgICAgLnN0eWxlKFwiei1pbmRleFwiLCBcIjNcIilcbiAgICAgICAgLnN0eWxlKFwidmlzaWJpbGl0eVwiLCBcImhpZGRlblwiKVxuICAgICAgICAuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwid2hpdGVcIilcbiAgICAgICAgLnN0eWxlKFwid2lkdGhcIiwgXCJhdXRvXCIpXG4gICAgICAgIC5zdHlsZShcIm1hcmdpblwiLCBcIjAgYXV0b1wiKVxuICAgICAgICAuc3R5bGUoXCJib3JkZXItcmFkaXVzXCIsIFwiMTBweFwiKVxuICAgICAgICAuc3R5bGUoXCJwYWRkaW5nXCIsIFwiMTBweFwiKVxuICAgICAgICAuc3R5bGUoXCJib3JkZXJcIiwgXCIxcHggc29saWQgYmxhY2tcIilcbn07XG5cblxuZnVuY3Rpb24gY3JlYXRlVGFibGUgKCkge1xuXG4gICAgY29uc3QgY29sdW1ucyA9IFtcIm5hbWVcIiwgXCJzY29yZV9vdXRfb2ZfMTBcIl1cbiAgICBjb25zdCBjb2x1bW5OYW1lcyA9IFtcIkNhdGVnb3JpZXNcIiwgXCJTY29yZVwiXVxuICAgIFxuICAgIGxldCB0YWJsZSA9IGQzLnNlbGVjdCgnLnByb2ZpbGUnKVxuICAgICAgICAuYXBwZW5kKCd0YWJsZScpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgYHRhYmxlIHRhYmxlLSR7bmFtZX0gaGlkZGVuYClcbiAgICAgICAgLnN0eWxlKFwiYm9yZGVyLXJhZGl1c1wiLCBcIjEwcHhcIilcbiAgICAgICAgLnN0eWxlKFwiYm9yZGVyXCIsIFwiMXB4IHNvbGlkIGJsYWNrXCIpO1xuICAgIGxldCBoZWFkZXIgPSB0YWJsZVxuICAgICAgICAuYXBwZW5kKFwiaGVhZGVyXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0YWJsZS1oZWFkZXJcIik7XG4gICAgbGV0IHRhYmxlYm9keSA9IHRhYmxlLmFwcGVuZChcInRhYmxlYm9keVwiKTtcblxuICAgIGlmIChuYW1lID09PSBcIk5ldyBZb3JrXCIpIHtcbiAgICAgICAgdGFibGUuYXR0cihcImNsYXNzXCIsIGB0YWJsZSB0YWJsZS0ke25hbWV9YClcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRhYmxlLmF0dHIoXCJjbGFzc1wiLCBgdGFibGUgdGFibGUtJHtuYW1lfSBoaWRkZW5gKVxuICAgIH1cblxuICAgIGhlYWRlclxuICAgICAgICAuYXBwZW5kKFwidHJcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImhlYWRlci13cmFwcGVyXCIpXG4gICAgICAgIC5zdHlsZShcImNvbG9yXCIsIFwiYmx1ZVwiKVxuICAgICAgICAuc2VsZWN0QWxsKFwidGhcIilcbiAgICAgICAgLmRhdGEoY29sdW1uTmFtZXMpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJ0aFwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gZDtcbiAgICAgICAgfSlcbiAgICAgICAgLnN0eWxlKFwidGV4dC1hbGlnblwiLCBcImNlbnRlclwiKVxuICAgICAgICAudGV4dChmdW5jdGlvbihkKXtcbiAgICAgICAgICAgIHJldHVybiBkO1xuICAgICAgICB9KVxuICAgICAgXG4gICAgICAgIFxuXG4gICAgbGV0IHJvd3MgPSB0YWJsZWJvZHlcbiAgICAgICAgLnNlbGVjdEFsbChcInRyXCIpXG4gICAgICAgIC5kYXRhKGJvc3RvbkRhdGEpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJ0clwiKTtcbiAgICBcblxuICAgIGxldCBjZWxscyA9IHJvd3Muc2VsZWN0QWxsKFwidGRcIilcbiAgICAgICAgLmRhdGEoZnVuY3Rpb24ocm93KSB7XG4gICAgICAgICAgICByZXR1cm4gY29sdW1ucy5tYXAoZnVuY3Rpb24oY29sdW1uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uOiBjb2x1bW4sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiByb3dbY29sdW1uXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJ0ZFwiKVxuICAgICAgICAudGV4dChmdW5jdGlvbihkKXtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZC52YWx1ZSA9PT0gXCJudW1iZXJcIil7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke2QudmFsdWUudG9GaXhlZCgyKX0gLzEwYFxuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBkLnZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG59XG5cblxuY29uc3QgdGl0bGVEcm9wRG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpXG5jb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWxpc3QnKVxuY29uc3QgY2l0eUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNpdHlcIilcblxuZnVuY3Rpb24gc2hvd0Ryb3Bkb3duKGVsZSkge1xuICAgIGlmIChlbGUuY2xhc3NOYW1lLmluY2x1ZGVzKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgIGVsZS5jbGFzc05hbWUgPSBlbGUuY2xhc3NOYW1lLnNwbGl0KFwiIFwiKVswXVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZS5jbGFzc05hbWUgPSBlbGUuY2xhc3NOYW1lICsgXCIgYWN0aXZlXCJcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNob3dDaGFydHMoY2l0eU5hbWUpIHtcbiAgICBjb25zdCBjaXR5TmFtZVJlbW92ZWRTcGFjZSA9IGNpdHlOYW1lLnNwbGl0KFwiIFwiKVsxXVxuICAgIGNvbnN0IGNpdHlDaGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NpdHlOYW1lUmVtb3ZlZFNwYWNlfWApXG4gXG5cbiAgICBjb25zdCBhbGxDaXR5Q2hhcnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaXR5Y2hhcnRcIilcbiAgICBhbGxDaXR5Q2hhcnRzLmZvckVhY2goY2l0eUNoYXJ0ID0+IHtcbiAgICAgICAgaWYgKCFjaXR5Q2hhcnQuY2xhc3NOYW1lLmJhc2VWYWwuaW5jbHVkZXMoXCJoaWRkZW5cIikpIHtcbiAgICAgICAgICAgIGNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbCA9IGNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbCArIFwiIGhpZGRlblwiXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbC5pbmNsdWRlcyhcImhpZGRlblwiKSl7XG4gICAgICAgIGNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbCA9IGBjaXR5Y2hhcnQgJHtjaXR5TmFtZX1gXG4gICAgfWVsc2Uge1xuXG4gICAgICAgIGNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbCA9IGNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbCArIFwiIGhpZGRlblwiXG5cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNob3dUYWJsZXMoY2l0eU5hbWUpIHtcbiAgICBjb25zdCBjaXR5TmFtZVJlbW92ZWRTcGFjZSA9IGNpdHlOYW1lLnNwbGl0KFwiIFwiKVsxXVxuICAgIGNvbnN0IGNpdHlUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50YWJsZS0ke2NpdHlOYW1lUmVtb3ZlZFNwYWNlfWApXG5cbiAgICBjb25zdCBhbGxDaXR5VGFibGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJsZVwiKVxuICAgIGFsbENpdHlUYWJsZXMuZm9yRWFjaChjaXR5VGFibGUgPT4ge1xuICAgICAgICBpZiAoIWNpdHlUYWJsZS5jbGFzc05hbWUuaW5jbHVkZXMoXCJoaWRkZW5cIikpIHtcbiAgICAgICAgICAgIGNpdHlUYWJsZS5jbGFzc05hbWUgPSBjaXR5VGFibGUuY2xhc3NOYW1lICsgXCIgaGlkZGVuXCJcbiAgICBcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoY2l0eVRhYmxlLmNsYXNzTmFtZS5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICBjaXR5VGFibGUuY2xhc3NOYW1lID0gYHRhYmxlIHRhYmxlLSR7Y2l0eU5hbWVSZW1vdmVkU3BhY2V9YFxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgY2l0eVRhYmxlLmNsYXNzTmFtZSA9IGNpdHlUYWJsZS5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxuXG4gICAgfVxufVxuXG5mdW5jdGlvbiBzaG93VGl0bGUoY2l0eU5hbWUpIHtcbiAgICBjb25zdCBjaXR5TmFtZVJlbW92ZWRTcGFjZSA9IGNpdHlOYW1lLnNwbGl0KFwiIFwiKVsxXVxuICAgIGNvbnN0IGNpdHlUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50aXRsZS0ke2NpdHlOYW1lUmVtb3ZlZFNwYWNlfWApXG5cbiAgICBjb25zdCBhbGxDaXR5VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNpdHl0aXRsZVwiKVxuICAgIGFsbENpdHlUaXRsZS5mb3JFYWNoKGNpdHlUaXRsZSA9PiB7XG4gICAgICAgIGlmICghY2l0eVRpdGxlLmNsYXNzTmFtZS5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICAgICAgY2l0eVRpdGxlLmNsYXNzTmFtZSA9IGNpdHlUaXRsZS5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxuXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNpdHlUaXRsZS5jbGFzc05hbWUuaW5jbHVkZXMoXCJoaWRkZW5cIikpIHtcbiAgICAgICAgY2l0eVRpdGxlLmNsYXNzTmFtZSA9IGBjaXR5dGl0bGUgdGl0bGUtJHtjaXR5TmFtZVJlbW92ZWRTcGFjZX1gXG4gICAgfSBlbHNlIHtcblxuICAgICAgICBjaXR5VGl0bGUuY2xhc3NOYW1lID0gY2l0eVRpdGxlLmNsYXNzTmFtZSArIFwiIGhpZGRlblwiXG5cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNlbGVjdEl0ZW0oZWxlKSB7XG4gICAgY29uc3QgZWxlVGV4dCA9IGVsZS50ZXh0Q29udGVudFxuICAgIGNvbnN0IHRpdGxlRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKVxuICAgIHRpdGxlRWxlLnRleHRDb250ZW50ID0gZWxlVGV4dDtcbiAgICBzaG93RHJvcGRvd24obWVudUxpc3QpO1xuXG4gICAgc2hvd0NoYXJ0cyhlbGVUZXh0KVxuICAgIHNob3dUYWJsZXMoZWxlVGV4dClcbiAgICBzaG93VGl0bGUoZWxlVGV4dClcbn1cblxudGl0bGVEcm9wRG93bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNob3dEcm9wZG93bihtZW51TGlzdCkpXG5cbmNpdHlMaXN0LmZvckVhY2goY2l0eSA9PiB7XG4gICAgY2l0eS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNlbGVjdEl0ZW0oY2l0eSkpXG59KVxuXG5cblxucmVuZGVyYWxsKClcblxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9