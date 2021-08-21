import React, { useState } from 'react';
import styled from 'styled-components';
import DetailTitle from './DetailTitle';
import ImageSlider from './ImageSlider';
import DetailContent from './DetailContent';
import Reservation from './Reservation';
import DetailModal from './DetailModal';

function Detail() {
  const [modalOpen, setmodalOpen] = useState(false);

  const modalHandler = () => {
    setmodalOpen(!modalOpen);
  };

  return (
    <DetailPage>
      <DetailTitle />
      <ImageSlider />
      {modalOpen && <DetailModal modalHandler={modalHandler} />}
      <DetailSection>
        <DetailContent />
        <Reservation modalHandler={modalHandler} />
      </DetailSection>
    </DetailPage>
  );
}

const DetailPage = styled.div`
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
