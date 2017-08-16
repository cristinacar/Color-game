  $(document).ready(function() {
    // closures, hoisting, prototype



    var anyFunction = function (string, interval){

      var i = 1, inte = interval * 1000;

      var int = setInterval(function(){
        console.log(text + " at " + i)
        i++;
      }, inte);

      setTimeout( function(){
        clearInterval(int);
      }, 13000);

    };

  });
