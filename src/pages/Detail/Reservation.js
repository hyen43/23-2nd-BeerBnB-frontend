import React from 'react';
import styled from 'styled-components';

function Reservation(props) {
  const {
    modalHandler,
    detailData,
    checkin,
    checkout,
    diffday,
    dateSelect,
    startDate,
    endDate,
    countGuest,
    plusGuest,
    minusGuest,
    reserveData,
  } = props;

  const totalPrice = diffday * countGuest * 30000;

  return (
    <Wrapper>
      <Display>
        <DisplayTitle>
          {diffday > 0 ? `일정은 ${diffday}일 입니다.` : '일정을 지정해주세요'}
        </DisplayTitle>
        <ButtonWrapper>
          <CheckButton>
            <div>
              <p>체크인</p>
              <ReserveBtn onClick={modalHandler}>
                {startDate ? checkin : '날짜 추가'}
              </ReserveBtn>
            </div>
            <div>
              <p>체크아웃</p>
              <ReserveBtn onClick={modalHandler}>
                {endDate ? checkout : '날짜 추가'}
              </ReserveBtn>
            </div>
          </CheckButton>
          <GuestHow>
            <div>게스트 {countGuest}명</div>
            <div>
              <ReserveBtn onClick={plusGuest}>+</ReserveBtn>
              <ReserveBtn onClick={minusGuest}>-</ReserveBtn>
            </div>
          </GuestHow>
        </ButtonWrapper>
        <ReservationBtn onClick={reserveData}>
          {dateSelect ? '예약하기' : '예약 가능 여부 보기'}
        </ReservationBtn>
        {dateSelect && (
          <TotalPriceBox>
            <div>
              ({countGuest} 명 * {detailData.price}원 * {diffday}일)
            </div>
            <div> ₩ {Number(totalPrice).toLocaleString()} </div>
          </TotalPriceBox>
        )}
      </Display>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  margin-left: 10%;
  width: 30%;
`;

const Display = styled.div`
  position: sticky;
  top: 10px;
  padding: 24px;
  border: 1px solid lightgrey;
  border-radius: 20px;
  box-shadow: 1px 3px 3px 3px lightgrey;
`;

const DisplayTitle = styled.h3`
  text-align: center;
  font-weight: bold;
`;

const ButtonWrapper = styled.div`
  margin: 15px 0;
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
  margin-left: 5px;
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

const TotalPriceBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ReservationBtn = styled.button`
  margin-bottom: 15px;
  padding: 14px 24px;
  width: 100%;
  border: none;
  border-radius: 5px;
  background-color: #ff9f1a;
  color: white;
  font-size: 16px;

  &:hover {
    cursor: pointer;
  }
`;
export default Reservation;
