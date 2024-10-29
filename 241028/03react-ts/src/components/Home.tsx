import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { users } from "../db";

const Home = () => {
  const [readSearchParams, setSearchParams] = useSearchParams();
  // console.log(readSearchParams.get("geo"));
  setTimeout(() => {
    setSearchParams({
      day: "today",
      tomorrow: "241030",
    });
  }, 3000);
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Home;
