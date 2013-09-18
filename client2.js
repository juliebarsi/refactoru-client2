var word = prompt("Enter any word, please.");

alert("Your word, " + word + ", has " + word.length + 
	" characters." + "\n" + "The third character is " + word.charAt(2) +
	". " + "\n" + "In lower case that is: " + word.toLowerCase() + 
	"." + "\n" + "In upper case that is: " + word.toUpperCase() +
	"." + "\n" + "Hello " + word + "! How are you doing?" + "\n" + "The substring is: " + word.substring(1,4) );