import { fetchrequest } from "./fetch.js";

const formlogin = document.querySelector(".form");
const POST_URL = "https://reqres.in/api/login";

formlogin.addEventListener("submit", async (event) => {
  event.preventDefault();
  clearErrorMessages();

  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const bodyData = { email, password };

  if (!validateEmail(email)) {
    displayErrorMessage("Please Enter a valid email address!!!");
    return;
  }

  try {
    const response = await fetchrequest(
      POST_URL,
      "POST",
      JSON.stringify(bodyData)
    );
    // const response = await fetch("https://reqres.in/api/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(bodyData),
    // });

    const data = response;

    if (data.error) {
      displayErrorMessage(data.error); //if api error
    } else {
      //login sucessful
      alert("login success");
      console.log(data);
      localStorage.setItem("token", data.token);

      window.location.href = "index.html";
    }
  } catch (error) {
    console.log("Error:", error);
    displayErrorMessage("An error has occured.Please try again");
  }
});

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
function displayErrorMessage(message) {
  const errorContainer = document.querySelector(".error-container");
  if (errorContainer) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = message;
    errorContainer.appendChild(errorMessage);
  }
}

function clearErrorMessages() {
  const errorContainer = document.querySelector(".error-container");
  if (errorContainer) {
    errorContainer.textContent = "";
  }
}
