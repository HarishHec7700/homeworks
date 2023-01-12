// let users=[
//     {
//         email:"amutha@gmail.com",
//         pass:"amu@123",
//         userName:"Amutha",
//         age:23
//     },
//     {
//         email:"priya@gmail.com",
//         pass:"priya@123",
//         userName:"Priya",
//         age:22
//     } ,   
//     {
//         email:"durga@gmail.com",
//         pass:"durga@123",
//         userName:"Durga",
//         age:24
//     },
//     {
//         email:"anitha@gmail.com",
//         pass:"ani@123",
//         userName:"Anitha",
//         age:21
//     },
//     {
//         email:"aruna@gmail.com",
//         pass:"aruna@123",
//         userName:"Aruna",
//         age:21
//     }
// ]    

// for(i of users){
//     // console.log(i); //expected output ??
//      for(j in i){
//         // console.log(j);
//         // console.log(i[j]);
//         // console.log(i.userName);
//     }
// }

// users.forEach((val)=>{
//     // console.log(val); 
//     console.log("saran");
// })

// let arr1=[1,8,4,5,1,4,7];
// for(i=0;i<arr1.length;i++){
//         if(arr1[i]==arr1[i+1]){
//             console.log("hi");
//             console.log(arr1[i]);
//         }
// }



//    DOM

function delteFun(){
    console.log("Sucess");
    this.parentNode.remove();
}

let headEle=document.getElementsByClassName("heading");
headEle[2].style.display="none";
console.log(headEle);

function validate(){
let dispEle=document.getElementById("display");
let textEle=document.getElementById("input");
console.log(textEle.value);

let todoDisp=document.createElement("div");
todoDisp.setAttribute("class","tododis my-4 p2");
dispEle.appendChild(todoDisp);

// create Element 

let pEle=document.createElement("p");
// set Attribute

pEle.setAttribute("class","to-do");
// Append the new element 

todoDisp.appendChild(pEle);

// Editing the Creating Element
pEle.innerText=textEle.value;

// Creating button Element 
let editBtn=document.createElement("button");
// Append the element to the parent 
todoDisp.appendChild(editBtn);
// Editing The created Element
editBtn.innerText="Edit"
// Setting Attribute for the created element

editBtn.setAttribute("class"," edit btn btn-danger mx-4")

// Creating Delete Button 

let delBtn=document.createElement("button");
delBtn.setAttribute("class","delete btn btn-warning mx-4");
delBtn.innerText="Delete"
todoDisp.appendChild(delBtn);

// Assinging the delete function for todo 

let deleteBtn=document.getElementsByClassName("delete"); 
console.log(deleteBtn);
for(i=0;i<deleteBtn.length;i++){
    deleteBtn[i].addEventListener("click",delteFun);
}

// For reseting the textbox

let reset=(textEle)=>{
    textEle.value="";
}
reset(textEle)

}

let textEle=document.getElementById("input"),
butEle=document.getElementById('submit');
butEle.addEventListener("click" ,validate);
let dispEle=document.getElementById("display");
