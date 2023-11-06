import  { useRef } from 'react';
// useRef는 아래와 같은 경우에 유용함

// 1. dom에 접근해야할 때
function DomAccessible() {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <input type="text" ref={inputRef}/>
      <button>저장</button>
    </div>
  ) 
}

// 2. 값을 변경할 때, 재렌더링을 막아야할 때
function UnReRendering() {
  const count = useRef(0);

  const increase = () => {
    count.current += 1;
    console.log(count.current, '값 올리기')
  }
  console.log('useRef쓴 뒤, rendering')
  return (
    <div>
      <button onClick={increase}>증가</button>
    </div>
  )
}


export default function UseRefEx() {
  return (
    <div>
      <DomAccessible />
      <UnReRendering />
    </div>
  )
}