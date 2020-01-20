export function createSummary(name, summary) {
    const citySummaryEle = document.createElement("p")
    const sectionEle = document.querySelector(".title-dropdown-wrapper")

    citySummaryEle.textContent = summary.replace(/[<].{1,2}[>]/g, "")

    if (name === "New York") {
        citySummaryEle.className = `citySummary citySummary-${name}`
    } else {
        citySummaryEle.className = `citySummary citySummary-${name} hidden`
    }

    sectionEle.insertAdjacentElement("afterend", citySummaryEle)
}

export function createSummary2(name, summary) {
    const citySummaryEle = document.createElement("p")
    const sectionEle = document.querySelector(".title-dropdown-wrapper-right")

    citySummaryEle.textContent = summary.replace(/[<].{1,2}[>]/g, "")

    if (name === "San Francisco") {
        citySummaryEle.className = `citySummary-right citySummary-right-${name}`
    } else {
        citySummaryEle.className = `citySummary-right citySummary-right-${name} hidden`
    }

    sectionEle.insertAdjacentElement("afterend", citySummaryEle)
}

