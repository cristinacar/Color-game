window.onload=function(){



// 	document.getElementById('circle1').addEventListener('click', function(){
// 		this.style.display = 'none';
// 	});
// 	document.getElementById('circle2').addEventListener('click', function(){
// 		this.style.display = 'none';	
// 	});
// 	document.getElementById('circle3').addEventListener('click', function(){
// 		this.style.display = 'none';
// 	});


// First task
// var myNumber = 10;
// var myText = 'some text';

// alert(myNumber);

// alert(myText);




/*Second task
    document.getElementById('secondButton').addEventListener('click', function(){
    	var myText = document.getElementById('testText').value;
    	alert(myText);
}*/


// Third task
	/*document.getElementById('secondButton').addEventListener('click', function(){
		var myText = document.getElementById('testText').value;
		document.getElementById('firstP').innerHTML += myText;

	})
	*/
 /*Array exemples
	var myArray= [];
	
	myArray[0] = 'My first element';

	myArray[1] = 'My second element';

	myArray.splice(0, 1, "My new first element"); //sterge 1 element de la pozitia 0 si inlocuieste cu elementele introduse

	//alert(myArray);

	myArray.push("My third element");

	myArray.pop();// scoate un element de la final (last index)
	myArray.shift(); //scoate un elemente de la inceput (first index)

	console.log(myArray);*/


/*if statement exemples
	var x = false;

	if (x == true) {
		//alert('value is true');
	} else {
		//alert('value is false');
	}

	var x='1';
	if (x === true) {

		alert('x is true');
	}else{
		alert('x is flase');
	}*/

/*First task if statement

	var pass = 'asd';

	document.getElementById('thirdButton').addEventListener('click', function(){
		var myText = document.getElementById('passInput').value;
		
		if (myText == pass) {
			alert ('Good Pass!');
		} else {
			alert ('Bad Pass!');
		}
	});*/

	
 /*The Guess Game Task
	var max = 5;
	var random = Math.floor(Math.random() * (max+1)) ;
		document.getElementById('guessButton').addEventListener('click', function(){
			var myNumber = document.getElementById('testNumber').value;

			if (myNumber == random) {
				alert ('Good Guess!');
			} else{
				if (myNumber < random){
					alert('Try higher!');
				} else {
					alert ('Try lower!');
				}
			}
		});*/


  /*For Example
	for (var i = 0; i < 5; i=i+1) {
		//loop code
		alert(i);		
	}*/

	/*var sum = 0;
	
	myFruits =[];
	myFruits[0] = 'Banana';
	myFruits[1] = 'Orange';
	myFruits[2] = 'Cherry';
	myFruits[3] = 'Kiwi';

	for (var i=0; i<=myFruits.length; i++){

		document.getElementById('forP').innerHTML += i;
	 

	}*/

	/*var i = 0;
	while (i < myFruits.length){
		document.getElementById('forP').innerHTML += i +' ';
		i++;
	}*/

};