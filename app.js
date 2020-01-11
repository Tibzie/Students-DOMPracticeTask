// Heading 1

const h1 = document.createElement("h1");
const firstHeading = document.createTextNode("Students");
h1.appendChild(firstHeading);

const container = document.getElementById("container");
container.appendChild(h1);


// Subheading
const subHeading = document.createElement("p");
const subheadingText = document
    .createTextNode("The table of students can be found below.");
subHeading.appendChild(subheadingText);

container.appendChild(subHeading);

// Italic subheading
const italicSubheading = document.createElement("p");
const italicsubheadingText = document
    .createTextNode("These are only primary school students.");
italicSubheading.appendChild(italicsubheadingText);
italicSubheading.style.fontStyle = "italic";

container.appendChild(italicSubheading);

// List heading
const listHeading = document.getElementById("list-heading");
listHeading.classList.add("list-heading");

// Body
const body = document.body;
Object.assign(body.style, {backgroundColor: "#f8fcf9", padding: "1em"});

// Unordered list
const ul = document.createElement("ul");

let fewHobbies = [ "Stamps", "Skateboarding", "Skiing", "Drawing animals"];
for(let i=0; i<fewHobbies.length; i++) {
    let item = document.createElement("li");
    let text = document.createTextNode(fewHobbies[i]);
    item.appendChild(text);
    ul.appendChild(item);
}
body.appendChild(ul);


// Table
const students = [
    { id: 1, name: "Peter", gender: "male", grade: 6, hobby: "stamps", age: 14 },
    { id: 2, name: "Mariah", gender: "female", grade: 5, hobby: "stamps", age: 13 },
    { id: 3, name: "Joseph", gender: "male", grade: 6, hobby: "fishing", age: 14 },
    { id: 4, name: "Katie", gender: "female", grade: 7, hobby: "playing videogames", age: 15 },
    { id: 5, name: "Jennifer", gender: "female", grade: 6, hobby: "skiing", age: 14 },
    { id: 6, name: "Yesica", gender: "female", grade: 7, hobby: "badminton", age: 15 },
    { id: 7, name: "Greg", gender: "male", grade: 4, hobby: "drawing animals", age: 12 },
    { id: 8, name: "Steven", gender: "male", grade: 5, hobby: "skateboarding", age: 13 },
    { id: 9, name: "Steve", gender: "male", grade: 7, hobby: "skateboarding", age: 15 }
];

const table = document.createElement("table");
const data = Object.keys(students[0]);

function tableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);

        th.style.textTransform = "uppercase";
    }
}

function populatingTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

tableHead(table, data);
populatingTable(table, students);
document.body.appendChild(table);

Object.assign(table.style, {padding: "2em", borderSpacing: "20px", textAlign: "center"});