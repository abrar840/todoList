import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell } from "recharts";
import { ClipboardCheck } from "lucide-react";

const TaskStatus = () => {

    const data = [
        { name: "Completed", value: 84, color: "green" },
        { name: "In Progress", value: 46, color: "blue" },
        { name: "Not Started", value: 13, color: "red" },
    ];

    const renderChart = (percentage, color) => (
        <div className="flex-col flex items-center">

            <PieChart width={120} height={120}>
                <Pie

                    data={[{ value: percentage }, { value: 100 - percentage }]}
                    innerRadius={40}
                    outerRadius={55}
                    startAngle={-270}
                    endAngle={90}
                    dataKey="value"
                >
                    <Cell fill={color} />
                    <Cell fill="#e5e7eb" />
                </Pie>
            </PieChart>
            <div
                className="text-xl font-bold absolute"
                style={{
                    top: "40%", left: "50%", transform: "translate(-50%, -50%)",
                }}
            >
                {percentage}%
            </div>

        </div>
    );


    return (
       <div >
            <Card className="px-1 bg-transparent border-none shadow-none h-[34%]">
             
                    <div className="flex  flex-col xl:flex-row justify-around items-center w-auto">
                        <div className="relative flex flex-col items-center">
                            {renderChart(84, "green")}
                            <p className="mt-2 text-sm text-green-600">● Completed</p>
                        </div>

                        <div className="relative flex flex-col items-center">
                            {renderChart(46, "blue")}
                            <p className="mt-2 text-sm text-blue-600">● In Progress</p>
                        </div>

                        <div className="relative flex flex-col items-center">
                            {renderChart(19, "red")}
                            <p className="mt-2 text-sm text-red-600">● Not Started</p>
                        </div>
                    </div>
               

            </Card></div>
    )
}

export default TaskStatus