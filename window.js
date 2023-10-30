function RB(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
var x = RB(0,(screen.width - window.outerWidth));
var y = RB(0,(screen.height - window.outerHeight));
var dupe = () => {
    let w = window.open('','','HEIGHT=1,WIDTH=1');
    w.document.write('<script src="window.js"></script>');
}
window.moveTo(x,y);
setInterval(() => {
    dupe();
}, 30000);
setInterval(() => {
    window.moveBy(RB(-10,10),RB(-10,10));
},1);
setTimeout(() => {
    onfocus = () => {
        dupe();
        open('https://classroom.google.com/');
    }
}, 1000);
