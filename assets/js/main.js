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
        $(".cta-container").append("<button class=\"cta-button\">Download for Android</button><br><a href=\"\">Get the iOS version</a>");
    } else if (isMobile.iOS()) {
        $(".cta-container").append("<button class=\"cta-button\">Download for iOS</button><br><a href=\"\">Get the Android version</a>");
    } else {
        $(".cta-container").append("<button class=\"cta-button\">Download for Gen</button>");
    }
});