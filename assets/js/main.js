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
        $(".cta-container").append("<button class=\"cta-button\">Download for Android</button>");
    } else if (isMobile.iOS()) {
        $(".cta-container").append("<button class=\"cta-button\">Download for iOS</button>");
    } else {
        $(".cta-container").append("<button class=\"cta-button\">Download for Gen</button>");
    }
});