$(document).on('ready', function () {
    setTimeout(function () {
        $('.sk-circle').addClass('hidden');
        // $('.book-filter').removeClass('loading');
        // $('.book-filter form.navbar-form').removeClass('hidden');
        $('.book-filter.loading > .navbar').stop().animate({backgroundColor:'#fff'}, 300);
    }, 200)
});