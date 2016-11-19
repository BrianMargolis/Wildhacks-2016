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
    return (Math.random() > .95);
}