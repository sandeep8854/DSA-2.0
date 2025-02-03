function checkArraySortedAndRotated(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[(i + 1) % nums.length]) {
      count++;
    }
  }
  if (count > 1) {
    return false;
  }
  return true;
}
//-------------------------------------------------

//incresing subarray
function incresingSubarray(arr) {
  let maxLengthIn = 0;
  for (let i = 0; i < arr.length; i++) {
    let currLength = 1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[j - 1]) {
        currLength++;
      } else {
        break;
      }
    }
    return (maxLengthIn = Math.max(maxLengthIn, currLength));
  }
}
function decreasingSubarray(arr) {
  let maxLengthDe = 0;
  for (let i = 0; i < arr.length; i++) {
    let currLength = 1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[j - 1]) {
        currLength++;
      } else {
        break;
      }
    }
    return (maxLengthDe = Math.max(maxLengthDe, currLength));
  }
}
function longestMonotonicSubarray(arr) {
  let increasing = incresingSubarray(arr);
  let decreasing = decreasingSubarray(arr);
  return Math.max(increasing, decreasing);
}

function longestMonotonicSubarrayT(arr) {
  let incLength = 1;
  let decLength = 1;
  let maxLength = 1;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] > arr[i]) {
      incLength++;
      decLength = 1;
    } else if (arr[i + 1] < arr[i]) {
      decLength++;
      incLength = 1;
    } else {
      incLength = 1;
      decLength = 1;
    }
    maxLength = Math.max(maxLength, Math.max(incLength, decLength));
  }
  return maxLength;
}

let arr = [1, 4, 3, 3, 2];
console.log(longestMonotonicSubarrayT(arr));
//-------------------------------------------------------
//let nums = [3, 4, 5, 1, 2];
//let nums2 = [2, 1, 3, 4];
//console.log(checkArraySortedAndRotated(nums2));
//-------------------------------------------------------
