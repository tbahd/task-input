import { useState } from "react";


function TaskList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleTaskChange(e) {
    setTask(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!task.trim()) return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Task List 📃</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={task}
            onChange={handleTaskChange}
            placeholder="Enter a task"
            className="w-full p-2 border rounded mb-4"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Add Task
          </button>
        </form>

        {tasks.length == 0 && (
          <p className="mt-6 text-gray-500 text-center">No tasks yet</p>
        )}

        <ul className="mt-6 space-y-2">
          {tasks.map((item) => (

            // <li
            //   key={item.id}
            //   onClick={() => toggleTask(item.id)}
            //   className={`p-2 border rounded cursor-pointer ${item.completed ? "line-through text-gray-400" : ""}`}
            // >
            //   {item.text}
            // </li>

            <li
              key={item.id}
              className="p-2 border rounded flex justify-between items-center"
            >
              <span
                onClick={() => toggleTask(item.id)}
                className={`cursor-pointer ${
                  item.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {item.text}
              </span>

              <button
                onClick={() => deleteTask(item.id)}
                className="text-red-500 hover:text-red-700 cursor-pointer"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskList;








