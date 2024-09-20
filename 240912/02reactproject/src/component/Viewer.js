import React from "react";
import styled from "styled-components";
import { emotionList } from "../util";
import Diary from "../pages/Diary";

const Wrapper = styled.div``;

const Section = styled.div`
  width: 100%;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled.h4`
  font-size: 22px;
  font-weight: bold;
`;

const Emotion = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  &.emotion_img_1 {
    background: #64c964;
  }
  &.emotion_img_2 {
    background: #9dd772;
  }
  &.emotion_img_3 {
    background: #fdce17;
  }
  &.emotion_img_4 {
    background: #fd8446;
  }
  &.emotion_img_5 {
    background: #fd565f;
  }
`;

const Img = styled.img``;

const Description = styled.div`
  font-size: 25px;
  color: #fff;
`;

const ContentBg = styled.div`
  width: 100%;
  height: 150px;
  background: #ececec;
  border-radius: 5px;
  word-break: keep-all;
  overflow-wrap: break-word;
`;

const Content = styled.p`
  padding: 20px;
  font-size: 20px;
  font-weight: 400;
  line-height: 3rem;
`;

const Viewer = ({ content, emotionId }) => {
  const emotionItem = emotionList.find((it) => it.id === emotionId);
  return (
    <Wrapper>
      <Section>
        <Title>오늘의 감정</Title>
        <Emotion className={`emotion_img_${emotionId}`}>
          <Img src={emotionItem.img} alt={emotionItem.name} />
          <Description>{emotionItem.name}</Description>
        </Emotion>
      </Section>
      <Section>
        <Title>오늘의 일기</Title>
        <ContentBg>
          <Content>{content}</Content>
        </ContentBg>
      </Section>
    </Wrapper>
  );
};

export default Viewer;
