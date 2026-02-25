let count = 0;

let counDisplay = document.getElementById("count");
let incBtn = document.getElementById("increment");
let decBtn = document.getElementById("decrement");


incBtn.onclick = function(){
    // count++;
    // count = count + 1;
    // count += 1;
    count++;
    if(count > 10){
        alert("Count cannot be greater than 10.");
       count = 10;
    }
    counDisplay.innerHTML = count;
}
decBtn.onclick = function(){
    // count++;
    // count = count + 1;
    // count += 1;
    count--;
    counDisplay.innerHTML = count;
}







// example 1
// let age = prompt("Please enter your age: ");

// if (age >= 18) {
//     console.log("You are an adult.");
//     alert("You are an adult.");
// }else {
//     console.log("You are under age .");
// }

// example 2


// let Marks = prompt("Please enter your marks: ");

// if(Marks >= 85){
//     alert("You got A grade.");
// }else if(Marks >= 70){
//     alert("You got B grade.");
// }else{
//     alert("You got C grade.");
// } 




// real time example
// agar Monday ho => school jana hai
// agar Tuesday ho => school jana hai
// agar Wednesday ho => school jana hai
// agar Thursday ho => school jana hai
// agar Friday ho => school jana hai
// agar Saturday ho => school nahi jana hai
// agar Sunday ho => school nahi jana hai

 
let isMember = false; // Change this to false to test the non-member case
let ticketPrice = isMember ? "$2.00" : "$10.00";
console.log("The ticket price is: " + ticketPrice);