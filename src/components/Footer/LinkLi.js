import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { flex } from '../../styles/mixin';

function LinkLi() {
  return (
    <Linklis>
      <li className="link">
        <Link to="/">
          <i className="fab fa-facebook-f"></i>
        </Link>
      </li>
      <li className="link">
        <Link to="/">
          <i className="fab fa-twitter"></i>
        </Link>
      </li>
      <li className="link">
        <Link to="/">
          <i className="fab fa-instagram"></i>
        </Link>
      </li>
      <li className="link">
        <Link to="/">
          <i className="fab fa-github"></i>
        </Link>
      </li>
    </Linklis>
  );
}

export default LinkLi;

const Linklis = styled.ul`
  ${flex('center', 'center')}

  .link {
    margin: 0 12px;
    font-size: 14px;
    color: black;
  }
`;
