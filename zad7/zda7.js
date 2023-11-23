function isHapiNum(n){
	let sum=0;
	while(n>0){
		digit=n%10;
		sum+=digit * digit;
		n=Math.floor(n/10);
	}
	return sum==1;
}
console.log(isHapiNum(19));