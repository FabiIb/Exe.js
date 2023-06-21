function repeatHello(callback) {
  const interval =  setInterval(callback, 1000);
    setTimeout(() => {
        clearInterval(interval) 
        },5000)
  }
  
  const newHello = () => {
    console.log("Hello");
  }
 
    
  
  repeatHello(newHello);
  
