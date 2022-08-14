///// JavaScript Code for checking and Confirming Password
const msg = document.querySelector("#message");
const check = check => {
  if (
    document.querySelector("#password").value ==
    document.querySelector("#confirm-password").value
  ) {
    msg.style.color = "green";
    msg.innerHTML = "<i>Matching!</i>";
  } else {
    msg.style.color = "red";
    msg.innerHTML = "<i>Not Matching!</i>";
  }
};

///// Practicing DOM with Form Elements

/* const form = document.querySelector("form");
form.firstElementChild.innerText = "New Title from DOM"; // Changing the title of the form (h1)
form.children[0].innerHTML = "<h5>New Title from DOM</h5>"; // Changing the tag of the first element in the form h1 to h5
form.lastElementChild.remove(); // Removing the last element of the form (reset button) */

/* const btn = document.querySelector("#button");
btn.forEach(btn => btn.style.background = "orange"); // Changing the background of all the buttons to red */