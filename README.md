1) What is the difference between var, let, and const?
 Ans: var: Function-scoped, can be re-declared and re-assigned. It’s the old way of declaring variables and is generally avoided in modern JavaScript.let: Block-scoped, cannot be re-declared in the same scope, but its value can be changed. Use this for variables that need to change. const: Block-scoped, cannot be re-declared or re-assigned. Use this for values that should remain constant.

2) What is the spread operator (...)?
Ans: The spread operator (...) in JavaScript is used to expand (or “spread”) elements of an array, object, or iterable into individual elements. It’s very handy for copying, merging, or passing multiple values.

3) What is the difference between map(), filter(), and forEach()?
Ans: The map(), filter(), and forEach() methods are used to loop through arrays in JavaScript, but they work differently.
map()
map() goes through each element of an array and creates a new array by transforming the elements. The length of the new array is the same as the original array.
filter()
filter() goes through each element and returns a new array containing only the elements that meet a condition.
forEach()
forEach() also loops through an array, but it does not create a new array. It is mainly used to perform an action for each element, like printing or updating something.

4) What is an arrow function?
Ans: An arrow function is a short and modern way to write functions in JavaScript, introduced in ES6 (2015). It uses the arrow (=>) syntax instead of the traditional function keyword.

5) What are template literals?
Ans: Template literals are a modern JavaScript feature used to create strings more easily and dynamically. They use backticks ( ) instead of single (' ') or double (" ") quotes.
They allow you to insert variables and expressions inside a string using ${ }.
