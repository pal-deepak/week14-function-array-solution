let arr=['mithun','sachin','abhay','deepak'];
function isUserPresent(name)
{
    // Method 1
// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]==name)
//     {
//         console.log(`yes ${name} is Valid user`);
//         break;
//     }
//     if(i==arr.length-1)
//     {
//         console.log(`No ${name} is not Valid user`);
//         break; 
//     }
    
// }

// Method 2 

if(arr.includes(name))
{
    console.log(`yes ${name} is Valid user`);
             
}
else{
    console.log(`No ${name} is  not Valid user`);

}

}
isUserPresent('sohan');