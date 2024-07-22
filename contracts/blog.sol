// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Blog {
    struct Post {
        uint id;
        string title;
        string content;
        address author;
    }

    uint public postCount = 0;
    mapping(uint => Post) public posts;

    event PostCreated(
        uint id,
        string title,
        string content,
        address author
    );

    function createPost(string memory _title, string memory _content) public {
        postCount++;
        posts[postCount] = Post(postCount, _title, _content, msg.sender);
        emit PostCreated(postCount, _title, _content, msg.sender);
    }
}
