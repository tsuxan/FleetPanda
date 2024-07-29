export function serialize(data) {
  let serializedData = data.map((datum) => {
    let initialdata = {};
    initialdata["postId"] = datum["id"];
    initialdata["postTitle"] = datum["title"];
    initialdata["postContent"] = datum["body"];
    return initialdata;
  });
  return serializedData;
}
