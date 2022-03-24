import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import MultipleSelectChip from '../../mui/ChipGenre';

const MyGenre = ({ genre, setGenre }) => {
  const { userData } = useSelector(state => state.user);

  const onChangeGenre = event => {
    const {
      target: { value },
    } = event;
    setGenre(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  useEffect(() => {
    let { Genres } = userData;
    let editGenres = [];
    for (let i = 0; i < Genres.length; i++) {
      let { content } = Genres[i];
      editGenres.push(content);
    }
    setGenre(editGenres);
  }, [userData, setGenre]);

  return (
    <>
      <MultipleSelectChip value={genre} func={onChangeGenre} />
    </>
  );
};

export default MyGenre;
