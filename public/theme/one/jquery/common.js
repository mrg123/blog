$(document).ready(function () {


   var __cookies = init();

   // tip
   $('[data-toggle="tooltip"]').tooltip();
   // slide nav
   $('#slide-nav-toggle').click(function () {
      if ($(this).children('.iconfont').hasClass('icon-caidan')) {
         // open slide nav
         $(this).children('.iconfont').removeClass('icon-caidan');
         $(this).children('.iconfont').addClass('icon-nav');
         $('#slide-nav').show('fast');
         saveCookies('slide_show', 1);
      } else {
         // hide slide nav
         $(this).children('.iconfont').removeClass('icon-nav');
         $(this).children('.iconfont').addClass('icon-caidan');
         $('#slide-nav').hide('fast');
         saveCookies('slide_show', 0);
      }
   });

   // use cookies
   $('#use-cookies').click(function () {
      $('#cookies-right').remove();
      saveCookies('use_cookies', 1);
   });



});

// init
function init() {
   var use_cookies = 0;
   if (typeof (Cookies.get('use_cookies')) !== 'undefined') {
      use_cookies = 1;
      $('#cookies-right').remove();


      if (Cookies.get('slide_show') == 1) {
         $('#slide-nav').show('fast');
      } else {
         $('#slide-nav').hide('fast');
      }

   }
   return use_cookies;
}

// set in cookies
function saveCookies(name, val) {
   Cookies.set(name, val, {
      expires: 365
   });
}




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