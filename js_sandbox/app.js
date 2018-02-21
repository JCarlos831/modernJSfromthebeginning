// TEMPLATE LITERALS

const name = 'John';
const age = 31;
const job = 'Web Developer';
const city = 'Miami';
let html;

// Without Template Strings/Literals (es5)

html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li><ul>';

html = '<ul>' +
        '<li>Name: ' + name + '</li>' +
        '<li>Age: ' + age + '</li>' +
        '<li>Job: ' + job + '</li>' +
        '<li>City: ' + city + '</li>'+
        '</ul>';
        
function hello(){
    return 'hello';
}
        
// With Template Strings/Literals

html = `
        <ul>
            <li>Name: ${name}</li>
            <li>Age: ${age}</li>
            <li>Job: ${job}</li>
            <li>City: ${city}</li>
            <li>${2 + 2}</li>
            <li>${hello()}</li>
            <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
        </ul>
        `;

document.body.innerHTML = html;