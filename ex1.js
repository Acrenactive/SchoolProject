var land = ["Australien", "Kurdistan", "Equador", "Brasilien"];
var facit =["CANBERRA", "ASTRAL", "QUITO", "BRASILIA"];

var nr = Math.floor(Math.random()*4);

var svar = prompt("Vad heter huvudstaden i "+land[nr]);
if(svar.toUpperCase() == facit[nr])
{


    document.body.innerHTML ="Strålande! Du svarade rätt. " + facit[nr] + " är det rätta svaret";
}else{

    document.body.innerHTML ="fel svar";
}


