let weight = prompt("Введедите массу тела:");
let speed = prompt("Введите скорость тела:");
alert("Кинетическая энергия тела:" + (weight * speed ** 4) / 2);
let correctResult = confirm("Верен ли результат?");
console.log(correctResult);
