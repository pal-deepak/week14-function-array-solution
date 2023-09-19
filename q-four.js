const product=[
    {name:'Laptop',
      Price:120000,
    },
    {name:'Phone',
      Price:12000,
    },
    {name:'Bag',
      Price:1200,
    },
    {name:'Pen',
      Price:120,
    },
]
let p=-Infinity;
let n;
let p1=Infinity;
let n1;
function Max_MIN()
{
   for(let Pro of product)
   {
    if(Pro.Price>p)
    {
        p=Pro.Price;
        n=Pro.name;
    }
    if(Pro.Price<p1)
    {
        p1=Pro.Price;
        n1=Pro.name;
    }
   }
}

Max_MIN();
console.log(`The highest value  of Product is ${n} which value is ${p}`);
console.log(`The Lowest value  of Product is ${n1} which value is ${p1}`);