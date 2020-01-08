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
  svg.attr("class", "citychart ".concat(name, " hidden"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJib3N0b25EYXRhIiwibmFtZSIsInN1bW1hcnkiLCJjaXR5U2NvcmUiLCJjaXR5U2VsZWN0aW9uIiwiY2l0aWVzIiwicmVuZGVyIiwiZDMiLCJqc29uIiwiZXJyb3IiLCJkYXRhIiwidGVsZXBvcnRfY2l0eV9zY29yZSIsImNhdGVnb3JpZXMiLCJjcmVhdGVCYXJHcmFwaCIsImNyZWF0ZVRhYmxlIiwicmVuZGVyYWxsIiwiZm9yRWFjaCIsImNpdHkiLCJ3aWR0aCIsImhlaWdodCIsImFycmF5TGVuZ3RoIiwibGVuZ3RoIiwibWF4VmFsdWUiLCJtYXgiLCJkIiwic2NvcmVfb3V0X29mXzEwIiwieF9heGlzTGVuZ3RoIiwieV9heGlzTGVuZ3RoIiwieVNjYWxlIiwic2NhbGVMaW5lYXIiLCJkb21haW4iLCJyYW5nZSIsInhTY2FsZSIsInN2ZyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJzZWxlY3RBbGwiLCJlbnRlciIsImkiLCJjb2xvciIsIm9uIiwidG9vbHRpcCIsInN0eWxlIiwidGV4dCIsImV2ZW50IiwicGFnZVkiLCJwYWdlWCIsInRvRml4ZWQiLCJjb2x1bW5zIiwiY29sdW1uTmFtZXMiLCJ0YWJsZSIsImhlYWRlciIsInRhYmxlYm9keSIsInJvd3MiLCJjZWxscyIsInJvdyIsIm1hcCIsImNvbHVtbiIsInZhbHVlIiwidGl0bGVEcm9wRG93biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnVMaXN0IiwiY2l0eUxpc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2hvd0Ryb3Bkb3duIiwiZWxlIiwiY2xhc3NOYW1lIiwiaW5jbHVkZXMiLCJzcGxpdCIsInNob3dDaGFydHMiLCJjaXR5TmFtZSIsImNpdHlOYW1lUmVtb3ZlZFNwYWNlIiwiY2l0eUNoYXJ0IiwiYWxsQ2l0eUNoYXJ0cyIsImJhc2VWYWwiLCJzaG93VGFibGVzIiwiY2l0eVRhYmxlIiwiYWxsQ2l0eVRhYmxlcyIsInNlbGVjdEl0ZW0iLCJlbGVUZXh0IiwidGV4dENvbnRlbnQiLCJ0aXRsZUVsZSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFJQSxJQUFJQSxVQUFVLEdBQUcsRUFBakI7QUFDQSxJQUFJQyxJQUFKLEVBQVVDLE9BQVYsRUFBbUJDLFNBQW5CO0FBRUEsSUFBSUMsYUFBYSxHQUFHLHdCQUFwQjtBQUVBLElBQUlDLE1BQU0sR0FBRyxDQUFDLHdCQUFELEVBQTJCLHdCQUEzQixFQUFxRCx3QkFBckQsRUFBK0Usd0JBQS9FLEVBQXlHLHVCQUF6RyxDQUFiOztBQUlBLFNBQVNDLE1BQVQsR0FBa0I7QUFDZEMsSUFBRSxDQUFDQyxJQUFILENBQVFKLGFB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QUFFSEssYUFBUyxDQUFDVixTQUFWLEdBQXNCVSxTQUFTLENBQUNWLFNBQVYsR0FBc0IsU0FBNUM7QUFFSDtBQUNKOztBQUVELFNBQVNZLFVBQVQsQ0FBb0JiLEdBQXBCLEVBQXlCO0FBQ3JCLE1BQU1jLE9BQU8sR0FBR2QsR0FBRyxDQUFDZSxXQUFwQjtBQUNBLE1BQU1DLFFBQVEsR0FBR3RCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFqQjtBQUNBcUIsVUFBUSxDQUFDRCxXQUFULEdBQXVCRCxPQUF2QjtBQUNBZixjQUFZLENBQUNILFFBQUQsQ0FBWjtBQUVBUSxZQUFVLENBQUNVLE9BQUQsQ0FBVjtBQUNBSixZQUFVLENBQUNJLE9BQUQsQ0FBVjtBQUNIOztBQUVEckIsYUFBYSxDQUFDd0IsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0M7QUFBQSxTQUFNbEIsWUFBWSxDQUFDSCxRQUFELENBQWxCO0FBQUEsQ0FBeEM7QUFFQUMsUUFBUSxDQUFDaEQsT0FBVCxDQUFpQixVQUFBQyxJQUFJLEVBQUk7QUFDckJBLE1BQUksQ0FBQ21FLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCO0FBQUEsV0FBTUosVUFBVSxDQUFDL0QsSUFBRCxDQUFoQjtBQUFBLEdBQS9CO0FBQ0gsQ0FGRDtBQU1BRixTQUFTLEc7Ozs7Ozs7Ozs7O0FDM1FULHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5cblxuXG5sZXQgYm9zdG9uRGF0YSA9IFtdXG5sZXQgbmFtZSwgc3VtbWFyeSwgY2l0eVNjb3JlO1xuXG5sZXQgY2l0eVNlbGVjdGlvbiA9IFwiL3NyYy9kYXRhL25ld3lvcmsuanNvblwiXG5cbmxldCBjaXRpZXMgPSBbXCIvc3JjL2RhdGEvbmV3eW9yay5qc29uXCIsIFwiL3NyYy9kYXRhL3NhbmZyYW4uanNvblwiLCBcIi9zcmMvZGF0YS9zZWF0dGxlLmpzb25cIiwgXCIvc3JjL2RhdGEvdG9yb250by5qc29uXCIsIFwiL3NyYy9kYXRhL2Jvc3Rvbi5qc29uXCJdIFxuXG5cblxuZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGQzLmpzb24oY2l0eVNlbGVjdGlvbiwgZnVuY3Rpb24gKGVycm9yLCBkYXRhKSB7XG5cbiAgICAgICAgbmFtZSA9IGRhdGEubmFtZVxuICAgICAgICBzdW1tYXJ5ID0gZGF0YS5zdW1tYXJ5XG4gICAgICAgIGNpdHlTY29yZSA9IGRhdGEudGVsZXBvcnRfY2l0eV9zY29yZVxuICAgICAgICBib3N0b25EYXRhID0gZGF0YS5jYXRlZ29yaWVzXG4gICAgICAgIGNyZWF0ZUJhckdyYXBoKCk7XG4gICAgICAgIGNyZWF0ZVRhYmxlKCk7XG4gICAgfSlcblxufVxuXG5mdW5jdGlvbiByZW5kZXJhbGwoKSB7XG4gICAgY2l0aWVzLmZvckVhY2goY2l0eSA9PiB7XG4gICAgICAgIGNpdHlTZWxlY3Rpb24gPSBjaXR5IFxuICAgICAgICByZW5kZXIoKVxuICAgIH0pXG59XG5cblxuXG5cblxuXG5mdW5jdGlvbiBjcmVhdGVCYXJHcmFwaCgpIHtcblxuICAgIHZhciB3aWR0aCA9IDUwMDtcbiAgICB2YXIgaGVpZ2h0ID0gNTMwO1xuXG4gICAgLy8gR2V0IGxlbmd0aCBvZiBkYXRhc2V0XG4gICAgdmFyIGFycmF5TGVuZ3RoID0gYm9zdG9uRGF0YS5sZW5ndGg7IC8vIGxlbmd0aCBvZiBkYXRhc2V0XG4gICAgdmFyIG1heFZhbHVlID0gZDMubWF4KGJvc3RvbkRhdGEsIGZ1bmN0aW9uIChkKSB7IHJldHVybiArZC5zY29yZV9vdXRfb2ZfMTA7IH0pOyAvLyBnZXQgbWF4aW11bVxuICAgIHZhciB4X2F4aXNMZW5ndGggPSA1MDA7IC8vIGxlbmd0aCBvZiB4LWF4aXMgaW4gb3VyIGxheW91dFxuICAgIHZhciB5X2F4aXNMZW5ndGggPSA1MDA7IC8vIGxlbmd0aCBvZiB5LWF4aXMgaW4gb3VyIGxheW91dFxuXG5cbiAgICB2YXIgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAuZG9tYWluKFswLCBtYXhWYWx1ZV0pXG4gICAgICAgIC5yYW5nZShbMCwgeV9heGlzTGVuZ3RoXSk7XG5cbiAgICB2YXIgeFNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAuZG9tYWluKFswLCBtYXhWYWx1ZV0pXG4gICAgICAgIC5yYW5nZShbMCwgeF9heGlzTGVuZ3RoXSk7XG5cblxuXG4gICAgdmFyIHN2ZyA9IGQzLnNlbGVjdChcIi5jaGFydFwiKVxuICAgICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGgpXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCk7XG4gICAgXG4gICAgc3ZnLmF0dHIoXCJjbGFzc1wiLGBjaXR5Y2hhcnQgJHtuYW1lfSBoaWRkZW5gKVxuXG4gICAgc3ZnLnNlbGVjdEFsbChcInJlY3RcIilcbiAgICAgICAgLmRhdGEoYm9zdG9uRGF0YSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZChcInJlY3RcIilcbiAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gaSAqICh5X2F4aXNMZW5ndGggLyBhcnJheUxlbmd0aCkgKyAzMDsgXG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKFwieFwiLCAwKVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCAoeV9heGlzTGVuZ3RoIC8gYXJyYXlMZW5ndGgpIC0gMSlcbiAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIHhTY2FsZShkLnNjb3JlX291dF9vZl8xMCk7IFxuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBkLmNvbG9yXG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgcmV0dXJuIGBiYXIgJHtkLm5hbWV9YDtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgIHJldHVybiB0b29sdGlwLnN0eWxlKFwidmlzaWJpbGl0eVwiLCBcInZpc2libGVcIikudGV4dChkLm5hbWUgKyBcIjogXCIgKyBkLnNjb3JlX291dF9vZl8xMCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRvb2x0aXAuc3R5bGUoXCJ0b3BcIiwgKGQzLmV2ZW50LnBhZ2VZLTEwKStcInB4XCIpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwibGVmdFwiLChkMy5ldmVudC5wYWdlWCsxMCkrXCJweFwiKS50ZXh0KGQubmFtZSArIFwiOiBcIiArIGQuc2NvcmVfb3V0X29mXzEwLnRvRml4ZWQoMikpO1xuICAgICAgICB9KVxuICAgICAgICAub24oXCJtb3VzZW91dFwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9vbHRpcC5zdHlsZShcInZpc2liaWxpdHlcIiwgXCJoaWRkZW5cIilcbiAgICAgICAgfSlcblxuXG4gICAgLy8gQ3JlYXRlIHktYXhpc1xuICAgIHN2Zy5hcHBlbmQoXCJsaW5lXCIpXG4gICAgICAgIC5hdHRyKFwieDFcIiwgNzAwKVxuICAgICAgICAuYXR0cihcInkxXCIsIDMwKVxuICAgICAgICAuYXR0cihcIngyXCIsIDcwMClcbiAgICAgICAgLmF0dHIoXCJ5MlwiLCA1MjkpXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDIpXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiYmxhY2tcIik7XG5cbiAgICAvLyBDcmVhdGUgeC1heGlzXG4gICAgc3ZnLmFwcGVuZChcImxpbmVcIilcbiAgICAgICAgLmF0dHIoXCJ4MVwiLCAzMClcbiAgICAgICAgLmF0dHIoXCJ5MVwiLCA3NTApXG4gICAgICAgIC5hdHRyKFwieDJcIiwgNTAwKVxuICAgICAgICAuYXR0cihcInkyXCIsIDc1MClcbiAgICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMilcbiAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgXCJibGFja1wiKTtcblxuXG5cbiAgICB2YXIgdG9vbHRpcCA9IGQzLnNlbGVjdChcIi5jaGFydFwiKVxuICAgICAgICAuYXBwZW5kKFwiZGl2XCIpXG4gICAgICAgIC5zdHlsZShcInBvc2l0aW9uXCIsIFwiYWJzb2x1dGVcIilcbiAgICAgICAgLnN0eWxlKFwiZm9udC1mYW1pbHlcIiwgXCJyb2JvdG9cIilcbiAgICAgICAgLnN0eWxlKFwiZm9udC1zaXplXCIsIFwiMTRweFwiKVxuICAgICAgICAuc3R5bGUoXCJ6LWluZGV4XCIsIFwiM1wiKVxuICAgICAgICAuc3R5bGUoXCJ2aXNpYmlsaXR5XCIsIFwiaGlkZGVuXCIpXG4gICAgICAgIC5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIiwgXCJ3aGl0ZVwiKVxuICAgICAgICAuc3R5bGUoXCJ3aWR0aFwiLCBcImF1dG9cIilcbiAgICAgICAgLnN0eWxlKFwibWFyZ2luXCIsIFwiMCBhdXRvXCIpXG4gICAgICAgIC5zdHlsZShcImJvcmRlci1yYWRpdXNcIiwgXCIxMHB4XCIpXG4gICAgICAgIC5zdHlsZShcInBhZGRpbmdcIiwgXCIxMHB4XCIpXG4gICAgICAgIC5zdHlsZShcImJvcmRlclwiLCBcIjFweCBzb2xpZCBibGFja1wiKVxufTtcblxuXG5mdW5jdGlvbiBjcmVhdGVUYWJsZSAoKSB7XG5cblxuICAgIGNvbnN0IGNvbHVtbnMgPSBbXCJuYW1lXCIsIFwic2NvcmVfb3V0X29mXzEwXCJdXG4gICAgY29uc3QgY29sdW1uTmFtZXMgPSBbXCJDYXRlZ29yaWVzXCIsIFwiU2NvcmVcIl1cbiAgICBcbiAgICBsZXQgdGFibGUgPSBkMy5zZWxlY3QoJy5wcm9maWxlJylcbiAgICAgICAgLmFwcGVuZCgndGFibGUnKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIGB0YWJsZSB0YWJsZS0ke25hbWV9IGhpZGRlbmApXG4gICAgICAgIC5zdHlsZShcImJvcmRlci1yYWRpdXNcIiwgXCIxMHB4XCIpXG4gICAgICAgIC5zdHlsZShcImJvcmRlclwiLCBcIjFweCBzb2xpZCBibGFja1wiKTtcbiAgICBsZXQgaGVhZGVyID0gdGFibGVcbiAgICAgICAgLmFwcGVuZChcImhlYWRlclwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwidGFibGUtaGVhZGVyXCIpO1xuICAgIGxldCB0YWJsZWJvZHkgPSB0YWJsZS5hcHBlbmQoXCJ0YWJsZWJvZHlcIik7XG5cbiAgICBoZWFkZXJcbiAgICAgICAgLmFwcGVuZChcInRyXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJoZWFkZXItd3JhcHBlclwiKVxuICAgICAgICAuc3R5bGUoXCJjb2xvclwiLCBcImJsdWVcIilcbiAgICAgICAgLnNlbGVjdEFsbChcInRoXCIpXG4gICAgICAgIC5kYXRhKGNvbHVtbk5hbWVzKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwidGhcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIGQ7XG4gICAgICAgIH0pXG4gICAgICAgIC5zdHlsZShcInRleHQtYWxpZ25cIiwgXCJjZW50ZXJcIilcbiAgICAgICAgLnRleHQoZnVuY3Rpb24oZCl7XG4gICAgICAgICAgICByZXR1cm4gZDtcbiAgICAgICAgfSlcbiAgICAgIFxuICAgICAgICBcblxuICAgIGxldCByb3dzID0gdGFibGVib2R5XG4gICAgICAgIC5zZWxlY3RBbGwoXCJ0clwiKVxuICAgICAgICAuZGF0YShib3N0b25EYXRhKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwidHJcIik7XG4gICAgXG5cbiAgICBsZXQgY2VsbHMgPSByb3dzLnNlbGVjdEFsbChcInRkXCIpXG4gICAgICAgIC5kYXRhKGZ1bmN0aW9uKHJvdykge1xuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbnMubWFwKGZ1bmN0aW9uKGNvbHVtbikge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbjogY29sdW1uLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcm93W2NvbHVtbl1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKFwidGRcIilcbiAgICAgICAgLnRleHQoZnVuY3Rpb24oZCl7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGQudmFsdWUgPT09IFwibnVtYmVyXCIpe1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHtkLnZhbHVlLnRvRml4ZWQoMil9IC8xMGBcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZC52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxufVxuXG5cbmNvbnN0IHRpdGxlRHJvcERvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKVxuY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1saXN0JylcbmNvbnN0IGNpdHlMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaXR5XCIpXG5cbmZ1bmN0aW9uIHNob3dEcm9wZG93bihlbGUpIHtcbiAgICBpZiAoZWxlLmNsYXNzTmFtZS5pbmNsdWRlcyhcImFjdGl2ZVwiKSkge1xuICAgICAgICBlbGUuY2xhc3NOYW1lID0gZWxlLmNsYXNzTmFtZS5zcGxpdChcIiBcIilbMF1cbiAgICB9IGVsc2Uge1xuICAgICAgICBlbGUuY2xhc3NOYW1lID0gZWxlLmNsYXNzTmFtZSArIFwiIGFjdGl2ZVwiXG4gICAgfVxufVxuXG5mdW5jdGlvbiBzaG93Q2hhcnRzKGNpdHlOYW1lKSB7XG4gICAgY29uc3QgY2l0eU5hbWVSZW1vdmVkU3BhY2UgPSBjaXR5TmFtZS5zcGxpdChcIiBcIilbMV1cbiAgICBjb25zdCBjaXR5Q2hhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjaXR5TmFtZVJlbW92ZWRTcGFjZX1gKVxuIFxuXG4gICAgY29uc3QgYWxsQ2l0eUNoYXJ0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2l0eWNoYXJ0XCIpXG4gICAgYWxsQ2l0eUNoYXJ0cy5mb3JFYWNoKGNpdHlDaGFydCA9PiB7XG4gICAgICAgIGlmICghY2l0eUNoYXJ0LmNsYXNzTmFtZS5iYXNlVmFsLmluY2x1ZGVzKFwiaGlkZGVuXCIpKSB7XG4gICAgICAgICAgICBjaXR5Q2hhcnQuY2xhc3NOYW1lLmJhc2VWYWwgPSBjaXR5Q2hhcnQuY2xhc3NOYW1lLmJhc2VWYWwgKyBcIiBoaWRkZW5cIlxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGlmIChjaXR5Q2hhcnQuY2xhc3NOYW1lLmJhc2VWYWwuaW5jbHVkZXMoXCJoaWRkZW5cIikpe1xuICAgICAgICBjaXR5Q2hhcnQuY2xhc3NOYW1lLmJhc2VWYWwgPSBgY2l0eWNoYXJ0ICR7Y2l0eU5hbWV9YFxuICAgIH1lbHNlIHtcblxuICAgICAgICBjaXR5Q2hhcnQuY2xhc3NOYW1lLmJhc2VWYWwgPSBjaXR5Q2hhcnQuY2xhc3NOYW1lLmJhc2VWYWwgKyBcIiBoaWRkZW5cIlxuXG4gICAgfVxufVxuXG5mdW5jdGlvbiBzaG93VGFibGVzKGNpdHlOYW1lKSB7XG4gICAgY29uc3QgY2l0eU5hbWVSZW1vdmVkU3BhY2UgPSBjaXR5TmFtZS5zcGxpdChcIiBcIilbMV1cbiAgICBjb25zdCBjaXR5VGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudGFibGUtJHtjaXR5TmFtZVJlbW92ZWRTcGFjZX1gKVxuXG4gICAgY29uc3QgYWxsQ2l0eVRhYmxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFibGVcIilcbiAgICBhbGxDaXR5VGFibGVzLmZvckVhY2goY2l0eVRhYmxlID0+IHtcbiAgICAgICAgaWYgKCFjaXR5VGFibGUuY2xhc3NOYW1lLmluY2x1ZGVzKFwiaGlkZGVuXCIpKSB7XG4gICAgICAgICAgICBjaXR5VGFibGUuY2xhc3NOYW1lID0gY2l0eVRhYmxlLmNsYXNzTmFtZSArIFwiIGhpZGRlblwiXG4gICAgXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGNpdHlUYWJsZS5jbGFzc05hbWUuaW5jbHVkZXMoXCJoaWRkZW5cIikpIHtcbiAgICAgICAgY2l0eVRhYmxlLmNsYXNzTmFtZSA9IGB0YWJsZSB0YWJsZS0ke2NpdHlOYW1lUmVtb3ZlZFNwYWNlfWBcbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIGNpdHlUYWJsZS5jbGFzc05hbWUgPSBjaXR5VGFibGUuY2xhc3NOYW1lICsgXCIgaGlkZGVuXCJcblxuICAgIH1cbn1cblxuZnVuY3Rpb24gc2VsZWN0SXRlbShlbGUpIHtcbiAgICBjb25zdCBlbGVUZXh0ID0gZWxlLnRleHRDb250ZW50XG4gICAgY29uc3QgdGl0bGVFbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlXCIpXG4gICAgdGl0bGVFbGUudGV4dENvbnRlbnQgPSBlbGVUZXh0O1xuICAgIHNob3dEcm9wZG93bihtZW51TGlzdCk7XG5cbiAgICBzaG93Q2hhcnRzKGVsZVRleHQpXG4gICAgc2hvd1RhYmxlcyhlbGVUZXh0KVxufVxuXG50aXRsZURyb3BEb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2hvd0Ryb3Bkb3duKG1lbnVMaXN0KSlcblxuY2l0eUxpc3QuZm9yRWFjaChjaXR5ID0+IHtcbiAgICBjaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2VsZWN0SXRlbShjaXR5KSlcbn0pXG5cblxuXG5yZW5kZXJhbGwgKClcblxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9