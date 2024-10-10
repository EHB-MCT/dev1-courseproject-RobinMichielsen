let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");


signature();

function signature() {

    context.fillRect(100, 100, 300, 300);
    context.fillStyle = "orange";
    context.fillRect(125, 325, 250, 50);  
    context.fillRect(125, 175, 50, 50);
    context.fillRect(175, 175, 50, 50);
    context.fillRect(175, 125, 50, 50);
    context.fillRect(225, 125, 50, 50);
    context.fillRect(275, 125, 50, 50);
    context.fillRect(275, 175, 50, 50);
    context.fillRect(325, 175, 50, 50);
}