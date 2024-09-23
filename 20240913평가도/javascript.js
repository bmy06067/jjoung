$(document).ready(function(){
    //마우스 오버 메뉴
    $('.navi > li').mouseover(function(){
        $(this).find('.subMenu').stop().slideDown(300);
    }).mouseout(function(){
        $(this).find('.subMenu').stop().slideUp(300);
    });

    //이미지 슬라이드 페이드 인 페이드 아웃
    $('.imgSlide a:gt(0)').hide();

    setInterval(function(){
        $('.imgSlide a:first-child').fadeOut()
        .next('a').fadeIn()
        .end().appendTo('.imgSlide');
    }, 3000);

    //****** 탭 메뉴 공지사항 갤러리 ******//
    $('.tabMenu>li>a').click(function(){
        $(this).parent().addClass("active").silblings().removeClass("active");
    });

    //레이어 팝업
    $('.notice li:first').click(function(){
        $('#modalWrap').addClass("active");
    });
    $('.btn').click(function(){
        $('#modalWrap').removeClass("active");
    });


});