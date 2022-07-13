


// const employees =8;

// const managersArray = [2, 2, 4, 6, -1, 4, 4, 5];
// const informTimeArray = [0, 0, 4, 0, 7, 3, 6, 0];

// const managersArray = [2,2,-1,2,2,2], informTimeArray = [0,0,1,0,0,0]



const managersArray = [-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6],informTimeArray=[1,1,1,1,1,1,1,0,0,0,0,0,0,0,0];

// let  totals=0;

// const findTotalTime= function(head,employees,managers,informTime){
//     let tTotal=0;

//     for (let index = 0; index < employees; index++) {
//         // const element = array[index];
//         if(index == head){
//             continue;
//         }
//         dfsTraversal(index,employees,managers,informTime,tTotal);
//     }


//     return totals;

// }


// dfsTraversal = function (employee,employees,managers,informTime,total){
//     total+=informTime[employee];//get time

//     if(managers[employee] ==-1){ 
//         if(totals<total){
//             totals=total;
//         }
        
//         // totals = total>totals?total:totals;
        
//         return;}

//     dfsTraversal(managers[employee],employees,managers,informTime,total);

    
// } 


// Input: n = 6, headID = 2, manager = [2,2,-1,2,2,2], informTime = [0,0,1,0,0,0]
// Output: 1


// Input: n = 1, headID = 0, manager = [-1], informTime = [0]
// Output: 0


//my version not working leetcode







//his version

const numOfMinutes = function(n,headId,managers,informTime ){


    const adjList = managers.map(()=>[]);
    for(let e=0; e<n; e++){
        const manager = managers[e];
        if(manager ===-1){continue;}
        adjList[manager].push(e);
    }

    return dfsTraversal(headId,adjList,informTime);
} 

const dfs = function(currentID,adjList,informTime){
    if(adjList[currentID].length ===0){
        return 0;
    }
    let max=0;
}






console.log(findTotalTime(0,15,managersArray,informTimeArray));