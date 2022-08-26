import add2 from './a.js';                         //디폴트를 불러올때는 {}를 안붙임.이름도 아무거나 바꿔 쓸 수 있음(디폴트일때!)
import {minus,multi,var3 as var5} from './b.js';    //불러온 var3를 var5이름으로 쓰겠다.
import * as myobj from './b.js';            //b.js에서 export한거 전체     

let var1 = 10;
let var2 = 20;

console.log(var1);
const sum = add2(var1,var2);
console.log(sum);
console.log(minus(var1,var2));
console.log(myobj.multi(var2,myobj.var3));