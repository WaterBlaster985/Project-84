window.addEventListener("keydown", key_down);
var canvas = document.getElementById("myCanvas");
var cts = canvas.getContext("2d");
var car1_width = 120;
var car1_height = 70;
var car1_image = "car1.png";
var car1_x = 10;
var car2_y = 10;
var car2_width = 120;
var car2_height = 70;
var car2_image = "car2.png";
var car2_x = 10;
var car2_y = 10;
var background_image = 'racing.jpg'

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image
    car1_imgTag = new Image();
    car1_imgTag.onload = uploadCar1;
    car1_imgTag.src = car1_image;
}
function uploadBackground();{
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadCar1(){
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height)
}
function uploadCar2(){
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height)
}
function key_down(e){
    keyPressed= e.keyCode;
    if (keyPressed = 37){
        car1_left()
    }
    if (keyPressed = 38){
        car1_up()
    }
    if (keyPressed = 39){
        car1_right()
    }
    if (keyPressed = 40){
        car1_down()
    }
    if (keyPressed = 65){
        car2_left()
    }
    if (keyPressed = 87){
        car2_up()
    }
    if (keyPressed = 68){
        car2_right()
    }
    if (keyPressed = 83){
        car2_down()
    }
}