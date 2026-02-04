import { Input } from "@/components/ui/input";
import React, { useEffect, useMemo, useRef } from "react";

function Counter() {
  const [count, setCount] = React.useState(0);
  const curRef = React.useRef(count);

  React.useEffect(() => {
    curRef.current = count;
  }, [count]);

  const handleAlert = () => {
    setTimeout(() => {
      alert(`Count is: ${curRef.current}`);
    }, 3000);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={handleAlert}>Show Count in 3s</button>
    </div>
  );
}

function TodoList() {
  const [todos, setTodos] = React.useState([
    { id: 1, task: "Buy milk" },
    { id: 2, task: "Walk dog" },
  ]);

  const addTodo = () => {
    setTodos([{ id: todos.length + 1, task: "New task" }, ...todos]);
  };

  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, id) => (
          <li key={id}>
            <input defaultValue={todo.task} />
          </li>
        ))}
      </ul>
    </div>
  );
}
function Parent() {
  const [count, setCount] = React.useState(0);

  const numbers = [1, 2, 3, 4, 5];

  const doubleNumbers = useMemo(() => {
    return numbers.map((n) => n * 2);
  }, [numbers]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment {count}</button>
      <Child numbers={doubleNumbers} />
    </div>
  );
}

function Child({ numbers }) {
  console.log("Child rendered");
  return (
    <ul>
      {numbers.map((n) => (
        <li key={n}>{n}</li>
      ))}
    </ul>
  );
}

const AboutPage = () => {
  const test = useRef(null);

  const createMultiplier = (multiplier) => {
    let res = 0;

    return function (multi) {
      res = multi * multiplier;
      return res;
    };
  };
  const multiplyBy3 = createMultiplier(3);

  console.log(multiplyBy3(5)); // 15
  console.log(multiplyBy3(10)); // 30
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex items-center justify-center">
        {/* <Input type="text" placeholder="test" ref={test} /> */}
        {/* <Counter /> */}
        {/* <TodoList /> */}
        <Parent />
      </div>
    </div>
  );
};

export default AboutPage;
