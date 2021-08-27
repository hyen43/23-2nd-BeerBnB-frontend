import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

function Step1({ handleData }) {
  return (
    <StepContainer>
      <StepGroup>
        <Headers>나의 숙소와 잘 어울리는 술을 골라주세요.</Headers>
        <Option
          value="맥주"
          name="userSelect"
          onChange={handleData}
          onClick={handleData}
        >
          시원한 맥주(Beer)
        </Option>
        <Option
          value="소주"
          name="userSelect"
          onChange={handleData}
          onClick={handleData}
        >
          맑고 깔끔한 소주(Soju)
        </Option>
        <Option value="막걸리" name="userSelect" onChange={handleData}>
          고소하고 진한 막걸리(Makgeolli)
        </Option>
        <Option value="데킬라" name="userSelect" onChange={handleData}>
          정렬적인 데킬라(Tequila)
        </Option>
        <Option value="칵테일" name="userSelect" onChange={handleData}>
          로맨틱한 칵테일(Cocktail)
        </Option>
      </StepGroup>
    </StepContainer>
  );
}

const StepContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin-left: 20px;
  background-color: #ffffff;
`;

const StepGroup = styled.div`
  margin-left: 20px;
`;

const Headers = styled.h1`
  font-size: 25px;
  font-color: blue;
  margin-bottom: 30px;
`;

const Option = styled.button`
  display: block;
  width: 100%;
  border-radius: 12px;
  border: none;
  padding: 20px 15px;
  margin-bottom: 15px;
  font-size: 16px;

  :hover {
    cursor: pointer;
    border: 2px solid black;
    background-color: white;
  }
`;

export default Step1;
