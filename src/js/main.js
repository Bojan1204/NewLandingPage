
$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});


jQuery(document).ready(function(){
  //   insert back to top button dynamicly
   $( "#backToTop" ).append('<a class="backToTop" href="javascript:void(null);" style="display: none;"><i class="fa fa-angle-up"></i><iframe id="tmp_downloadhelper_iframe" style="display: none;"></iframe></a>');
    var $window = $(window);
    var distance = 80;
      // scroll
    $window.scroll(function() {
      // header
      if($window.scrollTop() >= distance) {
        $(".backToTop").fadeIn();
      }else{
        $(".backToTop").fadeOut();
      }
    });
    
    $('.backToTop').click(function() {
      $('html, body').animate({
              scrollTop: 0
          }, 800);
   });
  })



  $("#nav").scrollspy({ offset: -75 });