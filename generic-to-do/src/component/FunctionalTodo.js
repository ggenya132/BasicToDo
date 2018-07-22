import React from "react";
export const FuncTodo = props => {
  let { onRemove, content, index } = props;
  const handleRemove = () => {
    onRemove(index);
  };
  return (
    <div className="to-do__default">
      <h1 className="to-do__content">{content}</h1>
      <p className="remove-todo" onClick={handleRemove}>
        X
      </p>
    </div>
  );
};
