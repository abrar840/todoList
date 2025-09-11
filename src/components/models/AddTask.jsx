import React from 'react'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { UploadCloud } from 'lucide-react';
import { Button } from "@/components/ui/button"

const AddTask = ({ onClose }) => {

    const handleUpload = (e) => {
        const file = e.target.file[0];
    }
    return (
        <div
            className='w-full h-full border-gray-400 fixed top-0 left-0 z-1000'>

            <div className="overlay absolute top-0 left-0 w-[100%] h-[100%] bg-[rgba(0,0,0,0.5)]"></div>
            <div className="form absolute top-[9%] left-[20%] h-[80%] lg:w-[50%] w-[70%] rounded bg-white">
                <div className="card  rounded bg-white">
                    <Card className="border-none shadow-none h-100%  ">
                        <CardHeader>
                            <CardTitle>Add New Task</CardTitle>

                            <CardAction className="font-semibold"><button onClick={() => onClose()}><u>Go Back</u></button></CardAction>
                        </CardHeader>
                        {/*card inside main card*/}
                        <div className="card2 md:p-10">
                            <Card className="shadow-none rounded-none border-1  border-gray-400">
                                <CardContent>
                                    <div className="flex flex-col gap-6">
                                        <div className="grid gap-2">
                                            <Label htmlFor="title">Title</Label>
                                            <Input
                                                id="title"
                                                type="text"
                                                placeholder=" "
                                                required
                                                className=" border-gray-400 w-[70%]"
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="date">Date</Label>
                                            <Input
                                                id="date"
                                                type="date"
                                                placeholder=" "
                                                required
                                                className=" border-gray-400 w-[70%]  "
                                            />
                                        </div>
                                        <div className="checkbox">
                                            <Label>Priority</Label>
                                            <div className="flex flex-col lg:flex-row gap-12 items-center text-gray-400 font-light mt-2">
                                                <div className='flex flex-row items-center gap-2'>
                                                    <Label htmlFor="check1"><p className="text-sm text-red-600 ">●</p>Extreme</Label>
                                                    <Checkbox className="rounded-none" id="check1" />
                                                </div>
                                                <div className='flex flex-row items-center gap-2'>
                                                    <Label htmlFor="check1">  <p className="text-sm text-blue-400 ">●</p>Medium</Label>
                                                    <Checkbox className="rounded-none" id="check2" />
                                                </div>
                                                <div className='flex flex-row items-center gap-2'>
                                                    <Label htmlFor="check1">  <p className="text-sm text-green-400 ">●</p>Low</Label>
                                                    <Checkbox className="rounded-none" id="check3" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="last flex flex-row gap-8">
                                            <div className="description border border-gray-400 h-100% w-[60%] rounded"><Textarea className="border-none shadow-none md:h-[150px]" /> </div>
                                            <div className="img border border-gray-400 h-100% w-[30%] rounded">
                                                <label
                                                    htmlFor="file-upload"
                                                    className="flex flex-col items-center justify-center p-4     rounded-lg cursor-pointer hover:border-gray-500 transition-all duration-200 text-center">

                                                    <UploadCloud className="w-10 h-10 text-gray-400 mb-2" />
                                                    <p className="text-sm text-gray-500">Drag & Drop files here</p>
                                                    <p className="text-sm text-gray-400 mb-2">or</p>
                                                    <div className="px-3 py-1 border rounded bg-gray-100 text-sm text-gray-700 hover:bg-gray-200">
                                                        Browse
                                                    </div>
                                                    <input
                                                        id="file-upload"
                                                        type="file"
                                                        className="hidden"
                                                        onChange={handleUpload}
                                                    />
                                                </label></div>
                                        </div>
                                    </div>
                                </CardContent>
                                
                            </Card>
                             <div className="btn mt-5 ml-5 "> 
                                <Button className="bg-orange-600">
                                    Done
                                </Button>
                            </div>
                            </div>
                            </Card>
                </div>
            </div>
        </div>
    )
}

export default AddTask