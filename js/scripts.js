$(document).ready(function() {
  $("#form").submit(function(event){
    event.preventDefault();
    var year = $("#input").val();

    if (year % 100 == 0) {
    console.log(false);
    $("#output").show();

  } else if (year % 4 == 0  || year % 400 == 0) {
      // return ("true")
      console.log(true);
      $("#output").show();
      $("#not").hide();

      // return ("false")
    } else {
      // return("This is not a leap year yo!")
      console.log(false);
      $("#output").show();
    }
  });
});
