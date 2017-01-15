jQuery(function ($) {
    'use strict',

        //#main-slider
        $(function () {
            $('#main-slider.carousel').carousel({
                interval: 8000
            });
        });


    // accordian
    $('.accordion-toggle').on('click', function () {
        $(this).closest('.panel-group').children().each(function () {
            $(this).find('>.panel-heading').removeClass('active');
        });

        $(this).closest('.panel-heading').toggleClass('active');
    });

    //Initiat WOW JS
    new WOW().init();

    // portfolio filter
    //$(window).load(function(){'use strict';
    //	var $portfolio_selectors = $('.portfolio-filter >li>a');
    //	var $portfolio = $('.portfolio-items');
    //	$portfolio.isotope({
    //		itemSelector : '.portfolio-item',
    //		layoutMode : 'fitRows'
    //	});
    //
    //	$portfolio_selectors.on('click', function(){
    //		$portfolio_selectors.removeClass('active');
    //		$(this).addClass('active');
    //		var selector = $(this).attr('data-filter');
    //		$portfolio.isotope({ filter: selector });
    //		return false;
    //	});
    //});

    // Contact form
    var form = $('#main-contact-form');
    form.submit(function (event) {
        event.preventDefault();
        var form_status = $('<div class="form_status"></div>');
        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: $(form).serialize(),
            beforeSend: function () {
                $(form).find('.form_status').remove();
            }
        }).done(function (data) {
            if (data.success) {
                location.href = data.redirect_url;
            }
            if (data.message) {
                form.prepend(form_status)
                form_status.html('<p class="text-warning">' + data.message + '</p>');
            }
        });
    });


    //goto top
    $('.gototop').click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 500);
    });

    //Pretty Photo
    $("a[rel^='prettyPhoto']").prettyPhoto({
        social_tools: false
    });

    $('button.button-edit').on('click', function () {
        $(this).closest('.form-group').find('input[type="file"]').click();
    });

    $('button.button-delete').on('click', function () {
        $(this).closest('.form-group').find('input[type="checkbox"]').first().prop('checked', true);
        var image = $(this).closest('.form-group').find('.image-container > img');
        $(image).attr('src', $(image).data('default-src'));
    });
});