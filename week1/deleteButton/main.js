const body = document.body;
const ul = document.querySelector('#my-list');

function addItem() {
    const input = document.querySelector('#my-input');
    
    if(input.value.length !== 0) {
        const li = document.createElement('li');
        li.setAttribute('class', 'targets');
        li.innerText = input.value;
        ul.appendChild(li);

        const button = document.createElement('button');
        
        button.onclick = function() {removeItem(button.parentNode);};
        button.setAttribute('class', 'my-buttons');
        button.innerText = 'Delete';
        li.appendChild(button);
        
    }

    input.value = '';
}

function removeItem(el) {
    el.remove();
}
