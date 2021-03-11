const body = document.body;


function func() {

    const input1 = document.querySelector('#input-1');
    const res = document.querySelector('#input-res');

    if(input1.value.length == 0) {
        res.value = '';
        return;
    }
    var inputs = input1.value.split(' ');
    if(inputs.length == 1 || inputs.length == 2) {
        var number = +inputs[0];
        if(isNaN(number)) return;
        res.value = number;
    }
    else if(inputs.length == 3 && inputs[2].length !== 0) {
        switch(inputs[1]) {
            case '+': res.value = +inputs[0] + +inputs[2]; break;
            case '-': res.value = +inputs[0] - +inputs[2]; break;
            case '*': res.value = +inputs[0] * +inputs[2]; break;
            case '/': res.value = +inputs[0] / +inputs[2]; break;
            case '^': res.value = Math.pow(+inputs[0], +inputs[2]); break;
            case '%': res.value = +inputs[0] % +inputs[2]; break;
        }
    }
    res.style.width = res.value.length + 1 + 'ch';
}

function calc() {
    const input1 = document.querySelector('#input-1');

    
    var inputs = input1.value.split(' ');
    
    if(inputs[2] == 0 && inputs[1] == '/') {
        alert('You cannot divide by 0!');
        return;
    }

    switch(inputs[1]) {
        case '+': input1.value = +inputs[0] + +inputs[2]; break;
        case '-': input1.value = +inputs[0] - +inputs[2]; break;
        case '*': input1.value = +inputs[0] * +inputs[2]; break;
        case '/': input1.value = +inputs[0] / +inputs[2]; break;
        case '^': input1.value = Math.pow(+inputs[0], +inputs[2]); break;
        case '%': input1.value = +inputs[0] % +inputs[2]; break;
    }
}

function clr() {
    const input1 = document.querySelector('#input-1');
    const input2 = document.querySelector('#input-res');

    input1.value = '';
    input2.value = 0;
}
