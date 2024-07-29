import { fetchrequest } from "./fetch.js";

document.addEventListener("DOMContentLoaded", async function () {
  const login = document.getElementById("navbar_login");
  const button = document.createElement("a");
  const token = localStorage.getItem("token");
  const URL = "https://jsonplaceholder.typicode.com/posts";

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

  // fetch("https://jsonplaceholder.typicode.com/posts",{
  //   method: "GET",
  //   headers:{
  //     "Content-Type": "application/JSON",
  //   }
  // })
  // .then((response) => response.json())
  await fetchrequest(URL, "GET")
    .then((posts) => {
      // const posts = data.data;
      const postsContainer = document.querySelector(".posts");

      posts.map((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.style.fontSize = "16px";

        const postTitle = document.createElement("h2");
        postTitle.textContent = post.postTitle;

        const postContent = document.createElement("p");
        postContent.textContent = post.postContent;
        postContent.style.fontSize = "16px";
        postContent.style.color = "grey";

        const button1 = document.createElement("button");
        button1.innerText = "Read More..";
        console.log(post.postId);
        button1.addEventListener("click", function () {
          window.location.href = `blog.html?id=${post.postId}`;
        });

        postElement.appendChild(postTitle); //append to post container
        postElement.appendChild(postContent);
        postElement.appendChild(button1);
        postsContainer.appendChild(postElement);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
