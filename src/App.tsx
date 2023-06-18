import React, { useState } from "react";
import "./App.css";
import { type } from "os";
import InputField from "./Components/InputField";
import { Todo } from "./model";
import TodoList from "./Components/TodoList";

const App: React.FC = () => {
  //   {
  //   let name: string;
  //   let str: any; //not recommended
  //   let neon: unknown; //it is recommende instead of any
  //   let age: number | string; //for multiple assign
  //   name = "piyush";
  //   let hobbies: string[];
  //   let role: [number, string]; //tuple
  //   let person: Object; //not recommended
  //   type Person = {
  //     name: string;
  //     age?: number; //make it optional
  //   };
  //   interface PersonX extends Person {
  //     neon: string;
  //     value?: number; //make it optional
  //   }
  //   let lotsOfPeople: Person[];
  //   //declare type of function
  //   let printName: Function; //not recommende
  //   type X = {
  //     a: string;
  //   };
  //   type Y = X & {
  //     b: number;
  //   };
  //   let printNameAge: (name: String) => void | number | Object | never; //difference between never and void is void returns undefined and never returns nothing
  //  }
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <div className="heading">TASKIFY</div>
      <InputField handleAddTodo={handleAddTodo} todo={todo} setTodo={setTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
