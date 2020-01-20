export function createTitle(name) {
    const cityName = document.createElement("h1")
    const sectionEle = document.querySelector(".title-dropdown-wrapper")
    const spacerLeft = document.querySelector(".city-score-left")

    cityName.textContent = name

    if (name === "New York") {
        cityName.className = `citytitle citytitle-${name}`
    } else {
        cityName.className = `citytitle citytitle-${name} hidden`
    }
    sectionEle.insertBefore(cityName, spacerLeft)
}


export function createTitle2(name) {
    const cityName = document.createElement("h1")
    const sectionEle = document.querySelector(".title-dropdown-wrapper-right")
    const spacerRight = document.querySelector(".city-score-right")

    cityName.textContent = name



    if (name === "San Francisco") {
        cityName.className = `citytitle-right citytitle-right-${name}`
    } else {
        cityName.className = `citytitle-right citytitle-right-${name} hidden`
    }
    sectionEle.insertBefore(cityName, spacerRight)
}





