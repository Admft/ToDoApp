import React from "react";
import { db } from "../Firebase";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { Trash2, CheckCircle2 } from "lucide-react";

const TaskItem = ({ task }) => {
  const toggleComplete = async () => {
    try {
      const taskDocRef = doc(db, "tasks", task.id);
      await updateDoc(taskDocRef, {
        completed: !task.completed,
      });
    } catch (error) {
      console.error("Error updating task: ", error);
    }
  };

  const deleteTask = async () => {
    try {
      const taskDocRef = doc(db, "tasks", task.id);
      await deleteDoc(taskDocRef);
    } catch (error) {
      console.error("Error deleting task: ", error);
    }
  };

  return (
    <div className="group flex items-center gap-3 p-3 bg-white/50 hover:bg-white/70 
                    border border-gray-200/50 rounded-lg shadow-sm transition-all duration-200">
      <button
        onClick={toggleComplete}
        className="flex-shrink-0 focus:outline-none"
      >
        <CheckCircle2 
          className={`w-6 h-6 transition-colors duration-200 ${
            task.completed 
              ? "text-blue-500 fill-blue-500" 
              : "text-gray-300 hover:text-blue-400"
          }`}
        />
      </button>

      <span 
        className={`flex-grow text-gray-700 transition-all duration-200 ${
          task.completed 
            ? "line-through text-gray-400" 
            : "text-gray-700"
        }`}
      >
        {task.task}
      </span>

      <button
        onClick={deleteTask}
        className="flex-shrink-0 opacity-0 group-hover:opacity-100 
                 focus:opacity-100 transition-opacity duration-200"
      >
        <Trash2 
          className="w-5 h-5 text-gray-400 hover:text-red-500 
                    transition-colors duration-200" 
        />
      </button>
    </div>
  );
};

export default TaskItem;