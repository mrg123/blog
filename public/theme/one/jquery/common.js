
$(document).ready(function(){

   
   var use_cookies = init();

   // tip
   $('[data-toggle="tooltip"]').tooltip(); 
   // slide nav
   $('#slide-nav-toggle').click(function(){
      if($(this).children('.iconfont').hasClass('icon-caidan')){
          // open slide nav
         $(this).children('.iconfont').removeClass('icon-caidan');   
         $(this).children('.iconfont').addClass('icon-nav');   
         $('#slide-nav').show('fast');
        
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
      Cookies.set('use-cookies', 1), { expires: 365 };
   });

   

}); 

// init
function init(){
   var use_cookies = 0;
   if(typeof(Cookies.get('use-cookies'))!=='undefined'){
      use_cookies = 1;
      $('#cookies-right').remove();

   }
   return use_cookies;
}

// set in cookies





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




