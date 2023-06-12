// import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useAxios } from "use-axios-client";

// const client = axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com/posts",
// });

function App() {
  // const [post, setPost] = useState(null);
  // const [error, setError] = useState(null);
  // useEffect(() => {
  //   async function getPost() {
  //     const response = await client.get("/1");
  //     setPost(response.data);
  //   }
  //   getPost();
  // }, []);

  // //send info to the baseURL and set post
  // async function createPost() {
  //   await client
  //     .post("/", {
  //       title: "Hello World",
  //       body: "This is a new post",
  //     })
  //     .then((response) => {
  //       setPost(response.data);
  //     });

  //   /*
  //   response =
  //   {
  //     "data": {
  //     "id": 1,
  //     "title": "Hello World",
  //     "body": "This is a new post"
  //   },
  //   "status": 200,
  //   "statusText": "OK",
  //   "headers": { ... },  // Headers of the response
  //   "config": { ... },   // Axios request configuration
  //   "request": { ... }   // XMLHttpRequest instance used for the request
  //   }
  //    */
  // }
  // async function updatePost() {
  //   await client
  //     .put("/1", {
  //       title: "Hello World",
  //       body: "this is an updated post",
  //     })
  //     .then((response) => {
  //       setPost(response.data);
  //     });
  // }

  // async function deletePost() {
  //   await client.delete("/1").then(() => {
  //     alert("Post deleted");
  //     setPost(null);
  //   });
  // }

  // if (error) return `Error: ${error.message}`;
  // if (!post) return "No Post";

  const { data, error, loading } = useAxios({
    url: "https://jsonplaceholder.typicode.com/posts/1",
  });

  if (loading || !data) return "loading...";
  if (error) return "error";
  return (
    <div>
      <h1>{data.title}</h1>
      <p>
        Post id: {data.id} {data.body}
      </p>
      {/* <button onClick={createPost}>Create Post</button>
      <button onClick={updatePost}>Update Post</button>
      <button onClick={deletePost}>Delete Post</button> */}
    </div>
  );
}

export default App;
