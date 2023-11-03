export interface Memo {
  id: string;
  title: string;
  content: string;
}

export interface MemoList {
  [key: string]: Memo[];
}
