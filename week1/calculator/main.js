const body = document.body;

document.onkeydown = function(e) {
    if (e.key === "Escape") {
        clr();
        document.querySelector('#input-1').focus();
   }
   else if(e.key === "Enter") {
       calc();
       document.querySelector('#input-2').focus();
   }
};

function calc() {
    const input1 = document.querySelector('#input-1');
    const input2 = document.querySelector('#input-2');
    const operation = document.querySelector('#my-select');

    if(input2.value == 0 && operation.value == 'divide') {
        alert('You cannot divide by 0!');
        return;
    }

    switch(operation.value) {
        case 'plus': input1.value = +input1.value + +input2.value; break; // Same as Number(input1.value)
        case 'minus': input1.value = +input1.value - +input2.value; break;
        case 'mult': input1.value = +input1.value * +input2.value; break;
        case 'divide': input1.value = +input1.value / +input2.value; break;
    }
    input2.value = '';

}

// It doesn't work if the function's name is clear() :? maybe a saved word?
function clr() {
    const input1 = document.querySelector('#input-1');
    const input2 = document.querySelector('#input-2');
    const operation = document.querySelector('#my-select');

    input1.value = 0;
    input2.value = 0;
    operation.value = 'plus';
}
