/*
4. 교집합과 합집합 구하기 (10점)
입력된 두 개의 배열의 교집합과 합집합을 리턴하는 함수를 만들어주세요.

**구현조건**
* 교집합: 교집합이 없을 때는 빈 배열을 리턴합니다.
* 합집합: 리턴되는 배열을 오름차순으로 정렬합니다.
* for문은 사용하지 않습니다.
*/

// 교집합
function intersect(a, b) {
  // let answer = [];
  // 코드 작성
  return a.filter(value => b.includes(value));

  // return answer;
}

console.log(intersect([1, 2, 3], [2, 3, 4])); // [2, 3]
console.log(intersect([1, 4, 7], [2])); // []

// 합집합
function sum(a, b) {
  const answer = [...a]; 
  b.forEach((value) => { if (!answer.includes(value)) answer.push(value); }) 
  return answer.sort();
}

console.log(sum([1, 2, 3], [2, 3, 4])); // [1, 2, 3, 4]
console.log(sum([1, 4, 7], [2])); // [1, 2, 4, 7]
