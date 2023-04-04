import { Button, Input } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo, deleteTodo } from "./components/actions/action";

function App() {
  const [title, setTitle] = useState("");
  const todos = useSelector((state) => state.todos);
  console.log("check:", todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    const newTodo = { id: uuidv4(), title };
    dispatch(addTodo(newTodo));
    setTitle("");
  };

  const handleDeleteTodo = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  return (
    <div>
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Type the todo"
      />
      <Button type="primary" onClick={handleAddTodo}>
        Add Task
      </Button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div>
              {todo.title}
              <Button
                danger
                type="primary"
                onClick={() => handleDeleteTodo(todo.id)}
              >
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
