import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Map from './Aside/Map';
import ImgLists from './Aside/ImgLists';

function List() {
  const [fetchData, setFetchData] = useState([]);
  const [ListFetchData, setListFetchData] = useState([]);

  useEffect(() => {
    const ListFetchData = async () => {
      const response = await fetch('data/List/mapMockData.json');
      // `http://10.58.3.65:8000/${BASE_URL}/products?address=${userInput}&checkin=${checkin}&checkout=${checkout}&count=${guestNumber}`
      const data = await response.json();
      setListFetchData(data.message);
    };
    ListFetchData();
  }, []);
  console.log(ListFetchData);

  return (
    <StListWrapping>
      <StWholeWrap>
        <header>
          <StFilterResults>
            300개 이상의 숙소 · 비어비엔비에서의 색다른 경험
          </StFilterResults>
          <StHeaderText>지도에서 선택한 지역의 숙소</StHeaderText>
        </header>
        <main>
          <StNoti>
            예약하기 전에 코로나19 관련 여행 제한 사항을 확인하세요.
          </StNoti>
          <StNotiDetail> 자세히 알아보기 </StNotiDetail>
          <StListsWrap>
            <StImgListsWrap>
              <ImgLists fetchData={ListFetchData} />
            </StImgListsWrap>
            <Map fetchData={ListFetchData} />
          </StListsWrap>
        </main>
      </StWholeWrap>
    </StListWrapping>
  );
}
export default List;

const StListWrapping = styled.div`
  background-color: #f8f8f8;
`;

const StWholeWrap = styled.div`
  max-width: 2000px;
  height: 100vh;
  margin: 0 auto;
  padding-top: 90px;
  padding-bottom: 30px;
  background-color: #f8f8f8;
`;

const StFilterResults = styled.div`
  padding: 20px 80px 10px 30px;
  color: #222222;
  font-size: 14px;
`;

const StHeaderText = styled.h1`
  padding: 20px 80px 20px 30px;
  font-size: 20px;
  line-height: 36px;
  font-weight: 600;
`;

const StNoti = styled.span`
  padding-left: 30px;
  font-size: 15px;
`;
const StNotiDetail = styled.span`
  padding-left: 5px;
  font-size: 15px;
  text-decoration: underline;
  cursor: pointer;
`;

const StListsWrap = styled.div`
  display: flex;
`;

const StImgListsWrap = styled.div`
  /* padding-right: 40px; */
  display: flex;
  flex-direction: column;
  width: 40%;
`;
