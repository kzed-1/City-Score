# City Score

## Background and Overview

Looking to get out of this town? Look no further, checkout City Score! This app allows users to select from 10 cities and find out the their quality of life score based on 16 categories: Housing, Cost of living, startups, venture capital, travel connectivity, commute, business freedom, safety, healthcare, education, environmental quality, economy, taxation, internet access, leisure and culture, tolerance, and outdoors. The scores are provided by teleport.org. 

<p align="center">
    <img src ="https://github.com/kzed-1/images/blob/master/cityscore.png?raw=true"/>
</p>


## Wireframe

<p align="center">
    <img src ="https://github.com/kzed-1/images/blob/master/wireframenew.png?raw=true"/>
</p>


## Functionality and map

In City Score, users can:
* select 10 cities from a drop down menu
* see visualization of scores for each category via a bar chart and table as well as a small description of the city 
* hovering over bars of the graph shows the score value and category 
* can campare two cities via the drop down menu. 

## Architecture and technology:

* Vanilla javascript for data manipulation
* D3 for generating the graph
* Webpack as the bundler 

## Implementation Timeline:
* Day 1 : collect data from teleport, set up the skeleton, create the logic using vanilla DOM manipulation
* Day 2: research D3 and figure out how to implement the data visualization 
* Day 3: CSS and finishing touches for the visualization 

## Planned expansions:

* Integrate API that allow for more cities searches
