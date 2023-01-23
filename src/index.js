

// JavaScript implementation of simple method to
// find print pairs with given sum.

// Returns number of pairs in arr[0..n-1]
// with sum equal to 'sum'
function printPairs(arr, n, sum)
{
	let count = 0; // Initialize result

	// Consider all possible pairs and check
	// their sums
	for (let i = 0; i < n; i++)
		for (let j = i + 1; j < n; j++)
			if (arr[i] + arr[j] == sum)
				document.write("(" + arr[i] + ", "
					+ arr[j] + ")" + "<br>");
}

// Driver function to test the above function

	let arr = [ 1, 5, 7, -1, 5 ];
	let n = arr.length;
	let sum = 6;
	printPairs(arr, n, sum);



  function checkString(s1, s2, indexFound, Size)
{
    for(let i = 0; i < Size; i++)
    {
    
        //check whether the character is equal or not
        if(s1[i] != s2[(indexFound + i) % Size])return false;
        
        // %Size keeps (indexFound+i) in bounds, since it ensures it's value is always less than Size
    }

    return true;
}

// driver code
let s1 = "abcd";
let s2 = "cdab";

if(s1.length != s2.length)
{
    document.write("s2 is not a rotation on s1");
}
else
{
    
    let indexes = []; //store occurrences of the first character of s1
    let Size = s1.length;
    let firstChar = s1[0];
    for(let i = 0; i < Size; i++)
    {
        if(s2[i] == firstChar)
        {
            indexes.push(i);
        }
    }

    let isRotation = false;

    // check if the strings are rotation of each other for every occurrence of firstChar in s2
    for(let idx of indexes)
    {
        isRotation = checkString(s1, s2, idx, Size);

        if(isRotation)
            break;
    }

    if(isRotation)document.write("s2 is rotation of s1")
    else document.write("s2 is not a rotation of s1")
}; 

document.write("<br>")


// JavaScript program to find first non-repeating
// character

 const NO_OF_CHARS = 256

/* The function returns index of the first
non-repeating character in a string. If
all characters are repeating then
returns Number.MAX_VALUE */
function firstNonRepeating(str)
{
	let arr = new Array(NO_OF_CHARS)
	for(let i=0;i<NO_OF_CHARS;i++){
		arr[i] = [0,0];
	}

	for (let i=0;i<str.length;i++) {
		arr[str.charCodeAt(i)][0]++;
		arr[str.charCodeAt(i)][1]= i;
	}

	let res = Number.MAX_VALUE;
	for (let i = 0; i < NO_OF_CHARS; i++)

		// If this character occurs only
		// once and appears before the
		// current result, then update the
		// result
		if (arr[i][0] == 1)
			res = Math.min(res, arr[i][1]);

	return res;
}

/* Driver program to test above function */

let str = "geeksforgeeks";
let index = firstNonRepeating(str);
if (index == Number.MAX_VALUE)
	document.write("Either all characters are repeating or string is empty");
else
	document.write("First non-repeating character is ",str[index]);
	

  document.write("<br>")

// javascript recursive function to
// solve tower of hanoi puzzle
function towerOfHanoi(n, from_rod, to_rod, aux_rod)
{
		if (n == 0)
		{
			return;
		}
		towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
		document.write("Move disk " + n + " from rod " + from_rod +
		" to rod " + to_rod+"<br/>");
		towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
	}

	// Driver code
	var N = 3;
	
	// A, B and C are names of rods
  towerOfHanoi(N, 'A', 'C', 'B');
  





  
	// Javascript Program to convert postfix to prefix
	
	// function to check if character
	// is operator or not
	function isOperator(x)
	{

		switch (x) {
		case '+':
		case '-':
		case '/':
		case '*':
			return true;
		}
		return false;
	}

	// Convert postfix to Prefix expression
	function postToPre(post_exp)
	{
		let s = [];

		// length of expression
		let length = post_exp.length;

		// reading from right to left
		for (let i = 0; i < length; i++) {

			// check if symbol is operator
			if (isOperator(post_exp[i])) {

				// Pop two operands from stack
				let op1 = s[s.length - 1];
				s.pop();
				let op2 = s[s.length - 1];
				s.pop();

				// concat the operands and operator
				let temp = post_exp[i] + op2 + op1;

				// Push String temp back to stack
				s.push(temp);
			}

			// if symbol is an operand
			else {

				// Push the operand to the stack
				s.push(post_exp[i] + "");
			}
		}

		let ans = "";
		while (s.length > 0)
			ans += s.pop();
		return ans;
	}
	
	let post_exp = "ABC/-AK/L-*";
		
	// Function call
	document.write("Prefix : " + postToPre(post_exp));
	
	
document.write("<br>")


	// Javascript program to convert prefix to Infix
	
	// Function to check if character
	// is operator or not
	function Operator(x)
	{
		switch(x)
		{
			case '+':
			case '-':
			case '*':
			case '/':
			case '^':
			case '%':
				return true;
		}
		return false;
	}

	// Convert prefix to Infix expression
	function convert(str)
	{
		let stack = [];

		// Length of expression
		let l = str.length;

		// Reading from right to left
		for(let i = l - 1; i >= 0; i--)
		{
			let c = str[i];

			if (Operator(c))
			{
				let op1 = stack[stack.length - 1];
				stack.pop()
				let op2 = stack[stack.length - 1];
				stack.pop()

				// Concat the operands and operator
				let temp = "(" + op1 + c + op2 + ")";
				stack.push(temp);
			}
			else
			{

				// To make character to string
				stack.push(c + "");
			}
		}
		return stack[stack.length - 1];
	}
	
	let exp = "*-A/BC-/AKL";
	
	document.write("Infix : " + convert(exp));
	
	

  document.write("<br>")



  

// Javascript program for checking
// balanced brackets

// Function to check if brackets are balanced
function areBracketsBalanced(expr)
{
	
	// Using ArrayDeque is faster
	// than using Stack class
	let stack = [];

	// Traversing the Expression
	for(let i = 0; i < expr.length; i++)
	{
		let x = expr[i];

		if (x == '(' || x == '[' || x == '{')
		{
			
			// Push the element in the stack
			stack.push(x);
			continue;
		}

		// If current character is not opening
		// bracket, then it must be closing.
		// So stack cannot be empty at this point.
		if (stack.length == 0)
			return false;
			
		let check;
		switch (x){
		case ')':
			check = stack.pop();
			if (check == '{' || check == '[')
				return false;
			break;

		case '}':
			check = stack.pop();
			if (check == '(' || check == '[')
				return false;
			break;

		case ']':
			check = stack.pop();
			if (check == '(' || check == '{')
				return false;
			break;
		}
	}

	// Check Empty Stack
	return (stack.length == 0);
}

// Driver code
let expr = "([{}])";

// Function call
if (areBracketsBalanced(expr))
	document.write("Balanced ");
else
	document.write("Not Balanced ");

  document.write("<br>")

// JavaScript code to reverse a
// stack using recursion

// using Stack class for
// stack implementation
let st = [];

// Below is a recursive function
// that inserts an element
// at the bottom of a stack.
function insert_at_bottom(x)
{
	if(st.length==0)
		st.push(x);
	else
	{
		// All items are held in Function
			// Call Stack until we reach end
			// of the stack. When the stack becomes
			// empty, the st.size() becomes 0, the
			// above if part is executed and
			// the item is inserted at the bottom
			let a = st.pop();
			insert_at_bottom(x);

			// push allthe items held
			// in Function Call Stack
			// once the item is inserted
			// at the bottom
			st.push(a);
	}
	
	
}

// Below is the function that
	// reverses the given stack using
	// insert_at_bottom()
function reverse()
{
	if(st.length > 0)
		{
			
			// Hold all items in Function
			// Call Stack until we
			// reach end of the stack
			let x = st.pop();
			reverse();
			
			// Insert all the items held
			// in Function Call Stack
			// one by one from the bottom
			// to top. Every item is
			// inserted at the bottom
			insert_at_bottom(x);
		}
}

// Driver Code

// push elements into
// the stack
st.push('1');
st.push('2');
st.push('3');
st.push('4');

document.write("Original Stack<br>");

document.write(st.join(" ")+"<br>");

// function to reverse
// the stack
reverse();

document.write("Reversed Stack<br>");

document.write(st.join(" "));


document.write("<br>")


