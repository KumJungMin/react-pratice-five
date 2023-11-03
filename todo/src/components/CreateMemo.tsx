// 입력창(이름, 내용)을 사용해서 저장하면 -> MemoList에 추가되는 컴포넌트
import { useRef } from "react";

function CreateMemo() {
  //  useState은 input값이 변경될 때마다, 컴포넌트가 리렌더링된다.
  // 이를 방지하기위해, useRef를 사용한다.
  // const [name, setName] = useState("");
  // const [content, setContent] = useState("");
  const title = useRef("");
  const content = useRef("");

  function onchange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget;
    if (name === "title") title.current = value;
    else if (name === "content") content.current = value;
  }
  console.log(title.current, content.current);
  return (
    <form>
      <input
        name="title"
        onChange={onchange}
      />
      <input
        name="content"
        onChange={onchange}
      />
    </form>
  );
}

export default CreateMemo;
