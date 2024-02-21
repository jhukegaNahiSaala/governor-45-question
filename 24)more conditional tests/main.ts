console.log("test for equality in strings (true)"  , "apple"  === "apple"); 
console.log("test for equality in strings (false)"  , ("apple" as string)  === "Apple"); 
console.log("test for inequality in strings (true)"  , ("apple" as string) !== "orange"); 
console.log("test for inequality in strings (false)"  , ("apple" as string) !== "apple"); 

// Testing lowercase function
console.log("Lowercase function test:", "HELLO".toLowerCase() === "hello"); 
console.log("Lowercase function test:", "HELLO".toLowerCase() === "Hello"); 

// testing equaliy non equality and more 
console.log("test for equality with numbers (true)", 5 === 5); //equality
console.log("test for equality with numbers (false)", 5 === 5); //equality
console.log("test for equality with numbers (true)", (10 as number)  !== 5); //inequality
console.log("test for equality with numbers (false)", (10 as number)  !== 10); //inequality
console.log("Greater than test (true) ", 10 > 5); //greater than
console.log("Greater than test (false) ", 4 > 5); //greater than
console.log("Less than test (true)", 5 < 10);//less than
console.log("Less than test (false)", 5 < 4);//less than
console.log("Greater than or equal to test (true)", 10 >= 10);//greater than or equal to
console.log("Greater than or equal to test (false)", 9 >= 10);//greater than or equal to
console.log("Less than or equal to test (true)", 5 <= 10);//less than or equal to
console.log("Less than or equal to test (false)", 5 <= 4);//less than or equal to



console.log("test with and operator (true)", true && true); // and operator
console.log("test with and operator (false)", true && false); // and operator
console.log("test with or operator (true)", true || false); // or operator
console.log("test with or operator (false)", false || false); // or operator

const cities :string[] = ["karachi", "Hyderabad", "hooriabad"];
console.log("Test whether Hyderabad is in the array (true):", cities.includes("Hyderabad")); // testing whether an item is present in an array

console.log("Test whether peshawar is in the array (false):", cities.includes("peshawar")); // testing whether an item is present in an array




console.log("Testing 'peshawar' is not in array (true):", !cities.includes("peshawar")); // testing whether an item is not present in an array
console.log("Testing 'hooriabad' is not in array (false):", !cities.includes("hooriabad")); // testing whether an item is not present in an array
