window.onload = function () {
    document.getElementById('circle1').addEventListener('click', function () {
        this.style.display = 'none';
    });
    document.getElementById('circle2').addEventListener('click', function () {
        this.style.display = 'none';
    });
    document.getElementById('circle3').addEventListener('click', function () {
        this.style.display = 'none';
    });

    var myNumber = 10;
    var myString = "Some text";

    // alert(myNumber);
    // alert(myString);

    document.getElementById('textButton').addEventListener('click', function () {
      // var inputVal = document.getElementById('textInput').value;
      // alert(inputVal);

      /* Adauga un nou paragraf cu textul din input la click peste buton
      var newItem = document.createElement("P");       // Create a <p> node
      var textnode = document.createTextNode(inputVal);  // Create a text node
      newItem.appendChild(textnode);                    // Append the text to <p>

      var formMy = document.getElementById("myForm");    // Get the <ul> element to insert a new node
      formMy.insertBefore(newItem); */
    });

/* ----------------------Operatii cu siruri------------------------- */

    // var myArray = [];
    // myArray[0] = "Primul element";
    // myArray[1] = "Al doilea element";
    // myArray[2] = "Al treilea element"
    //
    // myArray.push("Ultimul element"); //adauga un element la sfarsitul sirului
    // myArray.splice(0, 1); // sterge un element incepand cu potizia 0 etc...
    // myArray.splice(0, 2, "Noul element adaugat cu SPLICE", "Alt element adaugat"); //sterge 2 elemente incepand cu 0 si adauga 2+ elemente
    //
    // myArray.pop();//sterge un element de la finalul sirului
    // myArray.shift();//sterge un element de la inceputul sirului
    //
    // console.log(myArray);

/* ----------------------Operatii matematice------------------------- */
  // var x = true;
  // if (x == true) {
  //   alert('Value is true');
  // } else {
  //   alert('Value is false');
  // }

  // var x = '1';
  // if (x == true) {
  //   alert("x is true");
  // } else {
  //   alert("x is false");
  // }

  /* ----------------------Operatii cu form------------------------- */

  document.getElementById('passButton').addEventListener('click', function () {
    myPassword = "6160084";
    var inserterPassword = document.getElementById('passInput').value;

    if (inserterPassword == myPassword) {
      alert('The password is correct!')
    } else {
      alert('You dont know the password, get out of here!')
    }
  });

/* ----------------------Exercitiu------------------------- */
/* ------------Ghiceste numarul random generat------------- */

  // document.getElementById('startGameBTN').addEventListener('click', function () {
  //   var insertedNumber = window.prompt("Introduceti numarul");
  //   var max = 10;
  //   var randomNumber = Math.floor(Marh.random() * (max + 1));
  //
  //   function checkRand() {
  //     if (insertedNumber == randomNumber) {
  //       alert("Hurray, You won the Game!");
  //     } else {
  //       alert("Game OVER.\nWrong Number, Try Again!");
  //     }
  //   };
  //
  //   checkRand();
  // });

/* ----------------------Operatii ciclice------------------------- */
  var nwArr = ["First", "Second", "Third", "Fourth", "Fifth"];

  for (var i = 0; i < nwArr.length; i++) {
    document.getElementById("parText").innerHTML += "<br>" + nwArr[i];
  };


};
