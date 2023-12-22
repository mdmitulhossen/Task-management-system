import Marquee from "react-fast-marquee";
import icon1 from '../../assets/icons/app-development.png'
import icon2 from '../../assets/icons/banker.png'
import icon3 from '../../assets/icons/meeting.png'
import icon4 from '../../assets/icons/students.png'

const AnimatedCircle = () => {

    return (
        <div className="w-full overflow-hidden">
            <Marquee gradient>
                <div className="p-5 flex flex-col justify-center items-center gap-5 border border-dashed shadow-2xl border-[#525FFB] rounded mr-5">
                   <img className="w-[100px]" src={icon1} alt="" />
                   <p className="text-2xl font-bold text-black">Developer</p>
                </div>
                <div className="p-5 flex flex-col justify-center items-center gap-5 border border-dashed shadow-2xl border-[#525FFB] rounded mr-5">
                   <img className="w-[100px]" src={icon2} alt="" />
                   <p className="text-2xl font-bold text-black">Bankers</p>
                </div>
                <div className="p-5 flex flex-col justify-center items-center gap-5 border border-dashed shadow-2xl border-[#525FFB] rounded mr-5">
                   <img className="w-[100px]" src={icon3} alt="" />
                   <p className="text-2xl font-bold text-black">corporate professionals</p>
                </div>
                <div className="p-5 flex flex-col justify-center items-center gap-5 border border-dashed shadow-2xl border-[#525FFB] rounded">
                   <img className="w-[100px]" src={icon4} alt="" />
                   <p className="text-2xl font-bold text-black">Students</p>
                </div>
            </Marquee>
        </div>
    );
};

export default AnimatedCircle;