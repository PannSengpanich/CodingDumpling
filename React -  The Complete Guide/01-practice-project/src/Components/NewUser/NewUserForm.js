import { useState } from "react";
import classes from "./NewUserForm.module.css";
import Card from "../UI/Card";

function NewUserForm(props) {
  const [enteredName, setNameValue] = useState("");
  const [enteredAge, setAgeValue] = useState("");

  const changeNameHandler = (event) => {
    setNameValue(event.target.value);
  };
  const changeAgeHandler = (event) => {
    setAgeValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      alert("Please enter a valid name and age (non-empty values).");
      return;
    }
    const newUserData = { name: enteredName, age: enteredAge };
    setNameValue("");
    setAgeValue("");
    props.onSaveUserData(newUserData);
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">UserName</label>
          <input
            className={classes.input}
            id="name"
            type="text"
            name="name"
            value={enteredName}
            onChange={changeNameHandler}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            className={classes.input}
            type="number"
            name="age"
            value={enteredAge}
            onChange={changeAgeHandler}
          ></input>
          <button className={classes.button} type="submit">
            Add User
          </button>
        </div>
      </form>
    </Card>
  );
}
export default NewUserForm;
