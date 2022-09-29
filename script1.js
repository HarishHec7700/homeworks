document.getElementById("btn").addEventListener("click",function(){
	let inp=document.getElementById("input").value;
	let dob=new Date(inp),
	t=dob.getTime(),
	tim=Date.now()-t;
	tim=new Date(tim);
	let yr=tim.getFullYear();
//	console.log(yr);
	let age=Math.abs(yr-1970);
//	console.log(age);
	document.getElementById("res").style.color="red";
	document.getElementById("res").innerHTML="The Present Age is "+age;
	
})
function printRes(e,o){
	document.getElementById("res-eve").innerHTML="The Sum of Even Numbers are"+e;
	document.getElementById("res-odd").innerHTML="The Sum of Odd Numbers are"+o;

}
let sumEle=document.getElementById("reg_sum");
document.getElementById("reg-btn").addEventListener("click",function(){
	// console.log("hi");
	let even=/[02468]/g;
	let evenSum=0,oddSum=0;
	let regInp=sumEle.value,inpSli=[...regInp];
	// console.log(inpSli);
	inpSli.map((num)=>{
		if(even.test(num)){
			num=parseInt(num);
			evenSum+=num;
		}else{
			num=parseInt(num);
			oddSum+=num;
		}
		
	})
	printRes(evenSum,oddSum);
})


// let sevRnge=parseInt(prompt("Please enter the range")),sevArray=[],resArr=[],sevStr,indi=0;
// for(i=1;i<=sevRnge;i++){
// 	if(i%7==0){
// 		// sevStr=i.toString();
// 		resArr.push(i);
// 		console.log(resArr);
// 	}
// }

// for(i=0;i<resArr.length;i++){
// 	let arr1=resArr[i],
// 	arr2=resArr[i+1];
// 	arr1=[...arr1];
// 	arr2=[...arr2];

// 	if(arr1>arr2){
// 	}else{
// 		indi++;
// 	}
// 	if(indi==0){
// 		console.log(resArr[i]);
// 	}
// }

let sevRnge=parseInt(prompt("Please enter the range")),sevArray=[],resArr=[],sevStr,indi=0;
for(i=1;i<=sevRnge;i++){
	if(i%7==0){
		// sevStr=i.toString();
		resArr.push(i);
		console.log(resArr);
	}
}

for(i=0;i<resArr.length;i++){
	let arr1=resArr[i];
	console.log(arr1);
	arr1=arr1.toString();
	arr1=[...arr1];
	for(j=0;i<arr1.length;j++){
		if(arr1[j]<arr1[j+1]){}
		else
			indi++;
		if(indi==0){
			console.log(resArr[i]);
		}
	}	
}