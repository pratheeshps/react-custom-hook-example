import React, { useState } from "react";
import useList from "../useList";

function Todo() {
  const [todoInput, setTodoInput] = useState("");
  const { list, add, update, remove, clear } = useList([]);

  const addTodo = (e) => {
    if (todoInput) {
      add({ id: Date.now(), name: todoInput });
      setTodoInput("");
    }
  };

  return (
    <div>
      <input
        value={todoInput}
        type="text"
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={clear}>Clear Todo</button>
      <ul>
        {list &&
          list.map((todo) => (
            <li key={todo.id} style={{ marginBottom: ".5rem" }}>
              <input
                type="text"
                defaultValue={todo.name}
                onBlur={(e) =>
                  update(todo.id, {
                    ...todo,
                    name: e.target.value
                  })
                }
              />
              <span>
                <button
                  style={{ marginLeft: ".5rem" }}
                  onClick={() => remove(todo.id)}
                >
                  x
                </button>
              </span>
            </li>
          ))}
      </ul>
      <div>{JSON.stringify(list)}</div>
    </div>
  );
}

export default Todo;
