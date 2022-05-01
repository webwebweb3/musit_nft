import React from 'react';
import PaginatedItems from './PaginatedItems';

const PageList = ({ items, saleStatus, type }) => {
  return (
    <>
      <div
        className="page"
        style={{
          alignItems: 'center',
          margin: '10px auto',
        }}
      >
        <PaginatedItems items={items} saleStatus={saleStatus} type={type} />
      </div>
    </>
  );
};

export default PageList;
