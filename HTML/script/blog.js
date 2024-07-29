document.addEventListener("DOMContentLoaded", function () {
  const login = document.getElementById("navbar_login");
  const button = document.createElement("a");
  const token = localStorage.getItem("token");
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get("id");

  login.className = "navbar_login";

  if (token) {
    button.innerText = "Logout";
    hidden.removeAttribute("hidden");
    button.addEventListener("click", function () {
      localStorage.clear();
      window.location.href = "index.html";
    });
  } else {
    window.location.href = "login.html";
  }
  login.appendChild(button);

  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => response.json())
    .then((postId) => {
      const postContainer = document.querySelector(".post");

      const postElement = document.createElement("div");
      postElement.classList.add("Blog");
      postElement.style.fontSize = "16px";

      const postTitle = document.createElement("h2");
      postTitle.textContent = postId.title;

      const postContent = document.createElement("p");
      postContent.textContent = postId.body;
      postContent.style.fontSize = "18px";
      postContent.style.color = "grey";

      postElement.appendChild(postTitle);
      postElement.appendChild(postContent);
      // console.log(postContent);
      postContainer.appendChild(postElement);
    });
});
