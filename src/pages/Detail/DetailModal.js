import React from 'react';
import styled from 'styled-components';

function DetailModal(props) {
  const { modalHandler } = props;
  return (
    <Wrapper>
      <ModalContainer>
        날짜 선택
        <CheckButton>
          <div>
            <p>체크인</p>
            <ModalBtn>날짜 추가</ModalBtn>
          </div>
          <div>
            <p>체크아웃</p>
            <ModalBtn>날짜 추가</ModalBtn>
          </div>
        </CheckButton>
        <ModalBtn onClick={modalHandler}>X</ModalBtn>
      </ModalContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  width: 661px;
  z-index: 99;
`;
const ModalContainer = styled.div`
  padding: 24px 32px 16px;
  border: none;
  border-radius: 20px;
  box-shadow: 1px 3px 3px 3px lightgrey;
  background: yellow;
`;

const CheckButton = styled.div`
  display: flex;
  text-align: center;

  div {
    padding: 20px 12px;
    width: 50%;
  }
`;

const ModalBtn = styled.button`
  margin-top: 5px;
  border: none;
  border-radius: 5px;
  font-size: 16px;

  &:hover {
    cursor: pointer;
  }
`;

export default DetailModal;
