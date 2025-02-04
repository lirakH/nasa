console.log("hello");


/*
Loops can execute a block of code a number of times.

Shembuj perdorimi:
 ➣  Count from 1 to 10.
 ➣  Go through all the words in a dictionary to see whether they’re palindromes.
 ➣  For each customer that has an outstanding balance, send out an email reminder that payment is due.
 ➣  For each directory under this one, find music files and add them to the list of known music.

llojet e llupave:
 ➣   for - loops through a block of code a number of times
 ➣   for/in - loops through the properties of an object
 ➣   for/of - loops through the values of an iterable object
 ➣   while - loops through a block of code while a specified condition is true
 ➣   do/while - also loops through a block of code while a specified condition is true

*/

var Cars = ["Mercedes", "Audi", "BMW", "Peugeot", "Renault", "Tesla", "volvo", "porsche"];

var text = Cars[0] + "<br>";
var text = text + Cars[1] + "<br>";
var text = text + Cars[2] + "<br>";  // var text += Cars[2] + "<br>";
var text = text + Cars[3] + "<br>";
var text = text + Cars[4] + "<br>";
var text = text + Cars[5] + "<br>";
var text = text + Cars[6] + "<br>";
var text = text + Cars[7] + "<br>";

/* for loop

for(starti; fundi; ndryshimi){
	kodi qe perseritet
}

i = i + 1
i++

i = i + 2
i += 2

i = i + 3
i += 3

*/

var VleratArres = "";

for (var i = 0; i < Cars.length; i++) {
	VleratArres = VleratArres + Cars[i] + "<br>";
}

document.getElementById('text1').innerHTML = text;

document.getElementById('text2').innerHTML = VleratArres;

/*

for (variabla in iterable){
	code to be executed
}

Iterable - stores the list from which the loop will get the elements. 
			It represents an object that has iterable properties.

*/

var personi = {firstName: "John", lastName: "Doe", age: 14}

console.log(personi.firstName);
console.log(personi["firstName"]);

var text3 ="";
var x;

for (x in personi){
	text3 += personi[x] + " ";
}

document.getElementById("text3").innerHTML = text3;

/*

for/of loop

for (variable of iterable){
	code to be executed
}

iterable - array, string

*/

var name = ["Tuana", "Deljana", "Esma", "Ilirja", "Ermal", "Dijoni", "Altini"];

var text4 = "";

for(var e of name){
	text4 += e;
}

document.getElementById("text4").innerHTML = text4;


var fjalia = "Çfardo fjalie vendoset ketu";
var text5 = "";

for (var shkronja of fjalia){
	text5 += shkronja + "<br>";
}

document.getElementById("text5").innerHTML = text5;


/* while

while(condition){
	code to be executed
}

*/

var n = 1;
var sum = 0;

while(n<8){
	sum += n;
	n++;
}
console.log(sum);

//7! = 1+2+3+4+5+6+7 = 28


/*

do/while loop

do{
	code to be executed
}while(condition)

*/

var L = 100;

do{
	L += 1;
	console.log(L);
}while (L<105);