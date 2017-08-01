window.onload = function () {


	function myFunction()
    {
        var input = document.getElementById('myText')
        var p = document.getElementById('textParagraf');
        p.innerHTML = p.innerHTML + input.value;
       
    }
	
// 	document.getElementById('circle1').addEventListener('click', function() {
// 		this.style.display = 'none';
// 	});

// 	document.getElementById('circle2').addEventListener('click', function() {
// 		this.style.display = 'none';
// 	});
// 	document.getElementById('circle3').addEventListener('click', function() {
// 		this.style.display = 'none';
// 	});


// }
// document.getElementById('text').innerHTML="Hello Javascript!";




// // document.getElementById('text').innerHTML = document.getElementById('text').innerHTML + " Again"; // aici concatenam un string, metoda lunga



//  document.getElementById('myButton').addEventListener('click', function() {

// document.getElementById('text').style.color = 'red';
// document.getElementById('text').style.fontSize = '40px';



// // 		// document.getElementById('text').innerHTML += " Again"; sfarsit
// // 		// document.getElementById('text').innerHTML = " Again" + document.getElementById('text').innerHTML = " Again"; //inceput
// // 		// innerHtml este interperetat ca html nu doar ca text.

// // 		document.getElementById('text').innerHTML += " <h1>Again</h1>";
// });
// functia de callback se realizeaza in momentul in care accesam butonul 


// variabile locale

	// var myNumber = 10;
	// var myText = 'Some text';


	// alert(myNumber);

	// alert(myText);


	document.getElementById('button').addEventListener('click', function () {
			alert(document.getElementById('myText').value);
			
	})

	 // function myFunction()
  //   {
  //       var input = document.getElementById('myText')
  //       var p = document.getElementById('textParagraf');
  //       p.innerHTML = p.innerHTML + input.value;
  //      alert('fsdfs');
  //   }

};