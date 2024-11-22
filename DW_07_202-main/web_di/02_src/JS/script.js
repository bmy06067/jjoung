//네비에 호버시, 서브메뉴 올라갔다 내려감
$('.navi>li').mouseover(function(){
    $('.submenu').stop().slideDown(500); //스탑없으면 업다운 무한반복함 
}).mouseout(function(){
    $('.submenu').stop().slideUp(500);
});