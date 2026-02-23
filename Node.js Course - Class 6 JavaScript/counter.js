let count = 0;

let counDisplay = document.getElementById("count");
let incBtn = document.getElementById("increment");
let decBtn = document.getElementById("decrement");


incBtn.onclick = function(){
    // count++;
    // count = count + 1;
    // count += 1;
    count++;
    counDisplay.innerHTML = count;
}
decBtn.onclick = function(){
    // count++;
    // count = count + 1;
    // count += 1;
    count--;
    counDisplay.innerHTML = count;
}