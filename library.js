// Returns a random color. Should we make this just select from a predefined list, so we can restrict what colors the circle is?

dec_inc = 1; // 1 when we're incrementing, 0 otherwise
function getRandomColor(currHue) {
    // hsl(320, 50%, 75%)
    // Range from hue = 10 to hue = 48
    if (currHue == 48) {
        dec_inc = 0;
    } else if (currHue == 10) {
        dec_inc = 1;
    }

    if (dec_inc == 1) {
        hue = currHue + 1;
    } else {
        hue = currHue - 1;
    }
    return "hsl(" + hue + ", 100%, 54%)";
}

// Makes the circle change colors a little less aggressively
function shouldUpdateColor() {
    var param = .95; // higher values (must be < 1) make it change less; lower values (must be > 0) make it change more
    return (Math.random() > param);
}