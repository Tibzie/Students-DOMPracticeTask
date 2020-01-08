
const h1 = document.createElement("h1");
const firstHeading = document.createTextNode("Students");
h1.appendChild(firstHeading);

const container = document.getElementById("container");
container.appendChild(h1);

const subHeading = document.createElement("p");
const subheadingText = document
.createTextNode("The table of students can be found below.");
subHeading.appendChild(subheadingText);

container.appendChild(subHeading);

const italicSubheading = document.createElement("p");
const italicsubheadingText = document
.createTextNode("These are only primary school students.");
italicSubheading.appendChild(italicsubheadingText);

container.appendChild(italicSubheading);


const listHeading = document.getElementById("list-heading");
listHeading.classList.add("listheading");

const body = document.body;
body.style.backgroundColor = "#f8fcf9";

  