import React, { useState } from 'react';
import Pagination from 'react-js-pagination';
import styled from 'styled-components';

const Paging = ({ page, count, setPage }) => {
  return (
    <StPaginationWrap>
      <Pagination
        activePage={page}
        itemsCountPerPage={5}
        totalItemsCount={10}
        pageRangeDisplayed={5}
        prevPageText={'‹'}
        nextPageText={'›'}
        onChange={setPage}
      />
    </StPaginationWrap>
  );
};

export default Paging;

const StPaginationWrap = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul.pagination li {
    display: inline-block;
    padding: 10px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ul.pagination li:first-child {
    border-radius: 5px 0 0 5px;
  }
  ul.pagination li:last-child {
    border-radius: 0 5px 5px 0;
  }
  ul.pagination li a {
    text-decoration: none;
    color: #222222;
    font-size: 14px;
    font-weight: 700;
  }
  ul.pagination li.active a {
    color: white;
  }
  ul.pagination li.active {
    background-color: black;
    border-radius: 120px;
  }
  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: black;
  }
  .page-selection {
    width: 48px;
    height: 30px;
    color: #337ab7;
  }
`;
