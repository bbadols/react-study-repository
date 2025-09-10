import "./App.css"
import Greeting from "./components/Greeting";
import Profile from "./components/Profile";

// React의 App 컴포넌트
function App(){
  // javascript code 영역(로직 담당)

  // 아래 return 부분은 JSX (리액트 컴포넌트로 화면이 그려질 내용 정의)
  // style={{}} // 첫번째 괄호는 jsx 문법 "지금부터 html이 아니다"
  // 두번째 괄호 {}는 일반 javascript 문법 - JSON 표현할 때 중괄호
  // react 함수 컴포넌트 리턴 값은 하나로 반환되어야 하므로
  // <> </> fragment (프래그먼트)로 묶어 주로 반환
  return (
    <>
      <h1 style={{color:'lime'}}>Hello React</h1>
      <hr className="test"></hr>
      <Greeting />
      <hr className="test"></hr>
      <Profile />
      <hr className="test"></hr>
      {/* Greeting 컴포넌트 재사용 */}
      <Greeting />
      <hr className="test"></hr>
      {/* Profile 컴포넌트 재사용 */}
      <Profile />
    </>
  );
}

export default App; // 외부에 import해서 사용하도록 함