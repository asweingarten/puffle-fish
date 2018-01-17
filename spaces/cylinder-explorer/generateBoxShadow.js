function generateBoxShadow(steps, width, color) {
    var r = '';

    for(var i=0;i<=steps;i++) {
        if(i !== 0) {
            r += ', ';
        }
        r += i + 'px ' + i + 'px ' + width + ' ' + color;
    }
    return r;
}

document.querySelector('#cylinder').style.boxShadow = generateBoxShadow(100, '1px', 'black');
