import context from "./scripts/context.js";
import * as utils from "./scripts/utils.js";

const width = context.canvas.width;
const height = context.canvas.height;

    // de positie van de cursor opvragen

window.onmousemove = move;

/**
 * 
 * @param {MouseEvent} eventData 
 */

function move(eventData) {
    let x = eventData.pageX;
    let y = eventData.pageY;
    


    // achtergrond zwart maken na elke beweging opnieuw
    context.fillStyle = "black";
    context.fillRect(0,0,width,height);
    // de functies oproepen met de positie in width en height om ervoor te zorgen dat het design correct getekend word op alle schermformaten
    drawCircle(x, y, size, color);
    drawRectanglesDown(x - 25, y + 30);
    drawRectanglesLeft(x - 80, y - 25);
    drawRectanglesUp(x - 25, y - 85);
    drawRectanglesRight(x + 30, y - 25);
    
}

//variabelen aanmaken 
let size = 32;
let color;
let squareSize = [45, 55, 65, 75];

// de functie om de cirkel in het midden te tekenen
function drawCircle(x, y, size, color) {
        color = utils.rgb(utils.randomNumber(150,255), utils.randomNumber(150,255), utils.randomNumber(150,255));
        context.fillStyle = color;
        utils.fillCircle(x,y,size);
    
} 

// de functie om de rechthoeken naar beneden te tekenen
function drawRectanglesDown(x, y) {
    for (let i = 0; i < 70; i++) {
        color = utils.rgb(utils.randomNumber(0,100), utils.randomNumber(0,100), utils.randomNumber(0,100));
        context.fillStyle = color;
        context.fillRect(x + i * utils.randomNumber(-5, 5),y + i * utils.randomNumber(5, 10),squareSize[0],squareSize[0]);
       
    }
} 

// de functie om de rechthoeken naar links te tekenen
function drawRectanglesLeft(x, y) {
    for (let i = 0; i < 70; i++) {
        color = utils.rgb(utils.randomNumber(0,100), utils.randomNumber(0,100), utils.randomNumber(0,100));
        context.fillStyle = color;
        context.fillRect(x + i * utils.randomNumber(-25, -20),y + i * utils.randomNumber(-5, 5),squareSize[0],squareSize[0]);
    }
} 

// de functie om de rechthoeken naar boven te tekenen
function drawRectanglesUp(x, y) {
    for (let i = 0; i < 70; i++) {
        color = utils.rgb(utils.randomNumber(0,100), utils.randomNumber(0,100), utils.randomNumber(0,100));
        context.fillStyle = color;
        context.fillRect(x + i * utils.randomNumber(-10, 9),y + i * utils.randomNumber(-8, -10),squareSize[0],squareSize[0]);

    }

} 

// de functie om de rechthoeken naar rechts te tekenen
function drawRectanglesRight(x, y) {
    for (let i = 0; i < 70; i++) {
        color = utils.rgb(utils.randomNumber(0,100), utils.randomNumber(0,100), utils.randomNumber(0,100));
        context.fillStyle = color;
        context.fillRect(x + i * utils.randomNumber(25, 20),y + i * utils.randomNumber(-5, 5),squareSize[0],squareSize[0]);
    }
} 

for (let i = 0; i < 4; i++) {

    utils.randomNumber(0, 100);

}

// signature();

// function signature() {

//     context.fillRect(100, 100, 300, 300);
//     context.fillStyle = "orange";
//     context.fillRect(125, 325, 250, 50);  
//     context.fillRect(125, 175, 50, 50);
//     context.fillRect(175, 175, 50, 50);
//     context.fillRect(175, 125, 50, 50);
//     context.fillRect(225, 125, 50, 50);
//     context.fillRect(275, 125, 50, 50);
//     context.fillRect(275, 175, 50, 50);
//     context.fillRect(325, 175, 50, 50);
// }

