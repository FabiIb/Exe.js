const isLogged = true;
const person = {
  name: "Jhon",
  age: 24,
};

function promise(isLogged) {
  return new Promise((resolve, reject) => {
      if(isLogged) {
          resolve(Math.random());
      }
      else reject (new Error('User is not logged in!'))
  })
}

function numberCheck(number) {
  return new Promise((resolve, reject) => {
    if(number > 0.5) {
      resolve (person);
    } else reject(new Error('The number is less than 0.5'));
    
  });
}

promise(isLogged)
.then((val) => {
  console.log("Random figures", val); 
   return numberCheck(val);
})
  .then((res) => console.log(res))
  .catch((error) => console.warn(error));
