import { useState, useEffect } from "react";
import axios from "axios";
// using custom hooks, can be reused in other components
const useData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?_limit=10`,
        );
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return { data, error, loading };
};

const Image = () => {
  const { data, error, loading } = useData();
  console.log(data, error, loading);
  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <h1>A text</h1>
      {data.map((element) => {
        return <p>{element.title}</p>;
      })}
    </>
  );
};
export default Image;
