$( document ).ready(function() {
    console.log( "ready!" );


/// Scroll fade in when 100px from the top 
$(window).scroll(function() {
  if ($(this).scrollTop()> 100) {
    $('nav').fadeIn();
   } else {
    $('nav').fadeOut();
   }
});

/// Scroll back to top
$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

/*
var clickFunk = funcion () {
    parts.head.transform('');
    parts.head.animate ({ 
        transform: 'r45,150,150' }, 1000, mina.bounce 
        ) ;
};

var endAnim = function() {
    parts.head.animate({ transform: 'r90,200,200' }, 2000, mina.bounce );
}

parts.head.click( clickFunk );
*/