const number = 15;

let newCiao = new Promise ((resolve, reject) => {
    if (number > 10) {
        resolve(true)   
    }
    else{
        reject(false)
    }
}) 
newCiao 
 .then((val) => console.log(val))
.catch((err) => console.log(err))