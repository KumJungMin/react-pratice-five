
import React, { useState } from 'react';
// Children에 컴포넌트를 넘기면, 
// 부모의 리렌더링이 발생하면 자식은 리렌더링이 발생하지 않는다.
// 그래서 Context API를 사용할 때, Provider에 컴포넌트를 children으로 넘김
// 리렌더링이 적은 부모 컴포넌트에서 children props를 이용하자!

function Parent({children}: {children: React.ReactNode}) {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      {children}
    </>

  )
}

function Child() {
  console.log('Child rendering');
  return (
    <div>
      Child
    </div>
  )
}


export default function ChildEx() {
  return (
    <div>
      <Parent>
        <Child />
      </Parent>
    </div>
  )
  
}