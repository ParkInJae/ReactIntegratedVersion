import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
/* 
import Library from './chapter03/Library';
import Clock from './chapter04/Clock';
import CommentList from './chapter05/CommentList';
*/
import NotificationList from './chapter06/NotificationList';

const root = ReactDOM.createRoot(document.getElementById('root'));
const root2 = ReactDOM.createRoot(document.getElementById('root'));
/* 
setInterval(() =>{
  root.render(
      // root.render에서 검포넌트를 부르기 때문에, app.js 내용을 부르고 싶다면 컴포넌트를 추가하면 된다. 
    <React.StrictMode>
      <h1> chapter03 내용 </h1>
      <Library />
      <hr/>
      < h1> chapter04 내용 </h1>
      <Clock/>
      <hr/>
      < h1> chapter05 내용 </h1>
      <CommentList/>
      <hr/>
    </React.StrictMode>
  );
},1000);
*/
root2.render(
  <React.StrictMode>
    <NotificationList/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
