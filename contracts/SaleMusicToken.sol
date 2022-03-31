// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./MintMusicToken.sol";

contract SaleMusicToken {
    MintMusicToken public mintMusicTokenAddress;
    constructor (address _mintMusicTokenAddress){
        mintMusicTokenAddress = MintMusicToken(_mintMusicTokenAddress);
    }

    mapping (uint256 => uint256) public musicTokenPrices;

    uint256[] public onSaleMusicTokenArray;
    struct OnSaleMusicTokenData {
        uint256 musicTokenId;
        string musicTokenURI;
        uint256 musicTokenPrice;
    }

    function setForSaleMusicToken(uint256 _musicTokenId, uint256 _price)
        public
    {
        address musicTokenOwner = mintMusicTokenAddress.ownerOf(_musicTokenId);

        require(musicTokenOwner == msg.sender, "Caller is not music token owner.");
        require(_price > 0 , "Price is zero or lower.");
        require(musicTokenPrices[_musicTokenId] == 0, "This animal token is already on sale.");
        require(mintMusicTokenAddress.isApprovedForAll(musicTokenOwner, address(this)), "Music Token owner did not approve token.");       

        musicTokenPrices[_musicTokenId] = _price;

        onSaleMusicTokenArray.push(_musicTokenId);
    }

    function purchaseMusicToken(uint256 _musicTokenId)
        public
        payable
    {
        uint256 price = musicTokenPrices[_musicTokenId];
        address musicTokenOwner = mintMusicTokenAddress.ownerOf(_musicTokenId);

        require(price > 0, "Music Token not sale.");
        require(price <= msg.value, "Caller sent lower than price.");
        require(musicTokenOwner != msg.sender, "Caller is not Music Token owner.");

        payable(musicTokenOwner).transfer(msg.value);
        mintMusicTokenAddress.safeTransferFrom(musicTokenOwner, msg.sender, _musicTokenId);

        musicTokenPrices[_musicTokenId] = 0;

        for(uint256 i = 0; i < onSaleMusicTokenArray.length; i++) {
            if(musicTokenPrices[onSaleMusicTokenArray[i]] == 0 ) {
                onSaleMusicTokenArray[i] = onSaleMusicTokenArray[onSaleMusicTokenArray.length - 1];
                onSaleMusicTokenArray.pop();
            }
        }
    }

    function getOnSaleMusicTokenArrayLength()
        view
        public
        returns(uint256)
    {
        return onSaleMusicTokenArray.length;
    }

    function getOnSaleMusicTokens()
        public
        view
        returns(OnSaleMusicTokenData[] memory)
    {
        uint256 onSaleMusicTokenLength = getOnSaleMusicTokenArrayLength();

        OnSaleMusicTokenData[] memory onSaleMusicTokenDatas = new OnSaleMusicTokenData[](onSaleMusicTokenLength);

        for(uint256 i = 0; i < onSaleMusicTokenLength; i++){
            uint256 musicTokenId = onSaleMusicTokenArray[i];
            string memory musicTokenURI = mintMusicTokenAddress.tokenURI(musicTokenId);
            uint256 musicTokenPrice = getMusicTokenPrice(musicTokenId);
            onSaleMusicTokenDatas[i] = OnSaleMusicTokenData(musicTokenId, musicTokenURI, musicTokenPrice);
        }
        
        return onSaleMusicTokenDatas;
    }

    function getMusicTokenPrice(uint256 _musicTokenId)
        view
        public
        returns(uint256)
    {
        return musicTokenPrices[_musicTokenId];
    }
}