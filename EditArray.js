// Input :  





///move all zeroes to end of array in place


//two pointer approach and switch left to right oif zero

//O(1) constant swap
//o(n) space we doin't create anopther array


// moveZeroes = function(arr){
//     l = 0;
//     r= arr.length-1;
//     while(l<r){
//         if(arr[r] == 0){
//             r--;

//         }
//         if( arr[l] ==0){
//             swap(l,r,arr);    
//         }
//         l++;
        
//     }
//     return arr;
// }



// swap = function(l, r, arr){
//     const pR = arr[r];
//     arr[r]= arr[l];
//     arr[l] = pR;
// }

// arr = [1, 2, 0, 4, 3, 0, 5, 0];
// // Output : arr[] = {1, 2, 4, 3, 5, 0, 0, 0};



////////in place and 

var moveZeroes = function(arr){
    l = 0;
    r= 0;
    while(r<arr.length){
        if( arr[l] ==0 &&  arr[r]!=0 ){
            swap(l,r,arr);    
            l++;
        }
        if(arr[l] !=0){
            l++;
        }
        r++;
    }
    return arr;
}



 var swap = function(l, r, arr){
    const pR = arr[r];
    arr[r]= arr[l];
    arr[l] = pR;
}




arr = [1, 2, 0, 0, 0, 3, 6];

///[1,0,1]
// arr= [1,0,1];

console.log( moveZeroes(arr));