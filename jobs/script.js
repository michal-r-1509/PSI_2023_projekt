$(document).ready(function () {
    $(".header_container").click(function () {
        $(this).next(".description").toggleClass("show-description");
    });
});
