//SECTION 3 LECTURE 25 - TRAVERSING THE DOM
let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get Child Nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

// Node Types
// 1 - Element
// 2 - Attribute (Depricated)
// 3 - Text Node
// 8 - Comment
// 9 - Document Itself
// 10 - Doctype

// Get Children Element Nodes
val = list.children;
val = list.children[0];
val = list.children[1];
val = list.children[1].textContent = 'Hello';

// Children of Children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children;

// First Child
val = list.firstChild;
val = list.firstElementChild;

// Last Child
val = list.lastChild;
val = list.lastElementChild;

// Count Child Elements
val = list.childElementCount;

// Get Parent Node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;
// Get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);
