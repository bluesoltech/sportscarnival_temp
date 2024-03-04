import { CountDown } from "./CountDown";
import welcomegif from "./Assets/welcome.gif";
import logo from "./Assets/logo.png";
import { SparklesCore } from "./components/ui/sparkles";

function App() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-screen bg-[#0c0c0c] gap-5">
      {/* <div className="hidden"></div> */}
      <div className="h-[100px] w-[250px] absolute bg-yellow-500 blur-[200px]"></div>
      <div className="w-[80%] md:w-[30%]">
        <img src={logo} className="w-full h-auto" alt="" />
      </div>
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={10}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="">
        <img src={welcomegif} alt="no" />
        <p className="text-gray-400 text-sm text-center uppercase">
          Comming Soon
        </p>
      </div>
      <CountDown />
    </div>
  );
}

export default App;
