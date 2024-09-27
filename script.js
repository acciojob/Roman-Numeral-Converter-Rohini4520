function convertToRoman(num) {
  	
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line
const romanNumerals = [
      ['M', 1000], 
      ['CM', 900], 
      ['D', 500], 
      ['CD', 400], 
      ['C', 100], 
      ['XC', 90], 
      ['L', 50], 
      ['XL', 40], 
      ['X', 10], 
      ['IX', 9], 
      ['V', 5], 
      ['IV', 4], 
      ['I', 1]
    ];

	let str = '';

    // Iterate through each symbol and value pair
	for (let i = 0; i < romanNumerals.length; i++) {
		const [symbol, value] = romanNumerals[i];
		// Append symbol to the result string while num is greater than or equal to the value
		while (num >= value) {
			str += symbol;
			num -= value;
		}
	}

	return str;
}
// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
