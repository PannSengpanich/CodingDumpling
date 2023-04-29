import NewUserForm from "./NewUserForm";
import "./NewUsers.css";
function NewUsers(props) {
  const saveUserDataHandler = (newUserData) => {
    props.onAddUserData(newUserData);
  };
  return <NewUserForm onSaveUserData={saveUserDataHandler}></NewUserForm>;
}
export default NewUsers;
