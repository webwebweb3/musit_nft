import React, { useCallback, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Items from '$components/layout/page/Items';
import { Box, MenuItem, Select } from '@mui/material';

const PaginatedItems = ({ items, type }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [sizeState, setSize] = useState(6);

  useEffect(() => {
    if (!items) return;

    const endOffset = itemOffset + sizeState;
    setCurrentItems(items.slice(itemOffset, endOffset));
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
      <Items currentItems={currentItems} type={type} />
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
        <Select value={sizeState} onChange={handleSizeChange}>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={12}>12</MenuItem>
        </Select>
      </Box>
    </>
  );
};

export default PaginatedItems;
