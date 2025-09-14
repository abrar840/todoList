import React, { useState } from 'react';
import { Trash2, Edit } from 'lucide-react';
import { deleteItem } from '@/indexedDB';
import EditTask from './models/EditTask';

const ViewTask = ({ content,onDelete}) => {

 const [editModel, setEditModel] = useState(false);
    const toggleEditModel = () => (setEditModel(!editModel));
    const closeEditModel = () => { setEditModel(false) };

   


    return (
        <div className='w-full h-full flex flex-col'>
             {editModel && <EditTask onClose={closeEditModel}  task={content}/>}
            <div className="col">
                <div className="row1 flex flex-row">
                    <div className="img h-[130px] w-[130px]"><img src={content.image} alt="" className='w-full h-full object-cover rounded-lg' /></div>
                    <div className="row1col1 flex-row gap-8 p-3">
                        <p className="title font-semibold">{content.title}</p>
                        <div className='flex flex-col md:flex-row'>
                            <p>Priority:</p>
                            <p className='text-blue-400 pl-1'>Moderate</p>
                        </div>
                        <div className='flex flex-col md:flex-row'>
                            <p>Status:</p>
                            <p className='text-red-400 pl-1'>Not started</p>
                        </div>
                    </div>
                </div>
                <div className="row2 flex-col mt-5">
                    <div className='title'>
                        <h2 className="title font-bold text-lg text-gray-600 mr-1 inline">Title:</h2>
                        <span>{content.title} </span>
                    </div>
                    <div className="description">
                        <h2 className="title font-bold text-lg text-gray-600 mr-1 inline">Description:</h2>
                        <span>{content.description}</span>
                    </div> </div>
            </div>

            <div className="delete mt-auto py-3 w-full flex justify-end gap-3">
                <button
                    className="bg-red-500 hover:bg-red-600 p-2 rounded-lg"
                    onClick={async () => {
                        await deleteItem(content.id);
                        if (onDelete) onDelete();   // 👈 refresh parent list
                    }}
                >
                    <Trash2 className="w-5 h-5 text-white" />
                </button>
                <button className="bg-red-500 hover:bg-red-600 p-2 rounded-lg"  onClick={() => setEditModel(true)}>
                    <Edit className="w-5 h-5 text-white" />
                </button>


            </div>
        </div>
    )
}

export default ViewTask