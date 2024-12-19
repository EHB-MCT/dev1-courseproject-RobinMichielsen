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

update();

// de functie om de cirkel in het midden te tekenen
function update() {
    frameCount++;
    context.fillStyle = "blue";
    utils.fillCircle(xPos,yPos, 32);
    xPos += utils.randomNumber(-10, 10);
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
    drawRectanglesDown(xPos - 25, yPos + 30);
    drawRectanglesLeft(xPos - 80, yPos - 25);
    drawRectanglesUp(xPos - 25, yPos - 85);
    drawRectanglesRight(xPos + 30, yPos - 25);

    signature();

    requestAnimationFrame(update);
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


function signature() {
    context.fillRect(1165, 413, 300, 300);
    context.fillStyle = "orange";
    context.fillRect(1190, 638, 250, 50);  
    context.fillRect(1190, 488, 50, 50);
    context.fillRect(1240, 488, 50, 50);
    context.fillRect(1240, 438, 50, 50);
    context.fillRect(1290, 438, 50, 50);
    context.fillRect(1340, 438, 50, 50);
    context.fillRect(1340, 488, 50, 50);
    context.fillRect(1390, 488, 50, 50);
}

