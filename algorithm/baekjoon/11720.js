/**
 * N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.
 */

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
const answer = Array.from(input[1], (i) => Number(i)).reduce((acc, curr) => acc + curr, 0)
console.log(answer)
