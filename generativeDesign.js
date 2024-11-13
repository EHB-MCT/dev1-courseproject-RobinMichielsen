import context from "./scripts/context.js";
import * as utils from "./scripts/utils.js";

const width = context.canvas.width;
const height = context.canvas.height;

// achtergrond zwart maken
context.fillStyle = "black";
context.fillRect(0,0,width,height);

//variabelen aanmaken 
let size = 32;
let color;

// de functies oproepen met de positie in width en height om ervoor te zorgen dat het design correct getekend word op alle schermformaten
drawCircle(width/2 - 2, height/2 - 4, size, color);
drawRectangles(width/2 - 25, height/2 + 30);
drawRectangles2(width/2 - 80, height/2 - 25);
drawRectangles3(width/2 - 25, height/2 - 85);
drawRectangles4(width/2 + 30, height/2 - 25);

// de functie om de cirkel in het midden te tekenen
function drawCircle(x, y, size, color) {
        color = utils.rgb(utils.randomNumber(150,255), utils.randomNumber(150,255), utils.randomNumber(150,255));
        context.fillStyle = color;
        utils.fillCircle(x,y,size);
} 

// de functie om de rechthoeken naar beneden te tekenen
function drawRectangles(x, y) {
    for (let i = 0; i < 70; i++) {
        color = utils.rgb(utils.randomNumber(0,100), utils.randomNumber(0,100), utils.randomNumber(0,100));
        context.fillStyle = color;
        context.fillRect(x + i * utils.randomNumber(-5, 5),y + i * utils.randomNumber(5, 10),45,45);
    }
} 

// de functie om de rechthoeken naar links te tekenen
function drawRectangles2(x, y) {
    for (let i = 0; i < 70; i++) {
        color = utils.rgb(utils.randomNumber(0,100), utils.randomNumber(0,100), utils.randomNumber(0,100));
        context.fillStyle = color;
        context.fillRect(x + i * utils.randomNumber(-25, -20),y + i * utils.randomNumber(-5, 5),45,45);
    }
} 

// de functie om de rechthoeken naar boven te tekenen
function drawRectangles3(x, y) {
    for (let i = 0; i < 70; i++) {
        color = utils.rgb(utils.randomNumber(0,100), utils.randomNumber(0,100), utils.randomNumber(0,100));
        context.fillStyle = color;
        context.fillRect(x + i * utils.randomNumber(-10, 9),y + i * utils.randomNumber(-8, -10),45,45);

    }

} 

// de functie om de rechthoeken naar rechts te tekenen
function drawRectangles4(x, y) {
    for (let i = 0; i < 70; i++) {
        color = utils.rgb(utils.randomNumber(0,100), utils.randomNumber(0,100), utils.randomNumber(0,100));
        context.fillStyle = color;
        context.fillRect(x + i * utils.randomNumber(25, 20),y + i * utils.randomNumber(-5, 5),45,45);
    }
} 

