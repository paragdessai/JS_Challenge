//Code to Add Two Numbers

var A = 12
var B = 10
alert(A+B)


//Add to strings

var A = "12"

var B = "10"

alert(A+B)



// Check variable is less or greater than 100 & Print

var num= 120

if(num>100) {
	alert("The number entered is greater then 100.")
}
else{

	alert( "The Numeber" + num +" is less then 100")
}

//Function with Name as argument & print

 alert(getGivenName('Mark'))

function getGivenName(n){
 return(n)
}


// Showing if, else if, else


var d=2
alert(getPrize(d))

function getPrize(n) {

	if(n=1) {

		alert("You have won trip to Rio")
	}

	else if (n=2) {
		alert("You have won Car ")

	}

	else{
		alert(" You selected Door"+d+" so Go Home")
	}


}

