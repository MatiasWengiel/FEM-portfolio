import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Root(props) {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
