// Given a string s and a dictionary of words dict, add spaces in s to construct a sentence where each
// word is a valid dictionary word. Return all such possible sentences. For example, given:
// s = "catsanddog", dict = ["cat", "cats", "and", "sand", "dog"], the solution is ["cats and dog", "cat sand dog"].




var createSpace = function(s,dict){
    let map = new Map();////map
    let prev =0;

    for (const word of dict) {
        map.set(word,1);
    }
    let word ="";
    let ans=[];
    for (let index = 0; index < s.length; index++) {
        if(map.has(word)){
            if(prev<2){
             dfs(word+" ",index,s,map,ans);
                prev++;
            }
            else{
                break;
            }
        }
            word+=s[index];
           
        
       }
       return ans;


}


var dfs = function(word,index,s,map,ans){
    // console.log(word);
    // console.log(word.length);
    // console.log(index);
    let nWord = "";
    for (let i = index; i < s.length; i++) {
        if(map.has(nWord)){
            word+=" ";
            nWord="";
        }
        nWord+=s[i];
        word+=s[i];
    }
    ans.push(word);  
}

// let s = "catsanddog", dict = ["cat", "cats", "and", "sand", "dog"];
let s = "applepenapple", dict = ["apple","pen"]

console.log(createSpace(s,dict));