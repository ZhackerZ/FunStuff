

var ListNode = function(val){
	this.next = null;
	this.val = val;
}


var insertCircularNode = function(node, newVal){
	if(!node){
		node = new ListNode(newVal);
		node.next = node;
		return;	
	}

	var prev = null;
	var cur = node;

	do{
		prev = cur;
		cur = cur.next;
		if(prev.val <= newVal && newVal <= cur.val) break;
		if((prev.val > cur.val) && (newVal < prev.val || newVal > prev.val)) break;
	}while(cur!=node);

	var newNode = new ListNode(newVal);
	newNode.next = cur;
	prev.next = newNode;
}

var print = function(node){
	var cur = node;
	do{
		console.log(cur.val);
		cur = cur.next;
	}while(cur!=node);
}

var head = new ListNode(3);

head.next = new ListNode(2);

head.next.next = head;

insertCircularNode(head,1);

print(head);




