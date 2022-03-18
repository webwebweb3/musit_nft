import { Avatar, Button, InputLabel } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInput } from '../../../hooks/useInput';
import { userEditRequestAction } from '../../../_actions/user_actions';
import CustomizedInputs from '../../mui/CustomizedInputs';
import UnstyledSelectsMultiple from '../../mui/SelectNationality';
import MyImgButton from './MyImgButton';
import MyInfoButton from './MyInfoButton';

const MyInfo = () => {
  const dispatch = useDispatch();
  const [editInfo, onEditInfo] = useState(false);
  const [editNationality, onEditNationality] = useState(false);
  const { userData } = useSelector(state => state.user);
  const { imagePath } = useSelector(state => state.user);
  const [nationality, onChangeNationality] = useState(userData.nationality);
  const [nickname, onChangeNickname] = useInput(userData.name);
  console.log(userData);

  const onSubmit = useCallback(() => {
    let editData = {
      metamask: userData.metamask,
      img: imagePath[0],
      nationality,
      name: nickname,
    };

    const formData = new FormData();
    for (var key in editData) {
      if (editData.hasOwnProperty(key)) {
        formData.append(key, editData[key]);
      }
    }

    dispatch(userEditRequestAction(formData));
  }, [dispatch, nationality, nickname, imagePath, userData]);

  const onEditClick = useCallback(() => {
    onEditInfo(prev => !prev);
  }, []);

  const onEditNationalityClick = useCallback(() => {
    onEditNationality(prev => !prev);
  }, []);

  return (
    <>
      <h1 style={{ marginBottom: '40px' }}>프로필 편집하기</h1>
      <form encType="multipart/form-data" onSubmit={onSubmit}>
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
                    value={nickname}
                    func={onChangeNickname}
                  />
                ) : (
                  <CustomizedInputs label="name" read={true} value={nickname} />
                )}
                <MyInfoButton value={editInfo} func={onEditClick} />
              </>
            )}

            {userData && userData.img ? (
              <>
                <InputLabel
                  sx={{ color: '#000', fontWeight: 'bold', fontSize: '20px' }}
                  shrink
                  htmlFor="bootstrap-input"
                >
                  Profile
                </InputLabel>
                {imagePath ? (
                  <Avatar src={imagePath[0]} alt={'Avatar'} />
                ) : (
                  <>
                    <div>
                      <Avatar src={userData.img} alt={'Avatar'} />
                    </div>
                  </>
                )}
                <MyImgButton />
              </>
            ) : (
              <>
                {imagePath ? (
                  <>
                    <div>
                      <Avatar src={imagePath[0]} alt={'Avatar'} />
                    </div>
                  </>
                ) : (
                  <>
                    <InputLabel
                      sx={{
                        color: '#000',
                        fontWeight: 'bold',
                        fontSize: '20px',
                      }}
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
            <MyInfoButton
              value={editNationality}
              func={onEditNationalityClick}
            />
            {/* <MultipleSelectChip value={userData.genre} /> */}

            {userData.role === 0 && (
              <CustomizedInputs label="pass" value={userData.pass} />
            )}
            <Button
              style={{ color: '#808080' }}
              variant="text"
              onClick={onSubmit}
            >
              회원 정보 수정하기
            </Button>
          </>
        )}
      </form>
    </>
  );
};

export default MyInfo;
