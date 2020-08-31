// const btn = document.getElementById('enquire-btn');



// window.onscroll = fun;

// function fun() {
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         console.log("object");
//         btn.style.top = "35%";
//     } else {
//         console.log("object no");
//     }
// }


// fire the menu button
$(document).ready(function () {
    $('.hero-slider').owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        animateOut: 'fadeOut',
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        loop: true
    });

    $(".button a").click(function () {
        $(".overlay").fadeToggle(200);
        $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
    // Close enquiry form
    $('#enquire-btn').click(() => {
        $('#enquire-container').fadeToggle(300);
    });
    // menu button close
    $('.overlay').on('click', function () {
        $(".overlay").fadeToggle(200);
        $(".button a").toggleClass('btn-open').toggleClass('btn-close');
        open = false;
    });
    // project type hover
    $('.media::after').hover(() => {
        $('.media::after').css('display', 'none');
    })
    $('.com').hover(() => {
        console.log("hovering com");
        $('.media::after').css('display', 'none');
    });

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
});
