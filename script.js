// 1. Write code to allow visitors of the page to customize it to their liking. There is a
// form on the page that accepts a name (to be used in a greeting when the user visits
// the page) and a color picker to allow the user to choose their preferred background
// color/foreground color combination. Write the necessary code to capture these values
// when the form is submitted (prevent the default action on the form submission button to
// achieve this) and store these values in localStorage (so that it persists on the user’s
// computer and their preferences are saved indefinitely). Next, write a function to apply
// the preferences if they have been set and call it each time the page loads. You may
// also want to call this function again when the user saves their preferences to
// immediately apply them. Make sure you also notify the user somehow that the preferences
// were saved.
let nameInput = document.getElementById("name");
let greeting = document.getElementById("greeting");
let backgroundColor = document.getElementById("background-color");
let body = document.querySelector("body");
let textColor = document.getElementById("foreground-color");
let form = document.getElementById("preferences-form");

form.addEventListener("submit", clickListener);

function clickListener(event) {
  event.preventDefault();
  alert("Presets saved, press OK to continue");
  greeting.innerText = "Hello " + nameInput.value;
  body.style.backgroundColor = backgroundColor.value;
  body.style.color = textColor.value;
  localStorage.setItem("greeting", nameInput.value);
  localStorage.setItem("backgroundColor", backgroundColor.value);
  localStorage.setItem("textColor", textColor.value);
}
let greetingStored = localStorage.getItem("greeting");
let background = localStorage.getItem("backgroundColor");
let text = localStorage.getItem("textColor");

function setUpDefaultState() {
  if (greetingStored != null) {
    greeting.innerText = "Hello " + greetingStored;
  } else {
  }
  if (background != null) {
    body.style.backgroundColor = background;
  } else {
  }
  if (text != null) {
    body.style.color = text;
  } else {
  }
}
setUpDefaultState();
