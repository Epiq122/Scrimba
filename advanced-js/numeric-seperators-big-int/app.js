/*
Challenge:
1. Use numeric separators (_) to separate out
   the digits into chunks of 3 so they are easier to read.
*/

const tomsBankBalanceGBP = 9_007_199_254_740_991;

console.log(tomsBankBalanceGBP);

// Big Int

// const jimsBankBalanceGBP = 9_007_199_254_740_991_345n;
const jimsBankBalanceGBP = BigInt(9_007_199_254_740_991_345);

console.log(jimsBankBalanceGBP);
console.log(typeof jimsBankBalanceGBP);
