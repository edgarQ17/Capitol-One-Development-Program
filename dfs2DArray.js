


traversal= function(matrix){
    //  let map =new Map();
    let seen = new Array(matrix.length).fill(0).map(()=>new Array(matrix[0].length).fill(false));
    let reArray=[];
     return traverse(0,0,seen,matrix,reArray);
}

traverse =function(row,column,map,array,reArray){



    
    reArray.push(array[row][column]);
    if(up(row)>0 &&  map[up(row)][column]!=1){ //up 
        map[up(row)][column]=1;
        return traverse(up(row),column,map,array,reArray)
    }

    if(right(column)< array[0].length&& map[row][right(column)]!=1){//right
        map[row][right(column)] = 1;
        return traverse(row,right(column),map,array,reArray);
    }

    if(down(row)<array.length && map[down(row)][column]!=1){ //down 
        map[down(row)][column]=1;  
        return traverse(down(row),column,map,array,reArray);
    }   

    if(left(column)>=0 && map[row][left(column)]!=1){//left
        map[row][left(column)] = 1;
       return traverse(row,left(column),map,array,reArray);
    }
    return reArray;
}




up= function (row){
    row = row-1;
    return row;
}
right= function (column){
    column = column+1;
    return column;
}
down= function (row){
    row = row+1;
    return row;
}
left= function (column){
    column = column-1;
    return column;
}


let arr = [[1,2,3,4],
 [5,6,7,8],
 [9,10,11,12]
];

console.log(traversal(arr));