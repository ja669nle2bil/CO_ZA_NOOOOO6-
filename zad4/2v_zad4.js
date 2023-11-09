function sum(arr){ 
	let ttal=0;
	for(let i=0; i<arr.length; i++) {
		ttal+=arr[i];
	}
	console.log(ttal);
	return ttal;
}
sum([3,6,9]);