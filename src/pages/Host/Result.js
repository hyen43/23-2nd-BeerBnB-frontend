import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

function Result({ handleSubmit }) {
  // const history = useHistory();
  return (
    <StepContainer>
      <StepGroup>
        <Headers> 아래 버튼을 누르시면, 등록이 완료됩니다!</Headers>
        <SubmitButton onClick={handleSubmit}>최종 등록하기</SubmitButton>
      </StepGroup>
    </StepContainer>
    //메인으로 이동
  );
}

const StepContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
`;

const StepGroup = styled.div`
  width: 100%;
  margin-left: 400px;
`;

const Headers = styled.div`
  display: block;
  margin-bottom: 50px;
  font-size: 30px;
  text-algin: left;
  font-color: blue;
`;

const SubmitButton = styled.button`
  position: relative;
  left: 190px;
  padding: 14px 24px;
  font-size: 16px;
  color: #ffffff;
  background-color: #222222;
  border: none;
  border-radius: 8px;

  :hover {
    cursor: pointer;
    color: black;
    border: 1px solid black;
    background-color: white;
  }
`;

export default Result;
