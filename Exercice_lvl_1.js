
//1. 0-10 WITH FOR/WHILE/DO WHILE LOOPS

/*  
for (let i = 0; i <= 10; i++){
    console.log(i)
}

let i = 0
while(i<=10){
    console.log(i)
    i++
}


let k = 0

do{
    console.log(k)
    k++
} while (k<=10)
*/

//2. 10-0 FOR/WHILE/DO WHILE LOOPS

/*
for (let i = 10; i >= 0; i--){
    console.log(i)
}

let i = 10
while(i>=0){
    console.log(i)
    i--
}

let k = 10

do{
    console.log(k)
    k--
} while (k>=0)
*/
//3. FOR LOOP ITERATION

/*
let n = 10
for (i = 0; i <= n; i++ ){
    console.log(i);
}
*/

//4. # LOOP
/*
for (let i = 1; i <= 7; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
        line += '#';
    }
    console.log(line);
}
*/

//5. MULTIPLY LOOPS

for(i=0; i<= 10; i++){
    console.log(`${i} * ${i} = ${i*i}`)
}

//6. SQUARE & CUBES CALCULATION LOOP

console.log("i    i^2   i^3");

for (let i = 0; i <= 10; i++) {
    let iSquared = i ** 2;
    let iCubed = i ** 3;
    
    console.log(`${i}    ${iSquared}    ${iCubed}`);
}

//7. EVEN NUMBERS 0-100

for(b=0; b<101; b=b+2){
    console.log(b)
}

//8. ODD NUMBERS 0-100

for(m=1; m<101; m=m+2){
    console.log(m)
}

//9. PRIME NUMBERS 0-100
/*function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log("Prime numbers between 0 and 100:");

for (let n = 0; n <= 100; n++) {
    if (isPrime(n)) {
        console.log(n);
    }
}
*/

//10. SUMS OF ALL NUMBERS

let sum = 0
for(let i =0; i<101; i++){
    sum = sum + i
    
}
console.log(sum)

//11. SUM OF ALL EVEN AND ODDS 
let numb = 0
for(let z = 0; z<101; z=z+2){
    numb = numb + z
    
}
console.log(numb)

let num = 0
for(let z = 1; z<101; z=z+2){
    num = num + z
    
}
console.log(num)

//12. BOTH IN THE SAME LOOP

let sumEvens = 0;
let sumOdds = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEvens += i;
    } else {
        sumOdds += i;
    }
}

const resultArray = [sumEvens, sumOdds];
console.log(resultArray);

//13. ARRAY OF RANDOM NUMBERS

let rando = Math.floor(Math.random()*11)
let arr = []

console.log(rando)

for (let i=1; i<6; i++){
    arr.push(rando*i)
}
console.log(arr)

//14. UNIQUE NUMBER SCRIPT

let arr1= []

while (arr1.length < 5) {
    let rando = Math.floor(Math.random() * 11);
    
    
    if (!arr1.includes(rando)) {
        arr1.push(rando);
    }
}

console.log(arr1)

//15. SMALL SCRIPT 6 RANDOM CHARACTERS

function generateRandomId() {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';

    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        randomId += characters.charAt(randomIndex);
    }

    return randomId;
}

let randomId = generateRandomId();
console.log(randomId);



