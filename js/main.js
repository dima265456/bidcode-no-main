



// $(function () {
//     show()
    // function show() {
    // // let modal = document.querySelector('.btn');

    // $(window).scroll(function(){
    //     header.style.display = 'block';
    //     header.addClass('header-add');
    // })
    // document.querySelector('link').href = 'style3.css';
    
    
    // console.log(header.style.display = "block");
    // header.scroll = show;

    
// })


        //  } 
// console.log( show('урааа'));



    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 690) {
    //         header.addClass('header-fixed');
    //         add();
    //     } else {
    //         header.removeClass('header-fixed');
    //     }
    // });
    // $(window).scroll(function(){ show_graphics(); });

    // $(window).scroll(function(){//записать в снипеты 
    //     // document.querySelector('.header');
    //     const header = $('.header');
    //     header.style.display = "block";
    //     // document.querySelector('.header');
    //     // header.addClass('header-add');
    //     console.log(header.style.display = "block");
    //     });
    
    // });
    


// document.querySelector('.onmousewheel').onmouseleave = function () {
//     // мышь колесико
//     console.log('wheel');
//     return false
// }  





// add();
// function add() {
//     document.querySelector('.header').onmouseleave = function () {
//         console.log('wheel');
//         header.addClass('header-add');
//             return false;
//         }  
//     }

        
        $(".menu a").on("click", function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({ scrollTop: top }, 1500);
        });
        
        // function show() {
        //     // $(window).onmouseenter(function(){
                
        //     document.querySelector('html').onmouseenter ;
        //     console.log(document.querySelector('html').onmouseenter );
            
        //     // header.removeClass()('header-fixed');
        //     // header.removeClass('header-fixed');
        // } ;
        // show();
        // // show2();
        // console.log('header2.style.display = "block"');
        // let header2 = document.querySelector('.header');
        // const header = $('.header');
        // const body = $('body,html');


        // body.mouseover.mouseout = show2;
        // function show2() {
        // header2.style.display = "block";
        // }




        
        // header.scroll = show;
        // $("p:even").removeClass("blue");

        // document.querySelector('.onmousewheel').onmouseleave = function () {
        //     // мышь колесико
        //     console.log('wheel');
        //     return false
        // }  
    
        $('.menu__btn, .menu a').on('click', function () {
            $('.menu__btn, .menu__mobile').toggleClass('active');
            // для крестика и для меню и что бы закрывалось меню после выбора сcылки
        });

        
        // $('.menu__btn').on('click', function () {
        //     $('.menu__btn').toggleClass('active');
        //     // для крестика и для меню и что бы закрывалось меню после выбора сcылки
        // });
    
        $('.offer__item--1').on('click', function () {
            $('.offer__items--1').slideToggle();
        });
        $('.offer__item--2').on('click', function () {
            $('.offer__items--2').slideToggle();
        });
        $('.offer__item--3 ').on('click', function () {
            $('.offer__items--3').slideToggle();
        });

        var swiper = new Swiper(".mySwiper", {
            pagination: {
                slidesPerView: 4,
                // spaceBetween: 100,
                loop: true,
                loopedslides: 2,
                el: ".swiper-pagination",
            },
            autoplay: {
                delay: 4000,
            },
        })
        // if (window.innerWidth >= 940) {
        //     show()
        // }
        // alert("g");
        // alert("Hello");
    
        // document.addEventListener("DOMContentLoaded", function (event) {
        //     /*ПОЛУЧАЕТ ТЕКУЩУЮ ШИРИНУ ЭКРАНА*/
        //     console.log('8');
        //     var widthWind = document.querySelector('body').offsetWidth;
        //     if (widthWind <= 750) {
    
    
    
        //     }
        // });
    
        // function show() {
        //     $('.offer__item--1').on('click', function () {
        //         $('.offer__items--1').slideToggle();
        //     });
        //     $('.offer__item--2').on('click', function () {
        //         $('.offer__items--2').slideToggle();
        //     });
        //     $('.offer__item--3 ').on('click', function () {
        //         $('.offer__items--3').slideToggle();
        //     });
        // }
    
        // $(window).resize(function () {
        //     /*ПОЛУЧАЕТ ТЕКУЩУЮ ШИРИНУ ЭКРАНА*/
        //     var widthWind = $(this).width();
    
        //     if (widthWind <= 750) {
        //         alert(ssssss);
        //         $('.offer__item--1').on('click', function () {
        //             $('.offer__items--1').slideToggle();
        //         });
        //         $('.offer__item--2').on('click', function () {
        //             $('.offer__items--2').slideToggle();
        //         });
        //         $('.offer__item--3 ').on('click', function () {
        //             $('.offer__items--3').slideToggle();
        //         });
        //     }
        // }
        // );
  
    
    
        // $(document).ready(function(){
        //     $(window).on('resize', function() {
    
        //         if($(window).width()>940) {
    
        //             $('.offer__item--1').on('click', function () {
        //                 $('.offer__items--1').slideToggle();
        //             });
        //             $('.offer__item--2').on('click', function () {
        //                 $('.offer__items--2').slideToggle();
        //             });
        //             $('.offer__item--3 ').on('click', function () {
        //                 $('.offer__items--3').slideToggle();
        //             });
    
        //         }
        //         // if($(window).width()<940){
    
        //         //     $('.accordion-body').removeClass('in').removeAttr('style');
    
        //         // }
    
        //     });
        //     $(window).resize();
        //  });
    
    
    
    
    
        // var swiper = new Scwiper(".myswiper", {
        //     // !!!
        //     slidesPerView: 4,
        //     // spaceBetween: 30,
        //     loop: true,
        //     loopedslides: 2,
    
        // navigation: {
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev",
        // },
    
        // breakpoints: {
    
        //     1200: {
        //         slidesPerView: 4,
        //     },
    
        //     992: {
        //         slidesPerView: 3,
    
    
        //     },
    
        //     600: {
        //         slidesPerView: 2,
        //     },
    
        //     320: {
        //         slidesPerView: 1,
        //     },
        // },
        // });
    
        // let showModal = document.querySelector('#item');
        // let hideModal = document.querySelector('#modal-hide');
        // // при клике
        // function show() {
        //     // document.querySelector('.offer__item').onclick;
        //     // modal.style.display = 'block';
        //     // console.log('');
        //     let modal = document.querySelector('#show');
        //     // modal.hidden = true;
        //     modal.style.display = 'block';
        // }
        // function hide() {
        //     // document.querySelector('.offer__item').onclick;
        //     // modal.style.display = 'block';
        //     // console.log('');
        //     let modal = document.querySelector('#show');
        //     // modal.hidden = true;
        //     modal.style.display = 'none';
        // }
        // showModal.onclick = show;
        // hideModal.onclick = hide;
        // hide()
        // console.log('');
    
        // $('.offer__item').on('click', function () {
        //     $('.offer__items').removeClass('offer__items--active');
        //     $(this).addClass('offer__items--active');
        // });
    
    
        /*	$(".menu a").on("click", function (event) {
                event.preventDefault();
                var id = $(this).attr('href'),
                    top = $(id).offset().top;
                $('body,html').animate({
                    scrollTop: top
                }, 1500);
            });
            /*для закрыть меню*/
        /*
                  $('.menu__btn').on('click', function () {
                      $('.menu__items').toggleClass('menu__items--active');
                  });
                  $('.menu__btn').on('click', function () {
                      $('.menu__btn').toggleClass('active');
                  });
               
                $('.home__slider').slick({
                    dots: true,
                    arrows: false,
                     responsive: [
                         {
                             breakpoint: 1150,
                             settings: {
                                 slidesToShow: 4,
                             }
                         },
                         {
                             breakpoint: 1000,
                             settings: {
                                 slidesToShow: 3,
                             }
                         },
                         {
                             breakpoint: 620,
                             settings: {
                                 slidesToShow: 2,
                                 slidesToScroll: 2,
                             }
                         },
                     ]
                });
               
               
               */

