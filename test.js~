'use strict';

var Queue = function(maxSize){
	this.start  = 0;
	this.end = 0;
	this.n = 0;
	this.size = maxSize;
	this.table = [];
}

Queue.prototype = {
	push : function(item){
		if(this.end==this.size) this.end = 0;
		this.table[this.end] = item;
		if(this.n < this.size) this.n++;
		else{
			this.start++;
			if(this.start==this.size) this.start = 0;
		}
		this.end++;
	},
	pop : function(){
		if(this.n==0) console.error("Error!");
		this.n--;
		var res = this.table[this.start];
		this.table[this.start] = null;
		this.start++;
		if(this.start==this.size) this.start = 0;
		return res;
	},
	get : function(){
		return this.table;
	}
};

var test = new Queue(3);

for(let i=0;i<5;i++){
	test.push(i);
}

console.log(test.get());