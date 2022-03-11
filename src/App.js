import "./styles.css";
import { useState, useCallback } from "react";
import Todos from "./Todos";

export default function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  // Without useCallback
  // const addTodo = () => {
  //   setTodos((t) => [...t, "New Todo"]);
  // };

  //With useCallback
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}
