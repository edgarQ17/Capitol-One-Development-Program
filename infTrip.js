
const directions = [[-1,0],
[0,1],
[1,0],
[0,-1]
]



// var numberSteps = function(grid){
//     let queue =[];
//     for(let r=0; r<grid.length;r++){
//         for(let c=0; c<grid[0].length;c++){
//             if(grid[r][c] ===Infinity){
//                 continue;
//                         }
//             if(grid[r][c] ===0){

//                 queue.push([r,c]);

//             }
//         }
//     }
//     // console.log(queue)
//     let steps=1;
//     // console.
//     const wall =-1;
//     let currentQueueSize = queue.length;
//     while(queue.length){
//         if(currentQueueSize ==0){
//             steps++;
//             currentQueueSize = queue.length;
//         }
//         const currentPos= queue.shift();

//         currentQueueSize--;

//         for(let i=0; i< directions.length;i++){
//             const direction= directions[i];
//             const row = currentPos[0] + direction[0];
//             const col = currentPos[1]+ direction[1];
//             if(row<0 || row>= grid.length || col<0||col>=grid[0].length){
//                 continue;
//             }
//             const newPos = grid[row][col];
//             console.log("row:"+row+""+"col:"+col+"  newpos:"+newPos)

//             if(newPos ===wall ){   //skip recounting when obv more steps
//                 continue;
//             }
//             if(newPos ===INF){
//              //   steps++;   ////increase steps
//                 grid[row][col] = steps;
//                 queue.push([row,col]);
//             }
//             if(steps< newPos ){
//                 grid[row][col] = steps;
//                 ////check if it's a new min steps
//             }
//         }

//     }


//     return grid;

// }
// const INF = 2147483647;

// const testMatrix = [
//   [INF, -1, 0, INF],
//   [INF, INF, INF, -1],
//   [INF, -1, INF, -1],
//   [0, -1, INF, INF]
// ];
// console.log(numberSteps(testMatrix));

///bfs version mine works



/////DFS VERSION    


const wall =-1;
const gate=0;
const INF = 2147483647;

const testMatrix = [
  [INF, -1, 0, INF],
  [INF, INF, INF, -1],
  [INF, -1, INF, -1],
  [0, -1, INF, INF]
];




const wallsAndGates = function(matrix){
    for(let r=0; r<matrix.length;r++){
                for(let c=0; c<matrix[0].length;c++){
                    if(matrix[r][c] ===Infinity){
                        continue;
                                }
                    if(matrix[r][c] ===0){
        
                        dfs([r,c],0,matrix);
        
                    }
                }
            }
            return matrix;
}


// const dfs =function(currentPos, steps, grid){
//         const step= steps+1;

//         for(let i=0; i< directions.length;i++){   
//             const direction = directions[i];
//             const row = currentPos[0] + direction[0];
//             const col = currentPos[1]+ direction[1];
//             if(row<0 || row>= grid.length || col<0||col>=grid[0].length){
//                 continue;
//             }
//             const newPos = grid[row][col];
//             // console.log("row:"+row+""+"col:"+col+"  newpos:"+newPos)

//             if(newPos ===wall ){   //skip recounting when obv more steps
//                 continue;
//             }
//             if(newPos ===INF){
//              //   steps++;   ////increase steps
//                 grid[row][col] = step;
//                 dfs([row,col],step,grid);
//             }
//             if(steps< newPos ){
//                 grid[row][col] = step;
//                 ////check if it's a new min steps
//             }
//         }

//     }
const dfs =function(currentPos, steps, grid){
    if(currentPos[0]<0 || currentPos[0]>= grid.length || currentPos[1]<0|| currentPos[1] >= grid[0].length || steps>grid[currentPos[0]][currentPos[1]]){
                        return;
                    }
      
     grid[currentPos[0]][currentPos[1]] = steps;

     for(let i=0; i<directions.length;i++){
        const direction = directions[i];

        dfs([currentPos[0] + direction[0],currentPos[1]+ direction[1]],steps+1,grid);
     }               

}

console.log(wallsAndGates(testMatrix));