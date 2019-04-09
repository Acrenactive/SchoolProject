var namn = prompt("Skriv ditt namn");


for (var n = 0; n < namn.length; n++)
{
    document.body.innerHTML += "*"+namn[n].toUpperCase();
}
document.body.innerHTML += "*<br>";




for (var n = namn.length-1; n>=0; n--)
{
    document.body.innerHTML += namn[n].toUpperCase();
}
document.body.innerHTML += " <> " +namn.toUpperCase();




   <script>
        var nr = ["noll","ett","två","tre","fyra"];
        var mobil = prompt("Mobil nr: ");
        document.body.innerHTML += mobil[0]+"<br>";
        document.body.innerHTML += nr[mobil[0]]+"<br>";
     </script>   
</body>
