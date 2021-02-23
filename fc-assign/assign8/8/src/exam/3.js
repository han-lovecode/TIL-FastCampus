/*
3. 중복 요소 제거하기 (10점)
입력된 배열의 요소 중에서 2개 이상 중복되는 숫자가 있을 경우 중복을 제거하고 유니크한 숫자만을 가진 배열을 리턴하는 함수를 만들어주세요.

**구현조건**
* for문은 사용하지 않습니다.
*/

// 답 못풀었고 밑에는 100% 선생님 답



// set 객체
function uniqSet(array) {
  const arr = [...new Set(array)];
  return arr;
}

console.log(uniqSet([2, 1, 2, 3, 4, 3, 4])); // [ 2, 1, 3, 4 ]

// filter
function uniqFilter(array) {
  return array.filter((item, idx) => array.indexOf(item) === idx);
}

console.log(uniqFilter([2, 1, 2, 3, 4, 3, 4])); // [ 2, 1, 3, 4 ]

// reduce
function uniqReduce(array) {
  return array.reduce(
    (acc, cur, i, arr) => (arr.indexOf(cur) === i ? [...acc, cur] : acc),
    []
  );
}

console.log(uniqArray([2, 1, 2, 3, 4, 3, 4])); // [ 2, 1, 3, 4 ]
