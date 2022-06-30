


// traversal= function(matrix){
//     //  let seen =new seen();
//     let seen = new Array(matrix.length).fill(0).map(()=>new Array(matrix[0].length).fill(false));
//     let queue=[];
//     let reArray=[];
//     queue.push({Row:0,Column:0});
//     seen[0][0]=1;
//     // reArray.push(matrix[0][0]);
//     return traverseBFS(0,0,seen,matrix,queue,reArray);
// }

// traverseBFS =function(row,column,seen,matrix,queue,reArray){

//     if(queue.length>0){
//         let location = queue.shift();
//         row = location.Row;
//         column = location.Column;
//      reArray.push(matrix[row][column]);

//     if(up(row)>0 &&  seen[up(row)][column]!=1){ //up 

//         queue.push({Row: up(row), Column: column});  ///{row: r, column: c};
//         seen[up(row)][column]=1;
//         // reArray.push(matrix[up(row)][column]);
//         // return traverse(up(row),column,seen,matrix,reArray)
//     }

//     if(right(column)< matrix[0].length&& seen[row][right(column)]!=1){//right
//         seen[row][right(column)] = 1;
//         queue.push({Row: row, Column: right(column)});
//         // reArray.push(matrix[row][right(column)]);
//         // return traverse(row,right(column),seen,matrix,reArray);
//     }

//     if(down(row)<matrix.length && seen[down(row)][column]!=1){ //down 
//         seen[down(row)][column]=1;  
//         queue.push({Row: down(row), Column: column});
//         // reArray.push(matrix[down(row)][column]);
//         // return traverse(down(row),column,seen,matrix,reArray);
//     }

//     if(left(column)>=0 && seen[row][left(column)]!=1){//left
//         queue.push({Row: row, Column: left(column)});
//         seen[row][left(column)] = 1;
//         // reArray.push(matrix[row][left(column)]);
//     //    return traverse(row,left(column),seen,matrix,reArray);
//     }

//     return traverseBFS(row,column,seen,matrix,queue,reArray);

// }

    
//     return reArray; 

// }




// up= function (row){
//     row = row-1;
//     return row;
// }
// right= function (column){
//     column = column+1;
//     return column;
// }
// down= function (row){
//     row = row+1;
//     return row;
// }
// left= function (column){
//     column = column-1;
//     return column;
// }


// let arr = [[1,2,3,4],
//            [5,6,7,8],
//            [9,10,11,12] 
// ];




///problem with seen


////correct solution
const directions = [[-1,0],
                    [0,1],
                    [1,0],
                    [0,-1]
]

traversal= function(matrix){
    //  let seen =new seen();
    let seen = new Array(matrix.length).fill(0).map(()=>new Array(matrix[0].length).fill(false));
    let queue=[];
    let reArray=[];
    queue.push([0,0]);

    while(queue.length){
        const currPos = queue.shift();
        const row = currPos[0];
        const col = currPos[1];
        if(row < 0 || row >= matrix.length || col < 0 || col>= matrix[0].length || seen[row][col]){
            continue;
        }

        seen[row][col]= true;
        reArray.push(matrix[row][col]);

        for(let i=0; i< direction.length;i++){
            const currentDir = directions[i];
            queue.push([row+ currentDir[0], col + currentDir[1]]);
        }

    }


    return reArray;
}
let arr = [[1,2,3,4,5],
           [6,7,8,9,10],
           [11,12,13,14,15],
           [16,17,18,19,20] 

];

console.log(traversal(arr));
