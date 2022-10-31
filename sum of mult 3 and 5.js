

function sumOfMultipleOf3and5(limit) {
	let count = 0;
	for (var i=0; i< limit; i++) {
		if (i%3 === 0 || i%5 ===0) {
			count += i
		}
	}
	
	console.log("Sum of Multiple of 3 or 5: ", count);
	
}

sumOfMultipleOf3and5(1000);
    
