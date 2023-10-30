var troll = () => {
    let w = window.open('','','HEIGHT=1,WIDTH=1');
    w.document.write('<script src="window.js"></script>');
    open('secondpart.html');
    close();
}