const swiper = new Swiper('.wrap',{
    direction: "horizontal",
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
    },
    navigation : {
        nextEl: '.siwper-button-next',
        prevEl: '.swiper-button-prev',
    },
    spaceBetween : 0,
    slidesPerView: "auto",
    grabCursor: "true",
    centeredslides : "true",
    speed:1000,
    effect:"coverflow",
    coverflowEffect: {
        rotate: 50,
        stretch: -100,
        depth: 400,
        modifier: 1,
        slideShadows: false,
    },
    autoplay: {
        delay:1000,
        disableOnINteraction: true
    }
});



const btnStart = document.querySelector(".btnStart");

const btnStop = document.querySelector(".btnStop");

btnStart.onclick=function(event){
    // alert("click start");
    swiper.autoplay.start();
}

btnStop.onclick=function(event){
    // alert("click stop");
    swiper.autoplay.stop();
}