import { Avatar, InputLabel } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
// import { useInput } from '../../../hooks/useInput';
// import MultipleSelectChip from '../../mui/ChipGenre';
import CustomizedInputs from '../../mui/CustomizedInputs';
import UnstyledSelectsMultiple from '../../mui/SelectNationality';
import MyImgButton from './MyImgButton';
import MyInfoButton from './MyInfoButton';

const MyInfo = () => {
  const [editInfo, onEditInfo] = useState(false);
  const [editNationality, onEditNationality] = useState(false);
  const { userData } = useSelector(state => state.login);
  const { imagePaths } = useSelector(state => state.user);
  const [nationality, onChangeNationality] = useState(userData.nationality);
  console.log(imagePaths);

  const onEditClick = useCallback(() => {
    onEditInfo(prev => !prev);
  }, []);

  const onEditNationalityClick = useCallback(() => {
    onEditNationality(prev => !prev);
  }, []);

  return (
    <>
      <h1 style={{ marginBottom: '40px' }}>프로필 편집하기</h1>
      {userData && (
        <>
          <CustomizedInputs
            label="metamask"
            read={true}
            value={userData.metamask}
          />
          {userData.role === 1 && (
            <>
              {editInfo ? (
                <CustomizedInputs
                  label="name"
                  read={false}
                  value={userData.name}
                />
              ) : (
                <CustomizedInputs
                  label="name"
                  read={true}
                  value={userData.name}
                />
              )}
              <MyInfoButton value={editInfo} func={onEditClick} />
            </>
          )}

          {userData.img ? (
            <>
              <InputLabel
                sx={{ color: '#000', fontWeight: 'bold', fontSize: '20px' }}
                shrink
                htmlFor="bootstrap-input"
              >
                Profile
              </InputLabel>
              <MyImgButton />
              {/* <Avatar
                src={`https://avatars.dicebear.com/api/gridy/${userData.metamask}.svg`}
                style={{ width: '200px' }}
                alt={'v'}
              /> */}
            </>
          ) : (
            <>
              {imagePaths ? (
                <>
                  <div>
                    <Avatar src={imagePaths[0]} alt={'Avatar'} />
                  </div>
                </>
              ) : (
                <>
                  <InputLabel
                    sx={{ color: '#000', fontWeight: 'bold', fontSize: '20px' }}
                    shrink
                    htmlFor="bootstrap-input"
                  >
                    Profile
                  </InputLabel>
                  <Avatar
                    src={`https://avatars.dicebear.com/api/gridy/${userData.metamask}.svg`}
                    alt={'Avatar'}
                  />
                </>
              )}
              <MyImgButton />
            </>
          )}

          <InputLabel
            sx={{ color: '#000', fontWeight: 'bold', fontSize: '20px' }}
            shrink
            htmlFor="bootstrap-input"
          >
            Nationality
          </InputLabel>

          {editNationality ? (
            <UnstyledSelectsMultiple
              value={nationality}
              func={onChangeNationality}
            />
          ) : (
            <UnstyledSelectsMultiple value={nationality} />
          )}
          <MyInfoButton value={editNationality} func={onEditNationalityClick} />
          {/* <MultipleSelectChip value={userData.genre} /> */}

          {userData.role === 0 && (
            <CustomizedInputs label="pass" value={userData.pass} />
          )}
        </>
      )}
    </>
  );
};

export default MyInfo;
