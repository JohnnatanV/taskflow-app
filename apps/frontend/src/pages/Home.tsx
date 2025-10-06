import TaskList from "../components/TaskList.tsx";

const Home = () => {
  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-4">Welcome to TaskFlow</h1>
        <p className="text-gray-600 mb-4">
          Organize your task efficiently and keep track your progress
        </p>
        <TaskList />
      </div>
    </>
  );
};

export default Home;
