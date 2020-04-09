$(function() {



      new WOW().init();

      //sweper js

     

    $('.works .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    

$('.fa-bars').click(function() {

    $('nav  .main-ul').slideToggle(500);
});


// nav fixed and padding boy denpend nav

$('body').css('paddingTop' , $('nav').innerHeight());


// Scroll To Element

$('.right-nav .prevent').click(function(e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $('#' + $(this).data('scroll')).offset().top - 40
    },1000);
});

// change class active 

$('.right-nav a').click(function() {
    $(this).addClass('active').parent().siblings().find('a').removeClass('active');
});

// sync links with section


$(window).scroll(function() {
    $('.block').each(function(){
        if($(window).scrollTop() > $(this).offset().top - 80) {
            var blockId = $(this).attr('id');

            $('.right-nav a').removeClass('active');

            $('.right-nav a[data-scroll="'+blockId+'"]').addClass('active')
        }
    })
});


// change background color nav

 $(window).scroll(function() {
    $('nav').css('backgroundColor', 'rgba(255, 255, 255, .7)');
     if($(window).scrollTop() == 0) {
         $('nav').css('backgroundColor', 'rgba(255, 255, 255, 1)');

     };

 });


// logIn

$('.wrap-login').height($(window).height());


// control 

$('.fa-bars').click(function() {
    $('.right-control').toggleClass('show-right')
});


//////////////////////////////////////////table//////////////////////////////////////////////



// switch table 

$('.link-table a').click(function(e) {
    e.preventDefault()
    $(this).addClass('select-teble').siblings().removeClass('select-teble');

    $('#' + $(this).data('request')).slideDown(500).siblings().slideUp()
 })


});

// table




