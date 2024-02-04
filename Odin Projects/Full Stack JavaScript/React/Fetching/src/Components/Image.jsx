import { useEffect, useState } from "react";
import { QueryClient, useQuery } from "@tanstack/react-query";

const Image = () => {
  const [imageURL, setImageURL] = useState(null);
  console.log("rerender image");
  console.log("imageURL in rerender", imageURL);

  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
        .then((response) => response.json())
        .then((response) => setImageURL(response[0].url))
        .catch((error) => console.error(error)),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  useEffect(() => {
    console.log("before fetch");
    console.log(imageURL);
    console.log("after fetch");
    console.log(imageURL);
  }, []);

  return (
    imageURL && (
      <>
        <h1>An image</h1>
        <img src={data} alt={"placeholder text"} />
      </>
    )
  );
};

export default Image;
