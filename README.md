# JavaScript Uncommon Error: Unexpected 'length' Property Access

This repository demonstrates a subtle error that can occur in JavaScript when working with objects and their properties. Specifically, it showcases a case where attempting to access the 'length' property of a non-object value leads to a runtime error.

## The Bug
The `foo` function aims to return the length of an object if provided one, and returns 0 if a null value is supplied.  However, it fails to handle other non-object types. This leads to an error if any other non-object value such as a number or string is passed as an argument.

## The Solution
The solution involves adding a type check before accessing the 'length' property to ensure the value is an object and has the 'length' property.  This avoids runtime errors when unexpected data types are passed to the function.