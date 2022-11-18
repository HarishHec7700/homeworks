// let arr=[{
//     id:"456676hmm6j7",
//     email:"bharath@gmail.com",
//     pswrd:'bharath123',
//     name:"Bharat Raj",
//     position: "Js Developer",
//     age: 25
// },{
//     id:"56507990n9nhth65",
//     email:"karthi@gmail.com",
//     pswrd:'kathi456',
//     name:"Karthi Gausen",
//     position: "UI Developer",
//     age: 26
// },{
//     id:"657877jnydfu89t5",
//     email:"arun@gmail.com",
//     pswrd:'arun789',
//     name:"Arun Kumar",
//     position: "React Developer",
//     age: 22
// },{
//     id:"43689098lkmnjghfgfvtrt",
//     email:"jennifer@gmail.com",
//     pswrd:'jeniMani',
//     name:"Jennifer",
//     position: "SQL Developer",
//     age: 23
// }];
// let newArr=arr.filter((ele)=>{return(ele.age>23)}),condi=0;
// let trueArr=arr.map((ele)=>{
//     if(ele.name=="Bharat Raj"){
//         condi++;
//     }
// });
// console.log(condi);
// newArr=arr.sort(function(a,b) {return a.age - b.age});  // (a,b){return (b-a)}
// console.log(arr);
// console.log(newArr);

// let mydata=JSON.parse(data);
// console.log(mydata);

// let database;
// let mydata=fetch("./data/data.json").then((resp)=>{resp.json}).then((data)=>{database=data})
// console.log(database);
// console.log(mydata);
// let a =database;
// console.log(a);
var arr;
function getData(){
    var list={
        method:"GET",
        headers:{
            'Content-Type':'application/json'
        }
    }
    var database= fetch("./data/data.json")
    .then((status)=>{
        console.log(status);
        return status.json();
    })
    .then((data)=>{
        arr=data;
        console.log(arr);
        return arr;
    })
}
// console.log(database);
// console.log(data);


// DOM starts from here 

let inpEle=document.getElementById('inp'),
subEle=document.getElementById('check'),
emailEle=document.getElementById("email"),emailVal,inpVal,condi=0;
let newArr;
// console.log(arr);
// console.log(getData());
getData();

// inpVal=inpEle.value;
// console.log(inpVal);

// subEle.addEventListener("click",(inpVal,condi)=>{
//     arr.forEach((val,condi)=>{
//         if(val.name===inpVal)
//         alert("success")
//         else
//         alert("fail")
//     });
//     // console.log(newArr);
// });

let display=()=>{
    let dispEle=document.getElementById("display");
    let disHeadEle=document.getElementById("disp-head"),
    dispListEle;
    dispEle.style.display="block";
    let dispUl=document.getElementById("list"),resArr;
    resArr=Object.entries(newArr);
    console.log(resArr);
    for(i=0;i<resArr.length;i++){
        // console.log("hi");
        dispListEle=document.createElement("li");
        dispListEle.setAttribute("class","dispList");
        dispUl.appendChild(dispListEle);
        dispListEle.innerHTML=resArr[i].join(':  ');
    }

}
// Find method 
passEle=document.getElementById("pswrd");

subEle.addEventListener('click',()=>{
    let passVal=passEle.value;
    emailVal=emailEle.value;
    newArr=arr.find((ele)=>{
        if(ele.pswrd==passVal){
            return(ele.email==emailVal)
        }else{
            alert("Please enter the correct details");
        }
    });
    // display(newArr);  
    // if(newArr.pswrd==passVal){
    //     console.log(newArr);
    // }else{
    //     alert("Please enter the correct details");
    // }
    if(newArr){
        display(newArr);  
    }else{
        alert("Please enter the correct details");
    }
})

// Using filter method

// subEle.addEventListener("click",()=>{
//     let emailVal=emailEle.value;
//     console.log(emailVal);
//  var a = 0;
//     let newArr=arr.filter((val)=>{
//     if(val.email==emailVal){
//       a++;
//     }
// })
// if(a>0){
//     alert("success")
//    }
//    else{
//     alert("invalid email")
//    }
//     console.log(newArr);
// });


// Class Examples 

// class Rectangle{
//     constructor(){
//         this.greet="Hi Friends" ;
//     }
//     area(h,w){
//         let height=h,
//         width=w,area=height*width;
//         // console.log(h);
//         // console.log(w);
//         // console.log(height);
//         // console.log(width);
//         // console.log(area);
//     }
//     addi=(...values)=>{
//         let sum=values.reduce((a,b)=>(a+b));
//         console.log(sum);
//     }
// }
// let r1=new Rectangle;
// r1.area(5,4);
// r1.area(20,4);
// r1.addi(2,5,8,23,3,54,45,54);

// console.log(r1.greet);

// class Sqare extends Rectangle{
//     super(){};
//     greeting(){
//         console.log("Hi my buddies");
//     }
//     sqArea(a){
//         let side=a;
//         let squareArea=a*a;
//         console.log(squareArea);
//     }
// }
// let s1=new Sqare;
// // console.log(s1.greet);
// // s1.greet="hello guys";
// // console.log(s1.greet);
// // s1.area(2,3);
// // s1.sqArea(5);
// // r1.sqArea(3);

// class Student {
//     constructor(){
//         this.name,
//         this.id
//     }
//     marks={
//         Eng:0,
//         Tam:0,
//         Sci:0,
//         Mat:0,
//         Soc:0,
//     }
//     total(grade){
//         let sum=0;
//         for(i in this.grade){
//             sum+=this.grade[i];
//         }
//         console.log(sum);
//     }
//     display(){
//         console.log("The Student Name is ",this.name);
//         console.log("The Student's ID is ",this.id);
//         console.table("The Student's Mark is  ",this.marks);
//         console.log("The Student's Total is ",this.sum);
//     }
// }

// let arun=new Student,karthi=new Student;
// arun.name="Arun Kumar",arun.id=01;
// // let inpMarks=[75,84,69,92,85];
// let inpMarks={
//     Eng:75,
//     Tam:84,
//     Sci:69,
//     Mat:92,
//     Soc:85,
// }
// // for(i in arun.marks){
// //     console.log(inpMarks[i]);
// // }
// // arun.marks=...inpMarks;         // ???????

// console.log(arun.marks);
// arun.total(arun.marks);
// arun.display()

// karthi.name="Karthi Gausen"
// karthi.id=02;
// karthi.display();