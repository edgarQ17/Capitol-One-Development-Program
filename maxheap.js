


class PriorityQueue{
    // var queue = [];

    constructor(comparator = (a,b) => a > b){
        this._heap =[];
        this._comparator = comparator;
    }
    
size= function(){
    return this._heap.length;

}

isEmpty = function(){
    return this.size() ===0;
}

peek = function(){
    return this._heap[0];
}

push = function(element){
this._heap.push(element);
this._siftUp();
return this.size();
}

pop = function(){
    
    if(this.size()>1){
        this._swap(0,this.size()-1);
       
    }
    const removed =  this._heap.pop();
    this._siftDown();
    return removed;
} 


//underscore _ equivalent to private

_parent(idx){
    Math.floor((idx-1)/2);
}
_leftChild(idx){
    Math.floor((idx*2)+1);
}
_rightChild(idx){
    Math.floor((idx*2)+2);
}

_swap(i,j){
    const temp= this._heap[i];
    this._heap[i]= this._heap[j];
    this._heap[j] = temp;
}

_siftUp(){
    let nodeIdx = this.size()-1;

    while(nodeIdx > 0 && this._compare(nodeIdx, this._parent(nodeIdx))  ){  ///compares if idx is bigger than parent value
            this._swap(nodeIdx,this._parent(nodeIdx));///swap if true
            nodeIdx = this._parent(nodeIdx);
    }
}
_siftDown(){
    let nodeIdx = 0;

    while(this._leftChild(nodeIdx)<this.size() && this._rightChild(nodeIdx) <this.size() && ( this._compare(this._leftChild(nodeIdx),nodeIdx) || this._compare(this._rightChild(nodeIdx),nodeIdx)) ){  ///compares if idx is less tha children 
        // if( this._compare(this._leftChild(nodeIdx),this._rightChild(nodeIdx))){

        //     nodeIdx = this._leftChild(nodeIdx);
        //     this._swap(nodeIdx, this._leftChild(nodeIdx));
        // }
        // else if( this._compare(this._rightChild(nodeIdx),this._leftChild(nodeIdx))){

        //     nodeIdx = this._rightChild(nodeIdx);
        //     this._swap(nodeIdx, this._rightChild(nodeIdx));
        // }

        ////or you can use ternary
    const gretaerIdx = this._rightChild(nodeIdx)<this.size() && this._compare(this._rightChild(nodeIdx),this._leftChild(nodeIdx) ? this._rightChild(nodeIdx) : this._leftChild(nodeIdx) );
    this._swap(nodeIdx, gretaerIdx);
        nodeIdx = gretaerIdx;

    }
}

_compare(i,j){ b
    return this._comparator(this._heap[i],this._heap[j]);
}

}

