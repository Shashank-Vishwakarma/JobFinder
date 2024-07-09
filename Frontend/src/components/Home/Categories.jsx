import React from "react";

function Categories()  {
  const categories = [
    {
      id: 1,
      title: "Graphics & Design",
      subTitle: "305 Open Positions",
    //   icon: <MdOutlineDesignServices />,
    },
    {
      id: 2,
      title: "Mobile App Development",
      subTitle: "500 Open Positions",
    //   icon: <TbAppsFilled />,
    },
    {
      id: 3,
      title: "Frontend Web Development",
      subTitle: "200 Open Positions",
    //   icon: <MdOutlineWebhook />,
    },
    {
      id: 4,
      title: "MERN STACK Development",
      subTitle: "1000+ Open Postions",
    //   icon: <FaReact />,
    },
    {
      id: 5,
      title: "Account & Finance",
      subTitle: "150 Open Positions",
    //   icon: <MdAccountBalance />,
    },
    {
      id: 6,
      title: "Artificial Intelligence",
      subTitle: "867 Open Positions",
    //   icon: <GiArtificialIntelligence />,
    },
    {
      id: 7,
      title: "Video Animation",
      subTitle: "50 Open Positions",
    //   icon: <MdOutlineAnimation />,
    },
    {
      id: 8,
      title: "Game Development",
      subTitle: "80 Open Positions",
    //   icon: <IoGameController />,
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-xl font-bold m-4 border-2 border-red-500 p-2 bg-red-400">POPULAR CATEGORIES</h3>
      <div className="grid grid-cols-4 gap-12">
        {categories.map((element) => {
          return (
            <div key={element.id}>
              {/* <div className="icon">{element.icon}</div> */}
              <div className="text-xl">
                <p className="font-bold">{element.title}</p>
                <p>{element.subTitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;