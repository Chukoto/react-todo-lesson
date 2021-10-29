import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    /* JSXの場合はclassではなくclassNameになる */
    <div className="incomplete-area">
      <p>未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
              {/* 上の記述ならボタンを押した時だけ呼ばれる。 */}
              {/* 下の記述だと削除ボタンを押さなくても、　毎回呼ばれてしまう。 */}
              {/* <button onClick={onClickDelete(index)}>削除</button> */}
            </div>
          );
        })}
      </ul>
    </div>
  );
};
