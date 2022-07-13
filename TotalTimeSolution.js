const numOfMinutes = function(n,headId,managers,informTime){
    const adjList = managers.map(()=>[]);

    for (let index = 0; index < n; index++) {
        const manager = managers[index];
        
        if(manager === -1){continue;}
            adjList[manager].push(index);
    }
    console.log(adjList);
    return dfsGraph(headId,adjList,informTime);

}

const dfsGraph = function(currId,adjList,informTime){
    if(adjList[currId].length===0){return 0;}

    let max =0;
    const subordinates= adjList[currId]

    for (let index = 0; index < subordinates.length; index++) {

        max = Math.max(max,(subordinates[index],adjList,informTime));

    }
    return max + informTime[currId]; 

}
let managers=[2,2,4,6,-1,4,4,5],informTime = [0,0,4,0,7,3,6,0];

console.log(numOfMinutes(8,4,managers,informTime));
// Input: n = 6, headID = 2, manager = [2,2,-1,2,2,2], informTime = [0,0,1,0,0,0]
// Output: 1