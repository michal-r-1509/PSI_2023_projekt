$(document).ready(function () {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = $(".slider");
        let dots = $(".dot");

        slides.hide();
        slideIndex++;

        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        dots.removeClass("active");
        $(slides[slideIndex - 1]).show();
        $(dots[slideIndex - 1]).addClass("active");

        setTimeout(showSlides, 5000);
    }
});