import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import { withRouter } from 'react-router';
import Paging from './Paging';

function ImgLists({ fetchData }) {
  const [page, setPage] = useState(1);
  const handlePageChange = page => {
    setPage(page);
  };

  return (
    <>
      {fetchData.map((fetchData, idx) => {
        return (
          <StImgList key={idx}>
            <StListWrap>
              <div className="barImg">
                <ImgSlider fetchData={fetchData} />
              </div>
              <StBarShortInfo>
                <StTitleSpace>
                  <div className="title">{fetchData.name}</div>
                  <img
                    className="heart"
                    src="./images/heart.png"
                    alt="like it"
                  />
                </StTitleSpace>
                <StGuestsNBeds>
                  최대 인원 {fetchData.count}명 주방 • 무선인터넷 • 무료
                  주차공간
                </StGuestsNBeds>
                <StPrice>
                  <span className="price">
                    {fetchData.price.toLocaleString()}원
                  </span>
                  <span className="perADay"> /박 </span>
                </StPrice>
              </StBarShortInfo>
            </StListWrap>
          </StImgList>
        );
      })}
      <Paging />
    </>
  );
}

export default withRouter(ImgLists);

const StImgList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 6px 15px;
`;

const StListWrap = styled.div`
  display: flex;
  padding-top: 15px;
  border-bottom: solid 2px #ebebeb;
`;

const StBarShortInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px;
`;

const StTitleSpace = styled.div`
  display: flex;
  justify-content: space-between;

  & > .heart {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  & > .title {
    padding-bottom: 23px;
    color: #222222;
    font-size: 18px;
    line-height: 24px;
  }
`;

const StGuestsNBeds = styled.div`
  color: #717171;
  font-weight: 400;
  min-height: 18px;
  font-size: 15px;
  line-height: 18px;
`;

const StPrice = styled.div`
  padding-left: 300px;
  padding-top: 100px;

  & > .price {
    font-weight: 800;
    font-size: 16px;
    color: #222222;
  }
  & > .perADay {
    font-size: 16px;
    color: #222222;
  }
`;
