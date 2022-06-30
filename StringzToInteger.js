///transform string to integer

/*
The algorithm for myAtoi(string s) is as follows:

Read in and ignore any leading whitespace.
Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
Return the integer as the final result.
*/


const map = new Map([
    ['0',1],
    ['1',1],['2',1],['3',1],['4',1],['5',1],['6',1],['7',1],['8',1],['9',1]
])
var myAtoi = function(str){
    str = str.trim();
   let sign = "+";
    let returnValue="";
    let space=0;
   for(let i=0; i<str.length;i++){
            if(space==1 && map.has(str[i])){
                 return 0;
             }   
         else if(map.has(str[i])){
           returnValue+=str[i];
        }
       else  if(i==0 && str[i] == '-'){
            sign='-';
       }
       else if(i==0 &&str[i] == '+'){
        sign='+';
   }
        else if(str[i] == '-' || str[i] == '+'){
            if(str[i]== sign ){
                break;
            }
            else{
                return 0;
            }
        }
        else if(str[i] == ' '   ){
            if(space==0){
                space=1;
            }
         
        }
       else{
           break;
       }

   }
     returnValue = returnValue.length>0?parseInt(returnValue)* (sign=='-'?-1:1)  :0;
     if(returnValue>-(2**31) && returnValue <(2**31)-1){
        return returnValue;
    }
     if(returnValue<=-(2**31)){
         return -(2**31);
     }
      if(returnValue >=(2**31)-1){
         return (2**31)-1;
     }
    
     
}


// //Input
// "-91283472332"
// Output
// -91283472332
// Expected
// -2147483648



let str = "98762 a";
// console.log("here"+('0'<'3'));

console.log(myAtoi(str));