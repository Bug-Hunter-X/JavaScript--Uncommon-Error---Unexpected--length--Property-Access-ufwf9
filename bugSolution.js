function foo(x) {
  if (x === null || typeof x !== 'object' || x.length === undefined) {
    return 0; // Handle null, non-objects, or objects without length
  }
  return x.length; 
}

console.log(foo(null)); // Output: 0
console.log(foo([1, 2, 3])); // Output: 3
console.log(foo(5)); // Output: 0
console.log(foo('hello')); //Output: 0
console.log(foo({a:1, b:2})); //Output: 0