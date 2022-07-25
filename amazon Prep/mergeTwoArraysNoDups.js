// Programming question - Given 2 sorted arrays, merge them.
///Follow up, ensure only 1 of each element is saved in the merged array aka no duplicates


mergeArrays = function(arr1,arr2){
    let l=0;
    let r=0;
    
    // let reArray=[];

    let set1 = new Set();
    
    
    while(l<arr1.length||r<arr2.length){
        const left=arr1[l],right=arr2[r];
        if(arr1[l]==null && arr2[r]!=null){
            set1.add(arr2[r]);
            r++;
        }
         if(arr2[r]==null && arr1[l]!=null){
            set1.add(arr1[l]);
            l++;
        }
         
        if(left<right){
            set1.add(left);
            l++;

        }
          if(left >right){
            set1.add(arr2[r]);
            r++;

        }
          if(left==right){
            set1.add(right);
                l++;
                r++;

        }
           }
    
    return Array.from(set1);

}

// let arr1= [ 1, 3, 4, 5], arr2= [2, 4, 6, 8]; 


let arr1= [ -1,4,9], arr2 = [4, 7, 8];
// Output: arr3[] = {4, 5, 7, 8, 8, 9} 


console.log(mergeArrays(arr1,arr2));









