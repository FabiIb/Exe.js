function printAsyncName(callback,name) {
    
    setInterval(callback, 1000);
    
    setTimeout(()=> (
        console.log(name) 
    ), 2000);
    
}
function callback() {
    console.log("Hello")
    
}
printAsyncName(callback, "Mario");