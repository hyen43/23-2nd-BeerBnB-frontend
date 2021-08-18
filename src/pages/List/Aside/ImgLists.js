import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';

function ImgLists({ fetchData }) {
  return (
    <StImgList>
      <StListWrap>
        <div className="barImg">
          <ImgSlider fetchData={fetchData} />
        </div>
        <StBarShortInfo>
          <StTitleSpace>
            <div className="title">{fetchData.name}</div>
            <img className="heart" src="./images/heart.png" alt="like it" />
          </StTitleSpace>
          <StGuestsNBeds>
            최대 인원{fetchData.people}명 , 침대 {fetchData.beds}개
          </StGuestsNBeds>
          <StPrice>
            <span className="price">{fetchData.price.toLocaleString()}원</span>
            <span className="perADay"> /박 </span>
          </StPrice>
        </StBarShortInfo>
      </StListWrap>
    </StImgList>
  );
}

export default ImgLists;

const StImgList = styled.div`
  margin: 0;
  padding: 10px 24px;
`;

const StListWrap = styled.div`
  display: flex;
  padding-top: 20px;
  width: 996px;
  height: 260px;
  border-bottom: solid 2px #ebebeb;
  border-top: solid 2px #ebebeb;
`;

const StBarShortInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
`;

const StTitleSpace = styled.div`
  display: flex;
  justify-content: space-between;

  & > .heart {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  & > .title {
    padding-bottom: 23px;
    color: #222222;
    font-size: 25px;
    line-height: 24px;
  }
`;

const StGuestsNBeds = styled.div`
  color: #717171;
  font-weight: 400;
  min-height: 18px;
  font-size: 19px;
  line-height: 18px;
`;

const StPrice = styled.div`
  padding-left: 300px;
  padding-top: 120px;

  & > .price {
    font-weight: 800;
    font-size: 28px;
    color: #222222;
  }
  & > .perADay {
    font-size: 28px;
    color: #222222;
  }
`;
