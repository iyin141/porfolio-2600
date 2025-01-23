
const container = "flex flex-col justify-center items-center text-center p-10 w-full md:w-[33.3%]";
const header = "font-bold tracking-wide pt-10 md:text-[1.5rem] xs:text-[1rem]";
const text = "leading-loose pt-10";

const content = [
  { src: './src/assets/six.png', h1: 'Product Design', p: 'Product design blends creativity and problem-solving to create functional,  solutions that align with user needs and goals.' },
  { src: './src/assets/seven.png', h1: 'Art Direction', p: 'Art direction shapes the visual style and mood of a project, aligning design elements like color, typography, and imagery with the message and audience.' },
  { src: './src/assets/eight.png', h1: 'Visual Design', p: 'Visual design enhances aesthetics and usability, using typography, color, and layout to create cohesive designs that improve user experience.' }
];


const About = () => {
  return (
    <div className="pt-10  md:pt-12 md:pl-12 md:pr-10 xs:pt-10 xs:pl-5 xs:pr-5" id="about">
        <div className="flex  xs:flex-wrap md:flex-nowrap  justify-between md:pt-3 xs:pt-1 ">
            {content.map((content)  =>
                    <div className={container}>
                        <img src={`${content.src}`} alt="" className="block w-[150px]" />
                        <h1 className={header}>{content.h1}</h1>
                        <p className={text}>{content.p}</p>
                    </div>
              )}
        </div>
      </div>
  )
}

export default About