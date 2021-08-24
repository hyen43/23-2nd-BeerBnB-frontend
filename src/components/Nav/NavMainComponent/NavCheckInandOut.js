import React, { useState } from 'react';
import styled from 'styled-components';
import 'react-dates/initialize';
import { DayPickerRangeController, renderCalendarInfo } from 'react-dates';
import moment from 'moment';
import 'moment/locale/ko';
import 'react-dates/lib/css/_datepicker.css';

export default function Calendar(props) {
  const { startDate, setStartDate, endDate, setEndDate } = props;
  const [focusedInput, setFocusedInput] = useState('startDate');
  const handleDateChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };
  const handleConstChange = focusedInput => {
    setFocusedInput(focusedInput || 'startDate');
  };
  const reservedDay = day => {
    let boolean = false;
    boolean = day.isBefore(moment());
    return boolean;
  };
  return (
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
  );
}
const Date = styled.div`
  position: absolute;
  left: 30%;

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
