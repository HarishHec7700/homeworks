let users=[
    {
        email:"amutha@gmail.com",
        pass:"amu@123",
        userName:"Amutha",
        age:23
    },
    {
        email:"priya@gmail.com",
        pass:"priya@123",
        userName:"Priya",
        age:22
    } ,   
    {
        email:"durga@gmail.com",
        pass:"durga@123",
        userName:"Durga",
        age:24
    },
    {
        email:"anitha@gmail.com",
        pass:"ani@123",
        userName:"Anitha",
        age:21
    },
    {
        email:"aruna@gmail.com",
        pass:"aruna@123",
        userName:"Aruna",
        age:21
    }
]    

for(i of users){
    // console.log(i); //expected output ??
     for(j in i){
        // console.log(j);
        // console.log(i[j]);
        // console.log(i.userName);
    }
}

users.forEach((val)=>{
    // console.log(val); 
    console.log("saran");
})

let arr1=[1,8,4,5,1,4,7];
for(i=0;i<arr1.length;i++){
        if(arr1[i]==arr1[i+1]){
            console.log("hi");
            console.log(arr1[i]);
        }
}