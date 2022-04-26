import React from 'react';

const EditionHistoryLabel = () => {
  return (
    <div
      style={{
        display: 'flex',
        textAlign: 'center',
        color: '#546682',
        fontSize: '20px',
        fontWeight: 600,
        margin: '30px 0 15px',
      }}
    >
      <div style={{ width: '400px' }}>아이템</div>
      <div style={{ width: '200px' }}>가격</div>
      <div style={{ width: '150px' }}>구매자</div>
      <div style={{ width: '150px' }}>판매자</div>
      <div style={{ width: '300px' }}>일자</div>
    </div>
  );
};

export default EditionHistoryLabel;
