import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main className="h-[100vh]">
      <div className="flex-center py-4">
        <Navbar />
      </div>   
      <div>
        <Hero/>
      </div>   
    </main>
  )
}

export default App;
