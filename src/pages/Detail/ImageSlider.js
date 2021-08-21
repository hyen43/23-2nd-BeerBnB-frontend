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

function ImageSlider(props) {
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
      {IMAGE_LIST[0].url.map((img, index) => {
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

const IMAGE_LIST = [
  {
    url: [
      'https://media.vlpt.us/images/winter_ya/post/29ed842a-35cc-4711-9e7d-49765daa9e2b/product_yellow1.jpeg',
      'https://media.vlpt.us/images/winter_ya/post/b1c09b32-9b4f-4a20-9b49-892244098427/product_yellow2.jpeg',
      'https://media.vlpt.us/images/winter_ya/post/95a249d8-ccf5-4e98-8ce8-ac1b5ca033ae/product_yellow3.jpeg',
      'https://media.vlpt.us/images/winter_ya/post/40594e69-256d-46e9-9178-ada06a5e1121/product_green1.jpeg',
      'https://media.vlpt.us/images/winter_ya/post/42e82f2c-fc23-4892-b3cf-f8b9a4700e70/product_green2.jpeg',
    ],
  },
];

export default ImageSlider;
