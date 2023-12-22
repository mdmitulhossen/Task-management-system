import React from 'react';
import TodoCard from '../../components/cards/TodoCard';

const TodoBoard = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
            {/*TODO  */}
            <div className='space-y-3 '>
                <div className='flex justify-between p-2 bg-white rounded border-t-4 border-t-[#525FFB] shadow-md'>
                    <p className='font-semibold text-[#525FFB]'>TO-DO <span className='ml-2'>(2)</span></p>
                    <button className='text-white bg-[#82849a] px-2 py-1 rounded-full flex justify-center items-center'>
                        <span><i className='bx bx-plus-medical'></i></span>
                    </button>
                </div>
                <div className='shadow-md bg-[#F2F2F2] border rounded border-[#cad4f1] p-2 grid gap-2'>
                    {/* Todo here */}
                    <div className='w-full bg-white p-3 rounded shadow space-y-2'>
                        <p className='inline-block bg-[#FF3D00] text-white rounded-full text-xs font-semibold px-4 '>HIGH</p>
                        <p className='font-bold text-lg'>Hello Developers</p>
                        <p>
                            {
                                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.".slice(0, 100)
                            }
                        </p>
                        <p className='inline-block bg-[#f08969] text-white rounded-full text-xs font-semibold px-4 '>DUE DATE APRIL,24</p>
                    </div>
                    <TodoCard />
                    <div className='py-3'>
                        <p className='text-gray-300 font-semibold text-center'>Task To be Done</p>
                    </div>
                </div>
            </div>
            {/* Ongoing */}
            <div>
                <div className='space-y-3'>
                    <div className='px-2 py-3 bg-white rounded border-t-4 border-t-[#FF6F00] shadow-md '>
                        <p className='font-semibold text-[#FF6F00]'>ONGOGING <span className='ml-2'>(2)</span></p>
                    </div>
                    <div className='shadow-md bg-[#F2F2F2] border rounded border-[#cad4f1] p-2'>
                        {/* Ongoing here */}
                        <TodoCard />
                        <div className='py-3'>
                            <p className='text-gray-300 font-semibold text-center'>Task Being Active</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* {Completed} */}
            <div>
                <div className='space-y-3'>
                    <div className='px-2 py-3 bg-white rounded border-t-4 border-t-[#b63524] shadow-md'>
                        <p className='font-semibold text-[#b63524]'>COMPLETED <span className='ml-2'>(2)</span></p>
                    </div>
                    <div className='shadow-md bg-[#F2F2F2] border rounded border-[#cad4f1] p-2'>
                        {/* Completed task here */}
                        <TodoCard />
                        <div className='py-3'>
                            <p className='text-gray-300 font-semibold text-center'>Completed Task</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoBoard;