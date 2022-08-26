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
    if(data.result == 'success'){
    console.log(data.data.length);
}
}

//1. 회원이름을 콘솔에 출력하기
{
if(data.result == 'success'){
data.data.forEach(ele=>console.log(ele.name));
}
}

//2. 회원 나이의 총합 출력하기
{
    sum=0;
    if(data.result == 'success'){
        data.data.forEach(ele=>sum+=ele.age);
        console.log(sum);
    }
}

//3. 남자회원의 나이 총합 출력하기
{
    sum=0;
    if(data.result == 'success'){
        data.data.filter(ele=>ele.gender=='남').forEach(ele=>sum+=ele.age)
        console.log(sum);
    }
}


//4. 남자회원, 여자회원을 분리하여 배열에 저장
{
    if(data.result == 'success'){
        const result_m = [];
        data.data.filter(ele=>ele.gender=='남').forEach(ele=>result_m.push(ele));
        console.log(result_m);
        const result_w = [];
        data.data.filter(ele=>ele.gender=='여').forEach(ele=>result_w.push(ele));
        console.log(result_w);

    }

}

//5. A형 회원의 나이 총합 구하기
{
    sum=0;
    if(data.result == 'success'){
        data.data.filter(ele=>ele.blood=='A').forEach(ele=>sum+=ele.age)
        console.log(sum);
    }
}