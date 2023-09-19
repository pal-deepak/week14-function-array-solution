function CheckRemainingDays(Stratdate)
{
    const currentdate= new Date;
    const eventdate=new Date(Stratdate);
    const difference = eventdate-currentdate;
    const daysleft=Math.ceil(difference/(1000*60*60*24));
    return daysleft;
}
 let daysleft=CheckRemainingDays('2023-09-16');
 console.log(daysleft);