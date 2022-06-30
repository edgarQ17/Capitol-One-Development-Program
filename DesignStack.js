//// we need a push method
/// we need a pop() method\
//peek()
///push(), pop(), isEmpty(), isFull() and an additional operation getMin() 



var stack =[];
var size=0;
var min= null;
var index=null;



var push = function(element){
    stack[size] = element;
    if(min ==null){
        min = element;
        index = size;
    }
    
    size++;
    if(min>element){
        min=element;
        index = size;
    }
}

var pop = function(){
    if(isEmpty() != true){
        const popped = stack[size-1];
        const pSize =size;
        delete stack[size -1];
        size--;
        // console.log("INDEX:"+index + " -- indexOfMin:"+ pSize+"-MIN:"+min)
        if(index == pSize){
            // console.log("true")
            min =null;

            // index =null;

            for(let i=0; i < stack.length-1;i++){
                if(min ==null){
                    min = stack[i];
                    index = i+1;
                }
                if(min>stack[i]){
                    min=stack[i];
                    index = i+1;
                }
            }
        }
        return popped;
    }
}

isEmpty=function(){
    return size==0?true:false;
}

peek=function(){
    return stack[size-1];
     
}

getMin=function(){

    return min;

}


// [4,5,3,6,1]


push(4);
push(5);

push(3);
push(6);
push(1);
pop();
pop();
pop();
pop();
push(2);
pop();
pop();

console.log(stack)
console.log(peek())
console.log(isEmpty())


console.log("min:"+getMin())



// Case
// C1 is acquiring ING, a completely virtual bank. What are the benefits of acquisition? What are our considerations for integrating the two banks?
// Then look at some old if-then-else code, how can we integrate these statements with newer code?


//save cost on onsite buildings ,employee wages, autmoatyize everything
//centalized we must increase digital security, ensure dat retrieval is optimized and allowed on both sysdems

// STAR Method)
// Q: Tell me about a time you explained something technical to a non-technical person
// explain virtual desktops to employees dohmh during device set up
// how it works, remote controller. host vs client. 



// Q: Tell me about a time you learned something new to accomplish a goal.
// I learned datastructures ti improve search time of user records using bst 

// Q: Tell me about the project you are most proud of.
///I am most proud a react fitbud app where I design swiepr page and help build backend connection top db and update records