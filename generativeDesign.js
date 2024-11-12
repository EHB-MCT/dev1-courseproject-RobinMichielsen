import context from "./scripts/context.js";
import * as utils from "./scripts/utils.js";


const width = context.canvas.width;
const height = context.canvas.height;

context.fillStyle = "black";
context.fillRect(0,0,width,height);

let size = 20;
let color;

drawCircle(width/2, height/2, size, color);
drawRectangles(width/2 - 25, height/2 + 30);
drawRectangles2(width/2 - 80, height/2 - 25);

function drawCircle(x, y, size, color) {
        color = "red";
        context.fillStyle = color;
        utils.fillCircle(x,y,size);
} 


function drawRectangles(x, y) {


    for (let i = 0; i < 50; i++) {
        color = "yellow";
        context.fillStyle = color;
        context.fillRect(x + i * utils.randomNumber(-5, 5),y + i * utils.randomNumber(5, 10),50,50);

    }

} 

function drawRectangles2(x, y) {


    for (let i = 0; i < 50; i++) {
        color = utils.rgb();
        context.fillStyle = color;
        context.fillRect(x + i * utils.randomNumber(-25, -20),y + i * utils.randomNumber(-5, 5),50,50);

    }

} 