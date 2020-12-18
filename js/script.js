$(document).ready(function () {
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

    // new ModalVideo('.video-btn');
    // light box
    $(document).on("click", '[data-toggle="lightbox"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });

    // back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});




