function clickLink(e) {
    alert("I'm going to take you to " + e.innerHTML);
}

function focusButton(e) {
    e.target.style.backgroundColor = "#bde0fe";
}

function leaveFocusButton(e) {
    e.target.style.backgroundColor = "#ffc8dd";
}

function clickButton(e) {
    let button = e.target;
    button.innerHTML = "CLICKED!"
}

let anchors = document.getElementsByTagName('a');

for (let i = 0; i < anchors.length; i++) {
    anchor = anchors[i];
    anchor.addEventListener('click', clickLink, false);
}

let list = document.getElementsByTagName('ul')[0];
let lastItem = document.createElement('li');
let lastlink = document.createElement('a');
lastlink.innerHTML = "Durham College";
lastlink.href = "http://durhamcollege.ca";
lastItem.appendChild(lastlink);
list.appendChild(lastItem);

let buttons = document.getElementsByTagName('button');

for (let i = 0; i < buttons.length; i++) {
    button = buttons[i];
    button.addEventListener('mouseover', focusButton, false);
    button.addEventListener('mouseout', leaveFocusButton, false);
    button.addEventListener('click', clickButton, false);
}


let firstItem = document.getElementsByTagName('li')[0];

let firstItemLink = firstItem.firstChild.nextSibling;
//console.log(firstItemLink);
firstItemLink.href = "https://www.google.com";


let secondItem = document.getElementsByTagName('li')[1];

let secondItemLink = secondItem.firstChild.nextSibling;

secondItemLink.href = "https://w3schools.com";