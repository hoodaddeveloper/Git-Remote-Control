///// Entering the DOM /////

// The DOM is the structure of the web page.
// The DOM is the tree of elements that make up the web page.
// Document Object Model (DOM) is a programming interface for HTML and XML documents.

///// First way to access the Elements /////

/* let header = document.getElementById("header"); // Get the header element.
header.style.color = "lightblue"; // Change the color of the header.

let content = document.getElementsByClassName("content"); // Get all the content elements.
content[0].style.color = "green"; // Change the color of the first content element.
content[1].style.color = "purple"; // Change the color of the second content element.
content[0].style.fontSize = "20px"; // Change the font size of the first content element.
content[1].style.fontSize = "14px"; // Change the font size of the second content element.

let paragraph = document.getElementsByTagName("p"); // Get all the paragraph elements.
paragraph[0].style.fontStyle = "italic"; // Change the font style of the first paragraph element.
paragraph[2].style.fontStyle = "italic"; // Change the font style of the third paragraph element.

paragraph[0].innerText = "Edited: This Paragraph edited by JS!"; // Change the text of the second paragraph element. */

///// Second way to access the Elements by QuerySelector & QuerySelectorAll /////

header = document.querySelector("#header"); // Get the header element.
header.style.color = "purple"; // Change the color of the header.

content = document.querySelectorAll(".content"); // Get the first content element.
content.forEach(content => content.style.color = "green"); // Change the color of the content elements.

paragraph = document.querySelectorAll("p"); // Get the first paragraph element.
paragraph.forEach((paragraph) => (paragraph.style.color = "blue")); // Change the color of the paragraph elements.
