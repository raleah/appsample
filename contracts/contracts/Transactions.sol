//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Transactions {
    uint transactionCount;

    event transfer(address from, address to, uint amount, string message, uint timestamp, string keyword);

    struct transferStruct{
        address sender;
        address to;
        uint amount;
        string message;
        uint timestamp;
        string keyword;
    }

    transferStruct[] transactions;

    function sendToChain(address payable to, uint amount, string memory message, string memory keyword) public {
        transactionCount++;
        transactions.push(transferStruct(msg.sender, to, amount, message, block.timestamp, keyword));

        emit transfer(msg.sender, to, amount, message, block.timestamp, keyword);
    }

    function getAllTransactions() public view returns (transferStruct[] memory){
        return transactions;

    }

    function getTransactionCount() public view returns (uint256){
        return transactionCount;
    }
}