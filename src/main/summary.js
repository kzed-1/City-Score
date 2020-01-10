function createSummary(name, summary) {
    const citySummaryEle = document.createElement("p")
    const sectionEle = document.querySelector("section")

    citySummaryEle.textContent = summary.replace(/[<].{1,2}[>]/g, "")

    if (name === "New York") {
        citySummaryEle.className = `citySummary summary-${name}`
    } else {
        citySummaryEle.className = `citySummary summary-${name} hidden`
    }

    sectionEle.insertAdjacentElement("afterend", citySummaryEle)
}

export default createSummary;