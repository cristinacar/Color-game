function myfunc(text, interval){
    var i = 1;
    inte = interval * 1000;
    setInterval(function(){
        console.log(text + ' at ' + i * inte)
        i++;
    }, inte);

    setTimeout(function(){
        clearInterval(int);
    },13000);
}

//myfunc('hello', 1);