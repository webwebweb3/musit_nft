// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract MintMusicToken is  ERC721Enumerable, ERC721URIStorage  {
        constructor() ERC721("Musit NFT", "MNFT") {}

        function tokenURI(uint256 tokenId)
                public
                view
                override(ERC721, ERC721URIStorage)
                returns (string memory)
        {
                return super.tokenURI(tokenId);
        }

        function _beforeTokenTransfer(address from, address to, uint256 tokenId)
                internal
                override(ERC721, ERC721Enumerable)
        {
                super._beforeTokenTransfer(from, to, tokenId);
        }

        function _burn(uint256 tokenId) 
                internal 
                override(ERC721, ERC721URIStorage) 
        {
                super._burn(tokenId);
        }
        function supportsInterface(bytes4 interfaceId)
                public
                view
                override(ERC721, ERC721Enumerable)
                returns (bool)
        {
                return super.supportsInterface(interfaceId);
        }

        mapping (uint256 => string) public musicTokens;

        function mintMusicToken(string memory _metadata) 
                public 
        {
                uint256 musicTokenId = totalSupply() + 1;
                string memory musicToken = _metadata;
                musicTokens[musicTokenId] = musicToken;
                _mint(msg.sender, musicTokenId);
                _setTokenURI(musicTokenId, _metadata);
        }
        
        function getLatestMusicToken()
                view
                public 
                returns(string[] memory )
        {
                string[] memory musicTokenDatas = new string[](5);

                uint256 _totalMusicToken = totalSupply();
                require(_totalMusicToken > 0);
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
                uint256 j = 0;

                for(uint256 i=_totalMusicToken; i>_totalMusicToken-k; i--) {
                        musicTokenDatas[j] = tokenURI(i);
                        j++;
                }

                return musicTokenDatas;
        }
}