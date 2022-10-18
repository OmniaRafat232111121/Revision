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

// function generate(start,end){
//   for(let i=start;i<=end;i++){
//     console.log(i);
//     if(i===16){
//       return;
//     }
//   }
// }
// generate(10,20)


// function removeDuplicate(arr){
//   var result=[];
//   arr.forEach(element => {
//     if(result.includes(element)){
//       return;
//     }
//     result.push(element);
//   });
//   return result;
// }
// console.log(removeDuplicate([1,2,3,1,6,1]));


//sum of array
// function sum(...numbers){
//   let results=0;
//   for(let i=0;i<numbers.length;i++){
//     results+=numbers[i]
//   }
//   return results;
// }
// console.log(sum(10,20,30));

// function calc(...numbers){
//   let result=0;
//   for(let i=0;i<numbers.length;i++){
//     result+=numbers[i];
//   }
//   return result;
// }
// console.log(calc((1,2,3)));
// function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk){
//   document.write(`<div>`);
//   document.write(`<h2>Welcome, ${us}</h2>`);
//   document.write(`<p>Age: ${ag}</p>`);
//   document.write(`<p>Hour Rate: $${rt}</p>`);
//   if(show==='yes'){
//     if(sk.length>0){
//       document.write(`<p>Skills: ${sk.join(" | ")}</p></p>`)
//     }else{
//       document.write(`<p>No skills</p>`)
//     }
//     document.write(`</div>`)
//     {

//     }
//   }
// }
// console.log(showInfo("Osama", 38, 20, "yes", "Html", "CSS"));


// function showDetails(k, l, f) {
//   document.write(`<div>`)
//   for (let i = 0; i < arguments.length; i++) {
//     typeof arguments[i] === 'string'
//       ? (us = arguments[i])
//       : typeof arguments[i] === 'number'
//       ? (ag = arguments[i])
//       : typeof arguments[i] === 'boolean' && arguments[i] === true
//       ? (statue = 'Available')
//       : (statue = 'Not Available')}
//   document.write(`<h1>Hello ${us}, Your Age Is ${ag}, You Are ${statue} For Hire</h1>`,)
//   document.write(`</div>`)}
// showDetails('Waheed', 23, true) // Hello Waheed, Your Age Is 38, You Are Available For Hire
// showDetails(23, 'Waheed', true) // Hello Waheed, Your Age Is 38, You Are Available For Hire
// showDetails(true, 23, 'Waheed') // Hello Waheed, Your Age Is 38, You Are Available For Hire
// showDetails(false, 'Waheed', 23) // Hello Waheed, Your Age Is 38, You Are Not Available For Hire


//anmounsfunction=>calling named function functionName (parameters) {
//   let calculator=function(num1,num2){
//     return num1+num2;
//   }
//   console.log(calculator(10,20));
//   //anmouns function
// document.getElementById('show').onclick=function(){
//   console.log('show')
// }
// //
// setTimeout(function(){
//   console.log('Good')
// },2000)


//nested function 
// function sayMessage(fName,lName){
//   let message=`Hello`;
//   //nested function 
//   function concatMsg(){
//     message=`${message} ${fName} ${lName}`
//   }
//   concatMsg();
//   return message;
// }
// console.log(sayMessage("Osama", "Mohamed"));
// var a=1;
// let b=2;
// function showText(){
//   var a=4;
//   let b=20;
//   console.log(`function from local ${a}`)
//   console.log(`function from local ${b}`)
// }
// showText();
// const name='omnia';
// console.log(name());
// var x=10;
// if(10===10){
//   let x=50
// }
// console.log(x);

// let a=3;
// let a=20;
// console.log(a)
// console.log(a);
// var a=20;
// var a=30;
// if(30===30){
//   console.log(a) //30
//   var a=20; //un defined
// }
// console.log(a); //20

// function parent(){
//   var a=55;

//   function child(){
//     console.log(a);
//     function grand(){
//       let a=20;
//       console.log(`Hello from grand ${a}`)
//     }
//     grand()
//   }
//   child();
// }
// parent();
// let myNums=[1,2,3];
// let addSelf=myNums.map((a)=>a+a);
// console.log(addSelf);
// let circles = [
//   10, 30, 50
// ];
// let areas=circles.map(function(radius){
//   return Math.floor(Math.PI*radius*radius);
// })
// console.log(areas)
// let addSelf=myNums.map(function(element,index,arr){
// console.log(`currentElement=>${element}`)
// console.log(`currentElement=>${index}`)
// console.log(`currentElement=>${arr}`)
// },10)

// let numbers=[16,25,36];
// let results=numbers.map(Math.sqrt);
// console.log(results)


// let swappingCases='elZERo';
// let sw=swappingCases.split("")
// .map(function(ele){
//   return ele===ele.toUpperCase()? ele.toLowerCase():ele.toUpperCase();
 
// })
// .join("")
// console.log(sw);
// const title = 'JavaScript array join example';
// let url=title.split(" ").join('-').toLowerCase();
// console.log(url)
// let numbers=[10,20,30,-90,-2];
// let neg=numbers.map(function(ele){
//   return -ele;
// })
// console.log(neg)
// let ignoreNumbers='Omnia455Raf4t';
// let ign=ignoreNumbers.split("").map(function(ele){
//   return isNaN(parseInt(ele))?ele:""
// })
// .join("")
// ;
// console.log(ign);
// console.log(parseInt("A"))
// console.log(isNaN(undefined));
// console.log(isNaN(`1234ABC`)); //true
// console.log(isNaN(12.8)); //
// console.log(isNaN(12,22));//false
// let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];
// let filterNames=friends.filter(function(el){
// return (el.includes('A')? true:false)
// })

// console.log(filterNames);
// let numbers = [11, 20, 2, 5, 17, 10];
// let evenNumbers=numbers.filter(function(el){
//   return el%2!==0;
// })
// console.log(evenNumbers);
// let numbers = [11, 20, 2, 5, 17, 10];
// let addNumbers=numbers.map(function(el){
//   return el+el;
// })
// console.log(addNumbers);
// let words= "I Love Playing and go training Weight";
// let newWord=words.split(" ").filter(function(el){
//   return el.length<=4;
// })
// .join(" ")
// console.log(newWord);

// Ignore Numbers
// let ignoreNumbers = "Elz123er4o";
// let ign=ignoreNumbers.split("").filter(function(ele){
//   return isNaN(parseInt(ele))
// })
// .join("");
// console.log(ign);



// let mix = "A13BS2ZX";

// let mixedContent = mix
//   .split("")
//   .filter(function (ele) {
//     return isNaN(parseInt(ele));
//   })
//   // .map(function (ele) {
//   //   return ele * ele;
//   // })
//   .join("");

// console.log(mixedContent);

//anmnous function ||expression
// (function(){
//   console.log(`Immediately invoked function execution`)
// })();

// let person={
//   firstName:'omnia',
//   lastName:'Rafat'
// }
// (function(){
// console.log(`Hello ${person.firstName}+ " "+${person.lastName}`)
// })(person)


//arrow function 

// let userName = 'John';

// function showMessage() {
//   var message = 'Hello, ' + userName;
//   console.log(message);
// }

// showMessage();

// let nums=[10,20,16,39];
// let add=nums.reduce(function(acc,current,index,array){
//   return acc+current;
// })
// console.log(add)

// let words=['omnia','salma','ali','mohesn','propaganda','prpgandaTwo'];
// let longestWOrd=words.reduce(function(acc,current){
//   return acc.length>current.length? acc:current;
// })
// console.log(longestWOrd);

// let words=['@','A','B','C','@'];
// let newWord=words.filter(function(el){
//   return !el.startsWith('@')
// })
// .reduce(function(acc,current){
//   return (`${acc}${current}`)
// })
// console.log(newWord);


// const numbers=[65,33,20,30];
// numbers.forEach(myFunction);
// function myFunction(item, index, arr) {
//   arr[index] = item * 10;
// }
// console.log(this)

// let allLis=document.querySelectorAll("ul li")
// allLis.forEach(function(el){
// el.onclick=function(){
//   Element.classList.remove("active")
// this.classList.add('active')
// }
// })

// const sum=(function(){
//   return function sum(x,y,z){
//     const args=[x,y,z];
//     return args.reduce((a,b)=>a+b,0)
//   }
// })();
// console.log(sum(10,20,20))
// function orderLogicl(val){
//   if(val<5){
//     return 'less than 5'
//   }
//   else if(val <10){
//     return 'less than 10'
//   }
//   else{
//     return "greter that or equal 10"
//   }
// }

// console.log(orderLogicl(8));

// function caseSwitch(val){
//   var answer="";
//   switch(val){
//     case "a":
//       answer='alpha'
//       break;
//     case "b":
//       answer='Mid'
//       break;   
//   }

//   return answer;
// }
// console.log(caseSwitch("a"))

// function switchCase(val){
//   var results=""
//   var lookup={
//     'alpha':'red',
//     'Beta':'green',
//     'cenia':'blue'
//   }
//   results=lookup[val]
//   return results;
// }
// console.log(switchCase('alpa'))


// function checkScope(){
//   var i=4;
//   if(true){
//     var i=77;
//     console.log("Block Scope is", i);
//     //var is not block scope
//   }
//   console.log("function Scope is", i);//overide
//   return i;
// }
// checkScope();
// let user={
//   theName:'omnia',
//   theAge:33,
//   sayHello:function(){
//     return `Hello`;
//   }
// }
// console.log(user.sayHello())
// console.log(user.theAge)
// let myVar="country"
// let user={
//   theName:'omnia',
//   country:'egypt'
// };
// console.log(user["country"]);
// console.log(user[myVar]);
// console.log(user.myVar);

// let user={
//   name:'omnia',
//   age:'22',
//   skills:['HTML','CSS','JS'],
//   avalible:false,
//   address:{
//     ksa:"Riyad",
//     egypt:{
//       one:'cairo',
//       two:'Giza'
//     },
//   },
//   checkAv:function(){
//     if(user.avalible===true){
//       return `Free work`
//     }
//     else{
//       return `Not Free`
//     }
//   },
// }
// console.log(user.skills.join("|"));
// console.log(user.skills.push('ReactJs'));
// console.log(user.skills);
// console.log(user.address.egypt)
// console.log(user.checkAv)



// let user=new Object({
//   age:20,
// })
// console.log(user)
// user.age=30;
// user['countery']='egypt';
// console.log(user.age);

// console.log(this===window);
// let user={
//   age:22,
//   ageInDays:function(){
//     return this.age*365;
//   }
// }
// console.log(user.age);
// console.log(user.ageInDays())

// document.getElementById('show').onclick=function(){
//   console.log(this);
// }

// let obj=Object.create({});
// obj.a=100;
// obj.b=33;
// console.log(obj)
// let user={
//   age:32,
//   doubleAge:function(){
//     return user.age*2
//   }
// }
// // console.log(user);
// // console.log(user.age)
// // let copyObj=Object.create(user);
// // copyObj.age=11;
// // console.log(copyObj);
// let obj1 = {
//   prop1: 1,
//   meth1: function () {
//     return this.prop1;
//   },
// };

// let obj2 = {
//   prop2: 2,
//   meth2: function () {
//     return this.prop2;
//   },
// };

// let targetObject = {
//   prop1: 100,
//   prop3: 3,
// };
// let finalObject = Object.assign(targetObject, obj1, obj2);
// console.log(finalObject)
// finalObject.prop1 = 200;
// finalObject.prop4 = 4;
// console.log(finalObject);



// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;

// let myFriend = ["Ahmed", "Sayed", "Ali", "Maysa"];

// [a, b, c,e="omnia"] = myFriend;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(myFriend[4]) //undefined



// var greeting="hi";
// var messenger={
//   greeting:'Hello'
// }
// function say(name){
//   console.log(messenger.greeting+ ""+name)
// }
// say.call(this,'John');



// const person={
//   firstName:'john',
//   lastName:'doe'
// }
// function greet(greeting,message){
//   return ``
// // }

// // class Person {
// //   constructor() {
// //     this.name = 'omnia',
// //       this.age = 22;
// //   }
// // }
// // const Person1=new Person();
// // console.log(Person1)

// //Hositing
// // const P=new Person();
// // class Person{
// // constructor(name){
// //   this.name=name
// // }
// // }
// // class Person {}
// // console.log(typeof Person); 


// // class Parent{
// //   constructor(name){
// //     this.name=name;
// //     this.occuption='unemployee';
// //   }
// //   greet(){
// //     console.log(`Hello ${this.name}`)
// //   }
// // }
// // class Student extends Parent{
// //   constructor(name){
// //     console.log("Creating student class");
// //     super(name);
// //     this.occuption="student"
// //   }
// // sayHello(){
// //   console.log(`Hello ${this.name}`)
// //   console.log(`Hello ${this.occuption}`)
// // }

// // }
// // let student1=new Student('omnia');
// // student1.greet();
// // student1.sayHello()

// class Animal{
//   constructor(legs,color){
//     this.legs=legs;
//     this.color=color;
//   }
//   walk(){
//     console.log(`walking on `+this.legs+ "  "+ `legs`)
//   }
//   getColor(){
//     return this.color;
//   }
// }
// class Brid extends Animal{
//   constructor(legs){
//     super(legs);
//   }
//   fly(){
//     console.log('flying')
//   }
// }
// let brid=new Brid(3,'green');
// console.log(brid.getColor('green'))


// // parent class
// class Person { 
//   constructor(name) {
//       this.name = name;
//       this.occupation = "unemployed";
//   }
  
//   greet() {
//       console.log(`Hello ${this.name}.`);
//   }
//   sayHello(){
//     console.log(`Good Morning ${this.occupation}`)
//   }

// }

// // inheriting parent class
// class Student extends Person {

//   constructor(name) {
      
//       // call the super class constructor and pass in the name parameter
//       super(name);
      
//       // Overriding an occupation property
//       this.occupation = 'Student';
//   }
  
//   // overriding Person's method
//   greet() {
//       console.log(`Hello student ${this.name}.`);
//       console.log('occupation: ' + this.occupation);
//   }
// }

// let p = new Student('Jack');
// p.greet();

// for(element of iterable){
//   //body  for ..of
// }
// function greet(){
//   console.log(`Hello worls`)
// }
// setTimeout(greet,3000)
// console.log('This message is shown first');

// function ShowTime(){
//   let dateTime=new Date();
//   let  time=dateTime.toLocaleTimeString()
// }

/*APi
Application programming Interface*/
/*JSON*/
//JSON.Parse=>convert Text Datae to Js Object 
//JSON.stringify=>convert js object to JSON
// const myJsonFromServer=`{"username":"omnia","age":22}`
// console.log(typeof(myJsonFromServer));
// const myObject=JSON.parse(myJsonFromServer);
// console.log(typeof(myObject));
// console.log(myObject);


// myObject["username"]="salma";
// myObject["age"]=20;
// console.log(typeof(myObject));
// const myJsonObject=JSON.stringify(myObject);
// console.log(typeof(myJsonObject));
// console.log(myJsonObject)
//sync
// console.log("1");
// console.log("2")
// window.alert("Hello");
// console.log("33")


//async

// console.log("1");
// console.log("20");
// setTimeout(()=>{
// console.log("operation")
// },4000)
// console.log("go Head ya omnia")

//callstack and web Api
// function one(){
//   console.log("Gud Morning Guys")
//   console.log("one");
// }
// function Two(){
//   one();
//   console.log("Two")
// }
// function Three(){
//   Two()
//   console.log("Three")
// }
// function Four(){
//   Three();
//   console.log("Four")
// }
// Four();


// setTimeout(()=>{
//   console.log(myVar);
// },2000)
// let myVar=10;
// myVar+=10;
// ayncrnous javascript And XML
/*
-test xml Http Request
-request And Response
-status code 
// */
// let myRequest=new XMLHttpRequest();
// //get -post
// myRequest.open('Get',"https://api.github.com/users/elzerowebschool/repos")
// myRequest.send();
// console.log(myRequest);

// //readyState/sate

// myRequest.onreadystatechange=function(){
//   console.log(myRequest.readyState);
//   console.log(myRequest.status);
//   if(this.status===200&& this.readyState){
//     console.log(this.responseText)
//   }
// }


let myRequest=new XMLHttpRequest();
myRequest.open("Get","https://api.github.com/users/elzerowebschool/repos");
myRequest.send();
console.log(myRequest)

myRequest.onreadystatechange=function(){
  console.log(myRequest.readyState);
  console.log(myRequest.status);
  if(this.status===200&&this.readyState===400){
    conso
  }
}