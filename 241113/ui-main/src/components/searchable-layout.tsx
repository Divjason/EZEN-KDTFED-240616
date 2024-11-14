import React, { ReactNode, useState } from "react";
import { useRouter } from "next/router";
import style from "./searchable-layout.module.css";

const SearchableLayout = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const router = useRouter();
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!search) return;
    router.push(`/search?q=${search}`);
  };
  return (
    <div>
      <div>
        <form className={style.searchbar_container} onSubmit={onSubmit}>
          <input
            value={search}
            type="text"
            onChange={onChangeSearch}
            placeholder="검색어를 입력하세요..."
          />
          <input type="submit" value="검색" />
        </form>
      </div>
      {children}
    </div>
  );
};

export default SearchableLayout;
