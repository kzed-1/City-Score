export function toggleDropdown(ele) {
    const dropdownButtonEle = document.querySelector(".dropdown-menu")
    if (ele.className.includes("inactive")) {
        ele.className = ele.className.split(" ")[0]
        ele.style.borderRadius = "0 0 10px 10px"
        dropdownButtonEle.style.borderRadius = "10px 10px 0 0"

    } else {
        ele.className = ele.className + " inactive"
        ele.style.borderRadius = "10px"
        dropdownButtonEle.style.borderRadius = "10px"
    }
}

export function showCharts(cityName) {
    const cityNameRemovedSpace = cityName.split(" ")[1]
    const cityChart = document.querySelector(`.${cityNameRemovedSpace}`)


    const allCityCharts = document.querySelectorAll(".citychart")
    allCityCharts.forEach(cityChart => {
        if (!cityChart.className.baseVal.includes("hidden")) {
            cityChart.className.baseVal = cityChart.className.baseVal + " hidden"
        }
    })

    if (cityChart.className.baseVal.includes("hidden")) {
        cityChart.className.baseVal = `citychart ${cityName}`
    } else {

        cityChart.className.baseVal = cityChart.className.baseVal + " hidden"

    }
}

export function showTables(cityName) {
    const cityNameRemovedSpace = cityName.split(" ")[1]
    const cityTable = document.querySelector(`.table-${cityNameRemovedSpace}`)

    const allCityTables = document.querySelectorAll(".table")
    allCityTables.forEach(cityTable => {
        if (!cityTable.className.includes("hidden")) {
            cityTable.className = cityTable.className + " hidden"

        }
    })

    if (cityTable.className.includes("hidden")) {
        cityTable.className = `table table-${cityNameRemovedSpace}`
    } else {

        cityTable.className = cityTable.className + " hidden"

    }
}

export function showTitle(cityName) {
    const cityNameRemovedSpace = cityName.split(" ")[1]
    const cityTitle = document.querySelector(`.title-${cityNameRemovedSpace}`)

    const allCityTitle = document.querySelectorAll(".citytitle")
    allCityTitle.forEach(cityTitle => {
        if (!cityTitle.className.includes("hidden")) {
            cityTitle.className = cityTitle.className + " hidden"

        }
    })

    if (cityTitle.className.includes("hidden")) {
        cityTitle.className = `citytitle title-${cityNameRemovedSpace}`
    } else {

        cityTitle.className = cityTitle.className + " hidden"

    }
}

export function showSummary(cityName) {
    const cityNameRemovedSpace = cityName.split(" ")[1]
    const citySummary = document.querySelector(`.summary-${cityNameRemovedSpace}`)

    const allCitySummary = document.querySelectorAll(".citySummary")
    allCitySummary.forEach(citySummary => {
        if (!citySummary.className.includes("hidden")) {
            citySummary.className = citySummary.className + " hidden"

        }
    })

    if (citySummary.className.includes("hidden")) {
        citySummary.className = `citySummary summary-${cityNameRemovedSpace}`
    } else {

        citySummary.className = citySummary.className + " hidden"

    }
}

// add event listener on the bars to 

export function lightupCategories(id) {
    const cityCategory = document.querySelectorAll(`#${id}`)
    const allCityCategories = document.querySelectorAll(".category")
    allCityCategories.forEach(cityCat => {
        if (!cityCat.className.includes("nonhighlighted")) {
            cityCat.className = cityCat.className + " nonhighlighted"
        }
    })

    cityCategory.forEach(cityCat => {
        if (cityCat.className.includes(`category ${id} nonhighlighted`)) {
            cityCat.className = `category ${id}`
        } else {
            cityCat.className = cityCat.className + " nonhighlighted"
        }
    })

}

export function stopHighlighting() {
    const allCityCategories = document.querySelectorAll(".category")
    allCityCategories.forEach(cityCat => {
        if (!cityCat.className.includes("nonhighlighted")) {
            cityCat.className = cityCat.className + " nonhighlighted"
        }
    })
}



export function selectItem(ele) {
    const eleText = ele.textContent
    const titleEle = document.querySelector(".title")
    const menuList = document.querySelector(".menu-list")
    titleEle.textContent = eleText;
    toggleDropdown(menuList);

    showCharts(eleText)
    showTables(eleText)
    showTitle(eleText)
    showSummary(eleText)
}

export function closeDropdown() {
    const dropdownMenu = document.querySelector(".menu-list")

    if (!dropdownMenu.className.includes("inactive")) {
        dropdownMenu.className = "menu-list inactive"
    }
}