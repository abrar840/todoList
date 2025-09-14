import React, { useEffect, useState } from 'react'
import ViewTask from '@/components/ViewTask';
import { getItemById } from '@/indexedDB'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const ViewMyTask = () => {
    const { id } = useParams();
    const navigate = useNavigate();


    const [task, setTask] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (id) {
            getItemById(Number(id))
                .then((res) => {
                    setTask(res)
                    setLoading(false)
                })
                .catch((err) => {
                    console.error("Error fetching item:", err)
                    setLoading(false)
                })
        }
    }, [id])

    if (loading) return <p>Loading...</p>
    if (!task) return <p>No task found with id {id}</p>

    const onDelete=()=>{
         navigate("/");
    }

    return (
        <div className='w-full h-full'>
            <div className="section1 ml-0 p-4 md:p-10">
                <div className="row flex flex-row gap-5">

                    { <div className="col2 md:h-screen border w-[75vw] max-h-[80vh] border-gray-400 rounded-xl p-4">
                        <div className="backbtn flex w-full justify-end"> <Link to="/" ><u className='font-semibold'>GoBack</u></Link> </div>
                        <ViewTask content={task} onDelete={onDelete}/>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default ViewMyTask
