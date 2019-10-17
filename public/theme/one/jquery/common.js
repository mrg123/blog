$(document).ready(function () {


   var __cookies = init();

   // tip
   $('[data-toggle="tooltip"]').tooltip();

   // slide nav
   $('#slide-nav-toggle').click(function () {
      toggleMenu();
   });

   // use cookies
   $('#use-cookies').click(function () {
      $('#cookies-right').remove();
      saveCookies('use_cookies', 1);
   });

   // second nav
   $('.a-one').click(function(){
      
      if($(this).children('.iconfont').hasClass('iconicondown')){
         $(this).children('.iconfont').removeClass('iconicondown');
         $(this).children('.iconfont').addClass('icondowntrangle1');
      }else{
         $(this).children('.iconfont').removeClass('icondowntrangle1');
         $(this).children('.iconfont').addClass('iconicondown');
      }
      $(this).next().toggle();
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

// open menu
function toggleMenu(){
   var that = $('#slide-nav-toggle');
   if (that.children('.iconfont').hasClass('iconcaidan')) {
      // open slide nav
      that.children('.iconfont').removeClass('iconcaidan');
      that.children('.iconfont').addClass('iconnav');
      $('#slide-nav').show('fast');
      saveCookies('slide_show', 1);
   } else {
      // hide slide nav
      that.children('.iconfont').removeClass('iconnav');
      that.children('.iconfont').addClass('iconcaidan');
      $('#slide-nav').hide('fast');
      saveCookies('slide_show', 0);
   }
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

//HTML转义
function HTMLEncode(html) {
   var temp = document.createElement("div");
   (temp.textContent != null) ? (temp.textContent = html) : (temp.innerText = html);
   var output = temp.innerHTML;
   temp = null;
   return output;
}
// HTML 反转义
function HTMLDecode(text) { 
   var temp = document.createElement("div"); 
   temp.innerHTML = text; 
   var output = temp.innerText || temp.textContent; 
   temp = null; 
   return output; 
} 