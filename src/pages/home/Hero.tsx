const typo = "xs:text-center md:text-left";



const Hero = () => {
    return (
        <div className="md:pt-12 md:pl-12 md:pr-12 xs:pt-10 xs:pl-5 xs:pr-5 " >
            <div className="flex  flex-wrap md:flex-nowrap  justify-between">
                <div className="pt-5 animate-move">
                    <h2 className={`${typo} font-bold w-full  text-[1.5rem] `}>
                        <span className="ml-3">Branding</span>
                        <span className="ml-3">|</span>
                        <span className="ml-3">Image making</span>
                    </h2>
                    <h1 className={`${typo} md:text-[4.5rem] xs:text-[2.5rem]  font-bold ml-2.5 pt-10 tracking-wider `}>My personal portfolio</h1>
                    <h4 className={`${typo} ml-3.5 text-gray-500 pt-10  `}> <span className="xs:hidden md:block">Welcome to my portfolio! Explore my work, skills, and projects.</span> <span className="md:hidden xs:block">consectetur adipisicing elit. Ipsum officiis, distinctio placeat nulla quo exercitationem blanditiis asperiores veniam, </span></h4>
                </div>
                <div className="md:pt-0 md:pl-5  xs:pt-10 animate-moveleft">
                <img src="./src/assets/hero.png" style={{width : "120vh"}} alt="" />
                </div>
            </div>
            <span className=" pt-10 block border-b-2 border-gray-300"></span>
        </div>
      );
}

export default Hero