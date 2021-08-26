import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';
import 'moment/locale/ko';
import NavSearchBar from './NavSearchBar';
import NavRight from './NavRight';
import SearchBottom from './SearchBottom';
import NavLocation from './NavMainComponent/NavLocation';
import NavCheckInandOut from './NavMainComponent/NavCheckInandOut';
import { flex } from '../../styles/mixin';
import { BASE_URL } from '../../config';

function Nav() {
  const [inputOpen, setInputOpen] = useState(false);
  const [guestNumber, setGuestNumber] = useState(0);
  const [locationData, setLocationData] = useState([]);
  const [userInput, setuserInput] = useState('');
  const [bottomClick, setBottomClick] = useState({
    location: false,
    checkInandOut: false,
  });
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const checkin = moment(startDate).format('YYYY-MM-DD');
  const checkout = moment(endDate).format('YYYY-MM-DD');

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    axios
      .get(`${BASE_URL}/address`)
      .then(response => setLocationData(response.data.message));
  };

  const handleChange = e => {
    const { value } = e.target;
    setuserInput(value);
  };

  console.log(locationData);
  console.log(userInput);

  const fliterLocation = locationData.filter(location => {
    return location.includes(userInput);
  });

  const bottomOnClick = name => {
    setBottomClick({
      ...bottomClick,
      [name]: !bottomClick[name],
    });
  };

  const InputText = text => {
    setuserInput(text);
  };

  return (
    <>
      <NavWapper>
        <NavContainer>
          <NavTop>
            <NavLogo>
              <Link to="/">
                <Icon>
                  <i className="fas fa-beer" />
                </Icon>
              </Link>
              <Link to="/">
                <NavTitle>
                  <h2>Beerbnb</h2>
                </NavTitle>
              </Link>
            </NavLogo>
            <NavMainSection>
              <NavSearchBar inputOpen={inputOpen} setInputOpen={setInputOpen} />
            </NavMainSection>
            <NavRightSection>
              <NavRight />
            </NavRightSection>
          </NavTop>
          <SearchBottomSection>
            {inputOpen && (
              <SearchBottom
                guestNumber={guestNumber}
                setGuestNumber={setGuestNumber}
                userInput={userInput}
                handleChange={handleChange}
                bottomClick={bottomClick}
                bottomOnClick={bottomOnClick}
                startDate={startDate}
                endDate={endDate}
                checkin={checkin}
                checkout={checkout}
                // handleKeyPress={handleKeyPress}
              />
            )}
          </SearchBottomSection>
        </NavContainer>
        {bottomClick.location && (
          <NavLocation
            InputText={InputText}
            fliterLocation={fliterLocation}
            userInput={userInput}
          />
        )}
        {bottomClick.checkInandOut && (
          <NavCheckInandOut
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
        )}
      </NavWapper>
    </>
  );
}
export default Nav;

const NavWapper = styled.nav`
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  box-shadow: rgb(0 0 0 / 8%) 0px 1px 12px;
`;

const NavContainer = styled.div`
  padding: 15px 257px;
  background: #ffffff;
  box-shadow: rgb(0 0 0 / 8%) 0px 1px 12px;
`;

const NavTop = styled.div`
  ${flex('space-around')}
`;

const NavLogo = styled.div`
  ${flex('', 'center')}
  flex-grow: 2;
  color: #ff9f1a;
`;

const Icon = styled.div`
  padding-right: 5px;
  font-size: 30px;
  color: #ff9f1a;
`;

const NavTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #ff9f1a;
`;

const NavMainSection = styled.div`
  ${flex}
  flex-grow: 1;
  text-decoration: none;
`;

const NavRightSection = styled.div`
  ${flex('flex-end')}
  flex-grow: 2;
`;

const SearchBottomSection = styled.div`
  display: flex;
  justify-content: center;
`;
