// ADDING ITEMS TO START AND END OF LIST
let list = document.getElementsByTagName("ul")[0];
// Get the <ul> element

// ADD NEW ITEM TO END OF LIST
let newLastItem = document.createElement('li');
let newTestLast = document.createTextNode('half and half cream');
newLastItem.appendChild(newTestLast);
list.appendChild(newLastItem);
let newFirstItem = document.createElement('li');
let newTestFirst = document.createTextNode('french vanilla');
newFirstItem.appendChild(newTestFirst);
list.insertBefore(newFirstItem, list.firstChild); // To append in as first we have to use insertBefore. 
// Create element
// Create text node
// Add text node to element
// Add element end of list

// ADD NEW ITEM START OF LIST
// Create element
// Create text node
// Add text node to element
// Add element to list


let listItems = document.getElementsByTagName('li');
// All <li> elements

// ADD A CLASS OF COOL TO ALL LIST ITEMS
// Counter variable
// Loop through elements
// Change class to cool
let i;
for (i = 0; i < listItems.length; i++) {
    listItems[i].className = 'cool';
}


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// h2 element
// h2 text
// No. of <li> elements
// Content
// Update h2 using innerHTML (not textContent) because it contains markup

let h2 = document.querySelector('h2');
let textContent = h2.firstChild.nodeValue;

let count = 0;
let number = 0;

let totalItems = listItems.length;

let newHeading = textContent + '<span>' + totalItems + '</span>';

h2.innerHTML = newHeading;

