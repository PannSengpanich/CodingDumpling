import React, { useState, useEffect } from "react";

const App = () => {
  const [color, setColor] = useState("black");
  const [width, setWidth] = useState(window.innerWidth);
  /*
  useEffect(() => {
    // Do something
  }, []);
  ! =componentDidMount

  useEffect(() => {
  // Do something
}, [color]);
  ! =componentDidUpdate
 
  useEffect(() => {
  // Do something
});
  ! =componentDidMount and componentDidUpdate

useEffect(() => {
    // Do something

    return () =>{console.log()}
  }, []);
   != componentWillUnmount then componentDidMount
useEffect(() => {
    // Do something

    return () =>{console.log()}
  }, [color]);
   != return() when color is changed then componentDidUpdate
  */

  //execute everytime component render
  useEffect(() => {
    const changeColorOnClick = () => {
      if (color === "black") {
        setColor("red");
      } else {
        setColor("black");
      }
    };
    console.log("component update");
    console.log("add event listener");
    document.addEventListener("click", changeColorOnClick);

    return () => {
      console.log("remove event listener");
      document.removeEventListener("click", changeColorOnClick);
    };
  }, [color]); // hook is run when only color is changed

  useEffect(() => {
    console.log("component mount");
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    console.log("mount");
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <div
        id="myDiv"
        style={{
          color: "white",
          width: "100px",
          height: "100px",
          position: "absolute",
          left: "50%",
          top: "50%",
          backgroundColor: color,
        }}
      >
        This div can change color. Click on me!
      </div>
      <div>{width}</div>
    </div>
  );
};

export default App;
