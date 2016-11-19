// Returns a random color. Should we make this just select from a predefined list, so we can restrict what colors the circle is?
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Makes the circle change colors a little less aggressively
function shouldUpdateColor() {
    var param = .95; // higher values (must be < 1) make it change less; lower values (must be > 0) make it change more
    return (Math.random() > param);
}

$(document).mousemove(function(e){
    $("#circle").css({left:e.pageX, top:e.pageY});
    moveShadow();
    if (shouldUpdateColor()) {
        var c = getRandomColor();
        $("#circle").css('background', c);
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

    lightX = parseInt(myCircle.offset().left) + lightCenterX;
    lightY = parseInt(myCircle.offset().top) + lightCenterY;

    logoX = parseInt(logo.offset().left) + logoCenterX;
    logoY = parseInt(logo.offset().top) + logoCenterY;

    distanceX = logoX - lightX;
    distanceY = logoY - lightY;

    distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
    shadowDistance = distance * shadowOffset;
    shadowPosLeft = (distanceX / distance * shadowDistance + lightX - logoShdwCenterX) + "px";
    shadowPosTop = (distanceY / distance * shadowDistance + lightY - logoShdwCenterY) + "px";
    logoshadow.css({"left": shadowPosLeft, "top": shadowPosTop, "opacity": setOpacity(shadowDistance), "margin": "0 0 0 0"});
}

function setOpacity(getDistance) {
    var myCircle = $("#circle");
    if (myCircle.hasClass("off")) {
        return 0;
    } else {
        return (1.2 - getDistance / 1000);
    }
}

$("#body").click(function(){
    // do something when you click
});