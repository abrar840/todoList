import React from 'react';
import { Button } from "@/components/ui/button"
import "@/App.css"
import { Users, ClipboardClockIcon } from "lucide-react";
const Dashboard = () => {
    const images = [
        "/images/download.jpeg",
        "/images/download (1).jpeg",
        "/images/download (2).jpeg",
        "/images/download (3).jpeg",
        "/images/download (4).jpeg",
    ];
    const now = new Date();
    return (
        <div className="w-[80vw]">
            <section className="ml-0 p-10 w-full">
                <div className="flex flex-row justify-between items-center ">
                    <p className=" text-2xl md:text-5xl font-semibold">Welcome back, Sundar</p>

                    <div className="flex flex-row gap-1">
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

                        <button class="bg-[rgba(235,245,255,0.5)] border border-red-500 text-red-500 px-4 py-2 rounded-md w-26 pl-6 h-10 ml-5 ">
                            <span className='flex flex-row gap-2 font-semibold'>  <Users size={18} />  Invite</span>
                        </button>
                    </div>
                </div>
            </section>

            <section>
                <div className="px-10">
                    <div className="content w-full h-[70vh] border-2 border-gray-300 p-10">
                        <div className="row">
                            <div className='col1 shadow-lg w-[50%] h-[60vh] rounded-lg  '>
                                <div className="heading justify-between p-5 flex flex-row">
                                    <div className='flex flex-row gap-2 text-gray-400'> <ClipboardClockIcon />  <p className='text-red-500 text-xl'>To-do</p></div>
                                    <p className="text-gray-400"><span className="text-red-500   font-bold p-2 text-xl">+</span>Add task</p>
                                </div>
                                <div className='px-5 flex flex-row items-center gap-2 -mt-2'>
                                    <p className="text-sm">
                                        {now.toLocaleDateString("en-GB", { day: "numeric", month: "long" })}
                                    </p>
                                    <p className='text-gray-400'> Today</p>
                                </div>
                                <div className="cards flex flex-col">

                                </div>
                            </div>
                            <div className="col">
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div></div>
            </section>
        </div>
    );
};

export default Dashboard;
