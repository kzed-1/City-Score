
// function switchClass(ele, className) {
//     if (ele.className.indexOf(className) !== -1) {
//         ele.className = el.className.replace(className, "");
//     }else {
//         ele.className = ele.className.replace(/\s+/g, " ") + " " + className
//     }
//     return ele;
// }


// function switchDisplay(ele) {
    
//     const displayStyle = ele.style.display;

//     if (displayStyle === "none" || displayStyle === "") {
//         ele.style.display = "block";
//     }else {
//         ele.style.display = "none";
//     }
    
// }

// function switchDropdownDisplay(e) {
//     const dropdown = e.currentTarget.parentNode;
//     const menu = dropdown.querySelector(".menu-list")

//     switchClass(menu, "hide");
// }

// function handleOptionSelected (e) {
//     switchClass(e.target.parentNode, 'hide');

//     const id = e.target.id;; 
//     const value = e.target.textContent + " ";
//     const titleEle = document.querySelector('.dropdown-menu .title');

//     titleEle.textContent = value;

//     // document.querySelector('.dropdown .title').dispatchEvent(new Event('change'));
// }

// const dropdownTitle = document.querySelector('.dropdown-menu .title');
// const dropdownOptions = document.querySelectorAll('.dropdown-menu .option');

// dropdownTitle.addEventListener('click', switchDropdownDisplay);

// for (let i = 0; i < dropdownOptions.length; i++){
//     dropdownOptions[0].addEventListener('click', handleOptionSelected)
// }

const titleDropDown = document.querySelector('.title')
const menuList = document.querySelector('.menu-list')
const listItems = document.querySelectorAll(".city")

function showDropdown(ele) {

    if (ele.className.includes("active")) {
        ele.className = ele.className.split(" ")[0]
    } else {
        ele.className = ele.className + " active"
    }

}

function selectItem (ele) {
    const eleText = ele.textContent
    const titleEle = document.querySelector(".title")

    titleEle.textContent = eleText;
}

titleDropDown.addEventListener('click', () => showDropdown(menuList))

listItems.forEach(city => {
    city.addEventListener('click', () => selectItem(city))
})



    d3.json(citySelection, function (error, data) {
        bostonData = data.categories
        createBarGraph();
        createTable();
    })
