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

  var myWorks = [{"img": "assets/img/portfolio/port7.png", "link": "https://github.com/NiranjanRavichandran", "name": "mHealth"},
  {"img": "assets/img/portfolio/port8.png", "link": "https://itunes.apple.com/us/app/mauritius-attractions/id1122309065?mt=8", "name": "Mauritius Attractions"},
  {"img": "assets/img/portfolio/port1.png", "link": "http://meraenglish.com", "name": "Meraenglish"},
  {"img": "assets/img/portfolio/port2.png", "link": "https://itunes.apple.com/us/app/mauritius-explored/id1012328297?mt=8", "name": "Mauritius Explored"},
  {"img": "assets/img/portfolio/port3.png", "link": "https://github.com/NiranjanRavichandran/MauritiusExp-2.0", "name": "iCook"},
  {"img": "assets/img/portfolio/port4.png", "link": "https://itunes.apple.com/us/app/auto-meter-plus/id817389494?mt=8", "name": "Auto Meter Plus"}];
  populateMyWorks(myWorks);

});

//Populating my recent works
function populateMyWorks(myWorks) {
  for(i=0; i <myWorks.length; i++){
    var object = myWorks[i];
    var row = document.createElement('div');
      row.className = 'col-md-4 no_padding';
      row.innerHTML = '<div class="single_image"><img src="'+object['img']+'" alt=""> <div class="image_overlay"> <a href="'+object['link']+'">View Project</a><h2>'+object['name']+'</h2></div>';
    //document.getElementById('recentWorks').appendChild(row);
      $(row).hide().appendTo('#recentWorks').fadeIn(1000);
  }
}

function loadMoreWorks() {
  var myWorks = [{"img": "assets/img/portfolio/port5.png", "link": "http://revathykumar.in", "name": "Revathy Kumar"},
  {"img": "assets/img/portfolio/port6.png", "link": "http://meraenglish.com", "name": "Meraenglish"}];
  populateMyWorks(myWorks);
  var x = document.getElementById('loadButton')
  x.parentNode.removeChild(x);
}
