var window_height = $(window).height();

function scroll_to_elem(elem) {
    var speed = 2000
    if (document.getElementById(elem)) {
        var destination = jQuery('#' + elem).offset().top;
        jQuery("html,body").animate({ scrollTop: destination - 80 }, speed);
    }
}
$(window).scroll(function() {
    $('.anim').each(function() {
        var offset = $(this).offset().top;
        var randomz = Math.random(3000) * 1000;
        var this_marginTop = $(this).css('margin-top');
        var this_marginTop = parseFloat($(this).css('margin-top'));
        this_marginTop = this_marginTop - 40;
        if ($(window).scrollTop() > offset - (window_height + window_height / 6)) {
            $(this).removeClass("anim");
            $(this).delay(randomz).animate({ marginTop: this_marginTop + 'px', opacity: 1 }, 500);
        }
    });
});
$('.anim').each(function() {
    $(this).animate({ "opacity": 0 }, 0);
    var this_marginTop_first = parseFloat($(this).css('margin-top'));
    this_marginTop_first = this_marginTop_first + 40;
    $(this).css('margin-top', this_marginTop_first + 'px');
});