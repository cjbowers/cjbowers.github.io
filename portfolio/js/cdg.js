$(document).ready(function() {
    
    var cnt = $("img").length;
    $("img").one("load", function() {
        cnt--;

        // If all images are loaded, init Packery
        if (cnt === 0)
        {
            $(".js-packery").packery({
               itemSelector: "packery-item"
            });
        }

    }).each(function() {
      if(this.complete) $(this).load();
    });

        $('.rumbler').jrumble({
    speed: 70,
});
    
    $('.rumbler.pic').jrumble({
        speed: 100,
    opacity: true
});

    
    $('.rumbler').hover(function(){
    $(this).trigger('startRumble');
}, function(){
    $(this).trigger('stopRumble');
});
    

/* code taken from: http://css-tricks.com/snippets/jquery/smooth-scrolling/ */    
    
    $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


});


