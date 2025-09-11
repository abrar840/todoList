import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import "@/App.css"
import { Users, ClipboardClockIcon, ClipboardCheck, MoreVertical, Ellipsis, MoreHorizontal, ClipboardCheckIcon, UserRound, KeyRound } from "lucide-react";
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
import DashCard from "@/components/DashCard.jsx"
import AddTask from '@/components/models/AddTask';
import { Label } from '@/components/ui/label';



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

    const toggleAddModel = () => (setAddTaskModel(!addTaskModel));
    const closeAddModel = () => { setAddTaskModel(false) };
    const dummyData = {
        title: "Attend Niscal's Birthday Party",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic et, commodi voluptate minus sit nihil.",
        path: "/images/download (2).jpeg"
    };


    return (


        <div className="w-full h-full">
            {addTaskModel && <AddTask onClose={closeAddModel} />}
            <section className="ml-0 p-4 md:p-10 w-full">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <p className="text-xl md:text-2xl lg:text-5xl font-semibold">Welcome back, Sundar</p>

                    <div className="flex flex-row gap-1 items-center">
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

                        <button className="bg-[rgba(235,245,255,0.5)] border border-red-500 text-red-500 px-2 md:px-4 py-2 rounded-md w-auto md:w-26 pl-3 md:pl-6 h-10 ml-2 md:ml-5 text-sm md:text-base">
                            <span className='flex flex-row gap-2 font-semibold'>  <Users size={18} />  Invite</span>
                        </button>
                    </div>
                </div>
            </section>

            <section>
                <div className="px-4 md:px-10">
                    <div className="content w-full  border-2 border-gray-300 p-4 md:p-10">
                        <div className="row flex flex-col md:flex-row   gap-4">
                            <div className='col1 shadow-lg w-full h-full rounded-lg'>
                                <div className="heading justify-between  p-3 md:p-5 flex flex-col md:flex-row gap-2 md:gap-0">
                                    <div className='flex flex-row gap-2 text-gray-400'> <ClipboardClockIcon />  <p className='text-red-500 text-xl'>To-do</p></div>
                                    <button
                                        onClick={() => setAddTaskModel(true)}
                                        className="text-gray-400 text-sm md:text-base flex items-center gap-1 focus:outline-none cursor-pointer bg-transparent   hover:text-gray-700 transition-colors duration-200"
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
                                <div className="cards flex flex-col px-4 mt-3 w-full gap-4">
                                    <DashCard content={dummyData} type={"1"} />
                                    <DashCard content={dummyData} type={"1"} />
                                    <br />
                                    <hr />
                                    <br />
                                    <div className='pb-10'>
                                        <DashCard content={dummyData} type={"1"} />
                                    </div>
                                </div>
                            </div>
                            <div className="col2 flex  flex-col w-full gap-5">


                                <div className='row1  w-full  rounded-lg shadow-lg p-5'>
                                    <div className='flex flex-row gap-2 text-gray-400 p-5'> <ClipboardCheck />  <p className='text-red-500 text-xl'>Task Status</p></div>
                                    <TaskStatus />
                                </div>

                                <div className='row1 shadow-lg flex flex-col  h-full w-full rounded-lg md:p-10'>
                                    <div className='flex flex-row gap-2 text-gray-400 py-5'> <ClipboardCheckIcon />  <p className='text-red-500 text-xl'>Completed Task</p></div>
                                    <div className="cards  h-full w-full p-{5 flex flex-col gap-5">
                                        <DashCard content={dummyData} type={"2"} />
                                        <DashCard content={dummyData} type={"2"} />

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
