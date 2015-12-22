
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $('<p></p>');
var $bL = $('<div class="button"  id="left"></div>');
var $bR = $('<div class="button" id="right"></div>');

$overlay.append($image);
$overlay.append($caption);
$overlay.append($bL);
$bL.text("Prev")
$overlay.append($bR);
   $bR.text("Next");

$("body").append($overlay);

$(".gallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");

  $image.attr("src", imageLocation);
    
  $overlay.show();
    
 //Get child's alt attribute and set caption
  var cText = $(this).children("img").attr("alt");
  $caption.text(cText);
    
 
    
});




$overlay.click(function(){
$(this).hide();
});
    