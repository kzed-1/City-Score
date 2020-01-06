import './styles/index.scss';

let w = 150 
let h = 175 

var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .fill("fill", "blue")