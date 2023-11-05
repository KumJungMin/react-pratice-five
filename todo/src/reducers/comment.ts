export interface Comments {
  [coinId: string]: Comment[];
}
export interface Comment {
  nickName: string;
  content: string;
}

export interface IAction {
  type: "ADD_COMMENT";
  payload: {
    coinId: string;
    comment: Comment;
  };
}

// 코멘트 데이터 관리
export function commentsReducer(state: Comments, action: IAction): Comments {
  const { coinId, comment } = action.payload;
  switch (action.type) {
    case "ADD_COMMENT":
      return {
        ...state,
        [coinId]: [...(state[coinId] || []), comment],
      };
    default:
      return state;
  }
}
