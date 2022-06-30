const directions = [[-1,0],//up
                    [0,1],//right
                    [1,0],//down
                    [0,-1]//left
]

countIsland = function(IslandArray){


    if(IslandArray.length ===0) return 0;


    let count =0;
    // let seen = new Array(IslandArray.length).fill(0).map(()=>new Array(IslandArray[0].length).fill(false));

    //  let seen = new Array(IslandArray.length).fill(0).map(() => new Array(IslandArray[0].length)).fill(false);
    

     let queue=[];

     for(let row =0; row< IslandArray.length;row++){

        for(let col=0; col< IslandArray[0].length;col++){

            if(IslandArray[row][col] ===1){
                count++;
                queue.push([row,col]);
                while(queue.length){
                    const currPos = queue.shift();
                    const row = currPos[0];
                    const col = currPos[1];
                
                   
                    IslandArray[row][col]= 0;
                    for(let i=0; i< directions.length;i++){
                        const currentDir = directions[i];
                        if(row < 0 || row >= IslandArray.length || col < 0 || col>= IslandArray[0].length ){
                            continue;
                        }

                        if(IslandArray[row+currPos[0]][col+currPos[1]] ===1){
                            queue.push([row+ currentDir[0], col + currentDir[1]]);

                        }
                    }
            }
        }


     }
 
 
     return count;
    }}









    // while(row<IslandArray.length){
    //     if(row < 0 || row >= IslandArray.length || col < 0 || col>= IslandArray[0].length || seen[row][col]){
    //         console.log("true here");
    //         continue;
    //     }
    //     // number++;
    //     traverse([row,col],IslandArray,seen);
    //     col++;
    //     if(col >= IslandArray[0].length){
    //         col=0; 
    //         row++;
    //     }

    // }

    //  return number;


// traverse = function(currPos,IslandArray,seen){
//     const row = currPos[0];
//     const col = currPos[1];
   
//    if(currPos[0] >= 0 && seen[row][col]!=true && IslandArray[row][col]!=false){
//     const currentDir = directions[0];
//     seen[row][col] =true;
//     traverse([row+ directions[0] ,col + directions[1]], IslandArray,seen);
//    }
//    if(currPos[1] <= IslandArray[0].length && seen[row][col]!=true && IslandArray[row][col]!=false){
//     const currentDir = directions[1];

//     seen[row][col] =true;
//     traverse([row+ directions[0] ,col + directions[1]], IslandArray,seen);
//     } 
// if(currPos[0] <IslandArray.length && seen[row][col]!=true && IslandArray[row][col]!=false){
//     const currentDir = directions[2];

//     seen[row][col] =true;
//     traverse([row+ directions[0] ,col + directions[1]], IslandArray,seen);
// }
// if(currPos[1] >= 0 && seen[row][col]!=true && IslandArray[row][col]!=false){
//     const currentDir = directions[3];

//     seen[row][col] =true;
//     traverse([row+ directions[0] ,col + directions[1] ], IslandArray,seen);
// }
// console.log(seen)
// }


console.log(countIsland([["1","1","1","1","0"],
                         ["1","1","0","1","0"],
                         ["1","1","0","0","0"],
                         ["0","0","0","0","1"]]));