$(document).ready(function(){


    /* aos 캐쉬 */
    AOS.init({
        once: true,
    });
    $(window).on('load', function () {
        AOS.refresh();
    });


    const window_width = 1/1920 * window.innerWidth;

    let ratio1 = 100 * window_width;

    let font_h1 = 10.25;


    /* 햄버거버튼 */
    $('.btn_hamburger').click(function(){
        $('.hamburger_menu').toggleClass('active')
        $('.menu').toggleClass('active')
    })

    /* 메뉴 */
    const menus = $('.menu ol>li')
    const back_color = ['#E4004E', '#EF7508', '#FCCC00', '#008950']

    for(let i = 0; i < menus.length; i++){
        $('.menu'+(i+1)).click(function(){
            $('.sec1_logo').attr('src', `./img/logo${i+1}.png`);
            $(menus).css('width', '8%');
            $(this).css('width', '76%')
            $('.album').removeClass('active')
            for(let j = 1; j <= 4; j++){
                $('.menu'+j).children('.cover').removeClass('active')
            }
            $(this).addClass('active')
            $(this).children('.album').addClass('active')
            $(this).children('.cover').addClass('active')
        });
    }



    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();

        /* console.log(scrollTop);
 */
        /* 로고 */
        for(let i = 0; i <= 10; i++){

            if(scrollTop < (i + 1) * ratio1  && scrollTop >= i * ratio1){
                $('h1').css('font-size', `${font_h1 - (0.825 * i)}em`);
            }

        }


        /* 멤버 */
        if(scrollTop >= 4200 * window_width){
            for(let i = 0; i <= 3; i++){
                $('.profile').eq(i).delay(100*i).queue(function(){$(this).css({'opacity': '1', 'transition': 'opacity .2s'}); $(this).dequeue();});
            }
        }

    })


    /* 로드했을 때 로고 크기 */
    window.onload = function(){
        var scrollTop = $(window).scrollTop();
    
        for(let i = 0; i <= 10; i++){

            if(scrollTop < (i + 1) * ratio1  && scrollTop >= i * ratio1){
                $('h1').css('font-size', `${font_h1 - (0.825 * i)}em`);
            }
        }

        if(scrollTop >= ratio1 * 10){
            $('h1').css('font-size', `${font_h1 - (0.825 * 10)}em`);
        }

    }


    /* 슬라이드 이미지 추가  */
    for(let i = 0; i <= 4; i++){
        $('.slide').append(`<div><img src='./img/slide${i+1}.png'</div>`)
    }


    /* 슬릭 */
    $('.slide').slick({
        dots: true,
        arrows: true,
        fade: true,
        cssEase: 'liner',
        speed: 300,
        infinite: true,
        prevArrow: '<button class="slide-arrow prev-arrow"> ◀ </button>',
        nextArrow: '<button class="slide-arrow next-arrow"> ▶ </button>'
    });

    

    /* 노래 */
    var audio_list = {
        audio1: new Audio("./mp3/Swindler.mp3"),
        audio2: new Audio("./mp3/Jaguar.mp3"),
        audio3: new Audio("./mp3/My Sidekick.mp3"),
        audio4: new Audio("./mp3/RobotMan.mp3")
    }

    for(let i = 1; i <= 4; i++){
        audio_list['audio'+i].volume = .2;
        audio_list['audio'+i].loop = true;

        $(`.menu${i} .btn_pause`).click(function(){
            $(this).toggleClass('play')

            for(let j = 1; j <= 4; j++){
                audio_list['audio'+j].pause();
                audio_list['audio'+j].currentTime = 0;
            }
             
            if($(this).hasClass('play')){
                audio_list['audio'+i].play();
                $(this).attr('src', './img/pause.png');
            } else {
                audio_list['audio'+i].pause();
                $(this).attr('src', './img/play.png');
            }

        })

        $(`.menu${i} .cover`).click(function(){
            for(let j = 1; j <= 4; j++){
                $(`.menu${i} .btn_pause`).removeClass('play');
                $(`.menu${i} .btn_pause`).attr('src', './img/play.png');

                audio_list['audio'+j].pause();
                audio_list['audio'+j].currentTime = 0;
            }
        })
    }


});