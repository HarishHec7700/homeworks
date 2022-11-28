let arr=[{
    name:"Bharat Raj",
    position: "Js Developer",
    age: 25,
},{
    name:"Karthi Gausen",
    position: "UI Developer",
    age: 26,
},{
    name:"Arun Kumar",
    position: "React Developer",
    age: 22,
},{
    name:"Jennifer",
    position: "SQL Developer",
    age: 23,
}]
let newArr=arr.filter((ele)=>{return(ele.age>23)}),condi=0;
let trueArr=arr.map((ele)=>{
    if(ele.name=="Bharat Raj"){
        condi++;
    }
});
console.log(condi);
// newArr=arr.sort(function(a,b) {return a.age - b.age});  // (a,b){return (b-a)}
console.log(arr);
console.log(newArr);
