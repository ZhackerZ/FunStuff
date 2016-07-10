// var minWindow = function(s,t){
// 	var count = [];
// 	var start = 0, head = 0, counter = 0, minLen = Number.MAX_VALUE;
// 	for(var i in t) count[t[i]]++;
// }

//minWindow("acs","ac");


var test = [];
var s = "abcd";
for(var c in s) test[s[c]]++; console.log(test[s[c]]);
for(var count in test) console.log(count);
