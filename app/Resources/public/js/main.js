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

    $('form button.button-edit').on('click', function () {
        $(this).closest('.form-group').find('input[type="file"]').click();
    });

    $('form button.button-delete').on('click', function () {
        $(this).closest('.form-group').find('input[type="hidden"]').val(1);
        var image = $(this).closest('.form-group').find('.image-container > img');
        var newSrc = $(image).data('default-src') ? $(image).data('default-src') : '';
        $(image).attr('src', $(image).data('default-src'));
    });

    $('#list').click(function (event) {
        event.preventDefault();
        $('#products .item').addClass('list-group-item');
    });

    $('#grid').click(function (event) {
        event.preventDefault();
        $('#products .item').removeClass('list-group-item');
        $('#products .item').addClass('grid-group-item');
    });

    $('input[type="file"]').on('change', function () {
        $('img.media-object').val('');
        $('img.media-object').attr('src', URL.createObjectURL($(this)[0].files[0]));
    })

    if ($(".chosen-select").length) {
        $(".chosen-select").chosen({
            disable_search_threshold: 10,
            placeholder_text_multiple: "Select from list..",
        });
    }

    $('.btn-modal-submit').on('click', function () {
        var modal = $(this).closest('.modal');
        var form = $(modal).find('form');
        var formData = new FormData(form[0]);
        $.ajax({
            url: $(form).attr('action'),
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function (content) {
                $(modal).find('.modal-body').html(content)
                if (content.search("alert-success") !== -1) {
                    setTimeout(function () {
                        window.location.reload();
                    }, 300);
                }
            }
        });
    });
});