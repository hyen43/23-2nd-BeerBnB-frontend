import React, { useState } from 'react';
import { API } from '../../config';
import styled from 'styled-components';

const KakaoLogin = props => {
  const {
    modalOpen,
    closeModal,
    isLoggedIn,
    setIsLoggedIn,
    logoutWithKakao,
    handleLogout,
    handleLogin,
  } = props;

  return (
    <>
      {modalOpen && (
        <LoginWrapper onClick={closeModal}>
          <LoginHeader>
            <ExitBtn onClick={closeModal}>×</ExitBtn>
            <Title>로그인 또는 회원 가입</Title>
          </LoginHeader>
          <LoginBtnWapper>
            <Greeting>
              여행은 살아보고, <br /> 맥주는 마셔보는 거야! <br />
              BeerBnB에 오신 것을 환영합니다.
            </Greeting>
            <KakaoButton
              name="kakao"
              onClick={isLoggedIn ? logoutWithKakao : handleLogin}
              src="/images/kakao_login.png"
              alt={isLoggedIn ? 'logout' : 'login'}
            />
          </LoginBtnWapper>
        </LoginWrapper>
      )}
    </>
  );
};

const LoginWrapper = styled.section`
  padding: 24px;
  width: 500px;
  height: 400px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgb(235, 235, 235);
  border-radius: 20px;
  text-align: center;
  background: white;
`;

const LoginHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid rgb(235, 235, 235);
`;

const ExitBtn = styled.button`
  position: absolute;
  top: 1.3rem;
  left: 1.2rem;
  font-size: 2rem;
  color: #333;
  border: none;
  background: none;
  cursor: poiner;
`;

const Title = styled.h1`
  padding: 0 25px;
  font-size: 18px;
  color: black;
`;

const LoginBtnWapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const Greeting = styled.p`
  margin-bottom: 15px;
  font-size: 18px;
  line-height: 50px;
  color: black;
`;

const KakaoButton = styled.img`
  width: 400px;
  height: 50px;
  margin-bottom: 80px;
`;

export default KakaoLogin;
