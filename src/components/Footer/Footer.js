import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LinkLi from './LinkLi';
import { flex } from '../../styles/mixin';

function Footer() {
  return (
    <FooterMain>
      <FooterDescription>
        <FooterLeft>
          <p>© 2021 Beerbnb, Inc</p>
          <LeftLinks>
            <Link to="/">· 개인정보 처리방침</Link>
            <Link to="/">· 이용약관</Link>
            <Link to="/">· 사이트맵</Link>
            <Link to="/">· 한국의 환불 정책</Link>
            <Link to="/">· 회사 세부정보</Link>
          </LeftLinks>
        </FooterLeft>
        <FooterRight>
          <ChangeSection>
            <button>
              <span>
                <i className="fas fa-globe"></i>
              </span>
              <span> 한국어(KR)</span>
            </button>
            <button>
              <span>
                <i className="fas fa-won-sign"></i>
              </span>
              <span> KRW</span>
            </button>
          </ChangeSection>
          <LinkLi />
        </FooterRight>
      </FooterDescription>
    </FooterMain>
  );
}
export default Footer;

const FooterMain = styled.footer`
  width: 100%;
  height: 60px;
  background: #f7f7f7;
  font-size: 12px;
`;

const FooterDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin: 0 177px;
  padding: 0 80px;
`;

const FooterLeft = styled.div`
  display: inline-flex;
`;

const LeftLinks = styled.div`
  margin-left: 10px;
  color: black;
`;

const FooterRight = styled.div`
  ${flex('space-between')}
`;

const ChangeSection = styled.div`
  display: flex;
  flex-direction: flex-start;
  margin-right: 30px;

  button {
    font-size: 12px;
    border: none;
    margin: 0;
    background: none;
  }
`;
