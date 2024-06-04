const inputValue = document.getElementById('inputValue');
const addButton = document.getElementById('addButton');
const countButton = document.getElementById('countButton');
const result = document.getElementById('result');
const truthyValuesContainer = document.getElementById('truthyValues');
const error = document.getElementById('error');

let arr = [1, 0, 'hello', '', undefined, null, true, false];

addButton.addEventListener('click', () => {
    const value = inputValue.value.trim();
    if (value === '') {
        error.textContent = 'Please enter a value!';
    } else {
        arr.push(value);
        inputValue.value = '';
        error.textContent = '';
    }
});

countButton.addEventListener('click', () => {
    const truthyCount = arr.filter(Boolean).length;
    result.textContent = `Number of truthy values: ${truthyCount}`;

    truthyValuesContainer.innerHTML = '';

    arr.filter(Boolean).forEach(value => {
        const div = document.createElement('div');
        div.classList.add('value');
        div.textContent = value;
        truthyValuesContainer.appendChild(div);
    });
});