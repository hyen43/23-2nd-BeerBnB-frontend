import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavSearchBar from './NavSearchBar';
import NavRight from './NavRight';
import SearchBottom from './SearchBottom';
import NavLocation from './NavMainComponent/NavLocation';
import NavCheckInandOut from './NavMainComponent/NavCheckInandOut';
import { flex } from '../../styles/mixin';

function Nav() {
  const [inputOpen, setInputOpen] = useState(false);
  const [guestNumber, setGuestNumber] = useState(0);
  const [locationData, setLocationData] = useState([]);
  const [userInput, setuserInput] = useState('');
  const [bottomClick, setBottomClick] = useState({
    location: false,
    checkInandOut: false,
  });

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    axios
      .get('http://localhost:3000/locationList.json')
      .then(response => setLocationData(response.data));
  };

  const handleChange = e => {
    const { value } = e.target;
    setuserInput(value);
  };

  console.log(locationData);

  const fliterLocation = locationData.filter(location => {
    return location.includes(userInput);
  });
  const bottomOnClick = name => {
    setBottomClick({
      ...bottomClick,
      [name]: !bottomClick[name],
    });
  };

  // const handleKeyPress = (e, index) => {
  //   if (e.key === 'Enter') {
  //     bottomOnClick(!bottomClick[index]);
  //   }
  // };

  console.log(bottomClick);
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
                // handleKeyPress={handleKeyPress}
              />
            )}
          </SearchBottomSection>
        </NavContainer>
        {bottomClick.location && (
          <NavLocation fliterLocation={fliterLocation} userInput={userInput} />
        )}
        {bottomClick.checkInandOut && <NavCheckInandOut />}
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
  position: relative;
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
