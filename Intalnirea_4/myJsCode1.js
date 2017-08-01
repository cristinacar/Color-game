// window.onload = function () {
	
// function afiseaza() {

// 	var myArray = new Array();
// 		myArray[0] = "Java";
// 		myArray[1] = ".Net";
// 		myArray[2] = "JavaScript";


// 	for (i=0;i<myArray.length;i++)
// 	{
// 		document.getElementById('paragraf').innerHTML += myArray[i] + "<br >";
// 	}
// }

 var myGlobalValue = 0;
function myAlteringFunction() {
	alert('function called');
}

myAlteringFunction();

function myAverageFunction(x, y) {
		return (x+y) / 2;

}

var average = myAverageFunction(4, 2);

alert(average);

function changeGlobal() {
	myGlobalValue +=1;
};

changeGlobal();
console.log(myGlobalValue);

function changeGlobal2() {
	 var myGlobalValue =2;
};

changeGlobal2();

console.log(myGlobalValue);





// function afiseaza() {

// 	var myArray = new Array();
// 		myArray[0] = "Java";
// 		myArray[1] = ".Net";
// 		myArray[2] = "JavaScript";


// 	while( var i < myArray.length )
// 	{
// 		document.getElementById('paragraf').innerHTML += myArray[i] + "<br >";
// 	}
// }
// };


	// var myArray = [];

	// myArray[0] = 'My First Element';

	// myArray[1] = 'My Second Element';

	// myArray.push("My Third Element");//push adauga un element la urmatatorul index 

	// myArray.splice(0,1); // incepand cu elementul 0 stergem 1 element. Sterge 1 element de la pozitia 0.
	// myArray.splice(0,2);// sterge 2 elemente de la pozitia 0.

	// // sterge 1 element de la pozitia 0 si introduce doua noi elemente la pozitia 0.
	// myArray.splice(0,1, "My first element", "My other new element"); // aici replace

	// myArray.pop(); // scoate un element de la final ( ultimul index)
	// myArray.shift(); // scoate un element de la inceput (primul index)

	// console.log(myArray);


	// var x = true;

	// if(x == true) {
	// 	//alert('value is true');
	// } else
	// {
	// 	//alert('value is false');
	// }

	// var x = '0';

	// if(x == true) {
	// 	alert('x is true');
	// }else {
	// 	alert('x is fale');
	// }

// 	var x = 'Ana';

// document.getElementById('button').addEventListener('click', function() {

// 	var y = document.getElementById('myinput').value;
	

// 	if(x == y) {
// 		alert('Text corect introdus!');
// 	} else
// 	{
// 		alert('Text incorect')
// 	}


// })

// numar random intre 0 si 5;

// function myFunction() {

// 			var max = 5;
// 			var rand = Math.floor(Math.random() * (max + 1));
// 			document.getElementById('rand').innerHTML = max;
	
// };


	// for(var i=0; i<5; i++) {
	// 	//loop code
	// 	alert(i);
	// }




	
