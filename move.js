$(document).ready(setInterval(pulse(), 250));

function pulse() {
    var circle = $("#circle");
    console.log("who even knows");
    circle.animate({width: 250, height: 250}, 1000);
    circle.animate({width: 30, height: 30}, 1000);
}

function pulseUp() {
    var circle = $("#circle");
    console.log("pulsing up");
    circle.animate({width: 250, height: 250}, 1000, function () {
        console.log("pulsing down");
        circle.animate({width: 30, height: 30}, {duration: 1000, complete: pulseUp});
    });
}

function pulseDown() {
    var circle = $("#circle");
    console.log("pulsing down");
    circle.animate({width: 30, height: 30}, {duration: 1000, complete: pulseUp});
}

$(document).mousemove(function (e) {
    var circle = $("#circle");
    var x = e.pageX - parseInt(circle.width() / 2);
    var y = e.pageY - parseInt(circle.height() / 2);
    circle.css({left: x, top: y});

    moveShadow();
    if (shouldUpdateColor()) {
        var hue = jQuery.Color(circle.color);
        console.log(hue);
        var c = getRandomColor(hue);
        circle.css('background', c);
    }
});

function moveShadow() {
    var myCircle = $("#circle");
    var logo = $("#container");
    var logoshadow = $("#logosh");

    var shadowOffset = 1.08;

    var lightCenterX = parseInt(myCircle.width() / 2);
    var lightCenterY = parseInt(myCircle.height() / 2);
    var logoCenterX = parseInt(logo.width() / 2);
    var logoCenterY = parseInt(logo.height() / 2);
    var logoShdwCenterX = parseInt(logoshadow.width() / 2);
    var logoShdwCenterY = parseInt(logoshadow.height() / 2);

    var lightX = parseInt(myCircle.offset().left) + lightCenterX;
    var lightY = parseInt(myCircle.offset().top) + lightCenterY;

    var logoX = parseInt(logo.offset().left) + logoCenterX;
    var logoY = parseInt(logo.offset().top) + logoCenterY;

    var distanceX = logoX - lightX;
    var distanceY = logoY - lightY;

    var distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
    var shadowDistance = distance * shadowOffset;
    var shadowPosLeft = (distanceX / distance * shadowDistance + lightX - logoShdwCenterX) + "px";
    var shadowPosTop = (distanceY / distance * shadowDistance + lightY - logoShdwCenterY) + "px";
    logoshadow.css({"left": shadowPosLeft, "top": shadowPosTop, "opacity": setOpacity(shadowDistance)});
}

function setOpacity(getDistance) {
    var myCircle = $("#circle");
    if (myCircle.hasClass("off")) {
        return 0;
    } else {
        return (1.2 - getDistance / 1000);
    }
}

$("*").click(function (e) {
    var concentric = document.createElement("div");
    concentric.id = "concentric";

    // Get location of the circle
    var circle = $("#circle");
    var x = e.pageX - parseInt(circle.width() / 2);
    var y = e.pageY - parseInt(circle.height() / 2);

    concentric.style.cssText = "left: " + x + "px; top: " + y + "px";

    $("body").append(concentric);
    $(concentric).animate({width: 250, height: 250, opacity: 0, top: "-= 110", left: "-=110"}, 1500);
});