import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

const Image = () => {
  const imageURL = useQuery({
    queryKey: ["image"],
    queryFn: async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos",
          {
            mode: "cors",
          },
        );
        const jsonData = await response.json();
        console.log(jsonData);
        return jsonData[0].url;
      } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch image data");
      }
    },
  });
  console.log("rerender image");
  console.log("imageURL in rerender", imageURL.data);

  if (imageURL.isPending) return "Loading...";

  if (imageURL.error) return "An error has occurred: " + error.message;

  // useEffect(() => {
  //   console.log("before fetch");
  //   console.log(imageURL);
  //   console.log("after fetch");
  //   console.log(imageURL);
  // }, []);

  return (
    imageURL.data && (
      <>
        <h1>An image</h1>
        <img src={imageURL.data} alt={"placeholder text"} />
      </>
    )
  );
};

export default Image;
