import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function NextArrow(props) {
  const { className, onClick } = props;
  return <RightAr className={className} onClick={onClick} />;
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return <LeftAr className={className} onClick={onClick} />;
}

function ImageSlider({ detailData }) {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <StyledSlider {...settings}>
      {detailData.image &&
        detailData.image.map((img, index) => {
          return (
            <ImageContainer key={index}>
              <Image src={img} />
            </ImageContainer>
          );
        })}
    </StyledSlider>
  );
}

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }
`;

const ImageContainer = styled.div`
  height: 420px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

// slick 화살표 버튼 가상요소 스타일 지정
const RightAr = styled.div`
  cursor: pointer;

  &::before {
    content: '>';
    font-size: 30px;
    color: black;
  }
`;

const LeftAr = styled.div`
  cursor: pointer;

  &::before {
    content: '<';
    font-size: 30px;
    color: black;
  }
`;

export default ImageSlider;
