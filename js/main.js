$(document).ready(function () {
//1. make a function which can change the img inside of the images class, by clicking on the next arrow
     $(".next").click(
       function nextImg() {
        var activeCircle = $(".nav i.active");
        activeCircle.removeClass("active");

        var imgActive = $("img.active");
        imgActive.removeClass("active");

    if (imgActive.hasClass("last")) {
        (activeCirlce.hasClass("last"))
          var imgNext = $("img.first");
          var circleNext = $(".nav i.first");
        } else {
          var imgNext = imgActive.next();
          var circleNext = activeCircle.next();
          imgNext.addClass("active");
          circleNext.addClass("active");
        }
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
