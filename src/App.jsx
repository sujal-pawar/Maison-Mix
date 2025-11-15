import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Navbar from "./components/Navbar";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main className="h-[100vh]">
      <div className="flex-center py-4">
        <Navbar />
      </div>      
    </main>
  )
}

export default App;
