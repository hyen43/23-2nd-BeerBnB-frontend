import React from 'react';
import styled from 'styled-components';

function NavCheckInandOut() {
  return (
    <CheckINandOUt>
      <CheckIn></CheckIn>
      <CheckOUt></CheckOUt>
    </CheckINandOUt>
  );
}

export default NavCheckInandOut;

const CheckINandOUt = styled.section`
  display: flex;
`;

const CheckIn = styled.div`
  display: flex;
`;

const CheckOUt = styled.div`
  display: flex;
`;
