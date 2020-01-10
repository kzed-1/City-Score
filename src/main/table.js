import * as Util from './util.js'

function createTable(cityData, name) {

    const columns = ["name", "score_out_of_10"]
    const columnNames = ["Categories", "Score"]

    let table = d3.select('.profile')
        .append('table')
        .attr("class", `table table-${name} hidden`)
        .style("border-radius", "10px")
        .style("border", "2px solid black");
    let header = table
        .append("header")
        .attr("class", "table-header");
    let tablebody = table.append("tablebody");

    if (name === "New York") {
        table.attr("class", `table table-${name}`)

    } else {
        table.attr("class", `table table-${name} hidden`)
    }

    header
        .append("tr")
        .attr("class", "header-wrapper")
        .style("color", "blue")
        .selectAll("th")
        .data(columnNames)
        .enter()
        .append("th")
        .attr("class", function (d) {
            return d;
        })
        .style("text-align", "center")
        .text(function (d) {
            return d;
        })



    let rows = tablebody
        .selectAll("tr")
        .data(cityData)
        .enter()
        .append("tr");


    let cells = rows.selectAll("td")
        .data(function (row) {
            return columns.map(function (column) {
                return {
                    column: column,
                    value: row[column]
                }
            })
        })
        .enter()
        .append("td")
        .text(function (d) {
            if (typeof d.value === "number") {
                if (d.value.toFixed(2) === 10) {
                    return "10.0 /10"
                } else {
                    return `${d.value.toFixed(2)} /10`
                }
            } else {
                return d.value
            }
        })
        .attr("class", function (d) {
            // debugger
            if (typeof d.value === "string") {
                const newStr = d.value.replace(/\s/g, "")
                const newStr2 = newStr.replace(/[&]/g, "")
                return `category ${newStr2} nonhighlighted`
            } else {
                return `category ${d.value} nonhighlighted`
            }
        })
        .attr("id", function (d) {
            if (typeof d.value === "string") {
                const newStr = d.value.replace(/\s/g, "")
                const newStr2 = newStr.replace(/[&]/g, "")
                return newStr2
            } else {
                return d.value
            }
        })
    // .style("width", "177px")
}

export default createTable;