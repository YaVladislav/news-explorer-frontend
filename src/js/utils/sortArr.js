export default function (arr) {
  const Obj = {};
  arr.sort().reduce((prev, cur) => {
    Obj[cur] = (Obj[cur] || 0) + 1;
    return prev;
  }, {});
  const sortArr = Object.keys(Obj).sort((a, b) => Obj[b] - Obj[a]);
  return sortArr;
}