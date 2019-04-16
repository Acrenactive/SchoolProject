
var tal, prev;
var omg=1, right=0, wrong=0;
function spela()
{
    tal = Math.floor(Math.random()*100)+1;
    document.getElementById("slump").innerHTML=tal;
}
function gissa(knapp)
{
  prev = tal;
  spela();
  if(tal > prev && knapp==1)
  {
      document.getElementById("resultat").innerHTML="Du gissade rätt! "+tal+" är större än "+prev+"<br>";
      right++;
    }
  else if(tal < prev && knapp==0) 
  {
      document.getElementById("resultat").innerHTML="Du gissade rätt! "+tal+" är mindre än "+prev+"<br>";
      right++;
  }
  else{
    document.getElementById("resultat").innerHTML="Du gissade fel!<br>";
    wrong++;  
}
  document.getElementById("resultat").innerHTML+="Omgång: "+omg+"<br>";
  document.getElementById("resultat").innerHTML+="Rätt: "+right+"<br>";
  document.getElementById("resultat").innerHTML+="Fel: "+wrong+"<br>";
  omg++;
}


----------------
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    <style>
            #slump{
                font-size:30px;
                height: 50px;
            }
          </style>
</head>





<body>
          <div id="slump"></div>
          <button type="button" onclick="spela()">SPELA</button>
          <button type="button" onclick="gissa(1)">HÖGRE</button>
          <button type="button" onclick="gissa(0)">LÄGRE</button>
          <div id="resultat"></div>
          <script src="ex3.js"></script>
</body>
</html>
