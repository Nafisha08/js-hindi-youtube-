// // string value
// fullname ="tony kakkar";
// // print value 
// console.log(fullname);
// // variables
// age=24;
// price=(99.99);
// console.log(price);
// x=null;
// console.log(x);
// y=undefined;
// console.log(y);
// let name="tonny kakkar"
// console.log(name);
// let age=24;
// let totalprice=1000
// console.log(age);
// console.log(totalprice);
// FULLNAME="nafisha"
// fullname="Nafisha"
// console.log(fullname);
// console.log(FULLNAME);
// cont=3.14;
// console.log(cont);
// {
//     age=10;
//     console.log(age);
// }
// {
//     age=50
//     console.log(age);
// }
// //string
//  let fullname="nafisha "
// // //number
//  let age=20;
// price =100.50;
// // //boolean
// isfollow=true;
// //undefined
// let x;
// //null
// let y=null;
// //bigint
// let z=BigInt("123");
// const student = {
//     fullname:'Amit kumar mondal',
//     age :24,
//     cgpa:8.9,
//     isfollow: true,
// };
// student["age"]=student["age"]+1;
// student["fullname"]="rahul sharma";
// student["cgpa"]=9.6
// console.log(student.age);
// console.log(student["fullname"]);
// console.log(student.cgpa);
// console.log(student["isfollow"]);

// const product={
//     fullname :"ball pen",
//     rating :4,
//     price :220,
//     offer :5,
// };
// console.log(product);
// product["rating"]=product=["rating"]+1;
// product["price"]=240
// const profile={
//     fullname: "shardhakhapra",
//     username:"@shardhakhapra",
//     isfollow:false,
//     post:195,
//     followers:569,
//     following:4,
// };
// console.log(profile);
// console.log(typeof profile ["username"]);
// console.log(typeof profile["isfollow"]);
// console.log(typeof profile["post"]);

//ARITHMATIC OPERATOR
// let a=5;
// let b=2;
// c=a+b;
// console.log("a+b=",c);
// console.log("a+b=",a+b);
// console.log("a-b=",a-b);
// console.log("a*b=",a*b);
// console.log("a/b=",a/b);
// // modulus%
// console.log("a**b=",a**b);//a^b 5^2=25

//unary operator
//

//comparison operator
// let a=5;
// let b=5;
// console.log("5==5",a==b);
// console.log("5==5",a!=b);

//===this is the strict value checked
// let a=5;//number
// let b="5"//string
// console.log("5===5",a===b);
// console.log("a!==b",a!==b);

//logical operator && ,||, !
// let a=5;
// let b=4;
// let cond1 =a>b;
// let cond2 =a!=b;
// console.log(" cond1&& cond2",cond1 && cond2);

//condition statement
// let age=16;
// if(age>18){
//     console.log("you can vote");
// }
// if(age<18){
//     console.log("you Can not give vote");
// }
// let mode="light";
// let color;

// if(mode==="dark"){
//     color="black";
// }
// else{
//     color="white";
// }
// console.log(color);

// let num =25;
// if(num%2===0){
//     console.log(num ,"is even")
// }
// else{
//     console.log(num,"is odd")
// }
//synatax--> rules
//  let age= 20;
// if(age< 18){
//     console.log("junior");
    
// }
// else if(age>80){
//  console.log("senior")
// }
// else{
//     console.log("middle")
// }
 
 //ternary operator in conditional statement
// let age= 25;
// let result=age>18?"adult":"not adult"
// console.log(result);

//using prompt
// let num = prompt("enter a no.")
// if(num%5===0){
//     console.log("no. is multiple of 5")
// }
// else{
//     console.log("no. is not multiple of 5 ")
// }
// let name = prompt("hello")
// console.log(name);

//practice question 1
// let num=prompt("enter a no.");
// if(num%5===0){
//     console.log(num,"multiple of 5");
// }
// else{
//     console.log(num," is not multiple of 5");
// }
//practice quetion 2
// let score=57;
// if(score>90 && score<100){
//     console.log("grade A");
// }
// if(score>70&& score<89){
//     console.log(" grade B");
// }
// if(score>60 && score<69){
//     console.log("grade C");
// }
// if(score>50&&score<59){
//     console.log("grade D");
// }
// if(score>0 && score<50){
//     console.log("grade F");
// }

// chapter 3practice question1
// let num ="enter the no."
//  for(let num=0; num<=100;num++){
//           if(num%2===0){
//             console.log("num=",num)
//          }
//     }

//practice question 2
 
// let gameNum =25;
//   let userNum = prompt("guess the game no.");
  
//   while(userNum!=gameNum){
//   userNum =prompt("you enter wrong no.guess again:")
//   }
//   console.log("congratulation, you entered the right number");

//string
// let str = "apnacollege"
//  console.log(str[0]) ; 
//  console.log(str[8]) ;
 
//  //TEMPLATE LITERALS
//  let spetring ='this is template litral'
//  let obj={
//   item : "pen",
//   price: 10,
//  };
//  console.log(`the obj of ${obj.item} is ${obj.price} rupees`)
 
//escape character
// \n to work next line in string 
//  let str="apna\tcollege"
// console.log(str.length);

// TRIM METHOD 
// let str="    Apna college   js   "
// console.log(str.trim());

// str.slice(start,end)
// let str="1234567"
// let str1="nafisha"

// let result=str.slice(1, 7);

//  console.log(result)

// //  //concat join str1 and str2
//  let str1="Nafisha"
//  let str2="Aslam"
//   let result1 =str1.concat(str2)
//   console.log(result1)

// lets practice quetion 1
// let fullname=prompt("enter their full name");
// let username="@"+fullname+fullname.length;
// console.log(username);
  
//funcation (function is a code to perform specific task we can invoke when ever we need )
// function myfunction(){
//     console.log("i need to complete java script become a good developer")
//     console.log ("i learning java script")
//     console.log ("i learning java script")
//     console.log ("i learning java script")
//     console.log ("i learning java script")
//     console.log ("i learning java script")
//    console.log ("i learning java script")
// }
// myfunction()

// //parameter function
// function myfunction(msg){
// console.log(msg);
// }
// myfunction("i love js")

// function myfunction(x,y){
//     console.log(x+y);
// }
// myfunction( 4,5);

//concat 
// let str1="nafisha";
// let str2="amit";
// let result=(str1.concat(str2));
// let add=("hello"+123);
// console.log(result);
// console.log(add);

//replace
// let str="hello";
// console.log(str.replace("lo","p"));
// let str1="amit";
// console.log(str1.replace("a","n"))

//charArt
// let str="Ilovejs";
//  str=str.replace("I","s")
//  console.log(str)
// console.log(str.charAt(0)) //character I
 
//practice quetion
// let result=prompt("enter the fullname" );
// let username="@"+"shardhakhapra"+13;
// console.log(username)
// console.log(result);

//array in js
//  let marks=[1 ,2 ,3 ,4 ,5];
//  console.log(marks);
//  console.log(marks.length);// property

//  let hero=[ "ironman", "thor", "hulk","saktiman", "spiderman","papa"];
//  for(let idx=1; idx<=hero.length; idx++){
//     console.log(hero[idx-1])
//  }

// let cities=["delhi","pune","mumbai","hydrabad","gurgaon"];
// for(city of cities){
//     console.log(city.toUpperCase())
// }

// practice question 1

// let marks =[85, 97,44,37,76,60];
// let sum =0;
// for(let val of marks){
//     sum+=val;

// }
// let avg=sum/marks.length
// console.log( `avg marks of the class= ${avg}`);

//practice quetion 2

let items=[250, 645, 300, 900, 50];
 let i=0
for(let val of items){
   console.log(`value at index ${i} =${val}`);
   
   i++;

}





