import React from 'react';
import styled, { css } from 'styled-components';
import { useHistory } from 'react-router-dom';
import { flex } from '../../styles/mixin';
import { BASE_URL } from '../../config';

const SearchBottom = props => {
  const history = useHistory();

  const {
    guestNumber,
    setGuestNumber,
    handleChange,
    userInput,
    bottomClick,
    setBottomClick,
    bottomOnClick,
    startDate,
    endDate,
    checkin,
    checkout,
  } = props;

  const changeBottomClick = name => {
    if (bottomClick.location === true) {
      setBottomClick({
        ...bottomClick,
        [name]: !bottomClick.checkInandOut,
        [name]: !bottomClick.location,
      });
    }
  };

  console.log(bottomClick.location);

  const goToList = () => {
    history.push(
      `/list?address=${userInput}&checkin=${checkin}&checkout=${checkout}&count=${guestNumber}`
    );
  };

  return (
    <Searchbottom>
      <LocationDesTop>
        <span className="searchWord location">위치</span>
        <input
          type="text"
          className="guestInput"
          placeholder="어디로 여행가세요?"
          value={userInput}
          onChange={handleChange}
          onClick={() => bottomOnClick('location')}
          // onKeyPress={handleKeyPress}
        />
      </LocationDesTop>
      <CheckDate>
        <Checkin onClick={() => bottomOnClick('checkInandOut')}>
          <span className="searchWord checkInWord">체크인</span>
          <input
            placeholder="날짜입력"
            className="DateInput"
            value={startDate ? checkin : '날짜입력'}
          />
        </Checkin>
        <Checkout onClick={() => changeBottomClick()}>
          <span className="searchWord checkOutWord">체크아웃</span>
          <input
            placeholder="날짜입력"
            className="DateInput"
            value={endDate ? checkout : '날짜입력'}
          />
        </Checkout>
      </CheckDate>
      <GuestAndSearch>
        <Guest>
          <span className="searchWord guestWord">인원</span>
          <GuestButton>
            <button
              className="guestMinus"
              onClick={() => {
                setGuestNumber(guestNumber > 1 ? guestNumber - 1 : 0);
              }}
            >
              -
            </button>
            <span>{guestNumber}</span>

            <button
              className="guestPlus"
              onClick={() => {
                setGuestNumber(guestNumber + 1);
              }}
            >
              +
            </button>
          </GuestButton>
        </Guest>
        <Search
          onClick={() => {
            goToList();
          }}
        >
          <div className="search">
            <i className="fas fa-search" />
            <span>검색</span>
          </div>
        </Search>
      </GuestAndSearch>
    </Searchbottom>
  );
};

export default SearchBottom;

const searchCss = css`
  display: flex;
  flex-direction: column;
  padding: 14px 32px;
  border-radius: 32px;

  :hover {
    cursor: pointer;
    background: white;
  }
`;

const before = css`
  position: relative;

  ::before {
    content: '|';
    position: absolute;
    left: 0px;
    bottom: 25px;
  }
`;

const Searchbottom = styled.div`
  position: relative;
  display: flex;
  margin-top: 20px;
  background: #f7f7f7;
  border: 1px solid #d8d8d8;
  border-radius: 32px;

  .searchWord {
    padding-bottom: 5px;
    font-size: 11px;
    font-weight: bold;
  }
`;

const LocationDesTop = styled.div`
  ${searchCss}

  .guestInput {
    border: none;
    background: none;

    :focus {
      outline: none;
    }
  }
`;

const CheckDate = styled.div`
  display: flex;
  border-radius: 32px;

  .DateInput {
    background: none;
    border: none;
    outline: none;
    font-size: 13px;
    color: grey;
  }
`;

const Checkin = styled.div`
  ${before}
  ${searchCss}
`;

const Checkout = styled.div`
  ${before}
  ${searchCss}
`;

const GuestAndSearch = styled.div`
  ${flex('')}
  ${before}
  border-radius: 32px;
  background: none;
`;

const Guest = styled.div`
  ${searchCss}
`;

const GuestButton = styled.div`
  display: flex;

  button {
    border: 1px solid #d8d8d8;
    border-radius: 30px;
    background: none;

    :hover {
      cursor: pointer;
    }
  }

  span {
    flex: 1;
    width: 30px;
    padding-top: 2px;
    text-align: center;
    font-size: 12px;
    color: grey;
  }
`;

const Search = styled.div`
  border: none;
  background: none;
  padding-right: 10px;

  .search {
    padding: 10px;
    border-radius: 30px;
    background: #ff9f1a;
    color: white;

    span {
      padding-left: 10px;
    }
  }

  :hover {
    cursor: pointer;
  }
`;
