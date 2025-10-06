import { useState } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, newTask.trim()]);
    setNewTask("");
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-3">Your Tasks</h2>
      <div className="flex gap-2 mb-3">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add new task..."
          className="flex-1 border border-gray-300 rounded px-2 py-1"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-3 py-1 hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {tasks.map((task, i) => (
          <li
            key={i}
            className="flex justify-between items-center border-b py-1"
          >
            <span>{task}</span>
            <button
              onClick={() => removeTask(i)}
              className="text-red-500 hover:text-red-700 text-sm"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
