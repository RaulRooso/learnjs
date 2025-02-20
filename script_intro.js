console.log('hello script');

let i = 5;
i = 1 % 2;
console.log(i)
function hello(name) {
    return 'hello ' + name;
}
let greeting = hello('Raul');
console.log(greeting);

let goodbye = function (name) {
    return 'goodbye ' + name;
}

goodbye = (name) => {
    return 'goodbye ' + name;
}

goodbye = name => {
    return 'goodbye ' + name;
}

goodbye = name => 'goodbye ' + name;


let ferewell = goodbye('Raul')
console.log(ferewell)


let person = {
    name: 'Raul',
    age: 32,
    greeting() {
        console.log(this)
        return 'hello'
    },
    goodbye: () => {
        console.log(this)
        return 'goodbye'
    }
}

console.log(person.greeting());
console.log(person.goodbye());

function recursive(i) {
    console.log(i);
    if (i < 10) {
        recursive(i + 1);
    }
}

recursive(0);

//for lop 

let template = `hello 
world 
${person.name}
!!!`;
console.log(template);

console.log('õ'.length)
console.log('hello'.toLocaleLowerCase())

console.log(0xff);
console.log(015);
console.log(0o15); //sama vääärtus paremini arusaadav
console.log(100_000_000_000_000);

let array = [
    'amama',
    1,
    true,
    () => 'hello',
    { cat: 'Lutu' },
    [1, 2, 'muusika']
]

console.log(array[0]);
console.log(array[4]);
console.log(array[5][2]);

if (i < 10) {
    console.log('i on väiksem kui kümme');
}
else if (i > 10) {
    console.log('i on suurem juu');
}
let day = new Date().getDay();
console.log(day);

let anwser = '';
if (day == 0) {
    anwser = 'Pühapäev';
}
else if (day == 1) {
    anwser = 'Esmaspäev';
}
else if (day == 2) {
    anwser = 'Teisipäev';
}
else if (day == 3) {
    anwser = 'Kolmapäev';
}
else if (day == 4) {
    anwser = 'Neljapäev';
}
else if (day == 5) {
    anwser = 'Reede';
}
else if (day == 6) {
    anwser = 'Laupäev';
}


console.log(anwser);

switch (day) {
    case 0:
        anwser = 'Pühapäev';
        break;
    case 1:
        anwser = 'Esmaspäev';
        break;
    case 2:
        anwser = 'Teisipäev';
        break;
    case 3:
        anwser = 'Kolmapäev';
        break;
    case 4:
        anwser = 'Neljapäev';
        break;
    case 5:
        console.log('Tegelt on reede!');
    case 6:
        anwser = 'Pidupäev';
        break;
    default:
        anwser = 'WTF';
}
console.log(anwser);

for (let i = 1; i < 100_000_000; i *= 2) {
    console.log(i);
}

// let startSec = new Date().getSeconds;
// let currentSec = new Date().getSeconds;
// let count = 0;
// while (currentSec == startSec) {
//     currentSec = new Date().getSeconds;
//     console.log(count);
//     count++;
// }

// while(true){
// }
let a = 1;
while (a < 1) {
    console.log('did while stuf')
}

do {
    console.log('did do stuf');
} while (a < 1);

for (let key in person) {
    console.log(key, person[key]);
}


for (let value of array) {
    console.log(value);
}
for (let i = 0; i < 10; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
    if (i == 7) {
        break;
    }
}