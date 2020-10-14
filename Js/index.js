$(document).ready(function() {

   $(".clickable1").click(function() {
         $(".hide1").toggle();
         $("#design-show-image").toggle();
      });
      $(".clickable2").click(function(){
         $("#develop-show-image").toggle();
         $(".hide2").toggle();
      });

      $(".clickable3").click(function(){
         $("#product-show-image").toggle();
         $(".hide3").toggle();
      });
   });

//$(document).ready(function() {//
//    $(".clickable").click(function(){
//       $("#develop-show-image").toggle();
//       $(".hide").toggle();
//    });
// });
