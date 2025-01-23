import Hero from "./Hero"
import Logo from "./Logo"
import About from "./Body"
import Work from "./Work"
import Clients from "./Clients"


const Home = () => {
  return (
    <div className="font-epilogue ">
      <Hero />
      <Logo />
      <About />
      <Work />   
      <Clients />
    </div>
  )
}

export default Home