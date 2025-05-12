import React, { useState } from "react";

/* 
    useState()의 기본 형태
    const [변수명, set함수명 ] = useState(초기값);
*/

function Counter(){
    const [count, setCount] = useState(0);
    
    return(
        <div>
            <p>총 {count}번 클릭했습니다. </p>
            <button onClick={()=> setCount(count + 1 )}></button>
        </div>
    );

}export default Counter