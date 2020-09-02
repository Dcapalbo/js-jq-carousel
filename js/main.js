$(document).ready(function () {

     $(".next").click(
       function() {
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

     $(".prev").click(
       function() {
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
