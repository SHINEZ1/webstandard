// 2개의 매개값을 받아 덧셈하는 화살표 함수
{   //함수 선언문
function add (x,y){
    return x+y;
}
add(10.20);
}
{   //함수 표현식
    const add = function(x,y){
        return x+y;
    }
    add(20,30);
}

{   //화살표 함수
    // const add = (x,y)=>{
    //     return x+y;     //하나의 값으로 떨어지면 return문을 생략가능
    // }
    const add = (x,y)=>x+y;     
        console.log(add(10,20));

    // const f = (x,y)=>{
    //     console.log(y);     //return문이 생략된게 아니고 그냥 문장임.
    // }
    const f = (x,y)=>console.log(y);
    console.log(f(10,20));
}



const num = [1,2,3];
//2배수 함수
{

    const multi2 = x=>x*2;
    const multi3 = x=>x*3;
    const multi4 = x=>x*4;
   
    num.forEach(ele=>console.log(multi2(ele)));   //forEach반환값 없음.
    num.forEach(ele=>console.log(multi3(ele)));   
    num.forEach(ele=>console.log(multi4(ele)));   

}

console.log('-----------m배수함수-------------')
//m배수 함수 -> 생성자함수
{
function multi(m){
    return function(n){
        return m*n;
    }
}

const f2 = multi(2)
console.log(f2(10))

console.log(multi(2)(10));
console.log(multi(3)(10));


}


console.log('-----------m배수 화살표 함수-------------')

//m배수 화살표함수 -> 
{
    const multi = m=> n => m*n;
    console.log(multi(2)(10));        
    console.log(multi(3)(10));        
    console.log(multi(4)(10));        
    console.log(multi(100)(10));        
}

