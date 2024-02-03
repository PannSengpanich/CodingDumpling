import { useParams } from "react-router-dom";
import Popeye from "../Components/Popeye";
import Spinach from "../Components/Spinach";
import DefaultProfile from "../Components/DefaultProfile";
const Profile = () => {
  const { name } = useParams();
  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <hr />
      <h2>The profile visited is here:</h2>
      <p>Name: {name}</p>
      {name === "popeye" ? (
        <Popeye />
      ) : name === "spinach" ? (
        <Spinach />
      ) : (
        <DefaultProfile />
      )}
    </div>
  );
};

export default Profile;
