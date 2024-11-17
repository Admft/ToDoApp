import React, { useState } from "react";
import { PlusCircle } from "lucide-react";
import { db } from "../Firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const AddTask = () => {
  const [task, setTask] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);

  const addTask = async (e) => {
    e.preventDefault();
    if (task.trim()) {
      try {
        const tasksCollectionRef = collection(db, "tasks");
        await addDoc(tasksCollectionRef, {
          task: task.trim(),
          completed: false,
          timestamp: serverTimestamp(),
        });
        setTask("");
      } catch (error) {
        console.error("Error adding task: ", error);
      }
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white/50 backdrop-blur-lg shadow-lg rounded-lg">
      <form 
        onSubmit={addTask}
        className="p-4 flex flex-col gap-4"
      >
        <div className="relative">
          <div
            className={`absolute inset-0 bg-blue-100/20 rounded-lg transition-all duration-300 ${
              isInputFocused ? 'scale-105 opacity-100' : 'scale-100 opacity-0'
            }`}
          />
          <input
            type="text"
            placeholder="What would you like to accomplish?"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
            className="relative z-10 w-full px-6 py-4 bg-white/70 rounded-lg shadow-sm border border-gray-200 
                     placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 
                     focus:border-transparent transition-all duration-300"
          />
        </div>
        
        <button
          type="submit"
          className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r 
                   from-blue-500 to-blue-600 text-white rounded-lg shadow-lg 
                   hover:from-blue-600 hover:to-blue-700 transition-all duration-300 
                   disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!task.trim()}
        >
          <PlusCircle className="w-5 h-5" />
          <span className="font-medium">Add Task</span>
        </button>
      </form>
    </div>
  );
};

export default AddTask;