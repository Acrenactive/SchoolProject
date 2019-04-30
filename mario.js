<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
     body{
         margin:0;
         overflow:hidden;
         background-color:white;
     }
    </style>
</head>
<body>
    <canvas id="cvs"></canvas>
    <script src="april30.js"></script>
</body>
</html>

---------------------------





var canvas = document.getElementById("cvs");
canvas.width = 600;
canvas.height = 400;
canvas.style.border ="solid 1px black";

var ctx = canvas.getContext("2d");

var x = 300;
var y =100;
var ySpeed = 3;
var xSpeed = 3;
var go;
var frame = 0;

ctx.beginPath();
ctx.rect(x,0,10,400);
ctx.fill();

var run= false;

window.addEventListener("keydown", function()
{
    var key = event.keyCode;
    if(key==38)  //UPP // VÄNSTER
    {
        if(run == false)
        {
            moveLeft();
            run=true;
        }   
    }
    if(key==40) //NER // HÖGER
    {
        if(run == false)
        {
            moveRight();
            run=true;
        }   
    }
});

window.addEventListener("keyup", function()
{
    window.cancelAnimationFrame(go);
    run = false;
    ctx.clearRect(0,0,600,400); //SUDDA
    ctx.drawImage(img,96,0,32,64,x, 305,32, 64);
}
);

var msPerImage = 100;

function moveLeft()
{
  

    ctx.beginPath();
    ctx.rect(580,y,10,100);
    ctx.fill();
     
  if(y>= 0) y += -ySpeed;
  go = requestAnimationFrame(moveLeft);
}

function moveRight()
{

  ctx.beginPath();
  ctx.rect(580,y,10,100);
  ctx.fill();
  if(y<=300)  y += ySpeed;
  go = requestAnimationFrame(moveRight);
}

var xpos=100;
var ypos=100;
var xInc = 5;
var yInc = 3;
var boll;
function bollar()
{
    ctx.clearRect(0,0,600,400); //SUDDA
    ctx.beginPath();
    ctx.rect(580,y,10,100);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(xpos,ypos,10,0, 2*Math.PI,true);
    ctx.fillStyle="red";
    ctx.closePath();
    ctx.fill();
    xpos += xInc;
    ypos += yInc;
    if(xpos<=10 || (xpos >=580 && ypos >y && ypos<y+100 )) xInc = -xInc;
    if(ypos<=10 || ypos >=390) yInc = -yInc;
    boll = requestAnimationFrame(bollar);
}
bollar();
