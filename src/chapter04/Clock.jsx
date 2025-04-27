import React from "react";

function Clock(props){
    return<div>
        <h2>안녕, 리엑트</h2>
        <h3>현재 시간 : {new Date().toLocaleTimeString() }</h3>
    </div>
} export default Clock;