$(document).ready(function () {
//1. make a function which can change the img inside of the images class, by clicking on the next arrow
     $(".next").click(
       function nextImg() {
        var activeCircle = $(".nav i.active");
        activeCircle.removeClass("active");

        var imgActive = $("img.active");
        imgActive.removeClass("active");
//2. condition for the img
        if (imgActive.hasClass("last")) {
          var imgNext = $("img.first");
        } else {
          var imgNext = imgActive.next();
        }
        imgNext.addClass("active");
//3. condition for the circles
        if (activeCirlce.hasClass("last")) {
          var circleNext = $("i.first")
        } else {
          var circleNext = activeCircle.next();
        }
        circleNext.addClass("active");
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
});
