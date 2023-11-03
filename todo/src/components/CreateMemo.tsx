// 입력창(이름, 내용)을 사용해서 저장하면 -> MemoList에 추가되는 컴포넌트
import { useState } from "react";

function CreateMemo() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  function onchange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget;
    if (name === "name") setName(value);
    else setContent(value);
  }

  return (
    <form>
      <input
        value={name}
        name="name"
        onChange={onchange}
      />
      <input
        value={content}
        name="content"
        onChange={onchange}
      />
    </form>
  );
}

export default CreateMemo;
