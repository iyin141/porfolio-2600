import { useState } from "react";
import Home from "./home/Home";
import About from "./About/About";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

const ul = "md:flex-2  pt-3 md:flex text-center xs:bg-[#EFEFEF]  md:bg-white ";
const span = "border-b-4 border-black border-solid w-[30px] pb-1 block";
const Nav = () => {
  const [display, setdisplay] = useState(true);
  
  function show() {
    setdisplay(true);
  }

  function close() {
    setdisplay(false);
  }


  return (
    <Router>
      <div className=" pt-2 md:pl-10 md:pr-10 xs:pl-5 xs:pr-5  pb-2 md:flex pb-6 ">
      <h1 className="flex-1  flex justify-between">
          <Link to="/">
          <img src="./src/assets/Frame 13@2x.png" alt="" className="w-[150px] h-auto " />
          </Link>
            <button className="xs:block md:hidden w-[30px] overflow-hidden" onClick={() => (display ? close() :show())}>
              <span className={`${span} `}></span>
              <span className={`${span}` }></span>
              <span className={`${span} `}></span>
            </button>
      </h1>

      <ul className={`${ul} ${display ? " xs:hidden" : "xs:block animate-moveout"}`}>
        <li className="md:ml-10 pb-4"><Link to="/About">about</Link></li>
        <li className="md:ml-10 pb-4"><a href="#contact">Contact</a></li>
        <li className="md:ml-10 pb-4"><a href="#work">Work</a></li>
      </ul>
      </div>
      <Routes>
          <Route  path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </Router>
  )
}

export default Nav