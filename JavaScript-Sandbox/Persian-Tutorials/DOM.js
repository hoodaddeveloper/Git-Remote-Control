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

paragraph[0].innerText = "Edited: This Paragraph edited by JS!"; // Change the text of the second paragraph element.

///// Second way to access the Elements by QuerySelector & QuerySelectorAll /////

header = document.querySelector("#header"); // Get the header element.
header.style.color = "purple"; // Change the color of the header.

content = document.querySelectorAll(".content"); // Get the first content element.
content.forEach(content => content.style.color = "green"); // Change the color of the content elements.

paragraph = document.querySelectorAll("p"); // Get the first paragraph element.
paragraph.forEach((paragraph) => (paragraph.style.color = "blue")); // Change the color of the paragraph elements.

let query1 = document.querySelector("body > div > div > div > ul > li:nth-child(2)"); // Get the third list item.
query1.style.color = "red"; // Change the color of the third list item.

let query2 = document.querySelector("body > div > div > div > ul > li:nth-child(3)"); // Get the fourth list item.
query2.style.color = "purple"; // Change the color of the fourth list item. */

///// Edit Elements /////

/* let lists = document.querySelectorAll("li");
lists.forEach(lists => lists.innerHTML += ` <span class="badge badge-warning">New</span>`
  lists.innerText += " You"
  lists.textContent += " The"
); */

///// Create Elements /////

let people = [
  { name: "Hoodad", new: false },
  { name: "Hessam", new: true },
  { name: "Hossein", new: false },
  { name: "Hasan", new: true },
];

function createNavbar() {
  let ul = document.querySelector("ul");
  people.forEach((people) => {
    if (people.new) {
      ul.innerHTML += `<li>${people.name} <span class="badge badge-warning">new</span></li>`;
    } else {
      ul.innerHTML += `<li>${people.name}</li>`;
    }
  });
}

/* createNavbar(); // Create the navbar.
ul.innerHTML = ""; // Clear the navbar. */

people.push({ name: "Hamed", new: false }, { name: "Hashem", new: true }); // Add new people to the navbar.
createNavbar(); // Create the navbar again.

let header = document.querySelector("#header"); // Get the header element.

console.log(header.getAttribute("id")); // Get the id of the header element.
header.setAttribute("title", "My Header");
