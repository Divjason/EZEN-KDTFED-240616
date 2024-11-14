import { ReactNode } from "react";
import Link from "next/link";
import style from "./global-layout.module.css";

const GlobalLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Link href={"/"}>📕 Book Lists</Link>
      </header>
      <main className={style.main}>{children}</main>
      <footer className={style.footer}>Copyright @David</footer>
    </div>
  );
};

export default GlobalLayout;
