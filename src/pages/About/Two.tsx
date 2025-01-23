const text = "leading-[2] font-normal xs:float-left md:float-right";
const span = "pt-3 pb-3 pl-2 pr-2";

const Two = () => {
  return (
      <div>
          <div className="flex flex-col gap-5  md:justify-center md:items-center md:pl-[8.5rem] md:pr-[8.5rem] pt-[8rem] pb-[5rem] xs:pl-6 xs:pr-6">
              <div>
                  <p className={`${text} text-[1.5rem]`} >Once upon a time, in a small village by the sea, a young artist named Maya dreamt of painting the world’s most beautiful sunset. Every evening, she would sit by the shore, watching as the sky turned brilliant shades of orange and pink.</p>
              </div>
              <div className="pt-[5rem] flex flex-col gap-5 ">
                  <span className={`${span} bg-[#009379] text-white`}>
                  "Believe you can and you're halfway there. The power of self-belief can turn dreams into reality." – Theodore Roosevelt
                  </span>
                  <span className={`${span} `}>
                  "Success is not about the destination, it’s about the journey. Embrace the challenges, and you'll grow stronger with each step."
                  </span>
                  <span className={`${span} bg-[#009379] text-white`}>
                  "You miss 100% of the shots you don’t take. Courage is stepping forward, even when you’re unsure of the outcome." – Wayne Gretzky
                  </span>
                  <span className={`${span} leading-[2] `}>
                  "In the face of adversity, the brave rise. It is in our darkest moments that our true strength shines the brightest." – Anonymous
                  </span>
                  <span className={`${span} `}>
                  "Life is not measured by the breaths we take, but by the moments that take our breath away. Cherish every experience
                  </span>
              </div>
          </div>
          <div  className="flex flex-col pb-[5rem]  items-center  md:pl-12 md:pr-12 xs:pl-5 xs:pr-5">
          <span className=" block border-b-2 border-gray-300 w-full mt-[5rem] "></span>
          </div>
    </div>
  )
}

export default Two