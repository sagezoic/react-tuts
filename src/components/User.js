import { useEffect, useState } from "react";

const User = ({ name, place }) => {
  // props.name

  const [count] = useState(0);

  useEffect(async () => {
    const timer = setInterval(() => {
      console.log("User Functional Job....");
    }, 1000);
    console.log("Use Effect");
    return ()=>{
        clearInterval(timer);
        console.log("Use Effect Returned!");
    }

  }, [count]);

  console.log("render");

  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: {place}</h3>
      <h3>Contact: rakesh@dateze.in</h3>
    </div>
  );
};

export default User;
