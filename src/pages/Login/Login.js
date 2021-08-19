import React, { useState } from 'react';
import styled from 'styled-components';
import KakaoLogin from './KakaoLogin/KakaoLogin';

function Login() {
  const [modalOpen, setmodalOpen] = useState(false);

  const openModal = () => {
    setmodalOpen(true);
  };

  const closeModal = () => {
    setmodalOpen(false);
  };

  return (
    <>
      <Btn onClick={openModal}>테스트 버튼</Btn>
      <KakaoLogin
        modalOpen={modalOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
    </>
  );
}
export default Login;

const Btn = styled.button`
  display: block;
  widht: 50px;
  height: 50px;
`;
