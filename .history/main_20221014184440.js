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
// let myFriend=["Ahmed","Sayed",'ali','fawzy','nnli','aawzy'];
// let newFriend=['samir','samer'];
// let schoolFriend=[1,2,4];
// let allFriends=myFriend.concat(newFriend,schoolFriend,'salma',[12,2]);
// console.log(allFriends);
// console.log(myFriend.slice(1,-1));
// console.log(myFriend.splice(0,3,-2))
// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
// let zero = 0 ;                 // 0
// let one = my.indexOf("Mazero") // 1
// let two = my.indexOf("Elham")  // 2
// let counter = 3;               // 3
// let four = my.indexOf("Gamal") // 4
// let five = my.indexOf("Ameer") // 5
// let _length = my.length        // 6
// // One
// console.log(my.slice(zero,four).reverse());
// // Two
// console.log(my.slice(one,counter).reverse())
// // Three
// let zzero = my[one]
// let _zzero = zzero.slice(two) //zero

// let el = my[two]
// let _el = el.slice(zero,two) // el

// console.log(`${_el}${_zzero}`) 
// //Four
// let _mazero = my[one]
// let r = _mazero.slice(four,five) // r

// let _Osama = my[counter]
// let O = _Osama.slice(zero,one)

// console.log(`${r}${O}`)


// let myFriend = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
// for(let i=0;i<myFriend.length;i++){
//   console.log(myFriend[i])
// }
// let myFriend=[1,2,'omnia','rafat'];
// let onlyNames=[];
// if(typeof myFriend[0]==="number"){
//   onlyNames.push(myFriend[0]);
// }
// console.log(onlyNames)
// let greetings = {
//   0: 'Hi',
//   1: 'Hello',
//   length: 2,
//   append() {
//     [].push.call(this, ...arguments);
//   },
// };
// greetings.append('Howdy', 'Bonjour');

// console.log(greetings);

let days=['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
let weekends = ['Sat', 'Sun'];

for( const weekend of weekends){
  
}