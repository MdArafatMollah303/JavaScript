//First challenge
let markHeight = 1.69;
let markMass = 78;

let johnHeight = 1.95;
let johnMass = 92;

let markBMI = markMass / (markHeight ** 2);
let johnBMI = johnMass / (johnHeight * johnHeight);

let markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI);
console.log(markHigherBMI);

//Second challenge
if (markBMI > johnBMI) {
    console.log('Marks BMI is higher than Johns BMI');
}
else {
    console.log('Johns BMI is higher than Marks BMI')
}

console.log(`Marks BMI ${markBMI} is higher than john BMI ${johnBMI}!`)

//third challenge
/*let Dolphins = 96;
let Dolphins1 = 108;
let Dolphins2 = 89;

let Kolas = 88;
let Kolas1 = 91;
let Kolas2 = 110;

let dolphinsAverage = (Dolphins + Dolphins1 + Dolphins2) / 3;
let koalasAverage = (Kolas + Kolas1 + Kolas2)/3;
console.log(dolphinsAverage, koalasAverage);

if (dolphinsAverage > koalasAverage) {
    console.log('Dolphins Average is greater');
}
else if (koalasAverage > dolphinsAverage) {
    console.log('Koalas Average is higher')
}
else {
    console.log('there is an error on claculation')
}*/
//Bonus 1
let dolphins = (97 + 112 + 101) / 3;
let Koalas = (109 + 95 + 123) / 3;
console.log(dolphins, Koalas);

if (dolphins > Koalas && dolphins >= 100) {
    console.log('dolphins is win the trophy');
}
else if (Koalas > dolphins && Koalas >= 100) {
    console.log('koalas is win the match')
}
else {
    console.log('seems like it is a draw match')
}
//bonus 2
let dolphinsScore = (97 + 112 + 101) / 3;
let koalasScore = (109 + 95 + 106) / 3;
console.log(dolphinsScore, koalasScore);

if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
    console.log('Dolphins wins the trophy');
}
else if (koalasScore > dolphinsScore && koalasScore >= 100) {
    console.log('koalas win the trophy');
}
else if (dolphinsScore === koalasScore && dolphinsScore>= 100 && koalasScore>= 100) {
    console.log('match is draw');
}
else {
    console.log('match retaine due to rain');
}
//typeof
let a;
console.log(typeof a);
let b = null;
console.log(typeof b);

let number = '5'-9;
console.log(number);
console.log(typeof (number));
