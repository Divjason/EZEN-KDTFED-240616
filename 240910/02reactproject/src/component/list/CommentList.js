import React from "react";
import styled from "styled-components";
import CommentListItem from "./CommentListItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  & * {
    margin-bottom: 16px;
  }
`;

const CommentList = ({ comments }) => {
  return (
    <Wrapper>
      {comments.map((comment) => {
        return <CommentListItem key={comment.id} comment={comment.content} />;
      })}
    </Wrapper>
  );
};

export default CommentList;
