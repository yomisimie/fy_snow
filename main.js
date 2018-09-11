function clickSound() {
    var sound = document.getElementById("click-sound");
    sound.play();
}
function hoverSound() {
    var sound = document.getElementById("hover-sound");
    sound.play();
}

$(function(){
    var dialog;
    $('.menu li a').click(function(){
        var url = $(this).attr('href');
        if ($('.jconfirm').length >= 1) {
            dialog.close();
        }
        dialog = $.dialog({
            title: 'Console',
            content: url,
            animation: 'none',
            closeAnimation: 'none',
        });
        return false;
    });
});