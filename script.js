document.write('<h1>JavaScript Assignment</h1>');

//LOOPS

// for loops
//example 1 - displays numbers from 1 to 10
for(let i = 0; i <= 10; i++) {
    console.log(i);
}

//example 2 - app to list all names stored in an array using different loops
let names = ['Faridah', 'Shamim', 'Asha', 'Taslim', 'Patricia'];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// //While Loop

let i = 0;
while( i < names.length) {
    console.log(names[i]);
    i++;
}

// //do loop

let a = 0
do {
  console.log(names[a]);
  a++;
}
while (a < names.length); 

//comparison operators

//tenary 
var height = 20;

height ? console.log('variable is defined') : console.log('variable is not defined');

//Other operators 
//MTN Mobile Money app to display new sending charges depending on the amount of money to be sent. 

var amount = 5000000;

if (amount == 500 && amount <= 2500) {
    console.log("The sending fee is 50");
} else if (amount >= 2501 && amount <= 5000){
    console.log("The sending fee is 150");
} else if (amount >= 5001 && amount <= 15000){
    console.log("The sending fee is 250");
} else if (amount >= 15001 && amount <= 30000){
    console.log("The sending fee is 300");
} else if (amount >= 30001 && amount <= 45000){
    console.log("The sending fee is 350");
} else if (amount >= 45001 && amount <= 60000){
    console.log("The sending fee is 400");
} else if (amount >= 60001 && amount <= 125000){
    console.log("The sending fee is 500");
} else if (amount >= 125001 && amount <= 250000){
    console.log("The sending fee is 600");
} else if (amount >= 250001 && amount <= 500000){
    console.log("The sending fee is 650");
} else if (amount > 500001){
    console.log("The sending fee is 750");
} else {
    console.log("Enter valid amount");
}


