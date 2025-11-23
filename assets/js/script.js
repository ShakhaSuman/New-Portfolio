new TypeIt("#simpleUsage", {
    strings: "<h1>Front-end <br><span>Developer</span></h1>",
    speed: 130,
    loop: true,
}).go();


AOS.init();


$('.skill-slider').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    dots: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 1281,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1141,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});



