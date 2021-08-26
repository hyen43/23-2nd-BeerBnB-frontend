import React, { useState } from 'react';
import styled from 'styled-components';

function CopyModal(props) {
  const pageUrl = window.location.href;

  const [copySuccess, setCopySuccess] = useState('');

  const copyToClipBoard = async copyMe => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess(alert('링크가 복사되었습니다!'));
    } catch (err) {
      setCopySuccess(alert('실패했습니다!'));
    }
  };
  return (
    <Wrapper>
      <Content>
        <CloseBtn onClick={props.copymodalHandler}>X</CloseBtn>
        <UrlBox>{pageUrl}</UrlBox>
        <ShareBtn onClick={() => copyToClipBoard(pageUrl)}>공유하기</ShareBtn>
        {copySuccess}
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 101;
`;

const Content = styled.div`
  position: relative;
  padding: 30px;
  text-align: center;
  border-radius: 20px;
  border: none;
  background-color: white;
  color: black;
  font-size: 22px;
  line-height: 1.5em;
  letter-spacing: -0.04em;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  border: none;
  border-radius: 15px;
  background-color: lightgrey;
  font-size: 15px;
  line-height: 1.2em;

  &:hover {
    cursor: pointer;
  }
`;

const UrlBox = styled.textarea`
  display: block;
  margin-top: 10px;
  padding: 10px 5px;
  width: 400px;
  height: 15px;
  resize: none;
  overflow: hidden;
  font-size: 15px;
`;

const ShareBtn = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #ff9f1a;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;

export default CopyModal;
