/* ------------------------------jQuery------------------------------ */
  $(document).ready(function(){
    $("#circle").click(function() {
      alert($("paragraph").html());

      $("#paragraph").html("Hello jQuery!");
    });

    $.get("https://jsonplaceholder.typicode.com/posts", function(response){
      console.log(response.length);

      console.log(response[80].title);

      for (var i = 0; i < response.length; i++) {
        $("#articles").append("<h3>" + response[i].title + "</h3>" + "<p>" + response[i].body + "</p>");
      };

    });

  });
