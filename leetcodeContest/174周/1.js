/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
  let hash = {};
  for (let i = 0; i < mat.length; i++) {
    hash[i] = 0;
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 1) {
        hash[i]++;
      }
    }
  }
  let arr = Object.keys(hash).sort((a, b) => {
    if (hash[a] === hash[b]) {
      return parseInt(a) - parseInt(b);
    }
    return hash[a] - hash[b];
  });
  //   console.log(arr);
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < k) {
      res.push(parseInt(arr[i]));
    }
  }
  return res;
};

// [12,10,15,4,14,16,2,7,11,5,3,0,13,1,9,17,6]

// [10,12,15,4,14,16,2,7,11,3,5,0,13,1,9,17,6]

// console.log(
//   kWeakestRows(
//     [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],[1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],[1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0]],
// 7
//   )
// );
