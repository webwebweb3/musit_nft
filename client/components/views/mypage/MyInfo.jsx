import { Avatar, Box, Button, InputLabel } from '@mui/material';
import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInput } from '../../../hooks/useInput';
import { userEditRequestAction } from '$reduxsaga/request/user_request';
import CustomizedInputs from '../../mui/CustomizedInputs';
import UnstyledSelectsMultiple from '../../mui/SelectNationality';
import MyImgButton from './MyImgButton';
import MyInfoButton from './MyInfoButton';
import NationalityButton from './NationalityButton';
import MyGenre from './MyGenre';

const MyInfo = () => {
  const dispatch = useDispatch();
  const [editInfo, onEditInfo] = useState(false);
  const [booleanNationality, onBooleanNationality] = useState(false);
  const { userData } = useSelector(state => state.user);
  const { imagePath } = useSelector(state => state.user);
  const [editNationality, onChangeEditNationality] = useState('');
  const [editGenre, setEditGenre] = useState([]);
  const [editNickname, onChangeEditNickname, setEditNickname] = useInput('');

  useEffect(() => {
    if (userData) {
      setEditNickname(userData.name);
      onChangeEditNationality(userData.nationality);
    }
  }, [userData, setEditNickname, onChangeEditNationality]);

  const onSubmit = useCallback(() => {
    let editData = {
      metamask: userData.metamask,
      nationality: editNationality,
      genre: editGenre,
    };

    if (editNickname) {
      editData = {
        ...editData,
        name: editNickname,
      };
    }

    if (imagePath) {
      editData = {
        ...editData,
        img: imagePath[0],
      };
    }

    dispatch(userEditRequestAction(editData));
  }, [dispatch, editGenre, editNationality, editNickname, imagePath, userData]);

  const onEditClick = useCallback(() => {
    onEditInfo(prev => !prev);
  }, []);

  const onBooleanNationalityClick = useCallback(() => {
    onBooleanNationality(prev => !prev);
  }, []);

  return (
    <>
      <h1 style={{ marginTop: '-1px', marginBottom: '25px', color: '#fff' }}>
        프로필 편집하기
      </h1>
      <form encType="multipart/form-data" onSubmit={onSubmit}>
        {userData && (
          <>
            <CustomizedInputs
              label="metamask"
              read={true}
              value={userData.metamask}
            />
            {userData.role === 1 && (
              <Box sx={{ marginTop: '-30px' }}>
                {editInfo ? (
                  <CustomizedInputs
                    label="name"
                    read={false}
                    value={editNickname}
                    func={onChangeEditNickname}
                  />
                ) : (
                  <CustomizedInputs
                    label="name"
                    read={true}
                    value={userData.name}
                  />
                )}
                <MyInfoButton type={true} value={editInfo} func={onEditClick} />
              </Box>
            )}
            {userData && userData.img ? (
              <>
                <InputLabel
                  sx={{ color: '#fff', fontWeight: 'bold', fontSize: '20px' }}
                  shrink
                  htmlFor="bootstrap-input"
                >
                  Profile
                </InputLabel>
                {imagePath ? (
                  <Avatar
                    style={{
                      display: 'inline-block',
                      width: '100px',
                      height: '100px',
                      marginRight: '30px',
                    }}
                    src={imagePath[0]}
                    alt={'Avatar'}
                  />
                ) : (
                  <>
                    <Avatar
                      src={userData.img}
                      alt={'Avatar'}
                      style={{
                        display: 'inline-block',
                        width: '100px',
                        height: '100px',
                        marginRight: '30px',
                      }}
                    />
                  </>
                )}
                <MyImgButton />
              </>
            ) : (
              <>
                <InputLabel
                  sx={{
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: '20px',
                  }}
                  shrink
                  htmlFor="bootstrap-input"
                >
                  Profile
                </InputLabel>
                {imagePath ? (
                  <>
                    <Avatar
                      src={imagePath[0]}
                      alt={'Avatar'}
                      style={{
                        width: '100px',
                        height: '100px',
                        marginRight: '30px',
                      }}
                    />
                  </>
                ) : (
                  <>
                    <Avatar
                      style={{
                        display: 'inline-block',
                        width: '100px',
                        height: '100px',
                        marginRight: '30px',
                      }}
                      src={`https://avatars.dicebear.com/api/gridy/${userData.metamask}.svg`}
                      alt={'Avatar'}
                    />
                  </>
                )}
                <MyImgButton />
              </>
            )}
            <InputLabel
              sx={{
                color: '#fff',
                marginTop: '15px',
                marginBottom: '-10px',
                fontWeight: 'bold',
                fontSize: '20px',
              }}
              shrink
              htmlFor="nationality"
            >
              Nationality
            </InputLabel>
            {booleanNationality ? (
              <UnstyledSelectsMultiple
                value={editNationality}
                func={onChangeEditNationality}
              />
            ) : (
              <UnstyledSelectsMultiple value={editNationality} />
            )}
            <NationalityButton
              value={booleanNationality}
              func={onBooleanNationalityClick}
            />
            <Box style={{ margin: '20px 0 ' }}>
              <MyGenre genre={editGenre} setGenre={setEditGenre} />
            </Box>
            {userData.role === 0 && (
              <Box sx={{ marginTop: '15px' }}>
                <CustomizedInputs
                  label="pass 이용권 이후"
                  value={userData.pass}
                />
              </Box>
            )}
            <Box>
              <Button
                style={{ margin: '10px 0 0 450px', color: '#808080' }}
                variant="text"
                onClick={onSubmit}
              >
                회원 정보 수정하기
              </Button>
            </Box>
          </>
        )}
      </form>
    </>
  );
};

export default MyInfo;
