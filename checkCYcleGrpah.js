const checkCycle = function(n,preReq){
    let adjList = new Array(n).fill(0).map(()=>[]);

    for (let index = 0; index< preReq.length; index++) {
        const requisite = preReq[index];
        adjList[requisite[1]].push(requisite[0]);
    }
    // let state = true;
console.log(adjList)
console.log("-----------------")

    for (let index = 0; index < adjList.length; index++) {
        const preReq = adjList[index];
        const seen ={};
        seen[index]=1;
        if(cycleIdentifier(seen,preReq,adjList)===false){
            return false;
        }
    }
    return true;

   }

const cycleIdentifier = function(seen,start,adjList){
    if(start ==null || start.length===0){
        // seen ={}
        
        return true;}

    // console.log()
    // let element = adjList[start];

    for (let index = 0; index < start.length; index++) {
        const preReq = start[index];
            // console.log(preReq);
        
        if(seen[preReq]===1){
            return false;
        }
        if(adjList[preReq].length>0 ){seen[preReq]=1};
        if(cycleIdentifier(seen,adjList[preReq],adjList)===false){
            return false;
        }
        
    }
    return true;
}

 
////////////////////////////////////
///SOLUTION




const canFinish = function(n,preReq){
    let adjList = new Array(n).fill(0).map(()=>[]);

    for (let index = 0; index< preReq.length; index++) {
        const requisite = preReq[index];
        adjList[requisite[1]].push(requisite[0]);
    }




    for (let v = 0; v < adjList.length; v++) {///each array in adjList
        const queue =[];
        const seen ={};
        for(let i=0;i<adjList[v].length;i++){
            queue.push(adjList[v][i]);    ///each item inside the array   [ [ 1, 2 ], [ 2 ], [ 3 ], [] ]
        }

        while(queue.length){        ///[]
            const current = queue.shift();
            seen[current] = true;   ///seen : 1 , 2  , 3 
        
        if(current ===v){
            return false;
        } 
        const adjacent = adjList[current];
        
        
        for (let index = 0; index < adjacent.length; index++) {
            const next = adjacent[index];
            if(!seen[next]){
                queue.push(next);
            }
            
        }
    }

   }

   return true;

}







let n =4;
// let preReqs = [[1,0],[2,1],[2,5],[0,3],[4,3],[3,5],[4,5]];

let preReqs = [[1,0],[2,0],[2,1],[3,2]];



// let preReqs = [[1,0],[2,0],[2,1],[0,2],[3,2],[3,3]];`



////////////////////// 


console.log(canFinish(n,preReqs));