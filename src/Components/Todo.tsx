import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import "./Todo.css";
type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const handleDeleteTodo = () => {
    setTodos(todos.filter((ele) => ele.id !== todo.id));
  };
  const inputRef = useRef<HTMLInputElement>(null);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  useEffect(() => {
    inputRef.current?.focus();
  }, [isEdit]);
  const handleCompletedTodo = () => {
    setTodos(
      todos.map((ele: Todo) => {
        if (todo.id === ele.id) {
          return { ...todo, isDone: true };
        } else return ele;
      })
    );
  };
  const handleEditTodo = (e: React.FormEvent) => {
    e.preventDefault();
    setTodos(
      todos.map((ele) =>
        ele.id === todo.id ? { ...ele, todo: editTodo } : ele
      )
    );
    setIsEdit(false);
  };
  return (
    <form className="todos_single" onSubmit={handleEditTodo}>
      {isEdit ? (
        <input
          className="todos_single_text"
          value={editTodo}
          type="text"
          ref={inputRef}
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : todo.isDone ? (
        <s className="todos_single_text">{todo.todo}</s>
      ) : (
        <span className="todos_single_text">{todo.todo}</span>
      )}
      <div>
        <span className="icon">
          <AiFillEdit
            onClick={() => {
              if (!isEdit && !todo.isDone) {
                setIsEdit(!isEdit);
              }
            }}
          />
        </span>
        <span className="icon">
          <AiFillDelete onClick={handleDeleteTodo} />
        </span>
        <span className="icon">
          <MdDone onClick={handleCompletedTodo} />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
