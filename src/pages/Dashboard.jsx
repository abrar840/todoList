import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import "@/App.css";
import { Users, ClipboardClockIcon, ClipboardCheck, ClipboardCheckIcon } from "lucide-react";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import TaskStatus from '@/components/TaskStatus';
import DashCard from "@/components/DashCard.jsx";
import AddTask from '@/components/models/AddTask';
import { getAllItem } from '@/indexedDB';

const Dashboard = () => {
    const images = [
        "/images/download.jpeg",
        "/images/download (1).jpeg",
        "/images/download (2).jpeg",
        "/images/download (3).jpeg",
        "/images/download (4).jpeg",
    ];
    const now = new Date();
    const [addTaskModel, setAddTaskModel] = useState(false);
    const [tasks, SetTasks] = useState([]);
    const navigate = useNavigate();

    const toggleAddModel = () => setAddTaskModel(!addTaskModel);
    const closeAddModel = () => setAddTaskModel(false);

    useEffect(() => {
        fetchAllTasks();
    }, [addTaskModel]);

    const fetchAllTasks = async () => {
        const data = await getAllItem();
        SetTasks(data);
    }

    const showDetails = (content) => {
        navigate(`/viewmytask/${content.id}`);
    }

    return (
        <div className="w-full max-w-full h-full overflow-x-hidden">
            {addTaskModel && <AddTask onClose={closeAddModel} />}

            {/* Header Section */}
            <section className="w-full p-4 md:p-6 lg:p-8 xl:p-10 box-border">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <p className="text-xl md:text-2xl lg:text-5xl font-semibold">Welcome back, Sundar</p>

                    <div className="flex flex-row gap-1 items-center flex-wrap">
                        {images.map((src, index) => (
                            <div
                                key={index}
                                className="bg-[#ff6969] w-10 h-10 rounded-lg flex justify-center items-center overflow-hidden"
                            >
                                <img
                                    src={src}
                                    alt={`Profile ${index}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}

                        <button className="bg-[rgba(235,245,255,0.5)] border border-red-500 text-red-500 px-2 md:px-4 py-2 rounded-md w-auto md:w-26 pl-3 md:pl-6 h-10 text-sm md:text-base">
                            <span className='flex flex-row gap-2 font-semibold'>  
                                <Users size={18} /> Invite
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="w-full box-border">
                <div className="w-full px-4 md:px-6 lg:px-8 xl:px-10 box-border">
                    <div className="content w-full border-2 border-gray-300 p-4 md:p-6 lg:p-8 xl:p-10 box-border">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 xl:gap-8">

                            {/* Column 1 - To-Do */}
                            <div className='shadow-lg w-full h-full rounded-lg box-border'>
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-0 p-3 md:p-5">
                                    <div className='flex flex-row gap-2 text-gray-400 items-center'>
                                        <ClipboardClockIcon />
                                        <p className='text-red-500 text-xl'>To-do</p>
                                    </div>
                                    <button
                                        onClick={() => setAddTaskModel(true)}
                                        className="text-gray-400 text-sm md:text-base flex items-center gap-1 focus:outline-none cursor-pointer bg-transparent hover:text-gray-700 transition-colors duration-200"
                                        aria-label="Add task"
                                    >
                                        <span className="text-red-500 font-bold p-1 md:p-2 text-lg md:text-xl">+</span>
                                        Add task
                                    </button>
                                </div>

                                <div className='px-3 md:px-5 flex flex-row items-center gap-2 -mt-2'>
                                    <p className="text-sm">
                                        {now.toLocaleDateString("en-GB", { day: "numeric", month: "long" })}
                                    </p>
                                    <p className='text-gray-400'> Today</p>
                                </div>

                                <div className="cards flex flex-col px-4 mt-3 w-full gap-4 box-border">
                                    {tasks.length === 0 && <h2>No task found to show</h2>}
                                    {tasks.map((task) => (
                                        <DashCard content={task} type={"1"} key={task.id} handleclick={showDetails} />
                                    ))}
                                </div>
                            </div>

                            {/* Column 2 - Status & Completed */}
                            <div className="flex flex-col w-full gap-4 lg:gap-5 xl:gap-6">

                                {/* Task Status */}
                                <div className='w-full rounded-lg shadow-lg p-5 box-border'>
                                    <div className='flex flex-row gap-2 text-gray-400 items-center mb-3'>
                                        <ClipboardCheck />  
                                        <p className='text-red-500 text-xl'>Task Status</p>
                                    </div>
                                    <TaskStatus />
                                </div>

                                {/* Completed Tasks */}
                                <div className='shadow-lg flex flex-col w-full rounded-lg p-5 box-border'>
                                    <div className='flex flex-row gap-2 text-gray-400 items-center mb-3'>
                                        <ClipboardCheckIcon />
                                        <p className='text-red-500 text-xl'>Completed Task</p>
                                    </div>
                                    <div className="cards flex flex-col gap-5">
                                        {/* Example completed tasks */}
                                        {/* <DashCard content={dummyData} type={"2"} />
                                        <DashCard content={dummyData} type={"2"} /> */}
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
