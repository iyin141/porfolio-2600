const h1 = "font-bold tracking-wide pt-8 text-[1rem] xs:text-center md:text-left";
const h3 = "tracking-wide pt-6 text-[1rem] xs:text-center md:text-left";
const container = "md:flex xs:flex-wrap md:flex-nowrap md:gap-6 xl:gap-[4.7rem] pt-12";

const content = [
  { src: './src/assets/nine.png', h1: 'Free Bird', h3: 'Lynyrd Skynyrd' },
  { src: './src/assets/ten.png', h1: 'Purple Haze', h3: 'Jimi Hendrix' },
  { src: './src/assets/eleven.png', h1: 'You Really Got Me', h3: 'The Kinks' }
];

const content_2 = [
  { src: './src/assets/thirteen.png', h1: 'American Girl', h3: 'Tom Petty' },
  { src: './src/assets/fourteen.png', h1: 'Whole Lotta Love', h3: 'Led Zeppelin' },
  { src: './src/assets/fifteen.png', h1: 'Under Pressure ', h3: 'Queen' }
];


const Work = () => {
  return (
    <div className=" flex flex-col pb-0  items-center  md:pl-12 md:pr-12 xs:pl-5 xs:pr-5" id="work">
      <h1 className="text-center font-bold tracking-wide pt-10 md:text-[2rem] xs:text-[1rem]">My lastest Work</h1>
      
      <div className={container}>
          {content.map((content) =>
                <div className="pt-10">
                    <img src={`${content.src}`}  alt="" />
                    <h1 className={h1}> {content.h1 }</h1>
                    <h3 className={h3}> { content.h3}</h3>
                </div>
          )}
        
      </div>


      <div className={container}>
            {content_2.map((content_2) =>
                 <div className="pt-10">
                     <img src={`${content_2.src}`}  alt="" />
                     <h1 className={h1}> {content_2.h1 }</h1>
                     <h3 className={h3}> { content_2.h3}</h3>
                  </div>
            )}
      </div>
    </div>
  )
}

export default Work