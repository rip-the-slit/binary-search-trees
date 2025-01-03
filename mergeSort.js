export default function mergeSort(arr) {
  if (arr.length == 1) return arr;
  const leftHalve = mergeSort(arr.slice(0, arr.length / 2));
  const rightHalve = mergeSort(arr.slice(arr.length / 2, arr.length));
  const mergedArr = [];
  while (leftHalve.length > 0 || rightHalve.length > 0) {
    if (leftHalve[0] < rightHalve[0] || rightHalve[0] == undefined)
      mergedArr.push(leftHalve.shift());
    else {
      if (leftHalve[0] == rightHalve[0]) leftHalve.shift();
      mergedArr.push(rightHalve.shift());
    }
  }
  return mergedArr;
}
