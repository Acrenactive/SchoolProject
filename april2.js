var bild = document.getElementById("bild");
var text = document.getElementById("text");

var nr = 10000;
var big=0;
window.addEventListener("keydown",function(){

var key = event.keyCode;
if(key ==39)
{

 if(nr%4==0) {
    bild.src="summer.jpg";
    text.innerHTML="Sommar";

  }

 else if(nr%4==1) {
    bild.src="autumn.jpg";
    text.innerHTML="höst"; 
}

 else if(nr%4==2) {
    bild.src="winter.jpg";
    text.innerHTML="Vinter"; 
}


    else {
    bild.src="spring.jpg";
    text.innerHTML="Vår";

}

 nr++;
}
  
  if(key ==37)

  {
  
   if(nr%4==0) {
      bild.src="summer.jpg";
      text.innerHTML="Sommar";
  
    }
  
   else if(nr%4==1) {
      bild.src="autumn.jpg";
      text.innerHTML="höst"; 
  }
  
   else if(nr%4==2) {
      bild.src="winter.jpg";
      text.innerHTML="Vinter"; 
  }
  
  
      else {
      bild.src="spring.jpg";
      text.innerHTML="Vår";
  
  }

   nr--;
  }
   
  if(key==32){
      if(big%2==0) bild.style.width="400px";
      else bild.style.width="300px";
      big++;

  }


});

document.body.addEventListener("click", function(){
alert("Använd tangenter !\nHöger piltangent: Nästa B");
});
