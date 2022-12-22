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


// let sevRnge=parseInt(prompt("Please enter the range")),sevArray=[],resArr=[],sevspc,indi=0;
// for(i=1;i<=sevRnge;i++){
// 	if(i%7==0){
// 		// sevspc=i.tospcing();
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

// let sevRnge=parseInt(prompt("Please enter the range")),sevArray=[],resArr=[],remin=[],remin1=[],sevspc,rem=0,rem1,rema,rema1;
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

/* var result = [],res=0,ab,ba;
var answer = []
for(i=1;i<=200;i++){
	if(i%7==0){
		// sevspc=i.tospcing();
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

}	 */
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


//  Array Methods 

// FOR EACH

// let nums=[2,4,5,6],add=0,addi=0,
// sum=(n)=>{
// 	for(i=0;i<n.length;i++){
// 		add+=n[i];
// 	}
// 	console.log(add);
// };
// sum(nums);
// let marks=[
// 	{
// 		id:"544545",
// 		email:"harish@gmail.com",
// 		psw:"harish@123",
// 		name:"Harish",
// 		English:78,
// 		Tamil:85,
// 		Maths:60,
// 		Science:88,
// 		Social:78,
	
// 	},
// 	{
		
// 		id:"8974487",
// 		email:"arun@gmail.com",
// 		psw:"Arun@123",
// 		name:"Arun",
// 		English:90,
// 		Tamil:85,
// 		Maths:60,
// 		Science:88,
// 		Social:78,
	
// 	},
	
// 	{
// 		id:"79846487",
// 		name:"Jenifer",
// 		email:"jenifer@gmail.com",
// 		psw:"jenifer@123",
// 		English:100,
// 		Tamil:85,
// 		Maths:60,
// 		Science:88,
// 		Social:78,
// 	}
	
// ]
// ,total=0;

// marks.forEach((k, i)=>{
	
// 	//console.log(k["Harish"]);
// 	// addi+=marks[k];
// 	// for(let x in k){
// 	// 	console.log(k[x]);
// 	// }	
	
// });
// marks.find(function(arr){
// 	if(arr["email"] == "arun@gmail.com"){
// 		console.log(arr);
// 	}
// })


// // Map Function 
// // Takes a func as argument and runs the function for each value   

// let work=["Doctor","Driver","Engineer"];
// work.map((is)=>{
// 	console.log("He is a "+is);
// })
// let professional={
// 	Arun:"Techie",
// 	Vishal:"Mechanic",
// 	Rathore:"Doctor",
// }
// Object.entries(professional).map((ent=>{
// 	[person,kaam]=ent;
// 	// console.log(ent);
// 	// console.log(person);
// 	// console.log(kaam);

// 	console.log(person+" is a "+kaam);
// }))

// // reduce,filter,find,spcing,every ,splice

// //reduce
// // Takes a func as argument and gives a single value as result  

// let mrk1=[84,56,84,78,69],tot=0,prev,pres,ini=0;
// console.log(mrk1.reduce((prev,pres)=>{
// 	return(prev+pres);
// }));

// // In object

// // console.log(Object.keys(marks).reduce((prev,pres)=>{
// // 	console.log(marks[prev]);
// // 	return(marks[prev]+marks[pres]);
// // }));

// // Every Method 

// let mrk2=[84,56,84,78,69];res=0;
// if(mrk2.every((ev)=>{
// 	if(ev>40){
// 		return true;
// 	}else
// 		return false;
// })){
// 	console.log("The given student is Pass");
// }

// if(Object.keys(marks).every((eve)=>{
// 	if(eve>40){
// 		return true;
// 	}else
// 		return false;
// }))
// 	console.log("The given student is Pass");
// else
// 	console.log("The given student is Fail");

// // Filter method	

// let mrks=[84,54,72,26,32],
// pass=(mrks.filter((ab)=>{if(ab>35){return ab}}));
// console.log("The pass marks are",pass);

// // object 

// let pass_m=[];
// pass_m=Object.keys(marks).filter((abc)=>{
// 	console.log(marks[abc]);
// 	if(marks[abc]>35)
// 	{
// 		return (marks[abc])
// 	}
// });
// console.log("The passed subjects are ",pass_m);

// // Find Method 
// let names=["Victor","Hector","Sector","Zap","Hector"];
// console.log(names.find((ba)=>ba=="Hector"));
// console.log(names.findIndex((ba)=>ba=="Hector"));
// console.log(names.findLastIndex((ba)=>ba=="Hector"));
// console.log(names.findLast((ba)=>ba=="Hector"));

// // object 

// console.log(Object.keys(marks).find((k)=>marks[k]>80));

// // Flat Method
// // Reduces the level of nested array and takes number as parameter
// let ae=[1,23,[[[45],58]],34],
// bq=ae.flat(2);
// console.log(bq);

// // FlatMap 
// let aee=[1,23,[45,7],[58],34],
// bqe=aee.flatMap((af)=>{return(af)});
// console.log(bqe);

// // values ,Reduce right ,Last Index ,includes

// // values
// // Used to Return an object containing the values of the array 
// let av=[54,25,98];
// bv=av.values();
// console.log(av.values());
// for(x of bv)
// 	console.log(x);

// // LastIndex of ethod
// // Returns the Index Last value of the iteration 
// let atd=[21,2,84,5,47,2,2];
// console.log(atd.lastIndexOf(2));

// // includes Method 

// var arr=[1,5,9,8,4,3,35,45];
// if(arr.includes(9))
// 	console.log("The array has the number 9");
// else
// 	console.log("The array doesn't has the number 9");

// // Reduce Right
// arr=[[1,5],[8,4]];
// console.log(arr.reduceRight((accumulator,cval)=>{
// 	return(accumulator.concat(cval));
// }));


// CALLBACK HELL 
// let ab=function(){
// 	console.log("HI this is first call");
// cd();
// },
// cd=function(){
// 	console.log("HI this is Secound call");
// 	ef();

// },
// ef=function(){
// 	console.log("HI this is Third call");
// }
// gh=function(){
// 	console.log("HI this is Fourth call");
// }

// ab(cd);

// let comp = function () {
//	    facebook fetch my data
//     return new Promise(function (resolve, reject) {
//         console.log("hi");
//         reject();
//     })
//         .then(function () {
//             console.log("SucessFul");
//         })
//         .catch(function () {
//             console.log("Error");
//         })
// };
// comp();

// let call1 = function () {
//     return new Promise(function (resolve, reject) {
//         console.log("Call 1");
//         resolve();
//     })
// };
// function call2() {
//     return new Promise(function (resolve, reject) {
//         console.log("Call 2");
//         resolve();
//     })
// }
// function call3() {
//     return new Promise(function (resolve, reject) {
//         console.log("Call 3");
//         resolve();
//     })
// }
// function call4() {
//     return new Promise(function (resolve, reject) {
//         console.log("Call 4");
//         reject();
//     })
// }
// call1()
//     .then(function () {
//         console.log("Sucess");
//         call2()
//             .then(function () {
//                 console.log("Sucess");
//                 call3()
//                     .then(function () {
//                         console.log("Sucess");
//                         call4()
//                             .then(function () {
//                                 console.log("Sucess");
//                             })
//                             .catch(function () {
//                                 console.log("Error")
//                             })
//                     })
//                     .catch(function () {
//                         console.log("Error")
//                     })
//             })
//             .catch(function () {
//                 console.log("Error")
//             })
//             .catch(function () {
//                 console.log("Error")
//             })
//     })

// call1()
// 	.then(call2())
// 	.then(call3())
// 	.then(call4())
// 	.catch(()=>{
// 		console.log("Error");
// 	})

// for(i=0;i<arr.length;i++){
// 	for(j=i+1;j<arr.length;j++){
// 		let t=dup.includes(arr[i]);
// 		console.log(t);
// 		if(dup.includes(arr[i])){
// 			console.log("hi");
// 			count++;
// 		}else{
// 		if(arr[i]==arr[j]){
// 			dup.push(arr[i]);
// 			console.log(dup);
// 			count++;
// 			console.log(arr[i],count);
// 		}}
// 	}	
// 	console.log(arr[i],count);
// 	count=1;	
// }

// To find the count of duplicate values

/*  let arr=[1,2,2,4,4,4,2],count=1; var dup=[],dupli={},times=0;
 arr.forEach((val)=>{
 	dupli[val]=(dupli[val]||0)+1;
 })
 for(i in dupli){
 	console.log(i,dupli[i]);
 }
 */
 
 
// let tes=5;
// tes=(tes||0)+1;
// console.log(tes);

// let av={};
// av.name="Harish";
// console.log(av);

// for(i=0;i<5;i++){
// 	for(j=5;j>0;j--){
// 		if((i==0)&&(i==5))
// 		document.write("*");
// 	}
// 	//console.log("\n");
// 	let br=document.createElement("br");
// 	document.body.append(br);
// }

// To return true or false if there the char is present in the spcing by using recursion method

// let spc=prompt("Enter the spcing "),char=prompt("Enter the spcing ");
// let check= function(a,b) {
// 	if(!a=='')
// 	{
// 		if(a[0]==b){
// 			console.log("hi");
// 			console.log("true");
// 		}
// 		else
// 		{
// 			console.log("hi");
// 			a=[...a];
// 			a.shift();
// 			a=a.tospcing();
// 			console.log(a);
// 			a=a.replace(',','');
// 			check(a,b);			
// 		}
// 	}
// 	else
// 	{
// 		console.log("False");
// 	}	
// }
// check(spc,char);


// To print the hollow square in star

// let no=parseInt(prompt("Enter the number of times "));
// let spac="";
// for(i=1;i<=no;i++){
// 	for(j=1;j<=no;j++){
// 		if((i==1)||(i==no)||(j==1)||(j==no))
// 			console.log(spac+="*");
// 		else
// 			console.log(spac+=" ");
// 	}
// 	console.log("\n");
// 	// let br=document.createElement("br");
// 	// document.body.append(br);
// }


// let no=parseInt(prompt("Enter the number of times "));
// let spac="";
// for(i=1;i<=no;i++){
// 	for(j=1;j<=no;j++){
// 		if((i==1)||(i==no)||(j==1)||(j==no))
// 			document.write("* ");
// 		else
// 			document.write("0 ");
// 	}
// 	// console.log("\n");
// 	let br=document.createElement("br");
// 	document.body.append(br);
// }


// let no=parseInt(prompt("Enter the number of times "));
// let spac="";
// for(i=1;i<=no;i++){
// 	for(j=1;j<=no;j++){
// 		if((i==1)||(i==no)||(j==1)||(j==no))
// 			document.write("* ");
// 		else
// 			document.write("0 ");
// 	}
// 	// console.log("\n");
// 	let br=document.createElement("br");
// 	document.body.append(br);
// }

// // To print the hollow square in star

// let spc="",no;
// no=parseInt(prompt("Enter the number of times "));
// for(i=1;i<=no;i++){
// 	for(j=1;j<=no;j++){
// 		if((i==1)||(i==no)){
// 			spc+="* ";
// 			//console.log(spc);
// 		}
// 		else{
// 			if((j==1)||(j==no)){
// 				spc+="* ";
// 			//console.log(spc);
// 		}
// 			 else{
// 				spc+="  ";
// 			}
// 		}
// 	}
// 	spc+="\n"
// }

// console.log(spc);



// To print the hollow right angle triangle in star

// let spc="",no;
// no=parseInt(prompt("Enter the number of times "));
// for(i=1;i<=no;i++){
// 	for(j=1;j<=i;j++){
// 		if((i==1)||(i==no)){
// 			spc+="* ";
// 			//console.log(spc);
// 		}
// 		else{
// 			if((j==1)||(j==i)){
// 				spc+="* ";
// 			//console.log(spc);
// 		}
// 			 else{
// 				spc+="  ";
// 			}
// 		}
// 	}
// 	spc+="\n"
// }

// console.log(spc);

// To print the hollow right angle upper triangle in star


// let spc="",no;
// no=parseInt(prompt("Enter the number of times "));
// for(i=no;i>=1;i--){
// 	for(j=1;j<=i;j++){
// 		if(i==1||i==no){
// 			spc+="* ";
// 			//console.log(spc);
// 		}
// 		else{
// 			if(j==1||j==i){
// 				spc+="* ";
// 			//console.log(spc);
// 		}
// 			 else{
// 				spc+="  ";
// 			}
// 		}
// 	}
// 	spc+="\n"
// }

// console.log(spc);

// let len=parseInt(prompt("Enter the length of the rectangle")),bth=parseInt(prompt("Enter the breath of the rectangle")),star="";
// for(i=0;i<bth;i++){
// 	for(j=0;j<len;j++)
// 		star+="*";
// 	star+="\n";
// }
// console.log(star);

// To Print a equilateral Triangle 

// let n=parseInt(prompt("Enter the times")),str="";
// for(i=0;i<n;i++){
// 	// To Print White Spaces
// 	// point to b noted is tht the value of j should start frm i
// 	for(j=i;j<n-1;j++){
// 		str+=" ";
// 	}
// 	// To Print Stars 
// 	for (k=0;k<(2*i-1);k++){
// 		str+="*"
// 	}
// 	str+="\n";
// }
// console.log(str);

// To Print a equilateral Triangle facing Downwards

// let n=parseInt(prompt("Enter the times")),str="";
// for(i=n;i>0;i--){
// 	// To Print White Spaces
// 	// point to b noted is tht the value of j should start frm i
// 	for(j=n-1;j>=i;j--){
// 		str+=" ";
// 	}
// 	// To Print Stars 
// 	for (k=0;k<(2*i-1);k++){
// 		str+="*"
// 	}
// 	str+="\n";
// }
// console.log(str);

// Down Right Angle Triangle

//  let num=parseInt(prompt("Enter the terms"));
// for (i=0;i<num;i++){
// 	for(j=0;j<=i;j++){
// 		document.write("*");
// 	}
// 	document.write("<br>");	
// }

// for(let i=1; i<=4; i++){
// 		   for( let b = 1; b<=(rows-i); b++)
// 		   document.write("&nbsp;");
// 		   {
// 			   for (let f=1; f<=i; f++)
// 			   document.write("* ");
// 		   }
// 		   document.write("<br>")
// 	   } 
 
 
// Program to print Diamond pattern

// let pat=parseInt(prompt("Enter the Number")),str="";
// for(i=0;i<pat;i++){
// 	for(j=pat;j>i;j--){
// 		str+=" ";
// 	}
// 	for(k=0;k<2*i-1;k++){
// 		str+="*";
// 	}
// 	str+="\n";	
// }
// for(i=pat-1;i>0;i--){
// 	for(j=i;j<=pat-1;j++){
// 		str+=" ";
// 	}
// 	for(k=2*i-1;k>0;k--){
// 		str+="*";
// 	}
// 	str+="\n";	
// }	
	
// console.log(str);
// let fun=(num)=>{
// 	while(num<0){
// 		rem=num%10;
// 		quo=num/10;
// 		if(quo>num){
// 			return(num);
// 		}
// 	}
// }

// let range=200,ans=[],a=[],rem,newNum,quo;
// for(i=1;i<=range;i++){
// 	if(i%9==0){
// 		ans.push(i);
// 	}
// }
// console.log(ans);
// for(i=0;i<ans.length;i++){
// 	if(ans[i]<100){
// 		while(ans[i]<0){
// 			rem=ans[i]%10;
// 			quo=ans[i]/10;
// 			if(quo>rem){
// 				a.push(ans[i]);
// 			}
// 		}
// 	// else{
// 	// 	newNum=a[i]-100;

// 	// }
// 	}
// }
// console.log(a);

// let aw=parseInt(prompt("Enter the number "));
//   let arr=[5,3,11,7,12],res=[];
//   let len=arr.length;
//   for(i=0;i<arr.length;i++){
// 	if(arr[i]>aw){
// 		res.push(arr[i]);
// 	}
//   }
//   console.log(res);
//   res=res.sort((a,b)=>(a-b));
//   console.log(res);
//   if(res){
// 	arr.pop();
// 	arr.push(-1);
// 	console.log(arr);	
//   }else{
// 	console.log(res[0]);  
//   }
  
// Diamond pattern  

// let num = parseInt(prompt("Enter the term"));
// let str = "";
// // Upside pyramid
// for (let i = 1; i <= num; i++) {
//   // printing spaces
//   for (let j = num; j > i; j--) {
//     str += " ";
//   }
//   // printing star
//   for (let k = 0; k < i * 2 - 1; k++) {
//     str += "*";
//   }
//   str += "\n";
// }
// // downside pyramid
// for (let i = 1; i <= num - 1; i++) {
//   // printing spaces
//   for (let j = 0; j < i; j++) {
//     str += " ";
//   }
//   // printing star
//   for (let k = (num - i) * 2 - 1; k > 0; k--) {
//     str += "*";
//   }
//   str += "\n";
// }
// console.log(str); 

// Program to find the string has vowels are not 

// let str1=prompt("Enter the string"),check=0,vow="AEIOUaeiou";
// str1=str1.trim();
// for(i=0;i<str1.length;i++){  // Iterating the given string 
// 	for(j=0;j<vow.length;j++)  // Iterating the vow string
// 	{
// 		if(str1[i]==vow[j]){
// 			check++;			// If any vowels present then check gets incremented
// 		}
// 	}
// }
// if(check)
// 	console.log("The Given string has Vowel");
// else
// 	console.log("The Given string has no Vowel");	

// local storage usage

let obje={
	name:"harish",
	profession:"Hacker"
}
localStorage.setItem("vals",obje);

let ax=localStorage.getItem("vals");
console.table(ax.vals);
