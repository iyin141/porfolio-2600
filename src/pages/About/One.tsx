const text = "text-[1rem] font-epilogue font-light  ";

const One = () => {
  return (
        <div>
          <div className="bg-[#F9E6F0] animate-move">
              <div className="flex xs:flex-wrap md:flex-nowrap md:gap-12 xl:gap-[5rem]  md:justify-center md:items-center md:pl-[12.5rem] md:pr-[10.5rem] pt-[8rem] pb-[5rem] xs:pl-6 xs:pr-6">
                  <div className="md:w-[50%] flex flex-col gap-1 ">
                      <img src="assets/nine.png" className="opacity-[45%] xs:w-[25rem] md:w-auto  border-2 border-black" alt="" />
                      <h1 className="font-black pt-6">Akinpelumi Iyinoluwa</h1>
                      <h2 className={`${text}`}>Frontend designer</h2>
                      <h2 className={`${text}`}>Student</h2>
                  </div>
                  <div className="md:w-[100%] md:pt-0 xs:pt-[6rem]">
                      <h1 className="font-bold text-[1.1rem] ">Bio:</h1>
                      <p className={`${text}`}>A 17-year-old full-stack JavaScript and TypeScript developer at Babcock University. Focused on creating dynamic, efficient web applications and always exploring new technologies. Eager to grow in the tech field and take on exciting challenges.</p>
                  </div>
              </div>
          </div>
        </div>
  )
}

export default One