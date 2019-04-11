var omg = 0;
var firstName;
var lastName;

function test()
{

    if(omg == 0)
    {
        firstName = document.getElementById("txt").value;
        if(firstName=="") 
        {
            document.getElementById("rubrik").innerHTML="SKRIV DITT FÖRNAMN, IDIOT!!!";
        }
        else{
            omg++;  
            document.getElementById("rubrik").innerHTML="Skriv ditt efternamn";
        }
        document.getElementById("txt").value="";
        
    }
    else if(omg == 1)
    {
        lastName = document.getElementById("txt").value; 
        document.getElementById("res").innerHTML=firstName + " " +lastName;
    }

}
