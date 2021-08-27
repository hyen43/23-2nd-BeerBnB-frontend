/*global kakao*/
import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';

const Map = ({ fetchData }) => {
  useEffect(() => {
    const container = document.getElementById('map');

    const array = fetchData;

    const latResult = array.reduce((sum, currValue) => {
      sum = parseFloat(currValue.latitude) + sum;

      return sum;
    }, 0);

    const lntResult = array.reduce((sum, currValue) => {
      sum = parseFloat(currValue.longitude) + sum;
      return sum;
    }, 0);

    const getLatAverage = latResult / array.length;
    const getLntAverage = lntResult / array.length;

    const options = {
      center: new kakao.maps.LatLng(getLatAverage, getLntAverage), // 현재 위치
      level: 8,
    };

    const map = new kakao.maps.Map(container, options);

    const displayMarker = data => {
      const markerPosition = new kakao.maps.LatLng( //마커 포지션 띄우기
        data.latitude,
        data.longitude
      );

      new kakao.maps.Marker({
        position: markerPosition,
        map: map,
      });

      const content = `<div style="padding: 11px 14px;
      position: relative; left: 70px; bottom:50px; border-radius: 28px; background-color: rgb(255, 255, 255);
      box-shadow: rgb(0 0 0 / 4%) 0px 0px 0px 1px, rgb(0 0 0 / 18%) 0px 2px 4px;
      color: rgb(34, 34, 34); text-align:center;
      font-size: 14px;
      font-weight: 880;"> ₩ ${Number(data.price).toLocaleString()}</div>`;

      new kakao.maps.CustomOverlay({
        content: content,
        map: map,
        position: markerPosition,
      });
    };

    fetchData.map(data => {
      return displayMarker(data);
    });
  }, [fetchData]);
  return (
    <div
      id="map"
      style={{
        width: '41%',
        height: '1000px',
        position: 'sticky',
        top: '80px',
      }}
    />
  );
};

export default Map;
