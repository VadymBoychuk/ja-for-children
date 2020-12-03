document.body.innerHTML = "learn Js arrays"

//шар судьбы

var phrases = [
    "Звучит неплохо",
    "Да, это определено надо сделать",
    "Не думаю, что это хорошая идея",
    "Может, не сегодня?",
    "Компьтер говорит нет"
]

console.log(phrases[Math.floor(Math.random() * phrases.length)]);

//дразнилка

var randomBodyParts = ["глаз", "нос", "череп"];
var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];

var randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

var randomInsult = "У тебя " + randomBodyPart + " словно " + randomAdjective + " " + randomWord + "!!!";

console.log(randomInsult);
console.log(["У тебя", randomBodyPart, "словно", randomAdjective, randomWord + "!!!"].join(" ")); // .join

// exercise 1

var randomBodyParts = ["грязный", "унылый", "вонючий"];
var randomAdjectives = ["кусок", "шмат", '"я не умею ругаться" недоносок'];
var randomWords = ["говна", "мяса", "обезьяны", "плазмы"];

var randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

var randomInsult = "Ты " + randomBodyPart + " " + randomAdjective + " " + randomWord + "!!!";

console.log(randomInsult);
console.log(["Ты", randomBodyPart, randomAdjective, randomWord + "!!!"].join(" ")); // .join

// exercise 2,3

var randomBodyParts = ["рука", "нога", "голова"];
var randomAdjectives = ["жирная", "глупая", "кривая"];
var randomBodyAnimals = ["хвост", "морда", "лапа", "яйца"]
var randomWords = ["слона", "жирафа", "коровы", "сурка", "таракана"];

var randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
var randomBodyAnimal = randomBodyAnimals[Math.floor(Math.random() * randomBodyAnimals.length)];
var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

var randomInsult = "У тебя " + randomBodyPart + " еще более " + 
    randomAdjective + ", чем " + randomBodyAnimal + " у " + randomWord;

console.log(randomInsult);
console.log(["У тебя", randomBodyPart, "еще более", 
    randomAdjective + ",", "чем", randomBodyAnimal, "у", randomWord].join(" ")); // .join

// exercise 4

let arr = [3, 2, 1];

console.log([arr[0], "больше, чем", arr[1], "больше, чем", arr[2]].join(" "));