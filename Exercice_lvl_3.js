//1. COPY COUNTRIES ARRAY

const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]

  //2. COPY AND SORT ARRAY
  let sortedCountries = []

  for(let i = 0; i< countries.length; i++ ){
    
    sortedCountries.push(countries[i])
  }

  sortedCountries.sort()
  console.log(sortedCountries)

  //3. SORT WEBTECHS AND MERNSTACK
  const webTechs = [ 'HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']
  let mernStack = ["MongoDB", "Express", "React", "Node"];

  mernStack.sort()
  webTechs.sort()  
  console.log(mernStack)  
  console.log(webTechs)

  //4. EXTRACT COUNTRIES WITH 'LAND'

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

//5. COUNTRIES WITH THE HIGHEST NUMBER OF CHARACTER

let maxLength = 0;
let countryWithMaxLength = [];

for (let i = 0; i < countries.length; i++) {
    const currentLength = countries[i].length;
    
    if (currentLength > maxLength) {
        maxLength = currentLength;
        countryWithMaxLength.push(countries[i]) ;
    }
}

console.log(countryWithMaxLength)

//6. COUNTRIES WITH 4 CHARACTER

let forLetterCountries = []

for (let i = 0; i < countries.length; i++){
    const currentLength = countries[i].length;
    if (currentLength === 4){
        maxLength = currentLength;
        forLetterCountries.push(countries[i])
    }
}

console.log(forLetterCountries)

//7. COUNTRIES CONTAINING TWO OR MORE WORDS

let multipleWordsCountries = [];

for(let i = 0; i < countries.length; i++){
    if (countries[i].includes(" ")){
        multipleWordsCountries.push(countries[i])
    }
}

console.log(multipleWordsCountries)

//8. SORT AND CAPITALIZE

let capitalizedCountries = [];

for (let i = 0; i < countries.length; i++) {
    const sortedAndCapitalized = countries[i].toUpperCase();
    capitalizedCountries.push(sortedAndCapitalized);
}
capitalizedCountries.sort()
console.log(capitalizedCountries)