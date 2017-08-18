var j = setInterval(consoleL, 5000);
var x = setInterval(consoleX, 10000);
var o = setInterval(consoleO, 15000);
var p = setInterval(clear, 13000);


function consoleL(){
    console.log('text to output at 5 seconds');
}

function consoleX(){
    console.log('text to output at 10 seconds');
}

function consoleO(){
    console.log('test to output at 15 seconds');
}

function clear(){
    clearInterval(p);
}

clear();