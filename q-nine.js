function Match(str)
{
   const charset = new Set();
   for(const char of str)
   {
    if(charset.has(char))
    {
        console.log("String is not unique");
        return false;
    }
    charset.add(char);
   }

   console.log("String is  unique");
        return true; 
}
//  Match("deepak");
Match("Sachin")