import React, { useState, useEffect } from "react";

function Counter(props){
    const [count, setCount] = useState(0);
 
    // 의존성 배열이 없이 사용되는 경우 componentDidMount(), componentDidUpdate()와 동일한 역할을 함
    useEffect(()=>{
        //브라우저 API를 사용해서 document의 title을 업데이트함 
        document.title = `총 ${count}번 클릭했습니다. `;
    });
    return(

         <div>
            <p>총 {count}번 클릭했습니다. </p>
            {/*버튼을 클릭하면 내부 화살표 함수 실행 */}
            <button onClick={()=> setCount(count + 1 )}></button>
        </div>
    );

}export default Counter;




