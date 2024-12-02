import React, { ReactNode } from "react";
import Link from "next/link";

const Layout = ({
  children,
  sidebar,
  feed,
}: {
  children: ReactNode;
  sidebar: ReactNode;
  feed: ReactNode;
}) => {
  return (
    <div>
      <div>
        <Link href={"/parallel"}>parallel</Link>
        &nbsp;
        <Link href={"/parallel/setting"}>parallel/setting</Link>
      </div>
      {sidebar}
      {children}
      {feed}
    </div>
  );
};

export default Layout;
