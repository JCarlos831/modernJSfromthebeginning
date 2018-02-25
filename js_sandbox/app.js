//SECTION 3 LECTURE 30 - KEYBOARD & INPUT EVENTS

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// Clear Input
taskInput.value = '';

// form.addEventListener('submit', runEvent);

// Key down
// taskInput.addEventListener('keydown', runEvent);

// Key up
// taskInput.addEventListener('keyup', runEvent);

// Key Press
// taskInput.addEventListener('keypress', runEvent);

// Focus
// taskInput.addEventListener('focus', runEvent);

// Blur
// taskInput.addEventListener('blur', runEvent);

// Cut
// taskInput.addEventListener('cut', runEvent);

// Paste
// taskInput.addEventListener('paste', runEvent);

// Input Event
// taskInput.addEventListener('input', runEvent);

// Change
select.addEventListener('change', runEvent);







function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);
    
    console.log(e.target.value);
    
    // heading.innerText = e.target.value;
    
    // Get Input Value
    // console.log(taskInput.value);
    
    // e.preventDefault();
}