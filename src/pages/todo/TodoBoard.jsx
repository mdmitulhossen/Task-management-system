import React, { useEffect, useState } from 'react';
import TodoCard from '../../components/cards/TodoCard';
import AddForm from '../../components/form/AddForm';
import { useDrop } from 'react-dnd';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Url } from '../../utils/Url';

const TodoBoard = ({ addModalShow }) => {

    const [todotasks, setTodoTasks] = useState([])
    const [ongoingtasks, setOngoingTasks] = useState([])
    const [completedtasks, setCompletedTasks] = useState([])

    const { data: tasks = [], isLoading, isSuccess } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {

            const res = await axios.get(`${Url}/tasks`)

            return res.data
        }
    })

    useEffect(() => {
        if (isSuccess) {
            setTodoTasks(tasks?.filter(task => task.status === 'todo') || [])
            setOngoingTasks(tasks?.filter(task => task.status === 'ongoing') || [])
            setCompletedTasks(tasks?.filter(task => task.status === 'completed') || [])
        }
    }, [tasks, isSuccess])

    console.log(tasks)
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => addItemToDrag(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    const addItemToDrag = (id) => {
        console.log("Drop", id)
    }
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4' ref={drop}>
            {/*TODO  */}
            <div className='space-y-3' >
                <div className='flex justify-between p-2 bg-white rounded border-t-4 border-t-[#525FFB] shadow-md'>
                    <p className='font-semibold text-[#525FFB]'>TO-DO <span className='ml-2'>(2)</span></p>
                    <button onClick={() => addModalShow?.setAddFormShow(true)} className='text-white bg-[#82849a] px-2 py-1 rounded-full flex justify-center items-center'>
                        <span><i className='bx bx-plus-medical'></i></span>
                    </button>
                </div>
                <div className='shadow-md bg-[#F2F2F2] border rounded border-[#cad4f1] p-2 grid gap-2'>
                    {/* Todo here */}
                    {
                        isLoading ? <div>Loading...</div> : todotasks?.map(task => <TodoCard key={task._id} task={task} />)
                    }
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
                    <div className={`shadow-md ${isOver ? 'bg-slate-200' : ''} bg-[#F2F2F2] border rounded border-[#cad4f1] p-2`}
                    >
                        {/* Ongoing here */}
                        {
                        isLoading ? <div>Loading...</div> : ongoingtasks?.map(task => <TodoCard key={task._id} task={task} />)
                    }
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
                    <div className={`shadow-md ${isOver ? 'bg-slate-200' : ''} bg-[#F2F2F2] border rounded border-[#cad4f1] p-2`} >
                        {/* Completed task here */}
                        {
                        isLoading ? <div>Loading...</div> : completedtasks?.map(task => <TodoCard key={task._id} task={task} />)
                    }
                        <div className='py-3'>
                            <p className='text-gray-300 font-semibold text-center'>Completed Task</p>
                        </div>
                    </div>
                </div>
            </div>



            {/* add modal */}


            <div id="default-modal" tabIndex="-1" aria-hidden="true" className={`${addModalShow?.addFormShowModal ? 'block' : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full bg-black/30 md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
                <div className="relative p-4 w-full max-w-2xl max-h-full">

                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-blue-600 dark:text-white flex items-center">
                                <span className='text-3xl mr-2'><i className='bx bx-task' ></i></span>
                                Add Task
                            </h3>
                            <button onClick={() => addModalShow?.setAddFormShow(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>

                        <div className="p-4 md:p-5 space-y-4">
                            <AddForm />

                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default TodoBoard;