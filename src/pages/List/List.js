import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import GoogleMapLocation from './Aside/GoogleMapLocation';
import Map from './Aside/Map';
import ImgLists from './Aside/ImgLists';
import axios from 'axios';

function List() {
  const [fetchData, setFetchData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'http://localhost:3000/data/List/mapMockData.json'
      );
      const data = await response.json();
      setFetchData(data.results);
      // 위에 results가 배열인데 []필요없나요?
    };
    fetchData();
  }, []);

  return (
    <StWholeWrap>
      {fetchData.length &&
        fetchData.map((fetchData, index) => {
          return (
            <>
              <header classNmae="pageHeader" key={index}>
                <StFilterResults>
                  300개 이상의 숙소 · 9월 6일 - 9월 23일 · 게스트 2명
                </StFilterResults>
                <StHeaderText>지도에서 선택한 지역의 숙소</StHeaderText>
              </header>
              <main>
                <StNoti>
                  예약하기 전에 코로나19 관련 여행 제한 사항을 확인하세요.
                </StNoti>
                <StNotiDetail> 자세히 알아보기 </StNotiDetail>
                <StListsWrap>
                  <ImgLists fetchData={fetchData} />
                  <div className="map">
                    <Map />
                  </div>
                </StListsWrap>
              </main>
            </>
          );
        })}
    </StWholeWrap>
  );
}
export default List;

const StWholeWrap = styled.div`
  margin: 0 auto;
  padding-top: 20px;
  background-color: #f8f8f8;
`;

const StFilterResults = styled.div`
  padding: 20px 80px 10px 30px;
  color: #222222;
  font-size: 20px;
`;

const StHeaderText = styled.h1`
  padding: 20px 80px 20px 30px;
  font-size: 40px;
  line-height: 36px;
  font-weight: 600;
`;

const StNoti = styled.span`
  padding-left: 30px;
  font-size: 20px;
`;
const StNotiDetail = styled.span`
  padding-left: 5px;
  font-size: 20px;
  text-decoration: underline;
  cursor: pointer;
`;

const StListsWrap = styled.div`
  display: flex;
`;
