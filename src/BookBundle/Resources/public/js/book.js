$(document).ready(function () {

    $("#bookbundle_book_name").autocomplete({
        minLength: 0,
        source: PROJECT_URLS['book_search_google'],
        focus: function (event, ui) {
            $("#bookbundle_book_name").val(ui.item.label);
            return false;
        },
        select: function (event, ui) {
            $("#bookbundle_book_name").val(ui.item.label);
            $("#book_name_search_result").html(ui.item.desc);

            return false;
        }
    })
        .autocomplete("instance")._renderItem = function (ul, item) {
        return $("<li>")
            .append("<a>" + item.label + "<br>" + item.desc + "</a>")
            .appendTo(ul);
    };
});