$(document).ready(function() {
    var open = $('.open-view'),
        close = $('.close'),
        overlay = $('.overlay');

    open.click(function() {
        overlay.show();
        $('#wrapper').addClass('toggled');
    });

    close.click(function() {
        overlay.hide();
        $('#wrapper').removeClass('toggled');
    });
});