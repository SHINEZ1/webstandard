const arr = [1,2,3];


//case1)
let sum = 0;
for(let i=0; i<arr.length; i++){
    sum+= arr[i];
}
console.log(sum);


//case2) 향상된 for문
sum = 0;

for(let ele of arr){
    sum += ele;
    
}
console.log(sum);


//고차함수
sum = 0;
arr.forEach(ele=>sum+=ele);
console.log(sum);
