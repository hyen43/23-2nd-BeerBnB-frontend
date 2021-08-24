import React from 'react';
import styled from 'styled-components';

function NavSearchBar(props) {
  const { inputOpen, setInputOpen } = props;
  return (
    <NavSearchSection>
      <NavSearch>
        <NavSerchBtn onClick={() => setInputOpen(!inputOpen)}>
          <p className="btnStart">검색 시작하기</p>
          <div className="searchButton">
            <i className="fas fa-search" />
          </div>
        </NavSerchBtn>
      </NavSearch>
    </NavSearchSection>
  );
}
export default NavSearchBar;

const NavSearchSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  background: #ffffff;
`;

const NavSearch = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavSerchBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 48px;
  background: white;
  box-shadow: 5px 5px 5px #f4f4f4;
  border: 1px solid #b5b5b5;
  border-radius: 32px;

  .btnStart {
    padding: 0 16px;
    font-weight: bold;
  }

  .searchButton {
    padding: 10px;
    border-radius: 30px;
    background: #ff9f1a;
    color: white;
  }

  :hover {
    cursor: pointer;
  }
`;
