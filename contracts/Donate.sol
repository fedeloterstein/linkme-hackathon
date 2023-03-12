//SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Donate is Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    uint256 public fee = 5;
    uint256 public basicDonation = 0.013 ether;
    uint256 public totalDonations = 0;
    uint256 public amountTransacted = 0;
    uint256 public totalCommissions = 0;

    mapping(address => uint) public countDonations;
    
    event NewDonatation(address _from, address _to, uint256 _amount);
 
    function donate(address payable _to) public payable {
        require(msg.value > basicDonation);
        uint256 _fee = (msg.value / 100) * fee;
        payable(_to).transfer(msg.value - _fee);
        countDonations[_to] = countDonations[_to] + 1;
        totalDonations = totalDonations + 1;
        totalCommissions = totalCommissions + _fee;
        amountTransacted = amountTransacted + msg.value;
        emit NewDonatation(msg.sender, _to, msg.value);
    }

    function withdraw() public onlyOwner {
        uint256 amount = address(this).balance;

        (bool success, ) = msg.sender.call{value: amount}("");
        require((success && amount > 0), "Failed to withdraw Matic");
    }

    function setFee(uint256 _newFee) external onlyOwner {
        fee = _newFee;
    }

    function setBasicDonation(uint256 _basicDonation) external onlyOwner {
        basicDonation = _basicDonation;
    }

    function getTotalDonationsByAddress(address _address) public view returns (uint256) {
        return countDonations[_address];
    }
}
