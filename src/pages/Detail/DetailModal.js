import React, { useState } from 'react';
import styled from 'styled-components';
import 'react-dates/initialize';
import { DayPickerRangeController, renderCalendarInfo } from 'react-dates';
import moment from 'moment';
import 'moment/locale/ko';
import 'react-dates/lib/css/_datepicker.css';

function DetailModal(props) {
  const {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    checkin,
    checkout,
    modalHandler,
    blockedData,
  } = props;

  const [focusedInput, setFocusedInput] = useState('startDate');

  const handleDateChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const handleConstChange = focusedInput => {
    setFocusedInput(focusedInput || 'startDate');
  };

  // 예약된 날짜 형태 변환
  // const reservedDays = datesList.map(data => moment(data).format('YYYY-MM-DD'));

  const reservedDay = day => {
    let boolean = false;
    boolean =
      blockedData?.some(date => day.format('YYYY-MM-DD') === date) ||
      day.isBefore(moment());
    return boolean;
  };

  return (
    <Wrapper>
      <ModalContainer>
        <CheckButton>
          <div>
            {startDate ? `체크인 : ${checkin}` : '체크인 날짜를 지정해주세요'}
          </div>
          <div>
            {endDate
              ? `체크아웃 : ${checkout}`
              : '체크아웃 날짜를 지정해주세요'}
          </div>
        </CheckButton>
        <Date>
          <DayPickerRangeController
            numberOfMonths={2}
            startDate={startDate}
            endDate={endDate}
            onDatesChange={handleDateChange}
            isDayBlocked={reservedDay}
            focusedInput={focusedInput}
            hideKeyboardShortcutsPanel={true}
            onFocusChange={handleConstChange}
            renderCalendarInfo={renderCalendarInfo}
          />
        </Date>
        <ModalBtn onClick={modalHandler}>X</ModalBtn>
      </ModalContainer>
    </Wrapper>
  );
}

// const datesList = [
//   moment(),
//   moment().add(3, 'days'),
//   moment().add(9, 'days'),
//   moment().add(11, 'days'),
//   moment().add(19, 'days'),
// ];

const Wrapper = styled.div`
  position: absolute;
  width: 661px;
  z-index: 99;
`;
const ModalContainer = styled.div`
  position: relative;
  padding: 24px 21px;
  border: none;
  border-radius: 20px;
  box-shadow: 1px 3px 3px 3px lightgrey;
  background: white;
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
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  border-radius: 5px;
  font-size: 16px;

  &:hover {
    cursor: pointer;
  }
`;

const Date = styled.div`
  .CalendarDay {
    border: none;
    font-size: 14px;
    font-weight: 600;
    line-height: 42px;
  }

  .CalendarDay__default:hover {
    background: transparent;
    border: none;
    color: black;
    border-radius: 50%;
    box-shadow: inset 0 0 0 1px black;
  }

  .CalendarDay__selected_end {
    background: #1c1c1c;
    border-radius: 50%;
  }

  .CalendarDay__selected_start {
    background: #1c1c1c;
    border-radius: 50%;
  }

  .CalendarDay__selected_span {
    color: black;
    background: #f7f7f7;
  }

  .CalendarDay__hovered_span,
  .CalendarDay__hovered_span:hover {
    background: #f7f7f7;
    color: black;
    border-radius: 50%;
  }

  .CalendarDay__blocked_calendar,
  .CalendarDay__blocked_calendar:active,
  .CalendarDay__blocked_calendar:hover {
    background: white;
    border: none;
    color: #d2d2d2;
    box-shadow: none;
    text-decoration: line-through;
  }

  .DayPickerNavigation_button__default {
    padding: 6px;
    border: none;
    background-color: #ffffff;
    color: #757575;
  }

  .DayPickerNavigation_button__default:hover {
    border-radius: 50%;
    background-color: #f7f7f7;
  }
`;

export default DetailModal;
