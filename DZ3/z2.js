let name = prompt("Введите ваше имя");

function greeting() {
    let message = 'Доброго дня, ' + name + ' !';
    return message;
}

console.log("Введите ваше имя");
console.log(name);
console.log(greeting());