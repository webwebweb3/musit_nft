import React, { useCallback, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Items from '$components/layout/page/Items';
import { Box, CircularProgress, MenuItem, Select } from '@mui/material';

const PaginatedItems = ({ items, saleStatus, type }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [sizeState, setSize] = useState(3);

  useEffect(() => {
    if (!items) return;

    const endOffset = itemOffset + sizeState;
    setCurrentItems(items.slice(itemOffset, endOffset).reverse());
    setPageCount(Math.ceil(items.length / sizeState));
  }, [itemOffset, sizeState, items]);

  const handlePageClick = event => {
    const newOffset = (event.selected * sizeState) % items.length;

    setItemOffset(newOffset);
  };

  const handleSizeChange = useCallback(event => {
    setSize(Number(event.target.value));
  }, []);

  return (
    <>
      {currentItems ? (
        <>
          <Items
            currentItems={currentItems}
            saleStatus={saleStatus}
            type={type}
          />
          <Box className="pageList">
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="<"
              renderOnZeroPageCount={null}
            />
            <Select
              className="selectBox"
              value={sizeState}
              onChange={handleSizeChange}
            >
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={12}>12</MenuItem>
            </Select>
          </Box>
        </>
      ) : (
        <div style={{ width: '100%', alignItems: 'center' }}>
          <CircularProgress style={{ margin: '100px 500px' }} />
        </div>
      )}
    </>
  );
};

export default PaginatedItems;
