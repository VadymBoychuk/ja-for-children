document.body.innerHTML = "learn Js objects"

// exercise 1

var scores = {
    "Коля": 0,
    "Вася": 0,
    "Петя": 3
};

scores["Вася"] += 5;

console.log(scores);

// exercise 2

var myCrazyObject = {
    "name": "Нелепый объект",
    "some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
    "random animal": "Банановая акула"
};

console.log(myCrazyObject ["some array"][2].number);