import context from "./scripts/context.js";
import * as utils from "./scripts/utils.js";

const width = context.canvas.width;
const height = context.canvas.height;

//variabelen aanmaken 
let color;
let squareSize = [45, 55, 65, 75];
let xPos = width / 2;
let yPos = height / 2;
let frameCount = 0;

// achtergrond zwart maken na elke beweging opnieuw
context.fillStyle = "black";
context.fillRect(0,0,width,height);
// de functies oproepen met de positie in width en height om ervoor te zorgen dat het design correct getekend word op alle schermformaten
update();

    
// de functie om de cirkel in het midden te tekenen
function update() {
    frameCount++;
    context.fillStyle = utils.rgb(utils.randomNumber(150,255), utils.randomNumber(150,255), utils.randomNumber(150,255));
    utils.fillCircle(xPos,yPos, 32);
    xPos += utils.randomNumber(-10, 10);
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
    requestAnimationFrame(update);
    drawRectanglesDown(xPos - 25, yPos + 30);
    drawRectanglesLeft(xPos - 80, yPos - 25);
    drawRectanglesUp(xPos - 25, yPos - 85);
    drawRectanglesRight(xPos + 30, yPos - 25);

} 

// de functie om de rechthoeken naar beneden te tekenen
function drawRectanglesDown(xPos, yPos) {
    
    for (let i = 0; i < 70; i++) {
        color = utils.rgb(utils.randomNumber(0,100), utils.randomNumber(0,100), utils.randomNumber(0,100));
        context.fillStyle = color;
        context.fillRect(xPos + i * utils.randomNumber(-5, 5),yPos + i * utils.randomNumber(5, 10),squareSize[0],squareSize[0]);
    }
} 

// de functie om de rechthoeken naar links te tekenen
function drawRectanglesLeft(xPos, yPos) {
    for (let i = 0; i < 70; i++) {
        color = utils.rgb(utils.randomNumber(0,100), utils.randomNumber(0,100), utils.randomNumber(0,100));
        context.fillStyle = color;
        context.fillRect(xPos + i * utils.randomNumber(-25, -20),yPos + i * utils.randomNumber(-5, 5),squareSize[0],squareSize[0]);
    }
} 

// de functie om de rechthoeken naar boven te tekenen
function drawRectanglesUp(xPos, yPos) {
    for (let i = 0; i < 70; i++) {
        color = utils.rgb(utils.randomNumber(0,100), utils.randomNumber(0,100), utils.randomNumber(0,100));
        context.fillStyle = color;
        context.fillRect(xPos + i * utils.randomNumber(-10, 9),yPos + i * utils.randomNumber(-8, -10),squareSize[0],squareSize[0]);

    }

} 

// de functie om de rechthoeken naar rechts te tekenen
function drawRectanglesRight(xPos, yPos) {
    for (let i = 0; i < 70; i++) {
        color = utils.rgb(utils.randomNumber(0,100), utils.randomNumber(0,100), utils.randomNumber(0,100));
        context.fillStyle = color;
        context.fillRect(xPos + i * utils.randomNumber(25, 20),yPos + i * utils.randomNumber(-5, 5),squareSize[0],squareSize[0]);
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

