
// // function switchClass(ele, className) {
// //     if (ele.className.indexOf(className) !== -1) {
// //         ele.className = el.className.replace(className, "");
// //     }else {
// //         ele.className = ele.className.replace(/\s+/g, " ") + " " + className
// //     }
// //     return ele;
// // }


// // function switchDisplay(ele) {
    
// //     const displayStyle = ele.style.display;

// //     if (displayStyle === "none" || displayStyle === "") {
// //         ele.style.display = "block";
// //     }else {
// //         ele.style.display = "none";
// //     }
    
// // }

// // function switchDropdownDisplay(e) {
// //     const dropdown = e.currentTarget.parentNode;
// //     const menu = dropdown.querySelector(".menu-list")

// //     switchClass(menu, "hide");
// // }

// // function handleOptionSelected (e) {
// //     switchClass(e.target.parentNode, 'hide');

// //     const id = e.target.id;; 
// //     const value = e.target.textContent + " ";
// //     const titleEle = document.querySelector('.dropdown-menu .title');

// //     titleEle.textContent = value;

// //     // document.querySelector('.dropdown .title').dispatchEvent(new Event('change'));
// // }

// // const dropdownTitle = document.querySelector('.dropdown-menu .title');
// // const dropdownOptions = document.querySelectorAll('.dropdown-menu .option');

// // dropdownTitle.addEventListener('click', switchDropdownDisplay);

// // for (let i = 0; i < dropdownOptions.length; i++){
// //     dropdownOptions[0].addEventListener('click', handleOptionSelected)
// // }

// const titleDropDown = document.querySelector('.title')
// const menuList = document.querySelector('.menu-list')
// const listItems = document.querySelectorAll(".city")

// const titleDropDownRight = document.querySelector('.title-right')
// const menuListRight = document.querySelector('.menu-list-right')
// const listItemsRight = document.querySelectorAll(".city-2")

// function showDropdown(ele) {

//     if (ele.className.includes("active")) {
//         ele.className = ele.className.split(" ")[0]
//     } else {
//         ele.className = ele.className + " active"
//     }

// }

// function selectItem (ele, className) {
//     const eleText = ele.textContent
//     const titleEle = document.querySelector(className)

//     titleEle.textContent = eleText;
// }

// titleDropDown.addEventListener('click', () => showDropdown(menuList))

// listItems.forEach(city => {
//     city.addEventListener('click', () => selectItem(city, ".title"))
// })
// titleDropDownRight.addEventListener('click', () => showDropdown(menuListRight))

// listItemsRight.forEach(rightCity => {
//     rightCity.addEventListener('click', () => selectItem(rightCity, ".title-right"))
// })



//     d3.json(citySelection, function (error, data) {
//         bostonData = data.categories
//         createBarGraph();
//         createTable();
//     })
