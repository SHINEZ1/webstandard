const data = {
    result:'success',        //success:수신성공, fail:수신실패
    data:[
        {name:'이름1', gender:'남',age:10, blood:'A'},
        {name:'이름2', gender:'여',age:20, blood:'B'},
        {name:'이름3', gender:'남',age:30, blood:'O'},
        {name:'이름4', gender:'여',age:40, blood:'AB'},
        {name:'이름5', gender:'남',age:50, blood:'A'}
    ]
};


//0. 회원의 수
{
   if(data.result = 'success'){
    console.log(data.data.length);
   }
}

//1. 회원이름을 콘솔에 출력하기
{
    if(data.result=='success'){
        data.data.forEach(ele => console.log(ele.name));
    }
}

//2. 회원 나이의 총합 출력하기
{
   
   const result = data.data.reduce((acc,ele)=> acc + ele.age,0);
   console.log(`회원 나이의 총합 : ${result}`);






//     let sum = 0;
//    data.data.forEach(ele=> sum+=ele.age);
//    console.log(`회원 나이의 총합 : ${sum}`);
}

//3. 남자회원의 나이 총합 출력하기
{
//    const result =   data.data.filter((ele,idx,arr)=>{
//                     return ele.gender=='남';
//                 });
//     console.log(result);
    //생략가능
//    const result =   data.data.filter((ele,idx,arr)=>ele.gender=='남');
//     console.log(result);


//     const final = result. reduce((acc,ele,idx,arr)=>{
//           return acc+ele.age;
//           },0);       //초기값 0


const final = data.data.filter(ele=>ele.gender=='남')
              .reduce((acc,ele)=>acc+ele.age,0);
console.log(`남자회원의 나이 총합 : ${final}`);
}


//4. 남자회원, 여자회원을 분리하여 배열에 저장
{
const maleMember = data.data.filter(ele=>ele.gender == '남');    
const femaleMember = data.data.filter(ele=>ele.gender == '여');    
console.log(maleMember,femaleMember);
}

{
const maleMember2 = data.data.reduce((acc,ele,idx,arr)=>{
                    if(ele.gender =='남')  acc.push(ele);
                    return acc;
                    },[]);    //초기 acc는 배열.
const femaleMember2 = data.data.reduce((acc,ele,idx,arr)=>{
                    if(ele.gender =='여')  acc.push(ele);
                    return acc;
                    },[]);    //초기 acc는 배열.
console.log(maleMember2,femaleMember2);
}


//5. A형 회원의 나이 총합 구하기
{
// data.data.filter(ele=>ele.blood=='A')
//          .reduce((acc,ele)=>{return acc.age},0);    
const sum = data.data.filter(ele=>ele.blood=='A')
                     .reduce((acc,ele)=> acc+ele.age,0); 
         console.log(`A형 회원의 나이 총합 :${sum}`);   
}


//6. name이 이름3인 회원의 혈액형은?
{
const result = data.data.filter(ele=>ele.name =='이름3');
console.log(result);
console.log(`name이 이름3인 회원의 혈액형:${result[0].blood}`)
}


//7.혈액형별 인원수 카운트
//결과 : {A:2, B:1, O:1, AB:1}
{
const countOfBloodType = 
        data.data.reduce((acc,ele,idx,arr)=>{

        },{});
}



//8.남성 회원의 평균 연령
{
    const avgOfAge = 
            data.data.reduce((acc,ele,idx,arr)=>{

    },{});



}

   



//9. 나이가 가장 많은 회원의 혈액형은?
{
    
}