import { Outlet
  // , useNavigation 
} from "react-router-dom";
import MainNavigation from "../components/MainNavigation.js";
export default function RootLayout() {
  // const navigation = useNavigation();
  // console.log(navigation.state)
  return (
    <>
      <MainNavigation />
      {/* <main>{navigation.state === "loading" && <p>Loading...</p>}</main> */}
      <Outlet />
    </>
  );
}
