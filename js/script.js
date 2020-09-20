$(document).ready(function () {

    // GSAP animation for starting animation
    const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

    tl.to('.intro-start-inner-text', { y: '0%', duration: 1, stagger: 0.25 });
    tl.to('.slider-start', { y: '-100%', duration: 1.5, delay: 0.5 });
    tl.to('.intro-start', { y: '-100%', duration: 1 }, "-=1.2");
    tl.fromTo('.navbar', { opacity: 0 }, { opacity: 1, duration: 1 });
    tl.fromTo('.sticky-form', { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

    // Owl carousel
    $('.hero-slider').owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        animateOut: 'fadeOut',
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        loop: true
    });

    // Menu button
    $(".button a").click(function () {
        $(".overlay").fadeToggle(200);
        $(this).toggleClass('btn-open').toggleClass('btn-close');
    });

    // menu button close
    $('.overlay').on('click', function () {
        $(".overlay").fadeToggle(200);
        $(".button a").toggleClass('btn-open').toggleClass('btn-close');
        open = false;
    });

    // Close enquiry form
    $('#enquire-btn').click(() => {
        toggleForm();
    });
    function toggleForm() {
        $("#enquire-container").animate({
            width: "toggle"
        }, 300);
        $('#enquire-btn').toggleClass('closeOpen');
    }

    // project type hover
    $('.media::after').hover(() => {
        $('.media::after').css('display', 'none');
    })
    $('.com').hover(() => {
        console.log("hovering com");
        $('.media::after').css('display', 'none');
    });

    // Counter
    var countSection = $('#number-counter');
    countSection.waypoint(function () {
        $('.count').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 5000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }, { offset: '50%' });
});




