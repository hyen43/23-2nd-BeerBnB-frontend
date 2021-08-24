import React from 'react';
import styled, { css } from 'styled-components';

function NavLocation(props) {
  const { fliterLocation, userInput } = props;

  return (
    <Location>
      <LocationPosition>
        {userInput === '' ? (
          <LocationDes>
            <LocationTitle>언제 어디로든 떠나는 여행</LocationTitle>
            <LocationBtn>
              <LocationBtnDes>
                <button>유연한 검색</button>
              </LocationBtnDes>
              <LocationBtnArrow>
                <i className="fas fa-chevron-right" />
              </LocationBtnArrow>
            </LocationBtn>
          </LocationDes>
        ) : (
          <LocationInput>
            <ul>
              {fliterLocation &&
                fliterLocation.map((searchdata, index) => {
                  return (
                    <LocationInputLi>
                      <li key={index}>
                        <i className="map fas fa-map-marker-alt" />
                        {searchdata}
                      </li>
                    </LocationInputLi>
                  );
                })}
            </ul>
          </LocationInput>
        )}
      </LocationPosition>
    </Location>
  );
}

export default NavLocation;

const LocationModal = css`
  flex-direction: column;
  width: 450px;
  padding: 0 20px;
  border: 1px solid #b5b5b5;
  border-radius: 32px;
  box-shadow: 0px 6px 20px rgb(0 0 0 / 20%);
  background-color: #fefefe;
`;

/* Modal background */
const Location = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const LocationPosition = styled.div`
  position: absolute;
  left: 28%;
`;

/* Modal content Box*/
const LocationDes = styled.div`
  ${LocationModal}
  display: flex;
  justify-content: center;
  height: 150px;
`;

const LocationTitle = styled.span`
  padding-bottom: 20px;
  font-size: 11px;
  font-weight: bold;
`;

const LocationBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  border: 1px solid #b5b5b5;
  border-radius: 32px;
  box-shadow: 0px 6px 20px rgb(0 0 0 / 20%);

  :hover {
    cursor: pointer;
  }
`;

const LocationBtnDes = styled.div`
  padding-left: 20px;
  color: #fc7303;
  font-weight: bold;

  button {
    background: none;
    border: none;
  }
`;

const LocationBtnArrow = styled.span`
  padding-right: 30px;
  color: #fc7303;
`;

const LocationInput = styled.div`
  ${LocationModal}
  display: flex;
  justify-content: center;
  max-height: 350px;
  z-index: 1;
  overflow-y: auto;
`;

const LocationInputLi = styled.div`
  padding: 10px;
  font-size: 14px;

  .map {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    padding: 10px;
    background: #f7f7f7;
    border-radius: 10px;
  }
`;
