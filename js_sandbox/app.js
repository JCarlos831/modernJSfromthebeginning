//SECTION 3 LECTURE 26 - CREATING ELEMENTS

// Create Element

const li = document.createElement('li');

// Add Class

li.className = 'collection-item'

// Add ID

li.id = 'new-item';

// Add Attribute

li.setAttribute('title', 'New Item');

// Create Text Node and Append

li.appendChild(document.createTextNode('Hello World'));

// Create New Link Element

const link = document.createElement('a');

// Add Classes

link.className = 'delete-item secondary-content';

// Add icon html

link.innerHTML = '<i class="fa fa-remove"></i>';

//Append Link into li
li.appendChild(link);

// Append li as child to ul

document.querySelector('ul.collection').appendChild(li);

console.log(li);
