import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { studioSubscribe } from '$reduxsaga/request/studio_request';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const StudioSubscribe = ({ artist, sub, func, myMetamask }) => {
  const studio = useSelector(state => state.studio);
  console.log('mymeta', myMetamask);
  const dispatch = useDispatch();
  // TODO: 구독한 사람이 NFT 업로드 하면 알림
  const onClickSubscribeButton = action => {
    dispatch(
      studioSubscribe({
        artistId: studio.isSubscribingArtist.artistId,
        actionData: action,
        myMetamask,
      }),
    );
  };

  useEffect(() => {
    console.log('ㅇㅇ?', sub);
  }, [studio && studio.subscribeArtistDone]);

  return (
    <>
      {studio.isSubscribingArtist ? (
        sub ? (
          <UnSubscribeButton
            onClick={() => onClickSubscribeButton('cancelSubscribe')}
          >
            구독 취소
          </UnSubscribeButton>
        ) : (
          <SubscribeButton onClick={() => onClickSubscribeButton('subscribe')}>
            구독하기
          </SubscribeButton>
        )
      ) : (
        <SubscribeButton onClick={() => onClickSubscribeButton('subscribe')}>
          구독하기
        </SubscribeButton>
      )}
    </>
  );
};

export default StudioSubscribe;

const SubscribeButton = styled(Button)(() => ({
  color: '#fff',
  padding: '6px 12px',
  backgroundColor: '#1976ae',
  '&:hover': {
    backgroundColor: '#3d4463',
  },
}));

const UnSubscribeButton = styled(Button)(() => ({
  color: '#fff',
  padding: '6px 12px',
  backgroundColor: '#cc0000',
  '&:hover': {
    backgroundColor: '#3d4463',
  },
}));
