import { useEffect } from "react";

function Timer({secondsRemaining,dispatch}) {
    const min=Math.floor(secondsRemaining/60);
    const second=secondsRemaining % 60;
  useEffect(function () {
    const id=setInterval(function(){
        dispatch({type:'tick'})
    },1000)
    return ()=>clearInterval(id);
  }, []);

  return <div className="timer">{min<10?'0':""}{min}:{second<10?'0':""}{second}</div>;
}

export default Timer;
