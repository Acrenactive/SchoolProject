var omg = 0;
var firstName;
var lastName;

function test()
{

    if(omg == 0)
    {
        firstName = document.getElementById("txt").value;
        document.getElementById("txt").value="";
        document.getElementById("rubrik").innerHTML="Skriv ditt efternamn";
    }
    else if(omg == 1)
    {
        lastName = document.getElementById("txt").value; 
        document.getElementById("res").innerHTML=firstName + " " +lastName;
    }
omg++;
}
