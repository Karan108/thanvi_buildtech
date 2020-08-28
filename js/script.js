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
});


