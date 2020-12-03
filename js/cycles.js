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