document.getElementById("review").addEventListener("focus", function () {
    this.style.backgroundColor = "white";
});
document.getElementById("review").addEventListener("blur", function () {
    this.style.backgroundColor = "#1B263B";
});

$(document).ready(function () {
    $('.faq-question').click(function () {
        $(this).parents('.card').next().find('.collapse').collapse('show');
    });
});