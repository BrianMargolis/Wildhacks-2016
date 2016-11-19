// Returns a random color. Should we make this just select from a predefined list, so we can restrict what colors the circle is?

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Makes the circle change colors a little less aggressively
function shouldUpdateColor() {
    var param = .95; // higher values (must be < 1) make it change less; lower values (must be > 0) make it change more
    return (Math.random() > param);
}