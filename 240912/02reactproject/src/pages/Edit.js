import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const goToDiary = (e) => {
    if (e.target === "value") navigate("/diary");
    else {
      alert("미가입 회원은 다이어리 리뷰 불가!");
      navigate("/home");
    }
  };
  return (
    <div>
      Edit Page
      {/* <Link to={"/diary"}>다이어리 페이지</Link> */}
      <button onClick={goToDiary}>다이어리 페이지</button>
    </div>
  );
};

export default Edit;
