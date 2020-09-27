$(document).ready(function(){
  $("#carousel1").owlCarousel({
    items: 2,
    nav: true,
    loop: true,
    dots: true,
    navText: ['<img src="image/left.png"></img>',
'<img src="image/right.png"></img>'],
    responsiveClass: true,
        responsive: {
            0:{
                items: 1,
                dots: false,
                nav: false
            },
            768:{
                items: 2,
                dots: true
            }
        }
  });
})
