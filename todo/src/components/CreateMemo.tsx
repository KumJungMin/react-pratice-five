import React, { useState } from "react";
import { useMemoDispatch } from "../contexts/memo";

interface CreateMemoProps {
  coinId: string;
}

function CreateMemo({ coinId }: CreateMemoProps) {
  // !! 어떻게 하면 onchange 동안에는 리렌더링을 막을 수 있을까?
  const dispatch = useMemoDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onchange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    if (name === "title") setTitle(value);
    else if (name === "content") setContent(value);
  };

  const onsubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "ADD_MEMO", memo: { title, content }, id: coinId });

    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={onsubmit}>
      <input
        name="title"
        onChange={onchange}
        value={title}
        placeholder="제목"
      />
      <input
        name="content"
        onChange={onchange}
        value={content}
        placeholder="내용"
      />
      <button>메모 추가</button>
    </form>
  );
}

export default CreateMemo;
