import React from 'react';
import styled from 'styled-components';

function Step2({ handleData }) {
  return (
    <StepContainer>
      <StepGroup>
        <Headers>멋진 숙소 이름을 지어주세요.</Headers>
        <NameInput
          type="text"
          placeholder="치맥하기 좋은 도시의 쉼터"
          name="house_name"
          onChange={handleData}
        />
        <Headers> 특징이 잘 드러나도록 숙소를 설명해주세요.</Headers>
        <DescInput
          type="textarea"
          placeholder="여행을 끝마치고 숙소에 돌아와 김이 모락모락 나는 치킨에
          맥주 한 잔 어떠신가요? 호수가 보이는 창밖을 내다보며 집안에서 편안하게 야경을 즐길 수 있어요."
          name="description"
          onChange={handleData}
        />
      </StepGroup>
    </StepContainer>
  );
}

export default Step2;

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

const GuestNumber = styled.div``;
const Headers = styled.div`
  display: block;
  margin-bottom: 30px;
  font-size: 25px;
  text-algin: left;
  font-color: blue;
`;

const NameInput = styled.input`
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

const DescInput = styled.textarea`
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
  margin-bottom: 15px;
  font-size: 16px;

  :hover {
    cursor: pointer;
    border: 2px solid black;
    background-color: white;
  }
`;

const CountButton = styled.button`
  margin-top: 5px;
  border: 1px solid gray;
  border-radius: 50%;
  font-size: 16px;

  &:hover {
    cursor: pointer;
  }
`;

const ImageInput = styled.div`
  width: 100%;
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
