///// JavaScript Code for checking and Confirming Password

const check = function () {
  if (
    document.querySelector("#password").value ==
    document.querySelector("#confirm-password").value
  ) {
    document.querySelector("#message").style.color = "green";
    document.querySelector("#message").innerHTML = "Matching!";
  } else {
    document.querySelector("#message").style.color = "red";
    document.querySelector("#message").innerHTML = "Not Matching!";
  }
};

///// Practicing DOM with Form Elements

/* const form = document.querySelector("form");
form.firstElementChild.innerText = "New Title from DOM"; // Changing the title of the form (h1)
form.children[0].innerHTML = "<h5>New Title from DOM</h5>"; // Changing the tag of the first element in the form h1 to h5
form.lastElementChild.remove(); // Removing the last element of the form (reset button) */

/* const btn = document.querySelector("#button");
btn.forEach(btn => btn.style.background = "orange"); // Changing the background of all the buttons to red */