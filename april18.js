
/*
var canvas = document.getElementById("cvs");
canvas.width = 600;
canvas.height = 600;
var ctx = canvas.getContext("2d");

canvas.style.border="solid 1px black";

*/
var canvas = document.getElementById("cvs");
canvas.width = 600;
canvas.height = 600;
var ctx = canvas.getContext("2d");
var color = 0;
for(var i = 0; i <600; i+= 10)
{
    ctx.beginPath();
    ctx.moveTo(0,i);
    ctx.lineTo(i,600);
    ctx.strokeStyle="hsl("+color+",100%,50%)";
    ctx.stroke();
    color += 6;
}
for(var i = 0; i < 5; i++)
{
    ctx.beginPath();
    ctx.arc(300+i*30,300,200-i*30,0,2*Math.PI,true);
    if(i%2==0) ctx.fillStyle="black";
    else ctx.fillStyle="white";
    ctx.closePath();
    ctx.fill();
}

--------------------------------------------

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>


<body>
<canvas id="cvs" ></canvas>    
<script src="april18.js"></script>

</body>
</html>
