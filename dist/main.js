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

/***/ "./dist/main.css":
/*!***********************!*\
  !*** ./dist/main.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

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
/* harmony import */ var _dist_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dist/main.css */ "./dist/main.css");
/* harmony import */ var _dist_main_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dist_main_css__WEBPACK_IMPORTED_MODULE_1__);


var bostonData = [];
d3.json("/src/data/boston.json", function (error, data) {
  bostonData = data.categories;
  createBarGraph();
  createTable();
}); // Write the createVisualization function
// This will contain the script that creates the chart

function createBarGraph() {
  // Width and height of SVG
  var w = 500;
  var h = 750; // Get length of dataset

  var arrayLength = bostonData.length; // length of dataset

  var maxValue = d3.max(bostonData, function (d) {
    return +d.score_out_of_10;
  }); // get maximum

  var x_axisLength = 500; // length of x-axis in our layout

  var y_axisLength = 500; // length of y-axis in our layout
  // Use a scale for the height of the visualization

  var yScale = d3.scaleLinear().domain([0, maxValue]).range([0, y_axisLength]); //Create SVG element

  var svg = d3.select(".chart").append("svg").attr("width", w).attr("height", h); // Select and generate rectangle elements

  svg.selectAll("rect").data(bostonData).enter().append("rect").attr("x", function (d, i) {
    return i * (x_axisLength / arrayLength) + 30; // Set x coordinate of rectangle to index of data value (i) *25
  }).attr("y", function (d) {
    return h - yScale(d.score_out_of_10); // Set y coordinate of rect using the y scale
  }).attr("width", x_axisLength / arrayLength - 1).attr("height", function (d) {
    return yScale(d.score_out_of_10); // Set height of using the scale
  }).attr("fill", "steelblue"); // Create y-axis

  svg.append("line").attr("x1", 30).attr("y1", 200).attr("x2", 30).attr("y2", 750).attr("stroke-width", 2).attr("stroke", "black"); // Create x-axis

  svg.append("line").attr("x1", 30).attr("y1", 750).attr("x2", 500).attr("y2", 750).attr("stroke-width", 2).attr("stroke", "black"); // y-axis label

  svg.append("text").attr("class", "y label").attr("text-anchor", "end").text("score out of 10").attr("transform", "translate(20, 20) rotate(-90)").attr("font-size", "14").attr("font-family", "'Open Sans', sans-serif");
}

; // end of function

function createTable() {
  var w = 500;
  var h = 750;
  var columns = ["name", "score_out_of_10"];
  var columnNames = ["Categories", "Score"];
  var table = d3.select('.profile').append('table').attr("class", "table").style("border-radius", "10px").style("border", "1px solid black");
  var header = table.append("header").attr("class", "table-header");
  var tablebody = table.append("tablebody");
  header.append("tr").attr("class", "header-wrapper").style("color", "blue") // .style("display", "flex")
  // .style("flex-direction", "row")
  // .style("justify-content", "space-around")
  .selectAll("th").data(columnNames).enter().append("th").style("text-align", "center").text(function (d) {
    return d;
  });
  var rows = tablebody.selectAll("tr").data(bostonData).enter().append("tr");
  var cells = rows.selectAll("td").data(function (row) {
    // debugger
    return columns.map(function (column) {
      // debugger
      return {
        column: column,
        value: row[column]
      };
    });
  }).enter().append("td").text(function (d) {
    return d.value;
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9tYWluLmNzcz8yMmU4Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/ZGMyYSJdLCJuYW1lcyI6WyJib3N0b25EYXRhIiwiZDMiLCJqc29uIiwiZXJyb3IiLCJkYXRhIiwiY2F0ZWdvcmllcyIsImNyZWF0ZUJhckdyYXBoIiwiY3JlYXRlVGFibGUiLCJ3IiwiaCIsImFycmF5TGVuZ3RoIiwibGVuZ3RoIiwibWF4VmFsdWUiLCJtYXgiLCJkIiwic2NvcmVfb3V0X29mXzEwIiwieF9heGlzTGVuZ3RoIiwieV9heGlzTGVuZ3RoIiwieVNjYWxlIiwic2NhbGVMaW5lYXIiLCJkb21haW4iLCJyYW5nZSIsInN2ZyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJzZWxlY3RBbGwiLCJlbnRlciIsImkiLCJ0ZXh0IiwiY29sdW1ucyIsImNvbHVtbk5hbWVzIiwidGFibGUiLCJzdHlsZSIsImhlYWRlciIsInRhYmxlYm9keSIsInJvd3MiLCJjZWxscyIsInJvdyIsIm1hcCIsImNvbHVtbiIsInZhbHVlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdI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dUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCAnLi4vZGlzdC9tYWluLmNzcyc7XG5cblxuXG5sZXQgYm9zdG9uRGF0YSA9IFtdXG5cbmQzLmpzb24oXCIvc3JjL2RhdGEvYm9zdG9uLmpzb25cIiwgZnVuY3Rpb24gKGVycm9yLCBkYXRhKSB7XG5cbiAgICBib3N0b25EYXRhID0gZGF0YS5jYXRlZ29yaWVzXG4gICAgY3JlYXRlQmFyR3JhcGgoKTtcbiAgICBjcmVhdGVUYWJsZSgpO1xufSlcblxuLy8gV3JpdGUgdGhlIGNyZWF0ZVZpc3VhbGl6YXRpb24gZnVuY3Rpb25cbi8vIFRoaXMgd2lsbCBjb250YWluIHRoZSBzY3JpcHQgdGhhdCBjcmVhdGVzIHRoZSBjaGFydFxuZnVuY3Rpb24gY3JlYXRlQmFyR3JhcGgoKSB7XG4gICAgLy8gV2lkdGggYW5kIGhlaWdodCBvZiBTVkdcbiAgICB2YXIgdyA9IDUwMDtcbiAgICB2YXIgaCA9IDc1MDtcblxuICAgIC8vIEdldCBsZW5ndGggb2YgZGF0YXNldFxuICAgIHZhciBhcnJheUxlbmd0aCA9IGJvc3RvbkRhdGEubGVuZ3RoOyAvLyBsZW5ndGggb2YgZGF0YXNldFxuICAgIHZhciBtYXhWYWx1ZSA9IGQzLm1heChib3N0b25EYXRhLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gK2Quc2NvcmVfb3V0X29mXzEwOyB9KTsgLy8gZ2V0IG1heGltdW1cbiAgICB2YXIgeF9heGlzTGVuZ3RoID0gNTAwOyAvLyBsZW5ndGggb2YgeC1heGlzIGluIG91ciBsYXlvdXRcbiAgICB2YXIgeV9heGlzTGVuZ3RoID0gNTAwOyAvLyBsZW5ndGggb2YgeS1heGlzIGluIG91ciBsYXlvdXRcblxuICAgIC8vIFVzZSBhIHNjYWxlIGZvciB0aGUgaGVpZ2h0IG9mIHRoZSB2aXN1YWxpemF0aW9uXG4gICAgdmFyIHlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgLmRvbWFpbihbMCwgbWF4VmFsdWVdKVxuICAgICAgICAucmFuZ2UoWzAsIHlfYXhpc0xlbmd0aF0pO1xuXG4gICAgLy9DcmVhdGUgU1ZHIGVsZW1lbnRcbiAgICB2YXIgc3ZnID0gZDMuc2VsZWN0KFwiLmNoYXJ0XCIpXG4gICAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB3KVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCBoKTtcblxuICAgIC8vIFNlbGVjdCBhbmQgZ2VuZXJhdGUgcmVjdGFuZ2xlIGVsZW1lbnRzXG4gICAgc3ZnLnNlbGVjdEFsbChcInJlY3RcIilcbiAgICAgICAgLmRhdGEoYm9zdG9uRGF0YSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZChcInJlY3RcIilcbiAgICAgICAgLmF0dHIoXCJ4XCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gaSAqICh4X2F4aXNMZW5ndGggLyBhcnJheUxlbmd0aCkgKyAzMDsgLy8gU2V0IHggY29vcmRpbmF0ZSBvZiByZWN0YW5nbGUgdG8gaW5kZXggb2YgZGF0YSB2YWx1ZSAoaSkgKjI1XG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIGggLSB5U2NhbGUoZC5zY29yZV9vdXRfb2ZfMTApOyAvLyBTZXQgeSBjb29yZGluYXRlIG9mIHJlY3QgdXNpbmcgdGhlIHkgc2NhbGVcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCAoeF9heGlzTGVuZ3RoIC8gYXJyYXlMZW5ndGgpIC0gMSlcbiAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiB5U2NhbGUoZC5zY29yZV9vdXRfb2ZfMTApOyAvLyBTZXQgaGVpZ2h0IG9mIHVzaW5nIHRoZSBzY2FsZVxuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcImZpbGxcIiwgXCJzdGVlbGJsdWVcIik7XG5cbiAgICAvLyBDcmVhdGUgeS1heGlzXG4gICAgc3ZnLmFwcGVuZChcImxpbmVcIilcbiAgICAgICAgLmF0dHIoXCJ4MVwiLCAzMClcbiAgICAgICAgLmF0dHIoXCJ5MVwiLCAyMDApXG4gICAgICAgIC5hdHRyKFwieDJcIiwgMzApXG4gICAgICAgIC5hdHRyKFwieTJcIiwgNzUwKVxuICAgICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAyKVxuICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBcImJsYWNrXCIpO1xuXG4gICAgLy8gQ3JlYXRlIHgtYXhpc1xuICAgIHN2Zy5hcHBlbmQoXCJsaW5lXCIpXG4gICAgICAgIC5hdHRyKFwieDFcIiwgMzApXG4gICAgICAgIC5hdHRyKFwieTFcIiwgNzUwKVxuICAgICAgICAuYXR0cihcIngyXCIsIDUwMClcbiAgICAgICAgLmF0dHIoXCJ5MlwiLCA3NTApXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDIpXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiYmxhY2tcIik7XG5cbiAgICAvLyB5LWF4aXMgbGFiZWxcbiAgICBzdmcuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwieSBsYWJlbFwiKVxuICAgICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG4gICAgICAgIC50ZXh0KFwic2NvcmUgb3V0IG9mIDEwXCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDIwLCAyMCkgcm90YXRlKC05MClcIilcbiAgICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgXCIxNFwiKVxuICAgICAgICAuYXR0cihcImZvbnQtZmFtaWx5XCIsIFwiJ09wZW4gU2FucycsIHNhbnMtc2VyaWZcIik7XG59OyAvLyBlbmQgb2YgZnVuY3Rpb25cblxuXG5mdW5jdGlvbiBjcmVhdGVUYWJsZSAoKSB7XG5cbiAgICB2YXIgdyA9IDUwMDtcbiAgICB2YXIgaCA9IDc1MDtcblxuICAgIGNvbnN0IGNvbHVtbnMgPSBbXCJuYW1lXCIsIFwic2NvcmVfb3V0X29mXzEwXCJdXG4gICAgY29uc3QgY29sdW1uTmFtZXMgPSBbXCJDYXRlZ29yaWVzXCIsIFwiU2NvcmVcIl1cbiAgICBcbiAgICBsZXQgdGFibGUgPSBkMy5zZWxlY3QoJy5wcm9maWxlJylcbiAgICAgICAgLmFwcGVuZCgndGFibGUnKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwidGFibGVcIilcbiAgICAgICAgLnN0eWxlKFwiYm9yZGVyLXJhZGl1c1wiLCBcIjEwcHhcIilcbiAgICAgICAgLnN0eWxlKFwiYm9yZGVyXCIsIFwiMXB4IHNvbGlkIGJsYWNrXCIpO1xuICAgIGxldCBoZWFkZXIgPSB0YWJsZVxuICAgICAgICAuYXBwZW5kKFwiaGVhZGVyXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0YWJsZS1oZWFkZXJcIik7XG4gICAgbGV0IHRhYmxlYm9keSA9IHRhYmxlLmFwcGVuZChcInRhYmxlYm9keVwiKTtcblxuICAgIGhlYWRlclxuICAgICAgICAuYXBwZW5kKFwidHJcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImhlYWRlci13cmFwcGVyXCIpXG4gICAgICAgIC5zdHlsZShcImNvbG9yXCIsIFwiYmx1ZVwiKVxuICAgICAgICAvLyAuc3R5bGUoXCJkaXNwbGF5XCIsIFwiZmxleFwiKVxuICAgICAgICAvLyAuc3R5bGUoXCJmbGV4LWRpcmVjdGlvblwiLCBcInJvd1wiKVxuICAgICAgICAvLyAuc3R5bGUoXCJqdXN0aWZ5LWNvbnRlbnRcIiwgXCJzcGFjZS1hcm91bmRcIilcbiAgICAgICAgLnNlbGVjdEFsbChcInRoXCIpXG4gICAgICAgIC5kYXRhKGNvbHVtbk5hbWVzKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwidGhcIilcbiAgICAgICAgLnN0eWxlKFwidGV4dC1hbGlnblwiLCBcImNlbnRlclwiKVxuICAgICAgICAudGV4dChmdW5jdGlvbihkKXtcbiAgICAgICAgICAgIHJldHVybiBkO1xuICAgICAgICB9KVxuICAgICAgXG4gICAgICAgIFxuXG4gICAgbGV0IHJvd3MgPSB0YWJsZWJvZHlcbiAgICAgICAgLnNlbGVjdEFsbChcInRyXCIpXG4gICAgICAgIC5kYXRhKGJvc3RvbkRhdGEpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJ0clwiKTtcbiAgICBcblxuICAgIGxldCBjZWxscyA9IHJvd3Muc2VsZWN0QWxsKFwidGRcIilcbiAgICAgICAgLmRhdGEoZnVuY3Rpb24ocm93KSB7XG4gICAgICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbnMubWFwKGZ1bmN0aW9uKGNvbHVtbikge1xuICAgICAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uOiBjb2x1bW4sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiByb3dbY29sdW1uXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoXCJ0ZFwiKVxuICAgICAgICAudGV4dChmdW5jdGlvbihkKXtcbiAgICAgICAgICAgIHJldHVybiBkLnZhbHVlXG4gICAgICAgIH0pXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==