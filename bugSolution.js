function foo(a, b) {
  if (b === 0) {
    return a;
  }
  return foo(b, a % b);
}
//This version handles the case where b is less than a and prevent infinite loops or stack overflow error.