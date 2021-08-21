import React from 'react';
import styled from 'styled-components';

function DetailContent() {
  return (
    <Wrapper>
      <DetailContainer>
        <DetailInfo>
          <div>
            <img
              alt="호스트 이미지"
              src="https://media.vlpt.us/images/winter_ya/post/8ce1082b-2a99-4db4-9ed8-f1829af0c728/liberty.jpg"
            />
          </div>
          <DetailHost>
            <h1>호스트 진욱 님 소개</h1>
            <div>호스팅 시작 연도: 2021년 7월년</div>
          </DetailHost>
        </DetailInfo>
      </DetailContainer>
      <DetailRoom>
        <h1>숙소의 장점</h1>
        <div>숙소 정보</div>
      </DetailRoom>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 60%;
`;

const DetailContainer = styled.div`
  padding-bottom: 32px;
  border-bottom: 1px solid lightgrey;
`;

const DetailInfo = styled.div`
  display: flex;
  flex-direction: coloum;
  vertical-align: middle;

  img {
    margin-right: 16px;
    width: 90px;
    height: 112px;
    border-radius: 5px;
  }
`;

const DetailHost = styled.div`
  margin: auto 0;

  h1 {
    margin-bottom: 10px;
    font-size: 20px;
  }
`;

const DetailRoom = styled.div`
  padding: 32px 0;

  h1 {
    padding-bottom: 24px;
    font-size: 20px;
  }
`;

export default DetailContent;
