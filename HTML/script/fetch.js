import { serialize } from "./serialize.js";

export function fetchrequest(url, method, data) {
  //   debugger;
  switch (method) {
    case "POST":
      return handlePostRequest(url, data);
      break;

    case "GET":
      return handleGetRequest(url);
      break;

    default:
      console.log("Invalid HTTPs request");
  }
}

async function handlePostRequest(url, data) {
  //   debugger;
  let response;
  await fetch(url, {
    method: `POST`,
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      response = data;
    })
    .catch((error) => console.error(error));
  return response;
}

async function handleGetRequest(url) {
  let response;
  await fetch(url, {
    method: `GET`,
    headers: {
      "Content-Type": "application/JSON",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      response = data;
    })
    .catch((error) => console.error(error));
  return serialize(response);
}
