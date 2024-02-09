
interface Props{
    minutes: number
    seconds: number
}

export function CountdownDisplay({minutes , seconds}:Props){

    const timerMinutes = String(minutes).padStart(2,"0")
    const timerSeconds = String(seconds).padStart(2,"0")

    return(
        <div className="flex gap-3  font-  font-mono font-bold text-9xl my-14 ">
            <span className="bg-zinc-700 px-2 py-1 rounded-md border-none ">{timerMinutes[0]}</span>
            <span className="bg-zinc-700 px-2 py-1 rounded-md border-none ">{timerMinutes[1]}</span>
            <strong>:</strong>
            <span className="bg-zinc-700 px-2 py-1 rounded-md border-none ">{timerSeconds[0]}</span>
            <span className="bg-zinc-700 px-2 py-1 rounded-md border-none">{timerSeconds[1]}</span>
        </div>
    )
}