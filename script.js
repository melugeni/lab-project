document.addEventListener("DOMContentLoaded", function() {   
    const display = document.getElementById('display');   
    const buttons = Array.from(document.getElementsByClassName('button'));   
    const MAX_DIGITS = 10;   
 
    buttons.map(button => {   
        button.addEventListener('click', (e) => {   
            const value = e.target.innerText;   
            if (value === 'C') {   
                display.innerText = '0';   
            } else if (value === '=') {   
                try {   
                    if (display.innerText.includes('/0')) {   
                        display.innerText = 'Error';   
                    } else { 
let result = eval(display.innerText).toString();   
                        if (result.length > MAX_DIGITS) {   
                            result = result.slice(0, MAX_DIGITS);   
                        }   
                        display.innerText = result;   
                    }   
                } catch {   
                    display.innerText = 'Error';   
                }   
            } else {   
                if (display.innerText.length < 15) {   
                    if (display.innerText === '0') {   
                        display.innerText = value;   
                    } else {   
                        display.innerText += value;   
                    }   
                }   
            }   
        });   
    });   
});