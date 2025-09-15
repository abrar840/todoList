import React, { useState, useEffect } from 'react'
import DashCard from "@/components/DashCard.jsx"
import ViewTask from '@/components/ViewTask';
import { getAllItem } from '@/indexedDB';

const MyTask = () => {
  const [tasks, SetTasks] = useState([]);
  const [selectedTask, SetSelectedTask] = useState("");
  const [isdetail, SetIsdetail] = useState(false);

  useEffect(() => {
    fetchall();
  }, []);

  const fetchall = async () => {
    const data = await getAllItem();
    SetTasks(data);
    SetIsdetail(false);
  };

  const showDetails = (content) => {
    SetSelectedTask(content);
    SetIsdetail(true);
  };

  return (
    <div className="w-full h-full">
      <div className="section1 p-4 md:p-10">
        <div className="row flex flex-col md:flex-row gap-5">

         <div className="col1 flex flex-col flex-1 border border-gray-400 rounded-xl p-5 px-7 w-auto lg:max-w-[50%]">
            <div className="title font-semibold mb-2">
              <p>MyTasks</p>
            </div>
            <div className="flex flex-col gap-5 cards pt-2 w-full">
              {tasks.length === 0 && (
                <h2 className="text-gray-500 text-center">
                  No task found — go to dashboard and add a task
                </h2>
              )}
              {tasks.map((task) => (
                <DashCard
                  content={task}
                  type="2"
                  key={task.id}
                  handleclick={showDetails}
                />
              ))}
            </div>
          </div>
          {isdetail && (
            <div className="col2 w-full md:w-1/2 md:h-screen border max-h-[80vh] border-gray-400 rounded-xl p-4">
              <ViewTask content={selectedTask} onDelete={fetchall} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyTask;
