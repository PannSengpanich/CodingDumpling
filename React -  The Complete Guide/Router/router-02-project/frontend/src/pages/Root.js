import MainNavigation from "../components/MainNavigation";
import { Outlet, useNavigation } from "react-router-dom";
function RootLayout() {
  //   const navigation = useNavigation();
  return (
    <>
      <MainNavigation></MainNavigation>
      <main>
        {/* {navigation.state === "loading" && <p>Loading...</p>}  */}
        <Outlet></Outlet>
      </main>
    </>
  );
}
export default RootLayout;
