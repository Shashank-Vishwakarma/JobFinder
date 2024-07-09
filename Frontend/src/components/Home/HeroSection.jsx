import React from "react";
// import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";

function HeroSection() {
    const details = [
        {
            id: 1,
            title: "1,23,441",
            subTitle: "Live Job",
            // icon: <FaSuitcase />,
        },
        {
            id: 2,
            title: "91220",
            subTitle: "Companies",
            // icon: <FaBuilding />,
        },
        {
            id: 3,
            title: "2,34,200",
            subTitle: "Job Seekers",
            // icon: <FaUsers />,
        },
        {
            id: 4,
            title: "1,03,761",
            subTitle: "Employers",
            // icon: <FaUserPlus />,
        },
    ];
    return (
        <>
            <div className="flex flex-col">
                <div className="flex flex-col flex-1 items-center justify-center">
                    <div className="flex flex-col flex-1 justify-center items-center">
                        <h1 className="font-bold text-xl">Find a job that suits</h1>
                        <h1 className="font-bold text-xl">your interests and skills!</h1>
                        <p className="font-semibold text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                            voluptate repellat modi quidem aliquid eaque ducimus ipsa et,
                            facere mollitia!
                        </p>
                    </div>
                    {/* <div className="w-40 h-20 bg-slate-400">
                        <img src="/heroS.jpg" alt="hero"/>
                    </div> */}
                </div>
                <div className="flex flex-row flex-2 justify-around mt-12 items-center">
                    {details.map((element) => {
                        return (
                            <div className="" key={element.id}>
                                {/* <div className="">{element.icon}</div> */}
                                <div className="text-xl flex flex-col justify-center items-center">
                                    <p className="font-bold">{element.title}</p>
                                    <p className="font-semibold">{element.subTitle}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default HeroSection;