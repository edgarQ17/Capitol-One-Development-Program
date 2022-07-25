
const checkCycle = function(n,preReqs){

    let adjList = new Array(n).fill(0).map(() => []);

    let degreeArray  = new Array(n).fill(0);

   for (let index = 0; index < preReqs.length; index++) {
    const element = preReqs[index];
    degreeArray[element[0]] +=1;
    adjList[element[1]].push(element[0]);    
   }
   console.log("array begining:"+degreeArray);

   const stack =[];


   for (let index = 0; index <degreeArray.length; index++) {
    if(degreeArray[index]===0){
        stack.push(index);
    }

   }

   let count =0;
  
   

   while(stack.length){  //0,4

    const current = stack.pop();
    count++;
    const adjacent = adjList[current];
        for (const innerIndex of adjacent) {
            degreeArray[innerIndex] --;
            if(degreeArray[innerIndex]===0){
                stack.push(innerIndex);
            }
        }
       
    }
    return count ===n;
   }



  

let preReqs = [[1,0],[2,1],[2,5],[0,3],[4,3],[3,5],[4,5]];

checkCycle(6,preReqs);


// let arr = [[0,5],[0,4],[1,4],[3,0],[3,2]];


