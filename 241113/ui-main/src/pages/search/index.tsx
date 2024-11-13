import React from "react";
import { useRouter } from "next/router";

const Search = () => {
  const router = useRouter();
  const {
    query: { q },
  } = router;

  return <h1>Search : {q}</h1>;
};

export default Search;
