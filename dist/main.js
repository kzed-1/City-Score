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
var cities = ["/src/data/newyork.json", "/src/data/sanfran.json", "/src/data/seattle.json", "/src/data/toronto.json", "/src/data/boston.json"];

function render() {
  d3.json(citySelection, function (error, data) {
    name = data.name;
    summary = data.summary;
    cityScore = data.teleport_city_score;
    bostonData = data.categories;
    createBarGraph();
    createTable();
  });
}

function renderall() {
  cities.forEach(function (city) {
    citySelection = city;
    render();
  });
}

function createBarGraph() {
  // Width and height of SVG
  var w = 500;
  var h = 530; // Get length of dataset

  var arrayLength = bostonData.length; // length of dataset

  var maxValue = d3.max(bostonData, function (d) {
    return +d.score_out_of_10;
  }); // get maximum

  var x_axisLength = 500; // length of x-axis in our layout

  var y_axisLength = 500; // length of y-axis in our layout
  // Use a scale for the height and width of the visualization

  var yScale = d3.scaleLinear().domain([0, maxValue]).range([0, y_axisLength]);
  var xScale = d3.scaleLinear().domain([0, maxValue]).range([0, x_axisLength]); //Create SVG element

  var svg = d3.select(".chart").append("svg").attr("width", w).attr("height", h);
  svg.attr("class", "citychart ".concat(name, " hidden")); // .style("display" , "none")
  // Select and generate rectangle elements

  svg.selectAll("rect").data(bostonData).enter().append("rect") // .attr("x", function (d, i) {
  //     return i * (x_axisLength / arrayLength) + 30; // Set x coordinate of rectangle to index of data value (i) *25
  // })
  .attr("y", function (d, i) {
    return i * (y_axisLength / arrayLength) + 30; // Set x coordinate of rectangle to index of data value (i) *25
  }) // .attr("y", function (d) {
  //     return h - yScale(d.score_out_of_10); // Set y coordinate of rect using the y scale
  // })
  .attr("x", function (d) {
    // debugger
    // return w - xScale(d.score_out_of_10); // Set x coordinate of rect using the x scale
    return 0;
  }) // .attr("width", (x_axisLength / arrayLength) - 1)
  // .attr("height", function (d) {
  //     return yScale(d.score_out_of_10); // Set height of using the scale
  // })
  .attr("height", y_axisLength / arrayLength - 1).attr("width", function (d) {
    return xScale(d.score_out_of_10); // Set height of using the scale
  }).attr("fill", function (d) {
    return d.color;
  }).attr("class", function (d) {
    return "bar ".concat(d.name);
  }).on("mouseover", function (d) {
    return tooltip.style("visibility", "visible").text(d.name + ": " + d.score_out_of_10);
  }).on("mousemove", function (d) {
    return tooltip.style("top", d3.event.pageY - 10 + "px").style("left", d3.event.pageX + 10 + "px").text(d.name + ": " + d.score_out_of_10);
  }).on("mouseout", function (d) {
    return tooltip.style("visibility", "hidden");
  }); // Create y-axis

  svg.append("line").attr("x1", 700).attr("y1", 30).attr("x2", 700).attr("y2", 529).attr("stroke-width", 2).attr("stroke", "black"); // Create x-axis

  svg.append("line").attr("x1", 30).attr("y1", 750).attr("x2", 500).attr("y2", 750).attr("stroke-width", 2).attr("stroke", "black"); // y-axis label

  svg.append("text").attr("class", "y label").attr("text-anchor", "end").text("score out of 10").attr("transform", "translate(20, 20) rotate(-90)").attr("font-size", "14").attr("font-family", "'Open Sans', sans-serif");
  var tooltip = d3.select(".chart").append("div").style("position", "absolute").style("font-family", "roboto").style("font-size", "14px").style("z-index", "3").style("visibility", "hidden").style("background-color", "white").style("width", "auto").style("margin", "0 auto");
}

;

function createTable() {
  var columns = ["name", "score_out_of_10"];
  var columnNames = ["Categories", "Score out of 10"];
  var table = d3.select('.profile').append('table').attr("class", "table table-".concat(name, " hidden")).style("border-radius", "10px").style("border", "1px solid black");
  var header = table.append("header").attr("class", "table-header");
  var tablebody = table.append("tablebody");
  header.append("tr").attr("class", "header-wrapper").style("color", "blue").selectAll("th").data(columnNames).enter().append("th").attr("class", function (d) {
    return d;
  }).style("text-align", "center").text(function (d) {
    debugger;
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
      return d.value.fix(2);
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

function selectItem(ele) {
  var eleText = ele.textContent;
  var titleEle = document.querySelector(".title");
  titleEle.textContent = eleText;
  showDropdown(menuList);
  showCharts(eleText);
  showTables(eleText);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJib3N0b25EYXRhIiwibmFtZSIsInN1bW1hcnkiLCJjaXR5U2NvcmUiLCJjaXR5U2VsZWN0aW9uIiwiY2l0aWVzIiwicmVuZGVyIiwiZDMiLCJqc29uIiwiZXJyb3IiLCJkYXRhIiwidGVsZXBvcnRfY2l0eV9zY29yZSIsImNhdGVnb3JpZXMiLCJjcmVhdGVCYXJHcmFwaCIsImNyZWF0ZVRhYmxlIiwicmVuZGVyYWxsIiwiZm9yRWFjaCIsImNpdHkiLCJ3IiwiaCIsImFycmF5TGVuZ3RoIiwibGVuZ3RoIiwibWF4VmFsdWUiLCJtYXgiLCJkIiwic2NvcmVfb3V0X29mXzEwIiwieF9heGlzTGVuZ3RoIiwieV9heGlzTGVuZ3RoIiwieVNjYWxlIiwic2NhbGVMaW5lYXIiLCJkb21haW4iLCJyYW5nZSIsInhTY2FsZSIsInN2ZyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJzZWxlY3RBbGwiLCJlbnRlciIsImkiLCJjb2xvciIsIm9uIiwidG9vbHRpcCIsInN0eWxlIiwidGV4dCIsImV2ZW50IiwicGFnZVkiLCJwYWdlWCIsImNvbHVtbnMiLCJjb2x1bW5OYW1lcyIsInRhYmxlIiwiaGVhZGVyIiwidGFibGVib2R5Iiwicm93cyIsImNlbGxzIiwicm93IiwibWFwIiwiY29sdW1uIiwidmFsdWUiLCJmaXgiLCJ0aXRsZURyb3BEb3duIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVudUxpc3QiLCJjaXR5TGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzaG93RHJvcGRvd24iLCJlbGUiLCJjbGFzc05hbWUiLCJpbmNsdWRlcyIsInNwbGl0Iiwic2hvd0NoYXJ0cyIsImNpdHlOYW1lIiwiY2l0eU5hbWVSZW1vdmVkU3BhY2UiLCJjaXR5Q2hhcnQiLCJhbGxDaXR5Q2hhcnRzIiwiYmFzZVZhbCIsInNob3dUYWJsZXMiLCJjaXR5VGFibGUiLCJhbGxDaXR5VGFibGVzIiwic2VsZWN0SXRlbSIsImVsZVRleHQiLCJ0ZXh0Q29udGVudCIsInRpdGxlRWxlIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUlBLElBQUlBLFVBQVUsR0FBRyxFQUFqQjtBQUNBLElBQUlDLElBQUosRUFBVUMsT0FBVixFQUFtQkMsU0FBbkI7QUFFQSxJQUFJQyxhQUFhLEdBQUcsd0JBQXBCO0FBRUEsSUFBSUMsTUFBTSxHQUFHLENBQUMsd0JBQUQsRUFBMkIsd0JBQTNCLEVBQXFELHdCQUFyRCxFQUErRSx3QkFBL0UsRUFBeUcsdUJBQXpHLENBQWI7O0FBSUEsU0FBU0MsTUFBVCxHQUFrQjtBQUNkQyxJQUFFLENBQUNDLElBQUgsQ0FBUUosYUFBUixFQUF1QixVQUFV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OiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuXG5cblxubGV0IGJvc3RvbkRhdGEgPSBbXVxubGV0IG5hbWUsIHN1bW1hcnksIGNpdHlTY29yZTtcblxubGV0IGNpdHlTZWxlY3Rpb24gPSBcIi9zcmMvZGF0YS9uZXd5b3JrLmpzb25cIlxuXG5sZXQgY2l0aWVzID0gW1wiL3NyYy9kYXRhL25ld3lvcmsuanNvblwiLCBcIi9zcmMvZGF0YS9zYW5mcmFuLmpzb25cIiwgXCIvc3JjL2RhdGEvc2VhdHRsZS5qc29uXCIsIFwiL3NyYy9kYXRhL3Rvcm9udG8uanNvblwiLCBcIi9zcmMvZGF0YS9ib3N0b24uanNvblwiXSBcblxuXG5cbmZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBkMy5qc29uKGNpdHlTZWxlY3Rpb24sIGZ1bmN0aW9uIChlcnJvciwgZGF0YSkge1xuXG4gICAgICAgIG5hbWUgPSBkYXRhLm5hbWVcbiAgICAgICAgc3VtbWFyeSA9IGRhdGEuc3VtbWFyeVxuICAgICAgICBjaXR5U2NvcmUgPSBkYXRhLnRlbGVwb3J0X2NpdHlfc2NvcmVcbiAgICAgICAgYm9zdG9uRGF0YSA9IGRhdGEuY2F0ZWdvcmllc1xuICAgICAgICBjcmVhdGVCYXJHcmFwaCgpO1xuICAgICAgICBjcmVhdGVUYWJsZSgpO1xuICAgIH0pXG5cbn1cblxuZnVuY3Rpb24gcmVuZGVyYWxsKCkge1xuICAgIGNpdGllcy5mb3JFYWNoKGNpdHkgPT4ge1xuICAgICAgICBjaXR5U2VsZWN0aW9uID0gY2l0eSBcbiAgICAgICAgcmVuZGVyKClcbiAgICB9KVxufVxuXG5cblxuXG5cblxuZnVuY3Rpb24gY3JlYXRlQmFyR3JhcGgoKSB7XG4gICAgLy8gV2lkdGggYW5kIGhlaWdodCBvZiBTVkdcbiAgICB2YXIgdyA9IDUwMDtcbiAgICB2YXIgaCA9IDUzMDtcblxuICAgIC8vIEdldCBsZW5ndGggb2YgZGF0YXNldFxuICAgIHZhciBhcnJheUxlbmd0aCA9IGJvc3RvbkRhdGEubGVuZ3RoOyAvLyBsZW5ndGggb2YgZGF0YXNldFxuICAgIHZhciBtYXhWYWx1ZSA9IGQzLm1heChib3N0b25EYXRhLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gK2Quc2NvcmVfb3V0X29mXzEwOyB9KTsgLy8gZ2V0IG1heGltdW1cbiAgICB2YXIgeF9heGlzTGVuZ3RoID0gNTAwOyAvLyBsZW5ndGggb2YgeC1heGlzIGluIG91ciBsYXlvdXRcbiAgICB2YXIgeV9heGlzTGVuZ3RoID0gNTAwOyAvLyBsZW5ndGggb2YgeS1heGlzIGluIG91ciBsYXlvdXRcblxuICAgIC8vIFVzZSBhIHNjYWxlIGZvciB0aGUgaGVpZ2h0IGFuZCB3aWR0aCBvZiB0aGUgdmlzdWFsaXphdGlvblxuICAgIHZhciB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgIC5kb21haW4oWzAsIG1heFZhbHVlXSlcbiAgICAgICAgLnJhbmdlKFswLCB5X2F4aXNMZW5ndGhdKTtcblxuICAgIHZhciB4U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgIC5kb21haW4oWzAsIG1heFZhbHVlXSlcbiAgICAgICAgLnJhbmdlKFswLCB4X2F4aXNMZW5ndGhdKTtcblxuXG5cbiAgICAvL0NyZWF0ZSBTVkcgZWxlbWVudFxuICAgIHZhciBzdmcgPSBkMy5zZWxlY3QoXCIuY2hhcnRcIilcbiAgICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIHcpXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGgpO1xuICAgIFxuICAgIHN2Zy5hdHRyKFwiY2xhc3NcIixgY2l0eWNoYXJ0ICR7bmFtZX0gaGlkZGVuYClcbiAgICAgICAgLy8gLnN0eWxlKFwiZGlzcGxheVwiICwgXCJub25lXCIpXG5cbiAgICAvLyBTZWxlY3QgYW5kIGdlbmVyYXRlIHJlY3RhbmdsZSBlbGVtZW50c1xuICAgIHN2Zy5zZWxlY3RBbGwoXCJyZWN0XCIpXG4gICAgICAgIC5kYXRhKGJvc3RvbkRhdGEpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAgIC8vIC5hdHRyKFwieFwiLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAvLyAgICAgcmV0dXJuIGkgKiAoeF9heGlzTGVuZ3RoIC8gYXJyYXlMZW5ndGgpICsgMzA7IC8vIFNldCB4IGNvb3JkaW5hdGUgb2YgcmVjdGFuZ2xlIHRvIGluZGV4IG9mIGRhdGEgdmFsdWUgKGkpICoyNVxuICAgICAgICAvLyB9KVxuICAgICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiBpICogKHlfYXhpc0xlbmd0aCAvIGFycmF5TGVuZ3RoKSArIDMwOyAvLyBTZXQgeCBjb29yZGluYXRlIG9mIHJlY3RhbmdsZSB0byBpbmRleCBvZiBkYXRhIHZhbHVlIChpKSAqMjVcbiAgICAgICAgfSlcbiAgICAgICAgLy8gLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIC8vICAgICByZXR1cm4gaCAtIHlTY2FsZShkLnNjb3JlX291dF9vZl8xMCk7IC8vIFNldCB5IGNvb3JkaW5hdGUgb2YgcmVjdCB1c2luZyB0aGUgeSBzY2FsZVxuICAgICAgICAvLyB9KVxuICAgICAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICAvLyByZXR1cm4gdyAtIHhTY2FsZShkLnNjb3JlX291dF9vZl8xMCk7IC8vIFNldCB4IGNvb3JkaW5hdGUgb2YgcmVjdCB1c2luZyB0aGUgeCBzY2FsZVxuICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgfSlcbiAgICAgICAgLy8gLmF0dHIoXCJ3aWR0aFwiLCAoeF9heGlzTGVuZ3RoIC8gYXJyYXlMZW5ndGgpIC0gMSlcbiAgICAgICAgLy8gLmF0dHIoXCJoZWlnaHRcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgLy8gICAgIHJldHVybiB5U2NhbGUoZC5zY29yZV9vdXRfb2ZfMTApOyAvLyBTZXQgaGVpZ2h0IG9mIHVzaW5nIHRoZSBzY2FsZVxuICAgICAgICAvLyB9KVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCAoeV9heGlzTGVuZ3RoIC8gYXJyYXlMZW5ndGgpIC0gMSlcbiAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIHhTY2FsZShkLnNjb3JlX291dF9vZl8xMCk7IC8vIFNldCBoZWlnaHQgb2YgdXNpbmcgdGhlIHNjYWxlXG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKFwiZmlsbFwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIGQuY29sb3JcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICByZXR1cm4gYGJhciAke2QubmFtZX1gO1xuICAgICAgICB9KVxuICAgICAgICAub24oXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRvb2x0aXAuc3R5bGUoXCJ2aXNpYmlsaXR5XCIsIFwidmlzaWJsZVwiKS50ZXh0KGQubmFtZSArIFwiOiBcIiArIGQuc2NvcmVfb3V0X29mXzEwKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwibW91c2Vtb3ZlXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9vbHRpcC5zdHlsZShcInRvcFwiLCAoZDMuZXZlbnQucGFnZVktMTApK1wicHhcIilcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJsZWZ0XCIsKGQzLmV2ZW50LnBhZ2VYKzEwKStcInB4XCIpLnRleHQoZC5uYW1lICsgXCI6IFwiICsgZC5zY29yZV9vdXRfb2ZfMTApO1xuICAgICAgICB9KVxuICAgICAgICAub24oXCJtb3VzZW91dFwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9vbHRpcC5zdHlsZShcInZpc2liaWxpdHlcIiwgXCJoaWRkZW5cIilcbiAgICAgICAgfSlcblxuXG4gICAgLy8gQ3JlYXRlIHktYXhpc1xuICAgIHN2Zy5hcHBlbmQoXCJsaW5lXCIpXG4gICAgICAgIC5hdHRyKFwieDFcIiwgNzAwKVxuICAgICAgICAuYXR0cihcInkxXCIsIDMwKVxuICAgICAgICAuYXR0cihcIngyXCIsIDcwMClcbiAgICAgICAgLmF0dHIoXCJ5MlwiLCA1MjkpXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDIpXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiYmxhY2tcIik7XG5cbiAgICAvLyBDcmVhdGUgeC1heGlzXG4gICAgc3ZnLmFwcGVuZChcImxpbmVcIilcbiAgICAgICAgLmF0dHIoXCJ4MVwiLCAzMClcbiAgICAgICAgLmF0dHIoXCJ5MVwiLCA3NTApXG4gICAgICAgIC5hdHRyKFwieDJcIiwgNTAwKVxuICAgICAgICAuYXR0cihcInkyXCIsIDc1MClcbiAgICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMilcbiAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgXCJibGFja1wiKTtcblxuICAgIC8vIHktYXhpcyBsYWJlbFxuICAgIHN2Zy5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ5IGxhYmVsXCIpXG4gICAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIilcbiAgICAgICAgLnRleHQoXCJzY29yZSBvdXQgb2YgMTBcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMjAsIDIwKSByb3RhdGUoLTkwKVwiKVxuICAgICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjE0XCIpXG4gICAgICAgIC5hdHRyKFwiZm9udC1mYW1pbHlcIiwgXCInT3BlbiBTYW5zJywgc2Fucy1zZXJpZlwiKTtcblxuICAgIHZhciB0b29sdGlwID0gZDMuc2VsZWN0KFwiLmNoYXJ0XCIpXG4gICAgICAgIC5hcHBlbmQoXCJkaXZcIilcbiAgICAgICAgLnN0eWxlKFwicG9zaXRpb25cIiwgXCJhYnNvbHV0ZVwiKVxuICAgICAgICAuc3R5bGUoXCJmb250LWZhbWlseVwiLCBcInJvYm90b1wiKVxuICAgICAgICAuc3R5bGUoXCJmb250LXNpemVcIiwgXCIxNHB4XCIpXG4gICAgICAgIC5zdHlsZShcInotaW5kZXhcIiwgXCIzXCIpXG4gICAgICAgIC5zdHlsZShcInZpc2liaWxpdHlcIiwgXCJoaWRkZW5cIilcbiAgICAgICAgLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcIndoaXRlXCIpXG4gICAgICAgIC5zdHlsZShcIndpZHRoXCIsIFwiYXV0b1wiKVxuICAgICAgICAuc3R5bGUoXCJtYXJnaW5cIiwgXCIwIGF1dG9cIilcbn07XG5cblxuZnVuY3Rpb24gY3JlYXRlVGFibGUgKCkge1xuXG5cbiAgICBjb25zdCBjb2x1bW5zID0gW1wibmFtZVwiLCBcInNjb3JlX291dF9vZl8xMFwiXVxuICAgIGNvbnN0IGNvbHVtbk5hbWVzID0gW1wiQ2F0ZWdvcmllc1wiLCBcIlNjb3JlIG91dCBvZiAxMFwiXVxuICAgIFxuICAgIGxldCB0YWJsZSA9IGQzLnNlbGVjdCgnLnByb2ZpbGUnKVxuICAgICAgICAuYXBwZW5kKCd0YWJsZScpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgYHRhYmxlIHRhYmxlLSR7bmFtZX0gaGlkZGVuYClcbiAgICAgICAgLnN0eWxlKFwiYm9yZGVyLXJhZGl1c1wiLCBcIjEwcHhcIilcbiAgICAgICAgLnN0eWxlKFwiYm9yZGVyXCIsIFwiMXB4IHNvbGlkIGJsYWNrXCIpO1xuICAgIGxldCBoZWFkZXIgPSB0YWJsZVxuICAgICAgICAuYXBwZW5kKFwiaGVhZGVyXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0YWJsZS1oZWFkZXJcIik7XG4gICAgbGV0IHRhYmxlYm9keSA9IHRhYmxlLmFwcGVuZChcInRhYmxlYm9keVwiKTtcblxuICAgIGhlYWRlclxuICAgICAgICAuYXBwZW5kKFwidHJcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImhlYWRlci13cmFwcGVyXCIpXG4gICAgICAgIC5zdHlsZShcImNvbG9yXCIsIFwiYmx1ZVwiKVxuICAgICAgICAuc2VsZWN0QWxsKFwidGhcIilcbiAgICAgICAgLmRhdGEoY29sdW1uTmFtZXMpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJ0aFwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gZDtcbiAgICAgICAgfSlcbiAgICAgICAgLnN0eWxlKFwidGV4dC1hbGlnblwiLCBcImNlbnRlclwiKVxuICAgICAgICAudGV4dChmdW5jdGlvbihkKXtcbiAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICByZXR1cm4gZDtcbiAgICAgICAgfSlcbiAgICAgIFxuICAgICAgICBcblxuICAgIGxldCByb3dzID0gdGFibGVib2R5XG4gICAgICAgIC5zZWxlY3RBbGwoXCJ0clwiKVxuICAgICAgICAuZGF0YShib3N0b25EYXRhKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwidHJcIik7XG4gICAgXG5cbiAgICBsZXQgY2VsbHMgPSByb3dzLnNlbGVjdEFsbChcInRkXCIpXG4gICAgICAgIC5kYXRhKGZ1bmN0aW9uKHJvdykge1xuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbnMubWFwKGZ1bmN0aW9uKGNvbHVtbikge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbjogY29sdW1uLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcm93W2NvbHVtbl1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwidGRcIilcbiAgICAgICAgLnRleHQoZnVuY3Rpb24oZCl7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGQudmFsdWUgPT09IFwibnVtYmVyXCIpe1xuICAgICAgICAgICAgICAgIHJldHVybiBkLnZhbHVlLmZpeCgyKVxuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBkLnZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG59XG5cblxuY29uc3QgdGl0bGVEcm9wRG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpXG5jb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWxpc3QnKVxuY29uc3QgY2l0eUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNpdHlcIilcblxuZnVuY3Rpb24gc2hvd0Ryb3Bkb3duKGVsZSkge1xuICAgIGlmIChlbGUuY2xhc3NOYW1lLmluY2x1ZGVzKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgIGVsZS5jbGFzc05hbWUgPSBlbGUuY2xhc3NOYW1lLnNwbGl0KFwiIFwiKVswXVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZS5jbGFzc05hbWUgPSBlbGUuY2xhc3NOYW1lICsgXCIgYWN0aXZlXCJcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNob3dDaGFydHMoY2l0eU5hbWUpIHtcbiAgICBjb25zdCBjaXR5TmFtZVJlbW92ZWRTcGFjZSA9IGNpdHlOYW1lLnNwbGl0KFwiIFwiKVsxXVxuICAgIGNvbnN0IGNpdHlDaGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NpdHlOYW1lUmVtb3ZlZFNwYWNlfWApXG4gXG5cbiAgICBjb25zdCBhbGxDaXR5Q2hhcnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaXR5Y2hhcnRcIilcbiAgICBhbGxDaXR5Q2hhcnRzLmZvckVhY2goY2l0eUNoYXJ0ID0+IHtcbiAgICAgICAgaWYgKCFjaXR5Q2hhcnQuY2xhc3NOYW1lLmJhc2VWYWwuaW5jbHVkZXMoXCJoaWRkZW5cIikpIHtcbiAgICAgICAgICAgIGNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbCA9IGNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbCArIFwiIGhpZGRlblwiXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbC5pbmNsdWRlcyhcImhpZGRlblwiKSl7XG4gICAgICAgIGNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbCA9IGBjaXR5Y2hhcnQgJHtjaXR5TmFtZX1gXG4gICAgfWVsc2Uge1xuXG4gICAgICAgIGNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbCA9IGNpdHlDaGFydC5jbGFzc05hbWUuYmFzZVZhbCArIFwiIGhpZGRlblwiXG5cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNob3dUYWJsZXMoY2l0eU5hbWUpIHtcbiAgICBjb25zdCBjaXR5TmFtZVJlbW92ZWRTcGFjZSA9IGNpdHlOYW1lLnNwbGl0KFwiIFwiKVsxXVxuICAgIGNvbnN0IGNpdHlUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50YWJsZS0ke2NpdHlOYW1lUmVtb3ZlZFNwYWNlfWApXG5cbiAgICBjb25zdCBhbGxDaXR5VGFibGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJsZVwiKVxuICAgIGFsbENpdHlUYWJsZXMuZm9yRWFjaChjaXR5VGFibGUgPT4ge1xuICAgICAgICBpZiAoIWNpdHlUYWJsZS5jbGFzc05hbWUuaW5jbHVkZXMoXCJoaWRkZW5cIikpIHtcbiAgICAgICAgICAgIGNpdHlUYWJsZS5jbGFzc05hbWUgPSBjaXR5VGFibGUuY2xhc3NOYW1lICsgXCIgaGlkZGVuXCJcbiAgICBcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoY2l0eVRhYmxlLmNsYXNzTmFtZS5pbmNsdWRlcyhcImhpZGRlblwiKSkge1xuICAgICAgICBjaXR5VGFibGUuY2xhc3NOYW1lID0gYHRhYmxlIHRhYmxlLSR7Y2l0eU5hbWVSZW1vdmVkU3BhY2V9YFxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgY2l0eVRhYmxlLmNsYXNzTmFtZSA9IGNpdHlUYWJsZS5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxuXG4gICAgfVxufVxuXG5mdW5jdGlvbiBzZWxlY3RJdGVtKGVsZSkge1xuICAgIGNvbnN0IGVsZVRleHQgPSBlbGUudGV4dENvbnRlbnRcbiAgICBjb25zdCB0aXRsZUVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGVcIilcbiAgICB0aXRsZUVsZS50ZXh0Q29udGVudCA9IGVsZVRleHQ7XG4gICAgc2hvd0Ryb3Bkb3duKG1lbnVMaXN0KTtcblxuICAgIHNob3dDaGFydHMoZWxlVGV4dClcbiAgICBzaG93VGFibGVzKGVsZVRleHQpXG59XG5cbnRpdGxlRHJvcERvd24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzaG93RHJvcGRvd24obWVudUxpc3QpKVxuXG5jaXR5TGlzdC5mb3JFYWNoKGNpdHkgPT4ge1xuICAgIGNpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzZWxlY3RJdGVtKGNpdHkpKVxufSlcblxuXG5cbnJlbmRlcmFsbCAoKVxuXG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=