(function () {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    let multiply = document.getElementById('multiply');
    let divide = document.getElementById('divide');
    let minus = document.getElementById('minus');
    let plus = document.getElementById('plus');
    let nine = document.getElementById('nine');
    let eight = document.getElementById('eight');
    let seven = document.getElementById('seven');
    let six = document.getElementById('six');
    let five = document.getElementById('five');
    let four = document.getElementById('four');
    let three = document.getElementById('three');
    let two = document.getElementById('two');
    let one = document.getElementById('one');
    let zero = document.getElementById('zero');
    let point = document.getElementById('point');
    let answer = "";

    buttons.forEach((button) => {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;                 /* global */
            screen.value += value;
        })
    })


    equal.addEventListener('click', function () {
        if (screen.value === '') {
            screen.value = "";
        } else {
            try {
                answer = eval(screen.value);                 /* try and catch error for calculator */
                screen.value = answer;
            } catch (error) {
                screen.value = "Error";
                console.log("Invalid expression:", error);
            }
        }
    });


    clear.addEventListener('click', function () {
        screen.value = "";
        answer = "";                                             /* clear button */
    });


    document.addEventListener('keydown', function (e) {
        

        if (e.key === 'Enter') {
            if (screen.value.trim() === '') {
                screen.value = "Error: No input";
            } else {
                try {                                                           /* keyboard enter*/
                    answer = eval(screen.value);
                    screen.value = answer;
                    equal.classList.add('hover-effect');

                    setTimeout(() => {
                        equal.classList.remove('hover-effect');
                    }, 300);
                } catch (error) {
                    screen.value = "Error";
                    console.log("Invalid Expression:", error);
                }
            }
        }

        if (e.key === 'Escape') {                         /* escape button */
            screen.value = "";
            answer = "";
            clear.classList.add('hover-effect');

            setTimeout(() => {
                clear.classList.remove('hover-effect');
            }, 300);
        }

        if (e.key === 'Backspace') {                         /* backspace button */
            screen.value = screen.value.slice(0, -1);
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === '*') {
            e.preventDefault();
            screen.value += '*';
            multiply.classList.add('hover-effect');        /* multiply button */

            setTimeout(() => {
                multiply.classList.remove('hover-effect');
            }, 300)
        }

        if (e.key === '/') {
            screen.value += '/';
            divide.classList.add('hover-effect');        /* multiply button */

            setTimeout(() => {
                divide.classList.remove('hover-effect');
            }, 300)
        }
        if (e.key === '+') {
            screen.value += '+';
            plus.classList.add('hover-effect');        /* multiply button */

            setTimeout(() => {
                plus.classList.remove('hover-effect');
            }, 300)
        }
        if (e.key === '-') {
            screen.value += '-';
            minus.classList.add('hover-effect');        /* multiply button */

            setTimeout(() => {
                minus.classList.remove('hover-effect');
            }, 300)
        }
        if (e.key === '9') {
            screen.value += '9';
            nine.classList.add('hover-effect');        /* multiply button */

            setTimeout(() => {
                nine.classList.remove('hover-effect');
            }, 300)
        }
        if (e.key === '8') {
            screen.value += '8';
            eight.classList.add('hover-effect');        /* multiply button */

            setTimeout(() => {
                eight.classList.remove('hover-effect');
            }, 300)
        }
        if (e.key === '7') {
            screen.value += '7';
            seven.classList.add('hover-effect');        /* multiply button */

            setTimeout(() => {
                seven.classList.remove('hover-effect');
            }, 300)
        }
        if (e.key === '6') {
            screen.value += '6';
            six.classList.add('hover-effect');        /* multiply button */

            setTimeout(() => {
                six.classList.remove('hover-effect');
            }, 300)
        }
        if (e.key === '5') {
            screen.value += '5';
            five.classList.add('hover-effect');        /* multiply button */

            setTimeout(() => {
                five.classList.remove('hover-effect');
            }, 300)
        }
        if (e.key === '4') {
            screen.value += '4';
            four.classList.add('hover-effect');        /* multiply button */

            setTimeout(() => {
                four.classList.remove('hover-effect');
            }, 300)
        }
        if (e.key === '3') {
            screen.value += '3';
            three.classList.add('hover-effect');        /* multiply button */

            setTimeout(() => {
                three.classList.remove('hover-effect');
            }, 300)
        }
        if (e.key === '2') {
            screen.value += '2';
            two.classList.add('hover-effect');        /* multiply button */

            setTimeout(() => {
                two.classList.remove('hover-effect');
            }, 300)
        }
        if (e.key === '1') {
            screen.value += '1';
            one.classList.add('hover-effect');        /* multiply button */

            setTimeout(() => {
                one.classList.remove('hover-effect');
            }, 300)
        }
        if (e.key === '0') {
            screen.value += '0';
            zero.classList.add('hover-effect');        /* multiply button */

            setTimeout(() => {
                zero.classList.remove('hover-effect');
            }, 300)
        }
        if (e.key === '.') {
            screen.value += '.';
            point.classList.add('hover-effect');        /* multiply button */

            setTimeout(() => {
                point.classList.remove('hover-effect');
            }, 300)
        }
    })
})();