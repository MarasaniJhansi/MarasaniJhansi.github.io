const btns = document.getElementsByClassName('btn');
const answerElement = document.getElementById('answer');
const errorElement = document.getElementById('error-text');
let expression = '';

function displayError(errorString) {
    errorElement.innerText = errorString;
}

Array.from(btns).forEach((btn) => {
    btn.addEventListener('click', (event) => {
        if (event.target.innerText == '=') {
            try {
                expression = eval(expression);
                displayError('');
            } catch (err) {
                displayError("Please Enter a valid expression");
            }
            answerElement.innerText = expression;
        } else if (event.target.innerText == 'AC') {
            expression = '';
            answerElement.innerText = 'Answer';
        } else if(event.target.innerText == "÷") {
            expression += '/';
        }
        else {
            expression += event.target.innerText;
            answerElement.innerText = expression;
        }
    })
});

const backspaceBtn = document.getElementsByClassName('btn-backspace')[0];
backspaceBtn.addEventListener('click', (event) => {
    expression = expression.slice(0, expression.length - 1);
    answerElement.innerText = expression;
});