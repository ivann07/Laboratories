/*
ПЕРВЫЙ БЛОК ЗАДАНИЙ
*/

alert("Я – JavaScript!");  // Команда alert выводится с внешним скриптом.

let right; // Создадим переменную right
const TEAM = "Спартак"; // Создадим константу TEAM
right = TEAM; // Присвоим переменной right значение TEAM
alert(right); // выводим через alert


// Работа с константами
const Meal = "Яичница";
const Work = "Программист";
const City = "Москва";
const TRANSACTION_REJECTED = "Транзакция отменена";

// Запустим все функции, с помощью определенной
function launchFunks() {
    findLetterA();
    LessThan20();
    DividedBy3();
    Multiplication();
}

/*
КОНЕЦ ПЕРВОГО БЛОКА ЗАДАНИЙ
*/ 

/*
ВТОРОЙ БЛОК
*/

// Проверим фаила JavaScript
function isAjavaScript() {
    let input_file = document.getElementById("js_file_name");
    const Text = input_file.value.toString();
    if (Text !== "ECMAScript") {
        alert("Не определено \"ECMAScript\"!");
    } else {
        alert("Да, соответствует");
    }
    input_file.value = "";
}


// Определить, какой знак у числа
function findNumberSign() {
    let Num = document.getElementById("Number");
    const TEXT_VALUE = parseInt(Num.value);
    Num.value = "";
    if (TEXT_VALUE === 0) {
        alert("0");
        return;
    }
    else if (TEXT_VALUE < 0){
        alert("Negative");
        return;
    }
    alert("Positive");
}

// Теперь получим знак числа, используя prompt
function findNumberPrompt() {
    let Num = prompt('Enter a number: ', String(0));
    if (number > 0) {
        alert("Positive");
    } else if (number < 0) {
        alert("Negative");
    } else {
        alert("0");
    }
}

/*
КОНЕЦ ВТОРОГО БЛОКА ЗАДАНИЙ
*/

/*
ТРЕТИЙ БЛОК
*/

/*
Создадим форму для проверки логина и пароля
*/
function CheckSignInPassword() {
    let log = document.getElementById("login");
    let pass = document.getElementById("password");
    let passH5 = document.getElementById("password_h5");
    const log_contain = log.value;
    const pass_contain = pass.value;
    if ((log_contain === "Admin") && (passwordValue === "")) {
        passH5.style.visibility = "visible";
        pass.style.visibility = "visible";
    }
    if (log_contain !== "Admin") {
        alert("Данные для входа не верны");
        resetSignInObjects();
    }
    if (((log_contain === "Admin") && (pass_contain !== ""))) {
        if (pass_contain === "qwe123") {
            alert("Hello World!");
        }
        else {
            alert("Illegal password");
        }
        resetSignInObjects();
    }
}

// Зададим определенные значения  переменным в объекте
function SetSignInObject() {
    let log = document.getElementById("login");
    let pass = document.getElementById("password");
    let passH5 = document.getElementById("password_h5");
    log.value = "";
    pass.value = "";
    pass.style.visibility = "hidden";
    pass.style.visibility = "hidden";
}

// Вывод ошибки при входе в систему (после определения параметров объекта)
function SignIn_Cancelation() {
    const log_contain = document.getElementById("login").value;
    const pass_contain = document.getElementById("password").value;
    if ((log_contain !== "") || (pass_contain !== "")) {
        SetSignInObject();
        alert("Ошибка при входе в систему");
    }
}

// Проверка, нажата ли определенная клавиша в данный момент
function OnKeyPressed(keyCode, objectValue) {
    if ((keyCode === 27) && (objectValue !== "")) {
        SignIn__Cancelation()
    }
}

// Теперь выполним туже самую проверку на логин/пароль, используя prompt
function signInPrompt() {
    let log = prompt('Enter login: ', '');
    if (log === 'Admin') {
        let pass = prompt('Enter password: ', '');
        if (pass === 'qwe123') {
            alert( 'Hello, Admin!' );
        } else if (pass == null) { 
            alert( 'Ошибка при входе' );
        } else {
            alert( 'Некорректный пароль' );
        }
    } else if (log == null) {
        alert( 'Ошибка при входе!' );

    } else {
        alert( 'Введите корректные данные' );
    }
}

/*
КОНЕЦ ТРЕТЬЕГО БЛОКА ЗАДАНИЙ
*/

/*
ЧЕТВЕРТЫЙ БЛОК ЗАДАНИЙ
*/

// Используем вместо 'if' знак '?'
function AnotherWayOfWritingIf() {
    const Num1 = 1;
    const Num2 = 2;
    let Sum = "";
    (Num1 + Num2 < 4) ?  Sum = 'Меньше' : Sum = 'Больше';
    alert('Sum = ' + Sum);
}

// Используем вместо 'if..else' знак '?'
function AnotherWayOfWritingIfElse() {
    const log = "User";
    let contain = '';
    contain = (log === 'User') ? 'Hello' :
        (log === 'Admin') ? 'Nothing Else Matters' :
            (log === '') ? 'Некорректный логин' :
                '';
    alert('contain = ' + contain);
}

// Проверим находится ли число в определенном диапазоне значений
function HowOldAreYou() {
    const Age = 21;
    return ((Age >= 8) && (Age <= 45));
}

// Проверим, находится ли число за пределом определенного диапазона
function HowOldAreYou2() {
    const Age = 21;
     let Contain = false;
     Contain = !((Age >= 8) && (Age <= 45));
     Contain = ((Age < 8) || (Age > 45));
     return Contain;
}

// Используем вместо 'for' другую 'while'
function ChangeForToWhile() {
    let i = 0;
    while (i < 10) {
        alert("Number " + i + ".");
        i++;
    }
}

// Сделаем цикл, который будет повторять до тех пор, пока ввод не будет верен
function CountUntilOK() {
    let Number;
    do {
        Number = prompt("Enter a number, more than 1500! ", String(0));
    } while (Number <= 1500 && Number != null);
}

// Теперь выведем все простые числа из диапазона
function alertSimpleNumbers(begin, end) {
    let i = begin;
    primeWhile:
        while (i <= end) {
            for (let j = begin; j < i; j++) {
                if (i % j === 0) {
                    continue primeWhile;
                }
            }
            alert(i + " - простое число");
            i++;
        }
}

// Составим простейшую 'switch'  конструкцию, используя 'if..else'
function NoMoreSwitch() {
    let TEAM = "Спартак";
    if (TEAM === 'ID') {
        alert( 'Самый титулованный клуб!' );
        return;
    }
    else if ((TEAM === 'ЦСКА') || (TEAM === 'Шинник') || (TEAM === 'Локомотив') || (TEAM === 'Кубань')) {
        alert('Неее, лучше болейте за Спартак!');
    }
    alert('Спартак чемпион!');
}

// Теперь, сделаем обратное, и напишем вместо 'if..else' конструкции 'switch...case'
function SwitchIsOnDutyAgain() {
    let Number =+ prompt('Number?', '');
    switch (Number) {
        case 0:
            alert( 0 );
            break;
        case 1:
            alert( 1 );
            break;
        case 2:
            alert( 2 );
            break;
        case 3:
            alert( '2,3' );
            break;
    }
}

/*

КОНЕЦ ЧЕТВЕРТОГО БЛОКА

*/

// КОНЕЦ ПЕРВОЙ ЛАБОРАТОРНОЙ РАБОТЫ







