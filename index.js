// Add your code here
function submitData() {
  const userData = {
    name: "Steve",
    email: "steve@steve.com",
  };

  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userData),
  };

  fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.querySelector("body").textContent = data.id
    })
    .catch(function (error) {
      alert("You got an error!");
      console.log(error.message);
    });
}

submitData()
