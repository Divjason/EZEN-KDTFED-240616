import React, { ReactNode } from "react";
import Searchbar from "../../components/searchbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {/* <div>{new Date().toLocaleString()}</div> */}
      <Searchbar />
      {children}
    </div>
  );
};

export default Layout;
