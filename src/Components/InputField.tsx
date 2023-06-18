import React, { useRef } from "react";
import "./InputField.css";
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (e: React.FormEvent) => void;
}
const InputField: React.FC<Props> = ({ todo, setTodo, handleAddTodo }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className="input">
      <input
        ref={inputRef}
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task"
        className="input_box"
      />
      <button
        onClick={(e) => {
          handleAddTodo(e);
          inputRef.current?.blur();
        }}
        className="input_submit"
      >
        Add
      </button>
    </form>
  );
};

export default InputField;
