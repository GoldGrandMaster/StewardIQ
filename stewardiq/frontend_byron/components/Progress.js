import { useEffect, useRef, useState } from "react";

const ProgressBar = ({ percentage }) => {
  const circleRef = useRef(null);

  useEffect(() => {
    const circle = circleRef.current;
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = offset;
  }, [percentage]);

  return (
    <svg viewBox="0 0 100 100" width="200" height="200">
      <circle
        className="progress-ring__circle"
        ref={circleRef}
        cx="50"
        cy="50"
        r="45"
      />
    </svg>
  );
};

const Progress = () => {
  const [percentage, setPercentage] = useState(30);

  //   // Some function to update percentage
  //   const updatePercentage = () => {
  //     // Example: increment percentage every second
  //     const interval = setInterval(() => {
  //       setPercentage((prevPercentage) => {
  //         if (prevPercentage < 100) {
  //           return prevPercentage + 1;
  //         } else {
  //           clearInterval(interval);
  //           return prevPercentage;
  //         }
  //       });
  //     }, 1000);
  //   };

  //   // Start updating percentage on component mount
  //   useEffect(() => {
  //     updatePercentage();
  //   }, []);

  return (
    <div>
      <h1>Circle Progress Bar</h1>
      <ProgressBar percentage={percentage} />
    </div>
  );
};

export default Progress;
