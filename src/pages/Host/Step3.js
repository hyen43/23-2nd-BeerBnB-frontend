import React from 'react';
import { isCompositeComponent } from 'react-dom/test-utils';
import styled from 'styled-components';

function Step3({ countPlus, countMinus, guest, handleData, handleImage }) {
  return (
    <StepContainer>
      <StepGroup>
        <Headers> 최대 게스트 인원을 선택해주세요.</Headers>
        <GuestNumber>
          <CountButton className="minus" onClick={countMinus}>
            -
          </CountButton>
          <p style={{ margin: '10px' }}>{guest}</p>
          <CountButton className="plus" onClick={countPlus}>
            +
          </CountButton>
        </GuestNumber>
        <Headers>1박 숙소 요금을 결정해주세요.</Headers>
        <PriceInput
          type="number"
          placeholder="원"
          name="price"
          onChange={handleData}
        />
        <Headers>멋진 숙소 곳곳의 이미지 파일을 올려주세요. (5장 이상)</Headers>
        <form encType="multipart/form-data">
          <ImageInput
            type="file"
            accept="image/*"
            name="image"
            onChange={handleImage}
            multiple
          />
        </form>
      </StepGroup>
    </StepContainer>
  );
}

export default Step3;

const StepContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
`;

const StepGroup = styled.div`
  margin-left: 20px;
`;

const GuestNumber = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

const Headers = styled.div`
  display: block;
  margin-bottom: 20px;
  font-size: 25px;
  text-algin: left;
  font-color: blue;
`;

const NameInput = styled.input`
  width: 100%;
  border-radius: 12px;
  border: 1px solid gray;
  padding: 10px 15px;
  margin-bottom: 15px;
  font-size: 16px;

  :hover {
    cursor: pointer;
    border: 2px solid black;
    background-color: white;
  }
`;

const DescInput = styled.input`
  width: 100%;
  height: 100px;
  border-radius: 12px;
  border: 1px solid gray;
  padding: 10px 15px;
  margin-bottom: 15px;
  font-size: 16px;

  :hover {
    cursor: pointer;
    border: 2px solid black;
    background-color: white;
  }
`;

const PriceInput = styled.input`
  width: 100%;
  border-radius: 12px;
  border: 1px solid gray;
  padding: 10px 15px;
  margin-bottom: 50px;
  font-size: 16px;

  :hover {
    cursor: pointer;
    border: 2px solid black;
    background-color: white;
  }
`;

const CountButton = styled.button`
  position: relative;
  bottom: 5px;
  width: 32px;
  height: 32px;
  margin-top: 5px;
  border: 1px solid gray;
  border-radius: 50%;
  font-size: 16px;
  background: #ffffff;

  &:hover {
    border: 1px solid black;
    cursor: pointer;
  }
`;

const ImageInput = styled.input`
  width: 100%;
  border-radius: 12px;
  border: 1px solid gray;
  padding: 10px 15px;
  margin-bottom: 15px;
  font-size: 16px;

  :hover {
    cursor: pointer;
    border: 2px solid black;
    background-color: white;
  }
`;

const NextButton = styled.button`
  position: fixed;
  bottom: 100px;
  right: 500px;
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
