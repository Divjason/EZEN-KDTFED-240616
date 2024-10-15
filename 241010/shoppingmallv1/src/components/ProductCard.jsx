import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  cursor: pointer;
`;

const Img = styled.img`
  width: 300px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const formattedPrice = new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
  }).format(item.price);

  const showDetail = () => {
    navigate(`products/${item.id}`);
  };
  return (
    <Wrapper onClick={showDetail}>
      <Img src={item && item?.img} />
      <div>Conscious Choice</div>
      <div>{item && item?.title}</div>
      <div>{item && formattedPrice}</div>
      <div>{item && item?.new === true ? "신제품" : "이벤트상품"}</div>
    </Wrapper>
  );
};

export default ProductCard;
