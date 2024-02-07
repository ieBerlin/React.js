import { useEffect, useState } from "react";

export default function ProgressBar({ timer }) {
  const [remainingTime, setRemaining] = useState(timer);
  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining((prevRemainingTime) => prevRemainingTime - 10);
    }, 10);
    return () => {
      clearInterval(interval);
    };
  });
  return <progress value={remainingTime} max={timer} />;
}
