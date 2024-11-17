import React, { useState, useEffect } from "react";
import { db } from "../Firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import TaskItem from "./TaskItem";
import { ClipboardList } from "lucide-react";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const tasksCollectionRef = collection(db, "tasks");
    const q = query(tasksCollectionRef, orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setTasks(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto mt-6 px-4">
      {tasks.length > 0 ? (
        <div className="space-y-3">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <ClipboardList className="w-16 h-16 text-blue-500/50 mb-4" />
          <h3 className="text-lg font-medium text-gray-600 mb-2">
            No tasks yet
          </h3>
          <p className="text-sm text-gray-500">
            Add your first task using the input above
          </p>
        </div>
      )}
      
      {tasks.length > 0 && (
        <div className="mt-4 text-center text-sm text-gray-500">
          {tasks.length} task{tasks.length !== 1 ? 's' : ''} total
        </div>
      )}
    </div>
  );
};

export default TaskList;