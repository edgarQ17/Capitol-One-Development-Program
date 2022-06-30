var isPalindrome = function(s) {
    
    s= s.replace(/[^A-Za-z0-9]/g,'').toLowerCase();
   L=0;
   R= s.length-1;
   while(L< R){
       if(s[L]==s[R]){
           L++;
           R--;
       }
       else{
           return false;
       }


   }
   return true;
}



// class Main {
//     public static void main(String[] args) {
//       String str1 = "Java123is456fun";
  
//       // regex for sequence of digits
//       String regex = "\\d+";
  
//       // replace all occurrences of numeric
//       // digits by a space
//       System.out.println(str1.replaceAll(regex, " "));
  
  
//     }
//   }
  
  // Output: Java is fun