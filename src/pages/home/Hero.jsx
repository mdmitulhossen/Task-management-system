import bgImage from '../../assets/heroBg.jpg'
import heroImage from '../../assets/hero.png'
import Lottie from 'lottie-react';
import todoAnimation from '../../assets/animation/todo.json'

const Hero = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="w-full lg:h-[650px] md:h-[500px]"
        >
            <div className='taskContainer  h-full  flex gap-4 justify-between items-center flex-wrap md:flex-nowrap'>
                <div className='space-y-4 w-full md:flex-1 pt-28 md:pt-0 flex  flex-col justify-center items-center md:items-start'>
                    <p className='text-[#1E1C24] text-[32px] md:text-[36px] lg:text-[44px] xl:text-[55px] font-bold text-center md:text-left'>Task management <br /> and lists Tool</p>
                    <p className='text-[#b1aaaa] md:text-[16px] lg:text-[20px] text-center md:text-left'>We believe that designing products and services in close partnership with our clients is the only way to have a real impact on their business.</p>
                    <button className='px-5 py-3 font-bold text-sm rounded bg-[#525FFB] text-white hover:bg-[#313ba3] duration-200 '>Let’s Explore</button>
                </div>
                <div className='w-full md:flex-1 relative' >
                    <div className='absolute top-0 right-1/2 translate-x-1/2'>
                        <Lottie
                         style={{width:'300px',height:'300px'}}
                         animationData={todoAnimation} loop={true} />
                    </div>
                    <img className='w-full' src={heroImage} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Hero;