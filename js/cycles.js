document.body.innerHTML = "learn Js cycles"

var name = "";
if (name === "Вадим") {
    console.log("Привет мне");
}   else if (name === "Владимир") {
    console.log("Привет, папа");
}   else if (name === "Любовь") {
    console.log("Привет, мама");
}   else {
    console.log("Привет, незнакомец");
}

// cycles

var sheepCounted = 0;
while (sheepCounted < 10) {
    console.log("Посчитано овец: " + sheepCounted + "!");
        sheepCounted++;
}
console.log("Хрррррррррр-псссс");
//----------
for (var sheepCounted2 = 0; sheepCounted2 < 10; sheepCounted2++ ) {
    console.log("Посчитано овец: " + sheepCounted2 + "!");
}
console.log("Хрррррррррр-псссс");

//--------------------

var animals = ["лев", "флвминго", "белый медведь", "удав"];
    for (var i = 0; i < animals.length; i++) {
        console.log("В этом зоопарке есть " + animals[i] + ".");
}

//exercise

for (var i = 3; i < 10000; i = i * 3) {
    console.log(i)
}
// или
var x = 3;
while (x < 10000) {
    console.log(x);
        x *= 3;
}

//exercise 1

var animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];
    for (var i = 0; i < animals.length; i++) {
        animals[i] = animals[i] + " - прекрасное животное";
    }
console.log(animals);

//exercise 2

var alphabet = "абвгдеёжзийклмнопрстухфцчшщъыьэюя";
var randomString = "";

var i = 0;
while (i < 6) {
    randomString += alphabet[Math.floor(Math.random() * alphabet.length)]
        i++
}

console.log(randomString);

//exercise 3

var input = "javascript is awesome";
var output = "";

for (var i = 0; i < input.length; i++) {
    if (input[i] === "a") {
        output += "4"
    } else if (input[i] === "a") {
        output += "4"
    } else if (input[i] === "e") {
        output += "3"
    } else if (input[i] === "i") {
        output += "1"
    } else if (input[i] === "o") {
        output += "0"
    } else {output += input[i]}
}

console.log(output);