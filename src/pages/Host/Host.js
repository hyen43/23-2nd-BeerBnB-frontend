import React, { useState } from 'react';
import { API, BASE_URL, TOKEN_KEY } from './../../config';
import axios from 'axios';
import styled from 'styled-components';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Result from './Result';
import { useHistory } from 'react-router-dom';

function Host() {
  const history = useHistory();
  const [houseInfo, setHouseInfo] = useState({
    userSelect: '',
    house_name: '',
    description: '',
    price: 0,
  });

  const [address, setAddress] = useState('');
  const [addrData, setAddrData] = useState();

  const handleComplete = data => {
    let fullAddress = data.address;
    setAddress(fullAddress);
  };

  const [stepNumer, setStepNumer] = useState(1);
  const [guest, setGuest] = useState(1);
  const [image, setImage] = useState();

  const countPlus = () => {
    setGuest(guest => guest + 1);
  };

  const countMinus = () => {
    setGuest(guest => guest - 1);
  };

  const handleData = e => {
    const { name, value } = e.target;
    setHouseInfo({
      ...houseInfo,
      [name]: value,
    });
  };

  const handleImage = e => {
    const { name, value } = e.target.files;
    console.log(e.target.files);
    setImage(e.target.files, {
      ...image,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // let data = houseInfo;
    axios
      .post(
        `${API.POST}`,
        {
          userSelect: houseInfo.userSelect,
          house_name: houseInfo.house_name,
          description: houseInfo.description,
          head_count: guest,
          price: houseInfo.price,
          address: address,
          longitude: addrData.x,
          latitude: addrData.y,
        },
        {
          headers: {
            Authorization: localStorage.getItem(TOKEN_KEY),
          },
        }
      )
      .then(res => {
        console.log(res);
        history.push('/');
        window.location.reload();
      })

      .catch(err => {
        alert('요청 실패!');
      });
  };

  const nextStep = () => {
    setStepNumer(stepNumer + 1);
  };

  const STEPS = {
    1: <Step1 houseInfo={houseInfo} handleData={handleData} />,
    2: <Step2 houseInfo={houseInfo} handleData={handleData} />,
    3: (
      <Step3
        houseInfo={houseInfo}
        guest={guest}
        countPlus={countPlus}
        countMinus={countMinus}
        handleData={handleData}
        handleImage={handleImage}
      />
    ),
    4: (
      <Step4
        address={address}
        addrData={addrData}
        setAddrData={setAddrData}
        handleComplete={handleComplete}
      />
    ),
    5: <Result handleSubmit={handleSubmit} />,
  };

  return (
    <>
      <HostContainer>
        <Greeting>
          <strong>
            호스트님, 안녕하세요. <br /> 술과 함께하는 <br /> 당신의 멋진 숙소를{' '}
            <br /> 소개해주세요!
          </strong>
        </Greeting>
        <Enrollment>{STEPS[stepNumer]}</Enrollment>
        {stepNumer < 5 ? (
          <NextButton onClick={nextStep}>다음</NextButton>
        ) : null}
      </HostContainer>
    </>
  );
}

const NextButton = styled.button`
  position: absolute;
  bottom: 50px;
  right: 40vh;
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

const HostContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #ff9f1a;
`;

const Greeting = styled.strong`
  position: relative;
  top: 30%;
  margin-left: 40px;
  margin-right: 15px;
  font-size: 40px;
  font-weight: 600;
  line-height: 56px;
  text-align: left;
`;

const Enrollment = styled.div``;

export default Host;
