
    const h1 = document.createElement('h1');
    h1.style.cssText += 'color: blue; text-align:center';
    document.getElementById("root").appendChild(h1);

setTimeout(function() {   
    h1.innerHTML = "10";  
    setTimeout(function() { 
        h1.innerHTML = "9"; 
        setTimeout(function() {
            h1.innerHTML = "8"; 
            setTimeout(function() {
                h1.innerHTML = "7"; 
                setTimeout(function() {
                    h1.innerHTML = "6"; 
                    setTimeout(function() {
                        h1.innerHTML = "5"; 
                        setTimeout(function() {
                            h1.innerHTML = "4"; 
                            setTimeout(function() {
                                h1.innerHTML = "3"; 
                                setTimeout(function() {
                                    h1.innerHTML = "2"; 
                                    setTimeout(function() {
                                        h1.innerHTML = "1"; 
                                        setTimeout(function() {
                                            h1.innerHTML = "Happy Independence Day";
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);



