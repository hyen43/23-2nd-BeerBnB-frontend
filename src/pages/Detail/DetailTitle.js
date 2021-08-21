import React from 'react';
import styled from 'styled-components';

function DetailTitle() {
  return (
    <Wrapper>
      <TitleContainer>
        <Title>속초 호텔형 신축 레지던스</Title>
      </TitleContainer>
      <TitleContent>
        <ContentList>
          <i className="fas fa-map-marker-alt" />
          <ContentInfo>Sokcho-si, 강원도, 한국</ContentInfo>
          <ContentInfo>·</ContentInfo>
          <i className="fas fa-home" />
          <ContentInfo>최대 인원 2명</ContentInfo>
        </ContentList>
        <ShareBtn>
          <i className="fas fa-share-square" />
          공유하기
        </ShareBtn>
      </TitleContent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-bottom: 15px;
`;

const Title = styled.h1`
  font-size: 1.7em;
  font-weight: 400;
`;

const TitleContainer = styled.div`
  margin-bottom: 10px;
`;

const TitleContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContentList = styled.div`
  padding: 5px 0;

  i {
    margin-right: 8px;
    color: #ff385c;
  }
`;

const ContentInfo = styled.span`
  margin-right: 10px;
`;

const ShareBtn = styled.button`
    padding: 5px;
    border: none;
    background: none;
    cursor: pointer;
    font-size: 15px;

    &:hover {
      background-color: lightgrey;
    }

    i {
      margin-right: 8px;
    }
  }
`;

export default DetailTitle;
