import { CloudRain, Disc, Gear, Person, Play, SkipForward, Timer, Tree, User, HandPalm } from "phosphor-react";
import { useEffect, useState } from "react";
import { ButtonMinutes } from "./components/ButtonMinutes";

export function App() {
  const [minutesDefaultChoose , setMinutesDefaultChoose] = useState(25);
  const [minutes , setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const timerMinutes = String(minutes).padStart(2,"0")
  const timerSeconds = String(seconds).padStart(2,"0")

  const handleSelectMinutesToCount = (minutes: number) => {
    setMinutesDefaultChoose(minutes);
    setMinutes(minutes);
  }

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if(isActive){
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        } else {
          if (minutes > 0) {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          } else {
            setIsActive(false);
            clearInterval(interval);
          }
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  },[isActive, minutes, seconds])

  const handlePlayPause = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setIsActive(false);
    setMinutes(minutesDefaultChoose);
    setSeconds(0);
  };

  return(
    <div className="h-screen bg-stone-950 justify-center">
      <div className="flex items-center justify-between mx-auto max-w-[70rem] px-12 py-10">
        <div className=" flex items-center gap-2">
          <h2 className="text-sm font-bold text-zinc-100">SELECIONE O TEMPO:</h2>
          <div className="flex h-14 space-x-3 text-zinc-100 bg-zinc-900 px-5 py-3 font-bold font-zinc-100 rounded-full">
            <ButtonMinutes title="25" onClick={() => handleSelectMinutesToCount(25)} isActive={minutes === 25} />
            <ButtonMinutes title="35" onClick={() => handleSelectMinutesToCount(35)} isActive={minutes === 35} />
            <ButtonMinutes title="45" onClick={() => handleSelectMinutesToCount(45)} isActive={minutes === 45} />
            <ButtonMinutes title="50" onClick={() => handleSelectMinutesToCount(50)} isActive={minutes === 50} />
          </div>
        </div>
        <div className="w-52 h-14 space-x-3 bg-zinc-900 px-6  py-3 font-bold  rounded-full">
          <button className="text-zinc-100 active:text-green-500"><Timer size={30}/></button>
          <button className="text-zinc-100 active:text-green-500"><Person size={30}/></button>
          <button className="text-zinc-100 active:text-green-500"><Gear size={30}/></button>
          <button className="text-zinc-100 active:text-green-500"><User size={30}/></button>
        </div>
        </div>
          <div className="flex flex-col gap items-center text-center text-zinc-100 max-w-[50rem] mx-auto py-12 bg-zinc-900 rounded-xl" >
            <h1 className="font-bold text-base">Tempo de foco.</h1>
            <div className=" flex flex-col items-center ">
              <div className="flex gap-3  font-  font-mono font-bold text-9xl my-14 ">
                <span className="bg-zinc-700 px-2 py-1 rounded-md border-none ">{timerMinutes[0]}</span>
                <span className="bg-zinc-700 px-2 py-1 rounded-md border-none ">{timerMinutes[1]}</span>
                <strong>:</strong>
                <span className="bg-zinc-700 px-2 py-1 rounded-md border-none ">{timerSeconds[0]}</span>
                <span className="bg-zinc-700 px-2 py-1 rounded-md border-none">{timerSeconds[1]}</span>
              </div>
              <div className="flex items-center gap-4 mb-12 justify-center  w-full">
                <button 
                  className={`px-32 py-4 rounded-lg flex gap-3 ${isActive ? 'bg-[#AB222E]' : 'bg-[#00875F]'} ease-out duration-200 hover:opacity-75`}
                  onClick={handlePlayPause}
                >
                  {isActive ? (
                    <>
                      <HandPalm className="w-5 h-6"/>
                      Pausar
                    </>
                  ): (
                    <>
                      <Play className="w-5 h-6"/>
                      Começar
                    </>
                  )}
                </button>
                <button 
                  className=" px-10 py-4 rounded-lg bg-zinc-500 hover:bg-zinc-600"
                  onClick={handleReset}
                  title="Pular esse tempo"
                >
                  <SkipForward className="w-5 h-6"/>
                </button>
              </div>
          </div>
          <div>
            <strong>Efeitos sonoros:</strong>
            <div className="flex items-center gap-3 mt-2 -mb-4">
              <button className="border p-3 rounded-full text-zinc-100 active:text-green-500 active:border-green-500"><CloudRain size={26}/></button>
              <button className="border p-3 rounded-full text-zinc-100 active:text-green-500 active:border-green-500"><Tree size={26} /></button>
              <button className="border p-3 rounded-full text-zinc-100 active:text-green-500 active:border-green-500"><Disc size={26}/></button>
            </div>
        </div>
      </div>
    </div>
  )
}
