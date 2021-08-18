import React from 'react';
import styled from 'styled-components';

function Reservation({ modalHandler }) {
  return (
    <Wrapper>
      <Display>
        <div>요금을 확인하려면 날짜를 입력하세요.</div>
        <ButtonWrapper>
          <CheckButton>
            <div>
              <p>체크인</p>
              <ReserveBtn onClick={modalHandler}>날짜 추가</ReserveBtn>
            </div>
            <div>
              <p>체크아웃</p>
              <ReserveBtn onClick={modalHandler}>날짜 추가</ReserveBtn>
            </div>
          </CheckButton>
          <GuestHow>
            <div>게스트 n명</div>
            <div>
              <ReserveBtn>+</ReserveBtn>
              <ReserveBtn>-</ReserveBtn>
            </div>
          </GuestHow>
        </ButtonWrapper>
        <ReservationBtn>예약하기</ReservationBtn>
      </Display>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  margin-left: 10%;
  width: 30%;
  height: 2000px;
`;

const Display = styled.div`
  position: sticky;
  top: 10px;
  padding: 24px;
  border: 1px solid lightgrey;
  border-radius: 20px;
  box-shadow: 1px 3px 3px 3px lightgrey;
`;

const ButtonWrapper = styled.div`
  margin-top: 24px;
  margin-bottom: 16px;
  border-radius: 8px;
  border: 1px solid lightgrey;
  font-size: 12px;
`;

const CheckButton = styled.div`
  display: flex;
  text-align: center;

  div {
    padding: 20px 12px;
    width: 50%;
    border-bottom: 1px solid lightgrey;
  }
`;

const ReserveBtn = styled.button`
  margin-top: 5px;
  border: none;
  border-radius: 5px;
  font-size: 16px;

  &:hover {
    cursor: pointer;
  }
`;

const GuestHow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 12px;

  div {
    font-size: 16px;
  }
`;

const ReservationBtn = styled.button`
  padding: 14px 24px;
  width: 100%;
  border: none;
  border-radius: 5px;
  background-color: #ff385c;
  color: white;
  font-size: 16px;

  &:hover {
    cursor: pointer;
  }
`;
export default Reservation;
