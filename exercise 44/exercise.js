const user = {
  id: 1,
  name: "John",
  age: 25,
};

function getLocale(){
  const newUser = localStorage.getItem("user")
  console.log(JSON.parse(newUser));
}
getLocale()