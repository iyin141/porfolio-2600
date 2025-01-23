const img = "p-8 text-center";


const content = [
  { src: 'assets/one.png', a: 'https://www.themacron.org/', },
  { src: 'assets/two.png', a: 'google.com' },
  { src: 'assets/three.png', a: 'https://www.apple.com/'},
  { src: 'assets/four.png', a: 'https://dribbble.com/tags/landing-page', },
  { src: 'assets/five.png', a: 'https://www.awwwards.com/', }
];

const Logo = () => {
  return (
      <div className="ml-3 md:pt-12 md:pl-12 md:pr-12 xs:pt-10 xs:pl-5 xs:pr-5">
        <ul className=" flex  flex-wrap md:flex-nowrap  justify-between md:pt-3 xs:pt-1 ">
        {content.map((content) =>
          <li> <a href={content.a}><img src={`${content.src}`} alt="" className={img}/></a></li>
        )}
      </ul>
      <span className=" pt-10 block border-b-2 border-gray-300 w-full"></span>
    </div>
  )
}

export default Logo