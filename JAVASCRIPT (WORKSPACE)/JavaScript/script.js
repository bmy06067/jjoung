$(document).ready(function () {
  //menu
  $(".mainmenu > li").mouseenter(function () {
    $(this).find(".submenu").stop().slideDown(400);
  });
  $(".mainmenu > li").mouseleave(function () {
    $(this).find(".submenu").stop().slideUp(400);
  });

  //slide
  var currentIndex = 0;
  setInterval(function () {
    if (currentIndex < 2) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    var slidePosition = currentIndex * -300 + "px";
    $(".slide-cont").animate({ top: slidePosition }, 400);
  }, 3000);

  //tabmenu
  var tabBtn = $(".tab-btn > ul > li");
  var tabCon = $(".tab-cont > ul");

  tabCon.hide().eq(0).show();

  tabBtn.click(function (e) {
    e.preventDefault();
    var index = $(this).index();
    tabBtn.removeClass("active");
    $(this).addClass("active");
    tabCon.hide().eq(index).show();
  });

  //popup
  $(".tab-cont li.on").click(function () {
    $(".layer-bg, .popup").show();
  });
  $(".popup .button").click(function () {
    $(".layer-bg, .popup").hide();
  });
});
