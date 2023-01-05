function isPrimeNumber(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(nums) {
  let primeNumbers = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        if (isPrimeNumber(sum)) primeNumbers += 1;
      }
    }
  }

  return primeNumbers;
}
