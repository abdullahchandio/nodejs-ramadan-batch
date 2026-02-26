// simple example
// for (let i = 0; i <= 5; i++) {
//     console.log(i + " this loop start at 1 and end at 5")
// }



// for (let i = 0; i<=10; i++){
//     if(i%2===0){
//         console.log(i)
//     }else{
//         console.log(i + " this is odd number")
//     }
// }

// problem one 

nums = [2, 7, 11, 15]
target = 9
function twoSum(nums, target){
    for(let i = 0; i < nums.length; i++){
        // neted loop
        for(let j=i+1; j < nums.length; j++){
          if(nums[i] + nums[j] == target){
            return [i, j]
          }
          console.log(nums[i], nums[j])
        }
    }


}
// call the function
console.log(twoSum(nums, target))


// if /else statement
// loop (for, while, do while)
// (+,-*,/,%,++,--)
// (=,==,===,!=,!==,>,<,>=,<=)
// logical operator (&&, ||, !)
// function declaration with return statement
// async function declaration with return statement
// callback function
// array method (map, filter, reduce, forEach, find,indeof,includes)


// problem two

// function AddtwoNumbers(num1, num2){
//     return num1 + num2
// }

// console.log(AddtwoNumbers(5, 10))

    // problem give a string find the longest 
    // substring without repeating characters
    // input: "abcabcbb"
    // output: 3 (abc)



//     function LonggestSubstring(s){
//         let set = new Set();
//         let left =0;
//         let maxLength = 0;


//         for(let right = 0; right<s.length; right++){
//             while(set.has(s[right])){
//                 set.delete(s[left]);
//                 left++;
//             }
//             set.add(s[right])
//                 maxLength = Math.max(maxLength, right - left + 1)
//             }
//             return maxLength;



// }


// // Function to find the length of the longest substring 
// // without repeating characters
// function LonggestSubstring(s){

//     // Set use kar rahe hain unique characters store karne ke liye
//     let set = new Set();

//     // Left pointer (window ka starting index)
//     let left = 0;

//     // Maximum length store karega
//     let maxLength = 0;

//     // Right pointer se string traverse karenge
//     for(let right = 0; right < s.length; right++){

//         // Agar current character already set me hai
//         // to left pointer move karenge jab tak duplicate remove na ho jaye
//         while(set.has(s[right])){
//             set.delete(s[left]); // left wala character remove karo
//             left++;              // left pointer aage badhao
//         }

//         // Current character set me add karo
//         set.add(s[right]);

//         // Window ka current length calculate karo
//         // aur maxLength update karo agar bada ho
//         maxLength = Math.max(maxLength, right - left + 1);
//     }

//     // Final maximum length return karo
//     return maxLength;
// }

// console.log(LonggestSubstring("12321"))






function longestSubstring(s) {
    let max= 0;

    for (let i = 0; i < s.length; i++) {
        let sub ="";
        for (let j=i ; j<s.length;j++){
            
            if(sub.includes(s[j])){
                break;
            }
            sub += s[j];
            max = Math.max(max, sub.length);
        }
        return max;
    }
}
console.log(longestSubstring("12321"))