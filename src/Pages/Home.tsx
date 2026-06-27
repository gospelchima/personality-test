import { Link } from "react-router-dom";
import ThemeToggle from "../Components/themeToggle";
import HeroGraphic from "../Components/HeroGrapics";
export default function Home() {
  return (
    <div className="dot-grid h-screen w-full relative">
        <ThemeToggle />
        {/*Theme toggle button (placeholder)*/}
        

      <section className="h-full flex items-center">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-6">
            <p className="eyebrow">
              A 2-minute Self-Assessment Test
            </p>
            <h1 className="display text-[clamp(38px,9vw,84px)]">What if the problem isn't your village people? 👀</h1>
            <p className="text-lg text-gray-600 mb-8">
              Take a quick assessment to discover what's driving your decisions, slowing your growth, and shaping your future.
            </p>
            <div className="flex items-center gap-3">
               <Link
              to="/quiz"
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
                 >
              Start Test
                </Link>
            
                <span className="text-[11.5px] tracking-wide text-gray-400 font-mono">
              No login required
                   </span>
                  </div>
            
                 </div>
             <div className="flex items-center justify-center">
            <HeroGraphic />
          </div>
        </div>
      </section>
    </div>
  );
}