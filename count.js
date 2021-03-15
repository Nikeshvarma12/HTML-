function countbs(s){
	let count=0;
	for(let i=0;i<s.length;i++){
	if("B"===s.charAt(i)){
	count++
	}
	}
	return count;
	}


// Function countchar finds the number of particular characters present in the string and returns count

function countchar(s,c1){
	let count=0;
	for(let i=0;i<s.length;i++){
	if(c1===s.charAt(i)){
	count++
	}
	}
	return count;
	}
console.log("Number of B'S in string is: ", countbs("ALIBABA"));
console.log("Number of  particular characters in string", countchar("javascript","a"));