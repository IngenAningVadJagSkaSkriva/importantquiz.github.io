function RB(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
var x = RB(0,(screen.width - window.outerWidth));
var y = RB(0,(screen.height - window.outerHeight));
var dupe = () => {
    let w = window.open('','','HEIGHT=1,WIDTH=1');
    w.document.write('<script src="window.js"></script>');
}
var reset = () => {
    window.moveTo((screen.width / 2),(screen.height / 2));
}
window.moveTo(x,y);
setInterval(() => {
    dupe();
}, 30000);
setInterval(() => {
    if(screenX > screen.width) {
        reset();
    } else if(screenX < 0) {
        reset();
    }
    if(screenY > screen.height) {
        reset();
    } else if(screenY < 0) {
        reset();
    }
    window.moveBy(RB(-10,10),RB(-10,10));
},1);
setTimeout(() => {
    onfocus = () => {
        dupe();
        open('secondpart.html');
    }
}, 2500);
