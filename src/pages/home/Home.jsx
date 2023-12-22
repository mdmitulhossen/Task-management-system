import Hero from "./Hero";
import homeBg1 from '../../assets/home4.jpg'
import serviceicon1 from '../../assets/icons/service1.png'
import serviceicon2 from '../../assets/icons/service2.png'
import serviceicon3 from '../../assets/icons/service3.png'
import TypePeopleUse from "./TypePeopleUse";


const Home = () => {
    return (
        <div>
            <Hero />

            {/* /feature services section */}
            <div
                style={{
                    backgroundImage: `url(${homeBg1})`,
                    // height: "100vh",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",

                }}
                className="p-20"
            >
                <p className="text-[#1e1c24] lg:text-[45px] md:text-[40px] text-[32px] xl:text-[50px] text-center font-semibold">Featured Services</p>
                <div className="flex justify-center md:gap-10 xl:gap-16 gap-5 flex-wrap mt-16">
                    <div className="min-w-[280px] w-[280px] p-5 bg-[#525FFB] shadow-inner rounded flex flex-col justify-center items-center gap-3">
                        <img className="w-[100px]" src={serviceicon1} alt="" />
                        <p className="text-white font-bold text-[24px] text-center">Keep tasks in
                            one place</p>
                        <p className="text-white/60 text-center">Save time, avoid losing work and information, delegate, and track tasks to stay on schedule</p>
                    </div>
                    <div className="min-w-[280px] w-[280px] p-5 bg-[#858ff6] shadow-inner rounded flex flex-col justify-center items-center gap-3 md:mt-10">
                        <img className="w-[100px]" src={serviceicon2} alt="" />
                        <p className="text-white font-bold text-[24px] text-center">Manage tasks in
                            one place</p>
                        <p className="text-white/60 text-center">Save time, avoid losing work and information, delegate, and track tasks to stay on schedule</p>
                    </div>
                    <div className="min-w-[280px] w-[280px] p-5 bg-[#525FFB] shadow-inner rounded flex flex-col justify-center items-center gap-3">
                        <img className="w-[100px]" src={serviceicon3} alt="" />
                        <p className="text-white font-bold text-[24px] text-center">Drag and Drop</p>
                        <p className="text-white/60 text-center">Save time, avoid losing work and information, delegate, and track tasks to stay on schedule</p>
                    </div>
                </div>
            </div>

            {/* using this website */}
            <div>
                <TypePeopleUse/>
            </div>
            
        </div>
    );
};

export default Home;