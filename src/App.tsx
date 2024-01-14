import { CloudRain, Disc, Gear, Person, Play, SkipForward, Timer, Tree, User } from "phosphor-react";
import { useState } from "react";

export function App() {
  const [time , setTime] = useState(0)

  function add25Minutes(){
    setTime(time + 25)
  }

  function add35Minutes(){
    setTime(time + 35)
  }

  function add45Minutes(){
    setTime(time + 45)
  }

  function add50Minutes(){
    setTime(time + 55)
  }

  return(
    <div className="h-screen bg-stone-950 justify-center">
      <div className="flex items-center justify-between mx-auto max-w-[70rem] px-12 py-10">
        <div className=" flex items-center gap-2">
          <h2 className="text-sm font-bold text-zinc-100">SELECIONE O TEMPO:</h2>
          <div className="w-52 h-14 space-x-5 text-zinc-100 bg-zinc-900 px-6  py-3 font-bold font-zinc-100 rounded-full">
            <button onClick={add25Minutes} className=" pb-[5px] pt-[3px] px-2 bg-green-500 rounded-full">25</button>
            <button onClick={add35Minutes}>35</button>
            <button onClick={add45Minutes}>45</button>
            <button onClick={add50Minutes}>50</button>
          </div>
        </div>
        <div className="w-52 h-14 space-x-3 bg-zinc-900 px-6  py-3 font-bold  rounded-full">
          <button className="text-green-500"><Timer size={30}/></button>
          <button className="text-zinc-100"><Person size={30}/></button>
          <button className="text-zinc-100"><Gear size={30}/></button>
          <button className="text-zinc-100"><User size={30}/></button>
        </div>
        </div>
          <div className="flex flex-col gap items-center text-center text-zinc-100 max-w-[50rem] mx-auto py-12 bg-zinc-900 rounded-xl" >
            <h1 className="font-bold text-base">Tempo de foco.</h1>
            <div className=" flex flex-col items-center ">
              <div className="flex gap-3  font-  font-mono font-bold text-9xl my-14 ">
                <span className="bg-zinc-700 px-2 py-1 rounded-md border-none ">0</span>
                <span className="bg-zinc-700 px-2 py-1 rounded-md border-none ">0</span>
                <strong>:</strong>
                <span className="bg-zinc-700 px-2 py-1 rounded-md border-none ">0</span>
                <span className="bg-zinc-700 px-2 py-1 rounded-md border-none">0</span>
              </div>
              <div className="flex items-center gap-4 mb-12 justify-center  w-full  ">
                <button className=" px-32 py-4 rounded-lg flex gap-3 bg-green-700 "><Play className="w-5 h-6"/>Começar</button>
                <button className=" px-10 py-4 rounded-lg bg-zinc-500"><SkipForward className="w-5 h-6"/></button>
              </div>
          </div>
          <div>
            <strong>Efeitos sonoros:</strong>
            <div className="flex items-center gap-3 mt-2 -mb-4">
              <button className="border p-3 rounded-full"><CloudRain size={26}/></button>
              <button className="border p-3 rounded-full"><Tree size={26} /></button>
              <button className="border p-3 rounded-full"><Disc size={26}/></button>
            </div>
        </div>
      </div>
    </div>
  )
}
