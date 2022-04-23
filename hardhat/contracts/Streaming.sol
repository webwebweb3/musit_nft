// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./MintMusicToken.sol";

contract Streaming {
    MintMusicToken public mintMusicTokenAddress;
    constructor (address _mintMusicTokenAddress){
        mintMusicTokenAddress = MintMusicToken(_mintMusicTokenAddress);
    }
    
    struct LatestMusicData {
            uint256 tokenId;
            string tokenURI;            
    }

    function getLatestMusicToken()
        view
        public 
        returns(LatestMusicData[] memory )
    {

            uint256 _totalMusicToken = mintMusicTokenAddress.totalSupply();
            require(_totalMusicToken > 0, "There are no tokens in the contract.");
            uint256 k;
            if(_totalMusicToken>=5) {
                    k=5;
            } else if (_totalMusicToken==4){
                    k=4;
            } else if (_totalMusicToken==3){
                    k=3;
            } else if (_totalMusicToken==2){
                    k=2;
            } else if (_totalMusicToken==1){
                    k=1;
            } 
            LatestMusicData[] memory musicTokenDatas = new LatestMusicData[](k);
            uint256 j = 0;

            for(uint256 i=_totalMusicToken; i>_totalMusicToken-k; i--) {
                    musicTokenDatas[j] = LatestMusicData(i, mintMusicTokenAddress.tokenURI(i));
                    j++;
            }

            return musicTokenDatas;
    }

    function getLatestMusicTokenAll()
        view
        public 
        returns(LatestMusicData[] memory )
    {
            uint256 _totalMusicToken = mintMusicTokenAddress.totalSupply();
            require(_totalMusicToken > 0, "There are no tokens in the contract.");
            LatestMusicData[] memory musicTokenDatas = new LatestMusicData[](_totalMusicToken);
            uint256 j = 0;

            for(uint256 i=_totalMusicToken; i>0; i--) {
                    musicTokenDatas[j] = LatestMusicData(i,mintMusicTokenAddress.tokenURI(i));
                    j++;
            }

            return musicTokenDatas;
    }

    function getOldestMusicToken()
        view
        public
        returns(LatestMusicData[] memory)
    {
            uint256 _totalMusicToken = mintMusicTokenAddress.totalSupply(); 
            require(_totalMusicToken > 0, "There are no tokens in the contract.");
            LatestMusicData[] memory musicTokenDatas = new LatestMusicData[](_totalMusicToken); 
            uint256 j = 0; 

            for(uint256 i=1; i<_totalMusicToken+1; i++) {
                    musicTokenDatas[j] = LatestMusicData(i,mintMusicTokenAddress.tokenURI(i));
                    j++;
            }

            return musicTokenDatas;
    }
}