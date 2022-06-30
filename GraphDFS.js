
const seen = {};
    const reArray =[];
const AdjacentList = [
    [1,3], //0
    [0],//1
    [3,8],//2
    [0,4,5,2],//3
    [3,6],//4
    [3],
    [4,7],//6
    [6],
    [2]
];


const traverse = function(graph){
    dfsTraversal(0,graph,reArray,seen);
    return reArray;
}
const dfsTraversal = function(currPos, graph,reArray,seen){
    let currRow= graph[currPos];
    reArray.push(currPos);
    seen[currPos]=1;
    for (const Idx of currRow) {
        if(!seen[Idx]){
            dfsTraversal(Idx,graph,reArray,seen);
        }
    }
}


console.log(traverse(AdjacentList,reArray,seen));