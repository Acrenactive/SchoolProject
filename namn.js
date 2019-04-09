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

