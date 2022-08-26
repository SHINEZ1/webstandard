// {
// const arr = [1,2,3];
// const map1 = arr.map( x => x*3);
// console.log(map1);

// //결과 : [3,6,9]



// let arr2 = [];
// arr.forEach(ele=> arr2.push(ele*3));
// console.log(arr2);
// }


// {
//     let arr2 = [];
//     const result = [];
//     arr.forEach(ele=> result.unshift(ele*3));
//     console.log(result);
// }


{   //Array.ptototype.map()
    //콜백함수의 반환값들로 구성된 새로운 배열을 반환
    const arr = [1,2,3];
    const result = arr.map(ele=>ele*3);
    console.log(result);
}

{
    const arr =[1,2,3];
    arr.map(ele=>ele*3)     // arr.map(ele=>ele*3)->얘 결과는 배열
        .forEach(ele=>console.log(ele));  
}

{
    
    const arr = [1,2,3,4,5,6,7,8,9,10];
    const result = [];
    arr.forEach(ele=>{ if(ele %2 == 0) result.push(ele)});
    console.log(result);

    //결과 [2,4,6,8,10]

}