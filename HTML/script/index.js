document.addEventListener("DOMContentLoaded", function () {
  const token = localStorage.getItem("token");

  const login = document.getElementById("navbar_login");
  const button = document.createElement("a");
  const button2 = document.createElement("a");
  const hidden = document.getElementById("hidden");

  login.className = "navbar_login";

  if (token) {
    button.innerText = "Logout";
    hidden.removeAttribute("hidden");
    button.addEventListener("click", function () {
      localStorage.clear();
      window.location.reload(true);
    });
  } else {
    button2.innerText = "Login";
    button2.href = "login.html";
    button.innerText = "Signup";
    button.href = "signup.html";
    login.appendChild(button2);
  }
  login.appendChild(button);
  // navbar.appendChild(login);
});
// document.addEventListener("DOMContentLoaded", function () {
//   const token = localStorage.getItem("token");
//   if (!token) {
//     const login = document.querySelector(".navbar");
//     const child1 = login.children[3];
//     console.log(child1);
//     login.removeChild(child1);
//   }
// });

function validateform() {
  event.preventDefault();

  let form = document.getElementById("myform");
  const formData = new FormData(form);
  let isValid = validateName & validateNumber & validateorganization;
  if (isValid) {
    alert(
      "Callsubmitted" +
        "\n" +
        "Name:" +
        document.getElementById("name").value +
        "\n" +
        "Number:" +
        document.getElementById("number").value +
        "\n" +
        "Email:" +
        document.getElementById("email").value +
        "\n" +
        "Organization:" +
        document.getElementById("organization").value
    );
    // alert(document.getElementById('name').value);
    // alert(document.getElementById('number'.value));
    // alert(document.getElementById('email').value);
    // alert(document.getElementById('organization').value);
  } else {
    alert("Fill up the form please");
  }
}

function validateName() {
  let x = document.getElementById("name").value;
  let nameErr = document.getElementById("nameErr");
  if (!/^[a-zA-Z\s]+$/.test(x)) {
    nameErr.innerText = "Enter a valid name (only letters and spaces allowed)";
    return false;
  } else {
    nameErr.innerText = "";
    return true;
  }
}

function validateNumber() {
  let y = document.getElementById("number");
  let numberErr = document.getElementById("numberErr");
  if (y.value.length != 10) {
    numberErr.innerText = "Number must be 10 characters long.";
    return false;
  } else {
    numberErr.innerText = "";
    return true;
  }
}

function validateorganization() {
  let z = document.getElementById("organization").value;
  let orgErr = document.getElementById("orgErr");
  if (!/^[a-zA-Z\s]*$/.test(z)) {
    orgErr.innerText = "Enter a valid name ";
    return false;
  } else {
    orgErr.innerText = "";
    return true;
  }
}
