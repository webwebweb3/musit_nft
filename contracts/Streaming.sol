// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./MintMusicToken.sol";

contract Streaming {
    MintMusicToken public mintMusicTokenAddress;
    constructor (address _mintMusicTokenAddress){
        mintMusicTokenAddress = MintMusicToken(_mintMusicTokenAddress);
    }

    function getLatestMusicToken()
        view
        public 
        returns(string[] memory )
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
            string[] memory musicTokenDatas = new string[](k);
            uint256 j = 0;

            for(uint256 i=_totalMusicToken; i>_totalMusicToken-k; i--) {
                    musicTokenDatas[j] = mintMusicTokenAddress.tokenURI(i);
                    j++;
            }

            return musicTokenDatas;
    }

    function getLatestMusicTokenAll()
        view
        public 
        returns(string[] memory )
    {
            uint256 _totalMusicToken = mintMusicTokenAddress.totalSupply();
            require(_totalMusicToken > 0, "There are no tokens in the contract.");
            string[] memory musicTokenDatas = new string[](_totalMusicToken);
            uint256 j = 0;

            for(uint256 i=_totalMusicToken; i>_totalMusicToken; i--) {
                    musicTokenDatas[j] = mintMusicTokenAddress.tokenURI(i);
                    j++;
            }

            return musicTokenDatas;
    }

    function getOldestMusicToken()
        view
        public
        returns(string[] memory)
    {
            uint256 _totalMusicToken = mintMusicTokenAddress.totalSupply();
            require(_totalMusicToken > 0, "There are no tokens in the contract.");
            string[] memory musicTokenDatas = new string[](_totalMusicToken);
            uint256 j = 0;

            for(uint256 i=0; i<_totalMusicToken; i--) {
                    musicTokenDatas[j] = mintMusicTokenAddress.tokenURI(i);
                    j++;
            }

            return musicTokenDatas;
    }
}