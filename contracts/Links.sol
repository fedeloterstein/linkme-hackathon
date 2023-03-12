pragma solidity ^0.8.0;

contract Links {

    struct Link {
        string value;
        string key;
    }

    mapping(string => Link[]) links;

    function addLink(string memory handle, string memory value, string memory key) public {
        links[handle].push(Link(value, key));
    }

    function getLinks(string memory handle) public view returns (Link[] memory) {
        return links[handle];
    }
}
