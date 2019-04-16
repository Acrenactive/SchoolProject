var tal=[];
function multi()
{
    tal[0] = Math.floor(Math.random()*10)+1;
    tal[1] = Math.floor(Math.random()*10)+1;
    document.getElementById("uppgift").innerHTML=tal[0]+" * "+tal[1]+" = ";
}
function feedback()
{
    var txt =["Nästan rätt, försök igen", "Oj, nu blev det fel",
              "Detta var inte bra, skräp dig!", "Bra gissat, men tyvärr fel",
              "Snart hittar du rätt, försök igen","Åh, det var nästan rätt"];
     var nr = Math.floor(Math.random()*6);
     return txt[nr];
 }

function check()
{
   var svar = document.getElementById("svar").value;
   if(svar == tal[0]*tal[1])
   {
       document.getElementById("feedback").innerHTML ="RÄTT SVAR!";
       multi();
       document.getElementById("svar").value="";
   }
   else{
    document.getElementById("feedback").innerHTML =feedback();
   }
}
multi();


--------------

<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
      #uppgift{
          width: 70px;
          float:left;
      }
    </style>
</head>
<body><div id="uppgift"></div>
<input type="text" id="svar" style="width:40px"><button type="button" onclick="check()">RÄTTA</button>
<script src="ex3.js"></script>
<div id="feedback"></div>
</body>
</html>


