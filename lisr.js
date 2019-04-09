var lista = [];
var n = 0;
var sum = 0;

while(true)

{
    
var tmp = parseInt(prompt("Skriv in ett heltal eller skriv 0 för att avsluta"))
if(tmp == 0) break;
else lista[n] = tmp;
sum += tmp;
n++;

}
lista.sort((a,b))=> a-b;
document.body.innerHTML = "Du skrev talen: ";
for(var i = 0; i<lista.length; i++)
{
    document.body.innerHTML +=lista[i]+" ";
}
document.body.innerHTML +="<br>Största talet är "+Math.max(...lista);
document.body.innerHTML +="<br>Minsta talet är "+Math.min(...lista);
document.body.innerHTML +="<br>Summan av alla talen är "+sum;
document.body.innerHTML +="<br>Medelvärdet är "+Math.round(sum/lista.length);
