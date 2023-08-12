
$('.popular-products').owlCarousel({
loop:true,
margin:10,
nav:true,
dots:false,
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
})


$('.top-item').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:5
        }
    }
    })


$('.owl-carousel').owlCarousel({
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
})


$(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 100000,
    from: 5000,
    to: 50000,
    grid: true,
 });