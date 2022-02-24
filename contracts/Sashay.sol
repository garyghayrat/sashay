// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Sashay is ERC20, Ownable {
    constructor() ERC20("Sashay", "SASHA") {
        _mint(msg.sender, 1000000000000000000000);
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}

//Mumbai address 2-24-22 deployment: 0x8DB5Aa9964eB595148911e5dD84D3C8a4D5A19f5
