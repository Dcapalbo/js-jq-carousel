$(document).ready(function () {
//1. make a function which can change the img inside of the images class, by clicking on the next arrow
     $(".next").click(
       function nextImg() {
        var imgActive = $("img.active");
        imgActive.removeClass("active");

        if (imgActive.hasClass("last")) {
          var imgNext = $("img.first");
        } else {
          var imgNext = imgActive.next();
        }
        imgNext.addClass("active");
      }
     );
//2. make a function which can change the img inside of the images class, by clicking on the prev arrow
     $(".prev").click(
       function prevImg() {
        var imgActive = $("img.active");
        imgActive.removeClass("active");

        if (imgActive.hasClass("last")) {
          var imgNext = $("img.first");
        } else {
          var imgNext = imgActive.next();
        }
        imgNext.addClass("active");
      }
     );

     $(".nav i.fas.fa-circle active").click(
       function dotSelection() {
         $(this).next();
       }
     );
});
