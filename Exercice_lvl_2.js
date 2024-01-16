//1. RANDOM ID SCRIPTS
function generateRandomId() {
    let characters2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId2 = '';

    for (let i = 0; i < 12; i++) {
        let randomIndex2 = Math.floor(Math.random() * characters2.length);
        randomId2 += characters2.charAt(randomIndex2);
    }

    return randomId2;
}

let randomId2 = generateRandomId();
console.log(randomId2);





function generateRandomId1() {
    let characters2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId3 = '';

    for (let i = 0; i < 24; i++) {
        let randomIndex3 = Math.floor(Math.random() * characters2.length);
        randomId3 += characters2.charAt(randomIndex3);
    }

    return randomId3;
}

let randomId3 = generateRandomId1();
console.log(randomId3);


//2. RANDOM HEXADECIMAL NUMBER


let randoNmb = Math.floor(Math.random()*16777216)

let hexa = "#" + randoNmb.toString(16).padStart(6, '0');

console.log(hexa)

//3. RANDOM RGB COLOR

let rgb1 = Math.floor(Math.random()*256);
let rgb2 = Math.floor(Math.random()*256);
let rgb3 = Math.floor(Math.random()*256);

let randomColor = `rgb(${rgb1},${rgb2},${rgb3})`;

console.log(randomColor);


let randomColor1 = "rgb(";

for (let i = 0; i < 3; i++) {
    let rgbComponent = Math.floor(Math.random() * 256); 
    randomColor1 += `${rgbComponent}`;
      
    if (i < 2) {
        randomColor1 += ",";
    }
}

randomColor1 += ")";

console.log(randomColor1);

//4. TO UPPER CASE NEW ARRAY

const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];
let country = [];

for (let i = 0; i<countries.length; i++){
    country.push(countries[i].toUpperCase());
}
console.log(country)

//5. ARRAY ELEMENTS LENGTH
const newArr = []
for(let i = 0; i < countries.length; i++){
    newArr.push(countries[i].length)
    
}
console.log(newArr)

//6. ARRAY OF ARRAYS

const finalArr = [];

for(let i = 0; i < countries.length; i++){
    finalArr.push([`${countries[i]}, ${country[i].slice(0,3)}, ${newArr[i]}`] )
}
console.log(finalArr)

//7. ARRAY FOR/IF
let countriesWithLand =[];

for(let i = 0; i < countries.length; i++){
    if(countries[i].toLowerCase().includes("land")){
    countriesWithLand.push(countries[i]);}

}

if(countriesWithLand.length > 0){
    console.log(countriesWithLand)
}else{
    console.log("All these countries are without land")
}

//8. COUNTRIES WITH "IA"

let countriesWithIA = [];

for(let i = 0; i < countries.length; i++){
    if(countries[i].toLowerCase().includes("ia")){
    countriesWithIA.push(countries[i]);}

}

if(countriesWithIA.length > 0){
    console.log(countriesWithIA)
}else{
    console.log("All these countries are without land")
}

//9. THE LONGEST COUNTRY

let maxLength = 0;
let countryWithMaxLength = '';

for (let i = 0; i < countries.length; i++) {
    const currentLength = countries[i].length;
    
    if (currentLength > maxLength) {
        maxLength = currentLength;
        countryWithMaxLength = countries[i];
    }
}

console.log(countryWithMaxLength);

//10. COUNTRIES WITH 5 CHARACTERS

let fiveCharCountries = [];

for (let i = 0 ; i< countries.length; i++){
    let fiveLettersCountries = countries[i].length;
    if(fiveLettersCountries === 5){
        maxLength = fiveLettersCountries;
        fiveCharCountries.push (countries[i]);
    }
}

console.log(fiveCharCountries)

//11. LONGEST WORD IN WEBTECHS

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

 

  let longestWebTech = '';

  for(let i = 0; i < webTechs.length; i++){
    let webTechsChar = webTechs[i].length;
  
    if(webTechsChar > maxLength){
        maxLength = webTechsChar;
        longestWebTech = webTechs[i];
    }
}

console.log(longestWebTech)

//12. WEBTECH ARRAY OF ARRAY

let webTechLength = [];
let webTechArr = [];

for(let i = 0; i < webTechs.length; i++){
    webTechLength.push(webTechs[i].length)
    
}
console.log(webTechLength);

for(let i = 0; i < webTechs.length; i++){
    webTechArr.push([`${webTechs[i]}, ${webTechLength[i]}`] )
}
console.log(webTechArr)

let webTechArr1 = [];

//13. MERN ACCRONYM

let mernStack = ["MongoDB", "Express", "React", "Node"];
let mern = [];



for(let i = 0 ; i<mernStack.length; i++){
    mern.push(mernStack[i].slice(0,1))
}
console.log(mern.join().replaceAll(",", ""))

//14. ITERATION WITH FOR LOOP

let array = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];

for (let i = 0; i< array.length; i++){
    console.log(array[i])
}

//15. REVERSE ORDER WITOUT REVERSE METHOD

let fruits = ['banana', 'orange', 'mango', 'lemon'];
let fruits1 = [] 
for(let i = fruits.length - 1; i >= 0; i--){
    fruits1.push(fruits[i])
}
console.log(fruits1)

//16. PRINT ARRAY

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
let fullStackArr = [].concat(...fullStack);

for (let i = 0; i < fullStackArr.length; i++){
    console.log(fullStackArr[i].toUpperCase())
}