import { useState } from "react";

function App() {
  let [color, setColor] = useState("initialColor")
  const handleClick = () => {
    const newColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    setColor(newColor); 
    console.log(newColor)
  };
  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className="outline-slate-800 px-4 py-1 rounded-full text-black font-bold text-2xl shadow-lg"  onClick={handleClick} >Random</button>
            <button className="outline-slate-800 px-4 py-1 rounded-full text-red-800 font-bold text-2xl shadow-lg"  onClick={() => setColor("red")}>Red</button>
            <button className="outline-none px-4 py-1 rounded-full text-orange-800 font-bold text-2xl shadow-lg" onClick={() => setColor("orange")}>Orange</button>
            <button className="outline-none px-4 py-1 rounded-full text-cyan-800 font-bold text-2xl shadow-lg" onClick={() => setColor("Cyan")}>Cyan</button>
            <button className="outline-none px-4 py-1 rounded-full text-indigo-800 font-bold text-2xl shadow-lg" onClick={() => setColor("Indigo")}>Indigo</button>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
