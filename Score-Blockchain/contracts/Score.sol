//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.8;

contract Score {
    
    struct EmployeeCard{
        string name;
        address owner;
        uint256 experience;
        uint256 skills;
        uint256 education;
        uint256 jobOffer;
        uint256 interview;
    }

    mapping(address => string) public registerCompany; 

    EmployeeCard[] public employeeCards;

    function createCreditScore(string calldata name, uint256 experience,uint256 skills, uint256 education,uint256 jobOffer,uint256 interview) public returns(string memory) {
        EmployeeCard memory employeeCard  = EmployeeCard(name,msg.sender,experience,skills,education,jobOffer,interview);
        employeeCards.push(employeeCard);
        string memory CompanyName = "Employee Score Added";
        return CompanyName;
    }

    function updateCreditScore(string calldata name, uint256 experience,uint256 skills, uint256 education,uint256 jobOffer,uint256 interview) public returns(string memory) {
        EmployeeCard memory employeeCard  = EmployeeCard(name,msg.sender,experience,skills,education,jobOffer,interview);
        employeeCards.push(employeeCard);
        string memory CompanyName = registerCompany[msg.sender];
        return string(abi.encodePacked(CompanyName,"Employee Score Updated Score"));
    }

    function registerCompanyName(string calldata CompanyName) public returns(string memory) {
        registerCompany[msg.sender] = CompanyName;
        return "Company Registered";
    } 

    function CompaniesRegistered() public view returns(string memory) {
        return registerCompany[msg.sender];
    }

    function getScore(string calldata name) public view returns(EmployeeCard memory) {
        EmployeeCard memory employee;
        for(uint i=0;i<employeeCards.length;i++){
            if(keccak256(abi.encodePacked(employeeCards[i].name)) == keccak256(abi.encodePacked(name))){
                employee = employeeCards[i];
            }
        }
        return employee;
    }

}