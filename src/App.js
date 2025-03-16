/* eslint-disable */
/* Lint끄는 기능*/ 

import React, { useState } from "react";
import {Routes, Route, Link} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
import Input from "./pages/Input";

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '리엑트독학']);
  let [따봉, 따봉변경] = useState(0);
  // let [logo, setLogo] = useState('ReactBlog');

  // b 는 state변경도와주는함수
  // let num = [1, 2]; 또는 let [a, c] = [1, 2];
  // let a = num[0]; 0번째자료뽑기->1
  // let c = num[1]; array 안에있는두번째자료뽑기

  function 함수(){
      console.log(1);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h2>React Blog</h2>
      </div>

      <nav>
        <Link to="/">Home</Link> ㅣ <Link to="/about">About</Link> ㅣ{" "} <Link to="/counter">Counter</Link> ㅣ{" "}
        <Link to="/input">Input</Link> 
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/input" element={<Input />} />
      </Routes>

      <button>가나다순정렬</button>

      <button onClick={ ()=>{
        // 글제목변경(['남자 코트 추천', '강남 우동맛집', '리액트독학']);
        //글제목[0] = '여자코트 추천'; //0번째 데이터에 저텍스트 넣기

        let arr = [1,2,3]; 
        //123을 이공간에 저장해놓고 array/object담은 변수엔 화살표만 저장됨

        let copy = 글제목;
        /** let copy = [...글제목];  ...괄호 벗겨주세요 **/
        copy[0] = '여자코트 추천';
        console.log(copy == 글제목);
        글제목변경(copy);
      }}>글수정</button>
      {/* array/object다룰때 원본은 보존하는게 좋음 
      state가 array/object면 shallow copy를 만들어서 수정해야함
      */}
      
      <div className="list">
        <h4>{ 글제목[0] }<span onClick={ () => { 따봉변경(따봉+1) }}>👍🏻</span> {따봉} </h4>
        {/* ()=>{} 함수만드는 문법 ,    일반변수 +1 증가 하는법 - <span onClick={ ()=>{ 따봉 = 따봉 + 1 }}>👍🏻</span>  */}
        {/* <h4>{ 글제목[0] }<span onClick={ function(){console.log(1) } }>👍🏻</span> {따봉} </h4> */}

        <p>3월 15일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>3월 20일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>3월 20일 발행</p>
      </div>

      {/* <Modal></Modal> 컴포넌트로 축약 */}

    </div>
  );
}

//컴포넌트 만드는법
//1.function 만들고
//2.return()안에html담기
//3.<함수명></함수명>쓰기

//let Modal = () => {
//  return (
//    <div></div>
//  )
//}


function Modal(){
  return(
    <>
      <div className='modal'>
        <h4>{ 글제목[0] }</h4>
        <p>날짜</p>
        <p>상세내용 </p>
      </div>
      <div></div>
    </>  //의미없는 <div>대신 <></>사용가능
  )
}

export default App;
