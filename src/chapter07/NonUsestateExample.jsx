import React from "react";

/* 
버튼 클릭시 카운트 값을 증가시킬 수있지만 재렌더링이 발생하지 않아 새로운 카운트 값이 화면에 표시되지 않는 문제점이 있음

*/
 function Counter(props){

    var count = 0;

    retrun(
        <div>
            <p> 총 {count}번 클릭했습니다. </p>
            <button onClick={()=> count++}>클릭</button>
        </div>
    );

 }export default Counter;