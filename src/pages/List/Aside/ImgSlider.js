// import React, { Component, useEffect, useState } from 'react';
// import styled from 'styled-components';

// function ImgSlider({ fetchData }) {
//   const [images, setImages] = useState([]);
//   const [viewImage, setViewImage] = useState([]);
//   const [titleData, setTitleData] = useState([]);
//   const imageData = Object.values(titleData.description_images);

//   useEffect(() => {
//     setImages = imageData;
//     setViewImage = currentNum;
//     setTitleData();
//     setViewImage();
//     setImages();
//   }, []);

//   handleSlider = n => {
//     let currentNum = viewImage + n;
//     if (currentNum === -1) {
//       currentNum = images.length - 1;
//     } else if (currentNum > images.length - 1) {
//       currentNum = 0;
//     }
//     // this.setState({
//     //   viewImage: currentNum,
//     // });
//   };

//   return (
//     <div className="wrapper">
//       <button onClick={() => handleSlider(-1)}>
//         <img
//           className="leftArrow"
//           src={'../images/left.png'}
//           alt={'left arrow'}
//         />
//       </button>
//       <div className="imageContainer">
//         <img className="sliderImages" src={images[viewImage]} alt="food" />
//       </div>
//       <button onClick={() => handleSlider(1)}>
//         <img
//           className="rightArrow"
//           src={'../images/right.png'}
//           alt={'right arrow'}
//         />
//       </button>
//     </div>
//   );
// }

// export default ImgSlider;

import React, { Component } from 'react';
import styled from 'styled-components';

class ImgSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      viewImage: 0,
    };
  }

  componentDidMount() {
    const titleData = this.props.fetchData;
    const imageData = Object.values(titleData.description_images);
    this.setState({
      images: imageData,
    });
  }
  handleSlider = n => {
    const { images, viewImage } = this.state;
    let currentNum = viewImage + n;
    if (currentNum === -1) {
      currentNum = images.length - 1;
    } else if (currentNum > images.length - 1) {
      currentNum = 0;
    }
    this.setState({
      viewImage: currentNum,
    });
  };
  render() {
    const { images, viewImage } = this.state;

    return (
      <StWraper>
        <StButton onClick={() => this.handleSlider(-1)}>
          <img
            className="leftArrow"
            src={'../images/left.png'}
            alt={'left arrow'}
          />
        </StButton>
        <StImageContainer>
          <img className="sliderImages" src={images[viewImage]} alt="food" />
        </StImageContainer>
        <StButton onClick={() => this.handleSlider(1)}>
          <img
            className="rightArrow"
            src={'../images/right.png'}
            alt={'right arrow'}
          />
        </StButton>
      </StWraper>
    );
  }
}

export default ImgSlider;

const StWraper = styled.div`
  display: flex;
  align-items: center;
`;

const StButton = styled.button`
  background-color: transparent;
  border: 0;
  outline: 0;

  & > .leftArrow {
    position: absolute;
    left: 60px;
    width: 40px;
    height: 43px;
    cursor: hover;
  }

  & > .rightArrow {
    position: absolute;
    left: 330px;
    width: 40px;
    height: 43px;
    cursor: hover;
  }
`;

const StImageContainer = styled.div`
  padding: 0;

  & > .sliderImages {
    padding: 10px 15px;
    border-radius: 20px 20px;
    bottom: 15px;
    width: 330px;
    height: 230px;
  }
`;
