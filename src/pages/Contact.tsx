

const Contact = () => {
  return (
      <div className=" md:pl-12 md:pr-12 xs:pl-5 xs:pr-5 pb-5 pt-12  " id="contact">
      <footer>
      <div className="flex justify-around items-start md:flex-nowrap xs:flex-wrap gap-[10rem]">
         <div className=" md:w-[40%] xs:w-[100%]">
          <h1 className=" font-medium   md:text-[2.5rem] xs:text-[3rem] track-wider">Let’s work together</h1>
          <p className="pt-12">Let’s collaborate to create something exceptional. Together, we can combine our strengths and ideas to produce results that surpass expectations. </p>
          <img src="./src/assets/Social_icons.png" className="pt-[5rem]" alt="" />
        </div>
        <div className="md:w-[50%] xs:w-[100%]">
          <form action="" className="flex flex-col gap-4">
            <input type="text" placeholder="Name" className="p-2 w-[100%] text-black bg-[#F3F3F3] " required  />
            <input type="text" placeholder="Email" className="p-2 w-[100%] text-black bg-[#F3F3F3]  " required />
            <textarea name="" placeholder="Type your message here" className="p-2 w-[100%] h-[250px] text-black bg-[#F3F3F3]" required  id=""></textarea>
            <input type="submit" placeholder="Name" onClick={() => alert('noted')} className="pt-5 pb-5 pl-5 pr-5 w-[35%] text-white bg-[#2D2D2D] text-center mt-5 " />
           </form>
          </div>
      </div>
      </footer>     
    </div>
  )
}

export default Contact