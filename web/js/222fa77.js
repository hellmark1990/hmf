$(document).ready(function () {
    if ($("#book_name").length) {
        $("#book_name").autocomplete({
            minLength: 0,
            source: PROJECT_URLS['book_search_google'],
            focus: function (event, ui) {
                $("#book_name").val(ui.item.label);
                return false;
            },
            select: function (event, ui) {
                $("#book_name").val(ui.item.title);

                $('form[name="book"]').find('[name="book[publisher]"]').val(ui.item.publisher);
                $('form[name="book"]').find('[name="book[description]"]').val(ui.item.description);
                $('form[name="book"]').find('[name="book[pageCount]"]').val(ui.item.pageCount);
                $('form[name="book"]').find('[name="book[printedPageCount]"]').val(ui.item.printedPageCount);
                $('form[name="book"]').find('[name="book[imageUrl]"]').val(ui.item.thumbnail);
                $('form[name="book"]').find('.form-book-image').closest('.form-group').find('.dz-image > img').attr('src', ui.item.thumbnail);
                $('form[name="book"]').find('[name="book[language]"]').val(ui.item.language);
                $('form[name="book"]').find('[name="book[previewLink]"]').val(ui.item.previewLink);
                $('form[name="book"]').find('[name="book[previewLink]"]').val(ui.item.previewLink);
                $('form[name="book"]').find('[name="book[authors]"]').val(ui.item.authors);

                $(".js-datepicker-publishedDate").datepicker('setDate', ui.item.publishedDate);
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
                latitude: $('#read_latitude').val(),
                longitude: $('#read_longitude').val()
            },
            inputBinding: {
                latitudeInput: $('#read_latitude'),
                longitudeInput: $('#read_longitude'),
                locationNameInput: $('#read_place')
            },
            enableAutocomplete: true,
            radius: 30,
        };

        if ($('.location-map-edit').length) {
            mapSettings.location = {
                latitude: $('#read_latitude').val(),
                longitude: $('#read_longitude').val()
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
            console.log(mapSettings)

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
$(document).on('ready', function () {
    setTimeout(function () {
        $('.book-filter.loading > .navbar').stop().animate({backgroundColor: '#fff'}, 400);
        setTimeout(function () {
            $('.sk-circle').addClass('hidden');
            $('.book-filter form.navbar-form').removeClass('hidden');
            $('.book-filter').removeClass('loading');
        }, 300)
    }, 300)

    if ($('div.filter-location-map').length) {
        FilterMap = new GMaps({
            div: '.filter-location-map',
            lat: 52.4908,
            lng: -1.9351,
            zoom: 1
        });

        setTimeout(function () {
            var mapSettings = {
                location: {latitude: null, longitude: null},
                radius: 30,
                enableAutocomplete: true,
                inputBinding: {
                    latitudeInput: null,
                    longitudeInput: null,
                    radiusInput: null,
                    locationNameInput: $('#filter-location-map-input')
                },
            }

            if ($('#filter-location-map-input').val()) {
                mapSettings.locationName = $('#filter-location-map-input').val();
            }

            $('div.filter-location-map-hidden').locationpicker(mapSettings);
            if ($('#filter-location-map-input').val()) {
                $('#filter-location-map-input').trigger('keyup');
            }
        }, 1500);


        $('#filter-location-map-input').on('keyup change', function () {
            GMaps.geocode({
                address: $('#filter-location-map-input').val(),
                callback: function (results, status) {
                    if (status == 'OK') {
                        var latlng = results[0].geometry.location;
                        FilterMap.setCenter(latlng.lat(), latlng.lng());
                        FilterMap.removeMarkers();
                        FilterMap.addMarker({
                            lat: latlng.lat(),
                            lng: latlng.lng()
                        });
                    }
                }
            });
        });

    }

    $('.filter-location-select').on('change', function () {
        FilterMap.removeMarkers();
        $(this).find('option:selected').each(function () {
            FilterMap.setCenter($(this).data('latitude'), $(this).data('longitude'));
            FilterMap.addMarker({
                lat: $(this).data('latitude'),
                lng: $(this).data('longitude')
            });
        });

    });

    $('.filter-location-type').on('change', function () {
        if ($(this).val() == 'search') {
            $('#filter-location-map-input').removeClass('hidden');
            $('.filter-location-select').addClass('hidden');
        } else {
            $('#filter-location-map-input').addClass('hidden');
            $('.filter-location-select').removeClass('hidden');
        }
    });

});