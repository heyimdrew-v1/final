$(document).ready(function() {

$("header h1").hide().fadeIn(1500);

  
  $("#required-courses ul li").hover(
  function() {
  $(this).css({ "text-decoration": "underline", "font-weight": "bold" });
},
  function() {
  $(this).css({ "text-decoration": "none", "font-weight": "normal" });
  }
);

  
  $("h2").hover(
  function() {
  $(this).css({ "font-size": "1.2em" });
},
  function() {
  $(this).css({ "font-size": "1em" });
  }
);

  
$("a").hover(
  function() {
  $(this).css("color", "#3498db"); 
},
  function() {
  $(this).css("color", ""); 
  }
);

  
$("#program-pictures img").hover(
  function() {
  $(this).css({ "transform": "scale(1.1)", "transition": "transform 0.5s" });
},
  function() {
  $(this).css({ "transform": "scale(1)", "transition": "transform 0.5s" });
    }
  );
});
