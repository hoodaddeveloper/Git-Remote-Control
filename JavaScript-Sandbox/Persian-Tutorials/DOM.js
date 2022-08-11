///// Entering the DOM /////

// The DOM is the structure of the web page.
// The DOM is the tree of elements that make up the web page.
// Document Object Model (DOM) is a programming interface for HTML and XML documents.

let header = document.getElementById("header");
header.style.color = "lightblue";

let content = document.getElementsByClassName("content");
content[0].style.color = "green";
content[1].style.color = "purple";
content[0].style.fontSize = "20px";
content[1].style.fontSize = "14px";

let paragraphs = document.getElementsByTagName("p");
paragraphs[0].style.fontStyle = "italic";
paragraphs[2].style.fontStyle = "italic";
