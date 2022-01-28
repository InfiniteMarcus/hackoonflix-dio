$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 5,
    nav: true,
    responsive:{
        0:{
            items: 1
        },
        800:{
            items: 2
        },
        1500: {
            items: 3
        }
    }
})