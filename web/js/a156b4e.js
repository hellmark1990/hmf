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

        $('div.location-map').locationpicker({
            location: {latitude: 46.15242437752303, longitude: 2.7470703125},
            radius: 30,
            inputBinding: {
                latitudeInput: $('#bookbundle_read_latitude'),
                longitudeInput: $('#bookbundle_read_longitude'),
                locationNameInput: $('#bookbundle_read_place')
            },
            enableAutocomplete: true,
        });
    }
});