import React, { ReactNode, Suspense } from "react";
import Searchbar from "../../components/searchbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {/* <div>{new Date().toLocaleString()}</div> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Searchbar />
      </Suspense>
      {children}
    </div>
  );
};

export default Layout;
