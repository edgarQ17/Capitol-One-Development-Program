let AdjacentList = [
    [1,3], //0
    [0],//1
    [3,8],//2
    [0,2,4,5],//3
    [3,6],//4
    [3],
    [4,7],//6
    [6],
    [2]
];



// const bfsTraversal = function( AdjacentList){
//     let queue =[]
//     const mySet1 = new Set()
//         let reArray =[];
//     queue.push(0);
//     while(queue.length){
//         const currPos = queue.shift();
//         // console.log(AdjacentList[2].length)

//         for (let index = 0; index < AdjacentList[currPos].length; index++) {
//             const  currIndx = AdjacentList[currPos][index] ;
//             if(mySet1.has(currIndx)) continue;

                   
//                             queue.push(currIndx);
//                             mySet1.add(currIndx);
//                             reArray.push(currIndx);
                           
//         }

//     }

//     mySet1.clear;
//     return reArray;
// }



const bfsTraversal = function( AdjacentList){
    let queue =[0]
    const seen = {};
        let reArray =[];
    while(queue.length){
        const currPos = queue.shift();
        // console.log(AdjacentList[2].length)
        reArray.push(currPos);
        seen[currPos] =1;

        for (let index = 0; index < AdjacentList[currPos].length; index++) {
            const  currIndx = AdjacentList[currPos][index] ;
            if(!seen[currIndx]) {
                queue.push(currIndx);
            }

                   
                            // queue.push(currIndx);
                            // seen[currIndx] =1;
                            // reArray.push(currIndx);
                           
        }

    }

    return reArray;
}



console.log(bfsTraversal(AdjacentList));