"use strict";


//START
//
//
// HERE WE SET THE ATTRIBUTE ID TO ALL TILES
// we grab all tile divs, tagged by the same class name oneTile
let allTiles = document.querySelectorAll(".oneTile"); 

let idVariable = 1;

allTiles.forEach( oneTile => {
    // oneTile.setAttribute("id", "id_you_like")
    oneTile.setAttribute("id", `t${idVariable}`)
    // Change text inside that tile, e.g. Tile 1
    oneTile.innerHTML = `${idVariable}`;
    // Create an event listener / event handler 
    // increase idVariable, so that next time has a higher number
    idVariable += 1
}
)

// when a cell is clicked - pass the ID of the cell to a function
function clickedBox(boxId) {

}

// randomly make a mole appear
function displayMole () {

// getElementById - get random ones, when you pick it

}