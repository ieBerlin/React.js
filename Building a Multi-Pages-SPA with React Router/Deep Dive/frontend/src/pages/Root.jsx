import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation.js";
export default function RootLayout() {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
}
