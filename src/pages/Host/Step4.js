import React, { useState, useEffect } from 'react';
import DaumPostcode from 'react-daum-postcode';
import axios from 'axios';
import styled from 'styled-components';

const LatLng = ({
  address,
  addrData,
  setAddrData,
  handleComplete,
  handleData,
}) => {
  const searchLatLng = () => {
    axios
      .get(
        `https://dapi.kakao.com/v2/local/search/address.json?query=${address}`,
        {
          headers: {
            Authorization: 'KakaoAK b6c37accdb744f4b40e4b72d33a975c4',
          },
        }
      )
      .then(res => {
        setAddrData(res.data.documents[0]);
        alert('주소가 등록되었습니다.');
      });
  };

  return (
    <StepContainer>
      <Headers>숙소 주소를 등록해주세요.</Headers>
      <DaumPostcode
        onComplete={handleComplete}
        autoClose={true}
        autoResize={true}
      />
      <AddressButton onClick={searchLatLng} onChange={handleData}>
        주소 등록하기
      </AddressButton>
    </StepContainer>
  );
};

const StepContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
`;

const Headers = styled.div`
  margin-bottom: 20px;
  font-size: 25px;
`;

const AddressButton = styled.button`
  position: absolute;
  bottom: 50px;
  right: 120px;
  padding: 14px 24px;
  font-size: 16px;
  color: #ffffff;
  background-color: #222222;
  border: none;
  border-radius: 8px;

  :hover {
    cursor: pointer;
    color: black;
    border: 1px solid black;
    background-color: white;
  }
`;

export default LatLng;
