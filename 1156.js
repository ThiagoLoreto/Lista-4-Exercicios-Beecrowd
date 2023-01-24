let S = 1
let divisor = 2
for(let i = 3; i <= 39; i += 2) {
    S += i / divisor
    divisor *= 2
}
console.log(S.toFixed(2))