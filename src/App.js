import React from 'react';
import Header from "./Components/Header";
import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskList";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Header />
        {/* Add margin-top to create spacing */}
        <div className="mt-8">
          <AddTask />
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;
