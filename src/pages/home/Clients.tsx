
const content = [
  { src: './src/assets/sixteen.png', h1: 'Product Design', p: 'The product delivers impressive performance with a sleek design that complements its user-friendly interface. It provides exceptional value for money. ' },
  { src: './src/assets/seventeen.png', h1: 'Art Direction', p: 'The product delivers impressive performance with a sleek design that complements its user-friendly interface. It provides exceptional value for money. ' },
  { src: './src/assets/eighteen.png', h1: 'Visual Design', p: 'The product delivers impressive performance with a sleek design that complements its user-friendly interface. It provides exceptional value for money. ' }
];

const Clients = () => {
  return (
      <div className="flex flex-col pb-0  items-center  md:pl-12 md:pr-12 xs:pl-5 xs:pr-5  ">
        <h1 className="font-bold tracking-wide pb-12 pt-[5rem] text-[2rem] text-center">Clients</h1>
        <div className="md:flex xs:flex-wrap md:flex-nowrap md:gap-6 xl:gap-[4.7rem] pt-12 " >
            {content.map((content)  =>    
                <div className="bg-[#FAF5EA] border-2 border-[#FFD285] xs:w-[300px] md:w-auto  p-[2rem]   xs:mt-10 md:mt-0" >
                     <p className="pb-10 font-medium text-[1rem]">{content.p}</p>
                    <div>
                        <div className="flex pt-10">
                            <img src={`${content.src}`} className="w-[50px] h-[50px]" alt="" />
                            <div className="pl-5">
                                <img src="./src/assets/stars.png"  alt="" />
                                <h4 className="pt-3 ml-1 flex flex-col">
                                    <span>Gemma Nolen,</span>
                                    <span>Google</span>
                                </h4>
                            </div>
                        </div>
                    </div>
                    
                </div>
              )}
          </div>
          <span className=" block border-b-2 border-gray-300 w-full mt-[12rem]"></span>
      </div>
  )
}

export default Clients