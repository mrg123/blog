
$(document).ready(function(){
   // tip
   $('[data-toggle="tooltip"]').tooltip(); 
   // slide nav
   $('#slide-nav-toggle').click(function(){
      if($(this).children('.iconfont').hasClass('icon-caidan')){
          // open slide nav
         $(this).children('.iconfont').removeClass('icon-caidan');   
         $(this).children('.iconfont').addClass('icon-nav');   
         $('#slide-nav').show('normal');
      }else{
         // hide slide nav
         $(this).children('.iconfont').removeClass('icon-nav');   
         $(this).children('.iconfont').addClass('icon-caidan');  
         $('#slide-nav').hide('fast');
      }
   });

   // use cookies
   $('#use-cookies').click(function(){
      $('#cookies-right').remove();
   });

   

}); 




// Page loading animation - preloader
$(window).on('load', function () {
   /*  preloader */
   $("#preloader").animate({
      'opacity': '0'
   }, 600, function () {
      setTimeout(function () {
         $("#preloader").css("visibility", "hidden").fadeOut();
      }, 300);
   });
});




