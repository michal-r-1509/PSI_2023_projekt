$(document).ready(function () {
    const informationModal = $("#information_modal");
    const overlay = $("#overlay");
    const contactForm = $("#contact-form");
    const email = $("#email");
    const message = $("#message");

    $(".close").click(function (){
        informationModal.css("display", "none");
        overlay.removeClass("active");
        email.val("");
        message.val("");
    });

    contactForm.submit(function (e){
        e.preventDefault();
        if (email.val() && message.val() && message.val().length >= 50){
            submitMessage();
            console.log("message sent");
        }
    })

    function submitMessage() {
        informationModal.css("display", "flex");
        overlay.addClass('active');
    }
});