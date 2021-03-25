$(function(){
 let btnUp = $('#btnUp');  
 $(window).scroll(function(){     
   if ($(window).scrollTop() > 100){
     btnUp.addClass('show');
     } else {
       btnUp.removeClass('show');
     }
   });
   btnUp.click(function(){ 
   $('html, body').animate({scrollTop:0}, 500);
 });
});