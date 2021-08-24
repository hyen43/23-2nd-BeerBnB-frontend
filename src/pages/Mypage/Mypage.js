import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { BASE_URL } from '../../config';
import { TOKEN_KEY } from '../../config';

export default function MyPage() {
  const [guestData, setGuestData] = useState({});
  const [hostData, setHostData] = useState({});
  const [pageOpen, setPageOpen] = useState(false);

  useEffect(() => {
    getGuestData();
    getHostData();
  }, []);

  const getGuestData = () => {
    axios
      .get(`${BASE_URL}/bookings/guest`, {
        headers: {
          Authorization: localStorage.getItem(TOKEN_KEY),
        },
      })
      .then(response => setGuestData(response.data));
  };

  const getHostData = () => {
    axios
      .get(`${BASE_URL}/bookings/host`, {
        headers: {
          Authorization: localStorage.getItem(TOKEN_KEY),
        },
      })
      .then(response => {
        setHostData(response.data);
        if (response.message !== 'USER_IS_NOT_HOST') {
          setPageOpen(!pageOpen);
        }
      });
  };

  return (
    <HostPage>
      <HostTitle>내가 한 예약</HostTitle>
      <MenuTable>
        <thead>
          <tr>
            {RESERVED_MENU.map(menu => {
              return <th key={menu.id}>{menu.content}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {guestData.message &&
            guestData.message.map(guest => {
              return (
                <tr key={guest.booking_id}>
                  <td>예약</td>
                  <td>{guest.product_name}</td>
                  <td>
                    {guest.check_in} ~ {guest.check_out}
                  </td>
                  <td>{Number(guest.total_price).toLocaleString()} 원</td>
                </tr>
              );
            })}
        </tbody>
      </MenuTable>
      {pageOpen && (
        <div>
          <HostTitle>내가 호스팅 중인 숙소</HostTitle>
          <MenuTable>
            <thead>
              <tr>
                {HOST_MENU.map(menu => {
                  return <th key={menu.id}>{menu.content}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {hostData.message &&
                hostData.message.map(host => {
                  return (
                    <tr key={host.booking_id}>
                      <td>{host.product_name}</td>
                      <td>{host.booking_created_at}</td>
                      <td>{host.booking_user_name}</td>
                      <td>
                        {host.check_in} - {host.check_out}
                      </td>
                      <td>{Number(host.total_price).toLocaleString()} 원</td>
                    </tr>
                  );
                })}
            </tbody>
          </MenuTable>
        </div>
      )}
    </HostPage>
  );
}

const HostPage = styled.div`
  margin: 200px auto 0 auto;
  padding: 0 40px;
  max-width: 1128px;
`;

const HostTitle = styled.header`
  margin: 0 auto;
  padding: 20px 0;
  font-size: 25px;
  font-weight: bold;
`;

const MenuTable = styled.table`
  width: 100%;
  margin-bottom: 100px;

  thead {
    background-color: #ff9f1a;
    color: white;
    font-weight: bold;
  }

  th,
  td {
    padding: 15px;
    text-align: center;
  }
`;

const HOST_MENU = [
  { id: 1, content: '호스팅 중인 숙소' },
  { id: 2, content: '예약 등록 시간' },
  { id: 3, content: '게스트 이름' },
  { id: 4, content: '체크인 - 체크아웃' },
  { id: 5, content: '가격' },
];

const RESERVED_MENU = [
  { id: 1, content: '상태' },
  { id: 2, content: '숙소 이름' },
  { id: 3, content: '일정' },
  { id: 4, content: '가격' },
];
