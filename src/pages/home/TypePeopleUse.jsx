import homeBg2 from '../../assets/home6.jpg'
import AnimatedCircle from '../../components/animatedCircle/AnimatedCircle';
const TypePeopleUse = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${homeBg2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",

            }}
            className="py-20"
        >
            <div className='taskContainer flex justify-between items-center gap-10 flex-wrap'>
                <div className='flex-1 md:w-1/2 w-full'> <AnimatedCircle/> </div>
                <div className='flex-1 w-full'>
                    <p className="text-[#1e1c24] lg:text-[45px] md:text-[40px] text-[32px] xl:text-[50px] font-semibold text-center md:text-left"> What type of people <br /> are using this</p>
                    <p className='text-[#b1aaaa] mt-2 text-justify md:text-left'>Do you waste time organizing sticky notes, searching your email and apps for to-dos, and figuring out what to work on first? Then you need one solution to prioritize your tasks, manage your time, and meet your deadlines.</p>
                </div>

            </div>
            
        </div>
    );
};

export default TypePeopleUse;