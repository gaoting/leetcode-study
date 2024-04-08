var flat = function (arr, n) {
  let res = []
  const flating = (nums,l) => {
    for(const num of nums) {
      if(Array.isArray(num) && l> 0) {
        flating(num,l-1)
      }else{
        res.push(num)
      }
    }
  }
  flating(arr,n)
  return res
}