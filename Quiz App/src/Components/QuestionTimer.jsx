import { useEffect, useState } from "react";
export default function QuestionTimer({ timeout, onTimeout }) {
  const [remaingTime, setRemaingTime] = useState(timeout);
  useEffect(() => {
    console.log("setting timeout");
    const timer = setTimeout(onTimeout, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [onTimeout, timeout]);

  useEffect(() => {
    console.log("setting interval");
    const interval = setInterval(() => {
      setRemaingTime((prevRemaingTime) => prevRemaingTime - 50);
    }, 50);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" value={remaingTime} max={timeout} />;
}
