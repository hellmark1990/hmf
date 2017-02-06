$(document).ready(function () {
    if ($("#bookbundle_book_name").length) {
        $("#bookbundle_book_name").autocomplete({
            minLength: 0,
            source: PROJECT_URLS['book_search_google'],
            focus: function (event, ui) {
                $("#bookbundle_book_name").val(ui.item.label);
                return false;
            },
            select: function (event, ui) {
                $("#bookbundle_book_name").val(ui.item.title);

                $('form[name="bookbundle_book"]').find('[name="bookbundle_book[publisher]"]').val(ui.item.publisher);
                $('form[name="bookbundle_book"]').find('[name="bookbundle_book[description]"]').val(ui.item.description);
                $('form[name="bookbundle_book"]').find('[name="bookbundle_book[pageCount]"]').val(ui.item.pageCount);
                $('form[name="bookbundle_book"]').find('[name="bookbundle_book[printedPageCount]"]').val(ui.item.printedPageCount);
                $('form[name="bookbundle_book"]').find('[name="bookbundle_book[imageUrl]"]').val(ui.item.thumbnail);
                $('form[name="bookbundle_book"]').find('.form-book-image').closest('.form-group').find('img').attr('src', ui.item.thumbnail);
                $('form[name="bookbundle_book"]').find('[name="bookbundle_book[language]"]').val(ui.item.language);
                $('form[name="bookbundle_book"]').find('[name="bookbundle_book[previewLink]"]').val(ui.item.previewLink);
                $('form[name="bookbundle_book"]').find('[name="bookbundle_book[previewLink]"]').val(ui.item.previewLink);
                $('form[name="bookbundle_book"]').find('[name="bookbundle_book[authors]"]').val(ui.item.authors);

                $(".js-datepicker-publishedDate").datepicker('setDate', ui.item.publishedDate);
                console.log(ui.item.publishedDate)

                return false;
            }
        })
            .autocomplete("instance")._renderItem = function (ul, item) {
            var authors = item.authors ? item.authors + ': ' : '';
            var itemHTML = '<a class="book-search-item">' +
                '<div class="image"></div>' +
                '<div class="info">' +
                authors +
                item.title +
                '</div>' +
                '</a>';

            itemHTML = $("<li>").append(itemHTML)

            if (item.thumbnail) {
                $(itemHTML).find(".image")
                    .addClass("ui-menu-item-icon-book")
                    .css("background-image", "url(" + item.thumbnail + ")");
            }

            return itemHTML.appendTo(ul);
        };

    }

    if ($('.js-datepicker-publishedDate').length) {
        $('.js-datepicker-publishedDate').datepicker({
            dateFormat: 'yy-mm-dd'
        });
    }

    if ($('div.location-map').length) {
        var mapSettings = {
            location: {
                latitude: $('#bookbundle_read_latitude').val(),
                longitude: $('#bookbundle_read_longitude').val()
            },
            inputBinding: {
                latitudeInput: $('#bookbundle_read_latitude'),
                longitudeInput: $('#bookbundle_read_longitude'),
                locationNameInput: $('#bookbundle_read_place')
            },
            enableAutocomplete: true,
            radius: 30,
        };

        if ($('.location-map-edit').length) {
            mapSettings.location = {
                latitude: $('#bookbundle_read_latitude').val(),
                longitude: $('#bookbundle_read_longitude').val()
            }
            $('div.location-map').locationpicker(mapSettings);
        } else if ($('.location-map-read-list').length) {
            $('.location-map-read-list').each(function () {
                mapSettings.location = {
                    latitude: $(this).data('latitude'),
                    longitude: $(this).data('longitude')
                }
                mapSettings.inputBinding = {};
                mapSettings.draggable = false;
                mapSettings.zoom = 12;

                $(this).locationpicker(mapSettings);
            });
        } else {
            mapSettings.location = {
                latitude: 46.15242437752303,
                longitude: 2.7470703125
            }
            $('div.location-map').locationpicker(mapSettings);
        }
    }

    $('#datetimepicker6').datetimepicker(
        {
            format: 'Y-MM-DD HH:mm'
        }
    );
    $('#datetimepicker7').datetimepicker({
        useCurrent: false, //Important! See issue #1075
        format: 'Y-MM-DD HH:mm'
    });
    $("#datetimepicker6").on("dp.change", function (e) {
        $('#datetimepicker7').data("DateTimePicker").minDate(e.date);
    });
    $("#datetimepicker7").on("dp.change", function (e) {
        $('#datetimepicker6').data("DateTimePicker").maxDate(e.date);
    });

    $('.share-link-button').on('click', function () {
        var url = $(this).data('shared-link-url');
        var linkElement = $($(this).data('target')).find('input.share-link');

        $.ajax({
            url: url,
            type: 'GET',
            success: function (data) {
                if (data.success) {
                    linkElement.val(data.shareLink);
                }
            }
        });
    });

    /**
     * Copy share link to clipboard
     */
    var clipboard = new Clipboard('.copy-share-link');
});