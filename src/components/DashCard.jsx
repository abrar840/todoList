import React from 'react'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Users, ClipboardClockIcon, MoreVertical, Ellipsis, MoreHorizontal, Circle } from "lucide-react";
const DashCard = ({ content, type }) => {
    return (
        <div>
            {type == 1 ? (
                <Card className="px-1 bg-transparent border-gray-400 shadow-none h-[34%]">
                    <CardHeader>
                        <CardTitle className="flex flex-row items-baseline"><Circle className=' h-4 w-4 mr-1 -ml-4 text-blue-600 font-bold' />{content.title}</CardTitle>
                        <CardDescription></CardDescription>
                        <CardAction className="md:-mt-3 text-gray-400">
                            <Ellipsis />
                        </CardAction>
                    </CardHeader>
                    <CardContent className="md:-mt-4 text-gray-500">
                        <div className='flex flex-col lg:flex-row'>
                            <p className="md:pr-7">{content.description}</p>
                            <div className='h-25 lg:w-60 w-30 rounded-lg overflow-hidden mr-5'><img src={content.path} className="w-full h-full object-cover" alt="" /></div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <div className='flex flex-col lg:flex-row lg:gap-8 md:gap-4 gap-1'>
                            <div className='flex flex-col md:flex-row'>
                                <p>Priority:</p>
                                <p className='text-blue-400 pl-1'>Moderate</p>
                            </div>
                            <div className='flex flex-col md:flex-row'>
                                <p>Status:</p>
                                <p className='text-red-400 pl-1'>Not started</p>
                            </div>
                        </div>
                    </CardFooter>
                </Card>) : (
                <Card className=" flex px-1 bg-transparent border-gray-400 max-w-sm">
                    <CardHeader>
                        <CardTitle className="flex flex-row items-baseline"><Circle className=' h-4 w-4 mr-1 -ml-4 text-green-500' />{content.title}</CardTitle>
                        <CardDescription></CardDescription>
                        <CardAction className="md:-mt-3 text-gray-400">
                            <Ellipsis />
                        </CardAction>
                    </CardHeader>
                    <CardContent className="md:-mt-4 text-gray-500">
                        <div className='flex flex-col lg:flex-row '>
                            <p className="md:pr-7">{content.description}</p>
                            <div className='h-25 lg:w-60 w-30 rounded-lg overflow-hidden mr-5'><img src={content.path} className="w-full h-full object-cover" alt="" /></div>
                        </div>
                    </CardContent>
                    <CardFooter className="-mt-8">
                        <div className='flex flex-col lg:flex-row lg:gap-8  gap-1'>

                            <div className='flex flex-col md:flex-row mt-2'>
                                <p>Status:</p>
                                <p className='text-red-400 pl-1'>Not started</p>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
            )}



        </div>
    )
}

export default DashCard