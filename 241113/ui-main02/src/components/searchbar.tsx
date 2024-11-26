"use client";
import React, { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import style from "./searchbar.module.css";

const Searchbar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSeach] = useState("");

  const q = searchParams.get("q");

  useEffect(() => {
    setSeach(q || "");
  }, [q]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeach(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };
  return (
    <Suspense>
      <div>
        <form onSubmit={onSubmit} className={style.container}>
          <input value={search} type="text" onChange={onChangeSearch} />
          <input type="submit" value="검색" />
        </form>
      </div>
    </Suspense>
  );
};

export default Searchbar;
