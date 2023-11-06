import  React, {useState, useMemo} from 'react';

// props로 객체를 넘겼는데, 
// 이떄 객체값이 변하지 않았다면 리렌더링 막기 (useMemo + React.memo)

function Parent() {
  const [value, setValue] = useState(0);
  const item = {id: 1, name: 'milk'};
  const memoriedItem = useMemo(() => item, []);

  const handleClick = () => {
    setValue(value + 1);
  }

  return (
    <>
      <Child item={memoriedItem}  />
      <button onClick={handleClick}>+</button>
      현재 카운트: {value}
    </>
  
  )

}

const Child = React.memo(({item}: {item: {id: number, name: string}}) => {
  console.log('Child rendering');
  return (
    <div>
      {item.name}
    </div>
  )
});

export default function StatePropEx() {
  return (
    <div>
      <Parent />
    </div>
  )
  
}