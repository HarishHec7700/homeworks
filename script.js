// // 1 .Area of circle

// let r = parseInt(prompt("Give radius"));
// let a,bi;
// bi=22/7;
// a=bi*(r**2);
// console.log(a);
// alert(a);
// document.write(a);

// // 2. Area of triangle

// let base,height,at;
// base=parsefloat(prompt("Give the base value"));
// height=parsefloat(prompt("Give the height value"));
// at=0.5*base*height;
// console.log(at);
// alert(at);
// document.write(at);

// 3. Simple Interest

// let p,n,rate,si;
// p=parseFloat(prompt("Give the Principal amount"));
// n=parseFloat(prompt("Give the number of years "));
// rate=parseFloat(prompt("Give the rate of intrest"));
// si= (p*n*rate)/100;
// console.log(si);
// document.write(si);

// 4. Square , Cube

// let sq,cu, ab=parseFloat(prompt("Give the number to find its square and cube "));
// sq=ab**2;
// cu=ab**3;
// console.log(sq);
// document.write(sq);
// console.log(cu);
// document.write(cu);

// 5. Swap of two numbers 

// let x=parseFloat(prompt("Give the  first number")),y=parseFloat(prompt("Give the secound number")),z;
// console.log(x);
// document.write("x=",x);
// console.log(y);
// document.write("y=",y);
// z=x;x=y;y=z;
// console.log(x);
// document.write("x=",x);
// console.log(y);
// document.write("y=",y);

// 6. To calculate the total and average 

// let num=[],n,s=0,sum = 0,i,j;
// n=parseInt(prompt("Enter the total terms"))
// for (i = 0; i < n; i++) {
//     num[i]= parseFloat(prompt("Enter the numbers"));
// }
// for (j = 0; j < n; j++) {
//     sum=sum+num[j];
//     // s=sum;    
// }
// avg=sum/n;
// console.log(sum);
// document.write("the sum is ",sum);
// console.log(avg);
// document.write("the average is ",avg);

// 7. Find the given number is even or odd

// let gn=parseInt(prompt("Enter the Number to find its odd or even"));
// if(gn%2==0){
//     document.write("The given number is an EVEN number");
// }
// else{
//     document.write("The given number is an ODD number");

// }

// 8. To check whether the number is positive or negative

// let gn=parseInt(prompt("Enter the Number to find its positive or negative"));
// if(gn<0){
//     document.write("The given number is positive number");
// }
// else if(gn==0){
//     document.write("The given number is Zero");
// }
// else{
//     document.write("The given number is negative number");
// }

// 9. To find the number is divisible by 5 
// let gn=parseInt(prompt("Enter the number to find whether is divisible by 5 or not"));
// if(gn%5==0){
//     document.write("The given number is divisible by 5");
// }
// else{
//     document.write("The given number is an not divisible by 5");

// }

// 10. To find the number is a multiple of 7 

// let gn2, gn1=parseInt(prompt("Enter the number to find whether is multiple of 7 or not"));
// gn2=parseInt(prompt("Enter the number to find whether is multiple of 7 or not"));
// if(gn1%7==0){
//     document.write("The given number is multiple of 7");
// }
// else{
//     document.write("The given number is an not multiple of 7");
// }
// if(gn2%7==0){
//     document.write("The given number is multiple of 7");
// }
// else{
//     document.write("The given number is an not multiple of 7");
// }
// if(gn1<gn2){
//     console.log("The biggest number is ",gn2);
//     document.write("The biggest number is ",gn2);

// }else if(gn1==gn2){
//     console.log("The biggest number is ",gn2);
//     document.write("The biggest number is ",gn2);
// }
// else{
//     console.log("The biggest number is ",gn1);
//     document.write("The biggest number is ",gn1);
// }

// 11. To find the greatest of  3 numbers 

// let a,b,c;
// a=parseInt(prompt("Enter the first number"));
// b=parseInt(prompt("Enter the secound number"));
// c=parseInt(prompt("Enter the third number"));

// if (a<b) {
//     if (b<c) {
//         console.log(c);
//         document.write("Third number is greater");
//     } else {
//         console.log(b);
//         document.write("Secound number is greater");
//     }
// } else if(a<c) {
//     console.log(c);
//     document.write("Third number is greater");
// } else{
//     console.log(a);
//     document.write(" First number is greater");
// }

// 12. Factorial of a number

// let fac=1,num,i;
// num=parseInt(prompt("Enter the Number to find its Factorial"));
// for (i = num; i>=1; i--) {
//     fac=fac*i;    
// }
// console.log(fac);
// document.write(fac);

// 13. Fibnocci series for n terms 

// let i,n,f,fb,c;
// fb=1;f=0;
// n=parseInt(prompt("Enter the nth term u need to find fibanocci series"));
// console.log(f);
// document.write(f);
// console.log(fb);
// document.write(fb);

// for (let i = 1; i<n-1; i++) {
//     c=f+fb;
//     f=fb;
//     fb=c;
//     console.log(c);
//     document.write(c);
// }

// 14 & 15. Print n even numbers an n odd numbers  

// let n=parseInt(prompt("Enter the numbers under which u need to find the even numbers"));
// for (let i = 0; i < n; i++) {
//     if(i%2==0){
//         console.log(i);
//         document.write(i,"is an even number");
//     }    
// }

// let m=parseInt(prompt("Enter the numbers under which u need to find the odd numbers"));
// for (let i = 0; i < m; i++) {
//     if(i%2==1){
//         console.log(i);
//         document.write(i,"is an odd number");
//     }    
// }

// 16. To find wheather the number is prime or not 

// let n=parseInt(prompt("Enter the number to find whether it is prime or not")),w;
// let a=0;
// for (let i = 2; i <=n/2 ; i++) {
//     if (n%i==0) {
//     //     console.log(n ,"is not a prime number");
//     //     document.write(n,"is not a prime number");  
//         a=1;
//         break;
//     } 
// }
// if(a==0){
//     console.log(n,"Is a prime number");

// }else {
//     console.log(n,"Is a not a prime number");

// }

// 17. To find the prime numbers in a range 
let n=parseInt(prompt("Enter the range to find prime numbers")),w;
let a=0;
for(let j=2;j<=n;j++){

    for (let i = 2; i <=j/2 ; i++) {
        if (j%i==0) {
        //     console.log(n ,"is not a prime number");
        //     document.write(n,"is not a prime number");  
            a=1;
            break;
        } 
    }
    if(a==0){
        console.log(j,"Is a prime number");

    }else {
        console.log(j,"Is a not a prime number");

    }
}
// 18. Print given N numbers in sequence
// let n = parseInt(prompt("Enter the number to print in sequence"));

// for(let i=0;i<=n;i++){
//     console.log(i);
//     document.write(i, ",");
// }

// 19.Print given N numbers in  reverse sequence

// let n = parseInt(prompt("Enter the number to print in reverse sequence"));

// for(let i=n;i>=0;i--){
//     console.log(i);
//     document.write(i, ",");
// }

// 20. Ascending and descending order of given three numbers

// let a= parseFloat(prompt("Enter the first value")), b= parseFloat(prompt("Enter the secound value")), c= parseFloat(prompt("Enter the third value"));
// if((a>b) && (a>c)){
//     if(b>c){
//         console.log("The ascending order is ",c,",",b,",",a);
//         console.log("The decending order is ",a,",",b,",",c);
//         document.write("The ascending order is ",c,",",b,",",a);
//         document.write("The decending order is ",a,",",b,",",c);
//     } 
//     else{
//         console.log("The ascending order is ",b,",",c,",",a);
//         console.log("The decending order is ",a,",",c,",",b);
//         document.write("The ascending order is ",b,",",c,",",a);
//         document.write("The decending order is ",a,",",c,",",b);
    
//     }   
// }
// if((b>a) && (b>c)){
//     if(a>c){
//         console.log("The ascending order is ",c,",",a,",",b);
//         console.log("The decending order is ",b,",",a,",",c);
//         document.write("The ascending order is ",c,",",a,",",b);
//         document.write("The decending order is ",b,",",a,",",c);
//     } 
//     else{
//         console.log("The ascending order is ",a,",",c,",",b);
//         console.log("The decending order is ",b,",",c,",",a);
//         document.write("The ascending order is ",a,",",c,",",b);
//         document.write("The decending order is ",b,",",c,",",a);
    
//     }   
// }
// if((c>b) && (c>a)){
//     if(b>a){
//         console.log("The ascending order is ",a,",",b,",",c);
//         console.log("The decending order is ",c,",",b,",",a);
//         document.write("The ascending order is ",a,",",b,",",c);
//         document.write("The decending order is ",c,",",b,",",a);
//     } 
//     else{
//         console.log("The ascending order is ",b,",",a,",",c);
//         console.log("The decending order is ",c,",",a,",",b);
//         document.write("The ascending order is ",b,",",a,",",c);
//         document.write("The decending order is ",c,",",a,",",b);
    
//     }   
// }
// 21. Give grades according to the scored marks

// let marks=parseFloat(prompt("Enter the scored mark to display the grades"));
// switch (marks) {
//     case (if(marks>85)):
//         console.log("He/She has scored a 'A' grade ");
//         break;

//     // default:
//     //     break;                  xxxxxxx
// }

//  22.  To check the marriage eligubility 

// let g,age=parseInt(prompt("Enter the age of the groom/ bride "));
// g=parseInt(prompt("Type '1' if its groom or '0' if its bride "));
// if (g){
//     if (age>=21){
//         console.log("The groom is ready for marriage");
//     }else if (age>35){
//         console.log("The groom should hurry up for marriage");
//     }else {
//         console.log("The groom is  not ready for marriage since he is a minor");
//     }

// }else {
//     if(age>=18){
//         console.log("The bride is ready for marriage");
//     }
//     else{
//         console.log("The bride is not ready for marriage");
//     }
// }

// 23. To find the given number is greater than 10 or not 

// let n=parseFloat(prompt("Enter the number to find whether it's greater thn "));
// if (n<10) {
//     console.log("The Given number is lesser than 10");
// }else if(n==10){
//     console.log("The Given number is equal to 10");
// }
// else{
//     console.log("The Given number is greater than 10");
// }

//  24. Addition 

// let x=parseFloat(prompt("Enter the number ")),y=parseFloat(prompt("Enter the number "));
// console.log("the addition is ",x+y);

//  25. Subtraction 

// let x=parseFloat(prompt("Enter the number ")),y=parseFloat(prompt("Enter the number "));
// console.log("the subtraction is ",x-y);

// 26. Multiplication

// let x=parseFloat(prompt("Enter the number ")),y=parseFloat(prompt("Enter the number "));
// console.log("the multiplication is ",x*y);

// 27. Division

// let x=parseFloat(prompt("Enter the number ")),y=parseFloat(prompt("Enter the number "));
// console.log("the division ",x/y);

// 28. To print the multiplication table of the given number 

// let n=parseInt(prompt("Enter the number to display its multiplication table "));
// let m= parseInt(prompt("Enter the last number or times u need in multiplication table "));
// console.log("The multiplication table of ",n,"is");
// document.write("The multiplication table of ",n,"is/n");

// for (let i = 1; i <=m; i++) {
//     console.log(n,"*",i,"=",n*i);
//     document.write(n,"*",i,"=",n*i);
    
// }

// 29. To find Sum of a number

// let num,sum=0,rem,n;
// num=parseInt(prompt("Enter the number to find its sum of itself"));
// n= parseInt(num);
// for (let i =num; i >0; i=i/10) {
//     i=parseInt(i);
//     rem=i%10;
//     sum+=rem;
// }
// // sum=parseInt(sum);
// console.log(sum);

// 30. To write a nunmber in reverse order 

// let n=parseInt(prompt("Enter the nummer to be reversed")),rem;
// console.log("The given number is",n);
// while(n>0){
//     n=parseInt(n);
//     rem=n%10;
//     n=n/10;                              ???????
//     console.log(rem);
// }

