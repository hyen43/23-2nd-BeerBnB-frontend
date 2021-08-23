import React from 'react';
import styled from 'styled-components';
import beerImg from './beerImg.jpg';

function Main() {
  return (
    <MainPage>
      <MainLayout>
        <MainDes>
          어디든 상관없이 마시고 싶을 때 비어비앤비가 도와드립니다!
        </MainDes>
        <MainBtn> 마실 곳 검색</MainBtn>
      </MainLayout>
    </MainPage>
  );
}
export default Main;

const MainPage = styled.main`
  height: 100vh;
  background: url(${beerImg});
  background-repeat: no-repeat;
  background-size: cover;
`;

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const MainDes = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

const MainBtn = styled.button`
  padding: 20px 40px;
  background: white;
  border: none;
  border-radius: 32px;
  color: #ff9f1a;
  font-size: 18px;
  font-weight: bold;

  :hover {
    cursor: pointer;
  }
`;
