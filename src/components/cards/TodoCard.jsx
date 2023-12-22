
const TodoCard = () => {
    return (

        <div className='w-full bg-white p-3 rounded shadow space-y-2'>
            <div className="flex justify-between">
                <div>
                    <p className='bg-[#FF3D00] text-white rounded-full text-xs font-semibold px-4 '>HIGH</p>
                </div>
                <div className="flex gap-2">
                    <button className='text-white bg-[#82849a] px-2 py-1 rounded-full flex justify-center items-center'>
                        <span><i className='bx bx-edit'></i></span>
                    </button>
                    <button className='text-white bg-[#82849a] px-2 py-1 rounded-full flex justify-center items-center'>
                        <span><i className='bx bx-trash'></i></span>
                    </button>
                </div>
            </div>
            <p className='font-bold text-lg'>Hello Developers</p>
            <p>
                {
                    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.".slice(0, 100)
                }
            </p>
            <p className='inline-block bg-[#f08969] text-white rounded-full text-xs font-semibold px-4 '>DUE DATE APRIL,24</p>
        </div>
    );
};

export default TodoCard;