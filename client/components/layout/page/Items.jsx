import { Box, Grid } from '@mui/material';
import MyNFTCards from '$components/views/cards/MyNFTCards';
import { useSelector } from 'react-redux';
import MarketPlaceNFTCard from '$components/views/cards/MarketPlaceNFTCard.jsx';
import AuctionContents from '$components/views/auctionpage/auctionCard/AuctionContents';
import Link from 'next/link';

const Items = ({ currentItems, saleStatus, type, ...rest }) => {
  const { userData } = useSelector(state => state.user);
  const account = userData?.metamask;

  return (
    <>
      <Grid
        className="approveGrid"
        sx={{ marginTop: '18px', marginLeft: '60px' }}
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 3, sm: 8, md: 12 }}
      >
        {type === 'myNFT' && (
          <>
            {currentItems &&
              currentItems.map(v => (
                <Box key={v.musicTokenId} sx={{ marginBottom: '20px' }}>
                  <MyNFTCards
                    key={v.musicTokenId}
                    account={account}
                    musicTokenIds={v.musicTokenId}
                    musicTokenDatas={v.musicTokenData}
                    musicTokenPrices={v.musicTokenPrice}
                    saleStatus={saleStatus}
                    {...rest}
                  />
                </Box>
              ))}
          </>
        )}
        {type === 'market' && (
          <>
            {currentItems &&
              currentItems.map((v, i) => {
                return (
                  <Box
                    key={v.musicTokenId}
                    sx={{ marginBottom: '20px', marginLeft: '45px' }}
                  >
                    <MarketPlaceNFTCard
                      musicTokenIds={v.musicTokenId}
                      musicTokenPrices={v.musicTokenPrice}
                      musicTokenDatas={v.musicTokenData}
                    />
                  </Box>
                );
              })}
          </>
        )}
        {type === 'auction' && (
          <>
            {currentItems &&
              currentItems.map(auction => (
                <div
                  key={auction.tokenId}
                  sx={{ marginBottom: '20px', marginLeft: '45px' }}
                >
                  <Link
                    href="/nft/auction/[product]"
                    as={`/nft/auction/${auction.newAuctionContract}`}
                  >
                    <a>
                      <AuctionContents auction={auction.newAuctionContract} />
                    </a>
                  </Link>
                </div>
              ))}
          </>
        )}
      </Grid>
    </>
  );
};
export default Items;
