function f1() {
        var num = document.getElementById('number_input');
        num.value = num.value.slice(0, -1);
    }

    function f2() {
        var num1 = document.getElementById('number_input');
        num1.value = Math.floor(Math.sqrt(num1.value) * 1000000) / 1000000;
    }

    function f3() {
        var num2 = document.getElementById('number_input');
        num2.value = num2.value * -1;
    }

    function f4() {
        var num_input = document.getElementById('number_input');
        var factorial = 1;
        for (var i = 1; i <= num_input.value; ++i) {
            factorial *= i;
        }
        num_input.value = factorial;
    }

    function f5() {
        var num3 = document.getElementById('number_input');
        num3.value = Math.floor(num3.value * num3.value * 1000000) / 1000000;
    }

    function f6() {
        var num4 = document.getElementById('number_input');
        num4.value *= Math.PI;
    }

    function f7() {
        var num5 = document.getElementById('number_input');
        num5.value = Math.floor(Math.cbrt(num5.value) * 1000000) / 1000000;
    }

    function f8() {
        var num6 = document.getElementById('number_input');
        num6.value = Math.floor(num6.value * num6.value * num6.value * 1000000) / 1000000;
    }

    function f9() {
        var num7 = document.getElementById('number_input');
        num7.value = '1/' + '(' + num7.value + ')';
    }

    function f10() {
        var num8 = document.getElementById('number_input');
        num8.value = '(' + num8.value + ')' + '*';
    }