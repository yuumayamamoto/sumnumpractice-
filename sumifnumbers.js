let test = [1,2,3,4];

function sumFor(nums) {
  let tot = 0;
  for (num of nums){
    tot += num;
  }
  return tot;
}
console.log(sumFor(test));

function sumWhile(nums) {
  i = 0;
  tot = 0;
  while (i<nums.length){
    tot += nums[i]
    i++;
  }
return tot;
}
console.log(sumWhile(test));

function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  } return nums[0] + sumRecursion(nums.slice(1,nums.length));
}
console.log(sumRecursion(test));

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function(memo, num){ return memo + num; }, 0);
}
console.log(sumTheSimpleWay(test));
