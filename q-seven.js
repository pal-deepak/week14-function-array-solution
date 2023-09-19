function generateRandom()
{
    let otp= Math.floor(1000+ Math.random()*9000);
    return otp;
}
let otp1=generateRandom();
console.log(`Your otp is ${otp1}`);