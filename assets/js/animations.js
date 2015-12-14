//Home page typed animation
$(document).ready(function(){

  $('.typed-content').typed({
    strings:["a Designer^500","a Developer.^500", "Niranjan Ravichandran.^1000"],
    typeSpeed: 100,
    loop: true,
    loopCount: 3,
  });
  $('.inner h2').hide();
  $(window).scroll(function(event){
    var y = $(this).scrollTop();
    if (y > 2000){
      $('.inner h2').show(2000);
    }
  });
});
