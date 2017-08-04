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

/* ----------------------Adauga un nou paragraf cu textul din input la click peste buton -------------------------
    document.getElementById('textButton').addEventListener('click', function () {
      var inputVal = document.getElementById('textInput').value;
      alert(inputVal);
      document.getElementById('paragraf').innerHTML = "<p>" + inputVal + "</p>";
    });

-----------------------------------------------Operatii cu siruri-------------------------------------------------- */

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

  // document.getElementById('passButton').addEventListener('click', function () {
  //   myPassword = "6160084";
  //   var inserterPassword = document.getElementById('passInput').value;
  //
  //   if (inserterPassword == myPassword) {
  //     alert('The password is correct!')
  //   } else {
  //     alert('You dont know the password, get out of here!')
  //   }
  // });

/* ----------------------Exercitiu------------------------- */
/* ------------Ghiceste numarul random generat------------- */

  // function checkRand() {
  //   var max = 10;
  //   var randomNumber = Math.floor(Math.random() * (max + 1));
  //   var insertedNumber = window.prompt("Introduceti numarul");
  //
  //   if (insertedNumber == randomNumber) {
  //     alert("Hurray, You won the Game!");
  //   } else {
  //     alert("Game OVER.\nWrong Number, Try Again!");
  //   }
  // };
  //
  // document.getElementById('startGameBTN').addEventListener('click', function () {
  //   checkRand();
  // });

/* ----------------------Operatii ciclice------------------------- */

  // var nwArr = ["First", "Second", "Third", "Fourth", "Fifth"];
  //
  // for (var i = 0; i < nwArr.length; i++) {
  //   document.getElementById("parText").innerHTML += "<p>" + nwArr[i] + "</p>";
  // };

  /* ---------------------Functie medieAritmetica--------------------- */

  function medieAritmetica(x, y) {
    return ((x + y) / 2);
  };

  console.log(medieAritmetica(6, 1));





};
