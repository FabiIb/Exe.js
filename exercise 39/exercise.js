const isLogged = true;
const person = {
  name: "Jhon",
  age: 24,
};
const promise = new Promise((resolve, reject) => {
  isLogged ? resolve(Math.random()) : reject(new Error("Non sei Online"));
});

function numberCheck(number) {
  return new Promise((resolve, reject) => {
    try {
      if (number > 0.5) {
        resolve(person);
      } else {
        reject(new Error("number small"));
      }
    } catch (err) {
      console.log("error");
    }
  });
}
promise
  .then((res) => numberCheck(res))
  .then((val) => console.log(val))
  .catch((error) => console.warn(error))
  .finally(() => console.log("Fine"));

