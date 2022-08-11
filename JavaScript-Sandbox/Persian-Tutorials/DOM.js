///// Entering the DOM /////

// The DOM is the structure of the web page.
// The DOM is the tree of elements that make up the web page.
// Document Object Model (DOM) is a programming interface for HTML and XML documents.

///// First way to access the Elements /////

let header = document.getElementById("header"); // Get the header element.
header.style.color = "lightblue"; // Change the color of the header.

let content = document.getElementsByClassName("content"); // Get all the content elements.
content[0].style.color = "green"; // Change the color of the first content element.
content[1].style.color = "purple"; // Change the color of the second content element.
content[0].style.fontSize = "20px"; // Change the font size of the first content element.
content[1].style.fontSize = "14px"; // Change the font size of the second content element.

let paragraphs = document.getElementsByTagName("p"); // Get all the paragraph elements.
paragraphs[0].style.fontStyle = "italic"; // Change the font style of the first paragraph element.
paragraphs[2].style.fontStyle = "italic"; // Change the font style of the third paragraph element.

paragraphs[0].innerText = "Edited: This Paragraph edited by JS!"; // Change the text of the second paragraph element.

///// Second way to access the Elements by QuerySelector & QuerySelectorAll /////