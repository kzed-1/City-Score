export function createTotalScore(name, cityScore, className) {
    const cityScoreEle = document.createElement("h1")
    const scoreDiv = document.querySelector(className)

    cityScoreEle.textContent = `Teleport Score: ${cityScore.toFixed(2)}`

    if (name === "New York") {
        cityScoreEle.className = `score-left score-left-${name}`
    } else {
        cityScoreEle.className = `score-left score-left-${name} hidden`
    }
    scoreDiv.appendChild(cityScoreEle)
}

export function createTotalScore2(name, cityScore, className) {
    const cityScoreEle = document.createElement("h1")
    const scoreDiv = document.querySelector(className)

    cityScoreEle.textContent = `Teleport Score: ${cityScore.toFixed(2)}`

    if (name === "San Francisco") {
        cityScoreEle.className = `score-right score-right-${name}`
    } else {
        cityScoreEle.className = `score-right score-right-${name} hidden`
    }
    scoreDiv.appendChild(cityScoreEle)
}
