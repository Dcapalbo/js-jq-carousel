$(document).ready(function () {

//1. make a function with a click alert, to invoke the nextImg function

     $(".next").click(function () {
        nextImg();
      }
     );

//2. make a function with a click alert, to invoke the prevImg function

     $(".prev").click( function () {
        prevImg();
      }
     );

//3. Calling the Value function

assignValue();

//4. make a function which can change the img inside of the images class, by clicking on the next arrow

     function nextImg() {
       var activeCircle = $(".nav .active");
       activeCircle.removeClass("active");
       var imgActive = $("img.active");
       imgActive.removeClass("active");
       if (imgActive.hasClass("last") && activeCircle.hasClass("last")) {
         $("img.first").addClass("active");
         $(".nav .first").addClass("active");
        } else {
          imgActive.next().addClass("active");
          activeCircle.next().addClass("active");
        }
       }

//5. make a function which can change the img inside of the images class by clicking on the prev arrow

     function prevImg() {
       var activeCircle = $(".nav .active");
       activeCircle.removeClass("active");
       var imgActive = $("img.active");
       imgActive.removeClass("active");
       if (imgActive.hasClass("first") && activeCircle.hasClass("first")) {
          $("img.last").addClass("active");
          $(".nav .last").addClass("active");
       } else {
         imgActive.prev().addClass("active");
         activeCircle.prev().addClass("active");
       }
     }

//6. make a function which at event click gives it back the position of a point with the position of the right image

     $(".nav i").click(function() {
    if($(".nav i").hasClass("active")){
      $(".nav i").removeClass("active");
      $("img").removeClass("active");
      $(this).addClass("active");
      var valBullet = $(this).attr('value');
      var img = $("img")[value=valBullet-1];
      img.classList.add("active");
    }
  });
//7. make  function to assign the same couple of value to dots and images

     function assignValue() {
      var i = 1;
      var bullet = $(".nav i.first");
      var img = $("img.first");
      var finalBullet = false;
      while (finalBullet == false) {
       bullet.attr('value', i);
       img.attr('value', i);
       if (bullet.hasClass("last")) {
         finalBullet = true;
       }
         bullet = bullet.next();
         img = img.next();
         i++;
       }
      } 

//8. make a function to define how to scroll the images with the keyboard buttons

     $(document).keydown(
          function(e){
            if(e.keyCode == 37){
              prevImg();
            } else if (e.keyCode == 39){
              nextImg();
            }
          }
        );
});
