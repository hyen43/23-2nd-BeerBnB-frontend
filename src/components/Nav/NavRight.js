import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { TOKEN_KEY } from '../../config.js';
import { flex } from '../../styles/mixin';

function NavRight() {
  const history = useHistory();

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
          const { key, content, url } = logintoken;
          return (
            <li key={key}>
              <Link to={url}>{content}</Link>
            </li>
          );
        })}
      </NavRightDesUl>
      {token && <button onClick={logOut}>로그아웃</button>}
    </NavRightDes>
  );
}

const LOGIN = [
  { key: 0, content: '호스트되기', url: '/Host' },
  { key: 1, content: '로그아웃', url: '/' },
];

const LOGOUT = [
  { key: 0, content: '호스트되기', url: '/Host' },
  { key: 1, content: '로그인', url: '/Login' },
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
