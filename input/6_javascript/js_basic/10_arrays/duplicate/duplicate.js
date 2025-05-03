function removeDuplicate1(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let isExist = false;
    for (let j = 0; j < newArr.length; j++) {
      if (arr[i] === newArr[j]) {
        isExist = true;
        break;
      }
    }
    if (!isExist) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
}

removeDuplicate1([1, 2, 3, 1, 2, 3, 2, 5, 3]);

function removeDuplicate2(arr) {
  let newArr = [];
  let seen = {};

  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      newArr.push(arr[i]);
      seen[arr[i]] = true;
    }
  }
  console.log(newArr);
}

removeDuplicate2([1, 2, 1, 2, 4, 3, 2, 3]);
