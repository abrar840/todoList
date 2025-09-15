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
const DashCard = ({ content, type, handleclick }) => {
    return (
        <div>
            {type == 1 ? (
                <Card className="px-1 bg-transparent border-gray-400 shadow-none h-[34%]" onClick={() => handleclick(content)}>
                    <CardHeader>
                        <CardTitle className="flex flex-row items-baseline"><Circle className=' h-4 w-4 mr-1 -ml-4 text-blue-600 font-bold' />{content.title.split(" ")
                            .slice(0, 10)
                            .join(" ") +
                            (content.title.split(" ").length > 10 ? "..." : "")}</CardTitle>
                        <CardDescription></CardDescription>
                        <CardAction className="md:-mt-3 text-gray-400">
                            <Ellipsis />
                        </CardAction>
                    </CardHeader>
                    <CardContent className="md:-mt-4 text-gray-500 w-full">
                        <div className='flex flex-col lg:flex-row justify-between'>
                            <div className="w-60">{content.description
                                .split(" ")
                                .slice(0, 30)
                                .join(" ") +
                                (content.description.split(" ").length > 30 ? "..." : "")}</div>
                            <div className='h-25 lg:min-w-[100px] w-[100px] rounded-lg overflow-hidden '><img src={content.image} className="w-full h-full object-cover" alt="" /></div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <div className="flex flex-col md:flex-row md:gap-4 lg:gap-6 gap-2">
                            {/* Priority */}
                            <div className="flex flex-row md:flex-col lg:flex-row gap-1">
                                <p className="font-medium">Priority:</p>
                                <p className="text-blue-400">Moderate</p>
                            </div>

                            {/* Status */}
                            <div className="flex flex-row md:flex-col lg:flex-row gap-1">
                                <p className="font-medium">Status:</p>
                                <p className="text-red-400">Not started</p>
                            </div>
                        </div>
                    </CardFooter>

                </Card>) : (

                <Card className=" flex px-1 bg-transparent border-gray-400 " onClick={() => handleclick(content)}>
                    <CardHeader>
                        <CardTitle className="flex flex-row items-baseline">
                            <Circle className=' h-4 w-4 mr-1 -ml-4 text-green-500' />{content.title.split(" ")
                                .slice(0, 10)
                                .join(" ") +
                                (content.title.split(" ").length > 10 ? "..." : "")}</CardTitle>
                        <CardDescription></CardDescription>
                        <CardAction className="md:-mt-3 text-gray-400">
                            <Ellipsis />
                        </CardAction>
                    </CardHeader>
                    <CardContent className="md:-mt-4 text-gray-500 w-full">
                        <div className='flex flex-col lg:flex-row '>
                            <div className="w-60">{content.description
                                .split(" ")
                                .slice(0, 30)
                                .join(" ") +
                                (content.description.split(" ").length > 30 ? "..." : "")}</div>
                            <div className='h-25 lg:min-w-[100px] w-[100px] rounded-lg overflow-hidden mr-5'><img src={content.image} className="w-full h-full object-cover" alt="" /></div>
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