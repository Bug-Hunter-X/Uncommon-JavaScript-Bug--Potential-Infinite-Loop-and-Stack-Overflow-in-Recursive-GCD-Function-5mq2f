# Uncommon JavaScript Bug: Potential Infinite Loop and Stack Overflow in Recursive GCD Function

This repository demonstrates a subtle bug in a seemingly simple recursive function to calculate the greatest common divisor (GCD) using Euclid's algorithm.

The function `foo` has a flaw: If the second argument `b` is less than the first argument `a`, the function does not terminate correctly, leading to an infinite loop and ultimately a stack overflow error for sufficiently large inputs.

The `bug.js` file contains the buggy code. The `bugSolution.js` file provides a corrected version.