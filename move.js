function move() {
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}
//
// function getMousePos(container, evt) {
//     var rect = container.getBoundingClientRect();
//     return {
//         x: evt.clientX - rect.left,
//         y: evt.clientY - rect.top
//     };
// }
//
// var container = document.getElementById('container');
//
// container.addEventListener('mousemove', function(evt) {
//     var mousePos = getMousePos(container, evt);
//     moveBox(animate, mousePos.x, mousePos.y);
// }, false);
//
// function moveBox(box, x, y) {
//     var elem = document.getElementById("animate");
//     // context.clearRect(0, 0, container.width, container.height);
//     elem.style.top = y + 'px';
//     elem.style.left = x + 'px';
// }

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}
var container = document.getElementById('container');

container.addEventListener('mousemove', function(evt) {
    var mousePos = getMousePos(container, evt);
    var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
    writeMessage(container, message);
}, false);