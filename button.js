function test()

{
var txt = document.getElementById("txt").value;
var res = document.getElementById("res");
txt = txt.toUpperCase();


res.innerHTML = "*";
for (var n = 0; n < txt.length; n++)
{
    res.innerHTML += txt[n]+"*";
}
}
