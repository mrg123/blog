
$(document).ready(function(){
   NProgress.start();
}); 


// Page loading animation - preloader
$(window).on('load', function () {
   /* nprogress */
   //NProgress.set(0.1);
   NProgress.done();
   NProgress.remove();

   /*  preloader */
   $("#preloader").animate({
      'opacity': '0'
   }, 600, function () {
      setTimeout(function () {
         $("#preloader").css("visibility", "hidden").fadeOut();
      }, 300);
   });


});

$(window).on('unload',function(){
   NProgress.start();
});


