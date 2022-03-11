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

        mapping (uint256 => uint256) public musicTokens;

        function mintMusicToken(string memory _metadata) 
                public 
        {
                uint256 musicTokenId = totalSupply() + 1;
                uint256 musicToken = uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender, musicTokenId, _metadata)));
                musicTokens[musicTokenId] = musicToken;
                _mint(msg.sender, musicTokenId);
                _setTokenURI(musicTokenId, _metadata);
        }
}