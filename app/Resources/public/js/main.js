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
        var form_status = $('<div class="form-group errors"><label class="col-sm-3 control-label"></label><div class="col-sm-9"><div class="alert alert-danger" role="alert"><center></center></div></div></div></div>');
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
                form.find('.errors').remove();
                form.prepend(form_status);
                form_status.find('center').html(data.message);
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
        $('#products .item').removeClass('grid-group-item');
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
        if ($(form).attr('action')) {
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
        }
    });

    $('button.btn-submit-form').on('click', function () {
        $('.container > form').trigger('submit');
    });

    /**
     * Top pannel
     */

    function sticky_relocate() {
        var window_top = $(window).scrollTop();
        var div_top = $('#content').offset().top;
        if (window_top > div_top) {
            $('#sticky').addClass('stick');
        } else {
            $('#sticky').removeClass('stick');
        }
    }

    $(function () {
        $(window).scroll(sticky_relocate);
        sticky_relocate();
    });

    /**
     * Top pannel
     */

    // Tooltip init
    $('[data-toggle="tooltip"]').tooltip()

    // Dropdown init
    $(".dropdown-menu li a").click(function () {
        $(this).closest('.btn-group').find(".btn:first-child").text($(this).text());
        $(this).closest('.btn-group').find(".btn:first-child").val($(this).text());

        var dropSelect = $(this).closest('.form-group').find('select');
        $(dropSelect).val($(this).data('value'));
    });

    $(".toggle-btn-group > .btn").click(function () {
        var dropSelect = $(this).closest('.input-group-btn').find('select');
        $(dropSelect).val($(this).data('value'));

        $(this).closest('.input-group-btn').find('.btn').removeClass('active')

        if (!$(this).hasClass('selected')) {
            $(this).addClass('active');
        }
    });

    var dropzoneElement = $('#demo-upload');
    if ($(dropzoneElement).length) {
        Dropzone.autoDiscover = false;
        var CropperOBJ = 0;
        var dropzone = new Dropzone($(dropzoneElement).get(0), {
            url: "/upload",
            maxFiles: 1,
            timeout: 1,
            createImageThumbnails: true,
            addRemoveLinks: true,
            autoProcessQueue: false,
            acceptedFiles: 'image/*',
            autoQueue: false,
            parallelUploads: true,
            thumbnailWidth: null,
            thumbnailHeight: null,
            init: function () {
                this.on("maxfilesexceeded", function (file) {
                    this.removeAllFiles();
                    this.addFile(file);
                });

                var self = this;
                this.on("thumbnail", function (file, dataUrl) {
                    $('.dz-image > img').last().find('img').attr({width: 'auto', height: '100%'});
                    $('.dz-image > img').css({"width": "auto", "height": "100%"});
                    $('.dz-progress').hide();

                    $('#imageCropModal').find('img').attr('src', $('.dz-image > img').last().attr('src'));

                    var image = $('#imageCropModal').find('img').get(0);

                    var cropWidth = $(window).width() > $('#imageCropModal').find('img').prop("naturalWidth") ? $('#imageCropModal').find('img').prop("naturalWidth") : $(window).width();
                    var cropHeight = $(window).height() > $('#imageCropModal').find('img').prop("naturalHeight") + 200 ? $('#imageCropModal').find('img').prop("naturalHeight") : $(window).height() - 200;

                    if (CropperOBJ) {
                        CropperOBJ.destroy();
                    }
                    CropperOBJ = new Cropper(image, {
                        viewMode: 1,
                        modal: true,
                        minContainerWidth: cropWidth - 40,
                        minContainerHeight: cropHeight,
                        minCropBoxWidth: $(dropzoneElement).closest('form').data('image-with'),
                        minCropBoxHeight: $(dropzoneElement).closest('form').data('image-height'),
                        aspectRatio: $(dropzoneElement).closest('form').data('image-with') / $(dropzoneElement).closest('form').data('image-height'),
                    });

                    $('#imageCropModal .btn-modal-submit').on('click', function () {
                        var canvasData = CropperOBJ.getCroppedCanvas()
                        var imageDataUrl = canvasData.toDataURL('image/jpeg');

                        $('.croppedImageInput').val(imageDataUrl);
                        $('.dz-image > img').last().attr('src', imageDataUrl);
                        $('#imageCropModal').modal('hide');
                    });


                    $('#imageCropModal').modal('show');
                });

                this.on("success", function (file) {
                    alert()
                    $('.dz-image > img').css({"width": "auto", "height": "100%"});
                })
            }
        });

        $('#imageCropModal button.btn-modal-submit').on('click', function () {
            var currentPreview = $('.dropzone .dz-image-preview');
            var replacedPreview = '<div class="dz-preview dz-image-preview">' +
                '<div class="dz-image"><img/></div>' +
                '<button class="dz-remove remove-button" data-dz-remove="">' +
                '<i class="fa fa-trash" aria-hidden="true"></i>' +
                '</button>' +
                '</div>';
            $(replacedPreview).find('img').replaceWith($(currentPreview).find('img'));
            $(currentPreview).replaceWith(replacedPreview);
            $('.dz-message.needsclick').hide();
        });

        $('#imageCropModal').on('hide.bs.modal', function (e) {
            if (!$(document.activeElement).hasClass('btn-modal-submit')) {
                $(this).closest('.form-group').find('input[name$="[unlink]"]').val(1);
                $(this).closest('.form-group').find('input[name$="[unlink]"]').prop('checked', true).attr('checked', true);
                $('.dz-image-preview').remove();
                $('.dz-message.needsclick').hide();
                $('.needsclick').show();
            }
        })

        $('body').on('click', '.dz-remove', function (e) {
            if (e.eventPhase == 3) {
                $(this).closest('.form-group').find('input[name$="[unlink]"]').val(1);
                $(this).closest('.form-group').find('input[name$="[unlink]"]').prop('checked', true).attr('checked', true);
                $('.dz-image-preview').remove();
                $('.needsclick').show();
            }
        });

        $('.dz-hidden-input').on('change', function () {
            var originFileInput = $('form').find('input[name$="[binaryContent]"]');
            originFileInput[0].files = $(this)[0].files;
            $('.dz-image-preview').remove();
        });

        $('.dropzone .change-button').on('click', function (e) {
            e.stopPropagation();
            $('.dropzone.needsclick').trigger('click')
            return false;
        });
    }
});