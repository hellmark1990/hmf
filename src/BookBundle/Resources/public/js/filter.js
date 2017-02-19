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