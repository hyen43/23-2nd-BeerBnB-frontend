import React from 'react';
import styled from 'styled-components';

function DetailTitle({ detailData }) {
  return (
    <Wrapper>
      <TitleContainer>
        <Title>{detailData.name}</Title>
      </TitleContainer>
      <TitleContent>
        <ContentList>
          <i className="fas fa-map-marker-alt" />
          <ContentInfo>
            {detailData.address} , {detailData.detail_address}
          </ContentInfo>
          <ContentInfo>·</ContentInfo>
          <i className="fas fa-home" />
          <ContentInfo>최대 인원 {detailData.head_count}명</ContentInfo>
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
    color: #ff9f1a;
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
