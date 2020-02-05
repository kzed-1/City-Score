export function toggleDropdown(ele,className) {
    const dropdownButtonEle = document.querySelector(className)
    if (ele.className.includes("inactive")) {
        ele.className = ele.className.split(" ")[0]
        ele.style.borderRadius = "0 0 10px 10px"
        dropdownButtonEle.style.borderRadius = "10px 10px 0 0" 
    } else {
        ele.className = `${ele.className} inactive`
        ele.style.borderRadius = "10px"
        dropdownButtonEle.style.borderRadius = "10px"
    }
}

export function showCharts(cityName, cityChartClassname) {
    const cityNameRemovedSpace = cityName.split(" ")[1]
    const cityChart = document.querySelector(`.${cityChartClassname}-${cityNameRemovedSpace}`)


    const allCityCharts = document.querySelectorAll(`.${cityChartClassname}`)
    allCityCharts.forEach(cityChart => {
        if (!cityChart.className.baseVal.includes("hidden")) {
            cityChart.className.baseVal = cityChart.className.baseVal + " hidden"
        }
    })

    if (cityChart.className.baseVal.includes("hidden")) {
        cityChart.className.baseVal = `${cityChartClassname} ${cityChartClassname}-${cityNameRemovedSpace}`
    } else {

        cityChart.className.baseVal = cityChart.className.baseVal + " hidden"

    }
}

export function showTables(cityName, tableClassname) {
    const cityNameRemovedSpace = cityName.split(" ")[1]
    const cityTable = document.querySelector(`.${tableClassname}-${cityNameRemovedSpace}`)

    const allCityTables = document.querySelectorAll(`.${tableClassname}`)
    allCityTables.forEach(cityTable => {
        if (!cityTable.className.includes("hidden")) {
            cityTable.className = cityTable.className + " hidden"

        }
    })

    if (cityTable.className.includes("hidden")) {
        cityTable.className = `${tableClassname} ${tableClassname}-${cityNameRemovedSpace}`
    } else {

        cityTable.className = cityTable.className + " hidden"

    }
}

export function showTitle(cityName, cityTitleClassname) {
    const cityNameRemovedSpace = cityName.split(" ")[1]
    const cityTitle = document.querySelector(`.${cityTitleClassname}-${cityNameRemovedSpace}`)

    const allCityTitle = document.querySelectorAll(`.${cityTitleClassname}`)
    allCityTitle.forEach(cityTitle => {
        if (!cityTitle.className.includes("hidden")) {
            cityTitle.className = cityTitle.className + " hidden"

        }
    })

    if (cityTitle.className.includes("hidden")) {
        cityTitle.className = `${cityTitleClassname} ${cityTitleClassname}-${cityNameRemovedSpace}`
    } else {

        cityTitle.className = cityTitle.className + " hidden"

    }
}

export function showSummary(cityName, citySummaryClassname) {
    const cityNameRemovedSpace = cityName.split(" ")[1]
    const citySummary = document.querySelector(`.${citySummaryClassname}-${cityNameRemovedSpace}`)

    const allCitySummary = document.querySelectorAll(`.${citySummaryClassname}`)
    allCitySummary.forEach(citySummary => {
        if (!citySummary.className.includes("hidden")) {
            citySummary.className = citySummary.className + " hidden"

        }
    })

    if (citySummary.className.includes("hidden")) {
        citySummary.className = `${citySummaryClassname} ${citySummaryClassname}-${cityNameRemovedSpace}`
    } else {

        citySummary.className = citySummary.className + " hidden"

    }
}

export function showCityScore(cityName, cityScoreClassname) {
    const cityNameRemovedSpace = cityName.split(" ")[1]
    const cityScoreEle = document.querySelector(`.${cityScoreClassname}-${cityNameRemovedSpace}`)

    const allCityScore = document.querySelectorAll(`.${cityScoreClassname}`)
    allCityScore.forEach(cityScore => {
        if (!cityScore.className.includes("hidden")) {
            cityScore.className = cityScore.className + " hidden"
        }
    })

    if (cityScoreEle.className.includes("hidden")) {
        cityScoreEle.className = `${cityScoreClassname} ${cityScoreClassname}-${cityNameRemovedSpace}`
    } else {

        cityScoreEle.className = cityScore.className + " hidden"

    }
}


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

export function changePic(pics,city, picClassname) {
    const backgroundEle = document.querySelector(`.${picClassname}`);
    backgroundEle.style.backgroundImage = `url(${pics[city]})`
}


export function selectItem(ele, titleClassname, menuListClassname, dropdownClassname, cityChartClassname, tableClassname, cityTitleClassname, citySummaryClassname, pics, picClassname, cityScoreClassname) {
    const eleText = ele.textContent
    const cityNameNoSpaces = ele.textContent.replace(/\s/g, "")
    const titleEle = document.querySelector(titleClassname)
    const menuList = document.querySelector(menuListClassname)
    titleEle.textContent = eleText;
    toggleDropdown(menuList, dropdownClassname);

    showCharts(eleText, cityChartClassname)
    showTables(eleText, tableClassname)
    showTitle(eleText, cityTitleClassname)
    showSummary(eleText, citySummaryClassname)
    showCityScore(eleText, cityScoreClassname)
    changePic(pics,cityNameNoSpaces, picClassname)
}

export function closeDropdown(className, dropdownMenuClassname) {
    const dropdownMenuList = document.querySelector(`.${className}`)
    const dropdownMenu = document.querySelector(`.${dropdownMenuClassname}`)

    if (!dropdownMenuList.className.includes("inactive")) {
        dropdownMenuList.className = `${className} inactive`
        dropdownMenu.style.borderRadius = "10px";
    }
}


