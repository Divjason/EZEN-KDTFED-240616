import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <h2>Layout</h2>
      <Outlet />
    </>
  );
};

export default Layout;
