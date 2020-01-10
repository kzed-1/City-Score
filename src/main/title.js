function createTitle(name) {
    const cityName = document.createElement("h1")
    const sectionEle = document.querySelector("section")
    const linkWrapperEle = document.querySelector(".link-wrappers")

    cityName.textContent = name

    if (name === "New York") {
        cityName.className = `citytitle title-${name}`
    } else {
        cityName.className = `citytitle title-${name} hidden`
    }
    sectionEle.insertBefore(cityName, linkWrapperEle)
}

export default createTitle;