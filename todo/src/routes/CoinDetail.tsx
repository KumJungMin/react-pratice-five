import { useLocation } from "react-router-dom";
import { useCommentsState, useCommentsDispatch } from "../contexts/Comment";

interface ILocationState {
  name: string;
  coinId: string;
}

function CoinDetail() {
  const { state: coin } = useLocation<ILocationState>();
  const comments = useCommentsState();
  const dispatch = useCommentsDispatch();
  const addComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: "ADD_COMMENT",
      payload: {
        coinId: coin.coinId,
        comment: {
          nickName: e.currentTarget.nickName.value,
          content: e.currentTarget.content.value,
        },
      },
    });

    e.currentTarget.nickName.value = "";
    e.currentTarget.content.value = "";
  };
  return (
    <div>
      <h1>Coin Detail</h1>
      <p>{coin.name}</p>
      <p>{coin.coinId}</p>
      <form onSubmit={addComment}>
        {JSON.stringify(comments[coin.coinId])}
        <input
          type="text"
          name="nickName"
        />
        <input
          type="text"
          name="content"
        />
        <button>추가</button>
      </form>
    </div>
  );
}

export default CoinDetail;
