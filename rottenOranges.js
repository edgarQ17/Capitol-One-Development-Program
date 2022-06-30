const directions = [[-1,0],//up
                    [0,1],//right
                    [1,0],//down
                    [0,-1]//left
]


// var orangesRotting = function(grid) {
     

//     var map = new Map();
//     let minutes = 0;
//     let rot =0;

//     // if(grid[0][0] !=2 ||  grid.length ==0 && grid.length[0]==0){
//     //     return 0;
//     // }
//     let fresh =0;
//     let queue =[]  
//     for(let row =0; row< grid.length;row++){

//         for(let col=0; col< grid[0].length; col++){
//             if(grid[row][col]==0){continue;}
//             if(grid[row][col] ===1){
//                 fresh +=1;
//             }
//             if(grid[row][col] ==2){
//                 queue.push([row,col]);
//             }
//         }
//     }




//     while(queue.length){
//             // if(grid[row][col] ===2){
            
//                 const currentPos = queue.pop();                                         
                
//                 for(let x=0; x< directions.length;x++){
//                     const dir = directions[x];
//                     const r = currentPos[0]+ dir[0];
//                     const c = currentPos[1]+ dir[1];

//                     if(r<0 || r>= grid.length || c< 0 || c >= grid[0].length){                                        
//                         continue;
//                     }
//                     if(grid[r ][c] ===1){
//                         fresh--;
//                         rot=1;
                        
//                         // if(map.has( `${r,c}`)){
//                         //     map.delete(`${r,c}`)}
//                         grid[r][c] =2;
//                         queue.push([r,c])
//                     // }

//                 }
//             }
//             if(rot){
//                 rot=0;
//                 minutes ++;
//             }

//     }

// //     for(let row =0; row< grid.length;row++){

// //         for(let col=0; col< grid[0].length; col++){
// //                 if(grid[row][col] ==1){
// //                     map.set(`${row,col}`,1);
// //                     continue;
// //                 }
// //             if(grid[row][col] ===2){
            
// //                 const currentPos = [row,col]
                
// //                 for(let x=0; x< directions.length;x++){
// //                     const dir = directions[x];
// //                     const r = currentPos[0]+ dir[0];
// //                     const c = currentPos[1]+ dir[1];

// //                     if(r<0 || r>= grid.length || c< 0 || c >= grid[0].length){
// //                         continue;
// //                     }
// //                     if(grid[r ][c] ===1){
// //                         rot=1;
// //                         if(map.has( `${r,c}`)){
// //                             map.delete(`${r,c}`)}
// //                         grid[r][c] =2;
// //                         // queue.push([r,c])
// //                     }

// //                 }
// //                 if(rot){
// //                     rot=0;
// //                     minutes ++;
// //                 }
// //             // }
// //         }

// //     }
// //     }
// //     // console.log(map.has([0,0]))
// //     // console.log(map.keys)
// //     return map.size>0?-1:minutes;
// console.log(minutes);
// return fresh>0?-1:minutes==0?0:minutes;
// };










///corrrect solution


var orangesRotting = function(grid) {
     

        // var map = new Map();c 
        let minutes = 0;
        // let rot =0;
    
        if( grid.length ==0){
            return 0;
        }
        let fresh =0;
        let queue =[]  
        for(let row =0; row< grid.length;row++){
    
            for(let col=0; col< grid[0].length; col++){
                if(grid[row][col]==0){continue;}
                if(grid[row][col] ===1){  
                    fresh ++;
                }
                if(grid[row][col] ===2){
                    queue.push([row,col]);
                }
            }
        }
    
    
    
        let currentQueueSize = queue.length;
        
        while(queue.length){
                // if(grid[row][col] ===2){
                if(currentQueueSize==0){
                    minutes++;
                    currentQueueSize = queue.length;

                }
                    const currentPos = queue.pop();                                         
                    currentQueueSize--;   
                    for(let x=0; x< directions.length;x++){
                        const dir = directions[x];
                        const r = currentPos[0]+ dir[0];
                        const c = currentPos[1]+ dir[1];
    
                        if(r<0 || r>= grid.length || c< 0 || c >= grid[0].length){                                        
                            continue;
                        }
                        if(grid[r ][c] ===1){
                            fresh--;
                            // rot=1;
                            
                            // if(map.has( `${r,c}`)){
                            //     map.delete(`${r,c}`)}
                            grid[r][c] =2;
                            queue.push([r,c])
                        // }
    
                    }
                }
                // if(rot){
                //     rot=0;
                //     minutes ++;
                // }
    
        }
        
return fresh>0?-1:minutes;

}
    //     for(let row =0; row< grid.length;row++){
    
    //         for(let col=0; col< grid[0].length; col++){
    //                 if(grid[row][col] ==1){
    //                     map.set(`${row,col}`,1);
    //                     continue;
    //                 }
    //             if(grid[row][col] ===2){
                
    //                 const currentPos = [row,col]
                    
    //                 for(let x=0; x< directions.length;x++){
    //                     const dir = directions[x];
    //                     const r = currentPos[0]+ dir[0];
    //                     const c = currentPos[1]+ dir[1];
    
    //                     if(r<0 || r>= grid.length || c< 0 || c >= grid[0].length){
    //                         continue;
    //                     }
    //                     if(grid[r ][c] ===1){
    //                         rot=1;
    //                         if(map.has( `${r,c}`)){
    //                             map.delete(`${r,c}`)}
    //                         grid[r][c] =2;
    //                         // queue.push([r,c])
    //                     }
    
    //                 }
    //                 if(rot){
    //                     rot=0;
    //                     minutes ++;
    //                 }
    //             // }
    //         }
    
    //     }
    //     }

grid =[
[2,0,1,0,0],    
[1,1,0,0,2],
[0,1,1,1,1],
[0,1,0,0,1]]

console.log(grid);
console.log(orangesRotting(grid));



