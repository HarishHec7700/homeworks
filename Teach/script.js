let navi = () => {
    console.log("Hi");
    window.location.href = './routed.html'
}, back = () => {
    console.log("bye");
    window.location.href = './index.html'
}
let array = [21, 6, 78, 2];
array[2] = null;
console.log(array);
// console.log(array.sort((a,b)=>{return(b-a)}));
let users = [
    {
        email: "amutha@gmail.com",
        pass: "amu@123",
        userName: "Amutha",
        age: 23
    },
    {
        email: "priya@gmail.com",
        pass: "priya@123",
        userName: "Priya",
        age: 22
    },
    {
        email: "durga@gmail.com",
        pass: "durga@123",
        userName: "Durga",
        age: 24
    },
    {
        email: "anitha@gmail.com",
        pass: "ani@123",
        userName: "Anitha",
        age: 21
    },
    {
        email: "aruna@gmail.com",
        pass: "aruna@123",
        userName: "Aruna",
        age: 21
    }
]    // [1,2,45,6,6]

// let str1=prompt("Enter the name");

// filter method ,Reduce method , sort method 
// let res=users.filter((val)=>{
//     // console.log(val);
//     if(val.userName===str1)
//         return (val);
//     else    
//         return false; 
// })
// console.table(res);

// for (i=0;i<users.length;i++){
//     if(users[i].userName===str1){
//         console.log(users[i]);
//     }
// }

// Reduce Method 

// let arr1=[1,3,4,50];
// result=arr1.reduce((prev,curr)=>{
//     return (prev+curr)
// })



// Arrow Function 

// (a,b,c)=>{
//     console.log("HI");
// }

// // Secound method 

// let durga=function(){

// }

// moni(){
//     console.log("Hi");
// }




// let arr=[12345 ,12, 34 ,12 ]
// 1st method 
function amutha() {
    // console.log("hi");
    let a = 23;
    return false
}
let cb = amutha();
// console.log(cb);

// 2nd method
let priya = function () {
    console.log("Priya");
}


// 3rd method 
// Arrow function 
// ()=>{

// }
let se = typeof ([1, 2]);
// console.log(se);
// let a=[[1,2,3],2,[1,2,3],1];
// for(i=0;i<a.length;i++){
//     // if()
// }



// let outLen,inLen,arr=[],opt,nVal,subArr=(len)=>{
//     let sub=[],subVal;
//     for(j=0;j<len;j++){
//         subVal=prompt("Enter the values of Array");
//         sub.push(subVal);
//     }
//     return sub;
// };
// outLen=prompt("Enter the main Array length ");
// for(i=0;i<outLen;i++){
//     opt=prompt("If array enter A ,if Num enter N");
//     if(opt=='N'){
//         nVal=prompt("Enter the Number ");
//         arr.push(nVal);    
//     }
//     else{
//         inLen=prompt("Enter the sub Array length ");
//         let resSub=[];
//         resSub=subArr(inLen);
//         arr.push(resSub);
//     }
// }
// console.log(arr);

// Sort function 

// console.log(
//     users.sort((a, b) => {
//         return (b.age - a.age)
//     })
// );

// let obj={};
// obj.name="Haris"
// console.log(obj);

let arr=[1,4,1,5,4,8,7];
for(i=0;i<arr.length;i++){
    if(arr[i]==arr[i+1]){
        console.log(arr[i]);
    }
}

console.log(":Hi");