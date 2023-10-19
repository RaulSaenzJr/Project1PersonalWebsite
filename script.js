$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
});
$(document).ready(function () {
    // Initialize Bootstrap's collapse plugin
    $('.navbar-collapse').collapse('hide');

    // Add an event listener for the toggle button click
    $('.navbar-toggler').on('click', function () {
        $('.navbar-collapse').collapse('toggle');
    });
});