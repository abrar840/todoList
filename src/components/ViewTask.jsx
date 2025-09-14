import React from 'react'

const ViewTask = () => {


    const dummyData = {
        title: "Attend Niscal's Birthday Party",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic et, commodi volup",
        path: "/images/download (2).jpeg"
    };


    return (
        <div className='w-full h-full'>
            <div className="col">
                <div className="row1 flex flex-row">
                    <div className="img h-[130px] w-[130px]"><img src={dummyData.path} alt="" className='w-full h-full object-cover rounded-lg' /></div>
                    <div className="row1col1 flex-row gap-8 p-3">
                        <p className="title font-semibold">Tilte of Todo</p>
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
                        <span>This is tile of todo</span>
                    </div>
                    <div className="description">
                        <h2 className="title font-bold text-lg text-gray-600 mr-1 inline">Description:</h2>
                        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod aperiam sunt architecto ducimus? Autem qui earum fugiat, temporibus asperiores dicta optio mollitia pariatur aut veritatis tempore libero, sed totam, accusantium culpa amet atque consequatur rem omnis quas ipsam! Recusandae amet praesentium eos nobis soluta error esse et a sed veritatis.</span>
                    </div> </div>
            </div>
        </div>
    )
}

export default ViewTask