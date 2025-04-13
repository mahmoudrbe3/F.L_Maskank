// M7R
jQuery(document).ready(function($){
$(".boxer").not(".retina, .boxer_fixed, .boxer_top, .boxer_format, .boxer_mobile, .boxer_object").boxer();	
$(".scroll").click(function (event) {
   event.preventDefault();
   $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 2000);
});
});