import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { TOKEN_KEY } from '../../config';
import { flex } from '../../styles/mixin';
import KakaoLogin from './KakaoLogin';

function NavRight() {
  const history = useHistory();
  const [modalOpen, setmodalOpen] = useState(false);

  const openModal = () => {
    setmodalOpen(true);
  };

  const closeModal = () => {
    setmodalOpen(false);
  };

  const logOut = () => {
    localStorage.removeItem(TOKEN_KEY);
    history.push('/');
  };

  const token = localStorage.getItem(TOKEN_KEY);
  const tokenArray = token ? LOGIN : LOGOUT;

  return (
    <NavRightDes>
      <NavRightDesUl>
        {tokenArray.map(logintoken => {
          const { key, content1, content2, url } = logintoken;
          return (
            <>
              <li key={key}>
                <Link to={url}>{content1}</Link>
              </li>
              <li key={key}>
                <Link onClick={openModal}>{content2}</Link>
              </li>
            </>
          );
        })}
      </NavRightDesUl>
      <KakaoLogin
        modalOpen={modalOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
      {token && <button onClick={logOut}>로그아웃</button>}
    </NavRightDes>
  );
}

const LOGIN = [
  { key: 0, content1: '마이페이지', content2: '로그아웃', url: '/Host' },
];

const LOGOUT = [
  { key: 0, content1: '호스트되기', content2: '로그인', url: '/Host' },
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
  }
`;
