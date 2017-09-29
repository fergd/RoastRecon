$(document).ready(function() {
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        }
    };
    
    if (isMobile.Android()) {
        $(".cta-container").append("<img src=\"../assets/images/google.png\"><a href=\"\">Get the iOS version</a>");
    } else if (isMobile.iOS()) {
        $(".cta-container").append("<img src=\"../assets/images/apple.png\"><a href=\"\">Get the Android version</a>");
    } else {
        $(".cta-container").append("<img src=\"../assets/images/apple.png\">&nbsp;<img src=\"../assets/images/google.png\">");
    }
    // Copyright year
    var currentYear = (new Date).getFullYear();
    $('.date').text( '\u00A9' + (new Date).getFullYear() );
});