function doubled(number){
    return number*2;
}
function arraydouble(number,doubled){
  return number.map(doubled);
}
let number=[1,2,3,4];
const result=arraydouble(number,doubled);
console.log(result);