import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import axios from 'axios';
import DetailTitle from './DetailTitle';
import ImageSlider from './ImageSlider';
import DetailContent from './DetailContent';
import Reservation from './Reservation';
import DetailModal from './DetailModal';
import { BASE_URL } from '../../config';
import { TOKEN_KEY } from '../../config';

function Detail(props) {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const dateSelect = startDate && endDate;
  const checkin = moment(startDate).format('YYYY. MM. DD');
  const checkout = moment(endDate).format('YYYY. MM. DD');
  const diffday = moment(endDate).diff(startDate, 'days');
  const [ismodalOpen, setmodalOpen] = useState(false);
  const [countGuest, setcountGuest] = useState(1);
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    getDetailData();
  }, []);

  const getDetailData = () => {
    axios
      .get('/data/DetailData.json')
      .then(response => setDetailData(response.data));
  };

  const reserveData = () => {
    axios
      .post(
        `${BASE_URL}/bookings/`,
        {
          checkin: moment(startDate).format('YYYY-MM-DD'),
          checkout: moment(endDate).format('YYYY-MM-DD'),
          count: countGuest,
        },
        {
          headers: {
            Authorization: localStorage.getItem(TOKEN_KEY),
          },
        }
      )
      .then(res => {
        if (res.data.message === 'BOOKED') {
          alert('예약이 완료되었습니다!');
        }
      })
      .catch(err => {
        alert('예약 실패!');
      });
  };

  const plusGuest = () => {
    if (countGuest >= detailData.head_count) {
      return alert(`이 숙소는 최대 인원이 ${detailData.head_count}명 입니다!`);
    } else {
      setcountGuest(countGuest => countGuest + 1);
    }
  };

  const minusGuest = () => {
    if (countGuest < 2) {
      return alert('인원은 최소 1명입니다!');
    } else {
      setcountGuest(countGuest => countGuest - 1);
    }
  };

  const modalHandler = () => {
    setmodalOpen(!ismodalOpen);
  };

  return (
    <DetailPage>
      <DetailTitle detailData={detailData} />
      <ImageSlider detailData={detailData} />
      {ismodalOpen && (
        <DetailModal
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          checkin={checkin}
          checkout={checkout}
          modalHandler={modalHandler}
        />
      )}
      <DetailSection>
        <DetailContent detailData={detailData} />
        <Reservation
          modalHandler={modalHandler}
          detailData={detailData}
          checkin={checkin}
          checkout={checkout}
          countGuest={countGuest}
          plusGuest={plusGuest}
          minusGuest={minusGuest}
          diffday={diffday}
          dateSelect={dateSelect}
          startDate={startDate}
          endDate={endDate}
          reserveData={reserveData}
        />
      </DetailSection>
    </DetailPage>
  );
}

const DetailPage = styled.div`
  position: relative;
  margin: 100px auto 0 auto;
  padding: 0 40px;
  max-width: 1128px;
  height: 1000px;
`;

const DetailSection = styled.section`
  display: flex;
  padding-top: 48px;
  position: relative;
`;
export default Detail;
