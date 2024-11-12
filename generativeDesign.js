import context from "./scripts/context.js";
import * as utils from "./scripts/utils.js";


const width = context.canvas.width;
const height = context.canvas.height;

context.fillStyle = "black";
context.fillRect(0,0,width,height);

let size = 32;
let color;

drawCircle(width/2 - 2, height/2 - 4, size, color);
drawRectangles(width/2 - 25, height/2 + 30);
drawRectangles2(width/2 - 80, height/2 - 25);
drawRectangles3(width/2 - 25, height/2 - 85);
drawRectangles4(width/2 + 30, height/2 - 25);

function drawCircle(x, y, size, color) {
        color = utils.rgb(utils.randomNumber(0,255), utils.randomNumber(0,255), utils.randomNumber(0,255))
        context.fillStyle = color;
        utils.fillCircle(x,y,size);
} 


function drawRectangles(x, y) {


    for (let i = 0; i < 70; i++) {
        color = "yellow";
        context.fillStyle = color;
        context.fillRect(x + i * utils.randomNumber(-5, 5),y + i * utils.randomNumber(5, 10),45,45);

    }

} 

function drawRectangles2(x, y) {


    for (let i = 0; i < 70; i++) {
        color = "blue";
        context.fillStyle = color;
        context.fillRect(x + i * utils.randomNumber(-25, -20),y + i * utils.randomNumber(-5, 5),45,45);

    }

} 

function drawRectangles3(x, y) {


    for (let i = 0; i < 70; i++) {
        color = "green";
        context.fillStyle = color;
        context.fillRect(x + i * utils.randomNumber(-10, 9),y + i * utils.randomNumber(-8, -10),45,45);

    }

} 

function drawRectangles4(x, y) {


    for (let i = 0; i < 70; i++) {
        color = "red";
        context.fillStyle = color;
        context.fillRect(x + i * utils.randomNumber(25, 20),y + i * utils.randomNumber(-5, 5),45,45);

    }

} 