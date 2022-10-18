// let myFriends=['omnia','salma',"sayed",['Mary','salwa']];
// console.log(`Hello ${myFriends[0]}`);
// console.log(`Hello ${myFriends[3][1]}`);

// myFriends[1]="Gamal"
// console.log(myFriends);
// myFriends[3] = ["Sameh", "Ameer"];
// console.log(myFriends);
// //Replace of index
// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];
// myFriends.length = 2;

// console.log(myFriends);

//array method

// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

// console.log(myFriends);
//unshift=>add first 
//push=>add last 
//shift=>remove first 
//pop()=>remove last

// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

// console.log(myFriends);

// myFriends.unshift("Osama", "Nabil");

// console.log(myFriends);
// myFriends.push("Samah", "Eman");

// console.log(myFriends)

// let first = myFriends.shift();

// console.log(myFriends);

// console.log(`First Name Is ${first}`);

// let last = myFriends.pop();

// console.log(myFriends);

// console.log(`Last Name Is ${last}`);
 let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];

// console.log(myFriends);

// console.log(myFriends.indexOf("Ahmed"));//0 
// console.log(myFriends.indexOf("Ahmed", 2)); //4


// console.log(myFriends.lastIndexOf("Ahmed"));// 4 
// console.log(myFriends.lastIndexOf("Ahmed", -2));  //0



// console.log(myFriends.includes("Ahmed")); //true 
// console.log(myFriends.includes("Ahmed", 2));// true

// if (myFriends.lastIndexOf("Osama") === -1) {
//     console.log("Not Found");
//   }
  
//   console.log(myFriends.indexOf("Osama"));
//   console.log(myFriends.lastIndexOf("Osama"));
let myFriend=["Ahmed","Sayed"];
let newFriend=['samir','samer'];
let schoolFriend=[1,2,4];
let allFriends=myFriend.concat(newFriend,schoolFriend,'salma',[12,2]);
console.log(allFriends);
co