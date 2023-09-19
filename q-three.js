const students=[
    {
     name:"Rohan",
     marks:90 ,
    },
    {
     name:"Rohan",
     marks:90 ,
    },
    {
     name:"sohan",
     marks:80 ,
    },
    {
     name:"Rohit",
     marks:95 ,
    },
    {
     name:"Deepak",
     marks:30 ,
    },
    {
     name:"Karan",
     marks:99 ,
    },
    
    ]

    function check(name)
    {
        for(let student of students)
        {   if(student.name===name)
            {
                if(student.marks > 90)
            {
                console.log(`Congrutulation ${name}  You are passed`);
            }
            else{
                console.log(`Sorry ${name}  You are fail`); 
            }
            }
           
        }
    }

   check('Deepak');

