import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Url } from '../../utils/Url';
import toast from 'react-hot-toast';

const AddForm = () => {
    const queryClient = useQueryClient()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const { data: tasks = [], isLoading } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await axios.get(`${Url}/tasks`)
            return res.data
        }
    })



    // useMutation tanstack query
    const { mutate, isPending } = useMutation({
        mutationFn: async (data) => {
            return await axios.post(`${Url}/tasks`, data)
        },
        onSuccess: (data) => {
            console.log(data)
            toast.success(' Task Added Successfully');
        },
        onError: () => {
            toast.error("Something went wrong ! isn't added")
        },
        onSettled: () => {
            queryClient.invalidateQueries('tasks')
        }
    })


    // handle add
    const onSubmit = (data) => {
        console.log(data)
        mutate(data)
    }

    // if (isLoading || isPending) return <div>Loading...</div>

    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-2 gap-4'>

                <input placeholder='Task Title' className='border p-2 col-span-full rounded' type='text' {...register("title")} />

                <textarea placeholder='Description' className='border p-2 col-span-full rounded'  {...register("description")} />
                {/* {errors.exampleRequired && <span>This field is required
                </span>
                } */}
                <input className='border p-2 rounded' type='date' {...register("date")} />

                <select className='border p-2 rounded' {...register("priority")}>
                    <option value="low">Low</option>
                    <option value="moderate">Moderate</option>
                    <option value="high">High</option>
                </select>
                <div className='col-span-full flex justify-center'>
                    <input className='border border-dashed border-blue-500 rounded py-2 px-4 cursor-pointer text-blue-600 font-semibold' type="submit" value={isPending?'Loading..':'Submit'} />
                    
        </div>
            </form >
        </div >
    );
};

export default AddForm;