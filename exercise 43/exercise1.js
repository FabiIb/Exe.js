const user = {
  id: 1,
  name: "John",
  age: 25,
};

function savelocalStorage(user) {
  const newUser = JSON.stringify(user);
  localStorage.setItem("user", newUser);
}
savelocalStorage(user);