import React from 'react'
import DashCard from "@/components/DashCard.jsx"
import ViewTask from '@/components/ViewTask';
const MyTask = () => {
  const dummyData = {
    title: "Attend Niscal's Birthday Party",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic et, commodi volup",
    path: "/images/download (2).jpeg"
  };
  return (
    <div className='w-full h-full'>
      <div className="section1 ml-0 p-4 md:p-10">
        <dic className="row flex flex-row gap-5">
          <div className=" col1 flex flex-col flex-1 md:h-screen  max-h-[90vh] border border-gray-400 rounded-xl p-5 px-7">
            <div className="title font-semibold mb-2"><p>MyTasks</p></div>
            <div className="flex flex-col gap-5 cards pt-2">
            <DashCard content={dummyData} type={"2"} />
            <DashCard content={dummyData} type={"2"} />
            </div>
          </div>
          <div className="col2 md:h-screen border max-h-[90vh] border-gray-400 rounded-xl p-4">
            <ViewTask />
          </div>
        </dic>
      </div>
    </div>
  )
}

export default MyTask