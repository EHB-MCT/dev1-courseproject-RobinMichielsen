import context from "./scripts/context.js"
import * as utils from "./scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawPattern();

function drawPattern(){
    drawRectangles(width / 6.5, height / 6, width / 1.4, height / 1.4);
    drawLines(width / 6, height / 4, width / 2 * 1.666, height / 4);
    drawCrackedLines();
}


function drawRectangles(x, y, width, height) {
context.strokeStyle = "black";
context.strokeRect(x, y, width, height);
}

function drawLines(x1, y1, x2, y2) {
    utils.drawLine(x1, y1, x2, y2);
}

function drawCrackedLines() {
    context.strokeStyle = "black";
    context.lineWidth = 1;
    utils.drawLine(255,600, 350, 550);
    utils.drawLine(355,550, 450, 600);
    utils.drawLine(455,600, 550, 550);
    utils.drawLine(555,550, 650, 600);
    utils.drawLine(655,600, 750, 550);
    utils.drawLine(755,550, 850, 600);
    utils.drawLine(855,600, 950, 550);
    utils.drawLine(955,550, 1050, 600);
    utils.drawLine(1055,600, 1150, 550);
    utils.drawLine(1155,550, 1250, 600);

}

