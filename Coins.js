var countWays = function(coins, amount){
	var index = 0;
	var backtracking = function(coins, amount, index){
		var ways = 0;
		var cur = coins[index];
		for(let i=0;i*cur<=amount;i++){
			ways += backtracking(coins,amount-i*cur,index+1);
		}
		return ways;
	}
	return backtracking(coins,amount,0);
}