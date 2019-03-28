
var leftbox = document.getElementById("left");
var rightbox = document.getElementById("right");


leftbox.innerHTML="Vänstra Boxen";
rightbox.innerHTML="Högra Boxen";


var color=0;
    leftbox.addEventListener("mouseover", function(){

        leftbox.style.backgroundColor= "hsl("+color+",100%,50%)";
        document.body.style.backgroundColor= "hsl("+(color+60)+",100%,50%)";
        color+=60;
    });

    leftbox.addEventListener("mouseout", function(){

        leftbox.style.backgroundColor= "white";
        document.body.style.backgroundColor= "white";

    });

    


