$(document).ready(function () {


    $("h1").css({ "background-color": "red" });

    $("#segundo").css({ "background-color": "blue" });

    $(".tercero").css({ "background-color": "green" });

    $("#btn-click").click(function () {
        $(".tercero").after("<p>Este es un nuevo parrafo</p>");
    });

    $("#btn-ocultar").click(function () {
        $("fieldset").hide();
    });

    $("#btn-mostrar").click(function () {
        $("fieldset").show();
    });

    $("#segundo").mouseenter(function () {
        $(".tercero").fadeOut();

    });

    $("#segundo").mouseleave(function () {
        $(".tercero").fadeIn();

    });

    $(".tercero").mouseenter(function () {
        $("#segundo").slideUp();

    });

    $(".tercero").mouseleave(function () {
        $("#segundo").slideDown();

    });

    /* aqui comienza la otra parte */
    $("button").click(function () {
        $("div").animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
        });
    });

});