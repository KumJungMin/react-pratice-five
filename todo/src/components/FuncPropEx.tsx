import React, {useState, useCallback, useEffect} from 'react';

// useCallback + React.memo로 props로 넘긴 함수가 계속 호출되는 것을 방지

// 1. useCallback으로 함수를 감싸, 함수가 계속 생성되는 것을 방지
function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('handleClick')
  }
  ,[])

  return <>
  <Child onClick={handleClick} />
  <button onClick={() => setCount(count + 1)}>+</button>
  </>

}



// 2. React.memo로 컴포넌트를 감싸, props가 변경되지 않으면 렌더링을 방지
const Child = React.memo(({onClick}: {onClick: () => void}) => {
  useEffect(() => {
    console.log('Child rendering')
  })
  return (
    <button onClick={onClick}>Click</button>
  )
})


export default function FuncPropEx() {
  return (
    <div>
      <Parent />
    </div>
  )
  
}