module.exports = function reverse (n) {
  if (n <0){
    n = n* (-1)
  }
  let str = String(n);
  let revstr = '';
  let newnumb;
  for (let i = str.length - 1; i >= 0; i --){
    revstr = revstr + str [i];
  }
  newnumb = parseInt(revstr)
  return newnumb
}
