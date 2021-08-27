import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { TOKEN_KEY } from '../../config';
import { flex } from '../../styles/mixin';
import { API } from '../../config';
import KakaoLogin from './KakaoLogin';

function NavRight({ IsNavOpen }) {
  const history = useHistory();
  const [modalOpen, setmodalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { Kakao } = window;

  const openModal = () => {
    setmodalOpen(true);
  };

  const closeModal = () => {
    setmodalOpen(false);
  };

  const handleLogout = () => {
    Kakao.isInitialized();
    Kakao.Auth.logout(() => {
      localStorage.removeItem(TOKEN_KEY);
      setIsLoggedIn(!isLoggedIn);
    });
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
              console.log(Kakao.Auth.getAccessToken());
            }
          });
      },
      fail: function (error) {
        alert('아이디와 비밀번호를 확인해주세요:)');
      },
    });
  };

  const token = localStorage.getItem(TOKEN_KEY);
  console.log(token);
  const tokenArray = token ? LOGIN : LOGOUT;
  console.log(tokenArray);

  console.log(isLoggedIn);

  return (
    <NavRightDes>
      {tokenArray.map(logintoken => {
        const { key, content, content1, content2, url } = logintoken;
        return (
          <NavRightDesUl key={key}>
            <li>
              {token ? (
                <NavLogin>
                  <Link className="Host" to="/Host" onClick={IsNavOpen}>
                    {content}
                  </Link>
                  <Link to="/mypage">{content1}</Link>
                </NavLogin>
              ) : (
                <Link to={url} onClick={IsNavOpen}>
                  {content1}
                </Link>
              )}
            </li>
            <li>
              {token ? (
                <Link to="/" onClick={handleLogout}>
                  {content2}
                </Link>
              ) : (
                <Link to="/" onClick={openModal}>
                  {content2}
                </Link>
              )}
            </li>
          </NavRightDesUl>
        );
      })}
      <KakaoLogin
        modalOpen={modalOpen}
        openModal={openModal}
        closeModal={closeModal}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        handleLogout={handleLogout}
        handleLogin={handleLogin}
      />
    </NavRightDes>
  );
}

const LOGIN = [
  {
    key: 0,
    content: '호스트되기',
    content1: '마이페이지',
    content2: '로그아웃',
    url: '/mypage',
  },
];

const LOGOUT = [
  { key: 1, content1: '호스트되기', content2: '로그인', url: '/Host' },
];

export default NavRight;

const NavRightDes = styled.div`
  ${flex}
`;

const NavRightDesUl = styled.ul`
  ${flex('')}

  li {
    padding: 12px;
    font-size: 14px;

    a {
      text-decoration: none;
      font-weight: bold;
      color: black;
    }

    button {
      background: none;
      border: none;
      font-weight: bold;
    }
  }
`;

const NavLogin = styled.div`
  .Host {
    padding-right: 14px;
  }
`;
