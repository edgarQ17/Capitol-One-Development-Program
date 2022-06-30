// left dfs  and right dfs
/// just traverse recursively compare tree 1 left to tree2 right and





var isSymmetric = function(root) {
    if(!root){
        return true;
    }
           
   return recurse(root.left,root.right);

   
};

var recurse = function(tree1, tree2){
   if(!tree1 && !tree2){
       return true;
   }
   if(!tree1 || !tree2){
       return false;
   }
   if(tree1.val != tree2.val){
       return false;
   }
   
   return recurse(tree1.left , tree2.right) && recurse(tree1.right, tree2.left);

 
   
}