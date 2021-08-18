/*global kakao*/
import styled from 'styled-components';
import React, { useEffect } from 'react';
// import Overlay from './Overlay';

const Map = () => {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488), // 현재 위치
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);
    const markerPosition = new kakao.maps.LatLng( //마커 포지션 띄우기
      37.365264512305174,
      127.10676860117488
    );

    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);

    // const div = document.createElement('div');
    // div.classList.add('hello');
    // div.textContent = 'Hello World';
    // div.addEventListener('click', closeOverlay);
    // const h1 = document.createElement('span');
    // h1.classList.add('helloone');
    // h1.textContent = 'goobye';

    // const content = {(div,h1)};

    const content = `
    <div class="imageWrap" style = "position: absolute; left: 20px; bottom: 80px; border-radius: 15px; width:274px; height: 265px;" >
        <div class="image">
         <img src="../images/listImage.jpeg" style = "position: relative; width:100%; height: 60%; border-radius: 15px 15px 0 0 ;">
        </div>
        <div class="detailInfo" style ="border-radius: 0 0 15px 15px ;padding:15px; background-color: rgb(255, 255, 255)">
         <div class="barName" style ="color: #222222; font-weight: 400; font-size: 16px; line-height: 20px;">오늘 와인 한잔</div>
         <div class="price" style="color: rgb(34, 34, 34); font-weight: 600; margin-top: 16px;">65,000원 / night</div>
        </div>
    </div>;`;

    const overlay = new kakao.maps.CustomOverlay({
      content: content,
      map: map,
      position: marker.getPosition(),
    });
  }, []);

  return (
    <div>
      <div
        id="map"
        style={{
          left: '30px',
          width: '1500px',
          height: '900px',
          //sticky로 구현하려 했으나 먹지 않음. 막아둔걸 수 있으니 더블체크 필요
          // position: 'sticky',
          // top: '100px',
        }}
      ></div>
    </div>
  );
};

export default Map;
