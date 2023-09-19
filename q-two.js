// Method 1 
// function totalcartvalue(a,b,c)
// {
//   return a+b+c;
// }
// let res=totalcartvalue(10,20,30);
// console.log(`Total value is ${res}`);

// Method 2

function totalcartvalue()
{
    let Totalvalue=0;
    for(let i=0;i<arguments.length;i++)
    {
        Totalvalue+=arguments[i];
    }
    console.log(`Total value is ${Totalvalue}`);
    return Totalvalue;
}

totalcartvalue(10,20,30,40);