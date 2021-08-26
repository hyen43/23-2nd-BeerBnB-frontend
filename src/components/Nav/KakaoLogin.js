import React, { useState } from 'react';
import { API } from '../../config';
import styled from 'styled-components';

const KakaoLogin = props => {
  const { modalOpen, closeModal } = props;
  const { Kakao } = window;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    Kakao.API.request({
      url: '/v1/user/unlink',
      success: function (response) {
        console.log(response);
        setIsLoggedIn(false);
      },
      fail: function (error) {
        console.log(error);
      },
    });
    Kakao.Auth.setAccessToken(undefined);
  };

  const handleLogin = () => {
    Kakao.Auth.login({
      scope: 'profile_nickname, profile_image, birthday',
      success: function (response) {
        fetch(`${API.LOGIN}`, {
          method: 'GET',
          headers: {
            Authorization: response.access_token,
          },
        })
          .then(res => res.json())
          .then(res => {
            if (res) {
              localStorage.setItem('token', res.token);
              setIsLoggedIn(true);
              console.log(res);
            }
          });
      },
      fail: function (error) {
        alert('아이디와 비밀번호를 확인해주세요:)');
      },
    });
  };

  return (
    <>
      {modalOpen && (
        <LoginWrapper onClick={closeModal}>
          <LoginHeader>
            <ExitBtn onClick={closeModal}>×</ExitBtn>
            <Title>로그인 또는 회원 가입</Title>
          </LoginHeader>
          <Greeting>
            여행은 살아보고, <br /> 맥주는 마셔보는 거야! <br />
            BeerBnB에 오신 것을 환영합니다.
          </Greeting>
          <KakaoButton
            name="kakao"
            onClick={isLoggedIn ? handleLogout : handleLogin}
            src="/images/kakao_login.png"
            alt={isLoggedIn ? 'logout' : 'login'}
          />
        </LoginWrapper>
      )}
    </>
  );
};

const LoginWrapper = styled.section`
  padding: 24px;
  width: 300px;
  height: 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgb(235, 235, 235);
  border-radius: 20px;
  text-align: center;
  background-color: #e61e4d;
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
  padding: 0 24px;
  font-size: 16px;
  color: white;
`;

const Greeting = styled.p`
  display: block;
  margin-bottom: 15px;
  text-align: left;
  font-size: 20px;
  color: white;
`;

const KakaoButton = styled.img`
  width: 100%;
`;

export default KakaoLogin;
