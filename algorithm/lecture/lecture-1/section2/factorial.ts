export function factorial(n: number): number {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));

/**
 * factorial(5)
  → 5 * factorial(4)
        → 4 * factorial(3)
              → 3 * factorial(2)
                    → 2 * factorial(1)
                          → 1 (종료 조건!)
 */

/** 
 * factorial(1) = 1
factorial(2) = 2 * 1 = 2
factorial(3) = 3 * 2 = 6
factorial(4) = 4 * 6 = 24
factorial(5) = 5 * 24 = 120
*/
