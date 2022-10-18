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

// let days=['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
// let weekends = ['Sat', 'Sun'];

// for( const weekend of weekends){
//   days.unshift(weekend);
// }
// console.log(days);


// let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
// let weekends = ['Sat', 'Sun'];

// days.unshift(...weekends);

// console.log(days)

// let scores=[1,2,3,4,6,8];
// let deletedScores = scores.splice(0, 3);//[1,2,3]
// console.log(deletedScores)
// console.log(scores) //[4,6,8]


// let products=['keyboard','Mouse','Pen','Moniter'];
// let colors=['Red','Green','Black'];
// let models=[2020,2022];
// for(let i=0;i<products.length;i++){
//   console.log("#".repeat(15));
//   console.log(`# ${products[i]}`);
//   console.log(`Colors:-`)
//   for(let j=0;j<colors.length;j++){
//     console.log(`${colors[j]}`);
//   }
//   console.log(`Models:-`)
//   for(let k=0;k<models.length;k++){
//     console.log(`${models[k]}`)
//   }
// }

// let products=['Pen',1,3,4,'Moniter','screen','watch'];
// for( let i=0;i<products.length;i++){
//   if(typeof products[i]==='number'){
//     continue; //شيل الجزء دا من اللوب
//   }
//   console.log(products[i]);
// }


// let products=['Pen',1,3,4,'Moniter','screen','watch'];
// for( let i=0;i<products.length;i++){
//   if(typeof products[i]==='number'){
//     break; //اقف
//   }
//   console.log(products[i]);
// }



// let products=['keyboard','Mouse','Pen','Moniter'];
// let colors=['Red','Green','Black'];
// let showCount=4;
// document.write(`<h1>${showCount}</h1>`);
// for(let i=0;i<showCount;i++){
//   document.write(`<div>`)
//   document.write(`<h3> [${i+1}] ${products[i]}</h3>`)
// for(let j=0;j<colors.length;j++){
//   document.write(`<p>${colors[j]}</p>`)
// }
// document.write(`<p> ${colors.join('|') }</p>`)
//   document.write(`</div>`)
// }

// mainLoop:for(let i=0;i<products.length;i++){
//   console.log(`${products[i]}`)
//   console.log("#".repeat(11))
// nestedLoop:for(let j=0;j<colors.length;j++){
//     console.log(`- ${colors[j]}`)
//     if(colors[j]==='green'){
//       console.log("good")
//       break;
//     }
//   }
// }

// let products=['Annn']



// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let myEmployees = [
//   "Amgad",
//   "Samah",
//   "Ameer",
//   "Omar",
//   "Othman",
//   "Amany",
//   "Samia",
//   "Anwar",
// ];
// myAdmins.length = myAdmins.indexOf("Stop");
// let header = `<h1>we have ${myAdmins.length} Admins</h1>
// <hr>`;
// document.write(header);
// let body = ``;
// for (let i = 0; i < myAdmins.length; i++) {
//   body += `
//   <div class=data>
//       <h3>the admin of team ${i + 1} is ${myAdmins[i]}</h3>
//       <h4>- team members</h4> `;
//   let z = 1;
//   for (let j = 0; j < myEmployees.length; j++) {
//     if (myAdmins[i][0] === myEmployees[j][0]) {
//       body += `<p>* ${z} ${myEmployees[j]}</p>`;
//       z += 1;
//     }
//   }
//   body += `<hr>
//   </div>`;
// }
// document.write(body);
// function generateYears(start,end,exclude){
// for(let i=start;i<=end;i++){
// if(i===exclude){
//   continue;
// }
// console.log(i)
// }
// }
// generateYears(1982,2021,2020);
// function calc(num1,num2){
//   return num1+num2;
// }
// let result=calc(10,30);
// console.log(result);

function generate(start,end){
  for(let i=start;i<=end;i++){
    con
  }
}