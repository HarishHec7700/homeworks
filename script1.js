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

// let ae=0;
// for(i=0;i<resArr.length;i++){
// 	if(ae<resArr[i]){
// 		sevArray.push(resArr[i]);
// 	}
// 	ae=resArr[i];
// 	console.log(indi);
// }
// console.log(sevArray);

// let sevRnge=parseInt(prompt("Please enter the range")),sevArray=[],resArr=[],remin=[],remin1=[],sevStr,rem=0,rem1,rema,rema1;
// rem1=rema=rema1=0;
// const sevRemain=(j,sevArray)=>{
// 	while(j<0){
// 		rem=j%10;
// 		rem1=j/10;
// 		if(rem1<=rem){
// 			remin.push(sevArray[i]);
// 		}
// 	}
// }
var result = [],res=0,ab,ba;
var answer = []
for(i=1;i<=200;i++){
	if(i%7==0){
		// sevStr=i.toString();
		result.push(i);
	}
}

for(i=0;i<result.length;i++){
	if(result[i]<100){
    var a = result[i] % 10;
	var b = Math.floor(result[i]/10)
	if(b<a){
		console.log(result[i]);
	}
	}else{
	res=result[i]-100;
	ab = res % 10;
	ba = Math.floor(res/10)
	if(ba<ab){
		console.log(result[i]);
	}	
}

}	
// 		j=sevArray[i];
// 		// sevRemain(j,sevArray[i]);
// 		while(j<0){
// 			rem=j%10;
// 			rem1=j/10;
// 			if(rem1<=rem){
// 				remin.push(sevArray[i]);
// 			}
// 		}
// 		console.log(remin);
// 	}
// 	else{
// 		j=sevArray[i]-100;
// 		while(j<0){
// 			rema=j%10;
// 			rema1=j/10;
// 			if(rema1<=rema){
// 				remin1.push(sevArray[i]);
// 			}
// 		}
// 		console.log(remin1);
// 	}


